import axios from 'axios'

const apiUrl = process.env.REACT_APP_BASE_URL

const get = async url => {
  const response = await axios.get(`${apiUrl}${url}`)
  return response
}

const post = async (url, payload) => {
  const response = await axios.post(`${apiUrl}${url}`, payload) 
  return response
}

const Api = { get, post }

export default Api
