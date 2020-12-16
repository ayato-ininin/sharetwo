<template>
<div>
  <HeaderAuth></HeaderAuth>
  <div class="card">
    <p>新規登録</p>
    <div class="form">
    <input type="text" placeholder="ユーザーネーム" v-model="name" />
    <input type="text" placeholder="プロフィール" v-model="profile">
    <input type="email" placeholder="メールアドレス" v-model="email">
    <input type="password" placeholder="パスワード" v-model="password">
    <button @click="auth">新規登録</button>
    </div>
  </div>
</div>
</template>


<script>
import HeaderAuth from "../components/HeaderAuth"
import axios from "axios";
export default {
  data(){
    return{
      name:"",
      profile:"",
      email:"",
      password:""
      };
  },
  components:{
    HeaderAuth
  },
  methods:{
    auth(){
      axios.post("https://polar-everglades-34654.herokuapp.com/api/register",{
        name:this.name,
        profile:this.profile,
        email:this.email,
        password:this.password
      })
      .then(response=>{
        console.log(response);
        this.$router.replace("/");
      })
      .catch(error=>{
        alert(error);
      });
    }
  }
  
}
</script>

<style scoped>

.card{
  width: 350px;
  background-color: white;
  color: black;
  height: 270px;
  margin: 100px auto;
  text-align: center;
  border-radius:10px ;
  padding:10px
}
.card p{
  color: black;
  font-weight: bold;
  margin: 15px 0;
}
.form input{
  width: 80%;
  margin-bottom: 15px;
  padding: 5px;
  border:0.1px solid #d3d3d3;
  border-radius: 12px;
  color: black;
  
}
.form button{
  width: 80px;
  padding:5px;
  border-radius: 20px;
  background-color: #5419da;
  cursor: pointer;
  font-size: 8px;


}
:focus{
  outline: none;
  
}
</style>