<template>
  <div>
    <div class="content">
      <div v-if="contentfulContent.length > 0">
        <div v-if="contentfulContent[0].related_content">
          <div v-if="contentfulContent[0].related_content.sys.contentType.sys.id === 'jumbotron'">
            <contentful-jumbotron :content="contentfulContent[0].related_content.fields" />
          </div>
        </div>
        <div v-if="contentfulContent[0].content">
          <div v-for="(contentItem, index) in contentfulContent[0]" :key="contentItem + index">
            <div v-for="(items, index) in contentItem" :key="items + index">
              <div v-for="(item, index) in items" :key="item + index">
                <div v-if="headers.includes(item.nodeType)">
                  <contentful-header :content="item" />
                </div>
                <div v-if="item.nodeType ==='paragraph'">
                  <contentful-paragraph :content="item.content" />
                </div>
                <div v-if="item.nodeType === 'unordered-list'">
                  <contentful-unordered-list :content="item.content" />
                </div>
                <div v-if="item.nodeType === 'ordered-list'">
                  <contentful-ordered-list :content="item.content" />
                </div>
                <div v-if="item.nodeType === 'embedded-asset-block'">
                  <contentful-image :content="item" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="contentfulContent[0].related_content">
          <div v-if="contentfulContent[0].related_content.sys.contentType.sys.id === 'product'">
            <contentful-product :content="contentfulContent[0].related_content.fields" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentfulHeader from './ContentfulHeader'
import ContentfulParagraph from './ContentfulParagraph'
import ContentfulOrderedList from './ContentfulOrderedList'
import ContentfulUnorderedList from './ContentfulUnorderedList'
import ContentfulImage from './ContentfulImage.vue'
import ContentfulJumbotron from './ContentfulJumbotron.vue'
import ContentfulProduct from './ContentfulProduct.vue'

export default {
  name: 'ContentfulTemplate',
  components: {
    ContentfulHeader,
    ContentfulParagraph,
    ContentfulOrderedList,
    ContentfulUnorderedList,
    ContentfulImage,
    ContentfulJumbotron,
    ContentfulProduct
  },
  props: {
    contentfulContent: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      markdownSource: '',
      message: 'markdown rendered',
      headers: ['heading-1', 'heading-2', 'heading-3', 'heading-4', 'heading-5', 'heading-6']
    }
  },
  created () {
  }
}
</script>
<style scoped>
  .content {
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-top: 25px;
    padding-bottom: 25px;
    padding-left: 50px;
    padding-right: 50px;
    background-color: #ececec;
  }
</style>
