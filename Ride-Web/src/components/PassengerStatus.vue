<template>
  <div id="ride">
    <h1>Active Passengers</h1>
    <center>
      <center>
      <tr>
    <td>
        <input type="text" v-model="username" placeholder="Username">
    </td>
    <td>
        <button @click="getPassengers(username)">Get Passengers</button>
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
       <tr v-for="passenger in passengers" >
        <td id="border">{{passenger}}</td>
        <td id="border">Active</td>
      </tr>
      </center>
    </table>
    </center>
  </div>
</template>

<script src="./passengerStatus.js">
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