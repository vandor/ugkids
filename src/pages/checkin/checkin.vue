<template>
  <f7-page @page:beforein="onPageBeforeIn">
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-right>
        <f7-link @click="logout($f7router)">Logout</f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-block inset>
      <iframe class="airtable-embed airtable-dynamic-height"
        src="https://airtable.com/embed/shrMODsLYDFOguxCr?backgroundColor=gray"
        frameborder="0" onmousewheel="" width="100%" height="1000"
        style="background: transparent; border-width: 0;"></iframe>
    </f7-block>
  </f7-page>
</template>
<script>
import AuthService from '../../auth/AuthService'
const auth = new AuthService()
const { logout } = auth

export default {
  methods: {
    logout,
    onPageBeforeIn: function(e) {
      this.$f7.views.left.router.navigate('/checkin-left', { reloadAll: true });
    },
  }
}
</script>

