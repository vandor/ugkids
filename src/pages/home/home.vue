<template>
  <f7-page @page:beforein="onPageBeforeIn" @page:init="onPageInit">
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-right>
        <f7-link v-if="!isAuthenticated()" href="/login">Login</f7-link>
        <f7-link v-if="isAuthenticated() && !isKidsChurchWorker()" href="/checkin">Check-In Page</f7-link>
        <f7-link v-if="isAuthenticated() && isKidsChurchWorker()" href="/class-list">Classes</f7-link>
      </f7-nav-right>
    </f7-navbar>
    <div class="text-container">
      <f7-block strong inset>
        <div class="logo">
          <img src="../../img/ugkids.jpg" alt="banner"/>
        </div>
      </f7-block>
    </div>

    <f7-block-title class="text-align-center" style="font-weight: bold">Welcome to Kids Church</f7-block-title>
    <div class="text-container">
      <f7-block strong inset class="text-align-justify">
        <p>We love kids - and Jesus - and pray for the opportunity to help them meet him in deep ways. We also know Crucible to be a seminal moment for parents as they grow as missionaries and Kids Church gives them space to hear from the Lord and respond.</p>
        <p>Kids Church is entirely volunteer run and we are working diligently to improve what we offer our families. Thanks for your continued assistance and prayer.</p>
      </f7-block>
    </div>
  </f7-page>
</template>
<script>
import AuthService from '../../auth/AuthService'
const auth = new AuthService()
const { isAuthenticated, isKidsChurchWorker } = auth

export default {
  data () {
    return {
      auth,
    }
  },
  methods: {
    isAuthenticated,
    isKidsChurchWorker,
    onPageInit: function() {
      auth.handleAuthentication(this.$f7router);
    },
    onPageBeforeIn: function(e) {
      this.$f7.views.left.router.navigate('/left', { reloadAll: true });
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
  max-width: 100%;
}
.text-container {
  max-width: 30rem;
  margin-left: auto;
  margin-right: auto;
}
</style>
