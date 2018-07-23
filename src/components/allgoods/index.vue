<template>
	<div class="content">
		<ul class='allgoodslist'>
			<li v-for='item of allgoodslist' :key='item.id'>
				{{item.title}}
			</li>
		</ul>
	</div>
</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss'></style>