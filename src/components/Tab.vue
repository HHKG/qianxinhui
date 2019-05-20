<template>
	<div class="nav">
		<div class="nav-cnt">
			<img src="../../build/logo.png" />
			<span>首页</span>
		</div>
		<div class="nav-cnt">
			<img src="../../build/logo.png" />
			<span>度假地</span>
		</div>
		<div class="nav-cnt">
			<img src="../../build/logo.png" />
			<span>俱乐部</span>
		</div>
		<div class="nav-cnt">
			<img src="../../build/logo.png" />
			<span>会员中心</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Tab',
		data(){
			return:{
				msg:'我的第一个VUE项目'
			}
		}
	}
</script>

<style scoped>
	.nav{
		position: fixed;
		bottom:0;
		left:0;
		background-color:#fff;
		z-index: 10;
		height:5rem;
		width:100%;
		display: flex;
	}
	.nav-cnt{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>