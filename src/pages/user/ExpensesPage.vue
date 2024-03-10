<template>
  <div class="bg-blue-2 text-white q-pa-sm">
    <div class="row">
      <div class="col-4">
        <q-select borderless v-model="model" :options="options" />
      </div>
    </div>
  </div>
  <q-page padding>
    <div
      class="flex justify-between items-center text-blue-4 q-py-md border-bottom"
    >
      <div>
        <div class="text-primary text-weight-bolder">t-shirt</div>
        <div>08/18/2021, 02:25 PM</div>
      </div>
      <div class="text-negative">-$40,00</div>
    </div>

    <div
      class="flex justify-between items-center text-blue-4 q-py-md border-bottom"
    >
      <div>
        <div class="text-primary text-weight-bolder">t-shirt</div>
        <div>08/18/2021, 02:25 PM</div>
      </div>
      <div class="text-negative">-$40,00</div>
    </div>

    <div
      class="flex justify-between items-center text-blue-4 q-py-md border-bottom"
    >
      <div>
        <div class="text-primary text-weight-bolder">t-shirt</div>
        <div>08/18/2021, 02:25 PM</div>
      </div>
      <div class="text-negative">-$40,00</div>
    </div>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="fa fa-plus" color="primary" />
    </q-page-sticky>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useToolbarStore } from 'src/stores/toolbar-store';

const toolbarStore = useToolbarStore();
const options = ['August, 2021', 'Facebook', 'Twitter', 'Apple', 'Oracle'];
const model = ref(options[0]);

onMounted(() => {
  toolbarStore.changeState({
    title: 'Expenses',
    color: 'text-primary',
    bgColor: 'bg-blue-2',
  });
});
</script>

<style lang="scss">
.border-bottom {
  border-bottom: solid $blue-4 1px;
}

.q-field--auto-height .q-field__native {
  color: $primary;
}

.q-select__dropdown-icon {
  color: $primary;
}
</style>
