<template>
  <div>
    <img :src="this.content.data.target.fields.file.url" width="480" height="360"/>
  </div>
</template>

<script>

export default {
  name: 'ContentfulImage',
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
