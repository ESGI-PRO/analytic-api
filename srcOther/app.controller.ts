import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("/createAnalytics")
  @HttpCode(200)
  createAnalytics(@Body() data: any) {
    console.log("data", data)
    return this.appService.createAnalytics(data);
  }

  @Get("/Analytics")
  @HttpCode(200)
  findAllAnalytics() {
    const analytics = this.appService.findAllAnalytics();
    console.log("all analytics", analytics)
    return analytics;
  }

  @Get("/Analytics/:id")
  @HttpCode(200)
  findAnalyticsById(@Body() data: any) {
    const analytics = this.appService.findAnalyticsById(data.id);
    console.log("analytics", analytics)
    return analytics;
  }

  //create visitors
  @Post("/createVisitors")
  @HttpCode(200)
  createVisitors(@Body() data: any) {
    //console.log("data", data)
    return this.appService.createVisitors(data);
  }

  @Get("/AnalyticsVisitors")
  @HttpCode(200)
  findAllAnalyticsVisitors() {
    const analyticsVisitors = this.appService.findAllAnalyticsVisitors();
    console.log("all analyticsVisitors", analyticsVisitors)
    return analyticsVisitors;
  }

  @Get("/AnalyticsVisitors/:appKey")
  @HttpCode(200)
  findAnalyticsVisitorsById(@Body() data: any) {
    console.log("analyticsVisitors", data)
    const analyticsVisitors = this.appService.findAnalyticsVisitorsById(data.appKey);
    return analyticsVisitors;
  }

  @Get("/AnalyticsVisitors/:appName")
  @HttpCode(200)
  findAnalyticsVisitorsByAppName(@Body() data: any) {
    const analyticsVisitors = this.appService.findAnalyticsVisitorsByAppName(data.appName);
    console.log("analyticsVisitors", analyticsVisitors)
    return analyticsVisitors;
  }

  @Post("/AnalyticsVisitors")
  @HttpCode(200)
  updateAnalyticsVisitors(@Body() data: any) {
    console.log("analyticsVisitors----", data)
    const analyticsVisitors = this.appService.updateAnalyticsVisitors(data);
    return analyticsVisitors;
  }
}
