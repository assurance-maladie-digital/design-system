<template>
  <v-card class="mx-auto overflow-hidden" height="200" width="50%">
    <v-card-text><ExternalLinks position="top right" /></v-card-text>
  </v-card>
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
