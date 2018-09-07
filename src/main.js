// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import withSiteStore from "./components/withSiteStore";
import Vuex from "vuex";
Vue.config.productionTip = false;
import { config1 } from "./module/config1";

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    base: config1
  }
});
/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  store,
  render: h => h(withSiteStore, { props: { component: App } })
});
