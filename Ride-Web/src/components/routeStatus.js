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
          AXIOS.get('/findActiveRoutes')
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
        getRoutes: function (startCityName, endCityName) {
            if(startCityName==null&&endCityName==null){
                AXIOS.get(`/findActiveRoutes/`+'!ALL!'+'/'+'!ALL!',{},{})
            .then(response => {
              // JSON responses are automatically parsed.
              console.log(response.data.length)
              this.routes=response.data
              console.log(this.routes)
              var i
              this.newRoute = ''
              this.errorRoute = ''
            })
            .catch(e => {
              var errorMsg = e.message
              console.log(errorMsg)
              this.errorRoute = errorMsg
            });
            }
            else if(startCityName==null&&endCityName!=null){
                AXIOS.get(`/findActiveRoutes/`+'!ALL!'+'/'+endCityName,{},{})
                .then(response => {
                  // JSON responses are automatically parsed.
                  console.log(response.data.length)
                  this.routes=response.data
                  console.log(this.routes)
                  var i
                  this.newRoute = ''
                  this.errorRoute = ''
                })
                .catch(e => {
                  var errorMsg = e.message
                  console.log(errorMsg)
                  this.errorRoute = errorMsg
                });
            }
            else if(startCityName!=null&&endCityName==null){
                AXIOS.get(`/findActiveRoutes/`+startCityName+'/'+'!ALL!',{},{})
                .then(response => {
                  // JSON responses are automatically parsed.
                  console.log(response.data.length)
                  this.routes=response.data
                  console.log(this.routes)
                  var i
                  this.newRoute = ''
                  this.errorRoute = ''
                })
                .catch(e => {
                  var errorMsg = e.message
                  console.log(errorMsg)
                  this.errorRoute = errorMsg
                });
            }
            else{
                AXIOS.get(`/findActiveRoutes/`+startCityName+'/'+endCityName,{},{})
                .then(response => {
                  // JSON responses are automatically parsed.
                  console.log(response.data.length)
                  this.routes=response.data
                  console.log(this.routes)
                  var i
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
  }