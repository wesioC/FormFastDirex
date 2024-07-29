<!-- eslint-disable vue/multi-word-component-names -->
<template>
  
    <v-stepper
    v-model="currentStep"
      :items="[
        'Bem Vindo',
        'Navegação',
        'Como Preencher',
        'Como Finalizar',
        'Agradecimentos',
      ]"
      color="green"
    >
    <!-- Slot para personalizar o botão de "Anterior" -->
    <template v-slot:prev>
      <v-btn @click="prevStep">Anterior</v-btn>
    </template>

    <!-- Slot para personalizar o botão de "Próximo" -->
    <template v-slot:next>
      <v-btn @click="nextStep">Próximo</v-btn>
    </template>
      <!-- eslint-disable-next-line vue/valid-v-slot -->
      <template v-slot:item.1>
        <v-card flat>
          <v-img
            src="src\assets\img\welcome.png"
            height="40vh"
            class="white--text align-end"
          >
          </v-img>
          <v-card-title>Bem-vindo!</v-card-title>
          <v-card-subtitle>Você está no Direx FormFast</v-card-subtitle>
          <v-card-text>Siga o tutorial e aprenda a preencher seu formulário de estágio!</v-card-text>
        </v-card>
      </template>
      <!-- eslint-disable-next-line vue/valid-v-slot -->
      <template v-slot:item.2>
        <v-card flat>
          <v-img
            src="src\assets\img\navegação.png"
            height="40vh"
            class="white--text align-end"
          >
          </v-img>
          <v-card-title>É simples e fácil!</v-card-title>
          <v-card-subtitle>É só navegar!</v-card-subtitle>
          <v-card-text>Expande o menu no canto superio esquerdo, escolha entre as opções de formulário que você precisa e clique!</v-card-text>
        </v-card>
      </template>
      <!-- eslint-disable-next-line vue/valid-v-slot -->
      <template v-slot:item.3>
        <v-card flat>
          <v-img
            src="src\assets\img\welcome.png"
            height="40vh"
            class="white--text align-end"
          >
          </v-img>
          <v-card-title>Bem-vindo!</v-card-title>
          <v-card-subtitle>Você está no Direx FormFast</v-card-subtitle>
          <v-card-text>Siga o tutorial e aprenda a preencher seu formulário de estágio!</v-card-text>
        </v-card>
      </template>
      <!-- eslint-disable-next-line vue/valid-v-slot -->
      <template v-slot:item.4>
        <v-card flat>
          <v-img
            src="src\assets\img\welcome.png"
            height="40vh"
            class="white--text align-end"
          >
          </v-img>
          <v-card-title>Bem-vindo!</v-card-title>
          <v-card-subtitle>Você está no Direx FormFast</v-card-subtitle>
          <v-card-text>Siga o tutorial e aprenda a preencher seu formulário de estágio!</v-card-text>
        </v-card>
      </template>
      <!-- eslint-disable-next-line vue/valid-v-slot -->
      <template v-slot:item.5>
        <v-card flat>
          <v-img
            src="src\assets\img\concluindo.png"
            height="40vh"
            class="white--text align-end"
          >
          </v-img>
          <v-card-title>Parabéns!</v-card-title>
          <v-card-subtitle>Obrigado por chegar até aqui!</v-card-subtitle>
          <v-card-text>Agora que você entendeu como preencher o formulário, é hora de mostrar que aprendeu!</v-card-text>
        </v-card>
      </template>
    </v-stepper>
</template>

<script>
export default {
  data() {
    return {
      currentStep: 1,
    };
  },
  methods: {
    nextStep() {
      if (this.currentStep < 5) {
        this.currentStep++;
      }
    },
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
  },
};
</script>

<style scoped>
</style>
