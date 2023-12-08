let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!",
    };
  },
  beforeCreate() {
    console.log("before create function called", this.message);
  },
  created() {
    console.log("create function called", this.message);
  },
  beforeMount() {
    console.log("before mount function called", this.$el);
  },
  mounted() {
    console.log("mounted function called", this.$el);
  },
  beforeUpdate() {
    console.log("before update function called");
  },
  updated() {
    console.log("updated function called");
  },
  beforeUnmount() {
    console.log("before unmount function called");
  },
  unmounted() {
    console.log("unmounted function called");
  },
});

vm.mount("#app");

// setTimeout(() => {
//   vm.mount("#app");
// }, 3000);
