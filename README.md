# API Pathmaker
Structure and send API calls that make sense in JS

![NPM version](https://img.shields.io/npm/v/@api-blueprints/pathmaker)

## Imagine a scenario...
You need to add an API into your app. There isn't a JS client for it, so you'll have to use messy HTTP requests instead of clean JavaScript code. You could...

Construct a messy fetch function to send your request
```js
import fetch from 'node-fetch';

fetch('https://cat-photos-api.xyz/find_cat_photo', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer UwU-uwu-oWo-0W0',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    limit: 100
  })
}).then(response => await response.json()).then(json => {
  // now you can do something
});

fetch('https://cat-photos-api.xyz/upload_cat_photo', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer UwU-uwu-oWo-0W0',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    url: 'https://my-cat-photos.uwucdn.com/my-cat-photo-no-238'
  })
}).then(response => await response.json()).then(json => {
  // now you can do something
});
```

OR construct a clean API template that works with as many API calls as you need
```js
import API from '@api-blueprints/pathmaker';

const api = new API({
    headers: {
        'Authorization': 'Bearer UwU-uwu-oWo-0W0',
        'Content-Type': 'application/json'
    },
    baseUrl: 'https://cat-photos-api.xyz'
});

api.find_cat_photo.post({ limit: 100 }).then(data => { /* do something */ });
api.upload_cat_photo.post({ url: 'https://my-cat-photos.uwucdn.com/my-cat-photo-no-238' }).then(data => { /* do something */ });
```


## Documentation
### default class API ( object )
 - `object.headers`: Default headers. Common ones include Authorization and Content-Type
 - `object.baseUrl`: Base URL for this API. Should not have a `/` at the end
 - `object.inputParser`: A function to convert the input into a server-readable format. Defaults to JSON.stringify
 - `object.outputParser`: A function to parse the server output. Defaults to JSON.parse

#### Constructing a URL

To construct a URL, start by accessing a property on the API instance. Each property acts as a path. To access `<baseURL>/boo/bar`, use `api.foo.bar`. To specify an unknown parameter, use the JavaScript `[]` syntax. For example, you can access `<baseURL>/documents/:documentNumber`, use `api.documents[documentNumber]`.

#### Sending a request

To send a request that you've constructed, just run `.get()`, `.post()`, `.patch()`, etc. API Pathmaker works with GET, HEAD, POST, PUT, DELETE, PATCH, and OPTIONS requests. These are all async functions where you can pass in data to send to the API. You can also get the URL of the request without sending it by accessing the `._url` property.

#### URLs containing HTTP method names

You might have noticed that if you try to access `<baseURL>/route/get` by using `api.route.get.get()`, it won't work. You can work around this by using `api.route._absolute('get')`.