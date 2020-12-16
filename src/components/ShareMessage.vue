<template>
  <div class="share">
        <p>シェア</p>
        <textarea v-model="share"></textarea>
        <div class="sharebtn" @click="send">
          <button>シェアする</button>
        </div>
      </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return{
      share:"",
    };
  },
  metohds:{
    send(){
      if(this.share === ""){
        alert("シェアする内容を入力してください");
      }else {
        axios
        .post("https://polar-everglades-34654.herokuapp.com/api/shares",{
          user_id:this.$store.state.user.id,
          share:this.share,
        })
        .then((response)=>{
          console.log(response);
          alert("シェアしました");
          this.share="";
          this.$router.go({
            path:this.$router.currentRoute.path,
            force:true,
          });
        });
      }
    },
  },
};
</script>


<style scoped>
.share p{
  margin: 10px;
  font-weight:bold;
}
.share button{
  width: 80px;
  padding:5px;
  border-radius: 20px;
  background-color: #5419da;
  cursor: pointer;
  font-size: 8px;
  border: none;
  font-weight: bold;
  
}
.sharebtn{
  text-align: right;
}
textarea{
  width: 95%;
  height: 120px;
  margin-left: 10px;
  margin-bottom: 10px;
  color:white;
  border-radius: 8px ;
  border:0.1px solid #d3d3d3;
  background-color: #15202b;
  resize: none;
}
:focus{
  outline: none;
}
</style>