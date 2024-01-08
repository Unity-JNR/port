<template>
<div>
  <Navigation />
  <div class="about">
    <h1 id="heading">About</h1>
  </div>
</div>
  <div>
    <!-- Your other components and content -->

    <div v-if="$store.state.about" id="about-text">
      <p id="about-sentence" >{{ $store.state.about }}</p>
    </div>

    <div v-else>
   <spinner/>
    </div>
  </div>

  <div class="footer">

    <footers/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import  spinner  from '@/components/spinner.vue'
import footers from '@/components/footer.vue'



export default {
  components: {
    Navigation,
    spinner,
    footers
  },
 
  computed: {
    fetchData() {
      // Call the fetchData action using dispatch
      this.$store.dispatch('fetchData');
    },
 
  },

  mounted(){
    this.fetchData
  }
}
 
</script>

<style>
#heading {
  color: white;
}

#heading::first-letter {
  color: lawngreen;
}
#about-sentence{
  color: white;
  font-size: large;
  line-height: 1.2;
}
#about-text{
  margin: 50px;
}



</style>
