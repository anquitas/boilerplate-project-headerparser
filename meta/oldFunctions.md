```js
    const result = {
      ...fccWhoAmI(req),
      ...isSecure(req),
      ...isMobile(req)
    }
```