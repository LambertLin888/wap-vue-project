<template>
  <div class="child">
    nice
  </div> 
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      meg:'hello I·m Vue',
      hack:true,
    show:false,   
    parentMessage:'parent',
    items: [
      'John','John','John','John','age','dage'
     ],
    numbers:[0,1,2,3,4,5,6,7]
    }
  },
  created (){
    console.log('created1212');
  },  
  methods:{
      creat: function(message){
         this.$emit('increment');
         // this.msg='2233'
         // console.log(message);
         //  this.items.push('lanlan');
          // this.show=!this.show;
          // this.hack=!this.hack;
      },
          // 不是直接更新值，而是使用此方法来对输入值进行格式化和位数限制
      updateValue: function (value) {

      this.$emit('input', Number(value))
            console.log(value);
    }
  },
  computed:{
      evenNumbers:function(){
        return this.numbers.filter(function (number) {
         return number % 2 === 0
      })}
  },
  props:['value'],
  mounted : function(){

    this.$mount('#app');
    // this.$on('hellocomponent',function(){
    //     console.log('hellocomponent from nice');
    // })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}


a {
  color: #42b983;
}

.red{
  background-color: red;
}
</style>
