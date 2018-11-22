<template>
  <div id="ride">
    <h2>Drivers</h2>
    <center>
      <center>
      <tr>
    <td>
        <input type="text" v-model="newDriver" placeholder="Driver Name">
    </td>
    <td>
        <button @click="createDriver(newDriver)">Get Drivers</button>
    </td>
  </tr>
      </center>
    <table>
      <center>
        <tr>
          <th>Username</th>
          <th>Ranking</th>
        </tr>
       <tr v-for="driver in drivers" >
        <td>{{driver.username}}</td>
        <td>{{driver.rating}}</td>
      </tr>
      </center>
    </table>
    </center>
    <p>
      <span style="color:red">Error: Message text comes here</span>
    </p>
  </div>
</template>

<script src="./driverRating.js">
</script>

<style>
  #ride {  
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #60b0f4;
    background: #f2ece8;
  }
    table, td, th{
    border: 1px solid black;
}
</style>