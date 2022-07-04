<script setup lang="ts">
const props = defineProps<{
  modelValue: number;
  title: string;
}>()

const emits = defineEmits<{
  (eventName: 'update:modelValue', newValue: number): void
}>()

const update = (newValue: number) => {
  emits('update:modelValue', newValue)
}

const handleClickOnIncrease = () => {
  update(props.modelValue + 1)
}

const handleClickOnDecrease= () => {
  update(props.modelValue - 1)
}
</script>

<template>
  <div>
    <div class="text-h4 mb-2">
      {{ title }}
    </div>
    <div class="d-flex align-center">
      <v-btn
        color="primary"
        @click.prevent="handleClickOnDecrease"
      >
        -
      </v-btn>

      <span class="mx-5">
        {{ modelValue }}
      </span>

      <v-btn
        color="primary"
        @click.prevent="handleClickOnIncrease"
      >
        +
      </v-btn>
    </div>
  </div>
</template>
