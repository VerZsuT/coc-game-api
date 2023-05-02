import type { AxiosError } from 'axios'
import type { RequestErrorReason, RequestStatusCode } from '../enums'
import type ClientError from './ClientError'

interface RequestError {
  status: number | RequestStatusCode
  reason: RequestErrorReason
  apiError?: ClientError
  otherError?: AxiosError
}

export default RequestError
