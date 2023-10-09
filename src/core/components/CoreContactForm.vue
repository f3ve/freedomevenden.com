<script lang="ts" setup>
import axios from 'axios';
const fields = reactive({
  name: '',
  contactMethod: '',
  subject: '',
  message: '',
});

const toast = useToastStore();

async function handleSubmit(e: SubmitEvent) {
  try {
    if (e.target) {
      const urlEncodedData = new URLSearchParams(fields).toString();
      console.log(urlEncodedData);
      await axios.post('/', urlEncodedData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      toast.show('Message was sent successfully. Thanks for reaching out!');
    } else {
      throw new Error('Unable to find form');
    }
  } catch {
    toast.show(
      'Oops, looks like something went wrong. Please try again later.',
    );
  }
}
</script>

<template>
  <form
    id="contact-form"
    name="contact"
    class="flex flex-col items-center gap-6"
    @submit.prevent="handleSubmit"
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
      label="How should we contact you?"
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

    <core-btn class="w-fit bg-primary" type="submit">Submit</core-btn>
  </form>
</template>
