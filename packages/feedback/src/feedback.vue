<template>
    <div class="feedback">
        {{hello}}
    </div>
</template>
<script >
      export default {
          name:"feedback",
          /**
          * 组件初始化变量
          * */
          data(){
              return {
                  hello:"hello feedback"
              }
          },
          methods:{
              init(){
                  console.log('hello feedback')
              },
          },
          /**
          * 组件被创建的生命周期
          * */
          created(){
              this.init()
          },
          /**
          * 组件加载完毕生命周期
          * */
          mounted(){
              
          },
          /**
          * 组件再次被激活生命周期
          * */
          activated() {
              this.init()
          }
      }      
</script>
<style scoped>
    .feedback{
        width: 100%;
        text-align: center;
    }        
</style>