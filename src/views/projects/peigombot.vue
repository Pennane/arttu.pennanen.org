<template>
  <Project
    :preview="preview"
    name="Peigom bot"
    date="12.8.2019"
    type="Discord bot"
    link="https://github.com/Pennane/spotify-favorites"
    buttontext="Find here!"
    readlink="peigombot"
    :previewImage="require('@/assets/images/peigom/peigom1.png')"
    previewDescription="Das auto lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cum, dolor mollitia voluptate dolorem voluptatem omnis impedit laudantium aperiam beatae aliquid at nemo laborum culpa eius eum minus dicta ducimus!"
  >
    <p>Das auto lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cum, dolor mollitia voluptate dolorem voluptatem omnis impedit laudantium aperiam beatae aliquid at nemo laborum culpa eius eum minus dicta ducimus!</p>
    <ProjectImage alt :src="require('@/assets/images/peigom/peigom1.png')"></ProjectImage>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, illo aliquid rem quas quia veniam autem! Architecto sit optio provident quod, commodi accusantium animi, sunt, consectetur ratione aperiam itaque quis?</p>
    <ProjectImage alt :src="require('@/assets/images/peigom/peigom2.png')"></ProjectImage>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora eaque nemo animi, dolor accusantium similique facere voluptatem error ullam porro voluptate necessitatibus nostrum quis voluptates doloribus quod adipisci. Aliquid, illum!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa, animi voluptatibus in distinctio cumque voluptatum nostrum, delectus consequuntur laboriosam recusandae labore repellat at non harum minima repudiandae, enim sunt.</p>
  </Project>
</template>

<script>
import Project from '@/components/Project.vue'
import ProjectImage from '@/components/ProjectImage.vue'

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
  }
}
</script>
