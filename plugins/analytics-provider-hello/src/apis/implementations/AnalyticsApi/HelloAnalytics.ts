import {
  AnalyticsApi,
  AnalyticsEvent
} from '@backstage/core-plugin-api';


export class HelloAnalytics implements AnalyticsApi {

  static fromConfig() {
    return new HelloAnalytics();
  }

  async captureEvent(event: AnalyticsEvent) {
    console.warn(`Event [action="${event.action}, subject=${event.subject}]"`);
    console.debug(event);
  }

}