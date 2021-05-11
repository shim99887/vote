<template>
  <v-app-bar
      dense
      prominent
      height="50px"
  >
<!--    <v-btn outlined class="mr-5" v-if="info" @click="$router.push('/vote')">투표하러 가기</v-btn>-->
    <v-btn outlined class="mr-5" v-if="info" @click="$router.push('/viewParty')">파티보러 가기</v-btn>
    <v-btn outlined v-if="role=='admin'" @click="$router.push('/modify')">파티수정</v-btn>
    <v-spacer/><span v-if="info" style="float: right">{{info}}님 환영합니다~ </span>
    <v-btn v-if="info" outlined @click="logout">로그아웃</v-btn>
    <v-btn v-else outlined @click="$router.push('/')">로그인</v-btn>
  </v-app-bar>
</template>
<script>
export default {
  data(){
    return{
      info:'',
      role:'',
    }
  },
  created(){
    this.info = localStorage.getItem('loginedId');
    this.role = localStorage.getItem('loginedRole');
  },
  methods:{
    logout(){
      localStorage.clear();
      location.href = "/";
    }
  }
}
</script>