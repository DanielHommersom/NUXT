export { default as ContentfulEntry } from '../../components/ContentfulEntry.vue'
export { default as ContentfulHeader } from '../../components/ContentfulHeader.vue'
export { default as ContentfulImage } from '../../components/ContentfulImage.vue'
export { default as ContentfulJumbotron } from '../../components/ContentfulJumbotron.vue'
export { default as ContentfulOrderedList } from '../../components/ContentfulOrderedList.vue'
export { default as ContentfulParagraph } from '../../components/ContentfulParagraph.vue'
export { default as ContentfulProduct } from '../../components/ContentfulProduct.vue'
export { default as ContentfulTemplate } from '../../components/ContentfulTemplate.vue'
export { default as ContentfulUnorderedList } from '../../components/ContentfulUnorderedList.vue'
export { default as NuxtLogo } from '../../components/NuxtLogo.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
