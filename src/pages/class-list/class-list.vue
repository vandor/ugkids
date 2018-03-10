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
    <f7-row no-gap style="margin-top: 1rem;">
      <f7-col width="0" tablet-width="10"></f7-col>
      <f7-col width="50" tablet-width="20">
        <f7-link href="/class-list/nursery" class="class-list-link">
          <f7-card class="class-list-card">
            <f7-card-header
              :class="cardHeaderClasses"
              style="background-color: #F5C500"
            >Nursery</f7-card-header>
            <f7-card-content>
              <p class="label">Infants - 2 Year Olds</p>
            </f7-card-content>
          </f7-card>
        </f7-link>
      </f7-col>
      <f7-col width="50" tablet-width="20">
        <f7-link href="/class-list/preschool" class="class-list-link">
          <f7-card class="class-list-card">
            <f7-card-header
              :class="cardHeaderClasses"
              style="background-color: #00AC9E"
            >Preschool</f7-card-header>
            <f7-card-content>
              <p class="label">3 - 5 Year Olds</p>
            </f7-card-content>
          </f7-card>
        </f7-link>
      </f7-col>
      <f7-col width="50" tablet-width="20">
        <f7-link href="/class-list/jr-elementary" class="class-list-link">
          <f7-card class="class-list-card">
            <f7-card-header
              :class="cardHeaderClasses"
              style="background-color: #FF573F"
            >Junior<br>Elementary</f7-card-header>
            <f7-card-content>
              <p class="label">K - 2nd Graders</p>
            </f7-card-content>
          </f7-card>
        </f7-link>
      </f7-col>
      <f7-col width="50" tablet-width="20">
        <f7-link href="/class-list/elementary" class="class-list-link">
          <f7-card class="class-list-card">
            <f7-card-header
              :class="cardHeaderClasses"
              style="background-color: #5800EE"
            >Elementary</f7-card-header>
            <f7-card-content>
              <p class="label">3rd - 5th Graders</p>
            </f7-card-content>
          </f7-card>
        </f7-link>
      </f7-col>
      <f7-col width="0" tablet-width="10"></f7-col>
    </f7-row>
  </f7-page>
</template>
<script>
import AuthService from '../../auth/AuthService'
const auth = new AuthService()
const { logout } = auth

export default {
  data () {
    return {
      cardHeaderClasses: 'no-border justify-content-center text-align-center',
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
.class-list-link {
  width: 100%;
}
.class-list-card {
  width: 100%;
}
.class-list-card .card-header {
  height: 10rem;
  background-size: cover;
  background-position: center;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
}
.class-list-card .card-content-padding .label {
  color: #8e8e93;
}
</style>

