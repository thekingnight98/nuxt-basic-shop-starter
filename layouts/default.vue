<template>
  <div>
    <header>
      <nav>
        <h1 class="logo-text">Arm shop</h1>
        <div class="nav-link">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/products">Products</NuxtLink>
        </div>
      </nav>
    </header>
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
nav {
  margin: 10px auto;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333;
}
nav a {
  color: white;
  text-decoration: none;
  margin-left: 12px;
  font-size: 18px;
  padding: 10px;
}
nav a:hover {
  color: orange;
}
.logo-text {
  margin-right: auto;
  padding-left: 10px;
  color: white;
}
</style>