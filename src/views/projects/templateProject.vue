<i18n>
{
  "en": {
    "data": {
      "name": "Example Project",
      "description": "a test project",
      "buttonText": "Find here!"
    },
    "content": {
      "p_1": "Das auto lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cum, dolor mollitia voluptate dolorem voluptatem omnis impedit laudantium aperiam beatae aliquid at nemo laborum culpa eius eum minus dicta ducimus!",
      "p_2": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, illo aliquid rem quas quia veniam autem! Architecto sit optio provident quod, commodi accusantium animi, sunt, consectetur ratione aperiam itaque quis?",
      "p_3": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora eaque nemo animi, dolor accusantium similique facere voluptatem error ullam porro voluptate necessitatibus nostrum quis voluptates doloribus quod adipisci. Aliquid, illum!",
      "p_4": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa, animi voluptatibus in distinctio cumque voluptatum nostrum, delectus consequuntur laboriosam recusandae labore repellat at non harum minima repudiandae, enim sunt."
    }
      },
  "fi": {
    "data": {
      "name": "Esimerkki Projekti",
      "description": "testi proju",
      "buttonText": "Löydä täältä!"
    },
    "content": {
      "p_1": "Das auto lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cum, dolor mollitia voluptate dolorem voluptatem omnis impedit laudantium aperiam beatae aliquid at nemo laborum culpa eius eum minus dicta ducimus!",
      "p_2": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, illo aliquid rem quas quia veniam autem! Architecto sit optio provident quod, commodi accusantium animi, sunt, consectetur ratione aperiam itaque quis?",
      "p_3": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora eaque nemo animi, dolor accusantium similique facere voluptatem error ullam porro voluptate necessitatibus nostrum quis voluptates doloribus quod adipisci. Aliquid, illum!",
      "p_4": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa, animi voluptatibus in distinctio cumque voluptatum nostrum, delectus consequuntur laboriosam recusandae labore repellat at non harum minima repudiandae, enim sunt."
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
    date="12.8.2019"
    link="https://www.example..com/link/of/the/project"
    filelocation="test"
    :previewImage="require('@/assets/images/peigom/peigom1.png')"
    :preview="preview"
  >
    <p>{{ $t('content.p_1') }}</p>
    <ProjectImage alt :src="require('@/assets/images/peigom/peigom1.png')" />
    <p>{{ $t('content.p_2') }}</p>
    <ProjectImage alt :src="require('@/assets/images/peigom/peigom2.png')" />
    <p>{{ $t('content.p_3') }}</p>
    <p>{{ $t('content.p_4') }}</p>
  </Project>
</template>

<script>
import Project from '@/components/project/Project.vue'
import ProjectImage from '@/components/project/ProjectImage.vue'

export default {
  name: 'exampleproject',
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
