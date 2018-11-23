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
          AXIOS.get('/findActiveUsers')
          .then(response => {
            // JSON responses are automatically parsed.
            //console.log(response.data)
            this.passengers = response.data
          })
          .catch(e => {
            this.errorPassenger = e;
          });
      },
      methods: {
        getPassengers: function (passengerName) {
            if(passengerName==null){
                AXIOS.get(`/findActiveUsers/`+'!ALL!'+'/'+'Passenger',{},{})
            .then(response => {
              // JSON responses are automatically parsed.
              console.log(response.data.length)
              this.passengers=response.data
              console.log(this.passengers)
              var i
              this.newPassenger = ''
              this.errorPassenger = ''
            })
            .catch(e => {
              var errorMsg = e.message
              console.log(errorMsg)
              this.errorPassenger = errorMsg
            });
            }
            else{
                AXIOS.get(`/findActiveUsers/`+passengerName+'/'+'Passenger',{},{})
                .then(response => {
                    // JSON responses are automatically parsed.
                    console.log(response.data.length)
                    this.passengers=response.data
                    console.log(this.passengers)
                    var i
                    this.newPassenger = ''
                    this.errorPassenger = ''
                  })
                  .catch(e => {
                    var errorMsg = e.message
                    console.log(errorMsg)
                    this.errorPassenger = errorMsg
                  });
            }
            
          }
      }
  }