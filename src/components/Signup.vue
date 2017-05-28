<template>
  <div>
    <h1>Sign up</h1>
    <form action="/auth/signup" method="post">
      <div class="form-group">
            <label>Email</label>
            <input type="text" class="form-control" name="email">
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" name="password">
        </div>

        <button type="submit" class="btn btn-warning btn-lg">Signup</button>
    </form>
    <p class="route">Already have an account? <a href="/login">Login</a></p>
  </div>
</template>

<style scoped>
</style>
