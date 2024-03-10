<template>
  <q-item clickable tag="a" target="_blank" :href="link">
    <q-item-section v-if="icon" avatar>
      <q-icon color="blue-4" :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-white text-weight-bolder">{{
        title
      }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
export interface EssentialLinkProps {
  title: string;
  link?: string;
  icon?: string;
}
withDefaults(defineProps<EssentialLinkProps>(), {
  link: '#',
  icon: '',
});
</script>
