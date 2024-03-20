<script lang="ts" setup>
import { useNotify, useNotifyRequest } from '@f3ve/vue-notify';

const notify = useNotify();

function loadingSuccessDemo() {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Async function ran successfully!');
    }, 1500);
  });
}

function loadingErrorDemo() {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      reject('Oh no! An error occurred.');
    }, 1500);
  });
}

const success = reactive(
  useNotifyRequest(loadingSuccessDemo, {
    onSuccess: (result) => notify.show(result, 'success'),
  }),
);

const errorEx = reactive(
  useNotifyRequest(loadingErrorDemo, {
    onError: (error) => notify.show(error, 'error'),
  }),
);

// const { exec, loading };
</script>
<template>
  <div class="mb-2 flex flex-row items-center justify-center gap-2">
    <CoreBtn @click="notify.show('This is a default notification')">
      Default
    </CoreBtn>
    <CoreBtn
      color="success"
      @click="notify.show('This is a success notification', 'success')"
    >
      Success
    </CoreBtn>
    <CoreBtn
      color="warning"
      @click="notify.show('This is a warning notification', 'warning')"
    >
      Warning
    </CoreBtn>
    <CoreBtn
      color="error"
      @click="notify.show('This is an error notification', 'error')"
    >
      Error
    </CoreBtn>
    <CoreBtn
      color="accent"
      @click="notify.show('This is an info notification', 'info')"
    >
      Info
    </CoreBtn>
  </div>
  <div class="flex flex-row items-center justify-center gap-2">
    <CoreBtn color="success" :loading="success.loading" @click="success.exec">
      Loading success example
    </CoreBtn>
    <CoreBtn color="error" :loading="errorEx.loading" @click="errorEx.exec">
      Loading error example
    </CoreBtn>
  </div>
</template>
