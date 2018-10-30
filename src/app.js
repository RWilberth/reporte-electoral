import VueResource from 'vue-resource';
Vue.use(VueResource);

//import VueRouter from 'vue-router';
//Vue.use(VueRouter);
import ImportBtn from './components/ImportBtn.vue'

new Vue({
  el: 'app',
  components: {ImportBtn}
});
