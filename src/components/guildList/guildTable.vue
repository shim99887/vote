<template>
  <v-app>
    <v-simple-table class="guildTable" dark  dense>
      <thead>
        <tr style="background-color: yellow;">
          <th style="color: black">길드원</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(element, index) in tableInfo" :key="index">
          <td :class="element.name" @click="clickedCharacter($event)">{{element.name}}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-app>
</template>
<script>
import {mapGetters} from 'vuex';
import $ from 'jquery';

export default {
  data() {
    return {
      guild: [],
      tableInfo:[],
      filtered:'',
      selected:'',
    }
  },
  created() {
    this.guild = require("@/data/guild.json");
    this.tableInfo = this.guild;
  },
  methods:{
    clickedCharacter(event){
      var name = event.target.className;
      // console.log(name);
      if(this.selected == ''){
        this.selected = name;
        $("." + this.selected).css('background', 'chocolate');
      }else{
        $('.' + this.selected).css('background', '');
        this.selected = name;
        $("." + this.selected).css('background', 'chocolate');
      }
      this.$store.commit('setSelected', this.selected);
    }
  },
  computed:{
    ...mapGetters([
        'getActiveBtn',
    ]),
    activeBtn(){
      return this.$store.getters.getActiveBtn;
    },
    setSelected(){
      return this.$store.getters.getSelected;
    }
  },
  watch:{
    activeBtn(val){
      this.filtered = val;
      if(this.filtered == "ALL"){
        this.tableInfo = this.guild;
      }else{
        this.tableInfo = [];
        for(var i=0; i < this.guild.length; i++){
          if(this.guild[i].job == this.filtered){
            this.tableInfo.push(this.guild[i]);
          }
        }
      }
    },
    setSelected(val){
      if(!val){
        $('.' + this.selected).css('background', '');
        this.selected = '';
      }
    }
  }
}
</script>
<style>
.guildTable{
  width: 200px;
  height: 300px;
  overflow: auto;
  position: fixed;
  top:20%;
  right:5%;
}
</style>