<template>
  <div>
    <div v-if="content.nodeType === 'heading-1'">
      <h1>{{ content.content[0].value }}</h1>
    </div>
    <div v-if="content.nodeType === 'heading-2'">
      <h2>{{ content.content[0].value }}</h2>
    </div>
    <div v-if="content.nodeType === 'heading-3'">
      <h3>{{ content.content[0].value }}</h3>
    </div>
    <div v-if="content.nodeType === 'heading-4'">
      <h4>{{ content.content[0].value }}</h4>
    </div>
    <div v-if="content.nodeType === 'heading-5'">
      <h5>{{ content.content[0].value }}</h5>
    </div>
    <div v-if="content.nodeType === 'heading-6'">
      <h6>{{ content.content[0].value }}</h6>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ContentfulHeader',
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
<style>
</style>
