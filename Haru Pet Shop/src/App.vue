<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Pet Shop HARU</v-toolbar-title>
      <v-spacer />
      <v-btn text to="/produtos">Produtos</v-btn>
      <v-btn text to="/crud">Gerenciar Produtos</v-btn>
      <v-btn text to="/sobre">Sobre</v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {}
</script>

<style>
/* ajuste simples */
</style>