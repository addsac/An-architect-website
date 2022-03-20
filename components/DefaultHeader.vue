<template>
    <div id="header" class="fixed top-0 mx-auto max-w-screen-2xl w-full z-20">
        <header class="px-12 font-sweet flex justify-center items-center relative">

            <div class="w-full py-5 text-lg border-b border-black flex justify-between items-center z-20">
                <!-- Logo -->
                <!-- <div class="flex items-center" style="width: 200px">
                    <div class="h-6 w-6 bg-black"></div>
                    <div class="h-6 w-6 bg-yellow-400 rounded-t-full bg-black ml-1 mr-4"></div>
                </div> -->

                <!-- Cta -->
                <div class="flex">
                    <NuxtLink to="/" class="mr-6 tracking-tight hover:underline"> Home </NuxtLink>
                    <NuxtLink to="/progetti" class="mr-6 tracking-tight hover:underline"> Progetti </NuxtLink>
                    <NuxtLink to="/blog" class="mr-6 tracking-tight hover:underline"> Blog</NuxtLink>
                </div>
                
                <div class="flex flex-col">
                    <NuxtLink to="/" class="relative flex items-center justify-center">
                        <img id="logo1" src="/img/logo.svg" alt="logo Marco Baldassa Architettura" class="h-12" />
                        <img id="logo2" src="/img/logo_2.svg" alt="logo Marco Baldassa Architettura" class="absolute" style="height: 13px; opacity: 0" />
                    </NuxtLink>
                </div>
                
                <div style="width: 230px" class="flex justify-end">
                    <div @click="openModalMenu" class="flex items-center">
                        <button class="tracking-tight flex items-center">
                            <!-- <div class="flex flex-col mr-2">
                                <div class="w-5 border-t border-black"></div>
                                <div class="w-5 border-t border-black my-1"></div>
                                <div class="w-5 border-t border-black"></div>
                            </div> -->

                            Contatti

                            <img src="/img/arrow.svg" alt="" class="ml-3 h-3 w-3">
                        </button>
                    </div>
                </div>    
            </div>
            
            <div class="absolute h-full w-full opacity-80 z-10"></div>

        </header>
    </div>
</template>

<script>
export default {
    data(){
        return {
            tl: null,
        }
    },
    methods: {
        openModalMenu(){
            gsap.to('#modal-menu', { top: '0', borderTopLeftRadius: 0, borderTopRightRadius: 0, duration: 1, ease: 'power4.out' })

            gsap.from('#text-1', { opacity: 0, y: "400px", duration: 1.3, ease: 'power4.out', delay: 0.4 })
            gsap.from('#text-2', { opacity: 0, y: "400px", duration: 1.3, ease: 'power4.out', delay: 0.6 })
            gsap.from('#text-3', { opacity: 0, y: "400px", duration: 1.3, ease: 'power4.out', delay: 0.8 })
            gsap.from('#text-4', { opacity: 0, y: "400px", duration: 1.3, ease: 'power4.out', delay: 1 })
            gsap.from('#modal-star', { scale: 0, duration: .4, ease: 'power4.out', delay: 1.3 })
            
            gsap.from('#grid-border', { scaleX: 0, transformOrigin: "left", duration: 1, delay: 1.2, ease: 'power1.out' })
        },
        showLogo2(){
            /* this.tl.to("#logo1", {
                opacity: 0,
                duration: 0.4,
                ease: 'power1.out'
            });

            this.tl.to("#logo2", {
                opacity: 1,
                scale: 2.2,
                duration: 0.4,
                ease: 'power1.out'
            }); */

            this.tl.to('#header', {
                duration: 0.4,
                ease: 'power1.out',
                y: '-100%'
            })
        },
        hiddenLogo2(){
            /* this.tl.to("#logo2", {
                opacity: 0,
                scale: 1,
                duration: 0.4,
                ease: 'power1.out'
            });

            this.tl.to("#logo1", {
                opacity: 1,
                duration: 0.4,
                ease: 'power1.out'
            }); */

            this.tl.to('#header', {
                duration: 0.4,
                ease: 'power1.out',
                y: '0'
            })
        },
    },
    mounted(){
        this.tl = gsap.timeline()

        // PRENDO L'EVENTO DI SCROLL DEL BODY 
        // SE 0 = LOGO COMPLETO
        // SE != 0 = LOGO STELLA
        // SHOW AND HIDE MENU FUNCTION
        const body = document.body;
        let lastScroll = 0;

        window.addEventListener("scroll", () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll <= 0) {
                body.classList.remove("scroll-up");
                return;
            }

            if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
                body.classList.remove("scroll-up");
                body.classList.add("scroll-down");
                
                this.showLogo2()
            } 
            else if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
                body.classList.remove("scroll-down");
                body.classList.add("scroll-up");
                
                this.hiddenLogo2()
            }

            lastScroll = currentScroll;
        });
    }
}
</script>

<style>    
</style>