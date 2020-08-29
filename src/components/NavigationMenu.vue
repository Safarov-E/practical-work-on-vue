<template>
	<div>
		<nav class="active">
			<router-link v-for="(route, index) in routes" :key="index" :to="route.url">
				{{route.text}}
			</router-link>
		</nav>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
export default {
  name: 'NavigationMenu',
  computed: {
    ...mapGetters([
      'routes'
    ])
  },
  methods: {
    ...mapActions([
      'showModalEdit'
    ])
  }
}
</script>
<style>
*{
	margin:0;
	padding:0;
}
body{
	font:15px/1.3 'Open Sans', sans-serif;
	color: #5e5b64;
	text-align:center;
	background-color: #f8f8f8;
}
a, a:visited {
	outline:none;
	color:#389dc1;
}
a:hover{
	text-decoration:none;
}
section, footer, header, aside, nav{
	display: block;
}
nav{
	display:inline-block;
	margin:60px auto 45px;
	background-color:#5597b4;
	box-shadow:0 1px 1px #ccc;
	border-radius:2px;
}
nav a{
	display:inline-block;
	padding: 18px 30px;
	color:#fff !important;
	font-weight:bold;
	font-size:16px;
	text-decoration:none !important;
	line-height:1;
	text-transform: uppercase;
	background-color:transparent;
}
nav a:first-child{
	border-radius:2px 0 0 2px;
}
nav a:last-child{
	border-radius:0 2px 2px 0;
}
.router-link-active{
	background-color:#e35885;
}
p{
	font-size:22px;
	font-weight:bold;
	color:#7d9098;
}
p b{
	color:#ffffff;
	display:inline-block;
	padding:5px 10px;
	background-color:#c4d7e0;
	border-radius:2px;
	text-transform:uppercase;
	font-size:18px;
}
</style>
