"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const constants_1 = require("./constants");
let AppService = class AppService {
    constructor(analyticsModel, analyticsVisitorsModel) {
        this.analyticsModel = analyticsModel;
        this.analyticsVisitorsModel = analyticsVisitorsModel;
    }
    async createAnalytics(createAnalyticsDto) {
        const createdAnalytics = new this.analyticsModel(createAnalyticsDto);
        return createdAnalytics.save();
    }
    async findAllAnalytics() {
        return this.analyticsModel.find().exec();
    }
    async findAnalyticsById(id) {
        return this.analyticsModel.findById(id);
    }
    async createVisitors(createAnalyticsVisitorsDto) {
        const createdAnalyticsVisitors = new this.analyticsVisitorsModel(createAnalyticsVisitorsDto);
        return createdAnalyticsVisitors.save();
    }
    async findAllAnalyticsVisitors() {
        return this.analyticsVisitorsModel.find().exec();
    }
    async findAnalyticsVisitorsById(appKey) {
        return this.analyticsVisitorsModel.findOne({ appKey: appKey });
    }
    async findAnalyticsVisitorsByAppName(appName) {
        return this.analyticsVisitorsModel.find({ appName: appName }).exec();
    }
    async updateAnalyticsVisitors(data) {
        console.log("updateAnalyticsVisitors", data.apiKey);
        return this.analyticsVisitorsModel.findOneAndUpdate({
            apiKey: data.apiKey
        }, { $inc: { count: 1 },
            AppName: data.appName,
            userAgent: data.userAgent
        }, { new: true, upsert: true });
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.Analytics_MODEL)),
    __param(1, (0, common_1.Inject)(constants_1.AnalyticsVisitors_MODEL)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map