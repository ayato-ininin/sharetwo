<template>
  <div>
    
      <div v-for="(value,index) in shares" :key="index">
        <div class="message">
          <div class="flex">
            <p class="name">{{value.name}}</p>
            <img src="../assets/heart.png" class="icon" @click="fav(index)">
            <p class="number">{{value.like.length}}</p>
            <img src="../assets/cross.png"  class="icon" @click="del(index)" v-if="path && profile">
            <img src="../assets/detail.png" class="icon detail" @click="$router.push({path:'/detail/' + value.item.id,
            params:{id:value.item.id},
            })"
            v-if="profile">
          </div>
          <p class="text">{{value.item.share}}</p>
        </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      shares: [],
      path: true,
      profile: true,
    };
  },
  methods: {
    fav(index) {
      const result = this.shares[index].like.some((value) => {
        return value.user_id == this.$store.state.user.id;
      });
      if (result) {
        this.shares[index].like.forEach((element) => {
          if (element.user_id == this.$store.state.user.id) {
            axios({
              method: "delete",
              url: "https://polar-everglades-34654.herokuapp.com/api/api/like",
              data: {
                share_id: this.shares[index].item.id,
                user_id: this.$store.state.user.id,
              },
            }).then((response) => {
              console.log(response);
              this.$router.go({
                path: this.$router.currentRoute.path,
                force: true,
              });
            });
          }
        });
      } else {
        axios
          .post("https://polar-everglades-34654.herokuapp.com/api/api/like", {
            share_id: this.shares[index].item.id,
            user_id: this.$store.state.user.id,
          })
          .then((response) => {
            console.log(response);
            this.$router.go({
              path: this.$router.currentRoute.path,
              force: true,
            });
          });
      }
    },
    del(index) {
      axios
        .delete(
          "https://quiet-caverns-12881.herokuapp.com/api/api/shares/" +
            this.shares[index].item.id
        )
        .then((response) => {
          console.log(response);
          this.$router.go({
            path: this.$router.currentRoute.path,
            force: true,
          });
        });
    },
    async getShares() {
      let data = [];
      const shares = await axios.get(
        "https://quiet-caverns-12881.herokuapp.com/api/api/shares"
      );
      for (let i = 0; i < shares.data.data.length; i++) {
        await axios
          .get(
            "https://quiet-caverns-12881.herokuapp.com/api/api/shares/" +
              shares.data.data[i].id
          )
          .then((response) => {
            if (this.$route.name == "profile") {
              if (response.data.item.user_id == this.$store.state.user.id) {
                data.push(response.data);
              }
            } else if (this.$route.name == "detail") {
              if (response.data.item.id == this.id) {
                data.push(response.data);
              }
            } else {
              data.push(response.data);
            }
          });
      }
      this.shares = data;
      console.log(this.shares);
    },
  },
  created() {
    if (this.$route.name === "home") {
      this.path = false;
    }
    if (this.$route.name === "detail") {
      this.profile = false;
    }
    this.getShares();
  },
};
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