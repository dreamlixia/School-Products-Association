import Vue from 'vue'
import { TabContainer, TabContainerItem } from 'mint-ui'
Vue.use(TabContainer)
Vue.use(TabContainerItem)
import axios from 'axios'
import './jquery-1.11.3.js'

export default {
	data () {
		return {
			articleslist: [],
			foodlist: [],
			womanlist: [],
			personCarelist: [],
			nicelist: [],
			buylist: [],
			clotheslist:[],
			lunchlist:[]
		}
	},
	methods: {
		getarticleslistDataSuccess (res) {
//			console.log(res.data.data.goods)
			const {data} = res
			this.articleslist = res.data.data.goods
		},
		getarticleslistFail (err) {
			console.log(err);
		},
		getfoodlistDataSuccess (res) {
			const {data} = res
			this.foodlist = res.data.data.goods
		},
		getfoodlistFail (err) {
			console.log(err);
		},
		getwomanlistDataSuccess (res) {
			const {data} = res
			this.womanlist = res.data.data.goods
		},
		getwomanlistFail (err) {
			console.log(err);
		},
		getpersonCarelistSuccess (res) {
			const {data} = res
			this.personCarelist = res.data.data.goods
		},
		getpersonCarelistFail (err) {
			console.log(err);
		},
		getnicelistSuccess (res) {
			const {data} = res
			this.nicelist = res.data.data.goods
		},
		getnicelistFail (err) {
			console.log(err);
		},
		getbuylistSuccess (res) {
			const {data} = res
			this.buylist = res.data.data.goods
		},
		getbuylistFail (err) {
			console.log(err);
		},
		getclotheslistSuccess (res) {
			const {data} = res
			this.clotheslist = res.data.data.goods
		},
		getclotheslistFail (err) {
			console.log(err);
		},
		getlunchlistSuccess (res) {
			const {data} = res
			this.lunchlist = res.data.data.goods
		},
		getlunchlistFail (err) {
			console.log(err);
		}
	},
	mounted () {
//		生活用品
		axios.get('https://h5.youzan.com/v2/showcase/goods/goodsJsonWithTag.json?type=tag_list_top&buy_btn=1&buy_btn_type=1&buy_btn_express=&button_text=&cart=&price=1&show_sub_title=0&show_union_goods=&show_wish_btn=&goods=&goods_form=&size=1&size_type=0&title=1&wish_btn_type=&show_corner_mark=&corner_mark_type=&corner_mark_image=&display_scale=0&image_fill_style=1&wrap=&perpage=18&page=1&tag_alias=1id055s5d')
		.then(this.getarticleslistDataSuccess)
		.catch(this.getarticleslistFail)
//		休闲零食
		axios.get('https://h5.youzan.com/v2/showcase/goods/goodsJsonWithTag.json?type=tag_list_top&buy_btn=1&buy_btn_type=1&buy_btn_express=&button_text=&cart=&price=1&show_sub_title=0&show_union_goods=&show_wish_btn=&goods=&goods_form=&size=1&size_type=0&title=1&wish_btn_type=&show_corner_mark=&corner_mark_type=&corner_mark_image=&display_scale=0&image_fill_style=1&wrap=&perpage=18&page=1&tag_alias=aaq2dd94')
		.then(this.getfoodlistDataSuccess)
		.catch(this.getfoodlistFail)
//		女性护理
		axios.get('https://h5.youzan.com/v2/showcase/goods/goodsJsonWithTag.json?type=tag_list_top&buy_btn=1&buy_btn_type=1&buy_btn_express=&button_text=&cart=&price=1&show_sub_title=0&show_union_goods=&show_wish_btn=&goods=&goods_form=&size=1&size_type=0&title=1&wish_btn_type=&show_corner_mark=&corner_mark_type=&corner_mark_image=&display_scale=0&image_fill_style=1&wrap=&perpage=18&page=1&tag_alias=vttpd35l')
		.then(this.getwomanlistDataSuccess)
		.catch(this.getwomanlistFail)
//		个人洗护
		axios.get('https://h5.youzan.com/v2/showcase/goods/goodsJsonWithTag.json?type=tag_list_top&buy_btn=1&buy_btn_type=1&buy_btn_express=&button_text=&cart=&price=1&show_sub_title=0&show_union_goods=&show_wish_btn=&goods=&goods_form=&size=1&size_type=0&title=1&wish_btn_type=&show_corner_mark=&corner_mark_type=&corner_mark_image=&display_scale=0&image_fill_style=1&wrap=&perpage=18&page=1&tag_alias=1ba80ae82')
		.then(this.getpersonCarelistSuccess)
		.catch(this.getpersonCarelistFail)
//		美颜护肤
		axios.get('https://h5.youzan.com/v2/showcase/goods/goodsJsonWithTag.json?type=tag_list_top&buy_btn=1&buy_btn_type=1&buy_btn_express=&button_text=&cart=&price=1&show_sub_title=0&show_union_goods=&show_wish_btn=&goods=&goods_form=&size=1&size_type=0&title=1&wish_btn_type=&show_corner_mark=&corner_mark_type=&corner_mark_image=&display_scale=0&image_fill_style=1&wrap=&perpage=18&page=1&tag_alias=qfbjeb7r')
		.then(this.getnicelistSuccess)
		.catch(this.getnicelistFail)
//		校园轻奢
		axios.get('https://h5.youzan.com/v2/showcase/goods/goodsJsonWithTag.json?type=tag_list_top&buy_btn=1&buy_btn_type=1&buy_btn_express=&button_text=&cart=&price=1&show_sub_title=0&show_union_goods=&show_wish_btn=&goods=&goods_form=&size=1&size_type=0&title=1&wish_btn_type=&show_corner_mark=&corner_mark_type=&corner_mark_image=&display_scale=0&image_fill_style=1&wrap=&perpage=18&page=1&tag_alias=1egextkjt')
		.then(this.getbuylistSuccess)
		.catch(this.getbuylistFail)
//		运动鞋服
		axios.get('https://h5.youzan.com/v2/showcase/goods/goodsJsonWithTag.json?type=tag_list_top&buy_btn=1&buy_btn_type=1&buy_btn_express=&button_text=&cart=&price=1&show_sub_title=0&show_union_goods=&show_wish_btn=&goods=&goods_form=&size=1&size_type=0&title=1&wish_btn_type=&show_corner_mark=&corner_mark_type=&corner_mark_image=&display_scale=0&image_fill_style=1&wrap=&perpage=18&page=1&tag_alias=9q6g6qer')
		.then(this.getclotheslistSuccess)
		.catch(this.getclotheslistFail)
//		营养早餐
		axios.get('https://h5.youzan.com/v2/showcase/goods/goodsJsonWithTag.json?type=tag_list_top&buy_btn=1&buy_btn_type=1&buy_btn_express=&button_text=&cart=&price=1&show_sub_title=0&show_union_goods=&show_wish_btn=&goods=&goods_form=&size=1&size_type=0&title=1&wish_btn_type=&show_corner_mark=&corner_mark_type=&corner_mark_image=&display_scale=0&image_fill_style=1&wrap=&perpage=18&page=1&tag_alias=jz9tlb6d1')
		.then(this.getlunchlistSuccess)
		.catch(this.getlunchlistFail)
		
		
//		底部
		
		
		
		
		
		var $uli = $("ul li");
		var $oli = $("ol li");
		$oli.addClass("hide");
		$oli[0].className = "show";
		$uli.addClass("normal");
		$uli[0].className = "hover";
		
		$uli.mouseover(function() {
			var index = $(this).index();
			$uli.removeClass().addClass("normal");
			$(this).removeClass().addClass("hover");
			$oli.removeClass().addClass("hide");
			$oli.eq(index).removeClass().addClass("show");
		});
		  
	}
}

