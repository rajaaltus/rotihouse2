<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <nuxt-link class="navbar-brand shadow-lg" to="/" style="background-color: #eee;">
        <img src="/logo.svg" alt="" class="logo-style" />
      </nuxt-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/">Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/about">About</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/categories">Our Menu</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/contact">Contact</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
.logo-style {
  background-color: #eeeeee !important;
}
</style>
