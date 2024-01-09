import { Video } from '~/interfaces/video'

export default defineEventHandler((event) => {
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

  const requestId = event.context.params?.id || 0
  const video = videos.find((v) => v.id === +requestId)

  return {
    videos: video,
  }
})
