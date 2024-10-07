import { TemplateExample } from '@backstage/plugin-scaffolder-node';
import yaml from 'yaml';

export const examples: TemplateExample[] = [
  {
    description: 'Write a Hello World message for a specific name',
    example: yaml.stringify({
      steps: [
        {
          action: 'debug:log',
          id: 'write-hello-for-john',
          name: 'Write "Hello John!" log line',
          input: {
            name: 'John',
          },
        },
      ],
    }),
  },
  {
    description: 'Write a Hello World message',
    example: yaml.stringify({
      steps: [
        {
          action: 'debug:log',
          id: 'write-hello-world',
          name: 'Write "Hello World!" log line',
        },
      ],
    }),
  }
];