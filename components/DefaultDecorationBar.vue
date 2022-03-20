<template>
  <div class="flex justify-center items-center relative">
      <div class="bg-black" style="height: 1px" :style="{'width' : width+'px'}"></div>
      <img src="/img/logo_2.svg" alt="" class="absolute h-8 w-8" style="left: 50%; top: 50%; transform: translate(-52%, -52%)">
  </div>
</template>

<script>
export default {
    props: ['width']
}
</script>

<style>

</style>