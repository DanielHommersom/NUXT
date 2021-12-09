<template>
  <div>
    <ul class="mt-0">
      <div v-for="(listItem, index) in unorderedList" :key="index + listItem">
        <li v-if="listItem.nodeType === 'paragraph'">
          <contentful-paragraph :content="listItem" />
        </li>
        <li v-if="listItem.nodeType === 'embedded-asset-block'">
          <contentful-asset-block :content="listItem" />
        </li>
        <ul v-if="listItem.nodeType === 'unordered-list'">
          <div v-for="(subListItem, subIndex) in listItem.content[0].content" :key="subIndex + subListItem">
            <li v-if="subListItem.nodeType === 'paragraph'">
              <contentful-paragraph :content="subListItem" />
            </li>
            <ul v-if="subListItem.nodeType === 'unordered-list'">
              <li v-for="(subSubListItem, subSubIndex) in subListItem.content" :key="subSubIndex + subSubListItem">
                <contentful-paragraph :content="subSubListItem.content[0]" />
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </ul>
  </div>
</template>

<script>
import ContentfulParagraph from './ContentfulParagraph'

export default {
  name: 'ContentfulUnorderedList',
  components: { 'contentful-paragraph': ContentfulParagraph },
  props: {
    content: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      unorderedList: []
    }
  },
  created () {
    this.content.forEach((listItems) => {
      listItems.content.forEach((listItem) => {
        this.unorderedList.push(listItem)
      })
    })
  }
}
</script>
<style>
</style>
