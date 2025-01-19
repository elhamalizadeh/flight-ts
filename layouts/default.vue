<template>
  <div>
    <!-- header template -->
    <PartialsHeaderTemplate />
    <Transition name="page" mode="out-in">
      <slot></slot>
    </Transition>
    <!-- footer template -->
    <PartialsFooterTemplate />
  </div>
</template>
<script>

export default {
}
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>