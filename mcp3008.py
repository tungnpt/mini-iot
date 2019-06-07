import sys
import spidev
import time
import RPi.GPIO as GPIO

import socketio

sio = socketio.Client()
deviceID = '5cf4b489e9858541e00da792'
deviceID2 = '5cf4b525e9858541e00da7bd'

sio.connect('http://172.16.6.73:6969')
##sio.connect('http://project.mini.iot.herokuapp.com')

@sio.on('rr')
def my_event_handler(data):
    print(data)
    
GPIO.setmode(GPIO.BCM)
GPIO.setup(21, GPIO.OUT)
GPIO.output(21, False)

@sio.on('led')
def my_event_handler(data):
    if(data == "True"):
        GPIO.output(21, True)
    if(data == "False"):
        GPIO.output(21, False)

spi = spidev.SpiDev()
spi.open(0, 0)

def readadc(adcnum):
    if adcnum > 7 or adcnum < 0:
        return -1
    readout = spi.xfer2([1, 8 + adcnum << 4, 0])
    adcout = ((readout[1] & 3) << 8) + readout[2]
    return adcout

def raw2temp(raw):
    millivolts = raw * (3.3 * 100 / 1023.0)
    tempk = millivolts
    tempc = millivolts - 273.15
    tempf = tempc * 9.0 / 5.0 +32
    return (tempk, tempc, tempf)

def raw2humiper(raw):
    percent = int(round((raw*100)/1024))
    return percent

sensor0pin = 0
sensor1pin = 1

try:
    while True:
        rawva10 = readadc(sensor0pin)
        rawva11 = readadc(sensor1pin)
        
        print(
                'Moisture Sensor:',
                'raw =',
                rawva11,
                'Humidity:',
                100-raw2humiper(rawva11),
                '%'
                )
        
        (temp_kelvins, tempcelsius, tempfahrenheit) = raw2temp(rawva10)
        print (
            'LM335 Sensor0:',
            'raw=',
            rawva10,
            'Kelvins='
            '{0:.1f}'.format(temp_kelvins),
            'Celsius=',
            '{0:.1f}'.format(tempcelsius),
            'Fahrenheit='
            '{0:.1f}'.format(tempfahrenheit),
            )
        sio.emit('send-data', {'device': deviceID, 'temperature': '{0:.1f}'.format(tempcelsius), 'humidity': 100-raw2humiper(rawva11)})
        sio.emit('send-data', {'device': deviceID2, 'temperature': '{0:.1f}'.format(tempcelsius), 'humidity': 100-raw2humiper(rawva11)})
        time.sleep(1)

except KeyboardInterrupt:
    spi.close()
    sys.exit(0)
    
