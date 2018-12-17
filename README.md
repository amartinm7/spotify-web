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

- https://developer.spotify.com
- https://developer.spotify.com/dashboard/login
- https://vuikit.js.org/guide/introduction
- https://developer.spotify.com/documentation/web-api/reference/artists/

## Testing server via curl

```
curl -X "GET" "https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n?market=ES&fields=items(added_by.id%2Ctrack(name%2Chref%2Calbum(name%2Chref)))" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer "
```

# TIPS

## closing ports
```
sudo lsof -i :4000
sudo kill -9 PID
```

### Starting & Stopping express.js

- https://www.npmjs.com/package/@godaddy/terminus
