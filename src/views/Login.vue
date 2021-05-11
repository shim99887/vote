<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                      prepend-icon="person"
                      name="login"
                      label="Login"
                      type="text"
                      v-model="id"
                  ></v-text-field>
                  <v-text-field
                      id="password"
                      prepend-icon="lock"
                      name="password"
                      label="Password"
                      type="password"
                      v-model="pwd"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios';
const SERVER_URL = process.env.VUE_APP_SERVER_URL;

export default {
  name: 'Login',
  props: {
    source: String,
  },
  data(){
    return{
      id:'',
      pwd:'',
    }
  },
  created(){
    localStorage.clear();
  },
  methods:{
    login(){
      axios.post(`${SERVER_URL}/user/login`, {
        "id" : this.id,
        "password" : this.pwd
      })
      .then(response => {
        console.log(response);
        localStorage.setItem("loginedId", response.data.id);
        localStorage.setItem("loginedRole", response.data.role);
        location.href = "/viewParty";
      })
      .catch((error) => {
        console.log(error);
        alert("로그인 실패");
      })
    }
  }
};
</script>

<style></style>
