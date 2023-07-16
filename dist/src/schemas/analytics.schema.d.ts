import * as mongoose from 'mongoose';
import { AnalyticsInterface, AnalyticsVisitorsinterface, AnalyticsMousePositionTrackerinterface, AnalyticsMouseClickTrackerinterface } from '../dto_interface/analytics.interface';
export declare const AnalyticsSchema: mongoose.Schema<AnalyticsInterface, mongoose.Model<AnalyticsInterface, any, any, any, mongoose.Document<unknown, any, AnalyticsInterface> & AnalyticsInterface & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, AnalyticsInterface, mongoose.Document<unknown, {}, AnalyticsInterface> & AnalyticsInterface & {
    _id: mongoose.Types.ObjectId;
}>;
export declare const AnalyticsVisitorsSchema: mongoose.Schema<AnalyticsVisitorsinterface, mongoose.Model<AnalyticsVisitorsinterface, any, any, any, mongoose.Document<unknown, any, AnalyticsVisitorsinterface> & AnalyticsVisitorsinterface & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, AnalyticsVisitorsinterface, mongoose.Document<unknown, {}, AnalyticsVisitorsinterface> & AnalyticsVisitorsinterface & {
    _id: mongoose.Types.ObjectId;
}>;
export declare const AnalyticsMousePositionTracker: mongoose.Schema<AnalyticsMousePositionTrackerinterface, mongoose.Model<AnalyticsMousePositionTrackerinterface, any, any, any, mongoose.Document<unknown, any, AnalyticsMousePositionTrackerinterface> & AnalyticsMousePositionTrackerinterface & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, AnalyticsMousePositionTrackerinterface, mongoose.Document<unknown, {}, AnalyticsMousePositionTrackerinterface> & AnalyticsMousePositionTrackerinterface & {
    _id: mongoose.Types.ObjectId;
}>;
export declare const AnalyticsMouseClickTracker: mongoose.Schema<AnalyticsMouseClickTrackerinterface, mongoose.Model<AnalyticsMouseClickTrackerinterface, any, any, any, mongoose.Document<unknown, any, AnalyticsMouseClickTrackerinterface> & AnalyticsMouseClickTrackerinterface & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, AnalyticsMouseClickTrackerinterface, mongoose.Document<unknown, {}, AnalyticsMouseClickTrackerinterface> & AnalyticsMouseClickTrackerinterface & {
    _id: mongoose.Types.ObjectId;
}>;
