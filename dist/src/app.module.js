"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_service_1 = require("./services/config/config.service");
const analytics_schema_1 = require("./schemas/analytics.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongo_config_service_1 = require("./services/config/mongo-config.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRootAsync({
                useClass: mongo_config_service_1.MongoConfigService,
            }),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'Analytics',
                    schema: analytics_schema_1.AnalyticsSchema,
                    collection: 'analytics',
                },
                {
                    name: 'AnalyticsVisitors',
                    schema: analytics_schema_1.AnalyticsVisitorsSchema,
                    collection: 'analytics_visitors',
                },
                {
                    name: 'AnalyticsMousePositionTracker',
                    schema: analytics_schema_1.AnalyticsMousePositionTracker,
                    collection: 'analytics_mouse_position_tracker',
                }
            ]),
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            config_service_1.ConfigService
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map