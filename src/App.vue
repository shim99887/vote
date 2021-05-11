<template>
  <v-app>
      <AppBar/>
    <v-container>
      <router-view/>
    </v-container>
  </v-app>
</template>
<script>
import AppBar from "./components/appbar/AppBar"
export default {
  name: "App",
  components: {
    AppBar,
  },
  created(){

  }
};
</script>
<style>
body {
  background: #f6f9fc;
  overflow: hidden;
  height: 100%;
  width: 100%;
  /*position: fixed;*/
}
:root {
  font-size: 10px;
}
</style>