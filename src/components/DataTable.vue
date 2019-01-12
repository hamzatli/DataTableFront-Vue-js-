<template>
  <div>

<v-btn color="Black" @click='logout'>Log Out</v-btn>
    <v-toolbar flat color="white">
      <v-toolbar-title>DataTable</v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px" >
        <v-btn slot="activator" color="primary" id="new" dark class="mb-2">New Item</v-btn>
        <v-card id="modal">
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.surname" label="Surname"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.age" label="Age"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.salary" label="Salary"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="columns"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td  style="font-size: 16px " >{{ props.item.id }}</td>
        <td class="text-xs-right" style="font-size: 16px">{{ props.item.name }}</td>
        <td class="text-xs-right" style="font-size: 16px">{{ props.item.surname }}</td>
        <td class="text-xs-right" style="font-size: 16px">{{ props.item.age }}</td>
        <td class="text-xs-right" style="font-size: 16px">{{ props.item.salary }}</td>
        <td class="justify-center layout px-0">
          <v-icon :disabled=false
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
      <template slot="no-data">
        <v-btn color="blue" @click="created">Reset</v-btn>
      </template>
    </v-data-table>

  </div>
</template>

<script>

  const postData = {

  }

  export default {
    data: () => ({
      authorizationToken: "",
      dialog: false,
      headers: [
        {
          text: 'id',
          align: 'left',
          sortable: false,
          value: 'id'
        },
        { text: 'name', value: 'name' },
        { text: 'surname', value: 'surname' },
        { text: 'age', value: 'age' },
        { text: 'salary', value: 'salary' },
        { text: 'Actions', value: 'name', sortable: false }
      ],
      columns: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.fetchData();
    },



    methods: {
      fetchData(){
          this.$http.get('http://localhost:1212/column').then(function(data){
              console.log(data);
              this.columns = data.body;
          })
        },

        logout(){
            localStorage.setItem('token' , null)
              this.$router.push('/')
        },

      editItem (item) {
        this.editedIndex = this.columns.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.columns.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.columns.splice(index, 1)

        this.$http.delete('http://localhost:1212/column' + '/' + item.id);
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {

          // TODO: request;
          this.$http.put('http://localhost:1212/column',{
                id: this.editedItem.id,
                name: this.editedItem.name,
                surname: this.editedItem.surname,
                age: this.editedItem.age,
                salary: this.editedItem.salary
          })

          Object.assign(this.columns[this.editedIndex], this.editedItem)
        } else {

          this.$http.post('http://localhost:1212/column',{
                name: this.editedItem.name,
                surname: this.editedItem.surname,
                age: this.editedItem.age,
                salary: this.editedItem.salary
          })

          this.columns.push(this.editedItem)
        }
        this.close()
      }
    }
  }

</script>

<style scoped>

td{
  font-size: 20px;
},

#modal{
  height: auto;
}

#name{
  background-color: white
}


</style>
