<template>
    <div v-if="isMin" class="text-3xl font-bold bg-[#f2f2f2] p-5 rounded-xl md:row-span-3 md:text-6xl">
        <div class="flex flex-col h-0">
            <div class="justify-center items-center md:text-right">
                <router-link to="/Projects" class="hover:animate-pulse float-right">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 md:size-16">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                </svg>
                </router-link>
            </div>
        </div>
        <div class="flex h-full justify-end items-end text-right">
            Projects & Concepts
        </div>
    </div>
    <div v-else class="bg-[#0d0d0d] p-5 w-screen h-screen">
        <router-link to="/" class="absolute right-5 z-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f2f2f2" class="size-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
            </svg>
        </router-link>

        <div class="flex h-full overflow-hidden justify-center items-center gap-2">
    <div
        v-for="(image, index) in images"
        :key="index"
        class="relative w-1/12 transition-all duration-300 ease-in-out h-1/2 hover:h-full hover:w-full"
    >
        <img :src="image" alt="Gallery Image" class="w-full h-full object-cover" />
    </div>
</div>

    </div>
</template>
  
<script lang="ts">
    import { defineComponent} from 'vue';
    export default defineComponent({
        name: 'Projects',
        props: {
            isMin: {
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {
            images: [
                'https://preview.redd.it/is-man-batman-v0-ktygf6tsszjb1.jpg?width=1010&format=pjpg&auto=webp&s=13169add3542c05bcc8547a153b08ac3e2c0166f',
                'https://preview.redd.it/is-man-batman-v0-ktygf6tsszjb1.jpg?width=1010&format=pjpg&auto=webp&s=13169add3542c05bcc8547a153b08ac3e2c0166f',
                'https://preview.redd.it/is-man-batman-v0-ktygf6tsszjb1.jpg?width=1010&format=pjpg&auto=webp&s=13169add3542c05bcc8547a153b08ac3e2c0166f',
                'https://preview.redd.it/is-man-batman-v0-ktygf6tsszjb1.jpg?width=1010&format=pjpg&auto=webp&s=13169add3542c05bcc8547a153b08ac3e2c0166f',
                'https://preview.redd.it/is-man-batman-v0-ktygf6tsszjb1.jpg?width=1010&format=pjpg&auto=webp&s=13169add3542c05bcc8547a153b08ac3e2c0166f',
                'https://preview.redd.it/is-man-batman-v0-ktygf6tsszjb1.jpg?width=1010&format=pjpg&auto=webp&s=13169add3542c05bcc8547a153b08ac3e2c0166f',
                'https://preview.redd.it/is-man-batman-v0-ktygf6tsszjb1.jpg?width=1010&format=pjpg&auto=webp&s=13169add3542c05bcc8547a153b08ac3e2c0166f',
                'https://preview.redd.it/is-man-batman-v0-ktygf6tsszjb1.jpg?width=1010&format=pjpg&auto=webp&s=13169add3542c05bcc8547a153b08ac3e2c0166f',
                'https://preview.redd.it/is-man-batman-v0-ragq8j02tzjb1.jpg?width=1280&format=pjpg&auto=webp&s=21abb393b6c526f2c85caea1819beeb0ccdef561',
                'https://preview.redd.it/is-man-batman-v0-ktygf6tsszjb1.jpg?width=1010&format=pjpg&auto=webp&s=13169add3542c05bcc8547a153b08ac3e2c0166f',
                'https://preview.redd.it/is-man-batman-v0-ktygf6tsszjb1.jpg?width=1010&format=pjpg&auto=webp&s=13169add3542c05bcc8547a153b08ac3e2c0166f',
                'https://preview.redd.it/is-man-batman-v0-ktygf6tsszjb1.jpg?width=1010&format=pjpg&auto=webp&s=13169add3542c05bcc8547a153b08ac3e2c0166f',
                'https://preview.redd.it/is-man-batman-v0-ktygf6tsszjb1.jpg?width=1010&format=pjpg&auto=webp&s=13169add3542c05bcc8547a153b08ac3e2c0166f',
                'https://preview.redd.it/is-man-batman-v0-ktygf6tsszjb1.jpg?width=1010&format=pjpg&auto=webp&s=13169add3542c05bcc8547a153b08ac3e2c0166f',
                'https://preview.redd.it/is-man-batman-v0-ktygf6tsszjb1.jpg?width=1010&format=pjpg&auto=webp&s=13169add3542c05bcc8547a153b08ac3e2c0166f',
                'https://preview.redd.it/is-man-batman-v0-ktygf6tsszjb1.jpg?width=1010&format=pjpg&auto=webp&s=13169add3542c05bcc8547a153b08ac3e2c0166f',
                'https://preview.redd.it/is-man-batman-v0-ktygf6tsszjb1.jpg?width=1010&format=pjpg&auto=webp&s=13169add3542c05bcc8547a153b08ac3e2c0166f',
            ],
            };
        },
    })
</script>