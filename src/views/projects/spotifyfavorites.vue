<i18n>
{
  "en": {
    "data": {
      "name": "Spotify Favorites",
      "description": "Listening analytics",
      "buttonText": "Find here!"
    },
    "content": {
      "p_1": "Spotify Favorites is an application that shows most Spotify account's most listened tracks and artists from three different time frames. Most listened from the last month, last half a year and last few years.",
      "p_2": "The application fetches its data straight from Spotify, and at least based on my experience, the served data is indeed quite accurate for all of the different time frames.",
      "p_3": "The page requires the user to authenticate through Spotify, as the listening history is kept private on the user profiles.",
      "p_4": "This project has been under construction for a few years now, but now is finally being served on the web thanks to serverless lambda functions.",
      "p_5": "Both versions of the app can be found under my github page ",
      "p_6": "The working app served on the web can be tried "
    }
  },
  "fi": {
    "data": {
      "name": "Spotify Favorites",
      "description": "Musiikin kuuntelu analytiikkaa",
      "buttonText": "Löydä täältä!"
    },
    "content": {
      "p_1": "Spotify Favorites on sovellus, jonka avulla voi tarkastella oman käyttäjän eniten kuunneltuja kappaleita ja artisteja. Tietoja voi tarkastella kolmesta eri aikahaarukasta, eli kuunnelluimpia viimeisen kuukauden, puolen vuoden tai vuosien ajalta.",
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
    date="12.8.2019"
    link="https://github.com/Pennane/spotify-favorites"
    filelocation="spotifyfavorites"
    :previewImage="require('@/assets/images/spotifyfavorites/spotifyfavorites3.png')"
    :preview="preview"
  >
    <p>{{$t("content.p_1")}}</p>
    <p>{{$t("content.p_2")}}</p>
    <p>{{$t("content.p_3")}}</p>
    <ProjectImage alt :src="require('@/assets/images/spotifyfavorites/spotifyfavorites1.png')"></ProjectImage>
    <p>{{$t("content.p_4")}}</p>
    <p>
      {{$t("content.p_5")}}
      <a class="contentlink"
        href="https://github.com/Pennane/spotify-favorites"
      >github.com/Pennane/spotify-favorites </a>({{$t("word.old")}})
      {{$t("word.and")}}
      <a class="contentlink"
        href="https://github.com/Pennane/spotify-favorites"
      >github.com/Pennane/vue-spotify-favorites </a>({{$t("word.new")}}).
    </p>
    <p>
      {{$t("content.p_6")}}
      <a  class="contentlink" href="https://spotifyfavorites.pennanen.dev/">{{$t("word.here")}}</a>.
    </p>
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
