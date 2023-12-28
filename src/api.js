import axios from 'axios'

const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params: {
        key: 'AIzaSyDGFkESxHE2a8W0BZg4hi2uzSytdZsc70c',
    },
})

export default request