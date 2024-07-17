export interface HttpResponse<T = any> {
  statusCode: number
  body: T
}

export interface HttpRequest<T = any, R = any, U = any> {
  body?: T
  params?: R
  query?: U
}
