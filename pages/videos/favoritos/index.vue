<script lang="ts">
import { useFavoritos } from '~/composables/states'
import { useVideoStore } from '../../../stores/video'

export default defineComponent({
  setup() {
    // const favoritos = useFavoritos()

    const videoStore = useVideoStore()
    const { favoritos } = storeToRefs(videoStore)

    // FUNÇÕES
    const converteDataBrasil = (dataAtual: string) => {
      return new Date(dataAtual).toLocaleDateString('pt-BR')
    }

    // const removerFavoritos = (id: string | number) => {
    //   const favoritosFiltrados = favoritos.value.filter((x) => x.id !== id)
    //   favoritos.value = favoritosFiltrados
    // }

    return { favoritos, converteDataBrasil, videoStore }
  },
})
</script>

<template>
  <div>
    <NuxtLink to="/videos">Vídeos</NuxtLink>
    <br />

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
          <button @click="videoStore.removerFavoritos(video.id)">
            Remover Favorito
          </button>
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
