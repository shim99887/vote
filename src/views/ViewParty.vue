<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col style="height: 310px;" v-for="(element, index) in tableList" :key="index" cols="4">
          <viewTable :info="element"/>
        </v-col>

      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import viewTable from "../components/guildList/viewTable";
import axios from 'axios';
import {mapGetters} from "vuex";

const SERVER_URL = process.env.VUE_APP_SERVER_URL;

export default {
  components: {
    viewTable
  },
  data(){
    return{
      tableList:[],
    }
  },
  methods:{
  },
  created(){
    axios.get(`${SERVER_URL}/party`)
    .then(response => {
      this.tableList = response.data;
    })
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
</style>