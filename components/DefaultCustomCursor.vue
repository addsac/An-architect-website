<template>
    <div class="custom-cursor h-5 w-5 bg-yellow-400 rounded-full z-50">
      <p id="cursor-text" class="font-sweet"
       style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 4px !important"> 
       Vedi
      </p>
    </div>
</template>

<script>
export default {
  mounted() {
    'use strict'

    const cursor = document.querySelector('.custom-cursor')

    window.addEventListener('mousemove', mouseMoveHandler)
    window.addEventListener('mousedown', mouseDownHandler)
    window.addEventListener('mouseup', mouseUpHandler)

    function mouseMoveHandler(e) {
      gsap.to(cursor, { left: ((e.clientX - cursor.offsetWidth / 2) - 10) + 'px', top: ((e.clientY - cursor.offsetHeight / 2) - 10) + 'px', delay: 0.04, ease: "power3.out" })

      /* Hidden the cursor when hovering a link */
      if(e.target.localName == 'a' || e.target.localName == 'button') {
        gsap.to(cursor, { opacity: '0', duration: 1, ease: "power4.out" })
      }
      else{
        gsap.to(cursor, { opacity: '1', background: '#FBBF24', duration: 1, ease: "power4.out" })
      }
    }

    function mouseUpHandler(e) {
      gsap.to(cursor, { scale: '1', ease: "power4.out" })
    }

    function mouseDownHandler() {
      gsap.to(cursor, { scale: '0', ease: "power4.out" })
    }

    gsap.set('#cursor-text', { autoAlpha: 0 })
  },
}
</script>

<style scoped>
.custom-cursor {
  position: fixed;
  display: inline-block;
  left: 0;
  right: 0;
  pointer-events: none;
}
</style>