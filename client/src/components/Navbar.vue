<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">E-mpritter</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Tweets' }" class="nav-link">Tweets</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Profile</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" placeholder="Search" type="text">
          <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          <button @click="posting" type="button" class="btn btn-success">New Tweet</button>
          <button type="button" class="btn btn-outline-secondary">Log out</button>
        </form>
      </div>
    </nav>
    <PostTweet v-if="formPost"/>
  </div>
</template>

<script>
import PostTweet from '@/components/PostTweet'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    PostTweet
  },
  computed: {
    ...mapState([
      'formPost'
    ])
  },
  methods: {
    ...mapActions([
      'posting'
    ])
  }
}
</script>

<style>

</style>
