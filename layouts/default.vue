<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const { locale } = useI18n()
    // const locale = ref('')
    return { locale }
  },
})
</script>

<template>
  <div>
    Layout Padrão

    <select v-model="locale">
      <option value="pt">pt</option>
      <option value="en">en</option>
    </select>
    <slot />
    Rodapé Padrão
  </div>
</template>
