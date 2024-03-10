<template>
  <div class="bg-blue-4 text-white q-pa-sm">
    <div class="row">
      <div class="col">
        <div>Current Balance</div>
        <div class="text-h4">$6320.00</div>
      </div>
      <div class="col flex justify-end">
        <q-btn
          :label="formattedDate"
          outline
          flat
          dense
          color="white"
          class="text-h6"
        >
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date
              v-model="proxyDate"
              mask="MM/YYYY"
              format="MM/YYYY"
              view="Month"
              years-in-month-view
            ></q-date>
          </q-popup-proxy>
        </q-btn>
      </div>
    </div>
  </div>
  <div class="bg-blue-3 text-primary q-pa-sm">
    <div class="flex justify-between">
      <div>
        <div>Incomes</div>
        <div>$7100.00</div>
      </div>

      <div class="text-center">
        <div><q-icon name="fa fa-plus" size="sm" /></div>
        <div>Deposit a check</div>
      </div>
    </div>
  </div>
  <div class="bg-blue-2 text-primary q-pa-sm">
    <div class="flex justify-between">
      <div>
        <div>Expanses</div>
        <div>$780.00</div>
      </div>
      <div class="text-center">
        <div><q-icon name="fa fa-plus" size="sm" /></div>
        <div>Purcharse</div>
      </div>
    </div>
  </div>
  <q-page padding>
    <div class="text-blue-4 q-my-md">TRANSACTIONS</div>
    <itemDetails title="t-shirt" date="08/18/2021, 02:25 PM" :amount="-4000" />
  </q-page>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useToolbarStore } from 'src/stores/toolbar-store';
import itemDetails from 'src/components/ItemDetail.vue';

const toolbarStore = useToolbarStore();
const proxyDate = ref('01/2001');

onMounted(() => {
  toolbarStore.changeState({
    title: 'BNB Bank',
    color: 'white',
    bgColor: 'bg-blue-4',
  });
});

const formattedDate = computed(() => {
  if (!proxyDate.value) return '';

  const [month, year] = proxyDate.value.split('/');
  const date = new Date(parseInt(year), parseInt(month) - 1);

  return `${date.toLocaleString('en-US', {
    month: 'long',
  })}, ${date.getFullYear()}`;
});
</script>

<style scoped lang="scss">
.border-bottom {
  border-bottom: solid $blue-4 1px;
}
</style>
