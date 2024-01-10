<template> 
    <Navigation/>
    <h1 id="heading">Projects</h1>

    <div class="container">
        <div class="row">
      <div v-for="projects in $store.state.project" :key="projects.title" class="col-lg-4">
  
      <div class="container-b">
        <div class="card-b">
          <div class="image">
            <img :src="projects.url" />
          </div>
          <div class="content-b">
            <h3 id="h3">{{ projects.title }}</h3>
            <p id="p">{{ projects.decription }}</p>
            <button class="btn btn-success"><a :href="projects.github" target="_blank">GitHub</a></button>
            <button class="btn btn-success"><a :href="projects.vercel" target="_blank">Vercel</a></button>
          </div>
        </div>
      </div>
   
  </div>
</div>

    </div>

 


  
 </template>
 
 <script>
 // @ is an alias to /src
 import Navigation from '@/components/Navigation.vue'
//  import 'bootstrap/dist/css/bootstrap.css'
 
 
 export default {
 
     components : {
         Navigation
     },
     computed: {
        fetchProject() {
             // Call the fetchData action using dispatch
             this.$store.dispatch('fetchProject');
         },
     },
 
     mounted() {
         this.fetchProject; // Add parentheses to invoke the method
     }
  
 }
//  import 'bootstrap/dist/js/bootstrap.js'
 </script>
 
 <style scoped>
 #heading{
     color: white;
 }
 #P{
    color: black !important ;
 }
 #h3{
    color: black;
 }
 
 a{
    text-decoration: none;
    color: white;
 }

.container-b {
  position : relative;
  display : flex;
  align-items : center;
  justify-content : center;
  flex-warp : warp;
  padding : 30px;  
}
button{
    margin: 2px;
}
.container-b .card-b {
  position: relative;
  max-width : 300px;
  height : 215px;  
  background-color : #fff;
  margin : 30px 10px;
  padding : 20px 15px;
  
  display : flex;
  flex-direction : column;
  box-shadow : 0 5px 20px rgba(0,0,0,0.5);
  transition : 0.3s ease-in-out;
  border-radius : 15px;
}
.container-b .card-b:hover {
  height : 320px;    
}


.container-b .card-b .image {
  position : relative;
  width : 260px;
  height : 260px;
  
  top : -40%;
  left: 8px;
  box-shadow : 0 5px 20px rgba(0,0,0,0.2);
  z-index : 1;
}

.container-b .card-b .image img {
  max-width : 100%;
  border-radius : 15px;
}

.container-b .card-b .content-b {
  position : relative;
  top : -140px;
  padding : 10px 15px;
  color : #111;
  text-align : center;
  
  visibility : hidden;
  opacity : 0;
  transition : 0.3s ease-in-out;
    
}

.container-b .card-b:hover .content-b {
   margin-top : 30px;
   visibility : visible;
   opacity : 1;
   transition-delay: 0.2s;
  
}
 </style>