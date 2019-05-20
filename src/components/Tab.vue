<template>
	<div class="nav">
		<router-link tag="div" exact :to="{name:'home'}">
			<div class="nav-cnt">
				<img src="../assets/images/shouye_unselected_icon.png" />
				<span>首页</span>
			</div>
		</router-link>
		<router-link tag="div" :to="{name:'holiday'}">
			<div class="nav-cnt">
				<img src="../assets/images/dujiadi_unselected_icon_.png" />
				<span>度假地</span>
			</div>
		</router-link>
		<router-link tag="div" :to="{name:'club'}">
			<div class="nav-cnt">
				<img src="../assets/images/julebu_unselected_icon.png" />
				<span>俱乐部</span>
			</div>
		</router-link>
		<router-link tag="div"  :to="{name:'person'}">
			<div class="nav-cnt" @click="changepage">
				<img src="../assets/images/huiyuan_icon_unselected.png" />
				<span>会员中心</span>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: 'Tab',
		changepage:function(){
			
		}
	}
</script>

<style scoped>
	.nav {
		position: fixed;
		bottom: 0;
		left: 0;
		background-color: #fff;
		z-index: 10;
		height: 5rem;
		display: flex;
		background-color: #fff;
		box-shadow: 0 0 1rem 0 #ccc;
		align-items: center;
		justify-content: space-between;
		padding: 0 4%;
		width: 92%;
	}
	.nav-cnt {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.nav-cnt img {
		width: 2rem;
		height: 2rem;
	}
	.nav-cnt span{
		color:#999;
		font-size: 1.2rem;
	}
	.router-link{
	text-underline: none;	
	}
	.router-link-active span{
	 color: #496966;	
	}
	.router-link-active img{
		
	}
</style>