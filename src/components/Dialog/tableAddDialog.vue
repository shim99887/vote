<template>
  <div class="text-center">
    <v-dialog
        v-model="dialog"
        width="500"
        persistent
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="red lighten-2"
            dark
            v-bind="attrs"
            v-on="on"
        >
          Click Me
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
        this.$store.commit('setTitle', this.title);
        this.$store.commit('setTableAdd');
      }else{
        alert('제목 입력');
      }
    }
  }
}
</script>