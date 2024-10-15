# test13-ft

Welcome to the test13-ft plugin!

_This plugin was created through the Software Template. Please ensure you run it within your Backstage directory._


## Getting started

1. Go to the plugin directory and run `yarn install`


### To access the plugin in isolation:

1. Go to the plugin directory

2. Run `yarn start`

This method of serving the plugin provides quicker iteration speed and a faster startup and hot reloads.
It is only meant for local development, and the setup for it can be found inside the [/dev](./dev) directory.


### To access it from the Root of your backstage directory:


1. Add the package in the `packages/app/package.json`

  ```
  "@janus-idp/backstage-plugin-test13-ft": "^0.1.0",
  ```


2. Add Route in `packages/app/src/App.tsx`:

  ```tsx title="packages/app/src/App.tsx"
   /* highlight-add-next-line */
   import { PluginPage } from '@janus-idp/backstage-plugin-test13-ft';

   <Route path="/test13-ft" element={<PluginPage />} />
   ```

3. Add your plugin as a Sidebar Item in `packages/app/src/components/Root/Root.tsx`:

  ```tsx title="packages/app/src/components/Root/Root.tsx"
   /* highlight-add-next-line */
   import { PluginIcon } from '@janus-idp/backstage-plugin-test13-ft';

   export const Root = ({ children }: PropsWithChildren<{}>) => (
    <SidebarPage>
      <Sidebar>
        ...
        <PluginIcon />
        ...
      <Sidebar>
    </SidebarPage>
   );
  ```

4. Set-up the Backstage Proxy. Follow https://backstage.io/docs/integrations/github/locations#token-scopes for creating personal access token

  ```yaml title="app-config.yaml"
  proxy:
  ...
  '/github':
      target: 'https://api.github.com'
      headers:
          Authorization: 'token ${GITHUB_TOKEN}' 
  ```

5. Start your application from the root directory, and then navigate to [/test13-ft](http://localhost:3000/test13-ft).
