<script setup lang="ts">
function calculateAge(birthday: Date) {
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const age = calculateAge(new Date("2003-06-18"));
</script>

<template>
  <div class="text-xl leading-7 space-y-5">
    <p>Hello there, my name is Jaron Zijlstra (a.k.a. Jaronline). A {{age}}-year-old student studying to become a software engineer.</p>
    <p>My hobbies include gaming, cycling and playing Dungeons & Dragons with friends.</p>
  </div>
</template>