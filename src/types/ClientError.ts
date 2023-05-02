interface ClientError {
  reason: string
  message?: string
  type?: string
  detail?: any
}

export default ClientError
