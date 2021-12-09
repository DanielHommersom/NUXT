<template>
  <div>
    <b-jumbotron class="background" text-variant="white">
      <template #header>
        {{ content.title }}
      </template>
      <template #lead>
        {{ content.subTitle }}
      </template>
      <hr class="my-4" />
      <p>
        {{ content.subText }}
      </p>
    </b-jumbotron>
  </div>
</template>
<script>
export default {
  name: 'ContentfulJumbotron',
  props: {
    content: {
      type: Object,
      default: () => {}
    }
  },
  created () {
  }
}
</script>
<style scoped>
.background {
  background-color: #2b0a3d;
}
</style>
