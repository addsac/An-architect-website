<template>
    <div id="hero" class="w-screen h-screen text-center flex items-center justify-center pt-12">
        <div id="hero-words">
            <div class="overflow-hidden">
                <h2 id="hero-item-1" class="hero-item font-sweet-light tracking-tight text-3xl" style="opacity: 0; transform: translate(0, 150%)">Architettura e design</h2>
            </div>
            <div class="overflow-hidden">
                <h1 id="hero-item-2" class="hero-item font-sweet-medium text-8xl tracking-tighter mt-10 mb-8" style="opacity: 0; transform: translate(0, 150%)">Marco Baldassa</h1>
            </div>
            <div class="overflow-hidden">
                <h2 id="hero-item-3" class="hero-item font-sweet-light tracking-tight text-3xl" style="opacity: 0; transform: translate(0, 150%)"> Case progettate per l'anima </h2>
            </div>
        </div>
        <div class="absolute w-1/3 h-80 border border-black"></div>
    </div>
</template>

<script>
export default {
    mounted() {
        gsap.set('#hero-item-1', { opacity: 0, y: "150%" })
        gsap.set('#hero-item-2', { opacity: 0, y: "150%" })
        gsap.set('#hero-item-3', { opacity: 0, y: "150%" })

        gsap.to('#hero-item-1', 0.8, { opacity: 1, y: "0", ease: 'power4.out', delay: .8 })
        gsap.to('#hero-item-2', 0.8, { opacity: 1, y: "0", ease: 'power4.out', delay: 0.2 })
        gsap.to('#hero-item-3', 0.8, { opacity: 1, y: "0", ease: 'power4.out', delay: .8 })

        gsap.to('#hero-words', {
            y: '-80px' ,
            opacity: 0.1,
            ease: 'power1.out',
            delay: 1.6,
            scrollTrigger: {
                trigger: '#hero',
                start: 'center center',
                end: 'bottom 0',
                scrub: .8,
            },
        })
    }
}
</script>

<style>
</style>