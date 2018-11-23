<template>
  <div id="ride">
    <h1>Passengers</h1>
    <center>
      <center>
      <tr>
    <td>
        <input type="text" v-model="startDate" placeholder="DD-MM-YYYY">
    </td>
    <td>
        <input type="text" v-model="endDate" placeholder="DD-MM-YYYY">
    </td>
    <td>
        <button @click="createPassenger(startDate,endDate)">Get Passengers</button>
    </td>
  </tr>
      </center>
      <p>



      </p>
    <table id="border">
      <center>
        <tr>
          <th id="border">Username</th>
          <th id="border">Rating</th>
          <th id="border">Trips Completed</th>
        </tr>
       <tr v-for="passenger in passengers" >
        <td id="border">{{passenger.username}}</td>
        <td id="border">{{passenger.rating}}</td>
        <td id="border">{{passenger.ridesTravelled}}</td>
      </tr>
      </center>
    </table>
    </center>
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