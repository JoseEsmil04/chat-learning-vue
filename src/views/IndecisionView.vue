<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
  <div class="bg-gray-200/90 h-screen flex flex-col max-w-lg mx-auto">
    <div
      class="bg-gradient-to-r from-emerald-600 to-blue-900 p-4 text-white flex justify-between items-center"
    >
      <span class="font-bold font-sans">Otra Persona</span>
    </div>

    <!-- ChatMessages -->
    <ChatMessages v-bind:messages="messages" />
    <BoxMessages v-on:send-message="showMessage($event)" />
  </div>
</template>
<script lang="ts" setup>
import BoxMessages from '@/components/chat/BoxMessages.vue';
import ChatMessages from '@/components/chat/ChatMessages.vue';
import { useChat } from '@/composables/useChat';

const { messages, showMessage } = useChat();
</script>
