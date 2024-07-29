<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(author, index) in authors"
        :key="index"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card>
          <v-img
            :src="author.photo"
            height="200px"
          ></v-img>
          <v-card-title>{{ author.name }}</v-card-title>
          <v-card-subtitle>{{ author.institution }}</v-card-subtitle>
          <v-card-text>{{ author.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      authors: [
        {
          photo: require('@/assets/author1.jpg'),
          name: 'Author One',
          institution: 'Institution One',
          description: 'Description about Author One.',
        },
        {
          photo: require('@/assets/author2.jpg'),
          name: 'Author Two',
          institution: 'Institution Two',
          description: 'Description about Author Two.',
        },
        {
          photo: require('@/assets/author3.jpg'),
          name: 'Author Three',
          institution: 'Institution Three',
          description: 'Description about Author Three.',
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-card {
  margin: 20px;
}
</style>
