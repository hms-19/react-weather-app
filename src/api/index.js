import axios from 'axios'

export const api = axios.create({
    baseURL : "https://api.openweathermap.org/data/2.5"
})

export const appid = '6e695b014a7f2876c85996114e792a34'