<!-- eslint-disable vue/no-unused-components -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
        class="bg-green drawer-elevated"
      >
        <v-list-item title="DIREX FormsFast" nav>
          <template v-slot:append>
            <v-btn variant="text" @click.stop="toggleRail" rounded="xl">
              <SvgIcon type="mdi" :path="currentIcon" />
            </v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="comfortable" nav>
          <v-list-item :to="{ path: '/' }" value="home" title="Home">
            <template v-slot:prepend>
              <SvgIcon type="mdi" :path="icons.home" />
            </template>
          </v-list-item>

          <v-list-item :to="{ path: '/startform' }" value="start" title="Início de Estágio">
            <template v-slot:prepend>
              <SvgIcon type="mdi" :path="icons.Play" />
            </template>
          </v-list-item>

          <v-list-item :to="{ path: '/endform' }" value="fim" title="Finalização de Estágio">
            <template v-slot:prepend>
              <SvgIcon type="mdi" :path="icons.check" />
            </template>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main class="main-content"></v-main>
    </v-layout>
  </v-card>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import {
  mdiHome,
  mdiChevronLeft,
  mdiChevronRight,
  mdiPlaySpeed,
  mdiProgressCheck,
} from "@mdi/js";

export default {
  name: "my-component",
  components: {
    SvgIcon,
  },
  data() {
    return {
      drawer: true,
      rail: true,
      icons: {
        home: mdiHome,
        chevronLeft: mdiChevronLeft,
        chevronRight: mdiChevronRight,
        Play: mdiPlaySpeed,
        check: mdiProgressCheck,
      },
    };
  },
  computed: {
    currentIcon() {
      return this.rail ? this.icons.chevronRight : this.icons.chevronLeft;
    },
  },
  methods: {
    toggleRail() {
      this.rail = !this.rail;
    },
  },
};
</script>

<style>
.drawer-elevated {
  z-index: 10; /* Elevate drawer above main content */
}

.main-content {
  position: relative;
  z-index: 1; /* Ensure main content is below drawer */
}
</style>
