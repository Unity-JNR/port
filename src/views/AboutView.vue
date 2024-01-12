<template>
  <div>
    <Navigation />
    <div class="about">
      <h1 id="heading">About</h1>
    </div>
  </div>
    <div class="footer_about">
      <!-- Your other components and content -->
  
      <div v-if="$store.state.about && typeof $store.state.about === 'string' && $store.state.about.trim() !== ''" id="about-text">
        <p id="about-sentence" class=" lead text-center">{{ $store.state.about }}</p>
        
          <img :src="$store.state.aboutimage" alt="profile"  id="about-img" class="img-fluid">
       
      </div>
  
      <div v-else>
     <spinner/>
      </div>
    </div>
  
   
  

    <footers/>
  
 
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
      fetchAbout(){
      this.$store.dispatch('fetchAbout');
    }
   
    },
  
    mounted(){
      this.fetchData
      this.fetchAbout
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
  .footer_about{
    height: 78vh;
  }
  #about-img{
    width: 350px;
    height: 350px;
    
  }
  .img-about{
    display: flex;
    justify-content: center;
    height: 20vh;
    align-items: center;

  }


  
  
  
  
  </style>
  