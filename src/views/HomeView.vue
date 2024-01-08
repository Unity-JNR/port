<template>
  <div class="home">
   <Navigation/>
  </div>

  <div>
    <h1 id="home">
      {{ $store.state.home }}
    </h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'HomeView',
  components: {
   Navigation
  },
  computed: {
    fetchHome() {
      // Call the fetchData action using dispatch
      this.$store.dispatch('fetchHome');
    },
    // about(){
    //   return this.$store.state.about;
    // }
  },

  mounted(){
    this.fetchHome
  }
}
</script>

<style>
#home {
  color: transparent;
  background: linear-gradient(90deg, transparent, white, transparent);
  background-size: 200% 100%;
  /* animation: shine 5s linear infinite; */
  -webkit-animation: shine 5s linear infinite;
  -webkit-background-clip: text;
}

@keyframes shine {
  0% {
    background-position-x: -100%;
  }
  100% {
    background-position-x: 100%;
  }
}

</style>