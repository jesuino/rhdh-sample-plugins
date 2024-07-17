import { MiddlewareFactory } from '@backstage/backend-defaults/rootHttpRouter';
import { LoggerService } from '@backstage/backend-plugin-api';
import { Config } from '@backstage/config';
import { EventsService } from '@backstage/plugin-events-node';
import express from 'express';
import Router from 'express-promise-router';
import { THIS_PLUGIN_TOPIC } from '../plugin';

export interface RouterOptions {
  logger: LoggerService;
  config: Config;
  events: EventsService
}

export async function createRouter(
  options: RouterOptions,
): Promise<express.Router> {
  const { logger, config, events } = options;

  const router = Router();
  router.use(express.json());

  router.get('/send_message', (req, rep) => {
    const msg = req.query['message'] || 'No message';
    events.publish({
      topic: THIS_PLUGIN_TOPIC,
      eventPayload: msg
    })
    rep.json({ response: `Sending message ${msg}` });
  });

  const middleware = MiddlewareFactory.create({ logger, config });

  router.use(middleware.error());
  return router;
}
