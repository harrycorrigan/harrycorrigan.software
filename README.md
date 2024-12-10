# My portfolio source code.

This is a NodeJS application running my portfolio.

The frontend is React (Vite) + Typescript, with a NodeJS + Express backend.

## Run Instructions

# Installation
To install the server, use 

```bash
    npm run install-all
```

this installs dependencies for _both_ the server & client, normal npm install will only do so for the server

# Develop mode
To run _just_ the react app, you can use 

```bash
npm run dev
```

which will call the same function in the client/ directory

# Serve mode
To run the express server alongside the react app, you can use 

```bash
npm build && npm serve
```

which will construct the React app and run the server.