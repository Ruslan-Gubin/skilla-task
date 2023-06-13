import { AxiosRequestConfig, AxiosResponse } from "axios"
import { publicHttp } from "./publicHttp"


const  axiosPost = <C>(url: string, config?: AxiosRequestConfig<C> | undefined):Promise<AxiosResponse<any, any>> => {
  return publicHttp.post(url, config)
}

export const AxiosService = {
  post: axiosPost,
}
