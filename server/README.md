# mes-server

Back-end component to talk with machine and handle commands via `SOAP`, used by `mes-ui` to interface with.

## Requirements

`nodejs >= 7` installed

## Configuration

Edit `config/config.js` to match your configuration
```js
var configs = {
    MYSQL_DB_NAME: 'YOUR-DB-NAME',
    MYSQL_DB_HOST: 'localhost',
    MYSQL_DB_PORT: 3306,
    MYSQL_DB_USERNAME: 'root',
    MYSQL_DB_PASSWORD: 'root',
    NODEJS_IP: '0.0.0.0',
    NODEJS_PORT: 8080,
    ALLOWED_ORIGIN: 'http://localhost:8000',
    ALLOWED_VERBS: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'],
    SOAP_URL: 'http://SOAP_SERVER_URL/wsdl'
};
```

## Dependencies
Run `npm install` to download dependencies

## Run
Execute `node server.js` to start the program