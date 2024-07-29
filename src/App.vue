<template>
  <v-theme-provider :theme="themeMode">
  <router-view/>
  <Drawer class="drawer-elevated"/>
</v-theme-provider>
</template>

<script>
import { ref, onMounted } from 'vue';
import Drawer from './components/Drawer.vue'
export default {
  components: { Drawer },
  setup() {
    const themeMode = ref('light'); // padrão light

    const setThemeMode = () => {
      const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
      themeMode.value = prefersDarkScheme.matches ? 'dark' : 'light';
    };onMounted(() => {
      setThemeMode();
      // Adicione um listener para mudanças no tema do sistema, se necessário
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setThemeMode);
    });

    return {
      themeMode,
    };
  },

}
</script>

<style>
.drawer-elevated {
  z-index: 10; /* Elevate drawer above main content */
}
</style>