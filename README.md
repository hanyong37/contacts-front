# contacts-front

> A Vue.js front end project for simple contact management by Chen Xi, 2017
> Initialized by `vue init webpack`.
> To run the app need RESTFul backend api
> To change value of Vlue.prototype.contactUrl in main.js to adapt api url,
> for example:
>      Vue.prototype.contactUrl = () => { return 'http://localhost:8089/contacts{/id}' }

## Build Setup

``` bash
# install dependencies
npm install

# running the app at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
