import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    getData:[],//在vuex中创建数据
    carData:[]
  },
  getters: {
    Mount(state){
      let mount=0
      state.carData.forEach((item)=>{
        mount+=item.mount
      })
      return mount
    },
    Price(state){
      let price=0
      state.carData.forEach((item)=>{
        price+=item.mount*item.price
      })
      return price
    }
  },
  mutations: {
    SET_DATA(state,data){
      const {getData}=data
      state.getData=getData
    },
    SET_CAR_DATA(state,data){
      const {carData}=data
      state.carData=carData
    },
    SET_CAR(state,data){
      // 加入购物车时，要把对应的数据一同加进去
      const {id,img,name,price,slogan,_type}=data;
      const index=state.carData.findIndex(item=>item.id==id)
      if(index==-1){
        state.carData.push({
          id,img,name,price,slogan,_type,
          mount:1,
          tPrice:price,
          select:true
        })
      }else{
        let item=state.carData[index]
        if(_type=='ADD'){
          item.mount+=1;
          item.tPrice+=price;
        }else if(_type=='DEL'){
          if(item.mount>1){
            item.mount-=1;
            item.tPrice-=price;
          }else{
            alert("数量不能减少了")
          }
        }
      }
      localStorage.setItem('carData',JSON.stringify(state.carData))//存储到本地中
    }
  },
  actions: {
    setData({commit}){//将本地存储的数据存到创建的数据中
      const getData=JSON.parse(localStorage.getItem('phoneData'))||[];
      commit('SET_DATA',{
        getData
      })
    },
    setCarData({commit}){
      const carData=JSON.parse(localStorage.getItem('carData'))||[];
      commit('SET_CAR_DATA',{
        carData
      })
    },
    setCar({commit},data){
      commit('SET_CAR',data)
    }
  },
  modules: {
  }
})
