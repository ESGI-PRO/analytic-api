"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const config_service_1 = require("./config.service");
const mongoose = require("mongoose");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: () => mongoose.connect(new config_service_1.ConfigService().get('mongoDnsDb')),
    },
];
//# sourceMappingURL=database.providers.js.map