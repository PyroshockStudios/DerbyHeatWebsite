export interface NewsItem {
  id: number
  title: string
  author: string
  category: string
  date: string
  preview_image: string
  preview_text: string
  page_html: string
}

export async function getNewsCards(): Promise<NewsItem[]> {
  try {
    // TODO: replace with something pointing to an actual DB
    const newsUrl = '/news.json'
    const response = await fetch(newsUrl)

    if (!response.ok) {
      throw new Error(`Failed to fetch news data from ${newsUrl}`)
    }

    return response.json()
  } catch (error) {
    console.error('Error fetching news:', error)
    return []
  }
}

export async function doesNewsPageExist(pageId: number): Promise<boolean> {
  if (!pageId) return false

  try {
    const items: NewsItem[] = await getNewsCards()
    return pageId <= items.length
  } catch (error) {
    console.warn(`Error checking for page ${pageId}:`, error)
    return false
  }
}

export async function getNewsPageHTML(pageId: unknown): Promise<string> {
  if (!pageId) return '<h2>Invalid page.</h2>'

  try {
    // 1. Fetch the HTML file from the /public/ folder
    const response = await fetch(`/news/pages/${pageId}.html`)

    if (!response.ok) throw new Error('News not found')

    // 2. Get the content as a string
    return response.text()
  } catch (error) {
    console.error('Error fetching news:', error)
    // Show an error message to the user
    const response = await fetch(`/404.html`)

    if (!response.ok) throw new Error('error: failed to find 404 page not found page')
    // 2. Get the content as a string
    return response.text()
  }
}
