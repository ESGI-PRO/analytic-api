import { Document } from 'mongoose';

export class AnalytiqueEventinterface {
  readonly eventName: string;
  readonly eventAction: string;
  readonly eventCategory: string;
  readonly eventPage: string;
  readonly date: string;
  readonly events?: JSON;
} 


export interface Analyticsinterface extends Document {
  readonly appName: string;
  readonly apiKey: string;
  readonly baseUrl: string;
  readonly data: AnalyticsVisitorsinterface;
}

// export interface CountVisitorsinterface  extends Document {
//   readonly count: number;
//   readonly pageCountLabel: string; 
// }

export interface AnalyticsVisitorsinterface extends Document {
  readonly appName: string;
  readonly apiKey: string;
  readonly baseUrl: string;
  readonly userAgent: string;
  readonly count: number;
}


export interface AnalyticsMousePositionTrackerinterface extends Document {
  readonly appName: string;
  readonly apiKey: string;
  readonly baseUrl: string;
  readonly userAgent: string;
  readonly mousePosition: MousePositioninterface;
}

export interface MousePositioninterface extends Document {
  readonly x: number;
  readonly y: number;
}

export interface AnalyticsMouseClickTrackerinterface extends Document {
  readonly appName: string;
  readonly apiKey: string;
  readonly baseUrl: string;
  readonly userAgent: string;
  readonly mouseClick: MousePositioninterface;
}


