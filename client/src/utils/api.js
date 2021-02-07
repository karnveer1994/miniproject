import axios from 'axios'

const apiUrl = 'http://localhost:3000'

const get = async url => {
  const response = await axios.get(`${apiUrl}/`)
  return response
}

const post = async (url, payload) => {
  const response = await axios.post(`${apiUrl}/project`, payload) 
  return response
}

const Api = { get, post }

export default Api
