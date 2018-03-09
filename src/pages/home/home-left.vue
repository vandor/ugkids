<template>
  <f7-page>
    <f7-navbar title=""></f7-navbar>
    <f7-block-title>Welcome</f7-block-title>
    <f7-list>
      <f7-list-button v-if="!authenticated" href="/login" view=".view-main" title="Login" panel-close></f7-list-button>
      <f7-list-button v-if="authenticated" href="/checkin" view=".view-main" title="Check-In Page" panel-close></f7-list-button>
    </f7-list>
  </f7-page>
</template>
<script>
import AuthService from '../../auth/AuthService'
const auth = new AuthService()
const { authenticated, authNotifier } = auth

export default {
  data () {
    authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
    })
    return {
      auth,
      authenticated,
    }
  }
}
</script>
