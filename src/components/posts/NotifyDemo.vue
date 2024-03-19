<script lang="ts" setup>
import { useNotify } from '@f3ve/vue-notify';

const notify = useNotify();
</script>
<template>
  <div class="flex flex-row items-center justify-center gap-2">
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
</template>
