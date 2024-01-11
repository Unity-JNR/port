<template>
  <div>
    <Navigation/>
    <h1 id="heading">Projects</h1>

    <div v-if="$store.state.project.length > 0">
      <div class="container">
        <div class="row">
          <div v-for="project in $store.state.project" :key="project.title" class="col-lg-4">
            <div class="container-b">
              <div class="card-b">
                <div class="image">
                  <img :src="project.url" />
                </div>
                <div class="content-b">
                  <h3 id="h3">{{ project.title }}</h3>
                  <p id="p">{{ project.decription }}</p>
                  <button class="btn btn-success"><a :href="project.github" target="_blank">GitHub</a></button>
                  <button class="btn btn-success"><a :href="project.vercel" target="_blank">Vercel</a></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> <!--container-->
    </div>

    <div v-else>
      <spinner/>
    </div>
  </div>
<footers></footers>
</template>

 
 <script>
 // @ is an alias to /src
 import Navigation from '@/components/Navigation.vue'
 import  spinner  from '@/components/spinner.vue'
  import footers from '@/components/footer.vue'
//  import 'bootstrap/dist/css/bootstrap.css'
 
 
 export default {
 
     components : {
         Navigation,
         spinner,
         footers
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
     margin-bottom: 50px;
 }
 #heading::first-letter {
    color: lawngreen;
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