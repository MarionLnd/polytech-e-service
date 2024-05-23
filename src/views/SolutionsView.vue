<script setup lang="ts"></script>

<template>
  <div class="container sm:my-11">
    <h1 class="uppercase text-4xl font-bold text-center text-blue-500">Nos solutions</h1>
    <div class="flex justify-center gap-x-12 sm:mt-10 divide-x">
      <div class="basis-9/12 text-justify">
        <h2 class="uppercase text-xl font-bold text-blue-800 sm:mb-3">Pour professionnels</h2>
        <p>
          Que vous soyez une copropriété, un commerce, des bureaux ou tout autre professionnel,
          notre entreprise est là pour vous aider en cas de problème électrique. Nous savons que les
          pannes électriques peuvent vous faire perdre du temps et de l’argent, c’est pourquoi nous
          nous engageons à intervenir dans les plus brefs délais en fonction de notre disponibilité.
        </p>
        <p>
          Notre première étape consiste à intervenir directement sur site pour anticiper les travaux
          à initier. Cette étape est essentielle pour des installations optimales dans les espaces
          dédiés. Ensuite, grâce à notre audit technique, nous pouvons proposer une solution
          efficace, économique et durable pour résoudre ou répondre à vos attentes.
        </p>
        <p>
          Notre équipe de techniciens expérimentés et qualifiés est à votre disposition pour tous
          vos besoins en matière d’installation électrique. Nous sommes équipés de tous les outils
          nécessaires pour garantir des interventions rapides et efficaces.
        </p>
        <br />
        <p class="italic">
          Chez
          <span class="text-blue-500 font-semibold not-italic">POLYTECH -E- SERVICES</span>
          nous sommes engagés à fournir des solutions électriques durables et respectueuses de
          l’environnement.
        </p>
        <br />
        <div>
          <h3 class="uppercase font-bold">Nos solutions</h3>
          <ul class="list-disc list-inside sm:ml-4">
            <li>Système éclairage <span class="italic">(éco détection, LED, …)</span></li>
            <li>
              Installation purement électrique
              <span class="italic"
                >(création de prise mono ou triphasé, séparation éclairage, …)</span
              >
            </li>
            <li>
              Travaux purement électrique
              <span class="italic"
                >(réhabilitation et mise en sécurité électrique, recherche de panne, diagnostic
                d’installation, …)</span
              >
            </li>
            <li>
              Installation et travaux informatique/réseaux
              <span class="italic"
                >(câblage réseau, mise au propre et changement de baie informatique, dépannage sur
                câble réseau, …)</span
              >
            </li>
            <li>Installation de borne de recharge de véhicule électrique.</li>
          </ul>
        </div>
      </div>

      <div class="basis-6/12 px-12">
        <h2 class="uppercase text-xl font-bold text-blue-800 sm:mb-3">Pour les particuliers</h2>
        <ul class="list-disc list-inside">
          <li>Réhabilitation électrique</li>
          <li>Dépannage et recherche de panne</li>
          <li>Installation neuve ou rénovation</li>
          <li>Changement de tableau électrique</li>
          <li>Mise à la terre</li>
          <li>Domotique</li>
          <li>Coffret de communication</li>
          <li>Borne de recharge pour V.E</li>
        </ul>
        <br />
        <p class="font-bold uppercase">Quelques tarifs pour particuliers</p>
        <ul class="list-disc list-inside">
          <li class="font-bold text-blue-950">
            Changement de tableau électrique et mise aux normes :
          </li>
          <ul class="list-disc list-inside ml-6">
            <li>
              Tableau 2 rangées à partir de
              <span class="font-bold text-blue-800">1 080 euros TTC</span>
            </li>
            <li>
              Tableau 3 rangées à partir de
              <span class="font-bold text-blue-800">1 220 euros TTC</span>
            </li>
            <li>
              Tableau 4 rangées à partir de
              <span class="font-bold text-blue-800">1 400 euros TTC</span>
            </li>
          </ul>
          <li class="font-bold text-blue-950">Rénovation électrique complète :</li>
          <ul class="list-disc list-inside ml-6">
            <li>
              Installation avant doublage à partir de
              <span class="font-bold text-blue-800"
                >95 euros/m<sup class="font-bold">2</sup> TTC</span
              >
            </li>
            <li>
              Installation saillie/apparent (sous moulure) à partir de
              <span class="font-bold text-blue-800"
                >89 euros/m<sup class="font-bold">2</sup> TTC</span
              >
            </li>
            <li>
              Installation encastrée (sous saignée) à partir de
              <span class="font-bold text-blue-800"
                >140 euros/m<sup class="font-bold">2</sup> TTC</span
              >
            </li>
          </ul>
          <li class="font-bold text-blue-950">
            Installation borne de recharge de véhicule électriques :
          </li>
          <ul class="list-disc list-inside ml-6">
            <li>A partir de <span class="font-bold text-blue-800">990 euros TTC</span></li>
          </ul>
        </ul>
      </div>
    </div>

    <p class="sm:mt-7">
      <span class="font-bold">Des projets ?</span> Contactez-nous dès maintenant et soumettez-nous
      votre demande via le
      <RouterLink
        to="/contact"
        class="underline font-bold text-blue-500 hover:text-blue-800 hover:cursor-pointer"
        >formulaire de contact prévu</RouterLink
      >. Nous vous répondrons dans les meilleurs délais afin de vous proposer les solutions les plus
      adaptées, en fonction de votre localisation.
    </p>
  </div>
</template>

<style></style>
