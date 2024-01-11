<template> 
   <Navigation/>
   <h1 id="heading">Resume/Skills</h1>
   <div v-if="$store.state.education !== '' && $store.state.job !== '' && $store.state.skills.length > 0">

    <div class="container">
     <div class="row">
         <!-- First Card - Education -->
         <div class="col-lg-6">
             <div class="body">
                 <article class="card">
                     <img :src="$store.state.education.url" alt="PHA">
 
                     <div class="card__content | flow">
                         <div class="card__content--container | flow">
                             <h2 class="card__title" id="h2">education</h2>
                             <div class="card__text-center">
                                 <p class="card__description" id="para">
                                     {{ $store.state.education.school }}
                                 </p>
                                 <p class="card__description" id="para">
                                     {{ $store.state.education.year }}
                                 </p>
                             </div>
                         </div>
                     </div>
                 </article>
             </div>
         </div>
 
         <!-- Second Card - Job -->
         <div class="col-lg-6">
             <div class="body">
                 <article class="card text-center">
                     <img :src="$store.state.job.url" alt="Northpine">
 
                     <div class="card__content | flow">
                         <div class="card__content--container | flow">
                             <h2 class="card__title" id="h2">JOB</h2>
                             <div class="card__text-center">
                                 <p class="card__description" id="para">
                                     {{ $store.state.job.work }}
                                 </p>
                                 <p class="card__description" id="para">
                                     {{ $store.state.job.at }}
                                 </p>
                                 <p class="card__description" id="para">
                                     {{ $store.state.job.time }}
                                 </p>
                             </div>
                         </div>
                     </div>
                 </article>
             </div>
         </div>
     </div>
 </div> <!--container-->
 
 <div v-for="skill in $store.state.skills" :key="skill.level" id="placement">
 <div>
   <img :src="skill.img" alt="" id="skillimage">
   <p id="skilltext">{{skill.level}}</p>
 </div>
 
 </div> <!--skill-->
   </div>

   <div v-else>
    <spinner/>
   </div>

   <footers/>
    </template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import { Store } from 'vuex';
import spinner from "@/components/spinner.vue"
import footers from "@/components/footer.vue"


export default {

    components : {
        Navigation,
        spinner,
        footers
    },
    computed: {
    fetcheducation() {
      // Call the fetchData action using dispatch
      this.$store.dispatch('fetcheducation');
    },
    fetchJob(){
       this.$store.dispatch('fetchJob');
    },
    fetchSkills(){
      this.$store.dispatch('fetchSkills');
    }
  },

  mounted(){
    this.fetcheducation
    this.fetchJob
    this.fetchSkills
  }
 
}
import 'bootstrap/dist/js/bootstrap.js'

</script>

<style>
#heading{
    color: white;
}
#heading::first-letter{
color: lawngreen;
}
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat:wght@700&display=swap");

:root {
  /* Colors */
  --brand-color: lawngreen;
  --black: hsl(0, 0%, 0%);
  --white: hsl(0, 0%, 100%);
  /* Fonts */
  --font-title: "Montserrat", sans-serif;
  --font-text: "Lato", sans-serif;
}

/* RESET */

/* Box sizing rules */


/* Remove default margin */
.body,
#h2,
#Para {
  margin: 0;
}

/* GLOBAL STYLES */
.body {
  display: grid;
  place-items: center;
  /* height: 100vh; */
}

#h2 {
  font-size: 2.25rem;
  font-family: var(--font-title);
  color: var(--white);
  line-height: 1.1;
}

#para {
  font-family: var(--font-text);
  font-size: 1rem;
  line-height: 1.5;
  color: var(--white);
}

.flow > * + * {
  margin-top: var(--flow-space, 1em);
}

/* CARD COMPONENT */

.card {
  display: grid;
  place-items: center;
  width: 80vw;
  max-width: 21.875rem;
  height: 28.125rem;
  overflow: hidden;
  border-radius: 0.625rem;
  box-shadow: 0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
}

.card > * {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

.card__background {
  object-fit: cover;
  max-width: 100%;
  height: 100%;
}

.card__content {
  --flow-space: 0.9375rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: flex-end;
  height: 55%;
  padding: 12% 1.25rem 1.875rem;
  background: linear-gradient(
    180deg,
    hsla(0, 0%, 0%, 0) 0%,
    hsla(0, 0%, 0%, 0.3) 10%,
    hsl(0, 0%, 0%) 100%
  );
}

.card__content--container {
  --flow-space: 1.25rem;
}

.card__title {
  position: relative;
  width: fit-content; 
}

.card__title::after {
  content: "";
  position: absolute;
  height: 0.3125rem;
  width: calc(100% + 1.25rem);
  bottom: calc((1.25rem - 0.5rem) * -1);
  left: -1.25rem;
  background-color: var(--brand-color);
}
.card__text-center {
    text-align: center;
}
#skillimage{
    width: 250px;
    height: 250px;
    background-color: white;
  }
  #placement{
    display: inline-block;
    padding: 20px;
    /* margin-bottom: 20px; */
  }
  #skilltext{
    color: white;
    font-weight: 800;
    font-size: medium;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }





@media (any-hover: hover) and (any-pointer: fine) {
  .card__content {
    transform: translateY(62%);
    transition: transform 500ms ease-out;
    transition-delay: 500ms;
  }

  .card__title::after {
    opacity: 0;
    transform: scaleX(0);
    transition: opacity 1000ms ease-in, transform 500ms ease-out;
    transition-delay: 500ms;
    transform-origin: right;
  }

  .card__background {
    transition: transform 500ms ease-in;
  }

  .card__content--container > :not(.card__title),
  .card__button {
    opacity: 0;
    transition: transform 500ms ease-out, opacity 500ms ease-out;
  }

  .card:hover,
  .card:focus-within {
    transform: scale(1.05);
    transition: transform 500ms ease-in;
  }

  .card:hover .card__content,
  .card:focus-within .card__content {
    transform: translateY(0);
    transition: transform 500ms ease-in;
  }

  .card:focus-within .card__content {
    transition-duration: 0ms;
  }

  .card:hover .card__background,
  .card:focus-within .card__background {
    transform: scale(1.3);
  }

  .card:hover .card__content--container > :not(.card__title),
  .card:hover .card__button,
  .card:focus-within .card__content--container > :not(.card__title),
  .card:focus-within .card__button {
    opacity: 1;
    transition: opacity 500ms ease-in;
    transition-delay: 1000ms;
  }

  .card:hover .card__title::after,
  .card:focus-within .card__title::after {
    opacity: 1;
    transform: scaleX(1);
    transform-origin: left;
    transition: opacity 500ms ease-in, transform 500ms ease-in;
    transition-delay: 500ms;
  }
 
}



</style>