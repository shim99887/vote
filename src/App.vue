<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="4" v-for="(element, index) in titleList" :key="index" @click="colClick(index)">
          <taskTable :class="index" :title="element" :players="playerList[index]"/>
        </v-col>

      </v-row>
      <table-add-dialog style="position: fixed; top:5%; right: 5%;"/>
      <guild-list></guild-list>
      <bottomNavbar></bottomNavbar>
    </v-container>
  </v-app>
</template>
<script>
// import CardList from "./components/CardList.vue";
import guildList from "./components/guildList/guildTable"
import bottomNavbar from "./components/Navigation/bottomNavbar";
import tableAddDialog from "./components/Dialog/tableAddDialog";
import taskTable from "./components/guildList/taskTable";
import {mapGetters} from "vuex";
export default {
  name: "App",
  components: {
    // CardList,
    bottomNavbar,
    guildList,
    tableAddDialog,
    taskTable,
  },
  data(){
    return{
      titleList:[],
      playerList:[],
    }
  },
  methods:{
    colClick(index){
      var name = this.$store.getters.getSelected;
      if(name){
        this.playerList[index].push(name);
        this.$store.commit('setSelected', '');
      }
    }
  },
  computed:{
    ...mapGetters,
    setTitle(){
      return this.$store.getters.getTitle;
    },
    setTableAdd(){
      return this.$store.getters.getTableAdd;
    }
  },
  watch:{
    setTitle(val){
      this.titleList.push(val);
    },
    setTableAdd(){
      this.playerList.push(new Array());
    }
  }
};
</script>
<style>
body {
  background: #f6f9fc;
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: fixed;
}
:root {
  font-size: 10px;
}
</style>