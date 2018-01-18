<template>
<div class="container"> 
  <div class="form-group col-md-8">
    <div>
      <label>Add Tweet</label>
      <textarea v-model="post" class="form-control" id="exampleTextarea" rows="6"></textarea>
    </div>
      <div>
        <button type="submit" @click="postTweet" class="form-control btn btn-primary col-md-4 sub">Submit</button>
    </div>
  </div> 
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      post: ''
    }
  },
  methods: {
    ...mapActions([
      'postTweet'
    ])
  }

}
</script>

<style>

</style>
