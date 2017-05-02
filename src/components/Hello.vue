<template>
<div>
 <scroller  :on-refresh="refresh"
            :on-infinite="infinite"
            ref="my_scroller" style="top: 44px;">
    <swiper :options="swiperOption" ref="mySwiper" >
        <!-- slides -->
        <swiper-slide v-for="banner in banners">
          <img class="swiper-img"  v-lazy="banner.ad_img">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>
    <div v-for="good in goodslist">
          <img class="swiper-img"  v-lazy="good.goods_thumb">
    </div>
 </scroller>
</div>
</template>
<script>
import Vue from 'vue'
import Scroller from 'vue-scroller'
import { BackendApiwomenIndex,BackendApiCateGoodsList} from 'BackendApi'
export default {
  name: 'hello',
  components: {
    Scroller
    },
  data () {
    return {
        banners: [],
        goodslist:[],
        swiperOption: {
          autoplay: 2000,
          initialSlide: 1,
          loop: true,
          pagination: '.swiper-pagination',
          onSlideChangeEnd: swiper => {
            // console.log('onSlideChangeEnd', swiper.realIndex)
          }
        }
      }
  },
  beforeCreate(){
         this.$http.get(BackendApiwomenIndex,
          {//请求参数
            params: {
            }
          }).then(function(res){
            var data=res.body.data;
            this.banners=data.banner;
          },function(){
          });
  },
  created (){
     this.$http.get(BackendApiCateGoodsList,
          {//请求参数
            params: {
            }
          }).then(function(res){
            var data=res.body.data;
            this.goodslist=data.seClass[0].goodslist;
            console.log('success');
            console.log(res.body.ret);
          },function(){
              console.log('failse');
          });
  },
  beforeMount(){
  
  },
  mounted(){
      this.$refs.my_scroller.resize();
      // console.log('hello mounted');
      // for (var i = 1; i <= 20; i++) {
      //   this.items.push(i + ' - keep walking, be 2 with you.');
      // }
      // this.top = 1;
      // this.bottom = 50;
      // setTimeout(() => {
      //   this.$refs.my_scroller.resize();
      // })
  },
  methods:{
      updateValue: function (value) {

      this.$emit('input', Number(value))
            console.log(value);
      },
     refresh() {
         console.log('refresh');
         this.goodslist=[];
         this.$http.get(BackendApiCateGoodsList,
              {
                params: {
                }
              }).then(function(res){
                var data=res.body.data;
                this.goodslist=data.seClass[0].goodslist;
                this.$refs.my_scroller.finishPullToRefresh();
              },function(){
              });
      },
     infinite(){
         console.log('infinite refresh');
        this.$http.get(BackendApiCateGoodsList,
              {
                params: {
                }
              }).then(function(res){
                var data=res.body.data;
                this.goodslist=this.goodslist.concat(data.seClass[0].goodslist);
                setTimeout(() => {
                    this.$refs.my_scroller.finishInfinite();
                   })
              },function(){
              });
      }
  },
  computed:{
    buttonMessage: function () {

    }
  },
  props:['value']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  html, body {
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
  .row {
    width: 100%;
    height: 50px;
    padding: 10px 0;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    color: #444;
    background-color: #fff;
  }
  .grey-bg {
    background-color: #eee;
  }
  .header {
    position: fixed;
    top: 0;
    left: 0;
    height: 44px;
    width: 100%;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.1);
    background-color: #fff;
    z-index: 1000;
    color: #666;
  }
  .header > .title {
    font-size: 16px;
    line-height: 44px;
    text-align: center;
    margin: 0 auto;
  }
  .swiper-img{
    width: 100%;
    height:450px;
  }
</style>
