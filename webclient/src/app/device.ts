export class Device {
    _id?: any;
    deviceName?: String;
    deviceDescription?: String;
    location?: String;
    latitude?: number;
    longitude?: number;
}

export class ChartData {
    label?: string;
    data?: number[];
}

export class Chart {
    labels?: string[];
    chartsData?: ChartData[];
}

export class marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
