import { AppService } from './app.service';
import { IAnalyticsVisitorResponse, IAnalyticResponse, IAnalyticsResponse, IAnalyticsVisitorsResponse } from './dto_interface/analytics.interface';
import { CreateAnalyticsDto, CreateAnalyticsVisitorsDto, FindAnalyticsDtoBy, FindAnalyticsVisitorsDto } from './dto_interface/analytics.dto';
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
}
