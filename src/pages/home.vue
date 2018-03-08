<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>Underground Kids</f7-nav-title>
      <f7-nav-right>
        <f7-link v-if="!authenticated" @click="login()">Login</f7-link>
        <f7-link v-if="authenticated" href="/checkin">Check-In Page</f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-block inset>
      <div class="logo">
        <img src="../img/ugkids.jpg" alt="logo"/>
      </div>
    </f7-block>
  </f7-page>
</template>
<script>
import AuthService from '../auth/AuthService'
const auth = new AuthService()
const { login, logout, authenticated, authNotifier } = auth

export default {
  data () {
    authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
    })
    return {
      auth,
      authenticated,
    }
  },
  methods: {
    login,
    logout
  }
}
</script>
<style scoped>
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo img {
  max-height: 300px;
  max-width: 400px;
  height: auto;
  width: auto;
}
</style>
