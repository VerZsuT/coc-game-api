import axios, { AxiosProxyConfig, type AxiosError } from 'axios'
import { RequestErrorReason } from './enums'
import type { ClientError, RequestError } from './types'

let proxy: AxiosProxyConfig | undefined

export const setProxy = (value: AxiosProxyConfig) => (proxy = value)

export function postToAPI<T>(
  token: string,
  api: string,
  body: any = {},
  params: any = {}
) {
  const URL = `https://api.clashofclans.com/v1/${api}`

  return new Promise<T>((resolve, reject) => {
    axios
      .post<T>(URL, body, {
        proxy,
        responseType: 'json',
        headers: { Authorization: `Bearer ${token}` },
        params,
      })
      .then((responce) => resolve(responce.data))
      .catch((reason: AxiosError) => {
        if (reason.response?.data) {
          const data = reason.response.data as unknown as ClientError
          const status = reason.response.status
          requestError(status, data.reason, URL, data.message, reason.stack)
          reject({
            apiError: data,
            status,
            reason: RequestErrorReason.FromAPI,
          } satisfies RequestError)
        } else {
          unknownRequestError(URL, reason.stack)
          reject({
            status: Number(reason.code),
            otherError: reason,
            reason: RequestErrorReason.Other,
          } satisfies RequestError)
        }
      })
  })
}

export function getFromAPI<T>(token: string, api: string, params: any = {}) {
  const URL = `https://api.clashofclans.com/v1/${api}`
  return new Promise<T>((resolve, reject) => {
    axios
      .get<T>(URL, {
        proxy,
        responseType: 'json',
        headers: { Authorization: `Bearer ${token}` },
        params,
      })
      .then((responce) => resolve(responce.data))
      .catch((reason: AxiosError) => {
        if (reason.response?.data) {
          const data = reason.response.data as unknown as ClientError
          const status = reason.response.status
          requestError(status, data.reason, URL, data.message, reason.stack)
          reject({
            apiError: data,
            status,
            reason: RequestErrorReason.FromAPI,
          } satisfies RequestError)
        } else {
          unknownRequestError(URL, reason.stack)
          reject({
            status: Number(reason.code),
            otherError: reason,
            reason: RequestErrorReason.Other,
          } satisfies RequestError)
        }
      })
  })
}

function requestError(status: number, reason: string, url: string, message?: string, stack?: string) {
  console.error(`Request error (${status})(${reason}): ${message || '[without messsage]'}. URL: '${url}'.${stack ? '\n' + stack : ''}`)
}

function unknownRequestError(url: string, stack?: string) {
  console.error(`Other request error. URL: '${url}'.${stack ? '\n' + stack : ''}`)
}
