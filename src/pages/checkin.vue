<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>Underground Kids</f7-nav-title>
      <f7-nav-right>
        <f7-link @click="login()">Login</f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-block inset>
      <iframe class="airtable-embed airtable-dynamic-height"
        src="https://airtable.com/embed/shrHBng7hfocMwcAj?backgroundColor=gray"
        frameborder="0" onmousewheel="" width="100%" height="1000"
        style="background: transparent; border-width: 0;"></iframe>
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

