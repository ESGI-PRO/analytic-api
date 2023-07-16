import { Model } from 'mongoose';
import { Analyticsinterface, AnalyticsVisitorsinterface } from './analytics.interface';
import { CreateAnalyticsDto, CreateAnalyticsVisitorsDto } from './analytics.dto';
export declare class AppService {
    private analyticsModel;
    private analyticsVisitorsModel;
    constructor(analyticsModel: Model<Analyticsinterface>, analyticsVisitorsModel: Model<AnalyticsVisitorsinterface>);
    createAnalytics(createAnalyticsDto: CreateAnalyticsDto): Promise<Analyticsinterface>;
    findAllAnalytics(): Promise<Analyticsinterface[]>;
    findAnalyticsById(id: string): Promise<Analyticsinterface>;
    createVisitors(createAnalyticsVisitorsDto: CreateAnalyticsVisitorsDto): Promise<AnalyticsVisitorsinterface>;
    findAllAnalyticsVisitors(): Promise<AnalyticsVisitorsinterface[]>;
    findAnalyticsVisitorsById(appKey: string): Promise<AnalyticsVisitorsinterface>;
    findAnalyticsVisitorsByAppName(appName: string): Promise<AnalyticsVisitorsinterface[]>;
    updateAnalyticsVisitors(data: any): Promise<AnalyticsVisitorsinterface>;
}
