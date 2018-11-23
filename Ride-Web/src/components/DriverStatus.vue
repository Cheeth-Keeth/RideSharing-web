<template>
  <div id="ride">
    <h1>Active Drivers</h1>
    <center>
      <center>
      <tr>
    <td>
        <input type="text" v-model="username" placeholder="Username">
    </td>
    <td>
        <button @click="getDrivers(username)">Get Drivers</button>
    </td>
  </tr>
      </center>
      <p>



      </p>
    <table id="border">
      <center>
        <tr>
          <th id="border">Username</th>
          <th id="border">Status</th>
        </tr>
       <tr v-for="driver in drivers" >
        <td id="border">{{driver}}</td>
        <td id="border">Active</td>
      </tr>
      </center>
    </table>
    </center>
  </div>
</template>

<script src="./driverStatus.js">
</script>

<style>
  #ride {  
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #ffffff;
    background: #60b0f4;
    font-size: 0.6cm;
  }
  #border{
    border: 0.1px solid white;
  }
</style>