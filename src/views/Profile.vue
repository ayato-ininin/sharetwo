<template>
  <div class="flex">
    <div class="left">
      <SideNavi />
    </div>
    <div class="right">
      <div class="title">
        <p>プロフィール</p>
      </div>
      <div class="profile">
        <div class="flex-profile">
          <p class="profile-name">{{ name }}</p>
          <div @click="edit">
            <button>変更する</button>
          </div>
        </div>
        <p class="text" v-if="active">{{ profile }}</p>
        <input type="text" v-model="profile" v-else />
      </div>
      <Message />
    </div>
  </div>
</template>

<script>
import SideNavi from "../components/SideNavi";
import Message from "../components/Message";
import axios from "axios";
export default {
  data() {
    return {
      active: true,
      name: this.$store.state.user.name,
      profile: this.$store.state.user.profile,
    };
  },
  methods: {
    edit() {
      if (!this.active) {
        axios
          .put("https://quiet-caverns-12881.herokuapp.com/api/user", {
            email: this.$store.state.user.email,
            profile: this.profile,
          })
          .then((response) => {
            this.$store.dispatch("changeUserData", {
              profile: this.profile,
            });
            console.log(response);
          });
      }
      this.active = !this.active;
    },
  },
  components: {
    SideNavi,
    Message,
  },
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
.profile{
  padding: 20px;
  border-bottom: 0.1px solid white;
  border-left: 0.1px solid white;
}
.profile-name{
  font-size: 24px;

}
.flex-profile{
  display: flex;
  justify-content: space-between;
}
button{
  width: 80px;
  padding:5px;
  border-radius: 20px;
  background-color: #5419da;
  cursor: pointer;
  font-size: 8px;
  border: none;
  font-weight: bold;
  
}
:focus{
  outline: none;
}
</style>