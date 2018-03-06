<template>
  <f7-page>
    <div class="spinner">
      <img src="../img/loading.svg" alt="loading"/>
    </div>
  </f7-page>
</template>

<script>
import AuthService from '../auth/AuthService'
const auth = new AuthService()

export default {
  name: 'callback',
  data () {
    auth.handleAuthentication(this.$f7router)
    return {}
  }
}
</script>

<style>
  .spinner {
    position: absolute;
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: white;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
