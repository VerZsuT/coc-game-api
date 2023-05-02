interface GetListOptions {
  /** Limit the number of items returned in the response */
  limit?: number
  /** Return only items that occur after this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both */
  after?: string
  /** Return only items that occur before this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both */
  before?: string
}

export default GetListOptions
