<template>
<div class="testingChat">

  <div id="message-container"></div>
  <form id="form">
    <label for="message-input">Message</label>
    <input type="text" id="message-input" v-model="text">
    <button type="submit" id="send-button" @click="send">Send</button>
  </form>

</div>




</template>