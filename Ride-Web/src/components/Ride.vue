<template>
  <div id="ride">
    <h2>Drivers</h2>
    <table>
        <tr v-for="driver in drivers" >
      <td>{{ driver }}</td>
  </tr>
      <tr>
    <td>
        <input type="text" v-model="newDriver" placeholder="Driver Name">
    </td>
    <td>
        <button @click="createDriver(newDriver)">Get Drivers</button>
    </td>
  </tr>
    </table>
    <p>
      <span style="color:red">Error: Message text comes here</span>
    </p>
  </div>
</template>

<script src="./ride.js">
</script>

<style>
  #ride {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    background: #f2ece8;
  }
</style>