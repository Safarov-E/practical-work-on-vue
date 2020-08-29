
<template>
  <div id="main">
    <div class="tooltip" v-if="modalShow">
      <input type="text" />
    </div>
    <p @click="showModalEdit">{{textValue}}</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
export default {
  name: 'PuiltInEditor',
  computed: {
    ...mapGetters([
      'textValue',
      'modalShow'
    ])
  },
  methods: {
    ...mapActions([
      'showModalEdit'
    ])
  }
}
</script>
<style scoped>
.tooltip{
	background-color:#5c9bb7;

	background-image:-webkit-linear-gradient(top, #5c9bb7, #5392ad);
	background-image:-moz-linear-gradient(top, #5c9bb7, #5392ad);
	background-image:linear-gradient(top, #5c9bb7, #5392ad);

	box-shadow: 0 1px 1px #ccc;
	border-radius:3px;
	width: 290px;
	padding: 10px;

	position: absolute;
	left:50%;
	margin-left:-150px;
	top: 80px;
}

.tooltip:after{
	content:'';
	position:absolute;
	border:6px solid #5190ac;
	border-color:#5190ac transparent transparent;
	width:0;
	height:0;
	bottom:-12px;
	left:50%;
	margin-left:-6px;
}

.tooltip input{
	border: none;
	width: 100%;
	line-height: 34px;
	border-radius: 3px;
	box-shadow: 0 2px 6px #bbb inset;
	text-align: center;
	font-size: 16px;
	font-family: inherit;
	color: #8d9395;
	font-weight: bold;
	outline: none;
}
p{
	font-size:22px;
	font-weight:bold;
	color:#6d8088;
	height: 30px;
	cursor:default;
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

p:before{
	content:'✎';
	display:inline-block;
	margin-right:5px;
	font-weight:normal;
	vertical-align: text-bottom;
}

#main{
	height:300px;
	position:relative;
	padding-top: 150px;
}
</style>
