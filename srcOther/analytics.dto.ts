export class AnalytiqueEventDto {
  readonly eventName: string;
  readonly eventAction: string;
  readonly eventCategory: string;
  readonly eventPage: string;
  readonly date: string;
  readonly events?: JSON;
} 

export class CreateAnalyticsDto {
  readonly appName: string;
  readonly apiKey: string;
  readonly baseUrl: string;
  readonly data: AnalytiqueEventDto;
}

// export  class CountVisitorsDto {
//   readonly count: number;
//   readonly pageCountLabel: string; 
// }

export class CreateAnalyticsVisitorsDto {
  readonly appName: string;
  readonly apiKey: string;
  readonly baseUrl: string;
  readonly userAgent: string;
  //readonly count: number;
}


