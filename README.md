# Manufacturing Execution System

This project is used to improve industry workflow and machine management using web stands applications to talk with complex machine systems.

## Components

- `mes-ui` AngularJS application that talks with the server to handle command and retrieve info.
    - [docs](https://github.com/edospadoni/mes/tree/master/client)
- `mes-server` NodeJS application that talks with machine via `SOAP` and exposes `REST API` for the client
    - [docs](https://github.com/edospadoni/mes/tree/master/server)
- `machine` A generic industry machine that exposes `SOAP` server