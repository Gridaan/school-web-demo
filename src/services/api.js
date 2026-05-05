import axios from 'axios'
import { API_CONFIG } from '../config/constants'

// Create axios instance
const axiosInstance = axios.create({
  baseURL: API_CONFIG.baseURL,
  timeout: API_CONFIG.timeout,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add any auth tokens or headers here
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    console.error('API Error:', error)
    return Promise.reject(error)
  }
)

// API methods
export const api = {
  // Admissions enquiry
  submitEnquiry: (data) => axiosInstance.post('/admissions/enquiry', data),

  // Newsletter subscription
  subscribeNewsletter: (email) => axiosInstance.post('/newsletter/subscribe', { email }),

  // Get page data
  getPageData: (pageId) => axiosInstance.get(`/pages/${pageId}`),

  // Contact form
  submitContact: (data) => axiosInstance.post('/contact', data),
}

export default axiosInstance
