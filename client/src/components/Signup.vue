<template>
 <div class="container col-md-4">
    <div>
      <div class="form-group">
        <label for="exampleInputEmail1" class="lbl">Email address</label>
        <input v-model="formData.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" type="email">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1" class="lbl">Password</label>
        <input v-model="formData.password" class="form-control" id="exampleInputPassword1" placeholder="Password" type="password">
      </div>
      <button @click="signup(formData)" type="button" class="btn btn-success rgt">Sign up</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'signup'
    ])
  }
}
</script>

<style>

</style>
