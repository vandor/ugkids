<template>
  <f7-page @page:beforein="onPageBeforeIn" @page:init="onPageInit">
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>Underground Kids</f7-nav-title>
      <f7-nav-right>
        <f7-link v-if="!isAuthenticated()" href="/login">Login</f7-link>
        <f7-link v-if="isAuthenticated()" href="/checkin">Check-In Page</f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-block inset>
      <div class="logo">
        <img src="../../img/ugkids.jpg" alt="logo"/>
      </div>
    </f7-block>
  </f7-page>
</template>
<script>
import AuthService from '../../auth/AuthService'
const auth = new AuthService()

export default {
  data () {
    return {
      auth,
    }
  },
  methods: {
    isAuthenticated: function() {
      return auth.isAuthenticated();
    },
    onPageInit: function() {
      auth.handleAuthentication(this.$f7router);
    },
    onPageBeforeIn: function(e) {
      this.$f7.views.left.router.navigate('/');
    },
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
