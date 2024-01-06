<script lang="ts">
import { useFavoritos } from '~/composables/states'
import { useVideoStore } from '../../../stores/video'

export default defineComponent({
  setup() {
    // const favoritos = useFavoritos()

    const videoStore = useVideoStore()
    const { locale } = useI18n()
    const { $toast } = useNuxtApp()
    const { favoritos } = storeToRefs(videoStore)

    // FUNÇÕES
    const converteDataBrasil = (dataAtual: string) => {
      return new Date(dataAtual).toLocaleDateString('pt-BR')
    }

    const removeFavorito = (id: number) => {
      videoStore.removerFavoritos(id)

      $toast.error('Removido com sucesso')
    }

    return { locale, favoritos, converteDataBrasil, removeFavorito }
  },
})
</script>

<template>
  <div>
    <NuxtLink to="/videos">Vídeos</NuxtLink>
    <br />

    <select v-model="locale">
      <option value="pt">pt</option>
      <option value="en">en</option>
    </select>

    <h1>{{ $t('tituloFavoritos') }}</h1>

    <div class="videos">
      <div v-for="(video, index) in favoritos" :key="index">
        <h2>{{ video.descricao }}</h2>
        <p>{{ converteDataBrasil(video.data_postagem) }}</p>
        <iframe
          :src="video.url"
          width="550"
          height="400"
          title="Youtube video player"
          frameborder="0"
        ></iframe>

        <div>
          <button @click="removeFavorito(video.id)">Remover Favorito</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.videos {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.videos button {
  display: inline-block;
}
</style>
