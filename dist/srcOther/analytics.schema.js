"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsMouseClickTracker = exports.AnalyticsMousePositionTracker = exports.AnalyticsVisitorsSchema = exports.AnalyticsSchema = void 0;
const mongoose = require("mongoose");
exports.AnalyticsSchema = new mongoose.Schema({
    appName: String,
    apiKey: String,
    baseUrl: String,
    data: {},
});
exports.AnalyticsVisitorsSchema = new mongoose.Schema({
    appName: String,
    apiKey: String,
    baseUrl: String,
    userAgent: String,
    count: {
        type: Number,
    },
});
exports.AnalyticsMousePositionTracker = new mongoose.Schema({
    appName: String,
    apiKey: String,
    baseUrl: String,
    userAgent: String,
    mousePosition: {
        x: Number,
        y: Number,
    }
});
exports.AnalyticsMouseClickTracker = new mongoose.Schema({
    appName: String,
    apiKey: String,
    baseUrl: String,
    userAgent: String,
    mouseClick: {
        x: Number,
        y: Number,
    }
});
//# sourceMappingURL=analytics.schema.js.map