
async function getNews<T>(): Promise<T> {
    const options: RequestInit = {
      method: 'GET',
      headers: {
        'x-rapidapi-host' : process.env.REACT_APP_PUBLIC_API_NEWS || '',
        'x-rapidapi-key': process.env.REACT_APP_PUBLIC_API_NEWS_KEYS || '',
      },
    }
    
    const queryParams: URLSearchParams = new URLSearchParams({
      q: 'Musk',
      lang: 'en',
      page: '1',
    })

    const response: Response = await fetch(`https://${process.env.REACT_APP_PUBLIC_API_NEWS}/v1/search?${queryParams}`, options)
      const data : T =  await response.json()
      return data
}

export default getNews