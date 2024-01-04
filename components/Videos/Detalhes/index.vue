<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const { diasPassados, diferencaEmDias } = useFormatacao()
    const dataVideo = new Date(2024, 1 - 1, 3)

    diasPassados(dataVideo)
    return { diferencaEmDias }
  },
})
</script>

<template>
  <div>
    <h1>Detalhes Video</h1>
    <p>Autor: Pedro Makengo</p>
    <p>{{ diferencaEmDias }} dias atrás</p>
  </div>
</template>
