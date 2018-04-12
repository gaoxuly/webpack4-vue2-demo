import Vue from 'vue';
import App from './app.vue';
import router from './routes.js';

import './assets/styles/base.css';

// const root = document.createElement('div');
// document.body.appendChild(root);

new Vue({
    router,
    el: "#appIndex",
    render: (h) => h(App)
})