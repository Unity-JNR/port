<template>
<RouterView/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  overflow-y: hidden;
}

nav {
  padding: 30px;
  color: white;
  text-align: center;
  /* position: static; */
}

nav a {
  font-weight: bold;
  color: white;
  padding: 5px;
  

}

nav a.router-link-exact-active {
  color: lawngreen;
}

body{
  background-color: black !important;;
}
</style>
