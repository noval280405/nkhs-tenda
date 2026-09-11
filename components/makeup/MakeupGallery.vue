<script setup lang="ts">
defineProps<{ images: string[]; title: string }>()
</script>
<template><UiPhotoGallery :images="images" :title="title" portrait /></template>
