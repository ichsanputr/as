<template>
    <div class="w-full min-h-screen flex justify-center items-center">
        <div>
            <img @click="$router.push('/')" class="cursor-pointer mx-auto mb-3" width="100"
                src="https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993_1280.png"
                alt="">
            <h1 class="font-semibold text-2xl">Upss... Halaman tidak Ditemukan</h1>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: "404 Not Found"
})
</script>
