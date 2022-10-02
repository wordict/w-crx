import axios from 'axios'

const API_URL = "http://localhost:4000"

export class API {
    constructor (URL) {
        if (URL === undefined || URL === '') {
            URL = API_URL || 'wrong-url'
        }
        if (URL.endsWith('/')) {
            URL = URL.substr(0, URL.length - 1)
        }
        this.URL = URL
        axios.defaults.baseURL = URL
    }

    withPath (path) {
        if (!path.startsWith('/')) {
            path = '/' + path
        }
        return `${this.URL}${path}`
    }
    async signUp (user) {
        return await axios.post(this.withPath('/signup'), user)
            .then(r => r.status)
            .catch(err => console.log(err))
    }
    async signIn (user) {
        return await axios.post(this.withPath('/signin'), user)
            .then(r => r.status)
            .catch(err => console.log(err))
    }
}
export default new API(API_URL)
