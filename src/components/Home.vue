<template>
	<div>
		<div class="lunbo-cnt">
			<ul>
				<li><img src="../assets/images/1.jpg" /></li>
				<li><img src="../assets/images/2.jpg" /></li>
				<li><img src="../assets/images/3.jpg" /></li>
			</ul>
			<div class="dots">

			</div>
		</div>

	</div>
</template>

<script>
	import $ from 'jquery';
	export default {
		name: 'Home',
		data() {
			return {
				show: false
			}
		},
		methods: {
            
		}
	}
	$(document).ready(()=>{
		//轮播图
		var index=0;
		(function lunboDots() {
			var dot = '';
			for(var i = 0; i < $('.lunbo-cnt>ul>li').length; i++) {
				dot += '<span class="dot-style"></span>';
			}
			window.console.log(dot);
			$('.dots').html(dot);
		})()
		$('.lunbo-cnt>ul>li').on('touchmove',function(){
			var index=$('.dots>span').index(this);
			var nowleft=-index*$('.lunbo-cnt').width();
			window.console.log($('.lunbo-cnt').width());
			$('.lunbo-cnt>ul').stop(true,false).animate({'margin-left':nowleft},300);
		})
	})
</script>

<style>
	* {
		padding: 0;
		margin: 0;
	}
	.lunbo-cnt {
		position: relative;
		width: 750px;
		overflow: hidden;
	}
	
	ul,
	li {
		padding: 0;
		margin: 0;
	}
	
	ul {
		width: 2250px;
	}
	
	li {
		float: left;
	}
	
	ul li img {
		width: 750px;
		height: 750px;
	}
	.dots{
       position: absolute;
		left: 0;
		bottom:0;
		display: flex;
		justify-content: center;
		width:100%;
	}
	.dot-style {
        margin:30px;
		width: 20px;
		height: 20px;
		border-radius: 11px;
		background-color:#ccc;
	}
</style>