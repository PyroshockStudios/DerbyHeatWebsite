import router from '@/router'
export function gotoNewsPage (pageId : Number) {
  router.push(`/news/${pageId}`)
}
export function gotoHomePage () {
  router.push(`/`)
}