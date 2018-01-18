<template>
  <div class="container col-md-4">
    <div>
      <div class="form-group">
        <label for="exampleInputEmail1" class="lbl">Email address</label>
        <input class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" type="email">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1" class="lbl">Password</label>
        <input class="form-control" id="exampleInputPassword1" placeholder="Password" type="password">
      </div>
      <router-link to="signup" type="button" class="btn btn-primary rgt">Sign up</router-link>
      <button type="button" class="btn btn-success rgt">Login</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
