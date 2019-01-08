<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>


    <DataTable></DataTable>


      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>


<script>
import DataTable from './DataTable.vue'


export default {
    data(){
      return {
       columns:[]
      }
    },
    components:{
      DataTable

    },
    methods:{
      fetchData(){
          this.$http.get('http://localhost:1212/column').then(function(data){
              console.log(data);
              this.columns = data.body;
          })
        }

    }
}
</script>




// initialize(){
//     this.fetchData();
// },
//  initialize () {
    // this.columns = [
    //   {
    //     name: 'Frozen Yogurt',
    //     calories: 159,
    //     fat: 6.0,
    //     carbs: 24,
    //     protein: 4.0
    //   },
    //   {
    //     name: 'Ice cream sandwich',
    //     calories: 237,
    //     fat: 9.0,
    //     carbs: 37,
    //     protein: 4.3
    //   },
    //   {
    //     name: 'Eclair',
    //     calories: 262,
    //     fat: 16.0,
    //     carbs: 23,
    //     protein: 6.0
    //   },
    //   {
    //     name: 'Cupcake',
    //     calories: 305,
    //     fat: 3.7,
    //     carbs: 67,
    //     protein: 4.3
    //   },
    //   {
    //     name: 'Gingerbread',
    //     calories: 356,
    //     fat: 16.0,
    //     carbs: 49,
    //     protein: 3.9
    //   },
    //   {
    //     name: 'Jelly bean',
    //     calories: 375,
    //     fat: 0.0,
    //     carbs: 94,
    //     protein: 0.0
    //   },
    //   {
    //     name: 'Lollipop',
    //     calories: 392,
    //     fat: 0.2,
    //     carbs: 98,
    //     protein: 0
    //   },
    //   {
    //     name: 'Honeycomb',
    //     calories: 408,
    //     fat: 3.2,
    //     carbs: 87,
    //     protein: 6.5
    //   },
    //   {
    //     name: 'Donut',
    //     calories: 452,
    //     fat: 25.0,
    //     carbs: 51,
    //     protein: 4.9
    //   },
    //   {
    //     name: 'KitKat',
    //     calories: 518,
    //     fat: 26.0,
    //     carbs: 65,
    //     protein: 7
    //   }
    // ]
  //},
