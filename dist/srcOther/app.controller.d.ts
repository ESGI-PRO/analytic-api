import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    createAnalytics(data: any): Promise<import("./analytics.interface").Analyticsinterface>;
    findAllAnalytics(): Promise<import("./analytics.interface").Analyticsinterface[]>;
    findAnalyticsById(data: any): Promise<import("./analytics.interface").Analyticsinterface>;
    createVisitors(data: any): Promise<import("./analytics.interface").AnalyticsVisitorsinterface>;
    findAllAnalyticsVisitors(): Promise<import("./analytics.interface").AnalyticsVisitorsinterface[]>;
    findAnalyticsVisitorsById(data: any): Promise<import("./analytics.interface").AnalyticsVisitorsinterface>;
    findAnalyticsVisitorsByAppName(data: any): Promise<import("./analytics.interface").AnalyticsVisitorsinterface[]>;
    updateAnalyticsVisitors(data: any): Promise<import("./analytics.interface").AnalyticsVisitorsinterface>;
}
