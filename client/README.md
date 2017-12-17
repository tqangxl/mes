# mes-ui

Front-end component to talk with `mes-server` to visualize machine models and states.

## Requirements

Run `npm install -g grunt-cli bower` to install project requirements

## Configuration

Edit `app/scripts/config.js` to match your configurations
```js
var config = {
  VERSION: '1.0',
  TITLE: 'MES - Industry 4.0',
  DESCRIPTION: 'Manufacturing Execution System',
  LOGO: 'http://YOUR_SITE/logo/logo.jpg',
  API_URL: 'http://NODE_SERVER_IP:NODE_SERVER_PORT',
  POLLING_INTERVAL: 10000 // ms
};
```

## Build & development

Run `npm install && bower install` to get dependencies

Run `grunt serve` for preview.

## Release

Running `grunt build` to compress the project into static web app files
