
<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])

</script>

<template>
  <form @submit.prevent="$emit('addTodos')" class="border w-72 border-gray-800 rounded-md flex justify-between">
    <input type="text" placeholder="Enter todo " :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-64 h-8 border-none border-transparent bg-transparent" />

    <button type="submit" class="border-l w-11 h-8 border-gray-800 bg-gray-200">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5" stroke="white"
        class="w-6 h-6 ml-2 bg-gray-800 rounded-full">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </button>
  </form>
</template>