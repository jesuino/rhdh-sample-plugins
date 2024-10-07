
import { createTemplateAction } from '@backstage/plugin-scaffolder-node';
import { examples } from './hello.examples'

const id = 'message:hello';

/**
 * Writes a Hello World message into the log
 *
 * @remarks
 *
 * This task is a sample of an exported action as a Dynamic Plugin to run on Red Hat Developer Hub (RHDH)
 *
 * @public
 */
export function createHelloWorldAction() {
  return createTemplateAction<{ name?: string }>({
    id,
    description:
      'Writes Hello to the user or Hello World in the logs.',
    examples,
    schema: {
      input: {
        type: 'object',
        properties: {
          name: {
            title: 'Name to receive a "Hello"',
            type: 'string',
          }
        },
      },
    },
    supportsDryRun: true,
    async handler(ctx) {
      const name = ctx.input?.name || "World";
      ctx.logger.info(`Hello ${name}`);
    },
  });
}