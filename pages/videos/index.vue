<script lang="ts">
import type { Video } from '~/interfaces/video'
// import { useFavoritos } from '~/composables/states'
import { useVideoStore } from '../../stores/video'

export default defineComponent({
  setup() {
    const videos: Video[] = [
      {
        id: 1,
        descricao: '01 - Introdução e Instalação',
        url: 'https://www.youtube.com/embed/WahQ5AoXpuU?si=AJu7GKXObWeLPibr',
        data_postagem: '2023-10-15',
      },
      {
        id: 2,
        descricao: '02 - Configuração',
        url: 'https://www.youtube.com/embed/JbbB84bnPog?si=0IQu7NNajyeBXydk',
        data_postagem: '2023-10-15',
      },
      {
        id: 3,
        descricao: '03 - Pages',
        url: 'https://www.youtube.com/embed/S99sVicr8NI?si=1SZazSGNduxM-QtG',
        data_postagem: '2023-10-15',
      },
      {
        id: 4,
        descricao: '04 - Components',
        url: 'https://www.youtube.com/embed/cCHWanw49l8?si=Ss2183CLOZpPSxu2',
        data_postagem: '2023-10-15',
      },
    ]
    const { $toast } = useNuxtApp()

    const { adicionarFavoritos } = useVideoStore()

    // Funções
    onMounted(() => {
      $toast.success('Toast adicionado com sucesso')
    })

    return { videos, adicionarFavoritos }
  },
})
</script>

<template>
  <div>Vídeos</div>

  <NuxtLink to="/videos/favoritos">Favoritos</NuxtLink>
  <h1>{{ $t('titulo') }}</h1>

  <div class="videos">
    <div v-for="(video, index) in videos" :key="index">
      <h2>{{ video.descricao }}</h2>
      <p v-data-horario="'dd/mm/yyyy'">{{ video.data_postagem }}</p>
      <iframe
        :src="video.url"
        width="550"
        height="400"
        title="Youtube video player"
        frameborder="0"
      ></iframe>

      <div>
        <button @click.prevent="adicionarFavoritos(video)">
          Adicionar Favorito
        </button>
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
