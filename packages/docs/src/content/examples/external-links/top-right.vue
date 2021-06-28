<template>
  <VCard class="mx-auto overflow-hidden" height="200" width="50%">
    <VCardText><ExternalLinks position="top right" /></VCardText>
  </VCard>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { ExternalLink } from "../../../../../vue-dot/src/elements/ExternalLinks/types";

@Component({
  inheritAttrs: false
})
export default class ExternalLinksTopRight extends Vue {
}
</script>
