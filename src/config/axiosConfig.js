import axios from 'axios'

const api = axios.create({
  baseURL: 'https://woxiwa47ag.execute-api.us-east-1.amazonaws.com'
})

export default api
