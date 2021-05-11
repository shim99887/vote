<template>
  <v-app>
    <v-container>
    <v-row>
      <v-col style="height: 310px;" cols="4" v-for="(element, index) in tableList" :key="index" @click="colClick(index)">
        <taskTable :info="element" @deleteTableIndex="deleteTable(element)"/>
      </v-col>

    </v-row>
    <table-add-dialog style="position: fixed; right: 5%;top: 13%;z-index: 100" @partyCreateSuccess="partyCreateSuccess"/>
    <guild-list></guild-list>
    <bottomNavbar></bottomNavbar>
    </v-container>
  </v-app>
</template>
<script>
import guildList from "../components/guildList/guildTable"
import bottomNavbar from "../components/Navigation/bottomNavbar";
import tableAddDialog from "../components/Dialog/tableAddDialog";
import taskTable from "../components/guildList/taskTable";
import axios from 'axios';
import {mapGetters} from "vuex";

const SERVER_URL = process.env.VUE_APP_SERVER_URL;

export default {
  components: {
    bottomNavbar,
    guildList,
    tableAddDialog,
    taskTable,
  },
  data(){
    return{
      tableList:[],
    }
  },
  created(){
    axios.get(`${SERVER_URL}/party`)
    .then(response => {
      this.tableList = response.data;
    })
  },
  methods:{
    colClick(index){
      var name = this.$store.getters.getSelected;
      if(name){
        axios.post(`${SERVER_URL}/party/player`, {
            "party_no":this.tableList[index].party_no,
            "id":name.id,
        })
        .then(() => {
          axios.get(`${SERVER_URL}/party`)
              .then(response => {
                this.tableList = response.data;
              })
          this.$store.commit("setSelected", '');
        })
      }
    },
    partyCreateSuccess(){
      axios.get(`${SERVER_URL}/party`)
          .then(response => {
              this.tableList = response.data;
              console.log(this.tableList);
          })
    },
    deleteTable(value){
      console.log(value);
      axios.delete(`${SERVER_URL}/party`,{
        data:{
          no:value.party_no,
        }
      })
      .then(() => {
        axios.get(`${SERVER_URL}/party`)
            .then(response => {
              this.tableList = response.data;
              console.log(this.tableList);
            })
      })
    }
  },
  computed:{
    ...mapGetters,
  },
  watch:{
  }
};
</script>
<style>
</style>