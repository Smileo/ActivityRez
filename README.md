# ActivityRez test project
## Tech
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework
* [sequelizejs] - NodeJS ORM
* [epilogue] - REST layer for sequelizejs
* [fabricjs] - JS canvas library
* [Gulp] - the streaming build system
* [Twitter Bootstrap] - UI boilerplate for modern web apps
* [Jade] - template system

## Installation

```sh
$ git clone [git-repo-url] ActivityRez
$ cd ActivityRez
$ npm install
$ bower install
$ # create database "activityrez_development" in your enviroment
$ mysql -uroot -p -e "CREATE USER 'activityrez'@'localhost' IDENTIFIED BY 'SD64498(*&aasdAS';"
$ mysql -uroot -p -e "CREATE DATABASE activityrez_development;"
$ mysql -uroot -p -e "GRANT ALL ON activityrez_development.* TO 'activityrez'@'localhost';"
$ mysql -uroot -p activityrez_development < ./app/data/sql/activityrez_development.sql
$ gulp
```

### Todos

 - Migrations
 - ACL (for REST layer)
 - Validation (for REST layer)
 - Write Tests

----

**Free Software, Hell Yeah!**

[//]: #()
   [git-repo-url]: <https://github.com/smileo/ActivityRez.git>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [Express]: <http://expressjs.com>
   [Gulp]: <http://gulpjs.com>
   [SequelizeJS]: <sequelizejs.com>
   [epilogue]: <https://github.com/dchester/epilogue>
   [fabricjs]: <https://fabricjs.com>
   [jade]: <https://jade-lang.com>
