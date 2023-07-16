import { Document } from 'mongoose';
export interface BrowserInterface {
    readonly appName: string;
    readonly apiKey: string;
    readonly baseUrl: string;
}
export declare class AnalytiqueEventinterface {
    readonly eventName: string;
    readonly eventAction: string;
    readonly eventCategory: string;
    readonly eventPage: string;
    readonly date: string;
    readonly events?: any;
}
export interface AnalyticsInterface extends Document {
    readonly appName: string;
    readonly apiKey: string;
    readonly userAgent: string;
    readonly baseUrl: string;
    readonly data: AnalytiqueEventinterface;
}
export interface AnalyticsVisitorsinterface extends Document {
    readonly appName: string;
    readonly apiKey: string;
    readonly baseUrl: string;
    readonly userAgent: string;
    readonly count: number;
}
export interface MousePositioninterface extends Document {
    readonly x: number;
    readonly y: number;
}
export interface AnalyticsMousePositionTrackerinterface extends Document {
    readonly appName: string;
    readonly apiKey: string;
    readonly baseUrl: string;
    readonly userAgent: string;
    readonly mousePosition: MousePositioninterface;
}
export interface AnalyticsMouseClickTrackerinterface extends Document {
    readonly appName: string;
    readonly apiKey: string;
    readonly baseUrl: string;
    readonly userAgent: string;
    readonly mouseClick: MousePositioninterface;
}
export interface IAnalyticsResponse {
    status: number;
    message: string;
    data: AnalyticsInterface[];
    errors: any;
}
export interface IAnalyticResponse {
    status: number;
    message: string;
    data: AnalyticsInterface;
    errors: any;
}
export interface IAnalyticsVisitorsResponse {
    status: number;
    message: string;
    data: AnalyticsVisitorsinterface[];
    errors: any;
}
export interface IAnalyticsVisitorResponse {
    status: number;
    message: string;
    data: AnalyticsVisitorsinterface;
    errors: any;
}
