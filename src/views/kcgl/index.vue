<template>
  <div class="homes">
    <header>
      <span class="mititle">小米手机</span>
      <router-link to="/about/car"  class="gocar">购物车({{totalMount}})</router-link>
    </header>
    <div class="fristpage">
      <ul>
        <li v-for="item in getData" :key="item.id">
          <div class="shopimg">
            <img :src="item.img" alt="">
          </div>
          <div class="shopcont">
            <h3 class="shopname">{{item.name}}</h3>
            <p class="shopmore">{{item.slogan}}</p>
            <p class="shopprice">￥{{item.price}}</p>
            <button @click="addCar(item,'ADD')">加入购物车</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Home',
  computed:{
    ...mapState(['getData']),
    totalMount(){
      return this.$store.getters.Mount
    }
  },
  created(){
    this.$store.dispatch('setData')
  },
  methods:{
    addCar(item,_type){
      this.$store.dispatch('setCar',{
        id:item.id,
        name:item.name,
        img:item.img,
        price:item.price,
        slogan:item.slogan,
        _type
      })
    }
  }
}
</script>
<style lang="scss" >
.homes{
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
    .gocar{
      float: right;
      font-size: 0.05rem;
      color: white;
      position: absolute;
      right: 0.2rem;
    }
  }
  .fristpage{
    height: 2.23rem;
    overflow-x: scroll;
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
          button{
            background: white;
            border: 1px solid #ff6704;
            color: #ff6704;
            outline: none;
            position: absolute;
            right: 0.2rem;
            top: 0.3rem;
          }
      }
    }
  }
}
}
</style>