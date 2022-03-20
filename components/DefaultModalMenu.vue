<template>
  <div id="modal-menu" class="fixed h-screen w-screen bg-black text-white fixed z-50" style="top: 100vh; border-top-right-radius: 100%; border-top-left-radius: 100%">

        <div id="img-1" class="absolute" style="opacity: 0; width: 0; height: calc(100% - 52px); left: 0; right: 0; top: 26px; bottom: 26px; margin-left: auto; margin-right: auto">
            <img src="/img/1.png" alt="" class="h-full w-full" loading="lazy" />
        </div>
        <div id="img-2" class="absolute" style="opacity: 0; width: 0; height: calc(100% - 52px); left: 0; right: 0; top: 26px; bottom: 26px; margin-left: auto; margin-right: auto">
            <img src="/img/2.png" alt="" class="h-full w-full" loading="lazy" />
        </div>
        <div id="img-3" class="absolute" style="opacity: 0; width: 0; height: calc(100% - 52px); left: 0; right: 0; top: 26px; bottom: 26px; margin-left: auto; margin-right: auto">
            <img src="/img/3.png" alt="" class="h-full w-full" loading="lazy" />
        </div>
        <div id="img-4" class="absolute" style="opacity: 0; width: 0; height: calc(100% - 52px); left: 0; right: 0; top: 26px; bottom: 26px; margin-left: auto; margin-right: auto">
            <img src="/img/4.png" alt="" class="h-full w-full" loading="lazy" />
        </div>

        <button id="button-close" @click="closeModalMenu()" class="z-100 transform flex items-center justify-center absolute top-12 right-12 border border-white h-20 w-20 uppercase tracking-wider text-sm font-semibold rounded-full">
            <div class="w-8 border border-white absolute" style="transform: rotate(45deg)"></div>
            <div class="w-8 border border-white absolute" style="transform : rotate(-45deg)"></div>
        </button>

        <div id="text-menu" class="flex justify-center items-center h-screen z-100">
            <div class="m-32 mr-12 w-full font-sweet-medium text-8xl tracking-tighter">
                <div class="grid grid-cols-12">
                    <div class="col-span-6 flex overflow-hidden"> 
                        <div class="block">
                            <a href="#" id="text-1" @mouseenter="showImage(1); textHoveringNumber = 1" @mouseleave="hiddenImage(1); textHoveringNumber = null" :style="textHoveringNumber != 1 && textHoveringNumber != null ? {'opacity' : '.5'} : {'' : ''}" class="flex items-start">
                                <span class="text-3xl font-light tracking-wide mr-6">01</span> Works 
                            </a>
                        </div>
                    </div>
                    <div class="col-span-6 flex overflow-hidden"> 
                        <div class="block">
                            <a href="#" id="text-2" @mouseenter="showImage(2); textHoveringNumber = 2" @mouseleave="hiddenImage(2); textHoveringNumber = null" :style="textHoveringNumber != 2 && textHoveringNumber != null ? {'opacity' : '.5'} : {'' : ''}" class="flex items-start">
                                <span class="text-3xl font-light tracking-wide mr-6">02</span> Blog 
                            </a>
                        </div>
                    </div>
                </div>

                <div id="grid-border" class="w-full my-14 border-t border-white"></div>

                <img id="modal-star" src="/img/logo_2_white.svg" class="absolute w-12 h-12 z-50" style="margin-top: -1px; left: 50%; top: 50%; transform: translate(-50%, -50%)" alt="" />

                <div class="grid grid-cols-12">
                    <div class="col-span-6 flex overflow-hidden"> 
                        <div class="block">
                            <a href="#" id="text-3" @mouseenter="showImage(3); textHoveringNumber = 3" @mouseleave="hiddenImage(3); textHoveringNumber = null" :style="textHoveringNumber != 3 && textHoveringNumber != null ? {'opacity' : '.5'} : {'' : ''}" class="flex items-start">
                                <span class="text-3xl font-light tracking-wide mr-6">03</span> Process 
                            </a>
                        </div>
                    </div>
                    <div class="col-span-6 flex overflow-hidden"> 
                        <div class="block">
                            <a href="#" id="text-4" @mouseenter="showImage(4); textHoveringNumber = 4" @mouseleave="hiddenImage(4); textHoveringNumber = null" :style="textHoveringNumber != 4 && textHoveringNumber != null ? {'opacity' : '.5'} : {'' : ''}" class="flex items-start">
                                <span class="text-3xl font-light tracking-wide mr-6">04</span> Contact 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            tl: null,
            textHoveringNumber: null,
        }
    },
    methods: {
        showImage(n){
            var id = '#img-' + n
            this.tl.to(id, { opacity: 0.4, duration: 0.8, width:'60%', delay: 0.1, ease: 'power4.out' })
        },
        hiddenImage(n){
            var id = '#img-' + n
            this.tl.to(id, { duration: 0.6, width: 0, ease: 'power4.out' })
        },
        closeModalMenu(){
            gsap.to('#modal-menu', { 
                top: '-100%',
                borderTopLeftRadius: '100%',
                borderTopRightRadius: '100%',
                duration: 1,
                delay: .1,
                ease: 'circ.inOut'
            })
            gsap.to('#text-1', { 
                opacity: 0,
                duration: 0.8,
                y: '-200px',
                ease: 'circ.inOut'
            })
            gsap.to('#text-2', { 
                opacity: 0,
                duration: 0.8,
                y: '-200px',
                ease: 'circ.inOut'
            })
            gsap.to('#text-3', { 
                opacity: 0,
                duration: 0.8,
                y: '-200px',
                ease: 'circ.inOut'
            })
            gsap.to('#text-4', { 
                opacity: 0,
                duration: 0.8,
                y: '-200px',
                ease: 'circ.inOut'
            })

            gsap.to('#grid-border', { opacity: 0.4, duration: 0.8, ease: 'circ.inOut' })

            gsap.to('#modal-star', { scale: 0, duration: .4, ease: 'circ.inOut' })
            gsap.set('#modal-star', { scale: 1, delay: 1 })


            setTimeout(() => {
                gsap.set('#modal-menu', { top: '100%' })

                gsap.set('#grid-border', { opacity: 1 })

                gsap.set('#text-1', {
                    opacity: 1,
                    y: 0,
                })
                gsap.set('#text-2', {
                    opacity: 1,
                    y: 0,
                })
                gsap.set('#text-3', {
                    opacity: 1,
                    y: 0,
                })
                gsap.set('#text-4', {
                    opacity: 1,
                    y: 0,
                })
            }, 1100)
        },
    },
    mounted(){
        this.tl = gsap.timeline()
    }
}
</script>

<style>

</style>