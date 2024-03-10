<template>
  <div class="bg-blue-2 text-blue-4 q-pa-sm">
    <div class="row">
      <div class="col">
        <div>Current Balance</div>
        <div class="text-primary">$6320.00</div>
      </div>
    </div>
  </div>
  <q-page padding>
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <div class="row">
        <div class="col">
          <q-input color="blue-4" v-model="amount" label="">
            <template v-slot:label>
              <div class="row items-center">
                <q-icon class="q-mr-lg" name="fa fa-money-bill-wave" />
                AMOUNT
              </div>
            </template>
          </q-input>

          <p class="text-blue-4 q-mt-sm">
            *The money will be deposited in your account once the check is
            accepted
          </p>
        </div>
        <div class="col-2 flex flex-center text-primary">USD</div>
      </div>
      <q-input color="blue-4" v-model="description" label="password">
        <template v-slot:label>
          <div class="row items-center">
            <q-icon class="q-mr-lg" name="fa-solid fa-star" />
            DESCRIPTION
          </div>
        </template>
      </q-input>

      <q-uploader url="http://localhost:4444/upload" />

      <q-page-sticky position="bottom-right" :offset="[119, 18]">
        <q-btn push color="primary" label="DEPOSIT CHECK" class="full-width" />
      </q-page-sticky>
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useToolbarStore } from 'src/stores/toolbar-store';

interface SubmitParams {
  amount: string;
  description: string;
}

const toolbarStore = useToolbarStore();

const amount = ref('');
const description = ref('');

onMounted(() => {
  toolbarStore.changeState({
    title: 'CHECK DEPOSIT',
    color: 'text-primary',
    bgColor: 'bg-blue-2',
  });
});

const onSubmit = async () => {
  const data: SubmitParams = {
    amount: amount.value,
    description: description.value,
  };

  try {
    return data;
  } catch (error: unknown) {
    // TODO handle error
  }
};

const onReset = (): void => {
  amount.value = '';
  description.value = '';
};
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
