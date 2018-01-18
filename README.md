# Mpritter - A simple micro blogging app
 * menggunakan Express Js untuk api server.
 * menggunakan mongoDB dan monggose untuk database serta ODM
 * Vue.js untuk front-end.

# SERVER 
 ## How to install
 ``` sh
 $ npm install
 ```
## basic route
|  Route |  HTTP  | Description |
| -------| ------ | --------- |
| / | GET | Login page |


## list tweets api route

| Route | HTTP | Description |
| ----- | ---- | -----------|
| /api/tweets | GET | get all tweets|
| /api/tweets | POST | post some tweets |
| /api/tweets/:id | DELETE | delete specific tweet |
| /api/tweets/hastag | GET | get tweet with hastag(#) |

## list user api route
| Route | HTTP | Description |
| ----- | ---- | -----------|
| /api/users/signup | POST | signup user |
| /api/users/signin | POST | signin user |
| /users | GET | get all users (admin only) |
|/users/id | DELETE | delete spesific user (admin only) |
| /users/:id/profile | GET | get profile user |
| /users/:id/profile | PUT | edit profile user |

## usage 
``` sh
$ npm run dev
$ npm start
```
## ACCESS API VIA
`http://localhost:3000/api` .







