<template>
<div>
<footer class="footer">
&copy {{ getdate() }} Unity Demas
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
