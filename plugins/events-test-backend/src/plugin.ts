import {
  coreServices,
  createBackendPlugin,
} from '@backstage/backend-plugin-api';
import { createRouter } from './service/router';
import { eventsServiceRef } from '@backstage/plugin-events-node';

export const THIS_PLUGIN_TOPIC = 'the-topic';

/**
 * eventsTestPlugin backend plugin
 *
 * @public
 */

export const eventsTestPlugin = createBackendPlugin({
  pluginId: 'events-test',
  register(env) {
    env.registerInit({
      deps: {
        httpRouter: coreServices.httpRouter,
        logger: coreServices.logger,
        config: coreServices.rootConfig,
        events: eventsServiceRef,
      },
      async init({ httpRouter, logger, config, events }) {
        events.subscribe({
          id: 'test-subscriber',
          topics: [THIS_PLUGIN_TOPIC],
          onEvent: async params => {
            logger.info(`Received event: ${params.eventPayload}`);
          },
        });
        httpRouter.use(
          await createRouter({
            logger,
            config,
            events,
          }),
        );
        httpRouter.addAuthPolicy({
          path: '/send_message',
          allow: 'unauthenticated',
        });
      },
    });
  },
});
