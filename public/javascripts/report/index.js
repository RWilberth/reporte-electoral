
Vue.use(VueChartkick);

 var app = new Vue({
    el: "#app",
    data: {
      chartData: [["Jan", 4], ["Feb", 2], ["Mar", 10], ["Apr", 5], ["May", 3]]
    }
  });