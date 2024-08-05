<script setup>
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const images = ref(null);
const lightbox = ref(null);

const fetchImages = async () => {
  const response = await $fetch('/api/image-gallery?limit=6');
  images.value = response.data.slice(0, 6); // Ensure the limit of 6 is applied here
};

onMounted(async () => {
  await fetchImages();
  await nextTick(() => {
    if (!lightbox.value) {
      lightbox.value = new PhotoSwipeLightbox({
        gallery: '#gallery',
        children: 'a',
        pswpModule: () => import('photoswipe'),
      });
      lightbox.value.on('uiRegister', function () {
        lightbox.value.pswp.ui.registerElement({
          name: 'download-button',
          order: 8,
          isButton: true,
          tagName: 'a',

          // SVG with outline
          html: {
            isCustomSVG: true,
            inner: '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1ZM23 23H9v2h14Z" id="pswp__icn-download"/>',
            outlineID: 'pswp__icn-download'
          },

          onInit: (el, pswp) => {
            el.setAttribute('download', '');
            el.setAttribute('target', '_blank');
            el.setAttribute('rel', 'noopener');

            pswp.on('change', () => {
              console.log('change');
              el.href = pswp.currSlide.data.src;
            });
          }
        });

        lightbox.value.pswp.ui.registerElement({
          name: 'custom-caption',
          order: 9,
          isButton: false,
          appendTo: 'root',
          html: 'Caption text',
          onInit: (el, pswp) => {
            lightbox.value.pswp.on('change', () => {
              const currSlideElement = lightbox.value.pswp.currSlide.data.element;
              let captionHTML = '';
              if (currSlideElement) {
                const hiddenCaption = currSlideElement.querySelector('.hidden-caption-content');
                captionHTML = hiddenCaption.innerHTML;
              }
              el.innerHTML = captionHTML;
            });
          }
        });
      });
      lightbox.value.init();
    }
  });
});
</script>

<template>
  <div class="block col-span-4">
    <div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-xl md:text-2xl font-semibold py-3">
      <span>Galeri Desa</span>
    </div>
    <div>
      <div id="gallery" class="rounded-lg grid grid-cols-1 md:grid-cols-3 mb-2 gap-6">
        <div v-for="(image, key) in images" :key="key" class="rounded-lg h-full w-full relative">
          <a :href="image.url" data-pswp-width="600" data-pswp-height="400" target="_blank" rel="noreferrer">
            <div class="hidden-caption-content">{{image.description}}</div>
            <v-img :lazy-src="image.url" class="rounded-md" cover width="100%" aspect-ratio="1" :src="image.url" />
            <div
              class="rounded-lg z-10 py-1 backdrop-blur-xl opacity-90 pl-2 bg-[#0088CC] bottom-0 absolute w-full text-white">
              <p class="truncate text-sm md:text-base">{{ image.description }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.pswp__custom-caption {
  font-size: 16px;
  color: #fff;
  width: calc(100% - 32px);
  max-width: 400px;
  padding: 2px 8px;
  border-radius: 4px;
  text-align: center;
  position: absolute;
  left: 50%;
  bottom: 16px;
  transform: translateX(-50%);
}

.pswp__custom-caption a {
  color: #fff;
  text-decoration: underline;
}

.hidden-caption-content {
  display: none;
}

::v-deep img {
  border-radius: 6px;
  width: 100%;
  object-fit: cover;
}
</style>
