// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title:"ร้านค้า Arm shop",
      meta : [
        {
          name : "description" , content : "รายละเอียดเว็บไซต์"
        }
      ]
    }
  }
})
