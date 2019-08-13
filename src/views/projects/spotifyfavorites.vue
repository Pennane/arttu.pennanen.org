<template>
  <div class="project">
    <ProjectHeader
      name="Spotify Favorites"
      date="12.8.2019"
      type="Listening Analytics"
      link="https://github.com/Pennane/spotify-favorites"
      buttontext="Find here!"
    ></ProjectHeader>
    <div class="projectbody">
      <p>Das auto lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cum, dolor mollitia voluptate dolorem voluptatem omnis impedit laudantium aperiam beatae aliquid at nemo laborum culpa eius eum minus dicta ducimus!</p>
      <ProjectImage alt :src="require('@/assets/images/spotifyfavorites/spotifyfavorites1.png')"></ProjectImage>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, illo aliquid rem quas quia veniam autem! Architecto sit optio provident quod, commodi accusantium animi, sunt, consectetur ratione aperiam itaque quis?</p>
      <ProjectImage alt :src="require('@/assets/images/spotifyfavorites/spotifyfavorites2.png')"></ProjectImage>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque labore facere dolorum nisi porro cum eveniet odit perferendis sapiente provident? Iure sit distinctio fuga quam beatae eligendi quaerat natus ad.</p>
      <ProjectImage alt :src="require('@/assets/images/spotifyfavorites/spotifyfavorites3.png')"></ProjectImage>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea praesentium dolores, cum sed magnam veritatis mollitia voluptas impedit sit nemo dolore sequi totam ducimus earum laborum quae incidunt pariatur. Eius.</p>
      <ProjectImage alt :src="require('@/assets/images/spotifyfavorites/spotifyfavorites4.png')"></ProjectImage>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aperiam accusamus dolorem quos ducimus porro repellendus voluptatum facere, numquam ex, repudiandae iusto illo, voluptas omnis ut. Deleniti a vero earum.</p>
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
  name: 'spotifyfavorites',
  components: {
    ProjectHeader,
    ProjectImage
  }
}
</script>
