// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import firebase from 'firebase';
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

var firebaseConfig = {
    apiKey: "AIzaSyBz_swn6c1J65lIC_iU2FRXNHJb9CHCmdo",
    authDomain: "vue-firebase-chat-1d461.firebaseapp.com",
    databaseURL: "https://vue-firebase-chat-1d461.firebaseio.com",
    projectId: "vue-firebase-chat-1d461",
    storageBucket: "vue-firebase-chat-1d461.appspot.com",
    messagingSenderId: "734294508397",
    appId: "1:734294508397:web:15d2b008c5d2c1bedad064",
    measurementId: "G-EB79DW2QEK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
