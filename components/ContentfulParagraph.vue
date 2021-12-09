<template>
  <div>
    <p v-if="content[0].nodeType === 'text'">
      <span v-if="content[0].marks && content[0].marks.length < 1">{{ content[0].value }}</span>
      <span v-if="content[0].marks && content[0].marks.length > 0 && content[0].marks[0].type === 'bold'">{{ content[0].value }}</span>
      <i v-if="content[0].marks && content[0].marks.length > 0 && content[0].marks[0].type === 'italic'">{{ content[0].value }}</i>
      <u v-if="content[0].marks && content[0].marks.length > 0 && content[0].marks[0].type === 'underline'">{{ content[0].value }}</u>
      <code v-if="content[0].marks && content[0].marks.length > 0 && content[0].marks[0].type === 'code'">{{ content[0].value }}</code>
    </p>
    <a v-if="content[0].nodeType === 'hyperlink'" :href="content[0].data.uri">{{ content[0].content[0].value }}</a>
  </div>
</template>

<script>
export default {
  name: 'ContentfulParagraph',
  components: { },
  props: {
    content: {
      type: Array,
      default: () => []
    }
  },
  created () {
  }
}
</script>
<style>
p {
  margin-bottom: 4px;
  margin-top: 4px;
}
</style>
