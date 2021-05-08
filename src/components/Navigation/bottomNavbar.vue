<template>
  <div class="overflow-hidden">
    <div class="text-center mb-2" style="bottom: 0px;">
      <v-btn
          text
          color="deep-purple"
          @click="showNav = !showNav"
      >
        Toggle Nav
      </v-btn>
    </div>
    <v-bottom-navigation
        v-model="activeBtn"
        :input-value="showNav"
        class="navbar"
        color="indigo"
    >
      <div>

        <v-btn class="navbar_btns">
          <span class="classTxt" @click="btnClick($event)">ALL</span>
        </v-btn>
        <v-btn class="navbar_btns">
          <span class="classTxt" @click="btnClick($event)">리퍼</span>
        </v-btn>
        <v-btn class="navbar_btns">
          <span class="classTxt" @click="btnClick($event)">바드</span>
        </v-btn>
        <v-btn class="navbar_btns">
          <span class="classTxt" @click="btnClick($event)">서머너</span>
        </v-btn>
        <v-btn class="navbar_btns">
          <span class="classTxt" @click="btnClick($event)">데모닉</span>
        </v-btn>
        <v-btn class="navbar_btns">
          <span class="classTxt" @click="btnClick($event)">블레이드</span>
        </v-btn>
        <v-btn class="navbar_btns">
          <span class="classTxt" @click="btnClick($event)">아르카나</span>
        </v-btn>
        <v-btn class="navbar_btns" style="background-color: black">
          <span class="classTxt" @click="btnClick($event)">인파이터</span>
        </v-btn>
        <v-btn class="navbar_btns">
          <span class="classTxt" @click="btnClick($event)">배틀마스터</span>
        </v-btn>
        <v-btn class="navbar_btns">
          <span class="classTxt" @click="btnClick($event)">기공사</span>
        </v-btn>
        <v-btn class="navbar_btns">
          <span class="classTxt" @click="btnClick($event)">창술사</span>
        </v-btn>
        <v-btn class="navbar_btns">
          <span class="classTxt" @click="btnClick($event)">워로드</span>
        </v-btn>
        <v-btn class="navbar_btns">
          <span class="classTxt" @click="btnClick($event)">버서커</span>
        </v-btn>
        <v-btn class="navbar_btns">
          <span class="classTxt" @click="btnClick($event)">디스트로이어</span>
        </v-btn>
        <v-btn class="navbar_btns">
          <span class="classTxt" @click="btnClick($event)">홀리나이트</span>
        </v-btn>
        <v-btn class="navbar_btns">
          <span class="classTxt" @click="btnClick($event)">건슬링어</span>
        </v-btn>
        <v-btn class="navbar_btns">
          <span class="classTxt" @click="btnClick($event)">스트라이커</span>
        </v-btn>
      </div>

    </v-bottom-navigation>
  </div>
</template>
<style scoped>
.navbar {
  bottom: 5%;
  position: fixed;
}

.navbar_btns {
  background-color: white !important;
}

.classTxt{
  font-size: 15px;
}
</style>
<script>
export default {
  data() {
    return {
      activeBtn: 0,
      showNav: true,
      guild: [],
      vue: this,
    }
  },
  created() {
    this.guild = require("@/data/guild.json");
    console.log(this.guild);
    console.log(this.getBtn);
  },
  methods:{
      btnClick(event){
        console.log(event);
        this.vue.$store.commit('setActiveBtn', event.target.innerText);
        this.$store.commit('setSelected', '');
        console.log(this.vue.$store.getters.getActiveBtn);
      }
  },
}
</script>
