import axios from 'axios'
import Swal from 'sweetalert2'

// const baseURL = 'https://tranquil-crag-64775.herokuapp.com/api/'
const baseURL = 'https://08c7-2402-7500-953-609f-29ec-88da-18f4-2869.ngrok.io/api'

export const apiHelper = axios.create({
    baseURL,
})

export const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
})
