"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_service_1 = require("./services/config/config.service");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    console.log("portttt", new config_service_1.ConfigService());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('dashboard example')
        .setDescription('The dashboard API description')
        .setVersion('1.0')
        .addTag('dashboard')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(new config_service_1.ConfigService().get('port'));
}
console.log("ConfigService().get('port')", new config_service_1.ConfigService().get('port'));
console.log("mongoDnsDb", new config_service_1.ConfigService().get('mongoDnsDb'));
console.log("process.env.ANALYTIC_SERVICE_PORT", process.env.ANALYTICS_SERVICE_PORT);
bootstrap();
//# sourceMappingURL=main.js.map