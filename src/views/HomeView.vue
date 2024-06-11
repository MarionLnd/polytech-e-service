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
  <main class="flex container sm:my-14 sm:text-justify flex-col">
    <div class="section-1 flex flex-col p-10 sm:p-14">
      <div class="sm:p-5 self-center">
        <!-- Utiliser le code et les propriétés de Vue.js pour changer le <span /> en un autre <p /> si on est sur un téléphone ? -->
        <p>
          <b class="text-3xl sm:text-5xl text-blue-500">POLYTECH -E- SERVICES</b>,
          <span class="text-center sm:text-2xl sm:tracking-tighter uppercase">
            Vous apporter la lumière dans votre environnement 💡</span
          >
        </p>
        <p class="text-center italic text-xs sm:text-xl text-gray-500">
          Spécialisé dans l’installation électrique pour particuliers et professionnels !
        </p>
      </div>

      <p class="mt-3 sm:mt-1 text-justify sm:text-center sm:text-2xl sm:tracking-tight">
        Nous sommes ravis de vous accueillir sur notre site. Située dans la commune de Sevran, notre
        société vous offre un grand choix de produits et de services parfaitement adaptés à vos
        exigences.
      </p>
    </div>

    <div
      class="section-2 flex flex-col sm:gap-10 sm:mt-10 sm:p-14 px-4 sm:px-0 text-justify bg-gradient-to-r from-white via-blue-300 to-white"
    >
      <div
        class="flex flex-col sm:flex-row justify-around items-center sm:max-h-96 sm:mb-20 mt-6 sm:mt-12"
      >
        <div class="mb-2 sm:mb-0">
          <p class="self-center max-w-2xl text-sm sm:text-xl leading-relaxed">
            <span class="text-blue-500 font-semibold">POLYTECH -E- SERVICES</span>, votre partenaire
            de confiance pour tous vos besoins en matière d’installation électrique. Nous sommes
            heureux de vous présenter notre gamme complète de services, qui inclut l’éclairage,
            l’automatisation, les véhicules électriques, les alarmes et la domotique, les réseaux,
            l’appareillage, l’économie d’énergie, les chauffe-eaux électriques, le chauffage
            électrique, …
          </p>
        </div>

        <img :src="lightsImg" class="s2-img sm:max-w-3xl rounded-3xl mb-7 sm:mb-0" />
      </div>

      <div class="flex flex-col sm:flex-row justify-around sm:max-h-96 mb-8 sm:mb-16">
        <img :src="bubbleHeadImg" class="s2-img order-2 sm:order-1 sm:max-w-2xl rounded-3xl" />
        <div class="flex">
          <p class="self-center max-w-2xl text-sm sm:text-xl leading-relaxed mb-2 sm:mb-0">
            Notre entreprise est composée de plusieurs équipes de personnes expérimentées et
            qualifiées, qui mettent tout leur savoir-faire et leur expertise à votre disposition
            pour vous guider dans vos choix les plus adaptés à vos besoins. Nous sommes fiers de
            perpétuer notre savoir-faire et de le renouveler constamment à travers nos techniciens,
            pour vous garantir des prestations de qualité.
          </p>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row justify-around max-h-96 mb-10">
        <div class="flex">
          <p class="self-center max-w-2xl text-sm sm:text-xl leading-relaxed mb-2 sm:mb-0">
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

        <img :src="electricalInstallationImg" class="s2-img sm:max-w-2xl rounded-3xl" />
      </div>
    </div>

    <div
      class="section-3 flex flex-col sm:flex-row mt-5 sm:mt-0 p-10 sm:p-14 justify-around sm:h-60"
    >
      <RouterLink
        to="/about"
        class="border-black border-2 self-center w-3/5 sm:w-1/5 p-3 sm:p-7 mb-3 sm:mb-0 shadow-xl rounded-full hover:text-gray-200 hover:border-gray-200 hover:bg-blue-300"
      >
        <div class="flex flex-col">
          <InformationCircleIcon class="self-center h-9 w-9 text-blue-10" />

          <p class="sm:text-2xl text-center">A PROPOS</p>
        </div>
      </RouterLink>

      <RouterLink
        to="/solutions"
        class="border-black border-2 self-center w-3/5 sm:w-1/5 p-3 sm:p-7 mb-3 sm:mb-0 shadow-xl rounded-full hover:text-gray-200 hover:border-gray-200 hover:bg-blue-300"
      >
        <div class="flex flex-col">
          <Cog8ToothIcon class="self-center h-9 w-9 text-blue-10" />

          <p class="sm:text-2xl text-center">SOLUTIONS</p>
        </div>
      </RouterLink>

      <RouterLink
        to="/realisations"
        class="border-black border-2 self-center w-3/5 sm:w-1/5 p-3 sm:p-7 mb-3 sm:mb-0 shadow-xl rounded-full hover:text-gray-200 hover:border-gray-200 hover:bg-blue-300"
      >
        <div class="flex flex-col">
          <WrenchScrewdriverIcon class="self-center h-9 w-9 text-blue-10" />

          <p class="sm:text-2xl text-center">RÉALISATIONS</p>
        </div>
      </RouterLink>

      <RouterLink
        to="/contact"
        class="border-black border-2 self-center w-3/5 sm:w-1/5 p-3 sm:p-7 mb-3 sm:mb-0 shadow-xl rounded-full hover:text-gray-200 hover:border-gray-200 hover:bg-blue-300"
      >
        <div class="flex flex-col">
          <EnvelopeIcon class="self-center h-9 w-9 text-blue-10" />

          <p class="sm:text-2xl text-center">CONTACT</p>
        </div>
      </RouterLink>
    </div>

    <div class="section-4 p-14 bg-blue-100">Avis (Soon..)</div>
  </main>
</template>

<style scoped>
.s2-img {
  width: 100%;
  max-height: 40%;
  object-fit: cover;
}
</style>
