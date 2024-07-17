# events-test

Welcome to the events-test backend plugin!

_This plugin was created through the Backstage CLI_

## Getting started

Run:
```
yarn start
```

Try the endpoint `http://localhost:7007/api/events-test/send_message?message=Hello%20World` and you should see the event sent by the events service being consumed by your subscriber:

```
2024-07-17T15:48:23.475Z events-test info Received event: Hello World
```
