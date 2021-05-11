<template>
  <div class="text-center">
    <v-dialog
        v-model="dialog"
        width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="red lighten-2"
            dark
            v-bind="attrs"
            v-on="on"

        >
          테이블 생성
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          파티 테이블 추가
        </v-card-title>

        <v-card-text>
          <div>
            <v-text-field label="테이블 명" v-model="title"></v-text-field>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <div>
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                text
                @click="dialogClose"
            >
              I accept
            </v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import axios from 'axios'
const SERVER_URL = process.env.VUE_APP_SERVER_URL;
export default {
  data () {
    return {
      dialog: false,
      title:'',
    }
  },
  methods:{
    dialogClose(){
      if(this.title){
        this.dialog = false;

        axios.post(`${SERVER_URL}/party/` + this.title)
        .then(response => {
          console.log("파티 생성 성공", response);
          this.$emit('partyCreateSuccess');
        })
        this.$store.commit('setTableAdd');
      }else{
        alert('제목 입력');
      }
    }
  }
}
</script>