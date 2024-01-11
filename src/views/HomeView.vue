<template>
  <div class="home">
   <Navigation/>
  </div>

  <div class="footers">

    <div v-if="$store.state.home.length > 0 &&  $store.state.profile!==''">
      
      <div>
        <h1 id="home">
          {{ $store.state.home }}
        </h1>
        <img :src="$store.state.profile" alt="profile">
      </div>
    </div>
    
    <div v-else>
      <spinner/>
    </div>
  </div>

<footers/>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import footers from '@/components/footer.vue'
import spinner from '@/components/spinner.vue'

export default {
  name: 'HomeView',
  components: {
   Navigation,
   footers,
   spinner
  },
  computed: {
    fetchHome() {
      // Call the fetchData action using dispatch
      this.$store.dispatch('fetchHome');
    },
    fetchProfile(){
      this.$store.dispatch('fetchProfile');
    }
   
  },

  mounted(){
    this.fetchHome
    this.fetchProfile
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


  .footers{
  height: 90vh;
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