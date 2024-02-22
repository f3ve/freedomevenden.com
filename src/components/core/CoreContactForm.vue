<script lang="ts" setup>
import axios from 'axios';
import { useAsyncState } from '@vueuse/core';

const fields = reactive({
  'form-name': 'contact',
  name: '',
  'contact-method': '',
  subject: '',
  message: '',
  'bot-field': '',
});

const router = useRouter();

const { execute, isLoading } = useAsyncState(async (e: Event) => {
  if (e.target) {
    const urlEncodedData = new URLSearchParams(fields).toString();

    return axios
      .post('/contact', urlEncodedData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then(() => router.push('/contact/success'))
      .catch(() => router.push('/contact/error'));
  }
}, undefined);
</script>

<template>
  <form
    id="contact-form"
    name="contact"
    class="flex flex-col items-center gap-6"
    data-netlify="true"
    netlify-honeypot="bot-field"
    @submit.prevent="execute(0, $event)"
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
      v-model="fields['contact-method']"
      label="How would you like to be contacted?"
      placeholder="Enter an email address, twitter handle, or discord username"
      name="contact-method"
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
    <input type="hidden" name="form-name" value="contact" />
    <input v-model="fields['bot-field']" type="hidden" name="bot-field" />
  </form>
</template>
