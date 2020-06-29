import EToast from './src/main.vue';

EToast.install = function(Vue) {
  Vue.component(EToast.name, EToast);
};

export default EToast;
