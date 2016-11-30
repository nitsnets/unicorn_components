import { Interceptor, InterceptedRequest, InterceptedResponse } from 'ng2-interceptors';

export class ApiInterceptor implements Interceptor {
  public interceptBefore(request: InterceptedRequest): InterceptedRequest {
    // Do whatever with request: get info or edit it
    request.options.headers.append('Authorization', 'Bearer ASDFASDFASDF');
    return request;
  }

  public interceptAfter(response: InterceptedResponse): InterceptedResponse {
    // Do whatever with response: get info or edit it
    return response;
  }
}
