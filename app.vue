<template>
  <div>
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
     <NuxtLayout :name="defaultLayout" v-if="store.showApp && store.nodeResult">
          <NuxtPage />      
      </NuxtLayout>
  </div>
</template>
