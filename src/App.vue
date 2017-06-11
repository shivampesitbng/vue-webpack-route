<template>
  <div id="app">
    <headerC></headerC>
	<contentC></contentC>
  </div>
</template>

<script>

	import header from './componentsInApp/header.vue' ;
	import content from './componentsInApp/content.vue';

	export default {
	  name: 'app',
	  data () {
		return {
			//
		}
	  } ,
	  components : {
		'headerC' : header ,
		'contentC' : content ,
	  },
	}
</script>

<style>

</style>
