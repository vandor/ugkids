<template>
  <f7-page>
    <f7-navbar title=""></f7-navbar>
    <f7-block-title>Welcome</f7-block-title>
    <f7-list>
      <f7-list-item link="/login" view=".view-main" title="Login" panel-close v-if="!isAuthenticated()"></f7-list-item>
      <f7-list-item link="/checkin" view=".view-main" title="Check-In Page" panel-close v-if="isAuthenticated() && !isKidsChurchWorker()"></f7-list-item>
      <f7-list-item link="/class-list" view=".view-main" title="Kids Church Classes" panel-close v-if="isAuthenticated() && isKidsChurchWorker()"></f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
import AuthService from '../../auth/AuthService'
const auth = new AuthService()
const { isAuthenticated, isKidsChurchWorker } = auth

export default {
  methods: {
    isAuthenticated,
    isKidsChurchWorker,
  },
}
</script>
