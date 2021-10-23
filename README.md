# api-pathmaker
Structure and send API calls that make sense in JS

## Imagine a scenario...
You need to add an API into your app. There isn't a JS client for it, so you'll have to use messy HTTP requests instead of clean JavaScript code. You could...

Construct a messy fetch function to send your request
```js
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
