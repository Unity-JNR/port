<template>

 <nav>
    <router-link :to="{name: 'home'}">Home</router-link> |
    <router-link :to="{name: 'about'}">About</router-link> |
    <router-link :to="{name: 'resume_skills'}">Resume/Skills</router-link> |
    <router-link :to="{name: 'projects'}">Projects</router-link> |
    <router-link :to="{name: 'Testimonial'}">Testimonial</router-link> |
    <router-link :to="{name: 'contact'}">Contact</router-link> 
 

  </nav>
  <router-view/>

</template>

<script>


export default {
 
}
</script>


