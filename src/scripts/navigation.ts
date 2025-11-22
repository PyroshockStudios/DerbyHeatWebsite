import router from '@/router'
export function gotoNewsPage(pageId: number) {
  router.push(`/news/${pageId}`)
}
export function gotoHomePage() {
  router.push(`/`)
}
