<template>
  <div id="app">
    <div id="nav">
      <NavBar/>
    </div>

    <router-view style="padding-top: 20px"/>
  </div>
</template>


<script>
  import NavBar from "./layouts/NavBar"

  export default {
    name: "Main",
    components: {
      NavBar
    },
    data() {
      return {}
    },

  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;

  }

</style>
