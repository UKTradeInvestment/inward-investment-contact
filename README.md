# UKTI Contact Form

## Quick start

Install the dependencies and build the project resources
```bash
$ npm install
```

Initiate the server in development mode (Express is used to serve the static resources in development).
```bash
$ npm run dev
```

See the [development documentation](./documentation/DEVELOPMENT.MD) for a complete description of the application and how to maintain and support BRP.


## NPM scripts

Start the application in default mode (production).
We use Nginx to serve our static resources in production and ci.
```bash
$ npm start
```

Start the application with [Nodemon](https://www.npmjs.com/package/nodemon) in development mode.
Debug is switched on and the server restarts when the JS or Sass are recompiled.
```bash
$ npm run dev
```

Run the unit tests
```bash
$ npm run test
```

Run the EcmaScript (ES) linter.  Rules are defined in [.eslintrc](./.eslintrc)
```bash
$ npm run lint
```

Run the jscs style checker. Rules are defined in [.jscsrc.json](./.jscsrc.json)
```bash
$ npm run style
```

Analyse the quality of the codebase (for results - open [./reports/plato/index.html](./reports/plato/index.html))
```bash
$ npm run quality
```

Compile the Sass to CSS
```bash
$ npm run sass
```

_____________________________________________________________

- For details on [Acceptance tests](./acceptance_tests)

- See the [package.json](./package.json) for a full list of scripts.

- Full list of [environment variables](./documentation/ENVIRONMENT_VARIABLES.md)

