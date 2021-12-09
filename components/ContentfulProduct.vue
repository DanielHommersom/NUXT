<template>
  <div>
    <div class="wrapper">
      <img :src="content.image[0].fields.file.url" width="300" height="300"/>
      <div class="productName">{{ content.productName }}</div>
      <div class="productDescription">{{ content.productDescription }}</div>
      <div class="productPrice">€ {{ content.price }},-</div>
      <button>Buy</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ContentfulProduct',
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
.wrapper {
margin-top: 20px;
margin-bottom: 20px;
background-color: white;
display: inline-block;
}
.productName {
text-align: center;
}
.productDescription {
text-align: center;
}
.productPrice {
text-align: center;
font-weight: bold;
}
button {
margin-left: auto;
margin-right: auto;
display: block;
margin-top: 10px;
margin-bottom: 20px;
background-color: green;
width: 80%;
height: 40px;
color: white;
border-radius: 5px;
border: 0;
}
</style>
