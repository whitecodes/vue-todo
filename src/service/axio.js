import axios from 'axios'

export default {
  name: 'axio',

  config: {
    baseURL: 'https://ndhhmgmm.api.lncld.net/1.1',
    headers: {
      'X-LC-Id': 'NDHHMgMMtmmyxNUCKhKWyWdg-gzGzoHsz',
      'X-LC-Key': 'EqOo2FS0CprsP5CmFBNpcCpo',
      'Content-Type': 'application/json'
    }
  },

  sysTime: function () {
    return axios.get('/date', this.config)
  },

  login: function (data) {
    return axios.post('/login', data, this.config)
  },

  signUp: function (data) {
    return axios.post('/users', data, this.config)
  }
}
