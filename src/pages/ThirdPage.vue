<script setup lang="ts">
import { ref, onDeactivated } from 'vue'

import MainCounter from '@/components/MainCounter.vue'

const props = defineProps<{
  reset: boolean;
}>()

const counter = ref(0)

onDeactivated(() => {
  if (props.reset) {
    counter.value = 0
  }
})
</script>

<template>
  <MainCounter
    title="Third Counter"
    v-model="counter"
  />
</template>
