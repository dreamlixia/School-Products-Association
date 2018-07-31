<template>
	
	<div class="content">
		<!--顶部广告和banner-->
	  	<div class="top">
			<div class='top_icon'>
				<img src="https://img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png" alt="" />
			</div>
			<div class="top_text">校品会商城，新版上线，微信搜索小程序“校品会”进入</div>
		</div>
		<div class='nav_img'>
			<img src="https://img.yzcdn.cn/upload_files/2018/06/14/FolhX2rzpMlR29iHU4PaXJRO5QsQ.jpeg?imageView2/2/w/730/h/0/q/75/format/webp"/>
		</div>
		<div class="top">
			<div class='top_icon'>
				<img src="https://img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png" alt="" />
			</div>
			<div class="top_text">亲爱的校品会商城，新版上线，本商城会逐步关闭。</div>
		</div>
		<!--四个原形图标分类-->
		<ul class="kind_img">
			<li><img src="https://img.yzcdn.cn/upload_files/2017/12/27/Fl2DTJaqv4oecNEHYxiR8SNBVAnA.jpg?imageView2/2/w/730/h/0/q/75/format/webp" alt="" /></li>
			<li><img src="https://img.yzcdn.cn/upload_files/2017/12/27/FnIU9t8xDypzgGnaqOtcI5X30Ikg.jpg?imageView2/2/w/730/h/0/q/75/format/webp" alt="" /></li>
			<li><img src="https://img.yzcdn.cn/upload_files/2017/12/27/FjHG6XOYlmGaqdKJh3KjjJ4YCSA1.jpg?imageView2/2/w/730/h/0/q/75/format/webp" alt="" /></li>
			<li><img src="https://img.yzcdn.cn/upload_files/2017/12/27/Fn-1rcb2TslqO_Kl0ERN26ZIzcHN.jpg?imageView2/2/w/730/h/0/q/75/format/webp" alt="" /></li>
		</ul>
		<!--两个大图标商品-->
		<ul class="kind_list">
			<li><img src="https://img.yzcdn.cn/upload_files/2017/12/27/Fga-ykgB6iwlm7oveafiIpCuQYs2.jpg?imageView2/2/w/730/h/0/q/75/format/webp" alt="" /></li>
			<li><img src="https://img.yzcdn.cn/upload_files/2017/12/27/Fjhx0vBfJYEY55eKvDtomEEshtgy.jpg?imageView2/2/w/730/h/0/q/75/format/webp" alt="" /></li>
		</ul>
		<!--每周优选-->
		<div class="week">
			<img src="https://img.yzcdn.cn/upload_files/2017/12/27/FqVV0U8Z5n3WxqZEvrdtdjiyFYy9.jpg?imageView2/2/w/730/h/0/q/75/format/webp" alt="" />
		</div>
		<!--轮播图-->
		<mt-swipe :auto="1000">
		  <mt-swipe-item>
		  	<img src="https://img.yzcdn.cn/upload_files/2018/02/05/FuGHwhtKlk9FUBTfsmGNLh1_qizt.png?

imageView2/2/w/730/h/0/q/75/format/webp" alt="" />
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="https://img.yzcdn.cn/upload_files/2018/01/26/FpaWoIrAVrHZ2_5ag8Qlb6DyUCQt.jpg?

imageView2/2/w/730/h/0/q/75/format/webp" alt="" />
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="https://img.yzcdn.cn/upload_files/2018/02/05/FgV87WuVIOvHqY74BiktBx1NtsQ7.png?

imageView2/2/w/730/h/0/q/75/format/webp" alt="" />
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="https://img.yzcdn.cn/upload_files/2018/02/05/FoqLyBlnwOM3hUABjVddjMbEJffy.png?

imageView2/2/w/730/h/0/q/75/format/webp" alt="" />
		  </mt-swipe-item>
		</mt-swipe>
		<!--为你推荐-->
		<div class="recommend">
			<img src="https://img.yzcdn.cn/upload_files/2017/12/27/FvItTsqNNVeYY2ZFFeWinaCDsLp1.jpg?imageView2/2/w/730/h/0/q/75/format/webp" alt="" />
		</div>
		<!--选项卡-->
		<div class="big">
			<div class="navcontent">
				<ul class="nav_header">
					<li class='first'>生活用品</li>
					<li>休闲零食</li>
					<li>女性护理</li>
					<li>个人洗护</li>
					<li>美颜护肤</li>
					<li>校园轻奢</li>
					<li>运动鞋服</li>
					<li>营养早餐</li>
				</ul>
			</div>
			<ol class="nav_olheader">
					<li>
						<a href="###"  v-for="item of articleslist" :key="item.id">
							<img :src="item.image_url" alt="" />
							<div>
								<h3>{{item.title}}</h3>
								<p>￥&nbsp;{{item.price}}</p>
							</div>
						</a>
					</li>
					<li>
						<a href="###"  v-for="item of foodlist" :key="item.id">
							<img :src="item.image_url" alt="" />
							<div>
								<h3>{{item.title}}</h3>
								<p>￥&nbsp;{{item.price}}</p>
							</div>
						</a>
					</li>
					<li>
						<a href="###"  v-for="item of womanlist" :key="item.id">
							<img :src="item.image_url" alt="" />
							<div>
								<h3>{{item.title}}</h3>
								<p>￥&nbsp;{{item.price}}</p>
							</div>
						</a>
					</li>
					<li>
						<a href="###"  v-for="item of personCarelist" :key="item.id">
							<img :src="item.image_url" alt="" />
							<div>
								<h3>{{item.title}}</h3>
								<p>￥&nbsp;{{item.price}}</p>
							</div>
						</a>
					</li>
					<li>
						<a href="###"  v-for="item of nicelist" :key="item.id">
							<img :src="item.image_url" alt="" />
							<div>
								<h3>{{item.title}}</h3>
								<p>￥&nbsp;{{item.price}}</p>
							</div>
						</a>
					</li>
					<li>
						<a href="###"  v-for="item of buylist" :key="item.id">
							<img :src="item.image_url" alt="" />
							<div>
								<h3>{{item.title}}</h3>
								<p>￥&nbsp;{{item.price}}</p>
							</div>
						</a>
					</li>
					<li>
						<a href="###"  v-for="item of clotheslist" :key="item.id">
							<img :src="item.image_url" alt="" />
							<div>
								<h3>{{item.title}}</h3>
								<p>￥&nbsp;{{item.price}}</p>
							</div>
						</a>
					</li>
					<li>
						<a href="###"  v-for="item of lunchlist" :key="item.id">
							<img :src="item.image_url" alt="" />
							<div>
								<h3>{{item.title}}</h3>
								<p>￥&nbsp;{{item.price}}</p>
							</div>
						</a>
					</li>
			</ol>
		</div>
		<div class="footer">
			<div class="footer_kind">
				<a href="" ></a>
			</div>
		</div>
	</div>
</template>

<script src='./script.js'></script>


<style lang='scss' src='./style.scss'></style>
