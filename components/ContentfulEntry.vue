<template>
  <div>
    {{ content }}
  </div>
</template>

<script>

export default {
  name: 'ContentfulEntry',
  components: { },
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
