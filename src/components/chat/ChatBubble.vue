<template>
  <div v-if="isMine" class="flex justify-end">
    <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">{{ message }}</div>
  </div>
  <!-- Example Received Message -->
  <div v-else class="flex">
    <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
      <span class="capitalize">{{ message }}</span>
      <img v-if="image" :src="image" alt="YesNoImage" class="w-52 h-52 rounded-md object-contain" />
    </div>
  </div>
</template>
<script lang="ts" setup>
interface Props {
  message: string;
  isMine: boolean;
  image?: string;
}

defineProps<Props>();
</script>
