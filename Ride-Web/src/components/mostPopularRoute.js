import axios from 'axios'
var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
  baseURL: backendUrl,
  headers: { 'Access-Control-Allow-Origin': frontendUrl }
})
function RouteDto (name) {
    this.name = name
  }
  export default {
    name: 'ride',
    data () {
      return {
        routes: [],
        newRoute: '',
        errorRoute: '',
        response: []
      }
    },

    created: function () {
        //Initializing participants from backend
          AXIOS.get('/mostPopularRoutes')
          .then(response => {
            // JSON responses are automatically parsed.
            //console.log(response.data)
            this.routes = response.data
          })
          .catch(e => {
            this.errorRoute = e;
          });
      },
      methods: {
        getRoutes: function (startDateName, endDateName) {
            AXIOS.get(`/mostPopularRoutes/`+startDateName+'/'+endDateName,{},{})
            .then(response => {
              // JSON responses are automatically parsed.
              //console.log(response.data.passengerName)
              //console.log(passengerName)
              //console.log(response.data)
              //console.log(response.data)
              console.log(response.data.length)
              //console.log(response.length)
              //console.log(response.status)
              //console.log(response.config)
              //console.log(response.)
              //console.log(this.passengers)
              this.routes=response.data
              // console.log(this.passengers)
              console.log(this.routes)
              var i
              // console.log('matt')
              // console.log(response.data)
              // console.log('hello')
              // console.log(this.passengers)
              //for (i = 0; i < response.data.length; i++) {
                //this.passengers.push(response.data[i])
                //console.log(response.data[i])
              //} 
              //console.log(this.passengers)
              this.newRoute = ''
              this.errorRoute = ''
            })
            .catch(e => {
              var errorMsg = e.message
              console.log(errorMsg)
              this.errorRoute = errorMsg
            });
          }
      }
  }