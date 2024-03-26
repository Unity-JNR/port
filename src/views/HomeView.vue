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
  /* color: transparent; */
  /* background: linear-gradient(90deg, transparent, white, transparent); */
  background-size: 200% 100%;
  color: aliceblue  ;
  font-family: Lora;
  letter-spacing: 10px;
  stroke: #ffa5d8;
  font-size: 150px;
  font-weight: 700;
  stroke-width: 3;
 
  animation: textAnimate 5s infinite alternate;


}

.img{
  
  /* border-radius: 50%; */
  width: 500px;
  height: 500px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  

}

  .footers{
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}



@keyframes textAnimate {
  0% {
    stroke-dasharray: 0 50%;
    stroke-dashoffset: 20%;
    fill: hsl(189, 68%, 75%);
  }

  100% {
    stroke-dasharray: 50% 0;
    stroke-dashoffset: -20%;
    fill: hsla(189, 68%, 75%, 0%);
  }
}






</style>