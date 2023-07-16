import { Model } from 'mongoose';
import { AnalyticsInterface, AnalyticsVisitorsinterface, AnalyticsMousePositionTrackerinterface } from './dto_interface/analytics.interface';
import { CreateAnalyticsDto, CreateAnalyticsVisitorsDto, FindAnalyticsDtoBy, FindAnalyticsVisitorsDto, CreateAnalyticsMouseTrackerDto } from './dto_interface/analytics.dto';
export declare class AppService {
    private analyticsModel;
    private analyticsVisitorsModel;
    private analyticsMouseTrackerModel;
    constructor(analyticsModel: Model<AnalyticsInterface>, analyticsVisitorsModel: Model<AnalyticsVisitorsinterface>, analyticsMouseTrackerModel: Model<AnalyticsMousePositionTrackerinterface>);
    onModuleInit(): void;
    createAnalytics(createAnalyticsDto: CreateAnalyticsDto): Promise<AnalyticsInterface>;
    findAllAnalytics(): Promise<AnalyticsInterface[]>;
    findAnalyticsById(id: string): Promise<AnalyticsInterface>;
    createVisitors(createAnalyticsVisitorsDto: CreateAnalyticsVisitorsDto): Promise<AnalyticsVisitorsinterface>;
    findAllAnalyticsVisitors(): Promise<AnalyticsVisitorsinterface[]>;
    findAnalyticsVisitorsById(appKey: string): Promise<AnalyticsVisitorsinterface>;
    findAnalyticsVisitorsByAppName(appName: string): Promise<AnalyticsVisitorsinterface[]>;
    updateAnalyticsVisitors(data: FindAnalyticsVisitorsDto): Promise<AnalyticsVisitorsinterface>;
    findAnalyticsByParams(params: FindAnalyticsDtoBy): Promise<AnalyticsInterface[]>;
    findAnalyticsVisitorsByParams(data: FindAnalyticsVisitorsDto): Promise<AnalyticsVisitorsinterface[]>;
    createMouseTracker(createMouseTrackerDto: CreateAnalyticsMouseTrackerDto): Promise<AnalyticsMousePositionTrackerinterface>;
    findAllMouseTracker(): Promise<AnalyticsMousePositionTrackerinterface[]>;
    findMouseTrackerByParams(appName: string): Promise<AnalyticsMousePositionTrackerinterface[]>;
}
