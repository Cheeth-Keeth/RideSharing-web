<template>
  <div id="ride">
    <h1>Most Popular Routes</h1>
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
        <button @click="getRoutes(startDate,endDate)">Get Routes</button>
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
        </tr>
       <tr v-for="route in routes" >
        <td id="border">{{route.startCity}}</td>
        <td id="border">{{route.endCity}}</td>
      </tr>
      </center>
    </table>
    </center>
  </div>
</template>

<script src="./mostPopularRoute.js">
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