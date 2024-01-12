<template>
<div class="container">
  <footer class="footer">
   
    <p class="text-center text-white">&copy {{ getdate() }} Unity Demas</p>
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
