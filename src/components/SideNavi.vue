<template>
  <div>
    <div class="left-padding">
        <img class="logo" src="../assets/logo.png" >
        <div class="icon-field">
          <img class="icon" src="../assets/home.png" >
          <p>ホーム</p>
        </div>
        <div class="icon-field">
          <img class="icon" src="../assets/profile.png" >
          <p>プロフィール</p>
        </div>
        <div class="icon-field">
          <img class="icon" src="../assets/logout.png" >
          <p>ログアウト</p>
        </div>
      </div>

      <hr/>
      <ShareMessage></ShareMessage>
  </div>
</template>

<script>
import ShareMessage from "../components/ShareMessage"
export default {
  components:{
    ShareMessage
  }
  
}
</script>
<style scoped>
.icon{
  margin-right: 10px;
}
.flex{
  display: flex;
}
.logo{
  width: 100px;
  padding: 15px;
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
  margin-left: 6px;
  
}
:focus{
  outline: none;
}
</style>