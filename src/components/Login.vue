<template>
  <v-container grid-list-xl text-xs-center>
    <v-layout row wrap>
      <v-flex xs10 offset-xs1>
        <v-form v-model="valid">
          <v-text-field label="Name" v-model="name" :rules="nameRules" :counter="10" required></v-text-field>
          <v-text-field label="E-mail" v-model="email" :rules="emailRules" required></v-text-field>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to login page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.main
  width: 450px;
  background: grey;
</style>
