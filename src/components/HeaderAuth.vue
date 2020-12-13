<template>
 <div>
   <div class="header flex">
     <div class="left">
       <img class="logo" src="../assets/logo.png" >
     </div>
     <div class="right">
       <p @click="$router.push('/signup')">新規登録</p>
       <p @click="$router.push('/')">ログイン</p>
     </div>
   </div>
 </div>
</template>

<style scoped>
.flex{
  display: flex;
  justify-content: space-between;
}
img{
  width: 150px;
  margin: 10px;
}
.right{
  display:flex;
  align-items: center;
}
.right p{
  cursor: pointer;
  margin-right: 20px;
}

</style>