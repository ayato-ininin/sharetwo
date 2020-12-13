<template>
  <div class="flex">

    <div class="left">
     <SideNavi></SideNavi>
    </div>
    <div class="right">
      <div class="title">
        <p>ホーム</p>
      </div>
      <Message></Message>
    </div>

  </div>
</template>

<script>
import SideNavi from "../components/SideNavi"
import Message from "../components/Message"
export default {
  components: {
    SideNavi,
    Message
  }
};
</script>

<style scoped>
.left{
  width: 25%;
  height: 100vh;
}
.right{
  width: 78%;
  height: 100vh;
  margin-left: 30px;
}
.flex{
  display: flex;
}
.title{
 border-bottom: 0.1px solid white;
  border-left: 0.1px solid white;
  padding: 10px;
}
</style>