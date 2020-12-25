# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Dependancies

### `node-sass`
If you run into mismatch of sass modules 
Run:
### npm uninstall node-sass
### npm install node-sass@4.14.1

sass-loader v10.0.5 fixes it. Problem is, you might not be using it as a project dependency, but more as a dependency of your dependencies. CRA uses a fixed version, angular-cli locks to node-sass v4 an so on.
The recommendation for now is: if you're installing just node-sass check below workaround (and the note). If you're working on a blank project and you can manage your webpack configuration (not using CRA or a CLI to scaffold your project) install latest sass-loader

### `yarn start`
### `npm run build`

### `npm start`
### `yarn run start`

