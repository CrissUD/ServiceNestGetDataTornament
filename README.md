<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
  
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Description

Servicio Nest encargado de la obtención de datos de entidades y elementos dentro de una **Base de datos no relacional montada en Firebase** que intervienen en la participación de un torneo de fútbol (Cuadrangular).
Obtiene:
* **Información general de torneos**.
* **Listado de todos los equipos participantes**.
* **Información especifica de un equipo**.
* **Listado de todos los partidos**.
* **Información especifica de un partido**.

## Installation

```bash
$ npm install
```

# Pruebas

## Puerto
```bash
port: 3005
```

## Rutas y envíos

## Obtener Información Torneo

```bash
get('localhost:3005/api/tournament/:idTournament')
```
<div align='center'>
    <img  src='https://i.imgur.com/PsVz1vW.png'>
    <p>Resultado obtención de datos del torneo</p>
</div>

## Obtener listado de equipos

```bash
get('localhost:3005/api/team/:idTournament')
```
<div align='center'>
    <img  src='https://i.imgur.com/d0po6F2.png'>
    <p>Resultado obtención del listado de equipos</p>
</div>

## Obtener datos de un equipo

```bash
get('localhost:3005/api/team/:idTournament/:idTeam')
```
<div align='center'>
    <img  src='https://i.imgur.com/VZK9dk1.png'>
    <p>Resultado obtención datos de un equipo</p>
</div>

## Obtener listado de partidos

```bash
get('localhost:3005/api/match/:idTournament')
```
<div align='center'>
    <img  src='https://i.imgur.com/6yPPnpQ.png'>
    <p>Resultado obtención del listado de partidos</p>
</div>

## Obtener datos de un partido

```bash
get('localhost:3005/api/match/:idTournament/:idMatch')
```
<div align='center'>
    <img  src='https://i.imgur.com/XyXYTxf.png'>
    <p>Resultado obtención datos de un partido</p>
</div>

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

  Nest is [MIT licensed](LICENSE).
