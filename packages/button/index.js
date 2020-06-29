import EButton from './src/main.vue';

EButton.install = function(Vue) {
  Vue.component(EButton.name, EButton);
};

export default EButton;
