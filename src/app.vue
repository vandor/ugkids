<template>
  <div id="app">

    <f7-statusbar></f7-statusbar>

    <f7-panel left cover>
      <f7-view name="left" url="/empty" :routes="leftRoutes" :animate="false"></f7-view>
    </f7-panel>

    <f7-view main :push-state="true"></f7-view>

    <f7-popup id="register-adult">
      <f7-page>
        <f7-navbar>
          <f7-nav-left>
            <f7-link popup-close>Back</f7-link>
          </f7-nav-left>
        </f7-navbar>
        <f7-block inset>
          <iframe class="airtable-embed airtable-dynamic-height"
            src="https://airtable.com/embed/shrVw4scukcdCJt6l?backgroundColor=gray"
            frameborder="0" onmousewheel="" width="100%" height="1100"
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
import RegisterAdult from './pages/popup/register-adult.vue';
import LeftRoutes from './routes/left.js';
export default {
  components: [
    RegisterAdult,
  ],
  data() {
    return {
      leftRoutes: LeftRoutes,
    }
  },
}
</script>
