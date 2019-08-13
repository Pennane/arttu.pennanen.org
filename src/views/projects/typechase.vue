<template>
  <div class="project">
    <ProjectHeader
      name="Typechase"
      date="12.8.2019"
      type="Typing Application"
      link="https://arttu.pennanen.org/sub/typechase/"
      buttontext="Try here!"
    ></ProjectHeader>
    <div class="projectbody">
      <p>Das auto lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cum, dolor mollitia voluptate dolorem voluptatem omnis impedit laudantium aperiam beatae aliquid at nemo laborum culpa eius eum minus dicta ducimus!</p>
      <ProjectImage alt :src="require('@/assets/images/typechase/typechase1.png')"></ProjectImage>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, illo aliquid rem quas quia veniam autem! Architecto sit optio provident quod, commodi accusantium animi, sunt, consectetur ratione aperiam itaque quis?</p>
      <ProjectImage alt :src="require('@/assets/images/typechase/typechase2.png')"></ProjectImage>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere illo voluptatibus officiis esse saepe libero impedit cum excepturi minus eos exercitationem, atque molestias quam earum quisquam repellat tenetur, hic a?</p>
      <ProjectImage alt :src="require('@/assets/images/typechase/typechase3.png')"></ProjectImage>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempora ex ratione quae nobis nulla tenetur sequi, fuga neque earum dolorum, inventore quasi natus culpa corrupti, nostrum voluptates suscipit esse.</p>
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
  name: 'typechase',
  components: {
    ProjectHeader,
    ProjectImage
  }
}
</script>
