<template>
  <footer class="pt-12 bg-secondary text-white ">
    <div class="container mx-auto flex flex-col items-center">
      <h1 class="text-5xl font-bold tracking-wider">Laundrop</h1>
      <div class="grid-cols-1 gap-4 grid">
        <div>
          <p>Östermalmsgatan 26A</p>
          <p>
            114 26 Stockholm
          </p>
          <p>
            info@laundrop.se
          </p>
        </div>
        <div class="grid-cols-3 gap-3 grid">
          <a target="_blank" href="https://www.instagram.com/laundrop.se/">
            <svg class="fill-current text-white hover:text-ld-pink h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <path
                d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm7 36.9c3.5 0 7.2-.1 10.7.1-.1 3.7 0 7.6-.1 11.3H57v35H42v-35c-3.1-.1-6.4 0-9.6-.1V36.8h9.5c.1-3 0-5.7.2-8.1.2-2.4 1-4.4 2.1-6.1 2.2-3.2 5.8-5.8 10.7-6 4-.2 8.5.1 12.8.1 0 3.8.1 7.7-.1 11.4-2.1.1-4.3-.2-6.1 0-1.9.2-3.3 1.3-3.9 2.7-.9 1.7-.6 3.8-.6 6.1z"
              />
            </svg>
          </a>
          <a href="https://www.facebook.com/laundrop.se/" target="_blank">
            <svg class="fill-current text-white hover:text-ld-pink h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101">
              <path
                d="M50.408 58.658c4.1 0 7.8-3.4 8-7.6.3-5.6-4.5-9.1-9.3-8.5-3.5.5-6.1 2.9-6.8 6.4-1.1 5.5 3.6 9.7 8.1 9.7zM71.608 26.858h-6.3c-.9 0-1.6.7-1.6 1.6v6.3c0 .9.7 1.6 1.6 1.6h6.3c.9 0 1.6-.7 1.6-1.6v-6.3c.1-.9-.7-1.6-1.6-1.6z"
              />
              <path
                d="M50.308.258c-27.6 0-50 22.4-50 50s22.4 50 50 50 50-22.4 50-50-22.4-50-50-50zm28.1 65.2c0 3.8-.7 6.7-2.7 9-1.8 2-4.2 3.7-7.6 4-5.6.4-11.6 0-17.6 0-5.7 0-11.8.4-17.6 0-5.7-.4-10.1-4.6-10.5-10.5-.6-7.8.4-17 0-25.4 0-.2.1-.4.3-.4h15.8c.5.3-.4 1-.7 1.5-1.1 2-1.9 5-1.6 8.3.4 6.6 6 12.3 13.1 12.8 5.2.4 9.4-2.1 12-5.3 2.4-2.9 4.4-8 2.6-13.4-.2-.7-.6-1.4-1-2-.3-.6-.8-1.2-.8-1.9h16.1c.3 8.2.2 15.7.2 23.3zm-39.1-14.7c-.1-3.6 1.6-6.5 3.3-8.2 1.7-1.7 3.8-2.8 7.1-3 6.1-.4 11.1 3.9 11.7 9.5.6 6.2-3.7 11.7-9.3 12.4-1 .1-2.4.1-3.4 0-4.9-.5-9.3-5-9.4-10.7zm39.1-10.2h-13.2c-1.4 0-3.1.3-4.4 0-.8-.2-1.2-1-1.9-1.5-2.2-1.6-5.6-3-9.8-2.7-3.1.2-5.2 1.3-7.2 2.9-.5.4-1.3 1.2-1.9 1.4-1.2.3-3 0-4.5 0h-13.1c.2-3.3-.4-6.5.1-9.3.6-3.3 2.6-5.6 4.6-7v11.7h2.2s-.2-9 .1-13.1c.3-.3 1-.2 1.4-.5.3 4.2.3 13.6.3 13.6h2.2v-13.5c0-.2 0-.4.1-.4h1.4v13.9h2.3v-13.9c9.4.5 21.5-.6 30.7 0 3.6.2 6.6 2 8.3 4.2 2.5 3.2 2.4 7.9 2.3 14.2z"
              />
            </svg>
          </a>
          <a target="_blank" href="https://www.linkedin.com/company/laundrop/">
            <svg class="fill-current text-white hover:text-ld-pink h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 100">
              <g clip-path="url(#clip0)">
                <path
                  d="M50.308 0c-27.6 0-50 22.4-50 50s22.4 50 50 50 50-22.4 50-50-22.4-50-50-50zm-14 75.3h-10.5V41.7c0-.1 0-.2.1-.2h10.5c-.1 11.2-.1 22.5-.1 33.8zm-8.7-39.4c-1.6-1.1-2.9-3.4-2.6-6.1.3-2 1.7-3.7 3.2-4.5.5-.3 1.2-.5 2-.5 4-.5 7 2.3 7 6.1-.1 4.6-5.4 7.8-9.6 5zm48.1 39.4h-10.5V63.2c0-5.1.7-11-2.8-12.8-1.7-.9-4-.6-5.5 0-3.8 1.7-3.5 7.1-3.5 13v11.9h-10.5V41.5h10.1v4.6c.4-.3.5-.7.8-1.1 1.8-2.4 5-4.4 9.1-4.4 5.2 0 8.9 1.8 10.8 5.1 2 3.5 2 8.4 2 13.9v15.7z"
                
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <path d="M.308 0h100v100h-100z" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div class="mt-12 pb-8 text-sm text-center">
      © 2020 by Laundrop.se | 559177-7916
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SiteFooter extends Vue {}
</script>

<style lang="scss"></style>
