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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    createAnalytics(data) {
        console.log("data", data);
        return this.appService.createAnalytics(data);
    }
    findAllAnalytics() {
        const analytics = this.appService.findAllAnalytics();
        console.log("all analytics", analytics);
        return analytics;
    }
    findAnalyticsById(data) {
        const analytics = this.appService.findAnalyticsById(data.id);
        console.log("analytics", analytics);
        return analytics;
    }
    createVisitors(data) {
        return this.appService.createVisitors(data);
    }
    findAllAnalyticsVisitors() {
        const analyticsVisitors = this.appService.findAllAnalyticsVisitors();
        console.log("all analyticsVisitors", analyticsVisitors);
        return analyticsVisitors;
    }
    findAnalyticsVisitorsById(data) {
        console.log("analyticsVisitors", data);
        const analyticsVisitors = this.appService.findAnalyticsVisitorsById(data.appKey);
        return analyticsVisitors;
    }
    findAnalyticsVisitorsByAppName(data) {
        const analyticsVisitors = this.appService.findAnalyticsVisitorsByAppName(data.appName);
        console.log("analyticsVisitors", analyticsVisitors);
        return analyticsVisitors;
    }
    updateAnalyticsVisitors(data) {
        console.log("analyticsVisitors----", data);
        const analyticsVisitors = this.appService.updateAnalyticsVisitors(data);
        return analyticsVisitors;
    }
};
__decorate([
    (0, common_1.Post)("/createAnalytics"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "createAnalytics", null);
__decorate([
    (0, common_1.Get)("/Analytics"),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "findAllAnalytics", null);
__decorate([
    (0, common_1.Get)("/Analytics/:id"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "findAnalyticsById", null);
__decorate([
    (0, common_1.Post)("/createVisitors"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "createVisitors", null);
__decorate([
    (0, common_1.Get)("/AnalyticsVisitors"),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "findAllAnalyticsVisitors", null);
__decorate([
    (0, common_1.Get)("/AnalyticsVisitors/:appKey"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "findAnalyticsVisitorsById", null);
__decorate([
    (0, common_1.Get)("/AnalyticsVisitors/:appName"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "findAnalyticsVisitorsByAppName", null);
__decorate([
    (0, common_1.Post)("/AnalyticsVisitors"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "updateAnalyticsVisitors", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map