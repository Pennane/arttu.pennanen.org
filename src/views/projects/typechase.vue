<i18n>
{
  "en": {
    "data": {
      "name": "Typechase",
      "description": "Typing Application",
      "buttonText": "Try here!"
    },
    "content": {
      "p_1": "Typechase is a typing application meant for type practising. It has various pre-saved texts that can be typed in to learn about typing speed.",
      "p_2": "User can use own preferred texts and redo the current text currently in typing.",
      "p_3": "Interacting with the app is relatively simple as the only thing to keep in mind is to type the words showcased right in front of the user.",
      "p_4": "The progress is shown using different colours with green for successfully typed character, red for unsuccessfully typed characters and yellow for characters that have been typed incorrectly but fixed afterwards.",
      "p_5": "There is a comprehensive guide about the functionality of the app that shows everything necessary to understand the Typechase application.",
      "p_6": "Typechase saves completed typing sessions to history which then presents the user the average words-per-minute listing from the previous typed in texts."
    },
    "caption": {
      "i_1": "A view of the Typechase interface",
      "i_2": "A view of the Typechase guide",
      "i_3": "A view of the Typechase typing history"
    }
      },
  "fi": {
    "data": {
      "name": "Typechase",
      "description": "Konekirjoitus sovellus",
      "buttonText": "Kokeile täällä!"
    },
    "content": {
      "p_1": "Typechase on konekirjoituksen opetteluun, sekä oman taidon tarkastamiseen tarkoitettu sovellus, johon on tallennettu useita englanninkielisiä tekstejä, joita käyttäjä voi kirjoittaa harjoitusmielessä.",
      "p_2": "Valmiiksi tallennettujen tekstejen sijasta käyttäjä voi myös käyttää omia tekstejä kirjoittamisen opetteluun, sekä aloittaa aina uudelleen käynnissäolevan tekstin.",
      "p_3": "Typechase on helppokäyttöinen siinä mielessä, ettei käyttäjän periaatteessa tarvitse tehdä muuta, kuin kirjoittaa edesse näkyvä teksti.",
      "p_4": "Kirjoittamisen edistystä ilmaistaan erivärisin kirjaimin. Vihreä oikein kirjoitetuille merkeille, punainen väärin kirjoitetuille merkeille, ja keltainen väärin kirjoitetuille, mutta jälkeenpäin korjatuille merkeille.",
      "p_5": "Sovellukseen on sisäänrakennettu opas, josta näkee kaikki tarvittavat tiedot sovelluksen toiminnasta.",
      "p_6": "Kaikki valmiiksi kirjoitetut tekstit tallennetaan käyttäjän selaimeen, josta sovellus laskee käyttäjälle päivittyvää wpm-tulosta."
    },
    "caption": {
      "i_1": "Näkymä Typechase:n käyttöliittymästä",
      "i_2": "Näkymä Typechase:n opasosiosta",
      "i_3": "Näkymä Typechase:n kirjoitushistoriasta"
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
    date="12.7.2019"
    link="https://arttu.pennanen.org/sub/typechase/"
    filelocation="typechase"
    :previewImage="require('@/assets/images/typechase/typechase1.png')"
    :preview="preview"
  >
    <p>{{ $t('content.p_1') }}</p>
    <p>{{ $t('content.p_2') }}</p>
    <ProjectImage
      alt
      :src="require('@/assets/images/typechase/typechase1.png')"
      :caption="$t('caption.i_1')"
    ></ProjectImage>
    <p>{{ $t('content.p_3') }}</p>
    <p>{{ $t('content.p_4') }}</p>
    <ProjectImage
      alt
      :src="require('@/assets/images/typechase/typechase2.png')"
      :caption="$t('caption.i_2')"
    ></ProjectImage>
    <p>{{ $t('content.p_5') }}</p>
    <ProjectImage
      alt
      :src="require('@/assets/images/typechase/typechase3.png')"
      :caption="$t('caption.i_3')"
    ></ProjectImage>
    <p>{{ $t('content.p_6') }}</p>
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
