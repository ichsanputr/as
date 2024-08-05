import { _ as __nuxt_component_0 } from './BreadCrumb-6154852b.mjs';
import { ref, resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, u as useHead } from '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'destr';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'h3';
import 'ufo';
import '@vueuse/integrations/useJwt';
import 'cookie-es';
import 'ohash';
import 'pinia-plugin-persistedstate';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main = {
  __name: "Galeri",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    const images = ref([]);
    const videos = ref([]);
    const page = ref(1);
    const pageLength = ref(0);
    const fetchVideos = async () => {
      try {
        const response = await fetch(`/api/video-gallery?limit=3&page=${page.value}`);
        const data = await response.json();
        videos.value = data.data;
        pageLength.value = Math.ceil(data.total / 3);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    const changePage = async (newPage) => {
      page.value = newPage;
      await fetchVideos();
    };
    useHead({
      title: "Galeri Desa"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BreadCrumb = __nuxt_component_0;
      const _component_v_pagination = resolveComponent("v-pagination");
      const _component_v_img = resolveComponent("v-img");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-fade flex-1 px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6" }, _attrs))} data-v-b067e3d0>`);
      _push(ssrRenderComponent(_component_BreadCrumb, null, {
        root: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-b067e3d0${_scopeId}>Galeri Desa</span>`);
          } else {
            return [
              createVNode("span", null, "Galeri Desa")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="pb-[1rem]" data-v-b067e3d0><h1 class="mb-2 font-semibold text-[#0088CC] text-2xl" data-v-b067e3d0>Galeri Video</h1><div class="grid grid-cols-1 md:grid-cols-3 gap-[2rem]" data-v-b067e3d0><!--[-->`);
      ssrRenderList(videos.value, (video, key) => {
        _push(`<div class="w-full rounded-lg" data-v-b067e3d0><a${ssrRenderAttr("href", video.url)} target="_blank" rel="noreferrer" data-v-b067e3d0><iframe class="w-full rounded-t-lg shadow-sm" width="100%" height="245" loading="lazy"${ssrRenderAttr("src", video.url)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen data-v-b067e3d0></iframe></a><div class="rounded-b-lg py-3 px-2 font-medium text-base md:text-lg backdrop-blur-sm bg-white/30 shadow-sm border border-slate-100" data-v-b067e3d0>`);
        if (video.description.length > 40 && _ctx.$vuetify.display.mobile) {
          _push(`<span data-v-b067e3d0>${ssrInterpolate(video.description.slice(0, 40))}...</span>`);
        } else {
          _push(`<span data-v-b067e3d0>${ssrInterpolate(video.description)}</span>`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_v_pagination, {
        size: _ctx.$vuetify.display.mobile ? "small" : "default",
        class: "mt-4 mb-6 md:mb-10",
        modelValue: page.value,
        "onUpdate:modelValue": [($event) => page.value = $event, changePage],
        "total-visible": 5,
        length: pageLength.value
      }, null, _parent));
      _push(`</div><div class="pb-[6rem]" data-v-b067e3d0><h1 class="mb-8 font-semibold text-[#0088CC] text-2xl" data-v-b067e3d0>Galeri Foto</h1><div id="gallery" class="grid grid-cols-1 md:grid-cols-3 gap-[2rem] md:gap-y-[2rem]" data-v-b067e3d0><!--[-->`);
      ssrRenderList(images.value, (image, key) => {
        _push(`<a class="w-full cursor-pointer rounded-lg"${ssrRenderAttr("href", image.url)} data-pswp-width="600" data-pswp-height="400" target="_blank" rel="noreferrer" data-v-b067e3d0>`);
        _push(ssrRenderComponent(_component_v_img, {
          "lazy-src": image.url,
          class: "w-full rounded-t-lg",
          height: "300",
          src: image.url,
          alt: ""
        }, null, _parent));
        _push(`<div class="rounded-b-lg py-3 px-2 font-medium text-base md:text-lg backdrop-blur-sm bg-white/30 shadow-sm border border-slate-100" data-v-b067e3d0>`);
        if (image.description.length > 40 && _ctx.$vuetify.display.mobile) {
          _push(`<span data-v-b067e3d0>${ssrInterpolate(image.description.slice(0, 40))}...</span>`);
        } else {
          _push(`<span data-v-b067e3d0>${ssrInterpolate(image.description)}</span>`);
        }
        _push(`</div></a>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Galeri.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Galeri = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b067e3d0"]]);

export { Galeri as default };
//# sourceMappingURL=Galeri-ad195a34.mjs.map
