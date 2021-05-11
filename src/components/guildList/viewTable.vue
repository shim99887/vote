<template>
  <div>
    <v-simple-table dense dark style="width: 300px;height: 300px;">
      <thead>
      <tr style="background-color: yellow">
        <th style="color: black; font-size: 20px"><span>{{info.title}}</span></th>
      </tr>
      </thead>
      <tbody>
        <tr  v-for="(element, index) in info.players" :key="index">
          <td style="font-size: 20px; font-family: myFont"><span>{{element.id}}</span></td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  data(){
    return{
    }
  },
  props:{
    info:{
      type:Object,
    }
  },
  created(){
    console.log(this.players);
  },
  methods:{
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