<template>
  <f7-page>
    <f7-navbar title=""></f7-navbar>
    <f7-block strong inset>
      <div class="logo">
        <img src="../../img/ugkids.jpg" alt="banner"/>
      </div>
    </f7-block>

    <f7-block-title>Kids Classes</f7-block-title>
    <f7-list>
      <f7-list-item link="/class-list/nursery" title="Nursery" view=".view-main" panel-close></f7-list-item>
      <f7-list-item link="/class-list/preschool" title="Preschool" view=".view-main" panel-close></f7-list-item>
      <f7-list-item link="/class-list/jr-elementary" title="Jr Elementary" view=".view-main" panel-close></f7-list-item>
      <f7-list-item link="/class-list/elementary" title="Elementary" view=".view-main" panel-close></f7-list-item>
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
