<template>
	<div class="nav">
		<router-link tag="div" exact :to="{name:'home'}">
			<div class="nav-cnt" data-id="div1" @click="changepage">
				<!--<img v-show="show" src="../assets/images/shouye_selected_icon_.png" />-->
				<img src="../assets/images/shouye_unselected_icon.png" />
				<span>首页</span>
			</div>
		</router-link>
		<router-link tag="div" data-id="div2" :to="{name:'holiday'}">
			<div class="nav-cnt" @click="changepage">
				<!--<img v-show="show" src="../assets/images/dujiadi_selected_icon.png" />-->
				<img src="../assets/images/dujiadi_unselected_icon_.png" />
				<span>度假地</span>
			</div>
		</router-link>
		<router-link tag="div" data-id="div3" :to="{name:'club'}">
			<div class="nav-cnt" @click="changepage">
				<!--<img v-show="show" src="../assets/images/julebu_selected_icon.png" />-->
				<img src="../assets/images/julebu_unselected_icon.png" />
				<span>俱乐部</span>
			</div>
		</router-link>
		<router-link tag="div" data-id="div4" :to="{name:'person'}">
			<div class="nav-cnt" @click="changepage">
<!--				<img v-show="show" src="../assets/images/huiyuan_icon_seleted.png" />-->
				<img src="../assets/images/huiyuan_icon_unselected.png" />
				<span>会员中心</span>
			</div>
		</router-link>
	</div>
</template>
<script>
	import $ from 'jquery';
	export default {
		name: 'Tab',
		data() {
                return{
                	show:false
                }
		},
		methods: {
			changepage: function() {

				
			}
		},
	}
</script>

<style scoped>
	.nav {
		position: fixed;
		bottom: 0;
		left: 0;
		background-color: #fff;
		z-index: 10;
		height: 100px;
		display: flex;
		background-color: #fff;
		box-shadow: 0 0 2px 0 #ccc;
		align-items: center;
		justify-content: space-between;
		padding: 0 30px;
		width: 750px;
		box-sizing: border-box;
	}
	
	.nav-cnt {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
	.nav-cnt img {
		width: 32px;
		height: 32px
	}
	
	.nav-cnt span {
		color: #999;
		font-size: 16px;
	}
	
	.router-link {
		text-underline: none;
	}
	
	.router-link-active span {
		/*color: #496966;*/
	}
	
	.router-link-active img {}
</style>