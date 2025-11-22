import router from '@/router'
export function gotoNewsPage(pageId: unknown) {
  router.push(`/news/${pageId}`)
}
export function gotoHomePage() {
  router.push(`/`)
}
