<template>
  <f7-page>
    <f7-navbar title=""></f7-navbar>
    <f7-block strong inset>
      <div class="logo">
        <img src="../../img/ugkids.jpg" alt="banner"/>
      </div>
    </f7-block>

    <f7-block-title>First-Time Registration</f7-block-title>
    <f7-list>
      <f7-list-button popup-open="#register-adult" title="Register Adult" panel-close></f7-list-button>
      <f7-list-button popup-open="#register-kid" title="Register Kids" panel-close></f7-list-button>
    </f7-list>
  </f7-page>
</template>
<script>
export default {}
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
</style>
