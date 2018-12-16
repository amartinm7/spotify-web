![Spotify](./_media/spotify-logo.png)

# spotify-web

Spotifiy web integration for playing with the music.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Testing server via curl

```
curl -X GET -i "http://localhost:4000/" -H "Content-type: application/json" -H "Accept: application/json"
curl -X POST http://localhost:8080/graphql -d '{"query": "query demo { helloWorld }" }' -H 'Content-Type: application/json'
```

# TIPS

## closing ports
```
sudo lsof -i :4000
sudo kill -9 PID
```

### Starting & Stopping express.js

- https://www.npmjs.com/package/@godaddy/terminus
