# Vaccine vs Virus

A Snake vs. Block style game, with a pandemic twist.


## Running Tests
Tests are written using the Jest framework. To install and run tests:

```sh
npm run test
```

## Running in Development
Modular JavaScript cannot simply access separate script files from your local file system. In order to access these files you need to run a local web server hosting the files in the repository. To do this:

If you haven't already, install:
```sh
npm install --global http-server
```
or
```sh
brew install http-server
```

And from the root directory of this repository run:
```sh
http-server -c-1
```
Open your browser and navigate to `http://localhost:8080/src/index.html`


