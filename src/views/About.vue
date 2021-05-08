<template>
  <div class="container">
    <v-simple-table class="vote_table" dark>
      <thead>
      <tr>
        <th class="text-center">
          비아키스 노말
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(character, index) in characters" :key="index">
        <td class="character">
          {{character}}
        </td>
      </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>
<script>

export default {
  name: 'Home',
  data(){
    return{
      characters:[
        '야코옹',
        '이코옹',
        '타락파워유꾸',
        '인파유스',
        '민트맛동산',
        '월니',
        '궁디판다',

      ],
    };
  },
  components: {
  },
}
</script>
<style>
.vote_table{
  width: 200px;
}
.character{
  text-align: center;
}
</style>