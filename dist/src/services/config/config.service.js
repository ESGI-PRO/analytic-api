"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
class ConfigService {
    constructor() {
        this.envConfig = null;
        this.envConfig = {
            port: process.env.ANALYTICS_SERVICE_PORT,
        };
        this.envConfig.mongoDnsDb = process.env.MONGO_DSN;
        this.envConfig.baseUri = process.env.BASE_URI;
        this.envConfig.gatewayPort = process.env.API_GATEWAY_PORT;
    }
    get(key) {
        return this.envConfig[key];
    }
}
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map