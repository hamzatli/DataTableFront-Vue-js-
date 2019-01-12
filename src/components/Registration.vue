<template>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Signup</v-toolbar-title>
                <v-spacer></v-spacer>

              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" v-model="username" label="Username" type="text"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" v-model="password" label="Password" type="password"></v-text-field>
                  <v-text-field prepend-icon="person" v-model="firstname" label="First Name" type="text"></v-text-field>
                  <v-text-field prepend-icon="person" v-model="lastname" label="Last Name" type="text"></v-text-field>
                  <v-text-field prepend-icon="phone" v-model="phoneNumber" label="Phone Number" type="text"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="Black" type='submit' @click='registerUser'>Signup</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
</template>

<script>
export default {
    data(){
      return {
        username:null,
        password:null,
        firstname:null,
        lastname:null,
        phoneNumber:null,

      }
    },
    methods: {

      registerUser(){
      
        this.$http.post('http://localhost:1212/signup',{
              username: this.username,
              password: this.password,
              firstname:this.firstname,
              lastname:this.lastname,
              phoneNumber:this.phoneNumber
        }).then((response) => {
            console.log(response)
        })



    }
}
}
</script>
