enum RequestStatusCode {
  /** Successful response */
  Success = 200,
  /** Client provided incorrect parameters for the request */
  IncorrectParams = 400,
  /** Access denied, either because of missing/incorrect credentials or used API token does not grant access to the requested resource */
  AccessDenied = 403,
  /** Resource was not found */
  NotFound = 404,
  /** Request was throttled, because amount of requests was above the threshold defined for the used API token */
  Throttling = 429,
  /** Unknown error happened when handling the request */
  Unknown = 500,
  /** Service is temprorarily unavailable because of maintenance */
  ServiceUnavailable = 503
}

export default RequestStatusCode
