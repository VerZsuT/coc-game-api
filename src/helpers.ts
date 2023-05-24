import axios, { AxiosProxyConfig, type AxiosError } from 'axios'
import { RequestErrorReason } from './enums'
import type { ClientError, RequestError } from './types'

let proxy: AxiosProxyConfig | undefined

export const setProxy = (value: AxiosProxyConfig) => proxy = value

export function getFromAPI<T>(token: string, api: string, params: any = {}) {
  const URL = `https://api.clashofclans.com/v1/${api}`
  return new Promise<T>((resolve, reject) => {
    axios.get<T>(URL, {
      proxy,
      responseType: 'json',
      headers: { Authorization: `Bearer ${token}` },
      params
    }).then(responce => resolve(responce.data)).catch((reason: AxiosError) => {
      if (reason.response?.data) {
        const data = reason.response.data as unknown as ClientError
        const status = reason.response.status
        console.error(`Request error (${status})(${data.reason}): ${data.message}. URL: '${URL}'`)
        reject({
          apiError: data,
          status,
          reason: RequestErrorReason.FromAPI
        } satisfies RequestError)
      }
      else {
        console.error(`Other request error. URL: '${URL}'`)
        reject({
          status: Number(reason.code),
          otherError: reason,
          reason: RequestErrorReason.Other
        } satisfies RequestError)
      }
    })
  })
}
