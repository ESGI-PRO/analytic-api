import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from './services/config/config.service';
import { AnalyticsSchema, AnalyticsVisitorsSchema, AnalyticsMousePositionTracker } from './schemas/analytics.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoConfigService } from './services/config/mongo-config.service';
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongoConfigService,
    }),
    MongooseModule.forFeature([
      {
        name: 'Analytics',
        schema: AnalyticsSchema,
        collection: 'analytics',
      },
      {
        name: 'AnalyticsVisitors',
        schema: AnalyticsVisitorsSchema,
        collection: 'analytics_visitors',
      },
      {
        name: 'AnalyticsMousePositionTracker',
        schema: AnalyticsMousePositionTracker,
        collection: 'analytics_mouse_position_tracker',
      }
    ]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ConfigService
  ],
})
export class AppModule {}
