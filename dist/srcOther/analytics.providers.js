"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsProviders = void 0;
const analytics_schema_1 = require("./analytics.schema");
const constants_1 = require("./constants");
exports.AnalyticsProviders = [
    {
        provide: constants_1.Analytics_MODEL,
        useFactory: (connection) => connection.model('Analytics', analytics_schema_1.AnalyticsSchema),
        inject: [constants_1.DATABASE_CONNECTION],
    },
    {
        provide: constants_1.AnalyticsVisitors_MODEL,
        useFactory: (connection) => connection.model('AnalyticsVisitors', analytics_schema_1.AnalyticsVisitorsSchema),
        inject: [constants_1.DATABASE_CONNECTION],
    }
];
//# sourceMappingURL=analytics.providers.js.map