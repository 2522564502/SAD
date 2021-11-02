<template>
  <div class="abouts">
    <header>
      <router-link to="/about/kcgl"  class="back">返回</router-link>
      <span class="cartitle">购物车</span>
    </header>
    <div class="carpage">
      <ul>
        <li v-for="item in carData" :key="item.id">
          <div class="shopimg">
            <img :src="item.img" alt="">
          </div>
          <div class="shopcont">
            <h3 class="shopname">{{item.name}}</h3>
            <p class="shopmore">{{item.slogan}}</p>
            <p class="shopprice">￥{{item.price}}</p>
            <p class="adddel">
              <button class="del" @click="append(item,'DEL')">-</button>
              <span class="num">{{item.mount}}</span>
              <button class="add" @click="append(item,'ADD')">+</button>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <footer>
      <span>合计：￥{{totalPrice}}</span>
    </footer>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  name: 'Home',
  computed:{
    carData(){
      return this.$store.state.carData
    },
    totalPrice(){
      return this.$store.getters.Price
    }
  },
  methods:{
    ...mapActions(['setCar','setCarData']),
    append(item,_type){
      if(item.select){
        if(_type=='ADD' && item.id==-1){
          this.setCar({
            tPrice:item.price,
            mount:1
          })
        }else if(_type=='DEL' && item.id==-1){
          if(item.mount>1){
            this.setCar({
            tPrice:-item.price,
            mount:-1
          })
          }
        }
      }
      this.setCar({
        id:item.id,
        price:item.price,
        _type
      })
    }
  },
  mounted(){
    this.setCarData()
  }
}
</script>
<style lang="scss">
  .abouts{
    position: relative;
    float: left;
    width: 30%;
    height:2.67rem;
    border-radius: .04rem;
    overflow: hidden;
    margin: auto;
    header{
    height: 0.3rem;
    line-height: 0.3rem;
    background: #ff6704;
    color: white;
    padding: 0 0.2rem;
    display: flex;
    justify-content: center;
    align-content: center;
    span{
      font-size: 0.1rem;
      font-weight: 700;
    }
    .back{
      float: right;
      font-size: 0.05rem;
      color: white;
      position: absolute;
      left: 0.2rem;
    }
  }
    .carpage{
      height: 1.79rem;
      overflow-y: scroll;
      ul{
        list-style: none;
        li{
          min-height: .5rem;
          border-bottom: solid 1px #999;
          position: relative;
          .shopimg{
            width: 25%;
            float: left;
            img{
              width: 100%;
            }
          }
          .shopcont{
            width: 72%;
            text-align: left;
            float: right;
            padding-top: 0.1rem 0 0 0.1rem;
          .shopname{
            font-size: 0.1rem;
          }
            .shopmore{
              font-size: 0.05rem;
              height: 0.2rem;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              color: #999;
            }
            .shopprice{
              color: red;
            font-size: 0.1rem;
            }
            .adddel{
              position: absolute;
              right: 0.05rem;
              top: 0.3rem;
              button{
                float: left;
                height: 0.1rem;
                width: 0.1rem;
                border: solid 1px #999;
                text-align: center;
                border-radius: 50%;
                margin-right: 0.1rem;
                background: #fff;
              }
              .num{
                display: block;
                float: left;
                padding: 0.05rem;
                height: 0.05rem;
                width: 0.05rem;
                border: solid 1px #999;
                line-height: 0.05rem;
                text-align: center;
                margin-right: 0.1rem;
                font-size: 0.1rem;
              }
            }
        }
      }
    }
  }
  footer{
    height: 0.44rem;
    border-top: solid 1px #999;
    line-height: 0.44rem;
    text-align: right;
    padding: 0 0.2rem;
    background: #fff;
  }
}
</style>