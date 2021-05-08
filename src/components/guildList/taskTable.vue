<template>
  <v-app>
    <v-simple-table dark style="width: 300px">
      <thead>
      <tr style="background-color: yellow">
        <th style="color: black">{{title}}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(player, index) in players" :key="index">
        <td><v-row><span>{{player}}</span><v-spacer/><span style="cursor: pointer" @click="remove(index)">X</span></v-row></td>
      </tr>
      </tbody>
    </v-simple-table>
  </v-app>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  data(){
    return{
    }
  },
  props:{
    title:{
      type:String,
    },
    players:{
      type:Array,
    }
  },
  methods:{
    remove(index){
      this.$delete(this.players, index);
    }
  },
  computed:{
    ...mapGetters,
  },
  watch:{
  }
}
</script>