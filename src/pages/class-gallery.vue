<template>
  <f7-page @page:beforein="onPageBeforeIn">
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>{{ title }}</f7-nav-title>
      <f7-nav-right>
        <f7-link @click="logout($f7router)">Logout</f7-link>
      </f7-nav-right>
    </f7-navbar>
    <div class="embed-container">
      <div class="embed-row">
        <iframe class="airtable-embed"
          :src="shareUrl"
          frameborder="0" onmousewheel=""></iframe>
      </div>
    </div>
  </f7-page>
</template>
<script>
import AuthService from '../auth/AuthService'
const auth = new AuthService()
const { logout } = auth

export default {
  name: 'ugkids-class-gallery',
  props: [
    'title',
    'airtableShareId',
  ],
  computed: {
    shareUrl: function() {
      return 'https://airtable.com/embed/' + this.airtableShareId + '?backgroundColor=gray'
    },
  },
  methods: {
    logout,
    onPageBeforeIn: function(e) {
      this.$f7.views.left.router.navigate('/class-list-left', { reloadAll: true });
    },
  }
}
</script>
<style scoped>
.embed-container {
  display: table;
  empty-cells: show;
  border-collapse: collapse;
  width: 100%;
  height: 100%;
}
.embed-row {
  display: table-row;
  height: 100%;
  overflow: hidden
}
.embed-row iframe {
  width: 100%;
  height: 100%;
  border: none;
  margin: 0;
  padding: 0;
  display: block;
}
</style>
