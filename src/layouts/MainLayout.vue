<template>
  <q-layout view="lHh Lpr lFf">
    <q-header :class="[toolbarStore.bgColor, toolbarStore.color]">
      <q-toolbar>
        <q-toolbar-title>
          <div class="row items-center justify-between">
            <q-btn
              flat
              dense
              round
              icon="menu"
              aria-label="Menu"
              @click="toggleLeftDrawer"
            />
            <div class="text-center">{{ toolbarStore.title }}</div>
            <q-btn flat dense round icon="menu" class="invisible" />
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-primary"
    >
      <q-list>
        <q-item-label
          header
          class="bg-blue-4 text-white text-center text-h3 q-py-lg q-mb-lg"
          >BNB Bank</q-item-label
        >

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, {
  EssentialLinkProps,
} from 'components/EssentialLink.vue';
import { useToolbarStore } from 'src/stores/toolbar-store';

const toolbarStore = useToolbarStore();

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'BALANCE',
    icon: 'fa-solid fa-scale-unbalanced-flip',
    link: 'https://quasar.dev',
  },
  {
    title: 'INCOMES',
    icon: 'fa-solid fa-arrow-turn-up',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'EXPENSES',
    icon: 'fa-solid fa-arrow-turn-down',
    link: 'https://chat.quasar.dev',
  },
  {
    title: 'CHECKS',
    icon: 'fa-solid fa-money-check-dollar',
    link: 'https://forum.quasar.dev',
  },
  {
    title: 'NOTIFICATIONS',
    icon: 'fa-solid fa-bell',
    link: 'https://twitter.quasar.dev',
  },
  {
    title: 'PROFILE',
    icon: 'fa-solid fa-user',
    link: 'https://facebook.quasar.dev',
  },
  {
    title: 'SETTINGS',
    icon: 'fa-solid fa-gear',
    link: 'https://awesome.quasar.dev',
  },
  {
    title: 'HELP',
    icon: 'fa-solid fa-circle-question',
    link: 'https://awesome.quasar.dev',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
