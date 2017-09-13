# React Boilerplate

## Setup
After cloning the repository, do `cd project` then `npm install`

## Run
To start dev web server and bundle files run `npm start`
Then visit `localhost/3000`
**insert any email and password (its dummy)**
then `Login`

## Linting
To lint files (*using eslint in this project*), run `npm run lint`

## Git hooks
To enable git hooks (*e.g. running tests and linting, for now just linting*), run:
 ```
 npm run hook-add
 ```
 To disable these hooks, run:
 ```
 npm run hook-remove
 ```
Whenever you do a `git push`, the hook will run first, if it fails, then the git command won't get executed
