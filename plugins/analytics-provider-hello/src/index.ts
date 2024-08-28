
import {
    analyticsApiRef,
    createApiFactory
} from '@backstage/core-plugin-api';
import { HelloAnalytics } from './apis/implementations/AnalyticsApi';

export * from './apis/implementations/AnalyticsApi';

export const HelloAnalyticsApi = createApiFactory({
    api: analyticsApiRef,
    deps: {},
    factory: () =>
        HelloAnalytics.fromConfig(),
});