import { ref, watch } from 'vue'

const STORAGE_KEY = 'petshop-haru-products'

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function useProducts() {
  const products = ref(loadFromStorage())

  // salvar sempre que mudar
  watch(products, (newVal) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newVal))
  }, { deep: true })

  function create(product) {
    // gerar id simples
    product.id = Date.now()
    products.value.push(product)
  }

  function update(updated) {
    const idx = products.value.findIndex(p => p.id === updated.id)
    if (idx !== -1) products.value.splice(idx, 1, updated)
  }

  function remove(id) {
    products.value = products.value.filter(p => p.id !== id)
  }

  function clearAll() {
    products.value = []
  }

  return { products, create, update, remove, clearAll }
}