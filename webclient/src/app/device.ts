export class Device {
    _id?: any;
    deviceName: String;
    deviceDescription: String;
    location: String;
    latitude: Number;
    longitude: Number
}

export class ChartData {
    label?: string;
    data?: number[];
}

export class Chart {
    labels?: string[];
    chartsData?: ChartData[];
}