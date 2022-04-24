# backend

> created by wilson holland 

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications. 
The current code is setup using [Sequelize](https://sequelize.org/) as the orm. Currently it is configured to use MSSQL but
should work on anything they support after installing the correct libraries.

The models mirror data provided by [OWID](https://github.com/owid/covid-19-data/tree/master/public/data).

## Todo
- create model/service to store saved searches

## Getting Started

Getting up and running is as easy as 1, 2, 3, 4.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/backend
    npm install
    ```

3. Start your app

    ```
    npm start
    ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).
