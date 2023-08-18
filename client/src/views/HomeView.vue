<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-semibold mb-4">Motivation Cards</h1>
    <div v-if="randomCard" class="border p-4 shadow-md">
      <h2 class="text-lg font-semibold mb-2">{{ randomCard.text }}</h2>
      <p>{{ randomCard.author }}</p>
      <button
        @click="showRandomCard"
        class="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Show Another
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      randomCard: null,
    };
  },
  methods: {
    async showRandomCard() {
      try {
        const response = await axios.get('cards/random');
        this.randomCard = response.data.randomCard;
      } catch (error) {
        console.error('Error fetching random card:', error);
      }
    },
  },
  created() {
    this.showRandomCard(); // Sayfa yüklendiğinde rasgele kartı göster
  },
};
</script>

<style>
.container {
  max-width: 600px;
  margin: 0 auto;
}

.border {
  border: 1px solid #cf0c0c;
}

.shadow-md {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
