export declare class AnalytiqueEventDto {
    readonly eventName: string;
    readonly eventAction: string;
    readonly eventCategory: string;
    readonly eventPage: string;
    readonly date: string;
    readonly events?: JSON;
}
export declare class CreateAnalyticsDto {
    readonly appName: string;
    readonly apiKey: string;
    readonly baseUrl: string;
    readonly data: AnalytiqueEventDto;
}
export declare class CreateAnalyticsVisitorsDto {
    readonly appName: string;
    readonly apiKey: string;
    readonly baseUrl: string;
    readonly userAgent: string;
}
