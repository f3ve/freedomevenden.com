<script lang="ts" setup>
import axios from 'axios';
import { useAsyncState } from '@vueuse/core';

const fields = reactive({
  name: '',
  contactMethod: '',
  subject: '',
  message: '',
});

const toast = useToastStore();

const { isLoading, execute, error } = useAsyncState(async (e: Event) => {
  if (e.target) {
    const urlEncodedData = new URLSearchParams({
      formName: 'contact',
      ...fields,
    }).toString();

    return axios
      .post('/', urlEncodedData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then((r) => r.data);
  }
}, {});

async function handleSubmit(e: Event) {
  await execute(undefined, e);
  if (!error.value)
    toast.show('Message was sent successfully. Thanks for reaching out!');
  else toast.show('Something went wrong. Please try again later.', 'error');
}
</script>

<template>
  <form
    id="contact-form"
    name="contact"
    class="flex flex-col items-center gap-6"
    data-netlify="true"
  >
    <core-input
      v-model="fields.name"
      label="Name"
      placeholder="Enter your name"
      name="name"
      class="w-full"
      required
    />

    <core-input
      v-model="fields.contactMethod"
      label="How would you like to be contact?"
      placeholder="Enter an email address, twitter handle, or discord username"
      name="contact method"
      class="w-full"
      required
    />

    <core-input
      v-model="fields.subject"
      label="Subject"
      placeholder="Enter the subject of your message"
      name="subject"
      class="w-full"
      required
    />

    <core-textarea
      v-model="fields.message"
      label="Message"
      placeholder="Enter your message"
      name="message"
      class="w-full"
      required
    />

    <core-btn class="w-fit" type="submit" :loading="isLoading">
      Submit
    </core-btn>
  </form>
</template>
