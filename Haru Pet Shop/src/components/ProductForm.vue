<template>
  <v-card class="pa-4">
    <v-form @submit.prevent="onSubmit">
      <v-text-field v-model="local.name" label="Nome do produto" required />
      <v-text-field v-model="local.category" label="Categoria" />
      <v-text-field v-model.number="local.price" label="Preço (R$)" type="number" />
      <v-textarea v-model="local.description" label="Descrição" rows="2" />
      <v-switch v-model="local.inStock" label="Em estoque?" />

      <div class="mt-4">
        <v-btn type="submit" :disabled="!local.name">Salvar</v-btn>
        <v-btn variant="text" @click="onCancel">Cancelar</v-btn>
      </div>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: 'ProductForm',
  props: {
    modelValue: { type: Object, default: () => ({ name: '', category: '', price: 0, description: '', inStock: true }) }
  },
  emits: ['update:modelValue', 'save', 'cancel'],
  data() {
    return { local: { ...this.modelValue } }
  },
  watch: {
    modelValue(newVal) {
      this.local = { ...newVal }
    }
  },
  methods: {
    onSubmit() {
      // emitir objeto completo
      this.$emit('save', { ...this.local })
    },
    onCancel() {
      this.$emit('cancel')
    }
  }
}
</script>