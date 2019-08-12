<template>
  <div class="project">
    <projectheader
      name="Peigom"
      date="12.8.2019"
      type="Discord bot"
      link="https://github.com/Pennane/spotify-favorites"
      buttontext="Find here!"
    ></projectheader>
    <div class="projectbody">
      <p>Das auto lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cum, dolor mollitia voluptate dolorem voluptatem omnis impedit laudantium aperiam beatae aliquid at nemo laborum culpa eius eum minus dicta ducimus!</p>
      <projectImage alt="" :src="require('@/assets/images/peigom/peigom1.png')"></projectImage>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, illo aliquid rem quas quia veniam autem! Architecto sit optio provident quod, commodi accusantium animi, sunt, consectetur ratione aperiam itaque quis?</p>
      <projectImage alt="" :src="require('@/assets/images/peigom/peigom2.png')"></projectImage>
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
    projectheader: ProjectHeader,
    projectImage: ProjectImage
  }
}
</script>
