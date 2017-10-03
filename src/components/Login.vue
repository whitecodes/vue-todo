<template>
  <v-container>
    <v-layout row justify-center>
      <v-card hover>
        <v-card-title>
          <span class="headline">{{msg}}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-layout wrap>
              <v-flex>
                <v-text-field single-line label="username" required v-model="user.username"></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field single-line label="password" required v-model="user.password" type="password"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="blue--text darken-1" v-on:click="signin" flat>Sign in</v-btn>
          <v-btn class="blue--text darken-1" v-on:click="signup" flat>Sign up</v-btn>
        </v-card-actions>
        <v-snackbar :timeout="5000" right v-model="snackbar">
          {{ time }}
          <v-btn flat class="pink--text" @click.native="snackbar = false">Close</v-btn>
        </v-snackbar>
      </v-card>
    </v-layout>
  </v-container>
</template> 

<script>
import axio from '../service/axio'
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to login page',
      user: {
        username: '',
        password: ''
      },
      time: '',
      snackbar: false
    }
  },

  methods: {
    signin: function () {
      console.log('username=' + this.user.username + ';password=' + this.user.password)
      axio.login(this.user).then((res) => {
        this.time = res.data
        this.snackbar = true
      }, (res) => {
        // debugger
        console.log(res)
        this.time = res.response.data.error
        this.snackbar = true
      })
    },

    signup: function () {
      console.log('username=' + this.user.username + ';password=' + this.user.password)
      axio.signUp(this.user).then((res) => {
        this.time = res.data
        this.snackbar = true
      }, (res) => {
        // debugger
        console.log(res)
        this.time = res.response.data.error
        this.snackbar = true
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.main
  // width: 450px;
  background: grey;
</style>
