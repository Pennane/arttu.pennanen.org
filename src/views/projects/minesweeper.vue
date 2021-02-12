<i18n>
{
  "en": {
    "data": {
      "name": "Minesweeper",
      "description": "Classic puzzle game",
      "buttonText": "Try here!"
    },
    "content": {
      "p_1": "It's a minesweeper. No more, no less. Style imitated from the belowed Windows 98 minesweeper.",
      "p_2": "Right click to flag, left to uncover.",
      "p_3": "Project in github"
     }
      },
  "fi": {
    "data": {
      "name": "Miinaharava",
      "description": "Yksinpelattava älypeli",
      "buttonText": "Kokeile täällä!"
    },
    "content": {
      "p_1": "Miinaharava. Ei enempää, ei vähempää. Tyylitelty rakkaan Windows 98 miinaharavan mukaan.",
      "p_2": "Oikealla hiiren klikkauksella merkitään ruutu, ja vasemmalla avataan.",
      "p_3": "Projekti githubissa"
     }
  }
}
</i18n>

<template>
  <Project
    :name="$t('data.name')"
    :type="$t('data.description')"
    :previewDescription="$t('content.p_1')"
    :buttontext="$t('data.buttonText')"
    date="28.12.2020"
    link="https://minesweeper.pennanen.dev/"
    filelocation="minesweeper"
    :previewImage="require('@/assets/images/minesweeper/2.png')"
    :preview="preview"
  >
    <p>{{ $t('content.p_1') }}</p>
    <p>{{ $t('content.p_2') }}</p>
    <ProjectImage
      alt
      :src="require('@/assets/images/minesweeper/4.png')"
    ></ProjectImage>
    <p>
      {{ $t('content.p_3')
      }}<a href="https://github.com/Pennane/minesweeper">
        https://github.com/Pennane/minesweeper
      </a>
    </p>
    <ProjectImage
      alt
      :src="require('@/assets/images/minesweeper/5.png')"
    ></ProjectImage>
    <ProjectImage
      alt
      :src="require('@/assets/images/minesweeper/3.png')"
    ></ProjectImage>
  </Project>
</template>

<script>
import Project from '@/components/project/Project.vue'
import ProjectImage from '@/components/project/ProjectImage.vue'

export default {
  name: 'peigombot',
  components: {
    Project,
    ProjectImage
  },
  props: {
    preview: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    if (window.experimentaltransition) return
    this.$store.commit('transitioning', false)
  },
  beforeRouteLeave(to, from, next) {
    if (window.experimentaltransition) return next()
    this.$store.commit('transitioning', true)
    setTimeout(() => {
      next()
    }, 400)
  }
}
</script>
