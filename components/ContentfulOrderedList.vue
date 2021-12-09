<template>
  <div>
    <ol>
      <li v-for="(listItem, index) in orderedList" :key="index + listItem">
        <contentful-paragraph :content="listItem" />
      </li>
    </ol>
  </div>
</template>

<script>
import ContentfulParagraph from './ContentfulParagraph'

export default {
  name: 'ContentfulOrderedList',
  components: { 'contentful-paragraph': ContentfulParagraph },
  props: {
    content: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      orderedList: []
    }
  },
  created () {
    this.content.forEach((listItems) => {
      listItems.content.forEach((listItem) => {
        this.orderedList.push(listItem)
      })
    })
  }
}
</script>
