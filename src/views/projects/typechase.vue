<i18n>
{
  "en": {
    "data": {
      "name": "Typechase",
      "description": "Typing Application",
      "buttonText": "Try here!"
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
      "name": "Typechase",
      "description": "Konekirjoitus sovellus",
      "buttonText": "Kokeile täällä!"
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
    link="https://arttu.pennanen.org/sub/typechase/"
    filelocation="typechase"
    :previewImage="require('@/assets/images/typechase/typechase1.png')"
    :preview="preview"
  >
    <p>{{$t("content.p_1")}}</p>
    <ProjectImage alt :src="require('@/assets/images/typechase/typechase1.png')"></ProjectImage>
    <p>{{$t("content.p_2")}}</p>
    <ProjectImage alt :src="require('@/assets/images/typechase/typechase2.png')"></ProjectImage>
    <p>{{$t("content.p_3")}}</p>
    <ProjectImage alt :src="require('@/assets/images/typechase/typechase3.png')"></ProjectImage>
    <p>{{$t("content.p_4")}}</p>
  </Project>
</template>

<script>
import Project from '@/components/Project.vue'
import ProjectImage from '@/components/ProjectImage.vue'

export default {
  name: 'spotifyfavorites',
  components: {
    Project,
    ProjectImage
  },
  props: {
    preview: {
      type: Boolean,
      default: false
    }
  }
}
</script>
