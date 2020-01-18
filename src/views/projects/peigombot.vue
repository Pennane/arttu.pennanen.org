<i18n>
{
  "en": {
    "data": {
      "name": "Peigom Bot",
      "description": "Discord bot",
      "buttonText": "Find here!"
    },
    "content": {
      "p_1": "Peigom bot is a bot for Discord that contains a few dozen commands and actions, such as music playback, image processing and server moderation. Peigom has been under construction for a while now and has smoothed to something rather nicely polished compared to what it was in the beginning.",
      "p_2": "Peigom has been right from the start a passion project that has turned into a project that has no end in sight.",
      "p_3": "On a Discord server the bot can be woken up by using the command \",auta\". As of now the bot can not be invited to new servers, but if necessary the source code can be found from Github ",
      "p_4": "Currently, the bot has 52 different commands all of which can be triggered using various words. The bot functions completely in Finnish, so that can be a bit of a letdown for some. The bot a very rudimentary permission hierarchy that divides commands for normal users and administrators.",
      "p_5": "Here can be seen all of the 52 different commands that exist as of writing this.",
      "p_6": "The most complex command group that Peigom has ought to be the music playback functionality that allows Youtube video playback straight to Discord voice channels. The functionality works commendably although maybe not as well as the more known music bots internet has to offer.",
      "p_7": "The bot is being run on a Raspberry Pi computer, but another hosting service is being searched."
     },
     "caption": {
       "i_1" : "Botin herättävä valikon avaava komento on ,auta",
       "i_2" : "Botin sisäistämät eri komentotyypit",
       "i_3" : "Musiikkitoiminnon eri komennot",
       "i_4" : "Botin käynnistyminen konsolista katsottuna"
     }
      },
  "fi": {
    "data": {
      "name": "Peigom Bot",
      "description": "Discord botti",
      "buttonText": "Löydä täältä!"
    },
    "content": {
      "p_1": "Peigom bot on Discord botti, joka sisältää muutaman kymmentä kometoa sekä toimintoa, kuten musiikintoisto-, kuvanmuokkaus-, ja moderointitoimintoja. Peigom on ollu rakenteilla jo muutaman vuoden, ja onkin ajan kanssa hioutunut kamalasta hirvityksestä jopa toimivaksi rakkineeksi.",
      "p_2": "Peigom bot on alusta lähtien täysin itse värkätty kokonaisuus, josta on tullut itselle tärkeä omanlaisensa ikuisuusprojekti.",
      "p_3": "Discord palvelimella botin voi herättää käyttämällä komentoa \",auta\". Tällä hetkellä bottia ei saa lisättyä uusille palvelimille, mutta botin lähdekoodi löytyy Githubista ",
      "p_4": "Tällä hetkellä botti sisäistää näennäisesti 52 eri komentoa, joista kaikki tukevat useampia \"triggereitä\". Komennot on jaettu oikeusjärjestelmällä kolmeen osaan, missä suurin osa komennoista toimii jokaisella käyttäjällä, muutama valittu komentoa Discord palvelimen ylläpitäjillä, sekä kourallinen pelkästään botin omistajalla.",
      "p_5": "Alla lista kaikista botin komennoista",
      "p_6": "Peigomin ehkä monimutkaisin toiminto on musiikintoisto-ominaisuus, millä botti pystyy toistamaan Youtuben kautta musiikkia suoraan Discordin äänikanaville. Paljon on yritetty, eikä Peigom vielä tältä osalta ole aivan hallitsevien musiikkibottien tasolla, mutta musiikkitoiminnot ovat myönnettävästi jo varsin kiitettävällä tasolla.",
      "p_7": "Botti pyörii kotikeinoin muutaman kymmenen euron Raspberry Pi tietokoneella, mutta tulevaisuudessa botti mahdollisesti siirtyy jollekin ulkoistetulle palvelimelle."
     },
     "caption": {
       "i_1" : "Botin herättävä valikon avaava komento on ,auta",
       "i_2" : "Botin sisäistämät eri komentotyypit",
       "i_3" : "Musiikkitoiminnon eri komennot",
       "i_4" : "Botin käynnistyminen konsolista katsottuna"
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
    date="8.2018-"
    link="https://github.com/Pennane/peigom-bot"
    filelocation="peigombot"
    :previewImage="require('@/assets/images/peigom/peigom1.png')"
    :preview="preview"
  >
    <p>{{ $t('content.p_1') }}</p>
    <p>{{ $t('content.p_2') }}</p>
    <ProjectImage
      alt
      :src="require('@/assets/images/peigom/peigom1.png')"
      :caption="$t('caption.i_1')"
    ></ProjectImage>
    <p>
      {{ $t('content.p_3')
      }}<a href="https://github.com/Pennane/peigom-bot"
        >https://github.com/Pennane/peigom-bot</a
      >
    </p>
    <ProjectImage
      alt
      :src="require('@/assets/images/peigom/peigom2.png')"
      :caption="$t('caption.i_2')"
    ></ProjectImage>
    <p>{{ $t('content.p_4') }}</p>
    <p>{{ $t('content.p_5') }}</p>
    <ProjectImage
      alt
      :src="require('@/assets/images/peigom/peigom3.png')"
      :caption="$t('caption.i_3')"
    ></ProjectImage>
    <p>{{ $t('content.p_6') }}</p>
    <ProjectImage
      alt
      :src="require('@/assets/images/peigom/peigom4.png')"
      :caption="$t('caption.i_4')"
    ></ProjectImage>
    <p>{{ $t('content.p_7') }}</p>
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
