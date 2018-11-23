<template>
  <div id="ride">
    <h1>Active Routes</h1>
    <center>
      <center>
      <tr>
    <td>
        <input type="text" v-model="startCity" placeholder="Start City">
    </td>
    <td>
        <input type="text" v-model="endCity" placeholder="End City">
    </td>
    <td>
        <button @click="getRoutes(startCity,endCity)">Get Routes</button>
    </td>
  </tr>
      </center>
      <p>



      </p>
    <table id="border">
      <center>
        <tr>
          <th id="border">Start City</th>
          <th id="border">End City</th>
          <th id="border">Date</th>
        </tr>
       <tr v-for="route in routes" >
        <td id="border">{{route.startCity}}</td>
        <td id="border">{{route.endCity}}</td>
        <td id="border">{{route.date}}</td>
      </tr>
      </center>
    </table>
    </center>
  </div>
</template>

<script src="./routeStatus.js">
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