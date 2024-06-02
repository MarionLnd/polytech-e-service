<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Cog8ToothIcon, InformationCircleIcon } from '@heroicons/vue/24/outline'
import { WrenchScrewdriverIcon } from '@heroicons/vue/24/outline'
import { EnvelopeIcon } from '@heroicons/vue/24/outline'

import lightsImg from '$images/home/ampoules.jpg'
import bubbleHeadImg from '$images/home/bubble-head.jpg'
import electricalInstallationImg from '$images/home/Installation_Electrique.jpg'
</script>

<template>
  <main class="flex container my-14 text-justify flex-col">
    <div class="section-1 flex flex-col p-14">
      <div class="p-5 self-center">
        <p>
          <b class="text-5xl text-blue-500">POLYTECH -E- SERVICES</b>,
          <span class="text-2xl tracking-tighter uppercase">
            Vous apporter la lumière dans votre environnement 💡</span
          >
        </p>
        <p class="text-center italic text-xl text-gray-500">
          Spécialisé dans l’installation électrique pour particuliers et professionnels !
        </p>
      </div>

      <p class="mt-1 text-center text-2xl tracking-tight">
        Nous sommes ravis de vous accueillir sur notre site. Située dans la commune de Sevran, notre
        société vous offre un grand choix de produits et de services parfaitement adaptés à vos
        exigences.
      </p>
    </div>

    <div
      class="section-2 flex flex-col gap-10 mt-10 p-14 px-0 bg-gradient-to-r from-white via-blue-300 to-white"
    >
      <div class="flex flex-row justify-around max-h-96 mb-20">
        <div class="flex">
          <p class="self-center max-w-2xl text-xl">
            <span class="text-blue-500 font-semibold">POLYTECH -E- SERVICES</span>, votre partenaire
            de confiance pour tous vos besoins en matière d’installation électrique. Nous sommes
            heureux de vous présenter notre gamme complète de services, qui inclut l’éclairage,
            l’automatisation, les véhicules électriques, les alarmes et la domotique, les réseaux,
            l’appareillage, l’économie d’énergie, les chauffe-eaux électriques, le chauffage
            électrique, …
          </p>
        </div>

        <div class="s2-img-div">
          <img :src="lightsImg" class="s2-img max-w-3xl rounded-3xl" />
        </div>
      </div>

      <div class="flex flex-row justify-around max-h-96">
        <div class="s2-img-div mr-4">
          <!-- TODO Center the image -->
          <img :src="bubbleHeadImg" class="s2-img max-w-2xl rounded-3xl" />
        </div>
        <div class="flex">
          <p class="self-center max-w-2xl text-xl">
            Notre entreprise est composée de plusieurs équipes de personnes expérimentées et
            qualifiées, qui mettent tout leur savoir-faire et leur expertise à votre disposition
            pour vous guider dans vos choix les plus adaptés à vos besoins. Nous sommes fiers de
            perpétuer notre savoir-faire et de le renouveler constamment à travers nos techniciens,
            pour vous garantir des prestations de qualité.
          </p>
        </div>
      </div>
      <div class="flex flex-row justify-around max-h-96">
        <div class="flex">
          <p class="self-center max-w-2xl text-xl">
            Chez <span class="text-blue-500 font-semibold">POLYTECH -E- SERVICES</span>, nous sommes
            qualifiés <span class="text-gray-500 font-semibold">QUALIFELEC (mention IRVE)</span> et
            habilités pour assurer des interventions de qualité, en respectant les normes
            françaises. Nous sommes également équipés de tous les moyens humains et matériels
            nécessaires pour répondre au mieux à vos attentes.
            <br />
            Nous sommes à votre disposition pour toute demande ou question, n’hésitez pas à nous
            contacter pour en savoir plus sur nos services.<br />
            Faites confiance à notre expérience et à notre savoir-faire pour tous vos besoins en
            matière d’installation électrique.
          </p>
        </div>

        <div class="s2-img-div">
          <img :src="electricalInstallationImg" class="s2-img max-w-2xl rounded-3xl" />
        </div>
      </div>
    </div>

    <div class="section-3 flex p-14 justify-around h-60">
      <RouterLink
        to="/about"
        class="border-black border-2 p-7 shadow-xl rounded-full hover:text-gray-200 hover:border-gray-200 hover:bg-blue-300"
      >
        <div class="flex flex-col">
          <InformationCircleIcon class="self-center h-9 w-9 text-blue-10" />

          <p class="text-2xl text-center">A PROPOS</p>
        </div>
      </RouterLink>

      <RouterLink
        to="/solutions"
        class="border-black border-2 p-7 shadow-xl rounded-full hover:text-gray-200 hover:border-gray-200 hover:bg-blue-300"
      >
        <div class="flex flex-col">
          <Cog8ToothIcon class="self-center h-9 w-9 text-blue-10" />

          <p class="text-2xl text-center">SOLUTIONS</p>
        </div>
      </RouterLink>

      <RouterLink
        to="/realisations"
        class="border-black border-2 p-7 shadow-xl rounded-full hover:text-gray-200 hover:border-gray-200 hover:bg-blue-300"
      >
        <div class="flex flex-col">
          <WrenchScrewdriverIcon class="self-center h-9 w-9 text-blue-10" />

          <p class="text-2xl text-center">RÉALISATIONS</p>
        </div>
      </RouterLink>

      <RouterLink
        to="/contact"
        class="border-black border-2 p-7 shadow-xl rounded-full hover:text-gray-200 hover:border-gray-200 hover:bg-blue-300"
      >
        <div class="flex flex-col">
          <EnvelopeIcon class="self-center h-9 w-9 text-blue-10" />

          <p class="text-2xl text-center">CONTACT</p>
        </div>
      </RouterLink>
    </div>

    <div class="section-4 p-14 bg-blue-100">Avis (Soon..)</div>
  </main>
</template>

<style scoped>
.s2-img-div {
  height: 60em;
}
.s2-img {
  width: 100%;
  max-height: 40%;
  object-fit: cover;
}
</style>
