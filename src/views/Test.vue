<template>
    <div @click="getset"> Hello test</div>
</template>
<script>
export default {
  methods: {
    getset () {
      console.log('get')
      var name = this.$options.methods.getOther()
      console.log(name)
    },
    getOther () {
      console.log('kkkk')
      return 111
    }
  }
}
</script>
