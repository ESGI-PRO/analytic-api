import * as mongoose from 'mongoose';
import { AnalytiqueEventinterface } from './analytics.interface';

export const AnalyticsSchema = new mongoose.Schema({
  appName: String,
  apiKey: String,
  baseUrl: String,
  data: {},
});

export const AnalyticsVisitorsSchema = new mongoose.Schema({
  appName: String,
  apiKey: String,
  baseUrl: String,
  userAgent: String,
  count: {
    type: Number,
  }, 
});

export const AnalyticsMousePositionTracker = new mongoose.Schema({
  appName: String,
  apiKey: String,
  baseUrl: String,
  userAgent: String,
  mousePosition: {
    x: Number,
    y: Number,
  }
})


export const AnalyticsMouseClickTracker = new mongoose.Schema({
  appName: String,
  apiKey: String,
  baseUrl: String,
  userAgent: String,
  mouseClick: {
    x: Number,
    y: Number,
  }
})