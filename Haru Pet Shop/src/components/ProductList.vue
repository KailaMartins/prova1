<template>
  <v-row>
    <v-col cols="12" md="4" v-for="p in products" :key="p.id">
      <ProductCard :product="p" @edit="$emit('edit', $event)" @delete="$emit('delete', $event)" />
    </v-col>
    <div v-if="products.length === 0" class="pa-4">
      <v-alert type="info">Nenhum produto cadastrado ainda.</v-alert>
    </div>
  </v-row>
</template>

<script>
import ProductCard from './ProductCard.vue'
export default {
  name: 'ProductList',
  components: { ProductCard },
  props: { products: { type: Array, required: true } }
}
</script>
