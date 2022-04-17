import axios from "axios"

export const apiData = axios.create({
    baseURL: "https://meliuz-server-rn.herokuapp.com/"
})

export const apiDataForm = axios.create({
    baseURL: "https://webhook.site/3abd38d8-bf55-4826-b07b-692bdebffcbf"
})

export const api = axios.create({
    baseURL: "https://sistemadeagendamentogama.herokuapp.com/"
})
