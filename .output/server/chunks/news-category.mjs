import { defineEventHandler, getQuery } from 'h3';
import { u as useRuntimeConfig } from './nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const newsCategory = defineEventHandler(async (event) => {
  let query = "";
  for (let key in getQuery(event)) {
    query += `${key}=${getQuery(event)[key]}&`;
  }
  return await $fetch(useRuntimeConfig().public.API_BASE_URL + "/api/news-category?" + query.slice(0, -1));
});

export { newsCategory as default };
//# sourceMappingURL=news-category.mjs.map
