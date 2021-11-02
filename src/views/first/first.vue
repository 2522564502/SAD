<template>
  <div class="wrap">
      <el-carousel indicator-position="outside">
        <el-carousel-item>
          <img src="../../assets/img/15我.jpg" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="../../assets/img/16.jpg" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="../../assets/img/奥迪RS7.jpg" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="../../assets/img/兔子.jpg" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="../../assets/img/我自己.jpg" />
        </el-carousel-item>
      </el-carousel>
  </div>
</template>
            
<script>

</script>
<style>
.wrap{
    height: 2rem;
    width: 26%;
    margin: auto;
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  img{
      width: 100%;
  }
</style>