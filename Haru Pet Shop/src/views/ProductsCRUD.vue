<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="5">
        <h2>{{ editing ? 'Editar produto' : 'Novo produto' }}</h2>
        <ProductForm :modelValue="form" @save="saveProduct" @cancel="cancelEdit" />
      </v-col>

      <v-col cols="12" md="7">
        <h2>Produtos</h2>
        <ProductList :products="products" @edit="startEdit" @delete="deleteProduct" />
        <v-btn class="mt-4" color="error" @click="clearAll" v-if="products.length">Apagar tudo</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref } from 'vue'
import { useProducts } from '../composables/useProducts'
import ProductForm from '../components/ProductForm.vue'
import ProductList from '../components/ProductList.vue'

export default {
  components: { ProductForm, ProductList },
  setup() {
    const { products, create, update, remove, clearAll } = useProducts()
    const form = ref({ name: '', category: '', price: 0, description: '', inStock: true })
    const editing = ref(false)

    function saveProduct(payload) {
      if (editing.value) {
        update(payload)
        editing.value = false
      } else {
        create(payload)
      }
      // reset form
      form.value = { name: '', category: '', price: 0, description: '', inStock: true }
    }

    function startEdit(prod) {
      form.value = { ...prod }
      editing.value = true
    }

    function cancelEdit() {
      editing.value = false
      form.value = { name: '', category: '', price: 0, description: '', inStock: true }
    }

    function deleteProduct(id) {
      if (confirm('Remover este produto?')) remove(id)
    }

    return { products, form, editing, saveProduct, startEdit, cancelEdit, deleteProduct, clearAll }
  }
}
</script>