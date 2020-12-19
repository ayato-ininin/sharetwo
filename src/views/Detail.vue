<template>
  <div class="flex">
    <div class="left">
      <SideNavi />
    </div>
    <div class="right">
      <div class="title">
        <p>ホーム</p>
      </div>
      <Message :id="id" />
      <div class="comment">
        <div class="comment-title">
          <p>コメント</p>
        </div>
        <div class="message" v-for="(comment, index) in data" :key="index">
          <div class="flex">
            <p class="name">{{ comment.comment_user.name }}</p>
          </div>
          <div>
            <p class="text">{{ comment.comment.content }}</p>
          </div>
        </div>
        <input v-model="content" type="text" />
        <div @click="send">
          <button>コメント</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideNavi from "../components/SideNavi";
import Message from "../components/Message";
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      content: "",
      data: "",
    };
  },
  methods: {
    send() {
      axios
        .post("https://pure-sea-97931.herokuapp.com/api/comment", {
          share_id: this.id,
          user_id: this.$store.state.user.id,
          content: this.content,
        })
        .then((response) => {
          console.log(response);
          this.content = "";
          this.$router.go({
            path: this.$router.currentRoute.path,
            force: true,
          });
        });
    },
    comment() {
      axios
        .get("https://pure-sea-97931.herokuapp.com/api/shares/" + this.id)
        .then((response) => {
          this.data = response.data.comment;
        });
    },
  },
  created() {
    this.comment();
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
.comment-title{
  border-bottom: 0.1px solid white;
  border-left: 0.1px solid white;
   text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;

}
.comment input {
  width: 95%;
  height: 30px;
  margin-top: 20px;
  margin-bottom: 15px;
  margin-left: 10px;
  border-radius: 10px;
  border: 1px solid white;
  background-color: #15202b;
  color: white;
}
.message {
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid white;
  border-left: 1px solid white;
}
.text {
  margin-top: 10px;
  font-size: 10px;
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
.btn{
  text-align: right;
}
:focus{
  outline: none;
}
</style>