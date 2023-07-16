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
const microservices_1 = require("@nestjs/microservices");
const analytics_dto_1 = require("./dto_interface/analytics.dto");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    async createAnalytics(data) {
        let result;
        try {
            const analytics = await this.appService.createAnalytics(data);
            result = {
                status: common_1.HttpStatus.CREATED,
                message: 'create_analytics_success',
                data: analytics,
                errors: null,
            };
        }
        catch (err) {
            result = {
                status: common_1.HttpStatus.NOT_FOUND,
                message: 'create_analytics_failed',
                data: null,
                errors: err,
            };
        }
        return result;
    }
    async createVisitors(data) {
        let result;
        const analyticVisitor = await this.appService.createVisitors(data);
        try {
            result = {
                status: common_1.HttpStatus.CREATED,
                message: 'create_analytics_visitors_success',
                data: analyticVisitor,
                errors: null,
            };
        }
        catch (err) {
            result = {
                status: common_1.HttpStatus.NOT_FOUND,
                message: 'create_analytics_visitors_failed',
                data: null,
                errors: err,
            };
        }
        return result;
    }
    async findAllAnalytics() {
        let result;
        try {
            const analytics = await this.appService.findAllAnalytics();
            result = {
                status: common_1.HttpStatus.OK,
                message: 'get_all_analytics_success',
                data: analytics,
                errors: null,
            };
        }
        catch (err) {
            result = {
                status: common_1.HttpStatus.NOT_FOUND,
                message: 'get_all_analytics_failed',
                data: null,
                errors: err,
            };
        }
        return result;
    }
    async findAllAnalyticsVisitors() {
        let result;
        try {
            const analyticsVisitors = await this.appService.findAllAnalyticsVisitors();
            result = {
                status: common_1.HttpStatus.OK,
                message: 'get_all_analytic_visitor_success',
                data: analyticsVisitors,
                errors: null,
            };
        }
        catch (err) {
            result = {
                status: common_1.HttpStatus.NOT_FOUND,
                message: 'get_all_analytic_visitor_failed',
                data: null,
                errors: err,
            };
        }
        return result;
    }
    async updateAnalyticsVisitors(data) {
        let result;
        if (data) {
            try {
                const analyticsVisitor = await this.appService.updateAnalyticsVisitors(data);
                result = {
                    status: common_1.HttpStatus.OK,
                    message: 'update_analytic_visitor_by_params_success',
                    data: analyticsVisitor,
                    errors: null,
                };
            }
            catch (err) {
                result = {
                    status: common_1.HttpStatus.BAD_REQUEST,
                    message: 'update_analytic_visitor_by_params_bad_request',
                    data: null,
                    errors: err,
                };
            }
            return result;
        }
    }
    async findAnalyticsByParams(data) {
        let result;
        if (data) {
            try {
                const analytics = await this.appService.findAnalyticsByParams(data);
                result = {
                    status: common_1.HttpStatus.OK,
                    message: 'get_analytics_by_params_success',
                    data: analytics,
                    errors: null,
                };
            }
            catch (err) {
                result = {
                    status: common_1.HttpStatus.BAD_REQUEST,
                    message: 'get_analytics_by_params_bad_request',
                    data: null,
                    errors: err,
                };
            }
            return result;
        }
    }
    async findAnalyticsVisitorsByParams(data) {
        let result;
        if (data) {
            try {
                const analyticsVisitors = await this.appService.findAnalyticsVisitorsByParams(data);
                result = {
                    status: common_1.HttpStatus.OK,
                    message: 'get_analytics_visitors_by_params_success',
                    data: analyticsVisitors,
                    errors: null,
                };
            }
            catch (err) {
                result = {
                    status: common_1.HttpStatus.BAD_REQUEST,
                    message: 'get_analytics__visitors_by_params_bad_request',
                    data: null,
                    errors: null,
                };
            }
            return result;
        }
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('create_analytics'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [analytics_dto_1.CreateAnalyticsDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createAnalytics", null);
__decorate([
    (0, microservices_1.MessagePattern)('create_visitors'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [analytics_dto_1.CreateAnalyticsVisitorsDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createVisitors", null);
__decorate([
    (0, microservices_1.MessagePattern)('find_all_analytics'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "findAllAnalytics", null);
__decorate([
    (0, microservices_1.MessagePattern)('find_all_analytics_visitors'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "findAllAnalyticsVisitors", null);
__decorate([
    (0, microservices_1.MessagePattern)('update_analytics_visitors'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [analytics_dto_1.FindAnalyticsVisitorsDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "updateAnalyticsVisitors", null);
__decorate([
    (0, microservices_1.MessagePattern)('find_analytics_by_params'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [analytics_dto_1.FindAnalyticsDtoBy]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "findAnalyticsByParams", null);
__decorate([
    (0, microservices_1.MessagePattern)('find_analytics_visitors_by_params'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [analytics_dto_1.FindAnalyticsVisitorsDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "findAnalyticsVisitorsByParams", null);
AppController = __decorate([
    (0, common_1.Controller)('analytics'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller-cornelius.js.map