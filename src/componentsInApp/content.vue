<template>
  <div >
    <!--p>{{title}}</p-->
	<!-- show here routed Component -->
	<router-view></router-view>
  </div>
</template>

<script>
	
	export default{
		data(){
			return {
				title : 'content' ,
			}
		} ,
		components : {
			//
		} ,
	}
</script>


<style>

</style>