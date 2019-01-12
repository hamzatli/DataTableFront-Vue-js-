<template>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>

              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" v-model="username" label="Username" type="text"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" v-model="password" label="Password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="Black" @click='logIn'>Login</v-btn>
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
        password:null
      }
    },
    methods: {
      logIn(){
      //  this.$http.get('http://localhost:1212/user').then(console.log('Bu: ' , response))
        this.$http.post('http://localhost:1212/signin',{
              username: this.username,
              password: this.password
        }).then((response) => {
            localStorage.setItem('token' , response.body.token)
            console.log('++' ,response.body.token)
            if(response.body.token != null){
            this.$router.push('/datatable')
          }
        })
      }
    }
}
</script>
