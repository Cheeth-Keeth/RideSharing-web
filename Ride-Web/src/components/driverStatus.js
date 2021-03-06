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
    created: function () {
        //Initializing participants from backend
          AXIOS.get('/findActiveUsers')
          .then(response => {
            // JSON responses are automatically parsed.
            //console.log(response.data)
            this.drivers = response.data
          })
          .catch(e => {
            this.errorRoute = e;
          });
      },
      methods: {
        getDrivers: function (driverName) {
            if(driverName==null){
                AXIOS.get(`/findActiveUsers/`+'!ALL!'+'/'+'Driver',{},{})
            .then(response => {
              // JSON responses are automatically parsed.
              console.log(response.data.length)
              this.drivers=response.data
              console.log(this.drivers)
              var i
              this.newDriver = ''
              this.errorDriver = ''
            })
            .catch(e => {
              var errorMsg = e.message
              console.log(errorMsg)
              this.errorDriver = errorMsg
            });
            }
            else{
                AXIOS.get(`/findActiveUsers/`+driverName+'/'+'Driver',{},{})
                .then(response => {
                    // JSON responses are automatically parsed.
                    console.log(response.data.length)
                    this.drivers=response.data
                    console.log(this.drivers)
                    var i
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
  }