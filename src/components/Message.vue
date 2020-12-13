<template>
  <div>
    
      <div v-for="(value,index) in shares" :key="index">
        <div class="message">
          <div class="flex">
            <p class="name">{{value.name}}</p>
            <img src="../assets/heart.png" class="icon">
            <p class="number">{{value.like.length}}</p>
            <img src="../assets/cross.png"  class="icon">
            <img src="../assets/detail.png" class="icon detail">
          </div>
          <p class="text">{{value.share}}</p>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      shares:[{name:"太郎",like:[],share:"初めまして"}]
    }
  }
}
</script>

<style scoped>

.flex{
  display: flex;
}

.message{
  border-bottom: 0.1px solid white;
  border-left: 0.1px solid white;
  padding:15px 10px;
}
.name{
  margin-right: 10px;
  font-size: 18px;
}
.number{
  margin-right: 10px;
}
.icon{
  margin-right: 10px;
}
.text{
  margin-top: 10px;
}
.detail{
  margin-left: 40px;
}
.icon{
  width: 17px;
  
}
.icon-field{
  display: flex;
  padding: 11px;
  margin-left: 7px;
}
.icon-field p{
  margin-left: 8px;
}
:focus{
  outline: none;
}
</style>