<template>
  <div>
    <v-simple-table dense dark style="width: 300px;height: 300px;">
      <thead>
      <tr style="background-color: yellow">
        <th style="color: black; font-size: 20px"><v-row><span>{{info.title}}</span><v-spacer/><span style="cursor: pointer" @click="tableDelete()">X</span></v-row></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(player, index) in info.players" :key="index">
        <td style="font-size: 20px; font-family: myFont"><v-row><span>{{player.id}}</span><v-spacer/><span style="cursor: pointer" @click="remove(player.no)">X</span></v-row></td>
      </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
import axios from 'axios';

const SERVER_URL = process.env.VUE_APP_SERVER_URL;

export default {
  data(){
    return{
    }
  },
  created(){
    // console.log(this.info);
  },
  props:{
    info:{
      type:Object,
    }
  },
  methods:{
    remove(index){
      axios.delete(`${SERVER_URL}/party/player`, {
        data:{
          no : index,
        }
      })
      .then(response => {
        console.log(response);
        for(var i=0; this.info.players.length; i++){
          var num = this.info.players[i].no;
          if(num == index){
            this.$delete(this.info.players, i);
          }
        }
      })
    },
    tableDelete(){
      this.$emit('deleteTableIndex');
    }
  },
  computed:{
    ...mapGetters,
  },
  watch:{
  }
}
</script>
<style>
@font-face {
  font-family: 'myFont';
  src: url("../../fonts/중나좋체 Medium.ttf");
}
</style>