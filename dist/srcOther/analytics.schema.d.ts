import * as mongoose from 'mongoose';
export declare const AnalyticsSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    appName?: string;
    apiKey?: string;
    baseUrl?: string;
    data?: any;
}, mongoose.Document<unknown, {}, {
    appName?: string;
    apiKey?: string;
    baseUrl?: string;
    data?: any;
}> & {
    appName?: string;
    apiKey?: string;
    baseUrl?: string;
    data?: any;
} & {
    _id: mongoose.Types.ObjectId;
}>;
export declare const AnalyticsVisitorsSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    appName?: string;
    apiKey?: string;
    userAgent?: string;
    baseUrl?: string;
    count?: number;
}, mongoose.Document<unknown, {}, {
    appName?: string;
    apiKey?: string;
    userAgent?: string;
    baseUrl?: string;
    count?: number;
}> & {
    appName?: string;
    apiKey?: string;
    userAgent?: string;
    baseUrl?: string;
    count?: number;
} & {
    _id: mongoose.Types.ObjectId;
}>;
export declare const AnalyticsMousePositionTracker: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    appName?: string;
    apiKey?: string;
    userAgent?: string;
    baseUrl?: string;
    mousePosition?: {
        x?: number;
        y?: number;
    };
}, mongoose.Document<unknown, {}, {
    appName?: string;
    apiKey?: string;
    userAgent?: string;
    baseUrl?: string;
    mousePosition?: {
        x?: number;
        y?: number;
    };
}> & {
    appName?: string;
    apiKey?: string;
    userAgent?: string;
    baseUrl?: string;
    mousePosition?: {
        x?: number;
        y?: number;
    };
} & {
    _id: mongoose.Types.ObjectId;
}>;
export declare const AnalyticsMouseClickTracker: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    appName?: string;
    apiKey?: string;
    userAgent?: string;
    baseUrl?: string;
    mouseClick?: {
        x?: number;
        y?: number;
    };
}, mongoose.Document<unknown, {}, {
    appName?: string;
    apiKey?: string;
    userAgent?: string;
    baseUrl?: string;
    mouseClick?: {
        x?: number;
        y?: number;
    };
}> & {
    appName?: string;
    apiKey?: string;
    userAgent?: string;
    baseUrl?: string;
    mouseClick?: {
        x?: number;
        y?: number;
    };
} & {
    _id: mongoose.Types.ObjectId;
}>;
