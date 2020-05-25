<template>
  <footer class="text-white text-base tracking-wider">
    <div class="container">
      <div class="logo -ml-4">
        <Logo
          :responsive="false"
          :iconHeight="27"
          :iconWidth="27"
          :nameWidth="130"
          :color="'primary'"
        />
      </div>
      <hr />

      <div class="info-container px-2">
        <div class="info my-6">
          <div class="-ml-1">
            <p class="mb-1">Östermalmsgatan 26A</p>
            <p>114 26 Stockholm</p>
          </div>
          <div class="email my-6">
            <a
              href="mailto:info@laundrop.se"
              class="flex"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                class="mr-2"
                width="22"
                height="22"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22 6.02686C22 4.92686 21.1 4.02686 20 4.02686H4C2.9 4.02686 2 4.92686 2 6.02686V18.0269C2 19.1269 2.9 20.0269 4 20.0269H20C21.1 20.0269 22 19.1269 22 18.0269V6.02686ZM20 6.02686L12 11.0269L4 6.02686H20ZM12 13.0269L4 8.02686V18.0269H20V8.02686L12 13.0269Z"
                  fill="white"
                />
              </svg>
              <p>info@laundrop.se</p>
            </a>
          </div>
        </div>
        <table class="contact my-6 capitalize">
          <tr>
            <td>
              <a href="http://" target="_blank" rel="noopener noreferrer">contact</a>
            </td>
            <td>
              <a href="http://" target="_blank" rel="noopener noreferrer">om oss</a>
            </td>
          </tr>
          <tr>
            <td>faq</td>
            <td>
              <a href="http://" target="_blank" rel="noopener noreferrer">boka tvätt</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="http://" target="_blank" rel="noopener noreferrer">proccess</a>
            </td>
            <td>
              <a href="http://" target="_blank" rel="noopener noreferrer">abonnemang</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="http://" target="_blank" rel="noopener noreferrer">villkor</a>
            </td>
            <td>
              <a href="http://" target="_blank" rel="noopener noreferrer">dit företag</a>
            </td>
          </tr>
        </table>
        <div class="social-media flex -ml-2">
          <span>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <svg
                width="60"
                height="60"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 2.02686C6.48 2.02686 2 6.50686 2 12.0269C2 17.5469 6.48 22.0269 12 22.0269C17.52 22.0269 22 17.5469 22 12.0269C22 6.50686 17.52 2.02686 12 2.02686ZM4 12.0269C4 11.4169 4.08 10.8169 4.21 10.2469L8.99 15.0269V16.0269C8.99 17.1269 9.89 18.0269 10.99 18.0269V19.9569C7.06 19.4569 4 16.0969 4 12.0269ZM15.99 16.0269C16.89 16.0269 17.63 16.6169 17.89 17.4269C19.19 16.0069 20 14.1069 20 12.0269C20 8.67686 17.92 5.79686 14.99 4.61686V5.02686C14.99 6.12686 14.09 7.02686 12.99 7.02686H10.99V9.02686C10.99 9.57686 10.54 10.0269 9.99 10.0269H7.99V12.0269H13.99C14.54 12.0269 14.99 12.4769 14.99 13.0269V16.0269H15.99Z"
                  fill="white"
                />
              </svg>
            </a>
          </span>
          <span>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <svg
                width="60"
                height="60"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 2.02686C6.48 2.02686 2 6.50686 2 12.0269C2 17.5469 6.48 22.0269 12 22.0269C17.52 22.0269 22 17.5469 22 12.0269C22 6.50686 17.52 2.02686 12 2.02686ZM4 12.0269C4 11.4169 4.08 10.8169 4.21 10.2469L8.99 15.0269V16.0269C8.99 17.1269 9.89 18.0269 10.99 18.0269V19.9569C7.06 19.4569 4 16.0969 4 12.0269ZM15.99 16.0269C16.89 16.0269 17.63 16.6169 17.89 17.4269C19.19 16.0069 20 14.1069 20 12.0269C20 8.67686 17.92 5.79686 14.99 4.61686V5.02686C14.99 6.12686 14.09 7.02686 12.99 7.02686H10.99V9.02686C10.99 9.57686 10.54 10.0269 9.99 10.0269H7.99V12.0269H13.99C14.54 12.0269 14.99 12.4769 14.99 13.0269V16.0269H15.99Z"
                  fill="white"
                />
              </svg>
            </a>
          </span>
          <span>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <svg
                width="60"
                height="60"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 2.02686C6.48 2.02686 2 6.50686 2 12.0269C2 17.5469 6.48 22.0269 12 22.0269C17.52 22.0269 22 17.5469 22 12.0269C22 6.50686 17.52 2.02686 12 2.02686ZM4 12.0269C4 11.4169 4.08 10.8169 4.21 10.2469L8.99 15.0269V16.0269C8.99 17.1269 9.89 18.0269 10.99 18.0269V19.9569C7.06 19.4569 4 16.0969 4 12.0269ZM15.99 16.0269C16.89 16.0269 17.63 16.6169 17.89 17.4269C19.19 16.0069 20 14.1069 20 12.0269C20 8.67686 17.92 5.79686 14.99 4.61686V5.02686C14.99 6.12686 14.09 7.02686 12.99 7.02686H10.99V9.02686C10.99 9.57686 10.54 10.0269 9.99 10.0269H7.99V12.0269H13.99C14.54 12.0269 14.99 12.4769 14.99 13.0269V16.0269H15.99Z"
                  fill="white"
                />
              </svg>
            </a>
          </span>
        </div>
      </div>
      <div class="copyright flex text-xs md:text-sm py-8 justify-start">
        <p class="ml-px">&copy;</p>
        <p>2020 by laundrop.se, org.nr.559177-7016</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Logo from "../Logo.vue";

@Component({
  components: { Logo }
})
export default class SiteFooter extends Vue {}
</script>

<style lang="scss" scoped>
footer {
  background: #0a2423;
  width: 100vw;
  border-top: 25px solid #134948;
  padding: 50px 20px 0px 20px;
  overflow: hidden;
}
.email {
  margin-left: -6px;
}
td {
  padding: 8px;
}
table {
  margin-left: -10px;
}

// iPhones
@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
  .info-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .copyright {
    justify-content: center;
  }
  table {
    margin-left: 0px;
  }
  td {
    padding: 0px 0px 10px 0px;
  }
  .info,
  .contact {
    width: 50%;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .email {
    width: fit-content;
    margin-bottom: 10px;
  }
}
@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
  .info-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .copyright {
    justify-content: center;
  }
  table {
    margin-left: 0px;
  }
  td {
    padding: 0px 0px 10px 0px;
  }
  .info,
  .contact {
    width: 50%;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .email {
    width: fit-content;
    margin-bottom: 10px;
  }
}
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape) {
  .info-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .copyright {
    justify-content: center;
  }
  table {
    margin-left: 0px;
  }
  td {
    padding: 0px 0px 10px 0px;
  }
  .info,
  .contact {
    width: 50%;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .email {
    width: fit-content;
    margin-bottom: 10px;
  }
}

// large screens
@media only screen and (min-device-width: 768px) {
  .info-container {
    font-size: 18px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .copyright {
    justify-content: center;
  }
  table {
    margin-left: 0px;
  }
  td {
    padding: 0px 0px 20px 0px;
  }
  .info,
  .contact {
    width: 33%;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .email {
    width: fit-content;
    margin-bottom: 20px;
  }
  .social-media {
    flex-direction: column;
    margin-top: 17px;
  }
}
</style>
