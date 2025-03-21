import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

// 创建 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 60000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json',
  },
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 可以在这里添加认证信息，例如 token
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  error => {
    console.error('请求错误:', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data

    // 这里可以根据后端返回的状态码进行统一处理
    if (res.code && res.code !== 200) {
      console.error('接口返回错误:', res.message || '未知错误')

      // 处理特定错误码，例如 401 未授权
      if (res.code === 401) {
        // 可以在这里处理登出逻辑
        console.error('未授权，请重新登录')
      }

      return Promise.reject(new Error(res.message || '未知错误'))
    }

    return res
  },
  (error: AxiosError) => {
    console.error('响应错误:', error)

    // 处理网络错误或服务器错误
    const message = (error.response?.data as any)?.message || error.message || '网络错误'
    console.error(`请求失败: ${message}`)

    return Promise.reject(error)
  }
)

// 封装 GET 请求
export function get<T>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T> {
  return service.get(url, { params, ...config })
}

// 封装 POST 请求
export function post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
  return service.post(url, data, config)
}

// 封装 PUT 请求
export function put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
  return service.put(url, data, config)
}

// 封装 DELETE 请求
export function del<T>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T> {
  return service.delete(url, { params, ...config })
}

// 封装上传文件的请求
export function upload<T>(url: string, file: File, config?: AxiosRequestConfig): Promise<T> {
  const formData = new FormData()
  formData.append('file', file)

  return service.post(url, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    ...config,
  })
}

// 封装流式请求
export function stream(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<ReadableStream<Uint8Array> | null> {
  return service
    .post(url, data, {
      responseType: 'stream',
      ...config,
    })
    .then(response => response.data)
}

export default service
