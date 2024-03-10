<script setup lang="ts">
interface ItemDetailsParams {
  title: string;
  date: string;
  amount: number;
}

withDefaults(defineProps<ItemDetailsParams>(), {
  title: '',
  date: '',
});

const parseMoney = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount / 100);
};
</script>

<template>
  <div
    class="flex justify-between items-center text-blue-4 q-py-md border-bottom"
  >
    <div>
      <div class="text-primary text-weight-bolder">{{ title }}</div>
      <div>{{ date }}</div>
    </div>
    <div :class="amount >= 0 ? 'text-primary' : 'text-negative'">
      {{ parseMoney(amount) }}
    </div>
  </div>
</template>
