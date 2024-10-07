

import { createBackendModule } from '@backstage/backend-plugin-api';
import { scaffolderActionsExtensionPoint } from '@backstage/plugin-scaffolder-node/alpha';
import { createHelloWorldAction } from './actions/hello';


/**
 * scaffolderHelloPlugin backend plugin
 *
 * @public
 */
export const scaffolderHelloPlugin = createBackendModule({
  moduleId: 'scaffolder-backend-hello',
  pluginId: 'scaffolder',
  register(env) {
    env.registerInit({
      deps: {
        scaffolder: scaffolderActionsExtensionPoint,
      },
      async init({
        scaffolder
      }) {
        scaffolder.addActions(createHelloWorldAction());
      },
    });
  },
});
