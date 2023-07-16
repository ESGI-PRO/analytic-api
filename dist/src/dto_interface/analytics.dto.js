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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAnalyticsMouseTrackerDto = exports.FindAnalyticsVisitorsDto = exports.FindAnalyticsDtoBy = exports.GetAnalyticsDto = exports.GetAnalyticEventDto = exports.CreateAnalyticsVisitorsDto = exports.CreateAnalyticsDto = exports.AnalytiqueEventDto = void 0;
const class_validator_1 = require("class-validator");
class AnalytiqueEventDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AnalytiqueEventDto.prototype, "eventName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AnalytiqueEventDto.prototype, "eventAction", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AnalytiqueEventDto.prototype, "eventCategory", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AnalytiqueEventDto.prototype, "eventPage", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AnalytiqueEventDto.prototype, "date", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], AnalytiqueEventDto.prototype, "events", void 0);
exports.AnalytiqueEventDto = AnalytiqueEventDto;
class CreateAnalyticsDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAnalyticsDto.prototype, "appName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAnalyticsDto.prototype, "apiKey", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAnalyticsDto.prototype, "userAgent", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAnalyticsDto.prototype, "baseUrl", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", AnalytiqueEventDto)
], CreateAnalyticsDto.prototype, "data", void 0);
exports.CreateAnalyticsDto = CreateAnalyticsDto;
class CreateAnalyticsVisitorsDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAnalyticsVisitorsDto.prototype, "appName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAnalyticsVisitorsDto.prototype, "apiKey", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAnalyticsVisitorsDto.prototype, "baseUrl", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAnalyticsVisitorsDto.prototype, "userAgent", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateAnalyticsVisitorsDto.prototype, "count", void 0);
exports.CreateAnalyticsVisitorsDto = CreateAnalyticsVisitorsDto;
class GetAnalyticEventDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetAnalyticEventDto.prototype, "eventName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetAnalyticEventDto.prototype, "eventAction", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetAnalyticEventDto.prototype, "eventCategory", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetAnalyticEventDto.prototype, "eventPage", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetAnalyticEventDto.prototype, "date", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], GetAnalyticEventDto.prototype, "events", void 0);
exports.GetAnalyticEventDto = GetAnalyticEventDto;
class GetAnalyticsDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetAnalyticsDto.prototype, "appName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetAnalyticsDto.prototype, "apiKey", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetAnalyticsDto.prototype, "userAgent", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetAnalyticsDto.prototype, "baseUrl", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", GetAnalyticEventDto)
], GetAnalyticsDto.prototype, "data", void 0);
exports.GetAnalyticsDto = GetAnalyticsDto;
class FindAnalyticsDtoBy {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindAnalyticsDtoBy.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindAnalyticsDtoBy.prototype, "appName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindAnalyticsDtoBy.prototype, "apiKey", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindAnalyticsDtoBy.prototype, "userAgent", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindAnalyticsDtoBy.prototype, "baseUrl", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", GetAnalyticEventDto)
], FindAnalyticsDtoBy.prototype, "data", void 0);
exports.FindAnalyticsDtoBy = FindAnalyticsDtoBy;
class FindAnalyticsVisitorsDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindAnalyticsVisitorsDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindAnalyticsVisitorsDto.prototype, "appName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindAnalyticsVisitorsDto.prototype, "apiKey", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindAnalyticsVisitorsDto.prototype, "baseUrl", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FindAnalyticsVisitorsDto.prototype, "userAgent", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FindAnalyticsVisitorsDto.prototype, "count", void 0);
exports.FindAnalyticsVisitorsDto = FindAnalyticsVisitorsDto;
class MousePosition {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], MousePosition.prototype, "x", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], MousePosition.prototype, "y", void 0);
class CreateAnalyticsMouseTrackerDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAnalyticsMouseTrackerDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAnalyticsMouseTrackerDto.prototype, "appName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAnalyticsMouseTrackerDto.prototype, "apiKey", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAnalyticsMouseTrackerDto.prototype, "baseUrl", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAnalyticsMouseTrackerDto.prototype, "userAgent", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", MousePosition)
], CreateAnalyticsMouseTrackerDto.prototype, "mousePosition", void 0);
exports.CreateAnalyticsMouseTrackerDto = CreateAnalyticsMouseTrackerDto;
//# sourceMappingURL=analytics.dto.js.map