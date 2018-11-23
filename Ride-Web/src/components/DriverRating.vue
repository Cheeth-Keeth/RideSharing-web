<template>
  <div id="ride">
    <h1>Drivers</h1>
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
        <button @click="createDriver(startDate,endDate)">Get Drivers</button>
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
        </tr>
       <tr v-for="driver in drivers" >
        <td id="border">{{driver.username}}</td>
        <td id="border">{{driver.rating}}</td>
      </tr>
      </center>
    </table>
    </center>
  </div>
</template>

<script src="./driverRating.js">
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