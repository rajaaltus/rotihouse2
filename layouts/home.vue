<template>
<div>
  <Header />
  <Nuxt />
  <Call />
  <Footer />
  
</div>
  
</template>

<script>
  import Header from '@/components/Header'
  import Call from '@/components/Call'
  import Footer from '@/components/Footer'
  export default {
    components: {
      Header,
      Call,
      Footer
    }
  }
</script>