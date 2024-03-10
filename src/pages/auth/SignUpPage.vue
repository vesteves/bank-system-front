<template>
  <div class="q-pa-md">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        rounded
        outlined
        color="blue-4"
        v-model="username"
        label="username"
        class="q-mt-xl"
      />
      <q-input rounded outlined color="blue-4" v-model="email" label="email" />
      <q-input
        rounded
        outlined
        color="blue-4"
        v-model="password"
        label="password"
        type="password"
      />

      <div class="q-my-lg">
        <q-btn
          type="submit"
          color="primary"
          label="SIGN UP"
          class="full-width"
        />
      </div>
    </q-form>

    <div class="text-center text-weight-bolder text-blue-4 text-h4">__</div>

    <div class="text-center q-mt-md text-primary">Already have na account?</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

interface SubmitParams {
  username: string;
  email: string;
  password: string;
}

const username = ref<string>('');
const email = ref<string>('');
const password = ref<string>('');

const router = useRouter();

const onSubmit = async () => {
  const data: SubmitParams = {
    username: username.value,
    email: email.value,
    password: password.value,
  };

  try {
    router.push('/balance');
    return data;
  } catch (error: unknown) {
    // TODO handle error
  }
};

const onReset = (): void => {
  username.value = '';
  email.value = '';
  password.value = '';
};
</script>
