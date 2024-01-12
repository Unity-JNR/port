<template>
<div class="container">
  <footer class="py-5 my-5">
   
    <p class="text-center text-muted">&copy {{ getdate() }} Unity Demas</p>
  </footer>
</div>


</template>


<script>


export default {
 data(){
    return{
        date : new Date()

    }
},
methods: {
getdate(){
    return this.date.getFullYear()
}
}
 }
</script>

<style>
footer{
    color: white;
}


</style>
