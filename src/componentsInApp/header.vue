<template>
  <div >
    <!--p>{{title}}</p-->
	<router-link to="/">Logo</router-link>
	<router-link to="/">home</router-link>
	<router-link to="/about">about us</router-link>
	<!--router-link to="/partners">our partners</router-link-->
	<router-link to="/contact">contact us</router-link>
  </div>
</template>

<script>
	export default{
		data(){
			return {
				title : 'header' ,
			}
		} , 
	}
</script>


<style>

</style>
