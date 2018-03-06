<template>
  <div id="app">

    <f7-statusbar></f7-statusbar>

    <f7-panel left cover>
      <f7-view url="/panel-left/"></f7-view>
    </f7-panel>

    <f7-view id="main-view" main></f7-view>

    <f7-popup id="register-adult">
      <f7-page>
        <f7-navbar>
          <f7-nav-left>
            <f7-link popup-close>Back</f7-link>
          </f7-nav-left>
        </f7-navbar>
        <f7-block inset>
          <iframe class="airtable-embed airtable-dynamic-height"
            src="https://airtable.com/embed/shrnZH4Zg7sOXEc2M?backgroundColor=gray"
            frameborder="0" onmousewheel="" width="100%" height="900"
            style="background: transparent; border-width: 0;"></iframe>
        </f7-block>
      </f7-page>
    </f7-popup>

    <f7-popup id="register-kid">
      <f7-page>
        <f7-navbar>
          <f7-nav-left>
            <f7-link popup-close>Back</f7-link>
          </f7-nav-left>
        </f7-navbar>
        <f7-block inset>
          <iframe class="airtable-embed airtable-dynamic-height"
            src="https://airtable.com/embed/shr73akQjtEdaUKkk?backgroundColor=gray"
            frameborder="0" onmousewheel="" width="100%" height="1050"
            style="background: transparent; border-width: 0;"></iframe>
        </f7-block>
      </f7-page>
    </f7-popup>

  </div>
</template>

<script>
import RegisterAdult from './pages/register-adult.vue';
export default {
  components: [
    RegisterAdult,
  ],
}
</script>
