"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsMouseClickTracker = exports.AnalyticsMousePositionTracker = exports.AnalyticsVisitorsSchema = exports.AnalyticsSchema = void 0;
const mongoose = require("mongoose");
exports.AnalyticsSchema = new mongoose.Schema({
    appName: {
        type: String,
        required: [true, 'App name can not be empty'],
    },
    apiKey: {
        type: String,
        required: [true, 'Api key can not be empty'],
    },
    baseUrl: {
        type: String,
        required: [true, 'Base url can not be empty'],
    },
    userAgent: {
        type: String,
        required: [true, 'User agent can not be empty'],
    },
    data: {
        eventName: {
            type: String,
            required: [true, 'Event name can not be empty'],
        },
        eventAction: {
            type: String,
            required: [true, 'Event action can not be empty'],
        },
        eventCategory: {
            type: String,
            required: [true, 'Event category can not be empty'],
        },
        eventPage: {
            type: String,
            required: [true, 'Event page can not be empty'],
        },
        date: {
            type: String,
            required: [true, 'Date can not be empty'],
        },
        events: {
            type: Object,
            required: [false, ''],
        },
    },
});
exports.AnalyticsVisitorsSchema = new mongoose.Schema({
    appName: {
        type: String,
        required: [true, 'App name can not be empty'],
    },
    apiKey: {
        type: String,
        required: [true, 'Api key can not be empty'],
    },
    baseUrl: {
        type: String,
        required: [true, 'Base url can not be empty'],
    },
    userAgent: {
        type: String,
        required: [true, 'User agent can not be empty'],
    },
    count: {
        type: Number,
        default: 1,
        required: [true, 'Count can not be empty'],
    }
});
exports.AnalyticsMousePositionTracker = new mongoose.Schema({
    appName: {
        type: String,
        required: [true, 'App name can not be empty'],
    },
    apiKey: {
        type: String,
        required: [true, 'Api key can not be empty'],
    },
    baseUrl: {
        type: String,
        required: [true, 'Base url can not be empty'],
    },
    userAgent: {
        type: String,
        required: [true, 'User agent can not be empty'],
    },
    mousePosition: {
        x: {
            type: Number,
            required: [true, 'X can not be empty'],
        },
        y: {
            type: Number,
            required: [true, 'Y can not be empty'],
        },
    }
});
exports.AnalyticsMouseClickTracker = new mongoose.Schema({
    appName: {
        type: String,
        required: [true, 'App name can not be empty'],
    },
    apiKey: {
        type: String,
        required: [true, 'Api key can not be empty'],
    },
    baseUrl: {
        type: String,
        required: [true, 'Base url can not be empty'],
    },
    userAgent: {
        type: String,
        required: [true, 'User agent can not be empty'],
    },
    mouseClick: {
        x: {
            type: Number,
            required: [true, 'X can not be empty'],
        },
        y: {
            type: Number,
            required: [true, 'Y can not be empty'],
        },
    }
});
//# sourceMappingURL=analytics.schema.js.map