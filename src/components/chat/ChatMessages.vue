<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <!-- Example Message -->
      <ChatBubble v-for="message in messages" :key="message.id" v-bind="message" />

      <!--vbind forma larga-->
      <!-- v-bind:message="message.message"
        v-bind:is-mine="message.isMine"
        v-bind:image="message.image" -->
      <!-- <ChatBubble
        :is-mine="false"
        :message="'No'"
        :image="'https://yesno.wtf/assets/no/7-331da2464250a1459cd7d41715e1f67d.gif'"
      /> -->
    </div>
  </div>
</template>
<script lang="ts" setup>
import ChatBubble from './ChatBubble.vue';
import type { ChatMessage } from '../../interfaces/chat-message.interface';
import { ref, watch } from 'vue';

interface Props {
  messages: ChatMessage[];
}

const props = defineProps<Props>();

const chatRef = ref<HTMLDivElement | null>(null); // Para el Scroll

watch(props, () => {
  // Watch que observa cada vez que haya mensaje
  setTimeout(() => {
    chatRef.value?.scrollTo({
      top: chatRef.value.scrollHeight,
      behavior: 'smooth'
    });
  }, 150);
});
</script>
