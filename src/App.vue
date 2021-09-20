<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <br />
    {{ message }}
    <HelloWorld :msg="msg" :is-show="show" />
    <input
      type="text"
      placeholder="text"
      @keydown="blurMethod"
      @keyup="focusMethod"
      @blur="blurMethod"
      @focus="focusMethod"
    />
    <button v-on:click="c = a + b">Click</button>
    <button @click="doThat">Clear</button>
    {{ c }}
    <calc />
    <br />
    2 + 2 = {{ 2 + 2 }}
    <br />
    msg длина = {{ msg.length }}
    <br />
    msg = {{ msg.split().reverse() }}
  </div>
</template>

<script>
import Calc from "./components/Calc.vue";
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    Calc,
  },
  data: () => ({
    message: "Привет, VUE",
    show: true,
    c: 0,
    a: 1,
    b: 1,
    msg: "Welcome to Your Vue.js App",
  }),
  methods: {
    doThat() {
      this.c = 0;
    },
    blurMethod() {
      console.log("blur");
    },
    focusMethod() {
      console.log("focus");
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>