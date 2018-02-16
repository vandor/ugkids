// Import Vue
import Vue from 'vue';

// Import F7
// import Framework7 from 'framework7';
import Framework7 from 'framework7/dist/framework7.esm.bundle.js';

// Import F7 Vue Plugin
// import Framework7Vue from 'framework7-vue';
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle.js';

// Import F7 Styles
import Framework7Styles from 'framework7/dist/css/framework7.css';

// Import Icons and App Custom Styles
import IconsStyles from './css/icons.css';
import AppStyles from './css/app.css';

// Import Routes
import Routes from './routes.js'

// Import App Component
import App from './app';

// Init F7 Vue Plugin
Vue.use(Framework7Vue, Framework7)

// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  // Init Framework7 by passing parameters here
  framework7: {
    id: 'com.tampaunderground.ugkids', // App bundle ID
    name: 'Framework7', // App name
    theme: 'auto', // Automatic theme detection
    // App routes
    routes: Routes,
    // Enable panel left visibility breakpoint
    panel: {
      leftBreakpoint: 960,
    },
  },
  // Register App Component
  components: {
    app: App
  }
});
