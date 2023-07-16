export declare class AnalytiqueEventDto {
    readonly eventName: string;
    readonly eventAction: string;
    readonly eventCategory: string;
    readonly eventPage: string;
    readonly date: string;
    readonly events?: any;
}
export declare class CreateAnalyticsDto {
    readonly appName: string;
    readonly apiKey: string;
    readonly userAgent: string;
    readonly baseUrl: string;
    readonly data: AnalytiqueEventDto;
}
export declare class CreateAnalyticsVisitorsDto {
    readonly appName: string;
    readonly apiKey: string;
    readonly baseUrl: string;
    readonly userAgent: string;
    readonly count: number;
}
export declare class GetAnalyticEventDto {
    readonly eventName: string;
    readonly eventAction: string;
    readonly eventCategory: string;
    readonly eventPage: string;
    readonly date: string;
    readonly events?: any;
}
export declare class GetAnalyticsDto {
    readonly appName: string;
    readonly apiKey: string;
    readonly userAgent: string;
    readonly baseUrl: string;
    readonly data: GetAnalyticEventDto;
}
export declare class FindAnalyticsDtoBy {
    readonly id: string;
    readonly appName: string;
    readonly apiKey: string;
    readonly userAgent: string;
    readonly baseUrl: string;
    readonly data: GetAnalyticEventDto;
}
export declare class FindAnalyticsVisitorsDto {
    readonly id: string;
    readonly appName: string;
    readonly apiKey: string;
    readonly baseUrl: string;
    readonly userAgent: string;
    readonly count: number;
}
declare class MousePosition {
    readonly x: number;
    readonly y: number;
}
export declare class CreateAnalyticsMouseTrackerDto {
    readonly id: string;
    readonly appName: string;
    readonly apiKey: string;
    readonly baseUrl: string;
    readonly userAgent: string;
    readonly mousePosition: MousePosition;
}
export {};
