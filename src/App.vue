<template>
  <div class='container'>
  	
	    <router-view name='header'></router-view>
	   	<router-view name='content'></router-view>
	   	<router-view name='footer'></router-view>
	  
		
  </div>
</template>

<script>
//
import Mainfooter from './components/mainfooter/index.vue'

export default {
  data () {
  	return {
  		msg: 'schoolshopping'
  	}
  },
  methods : {
  	
  },
  components : {
  	
  }
}
</script>

<style>

</style>
