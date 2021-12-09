<template>
  <div>
    <div>
      <b-navbar toggleable="lg" class="navigation">
        <b-navbar-brand class="navigation">I C.O.D.E</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse" />
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item v-for="(menuItem, index) in menuItems" :key="menuItem + index">
              <a v-on:click="handleNavigation(menuItem.slug, menuItem.id)">{{ menuItem.title }}</a>
              <!-- <nuxt-link :to="'/' + menuItem.slug">{{ menuItem.title }} </nuxt-link> -->
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div class="content" v-if="contentfulContent">
      <contentful-template :contentful-content="contentfulContent" />
    </div>
  </div>
</template>

<script>
import * as contentful from 'contentful'
import ContentfulTemplate from '../components/ContentfulTemplate.vue'

export default {
  name: 'Home',
  components: {
    ContentfulTemplate

  },
  data () {
    return {
      contentfulClient: contentful.createClient({
        space: '0jggy3scr5ea',
        accessToken: 'M4aSFlQgd4ovAK5htrqlb7AangMiRTbwTzlWgE7O17A',
        host: 'cdn.contentful.com'
      }),
      menuItems: [],
      contentfulContent: [],
      homePage: '3YV4wgnrjdrIJH8QkqzuuS'
    }
  },
  created () {
    this.getContentfulData()
    this.handleNavigation('', this.homePage)
  },
  methods: {
    getContentfulData () {
      this.contentfulClient.getEntries().then((data) => {
        debugger
        const items = data.items
        items.forEach((item) => {
          if (item.sys.contentType.sys.id === 'menuItem') {
            this.menuItems.push({ title: item.fields.title, slug: item.fields.slug, id: item.sys.id })
          }
        })
      })
    },
    handleNavigation (slug, id) {
      this.contentfulContent = []
      this.contentfulClient.getEntry(id).then((data) => {
        this.contentfulContent.push(data.fields)
      })
    }
  }
}
</script>
<style scoped>
.navigation{
  background-color: #0070ad;
  color: white;
}
a:link {
  color: white !important;
}

/* visited link */
a:visited {
  color: white;
}

/* mouse over link */
a:hover {
  color: black !important;
}

/* selected link */
a:active {
  color: white;
}
</style>
