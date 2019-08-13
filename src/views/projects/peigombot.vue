<template>
  <div class="project">
    <ProjectHeader
      name="Peigom"
      date="12.8.2019"
      type="Discord bot"
      link="https://github.com/Pennane/spotify-favorites"
      buttontext="Find here!"
    ></ProjectHeader>
    <div class="projectbody">
      <p>Das auto lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cum, dolor mollitia voluptate dolorem voluptatem omnis impedit laudantium aperiam beatae aliquid at nemo laborum culpa eius eum minus dicta ducimus!</p>
      <ProjectImage alt :src="require('@/assets/images/peigom/peigom1.png')"></ProjectImage>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, illo aliquid rem quas quia veniam autem! Architecto sit optio provident quod, commodi accusantium animi, sunt, consectetur ratione aperiam itaque quis?</p>
      <ProjectImage alt :src="require('@/assets/images/peigom/peigom2.png')"></ProjectImage>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora eaque nemo animi, dolor accusantium similique facere voluptatem error ullam porro voluptate necessitatibus nostrum quis voluptates doloribus quod adipisci. Aliquid, illum!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa, animi voluptatibus in distinctio cumque voluptatum nostrum, delectus consequuntur laboriosam recusandae labore repellat at non harum minima repudiandae, enim sunt.</p>
    </div>
    <div class="projectfooter">
      <span>teknologiat käytetty jne</span>
      <span>vanilla js</span>
      <span>hatunnostot</span>
    </div>
  </div>
</template>

<script>
import ProjectHeader from '@/components/ProjectHeader.vue'
import ProjectImage from '@/components/ProjectImage.vue'

export default {
  name: 'peigombot',
  components: {
    ProjectHeader,
    ProjectImage
  }
}
</script>
