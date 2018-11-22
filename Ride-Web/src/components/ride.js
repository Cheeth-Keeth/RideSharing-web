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
          AXIOS.get(`/findUsers`)
          .then(response => {
            // JSON responses are automatically parsed.
            this.drivers = response.data
          })
          .catch(e => {
            this.errorDriver = e;
          });
      },
      methods: {
        createDriver: function (driverName) {
            AXIOS.get(`/findUsers/`+driverName+'/Driver',{},{})
            .then(response => {
              // JSON responses are automatically parsed.
              //console.log(response.data.driverName)
              console.log(driverName)
              //console.log(response.data)
              console.log(response.data.length)
              //console.log(response.length)
              //console.log(response.status)
              //console.log(response.config)
              //console.log(response.)
              this.drivers.push(response.data)
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
  