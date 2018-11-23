import axios from 'axios'
var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
  baseURL: backendUrl,
  headers: { 'Access-Control-Allow-Origin': frontendUrl }
})
function DriverDto (name) {
    this.name = name
  }
  export default {
    name: 'ride',
    data () {
      return {
        drivers: [],
        newDriver: '',
        errorDriver: '',
        response: []
      }
    },
    // data () {
    //   return {
    //     startDate: '',
    //     errorStartDate: '',
    //     response: []
    //   }
    // },
    // data () {
    //   return {
    //     endDate: '',
    //     errorEndDate: '',
    //     response: []
    //   }
    // },
    created: function () {
        //Initializing participants from backend
          AXIOS.get('/findUsersInRange')
          .then(response => {
            // JSON responses are automatically parsed.
            //console.log(response.data)
            this.drivers = response.data
          })
          .catch(e => {
            this.errorDriver = e;
          });
      },
      methods: {
        createDriver: function (startDateName, endDateName) {
            AXIOS.get(`/findUsersInRange/`+startDateName+'/'+endDateName+'/Driver',{},{})
            .then(response => {
              // JSON responses are automatically parsed.
              //console.log(response.data.driverName)
              //console.log(driverName)
              //console.log(response.data)
              //console.log(response.data)
              console.log(response.data.length)
              //console.log(response.length)
              //console.log(response.status)
              //console.log(response.config)
              //console.log(response.)
              //console.log(this.drivers)
              this.drivers=response.data
              // console.log(this.drivers)
              console.log(this.drivers)
              var i
              // console.log('matt')
              // console.log(response.data)
              // console.log('hello')
              // console.log(this.drivers)
              //for (i = 0; i < response.data.length; i++) {
                //this.drivers.push(response.data[i])
                //console.log(response.data[i])
              //} 
              //console.log(this.drivers)
              this.newDriver = ''
              this.errorDriver = ''
            })
            .catch(e => {
              var errorMsg = e.message
              console.log(errorMsg)
              this.errorDriver = errorMsg
            });
          },
          listAll: function () {
            AXIOS.get(`/findUsersInRange/`+'0/1000000000'+'/Driver',{},{})
            .then(response => {
              // JSON responses are automatically parsed.
              console.log(response.data.length)
              this.drivers=response.data
              // console.log(this.drivers)
              console.log(this.drivers)
              var i
              // console.log('matt')
              // console.log(response.data)
              // console.log('hello')
              // console.log(this.drivers)
              //for (i = 0; i < response.data.length; i++) {
                //this.drivers.push(response.data[i])
                //console.log(response.data[i])
              //} 
              //console.log(this.drivers)
              this.newDriver = ''
              this.errorDriver = ''
            })
            .catch(e => {
              var errorMsg = e.message
              console.log(errorMsg)
              this.errorDriver = errorMsg
            });
          }

      }
  }