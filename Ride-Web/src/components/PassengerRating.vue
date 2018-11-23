<template>
  <div id="ride">
    <h1>Passengers</h1>
    <center>
      <center>
      <tr>
    <td>
        <input type="text" v-model="newPassenger" placeholder="Passenger Name">
    </td>
    <td>
        <button @click="createPassenger(newPassenger)">Get Passengers</button>
    </td>
  </tr>
      </center>
      <p>



      </p>
    <table id="border">
      <center>
        <tr>
          <th id="border">Username</th>
          <th id="border">Ranking</th>
        </tr>
       <tr v-for="passenger in passengers" >
        <td id="border">{{passenger.username}}</td>
        <td id="border">{{passenger.rating}}</td>
      </tr>
      </center>
    </table>
    </center>
    <p>
      <span style="color:red">Error: Message text comes here</span>
    </p>
  </div>
</template>

<script src="./passengerRating.js">
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