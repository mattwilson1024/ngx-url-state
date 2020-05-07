# ngx-url-state

This directory holds the source for the ngx-url-state library (projects/ngx-url-state) and a basic test app which is useful during development.


## Developing

1. Important: Before running up the demo, you need to build the library. You can build the lib and watch for changes by running: `yarn dev:lib`
2. In a second terminal, start the demo app with `yarn start`

## Building for deployment

1. Build the library for production: `yarn build`

## Tests

This guide proved valuable in setting up Jest for both the library and demo projects: https://medium.com/angular-in-depth/migrate-your-angular-library-to-jest-faba9579591a

To run:
`yarn test:lib` / `yarn test:demo`

To run in watch mode:
`yarn test:lib:watch` / `yarn test:demo:watch`
