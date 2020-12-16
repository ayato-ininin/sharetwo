<template>
 <div>
  <HeaderAuth></HeaderAuth>
   <div class="card">
     <p>ログイン</p>
    <div class="form">
      <input type="email /" placeholder="メールアドレス" v-model="email">
      <input type="password /" placeholder="パスワード" v-model="password">
      <br>
      <button @click="auth">ログイン</button>
    </div>
   </div>
 </div>
</template>

<script>
import HeaderAuth from '../components/HeaderAuth.vue';

export default {
  data(){
    return{
      email:"",
      password:""
    };
  },
  components:{
    HeaderAuth
  },
  methods:{
    auth(){
      this.$store.dispatch("login",{
        email:this.email,
        password:this.password
      });
    }
  }
};
</script>

<style scoped>

.card{
  width: 350px;
  background-color: white;
  color: black;
  height: 190px;
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