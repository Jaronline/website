<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Home from "@/components/Home.vue";
</script>

<template>
  <Header/>
  <main>
    <Home/>
  </main>
  <Footer/>
</template>

<style scoped>
main {
  padding-inline: 1.25rem;
  padding-block: 1rem;
  flex: 1 1 0;
}
</style>
