declare module 'node-weather' {
    interface Response {
        daylight: 'D' | 'N';
        daySegment: string;
        description: string;
        skyInfo: string;
        skyDescription: string;
        temperature: string;
        tempatureDesc: string;
        comfort: string;
        highTempature: string;
        lowTempature: string;
        humidity: string;
        dewPoint: string;
        precipitation1H: string;
        precipitation3H: string;
        precipitation6H: string;
        precipitation12H: string;
        precipitation24H: string;
        precipitationProbability: string;
        precipitationDesc: string;
        rainFall: string;
        snowFall: string;
        snowCover: string;
        airInfo: string;
        airDescription: string;
        windSpeed: string;
        windDirection: string;
        windDesc: string;
        windDescShort: string;
        beaufortScale: string;
        beaufortDescription: string;
        uvIndex: string;
        barometerPressure: string;
        barometerTrend: string;
        icon: string;
        iconName: string;
        iconLink: string;
        ageMinutes: number;
        activeAlerts: number;
    }
    
    interface WeatherOptions {
        appID: string;
        appCode: string;
    }

    export default class Weather {
        constructor(options: WeatherOptions);
        public auth: {
            appID: string;
            appCode: string;
            base: string;
            uri: string;
        };

        public now(location: string): Promise<Response>;
    }
}