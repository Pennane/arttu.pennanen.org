<i18n>
{
  "en": {
    "data": {
      "name": "Yatzy",
      "description": "Traditional Yatzy game",
      "buttonText": "Try here!"
    },
    "content": {
      "p_1": "This Yatzy functions as a port from traditional dice game to an internet environment, where nothing unnecessary has been brought in. ",
      "p_2": "Reason for this Yatzy version was a longing for a game found in the now terminated Playforia online game community, that had.",
      "p_3": "The visual side for this Yatzy game replicates the Playforia's old Yatzy where the design has been created using the skeuomorphic design style where objects mimic their real-life counterparts.",
      "p_4" : "Creating the game usability and ease of use were on high priority. This can be seen as smooth animations and lack of unnecessary features.",
      "p_5": "The game can be played both in singleplayer and two-player variants."
     },
     "caption": {
        "i_1" : "Image of the Yatzy",
       "i_2" : "Image of the removed Playforia Yatzy",
       "i_3" : "Rolling dice in-game",
       "i_4" : "Choosing the die in-game"
     }
      },
  "fi": {
    "data": {
      "name": "Yatzy",
      "description": "Perinteinen Yatzy nettipeli",
      "buttonText": "Kokeile täällä!"
    },
    "content": {
      "p_1": "Tämä Yatzy peli toimii perinteisen noppapelin tuontina verkkoympäristöön ilman omituisia ominaisuuksia tai visioita. ",
      "p_2": "Tämä tunnetun noppapelin versio syntyi kaipuusta lopettaneen Aapeli-pelisivuston Yatzy peliä kohtaan, jota nuorempana pelattiin useaan otteeseen useassa yhteydessä.",
      "p_3": "Yatzyn visuaalinen puoli on luotu vahvasti kunnioittaen vanhaa Aapelissa toiminutta yatzy peliä ajatellen, jossa pääideana on, että käyttöliittymä on toteutettu skeuoformismin (eli reaalimaailmaa jäljittelevään design-tyylin) tyylillä.",
      "p_4" : "Peliä luodessa pyrkimyksenä oli pitää käytettävyys mahdollisimman luontevana ja sulavana. Tuntuisi, että soljuvat kappaleiden animoinnit tekevät tämän Yatzy kopion pelaamisesta erittän miellyttävää, mikä ei todellakaan ole itsestäänselvyys virtuaaliselle noppapelille.",
      "p_5": "Peliä on mahdollista pelata sekä yksin- että kaksinpelinä. Yksinpelissä tavoitteena on saada mahdollisimman korkeat pisteet, ja kaksinpelissä vuorotellaan pelaajien välillä ja pyritään voittamaan toisen pisteet."
     },
     "caption": {
        "i_1" : "Kuva Yatzystä",
       "i_2" : "Kuva poistuneesta Aapelin Yatzy pelistä",
       "i_3" : "Noppien heitto Yatzy pelissä",
       "i_4" : "Noppien valinta Yatzy pelissä"
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
    link="https://yatzy.pennanen.dev/"
    filelocation="yatzy"
    :previewImage="require('@/assets/images/yatzy/1.png')"
    :preview="preview"
  >
    <p>{{$t("content.p_1")}}</p>
    <p>{{$t("content.p_2")}}</p>
    <ProjectImage alt :src="require('@/assets/images/yatzy/1.png')" :caption="$t('caption.i_1')"></ProjectImage>
    <p>{{$t("content.p_3")}}</p>
    <ProjectImage alt :src="require('@/assets/images/yatzy/2.png')" :caption="$t('caption.i_2')"></ProjectImage>
    <p>{{$t("content.p_4")}}</p>
    <ProjectImage alt :src="require('@/assets/images/yatzy/3.mp4')" :caption="$t('caption.i_3')"></ProjectImage>
    <ProjectImage alt :src="require('@/assets/images/yatzy/4.mp4')" :caption="$t('caption.i_4')"></ProjectImage>
    <p>{{$t("content.p_5")}}</p>
  </Project>
</template>

<script>
import Project from '@/components/Project.vue'
import ProjectImage from '@/components/ProjectImage.vue'

export default {
  name: 'yatzy',
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
