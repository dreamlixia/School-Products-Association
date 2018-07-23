import axios from 'axios'

export default {
	data () {
		return {
			allgoodslist: []
		}
	},
	methods: {
		getAllgoodsDataSuccess (res) {
			console.log(res.data.data[0].aaq2dd94)
			const {data} = res
			this.allgoodslist = data.data[0].aaq2dd94
		},
		getAllgoodsFail (err) {
			console.log(err);
		}
	},
	mounted () {
		//https://h5.youzan.com/v2/showcase/goods/briefGoodsWithTags.json?tag_alias%5B%5D=aaq2dd94&perpage=100
		//https://h5.youzan.com/v2/showcase/goods/briefGoodsWithTags.json?tag_alias%5B%5D=m15tov9s&perpage=78
		axios.get('https://h5.youzan.com/v2/showcase/goods/briefGoodsWithTags.json?tag_alias%5B%5D=aaq2dd94&perpage=100').then(this.getAllgoodsDataSuccess)
		  .catch(this.getAllgoodsFail)
		  
		  
	}
}

