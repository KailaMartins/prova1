<template>
  <v-container class="my-8">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="pa-6 elevation-5">
          <v-card-title class="text-h4 font-weight-bold primary--text">
            Sobre — Pet Shop HARU
          </v-card-title>

          <v-card-text class="mt-4 text-body-1">
            Esta é uma **aplicação demonstrativa** desenvolvida com
            <strong>Vue 3</strong> e <strong>Vuetify 3</strong>.  
            A aplicação apresenta funcionalidades como:
          </v-card-text>

          <v-list dense class="mt-3">
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="primary">mdi-arrow-right</v-icon>
              </v-list-item-icon>
              <v-list-item-content>Roteamento com <strong>vue-router</strong></v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="primary">mdi-arrow-right</v-icon>
              </v-list-item-icon>
              <v-list-item-content>Componentes reutilizáveis</v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="primary">mdi-arrow-right</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                Diretivas Vue: <code>v-for</code>, <code>v-if</code>, <code>v-else</code>, <code>v-bind</code>, <code>v-on</code>, <code>v-model</code>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="primary">mdi-arrow-right</v-icon>
              </v-list-item-icon>
              <v-list-item-content>Persistência de dados via <strong>localStorage</strong></v-list-item-content>
            </v-list-item>
          </v-list>

          <v-card-text class="mt-4 text-body-1">
            Desenvolvido como entrega de projeto/atividade.
          </v-card-text>

          <v-divider class="my-4"></v-divider>

          <v-card-subtitle class="text-subtitle-1 font-weight-medium">
            Desenvolvedores:
          </v-card-subtitle>
          <v-list dense>
            <v-list-item><strong>20230041164</strong> Ryller Brito</v-list-item>
            <v-list-item><strong>20220010880</strong> Kaila Martins</v-list-item>
            <v-list-item><strong>2019274108</strong> Carla Eduarda Izidorio</v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style scoped>
.v-card {
  background-color: #fdfdfd;
  border-radius: 16px;
}
</style>
