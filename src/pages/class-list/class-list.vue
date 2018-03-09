<template>
  <f7-page @page:beforein="onPageBeforeIn">
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>Class List</f7-nav-title>
      <f7-nav-right>
        <f7-link @click="logout($f7router)">Logout</f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-row>
      <f7-col width="50">
				<f7-link href="/class-list/nursery">
					<f7-card class="demo-card-header-pic">
						<f7-card-header
							class="no-border"
							valign="bottom"
							style="background-color: #F5C500"
						>Nursery</f7-card-header>
						<f7-card-content>
							<p class="label">Infants - 2 Year Olds</p>
						</f7-card-content>
					</f7-card>
				</f7-link>
      </f7-col>
      <f7-col width="50">
				<f7-link href="/class-list/preschool">
					<f7-card class="demo-card-header-pic">
						<f7-card-header
							class="no-border"
							valign="bottom"
							style="background-color: #00AC9E"
						>Preschool</f7-card-header>
						<f7-card-content>
							<p class="label">3 - 5 Year Olds</p>
						</f7-card-content>
					</f7-card>
				</f7-link>
      </f7-col>
    </f7-row>

    <f7-row>
      <f7-col width="50">
				<f7-link href="/class-list/jr-elementary">
					<f7-card class="demo-card-header-pic">
						<f7-card-header
							class="no-border"
							valign="bottom"
							style="background-color: #FF573F"
						>Jr Elementary</f7-card-header>
						<f7-card-content>
							<p class="label">Kindergarten - 2nd Graders</p>
						</f7-card-content>
					</f7-card>
				</f7-link>
      </f7-col>
      <f7-col width="50">
				<f7-link href="/class-list/elementary">
					<f7-card class="demo-card-header-pic">
						<f7-card-header
							class="no-border"
							valign="bottom"
							style="background-color: #5800EE"
						>Elementary</f7-card-header>
						<f7-card-content>
							<p class="label">3rd - 5th Graders</p>
						</f7-card-content>
					</f7-card>
				</f7-link>
      </f7-col>
    </f7-row>
  </f7-page>
</template>
<script>
import AuthService from '../../auth/AuthService'
const auth = new AuthService()
const { logout, authenticated, authNotifier } = auth

export default {
  data () {
    authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
      if (!this.authenticated) {
        this.$f7router.navigate('/home');
      }
    })
    return {
      auth,
      authenticated,
    }
  },
  methods: {
    logout,
    onPageBeforeIn: function(e) {
      this.$f7.views.left.router.navigate('/class-list');
    },
  }
}
</script>
<style scoped>
.demo-card-header-pic .card-header {
  height: 10rem;
  background-size: cover;
  background-position: center;
  color: #fff;
}
.demo-card-header-pic .card-content-padding .label {
  color: #8e8e93;
}
</style>

