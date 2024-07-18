import {
  coreServices,
  createBackendPlugin,
} from '@backstage/backend-plugin-api';
import { createRouter } from './service/router';

/**
 * test-from-templatePlugin backend plugin
 *
 * @public
 */
export const plugin = createBackendPlugin({
  pluginId: 'test-from-template',
  register(env) {
    env.registerInit({
      deps: {
        httpRouter: coreServices.httpRouter,
        logger: coreServices.logger,
        config: coreServices.rootConfig,
        httpAuth: coreServices.httpAuth,
        discovery: coreServices.discovery,
      },
      async init({ httpRouter, logger, config, httpAuth, discovery }) {
        logger.info('test-from-template plugin :: init');
        httpRouter.use(
          await createRouter({
            logger,
            config,
            httpAuth,
            discovery
          }),
        );
        httpRouter.addAuthPolicy({
          path: '/health',
          allow: 'unauthenticated',
        });
      },
    });
  },
});
