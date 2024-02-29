/*
 * Copyright 2022 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Config } from "@backstage/config";
import { AnalyticsApi, AnalyticsEvent } from "@backstage/core-plugin-api";

/**
 * Very Simple Analytics Provider.
 * @public
 */
export class TestAnalytics implements AnalyticsApi {
  private readonly showEvent: boolean;

  private constructor(options: { showEvent: boolean }) {
    const { showEvent } = options;
    this.showEvent = showEvent;
  }

  static fromConfig(config: Config) {
    const showEvent =
      config.getOptionalBoolean("app.testAnalytics.showEvent") ?? true;

    return new TestAnalytics({ showEvent });
  }

  async captureEvent(event: AnalyticsEvent) {
    console.log("[TEST ANALYTICS] Received event. Context: " + event.context);
    if (this.showEvent) {
      console.log(event);
    }
  }
}
