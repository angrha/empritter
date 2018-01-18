<template>
  <div class="container">
    <div v-for="t in tweetList" :key="t._id" class="card border-dark mb-3" style="max-width: 35rem; margin: auto;">
      <div class="card-header" style="text-align: left;">User</div>
      <div class="card-body text-dark">
        <p class="card-text"> {{ t.tweet }} </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'tweetList'
    ])
  },
  methods: {
    ...mapActions([
      'getAllTweet'
    ])
  },
  created () {
    this.getAllTweet()
  }
}
</script>

<style>

</style>
