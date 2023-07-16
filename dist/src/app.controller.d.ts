import { AppService } from './app.service';
import { CreateAnalyticsDto, CreateAnalyticsVisitorsDto, FindAnalyticsDtoBy, FindAnalyticsVisitorsDto } from './dto_interface/analytics.dto';
import { IAnalyticResponse, IAnalyticsResponse, IAnalyticsVisitorResponse, IAnalyticsVisitorsResponse } from './dto_interface/analytics.interface';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    createAnalytics(data: CreateAnalyticsDto): Promise<IAnalyticResponse>;
    createVisitors(data: CreateAnalyticsVisitorsDto): Promise<IAnalyticsVisitorResponse>;
    findAllAnalytics(): Promise<IAnalyticsResponse>;
    findAllAnalyticsVisitors(): Promise<IAnalyticsVisitorsResponse>;
    updateAnalyticsVisitors(data: FindAnalyticsVisitorsDto): Promise<IAnalyticsVisitorResponse>;
    findAnalyticsByParams(data: FindAnalyticsDtoBy): Promise<IAnalyticsResponse>;
    findAnalyticsVisitorsByParams(data: FindAnalyticsVisitorsDto): Promise<IAnalyticsVisitorsResponse>;
    creatMousePositionTracker(data: any): Promise<import("./dto_interface/analytics.interface").AnalyticsMousePositionTrackerinterface>;
    findAllMouseTrackingByParams(appName: string): Promise<any[]>;
    findAllMouseTracker(): Promise<import("./dto_interface/analytics.interface").AnalyticsMousePositionTrackerinterface[]>;
}
