<template>
  <div id="app">
    <vk-button>MyButton</vk-button>
    <vk-icon icon="heart"></vk-icon>
    <vk-card>
      <vk-button>...</vk-button>
    </vk-card>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
