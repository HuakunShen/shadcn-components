<script setup lang="ts">
defineProps<{ msg: string }>();
</script>
<template>
  <div>
    <h1>Test</h1>
    <span>{{ msg }}</span>
  </div>
</template>
