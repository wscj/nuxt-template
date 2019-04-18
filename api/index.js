import axios from './axios'

export function testGet () {
  return axios.get('/test.json', {
    params: {
      demo: 1
    }
  })
}
