<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <br />
    {{ message }}
    <HelloWorld :msg="msg" :is-show="show" />
    <calc />
    {{ myColletcion }}
    <div v-for="(item, index) in myColletcion" :key="index">
      {{ index }} - {{ item }}
    </div>
  </div>
</template>

<script>
import Calc from './components/Calc.vue'
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Calc
  },
  data: () => ({
    message: 'Привет, VUE',
    show: true,
    c: 0,
    a: 1,
    b: 1,
    msg: 'Welcome to Your Vue.js App',
    myColletcion: [1, 2, 3, 4, 5, 6, 7]
  }),
  methods: {
    doThat () {
      this.c = 0
    },
    blurMethod () {
      console.log('blur')
    },
    focusMethod () {
      console.log('focus')
    }
  }
}
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
