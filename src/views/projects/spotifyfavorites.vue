<i18n>
{
  "en": {
    "data": {
      "name": "Spotify Favorites",
      "description": "Listening analytics",
      "buttonText": "Try here!"
    },
    "content": {
      "p_1": "Spotify Favorites is an application that shows most listened tracks and artists from given account from three different time frames.",
      "p_2": "The application fetches its data straight from Spotify, and at least based on my experience, the served data is indeed quite accurate for all of the different time frames.",
      "p_3": "The page requires the user to authenticate through Spotify, as the listening history is not shared publicly.",
      "p_4": "This project has been under construction for a few years now, but now is finally being served on the web thanks to serverless lambda functions.",
      "p_5": "Both versions of the app can be found under my github page ",
      "p_6": "The working app served on the web can be tried "
    }
  },
  "fi": {
    "data": {
      "name": "Spotify Favorites",
      "description": "Musiikin kuuntelu analytiikkaa",
      "buttonText": "Kokeile täällä!"
    },
    "content": {
      "p_1": "Spotify Favorites on sovellus, jonka avulla voi tarkastella Spotify käyttäjän eniten kuunneltuja kappaleita ja artisteja. Kuuntelutietoja voi tarkastella kolmesta eri aikahaarukasta: viimeisen kuukauden, puolen vuoden ja useamman vuoden ajalta.",
      "p_2": "Sovelluksen tieto haetaan suoraan Spotifyltä, ja ainakin omasta kokemuksesta tieto on todella tarkkaa jokaiseen aikahaarukkaan suhteutettuna.",
      "p_3": "Sivu vaatii toimiakseen tietoja lukeakseen kirjautumisen Spotifyn sivun kautta.",
      "p_4": "Projekti itsessään on ollut hautumassa jo muutaman vuoden ( jolloin se oli ollut toteutettuna käyttäen noden express kirjastoa ), mutta nyt uudelleen kirjoitettuna Vuella toteutettu versio oli kätevämpi ottaa käyttöön netissä hyödyntäen netlifyn \"serverless\" funktioita.",
      "p_5": "Verkkosovelluksen molemmat versiot, vanha node express versio ja uusi vue -pohjainen versio, löytyvät githubista linkeistä ",
      "p_6": "Itse toimivaa uutta verkosta löytyvää versiota voi käydä kokeilemassa "
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
    date="16.10.2019"
    link="https://spotifyfavorites.pennanen.dev/"
    filelocation="spotifyfavorites"
    :previewImage="
      require('@/assets/images/spotifyfavorites/spotifyfavorites3.png')
    "
    :preview="preview"
  >
    <p>{{ $t('content.p_1') }}</p>
    <p>{{ $t('content.p_2') }}</p>
    <p>{{ $t('content.p_3') }}</p>
    <ProjectImage
      alt
      :src="require('@/assets/images/spotifyfavorites/spotifyfavorites1.png')"
    ></ProjectImage>
    <p>{{ $t('content.p_4') }}</p>
    <p>
      {{ $t('content.p_5') }}
      <a class="contentlink" href="https://github.com/Pennane/spotify-favorites"
        >github.com/Pennane/spotify-favorites </a
      >({{ $t('word.old') }})
      {{ $t('word.and') }}
      <a class="contentlink" href="https://github.com/Pennane/spotify-favorites"
        >github.com/Pennane/vue-spotify-favorites </a
      >({{ $t('word.new') }}).
    </p>
    <p>
      {{ $t('content.p_6') }}
      <a class="contentlink" href="https://spotifyfavorites.pennanen.dev/">{{
        $t('word.here')
      }}</a
      >.
    </p>
  </Project>
</template>

<script>
import Project from '@/components/project/Project.vue'
import ProjectImage from '@/components/project/ProjectImage.vue'

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
