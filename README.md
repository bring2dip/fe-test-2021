# FE Test Demo Repo
[![Deployment](https://github.com/bring2dip/fe-test-2021/actions/workflows/deploy.yml/badge.svg?branch=master)](https://github.com/bring2dip/fe-test-2021/actions/workflows/deploy.yml)

## About
This repo is initiated from CRA(`create-react-app`). It uses Airbnb style guide for linting javascript and standard Sass guidelines for linting styles.
It uses `@testing-library/react` for components testing. The source code resides inside `src` directory and all the common components resides in `src/components`.
The entry point of the app is `src/index.js`. It uses bootstrap for styling. Only the required bootstrap scss files are imported. Default variables of bootstrap are overriden in `src/index.scss`.

It uses github actions for deploying to github pages. Everytime changes is pushed to master, the action lints, builds, tests and then finally deploys to github pages.

## Dev Running
`npm run start`

## Linting

**JS Lint**
`npm run lint:js`

**Style Lint**
`npm run lint:style`

## Building

`npm run build`

## Testing

`npm run test`

## Deployment

`npm run deploy`

## Demo URL
Open [https://bring2dip.github.io/fe-test-2021/](https://bring2dip.github.io/fe-test-2021/)


