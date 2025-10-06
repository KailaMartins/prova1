<template>
  <v-card>
    <v-card-title>{{ product.name }}</v-card-title>
    <v-card-subtitle>{{ product.category }}</v-card-subtitle>

    <v-card-text>
      <div v-if="product.description">{{ product.description }}</div>
      <div v-else>Sem descrição</div>

      <div class="mt-2">Preço: R$ {{ product.price.toFixed(2) }}</div>
      <div v-if="product.inStock">Disponível</div>
      <div v-else>Indisponível</div>
    </v-card-text>

    <v-card-actions>
      <v-btn size="small" @click="$emit('edit', product)">Editar</v-btn>
      <v-btn size="small" color="error" @click="$emit('delete', product.id)">Remover</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ProductCard',
  props: { product: { type: Object, required: true } }
}
</script>
