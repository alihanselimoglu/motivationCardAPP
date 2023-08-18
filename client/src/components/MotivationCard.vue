<template>
  <div class="border p-4 shadow-md">
    <h2 class="text-lg font-semibold mb-2">{{ card.title }}</h2>
    <p>{{ card.content }}</p>
    <button
      @click="$emit('view-profile', card.userId)"
      class="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
    >
      View Profile
    </button>
  </div>
</template>

<script>
export default {
  props: {
    card: Object,
  },
};
</script>

<style>
.border {
  border: 1px solid #ccc;
}

.shadow-md {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
