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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const faker_1 = require("@faker-js/faker");
let AppService = class AppService {
    constructor(analyticsModel, analyticsVisitorsModel, analyticsMouseTrackerModel) {
        this.analyticsModel = analyticsModel;
        this.analyticsVisitorsModel = analyticsVisitorsModel;
        this.analyticsMouseTrackerModel = analyticsMouseTrackerModel;
    }
    onModuleInit() {
        const cleardb = () => {
            this.analyticsModel.deleteMany({}).exec();
            this.analyticsVisitorsModel.deleteMany({}).exec();
        };
        const seedAlgo = async () => {
            let apps = [];
            for (let i = 0; i < 10; i++) {
                const apiKey = faker_1.faker.string.alphanumeric(25);
                const appName = faker_1.faker.lorem.word();
                const baseUrl = faker_1.faker.internet.url();
                apps = [...apps, {
                        apiKey,
                        appName,
                        baseUrl
                    }];
            }
            for (let i = 0; i < apps.length; i++) {
                const app = apps[i];
                for (let i = 0; i < 20; i++) {
                    const userAgent = faker_1.faker.internet.userAgent();
                    const analyticVisitor = Object.assign(Object.assign({}, app), { userAgent: userAgent, count: Math.floor(Math.random() * 1000) });
                    await this.createVisitors(analyticVisitor);
                }
                const eventCategories = [
                    "User",
                    "Subscription",
                    "Invoice",
                    "Messenger",
                    "Visit",
                    "Bug Reports",
                ];
                const eventActions = {
                    "User": ["Login Account"],
                    "Subscription": ["New Subscription"],
                    "Invoice": ["New Invoice"],
                    "Messenger": ["New Message", "New Conversation"],
                    "Visit": ["New Visit"],
                    "Bug Reports": ["New Bug Report"]
                };
                const continentNames = [
                    "Asia", "Africa", "North America", "South America", "Antarctica", "Europe", "Australia"
                ];
                const dateList = [
                    faker_1.faker.date.past().toISOString(),
                    faker_1.faker.date.past().toISOString(),
                    faker_1.faker.date.past().toISOString(),
                    faker_1.faker.date.past().toISOString(),
                    faker_1.faker.date.past().toISOString(),
                    faker_1.faker.date.past().toISOString(),
                ];
                for (let i = 0; i < eventCategories.length; i++) {
                    const category = eventCategories[i];
                    for (let j = 0; j < eventActions[category].length; j++) {
                        const action = eventActions[category][j];
                        for (let k = 0; k < Math.floor(Math.random() * 10) + 5; k++) {
                            const analyticEvent = {
                                appName: app.appName,
                                apiKey: app.apiKey,
                                baseUrl: app.baseUrl,
                                userAgent: faker_1.faker.internet.userAgent(),
                                data: {
                                    eventName: faker_1.faker.lorem.word(),
                                    eventAction: action,
                                    eventCategory: category,
                                    eventPage: faker_1.faker.internet.url(),
                                    date: dateList[Math.floor(Math.random() * 5)],
                                    events: {
                                        event: faker_1.faker.lorem.word(),
                                        value: faker_1.faker.lorem.word(),
                                        continent: continentNames[Math.floor(Math.random() * 7)],
                                        country: faker_1.faker.location.country()
                                    }
                                }
                            };
                            await this.createAnalytics(analyticEvent);
                        }
                    }
                }
            }
        };
        this.analyticsModel.countDocuments({}).then(async (count) => {
            if (count < 1) {
                await seedAlgo();
            }
        }).catch((err) => {
            console.log(err);
        });
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
        return this.analyticsVisitorsModel.findOneAndUpdate({
            apiKey: data.apiKey
        }, { $inc: { count: 1 },
            appName: data.appName,
            baseUrl: data.baseUrl,
            userAgent: data.userAgent
        }, { new: true, upsert: true });
    }
    async findAnalyticsByParams(params) {
        const { data } = params, rest = __rest(params, ["data"]);
        let options = Object.assign({}, rest);
        if (data) {
            const new_options = Object.keys(data).reduce(function (previous, key) {
                previous[`data.${key}`] = data[`${key}`];
                return previous;
            }, {});
            options = Object.assign(Object.assign({}, options), new_options);
        }
        return this.analyticsModel.find(options).exec();
    }
    async findAnalyticsVisitorsByParams(data) {
        return this.analyticsVisitorsModel.find(data).exec();
    }
    async createMouseTracker(createMouseTrackerDto) {
        const createdMouseTracker = new this.analyticsMouseTrackerModel(createMouseTrackerDto);
        return createdMouseTracker.save();
    }
    async findAllMouseTracker() {
        return this.analyticsMouseTrackerModel.find().exec();
    }
    async findMouseTrackerByParams(appName) {
        return this.analyticsMouseTrackerModel.find({ appName: appName }).exec();
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Analytics')),
    __param(1, (0, mongoose_2.InjectModel)('AnalyticsVisitors')),
    __param(2, (0, mongoose_2.InjectModel)('AnalyticsMousePositionTracker')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model,
        mongoose_1.Model])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map