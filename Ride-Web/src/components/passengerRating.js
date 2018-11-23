import axios from 'axios'
var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
  baseURL: backendUrl,
  headers: { 'Access-Control-Allow-Origin': frontendUrl }
})
function PassengerDto (name) {
    this.name = name
  }
  export default {
    name: 'ride',
    data () {
      return {
        passengers: [],
        newPassenger: '',
        errorPassenger: '',
        response: []
      }
    },
    created: function () {
        //Initializing participants from backend
          AXIOS.get('/findUsers')
          .then(response => {
            // JSON responses are automatically parsed.
            this.passengers = response.data
          })
          .catch(e => {
            this.errorPassenger = e;
          });
      },
      methods: {
        createDriver: function (passengerName) {
            AXIOS.get(`/findUsers/`+passengerName+'/Passenger',{},{})
            .then(response => {
              // JSON responses are automatically parsed.
              //console.log(response.data.driverName)
              console.log(passengerName)
              //console.log(response.data)
              console.log(response.data.length)
              //console.log(response.length)
              //console.log(response.status)
              //console.log(response.config)
              //console.log(response.)
              var i
              for (i = 0; i < response.data.length; i++) {
                this.passengers.push(response.data[i])
              } 
              console.log(this.passengers)
              this.newDriver = ''
              this.errorDriver = ''
            })
            .catch(e => {
              var errorMsg = e.message
              console.log(errorMsg)
              this.errorPassenger = errorMsg
            });
          }
      }
  }