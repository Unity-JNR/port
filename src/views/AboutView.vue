<template>
  <div>
    <Navigation />
    <div class="about">
      <h1 id="heading">About</h1>
    </div>
  </div>

  
  <div v-if="$store.state.about && typeof $store.state.about === 'string' && $store.state.about.trim() !== ''" id="about-text">
    <div class="container">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <p class="lead text-center">{{ $store.state.about }}</p>
            <p>Date of birth: {{ $store.state.dob }}</p>
            <p>Passion: {{ $store.state.passions }}</p>
            <ul class="list-group">
             <h1 id="heading">Hobbies:</h1>
              <li class="list-group-item">Play games</li>
              <li class="list-group-item">Watching Anime</li>
              <li class="list-group-item">Spending time with family and friends</li>
              <li class="list-group-item">Coding</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <img :src="$store.state.aboutimage" alt="profile" id="about-img" class="img-fluid">
          </div>
        </div>
      </div>
      </div>

      <div v-else>
        <spinner />
      </div>
  <footers />
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import spinner from '@/components/spinner.vue';
import footers from '@/components/footer.vue';

export default {
  components: {
    Navigation,
    spinner,
    footers,
  },

  computed: {
    fetchData() {
      this.$store.dispatch('fetchData');
    },
    fetchAbout() {
      this.$store.dispatch('fetchAbout');
    },
    fetchDOB(){
      this.$store.dispatch('fetchDOB');
    },
    fetchpassions(){
      this.$store.dispatch('fetchpassions');
    }
  },

  mounted() {
    this.fetchData;
    this.fetchAbout;
    this.fetchDOB;
    this.fetchpassions;
  },
};
</script>

<style>
#heading {
  color: white;
}

#heading::first-letter {
  color: lawngreen;
}
#heading::first-letter {
  color: lawngreen;
}

.about {
  margin-top: 20px;
}

.container-fluid {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#about-text {
  margin-top: 20px;
  color: beige;
}

#about-img {
  margin-top: 0px;
  width: 300px; /* Adjust as needed */
  height: auto; /* Maintain aspect ratio */
}

</style>
