<template>
  <div>
    <h1>Log In</h1>
    <form action="/auth/login" method="post">
      <div class="form-group">
            <label>Email</label>
            <input type="text" class="form-control" name="email">
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" name="password">
        </div>

        <button type="submit" class="btn btn-warning btn-lg">Login</button>
    </form>
    <p class="route">Need an account? <a href="/signup">Signup</a></p>
  </div>
</template>

<style scoped>
</style>
