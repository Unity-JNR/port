<template>
  <div>
    <Navigation />
    <div class="about">
      <h1 id="heading">About</h1>
    </div>
  </div>
  <div class="footer_about">
    <!-- Your other components and content -->
    <div class="side">

      <div v-if="$store.state.about && typeof $store.state.about === 'string' && $store.state.about.trim() !== ''" id="about-text">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <p id="about-sentence" class=" lead text-center">{{ $store.state.about }}</p>
            </div>

            <div class="col-lg-6">
              <img :src="$store.state.aboutimage" alt="profile" id="about-img" class="img-fluid">
            </div>
          </div>
        </div>
      </div>

      <div v-else>
        <spinner />
      </div>
    </div>
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
  },

  mounted() {
    this.fetchData;
    this.fetchAbout;
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

#about-sentence {
  color: white;
  font-size: large;
  line-height: 1.2;
}

#about-text {
  margin: 50px;
}

.footer_about {
  height: 78vh;
}

#about-img {
  width: 350px;
  height: 350px;
}

.img-about {
  display: flex;
  justify-content: center;
  height: 20vh;
  align-items: center;
}

/* Media Queries */
@media screen and (max-width: 992px) {
  /* Medium devices (tablets, 768px and up) */
  #about-text {
    margin: 20px;
  }

  #about-img {
    width: 50%;
    height: auto;
    transform: translateY(-90px);
  }
}

@media screen and (max-width: 768px) {
  /* Small devices (tablets, 768px and up) */
  #about-text {
    margin: 10px;
    
  }
}

@media screen and (max-width: 300px) {
  /* Extra small devices (phones, 576px and up) */
  #about-text {
    margin: 5px;
  }
  #about-img {
    width: 100%;
    height: auto;
  transform: translateY(-50px);
  }
}

</style>
