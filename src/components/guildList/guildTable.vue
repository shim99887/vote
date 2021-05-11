<template>
  <v-app>
    <v-simple-table class="guildTable" dark  dense>
      <thead>
        <tr style="background-color: yellow;">
          <th style="color: black;font-size: 20px"><span>길드원</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(element, index) in tableInfo" :key="index">
          <td style="font-size: 15px" :class="element.id" @click="clickedCharacter($event)">{{element.id}} / {{element.job}}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-app>
</template>
<script>
import {mapGetters} from 'vuex';
import $ from 'jquery';
import axios from 'axios';

const SERVER_URL = process.env.VUE_APP_SERVER_URL;

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
    axios.get(`${SERVER_URL}/user`)
    .then(response => {
      console.log(response);
      this.guild = response.data;
      this.tableInfo = this.guild;
    })
    .catch(error => {
      alert(error);
    })
  },
  methods:{
    clickedCharacter(event){
      var name = event.target.className;
      // console.log(name);
      if(this.selected == ''){
        for(var i=0; i<this.guild.length; i++){
          if(name == this.guild[i].id){
            this.selected = this.guild[i];
            break;
          }
        }
        $("." + this.selected.id).css('background', 'chocolate');
      }else{
        $('.' + this.selected.id).css('background', '');
        for(var j=0; j<this.guild.length; j++){
          if(name == this.guild[j].id){
            this.selected = this.guild[j];
            break;
          }
        }
        $("." + this.selected.id).css('background', 'chocolate');
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
        $('.' + this.selected.id).css('background', '');
        this.selected = {};
      }
    }
  }
}
</script>
<style>
.guildTable{
  width: 210px;
  height: 300px;
  overflow: auto;
  position: fixed;
  top:20%;
  right:0%;
}
</style>