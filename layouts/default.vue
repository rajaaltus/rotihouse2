  
<template>
<div>
  <Header />
  <div class="page_header mb-4">
		    <div class="container">
		    	<div class="row">
		    		<div class="col-xl-8 col-lg-7 col-md-7 d-none d-md-block">
		    		</div>
		    		<div class="col-xl-4 col-lg-5 col-md-5">
		    			<div class="search_bar_list">
							<input type="text" class="form-control" placeholder="Search again...">
							<input type="submit" value="Search">
						</div>
		    		</div>
		    	</div>
		    	<!-- /row -->		       
		    </div>
		</div>
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