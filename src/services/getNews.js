import axios from 'axios'

const NEWS_API_BASE_URL = 'https://newsapi.org/v2/'
const NEWS_API_KEY = 'bec9277966184a5286aebc97e3b8fc49'

export const getNews = async ({ searchQuery = 'technology' }) => {
  try {
    /* To see available path options
    go to News API docs
    https://newsapi.org/docs/endpoints */
    const path = '/everything'
    const query =`?q=${searchQuery}&apiKey=${NEWS_API_KEY}`
    const endpointURL = `${NEWS_API_BASE_URL}${path}${query}`
  
    const res = await axios.get(endpointURL)

    if (res.status === 200) {
      const additionalObj = {
        category: searchQuery
      }
      const resData = {...res.data, ...additionalObj}

      return resData
    }
  } catch (error) {
    console.error('Error getting Tech News: ', error)
  }
}