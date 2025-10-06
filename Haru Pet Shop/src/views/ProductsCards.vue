<template>
  <v-container>
    <v-row class="mb-4">
      <v-col cols="12">
        <v-toolbar flat>
          <v-toolbar-title>Pet Shop HARU — Produtos</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn to="/crud">Gerenciar (Produtos)</v-btn>
        </v-toolbar>
      </v-col>
    </v-row>

    <ProductList :products="products" @edit="onEdit" @delete="onDelete" />
  </v-container>
</template>

<script>
import { useProducts } from '../composables/useProducts'
import ProductList from '../components/ProductList.vue'

export default {
  components: { ProductList },
  setup() {
    const { products, remove } = useProducts()

    function onEdit() {
      // para esta tela, editar pode redirecionar para /crud
      window.location.href = '/crud'
    }
    function onDelete(id) {
      if (confirm('Remover este produto?')) remove(id)
    }

    return { products, onEdit, onDelete }
  }
}
</script>
