export const CONTINUE_100 = {
  status: 100,
  name: "Continue",
  message:
    "This interim response indicates that the client should continue the request or ignore the response if the request is already finished.",
};

export const SWITCHING_PROTOCOLS_101 = {
  status: 101,
  name: "Switching Protocols",
  message:
    "This code is sent in response to an 'Upgrade' request header from the client and indicates the protocol the server is switching to.",
};

export const PROCESSING_102 = {
  status: 102,
  name: "Processing",
  message:
    "This code indicates that the server has received and is processing the request, but no response is available yet.",
};

export const EARLY_HITS_103 = {
  status: 103,
  name: "Early Hits",
  message:
    "This status code is primarily intended to be used with the 'Link' header, letting the user agent start preloading resources while the server prepares a response.",
};

export const OK_200 = {
  status: 200,
  name: "OK",
  message:
    "The request succeeded. The result meaning of 'Success' depends on the HTTP method",
};

export const CREATED_201 = {
  status: 201,
  name: "Created",
  message:
    "The request succeeded, and a new resource was created as a result. This is typically the response sent after 'POST' requests, or some 'PUT' requests",
};

export const ACCEPTED_202 = {
  status: 202,
  name: "Accepted",
  message:
    "The request has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request. It is intended for cases where another process or server handles the request, or for batch processing.",
};

export const NON_AUTHORITATIVE_INFORMATION_203 = {
  status: 203,
  name: "Non-Authoritative Information",
  message:
    "This response code means the returned metadata is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy. This is mostly used for mirrors or backups of another resource. Except for that specific case, the 200 OK response is preferred to this status.",
};

export const NO_CONTENT_204 = {
  status: 204,
  name: "No Content",
  message:
    "There is no content to send for this request, but the headers may be useful. The user agent may update its cached headers for this resource with the new ones.",
};

export const RESET_CONTENT_205 = {
  status: 205,
  name: "Reset Content",
  message:
    "Tells the user agent to reset the document which sent this request.",
};

export const PARTIAL_CONTENT_206 = {
  status: 206,
  name: "Partial Content",
  message:
    "This response code is used when the 'Range' header is sent from the client to request only part of a resource.",
};

export const MULTI_STATUS_207 = {
  status: 207,
  name: "Multi-Status",
  message:
    "Conveys information about multiple resources, for situations where multiple status codes might be appropriate.",
};

export const ALREADY_REPORTED_208 = {
  status: 208,
  name: "Already Reported",
  message:
    "Used inside a '<dav:propstat>' response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection.",
};

export const IM_USED_226 = {
  status: 226,
  name: "IM Used",
  message:
    "The server has fulfilled a 'GET' request for the resource, and the response is a representation of teh result of one or more instance-manipulations applied to the current instance.",
};

export const MULTIPLE_CHOICE_300 = {
  status: 300,
  name: "Multiple Choice",
  message:
    "The request has more than one possible response. The user agent or user should choose one of them. (There is no standardized way of choosing one of the responses, but HTML links to the possibilities are recommended so the user can pick.)",
};

export const MOVED_PERMANENTLY_301 = {
  status: 301,
  name: "Moved Permanently",
  message:
    "The URL of the requested resource has been changed permanently. The new URL is given in the response.",
};

export const FOUND_302 = {
  status: 302,
  name: "Found",
  message:
    "This response code means that the URI of requested resource has been changed temporarily. Further changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.",
};

export const SEE_OTHER_303 = {
  status: 303,
  name: "See Other",
  message:
    "The server sent this response to direct the client to get the requested resource at another URI with a GET request.",
};

export const NOT_MODIFIED_304 = {
  status: 304,
  name: "Not Modified",
  message:
    "This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response.",
};

export const USE_PROXY_305 = {
  status: 305,
  name: "Use Proxy",
  message:
    "Defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy.",
};

export const UNUSED_306 = {
  status: 306,
  name: "Unused",
  message:
    "This response code is no longer used; it is just reserved. It was used in a previous version of the HTTP/1.1 specification.",
};

export const TEMPORARY_REDIRECT_307 = {
  status: 307,
  name: "Temporary Redirect",
  message:
    "The server sends this response to direct the client to get the requested resource at another URI with same method that was used in the prior request. This has the same semantics as the 302 Found HTTP response code, with the exception that the user agent must not change the HTTP method used: if a 'POST' was used in the first request, a 'POST' must be used in the second request.",
};

export const PERMANENT_REDIRECT_308 = {
  status: 308,
  name: "Permanent Redirect",
  message:
    "This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header. This has the same semantics as the 301 Moved Permanently HTTP response code, with the exception that the user agent must not change the HTTP method used: if a 'POST' was used in the first request, a 'POST' must be used in the second request.",
};

export const BAD_REQUEST_400 = {
  status: 400,
  name: "Bad Request",
  message: "The request was invalid or cannot be otherwise served.",
};

export const UNAUTHORIZED_401 = {
  status: 401,
  name: "Unauthorized",
  message: "Authentication is required to access this resource.",
};

export const FORBIDDEN_403 = {
  status: 403,
  name: "Forbidden",
  message: "Access to this resource is forbidden.",
};

export const NOT_FOUND_404 = {
  status: 404,
  name: "Not Found",
  message: "The resource could not be found.",
};

export const METHOD_NOT_ALLOWED_405 = {
  status: 405,
  name: "Method Not Allowed",
  message: "The method is not allowed for the requested URL.",
};

export const NOT_ACCEPTABLE_406 = {
  status: 406,
  name: "Not Acceptable",
  message:
    "The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.",
};

export const PROXY_AUTHENTICATION_REQUIRED_407 = {
  status: 407,
  name: "Proxy Authentication Required",
  message: "Proxy Authentication is required to access this resource.",
};

export const REQUEST_TIMEOUT_408 = {
  status: 408,
  name: "Request Timeout",
  message: "The server timed out waiting for the request.",
};

export const CONFLICT_409 = {
  status: 409,
  name: "Conflict",
  message:
    "The request could not be completed due to a conflict with the current state of the resource.",
};

export const GONE_410 = {
  status: 410,
  name: "Gone",
  message: "The requested resource is no longer available.",
};

export const LENGTH_REQUIRED_411 = {
  status: 411,
  name: "Length Required",
  message:
    "The server refuses to accept the request without a defined Content-Length.",
};

export const PRECONDITION_FAILED_412 = {
  status: 412,
  name: "Precondition Failed",
  message:
    "One or more preconditions given in the request header fields evaluated to false when tested on the server.",
};

export const PAYLOAD_TOO_LARGE_413 = {
  status: 413,
  name: "Payload Too Large",
  message:
    "Request entity is larger than limits defined by server. The server might close the connection or return an 'Retry-After' header field.",
};

export const URI_TOO_LONG_414 = {
  status: 414,
  name: "URI Too Long",
  message:
    "The URI requested by the client is longer than the server is willing to interpret.",
};

export const UNSUPPORTED_MEDIA_TYPE_415 = {
  status: 415,
  name: "Unsupported Media Type",
  message:
    "The media format of the requested data is not supported by the server, so the server is rejecting the request.",
};

export const RANGE_NOT_SATISFIABLE_416 = {
  status: 416,
  name: "Range Not Satisfiable",
  message:
    "The range specified by the 'Range' header field in the request cannot be fulfilled. It's possible that the range is outside the size of the target URI's data.",
};

export const EXPECTATION_FAILED_417 = {
  status: 417,
  name: "Expectation Failed",
  message:
    "This response code means the expectation indicated by the 'Expect' request header field cannot be met by the server.",
};

export const IM_A_TEAPOT_418 = {
  status: 418,
  name: "I'm a teapot",
  message: "The server refuses the attempt to brew coffee with a teapot.",
};

export const MISDIRECTED_REQUEST_421 = {
  status: 421,
  name: "Misdirected Request",
  message:
    "The request was directed at a server that is not able to produce a response. This can be sent by a server that is no configured to produce responses for the combination of scheme and authority that are included in the request URI.",
};

export const UNPROCESSABLE_ENTITY_422 = {
  status: 422,
  name: "Unprocessable Entity",
  message:
    "The request was well-formed but was unable to be followed due to semantic errors.",
};

export const LOCKED_423 = {
  status: 423,
  name: "Locked",
  message: "The resource that is being accessed is locked",
};

export const FAILED_DEPENDENCY_424 = {
  status: 424,
  name: "Failed Dependency",
  message: "The request failed due to failure of a previous request.",
};

export const TOO_EARLY_425 = {
  status: 425,
  name: "Too Early",
  message:
    "Indicates that the server is unwilling to risk processing a request that might be replayed.",
};

export const UPGRADE_REQUIRED_426 = {
  status: 426,
  name: "Upgrade Required",
  message:
    "The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.",
};

export const PRECONDITION_REQUIRED_428 = {
  status: 428,
  name: "Precondition Required",
  message:
    "The origin server requires the request to be conditional. This response is intended to prevent the 'lost update' problem, where the client 'GET's a resource's state.",
};

export const TOO_MANY_REQUESTS_429 = {
  status: 429,
  name: "Too Many Requests",
  message: "THe user has sent too many request in a given amount of time.",
};

export const REQUEST_HEADER_FIELDS_TOO_LARGE_431 = {
  status: 431,
  name: "Request Header Fields Too Large",
  message:
    "The server is unwilling to process the request because its header fields are too large. The request may be resubmitted after reducing the size of the request header fields.",
};

export const UNAVAILABLE_FOR_LEGAL_REASONS_451 = {
  status: 451,
  name: "Unavailable For Legal Reasons",
  message:
    "The user agent requested a resource that cannot legally be provided, such as a web page censored by a government.",
};

export const response = {
  100: CONTINUE_100,
  101: SWITCHING_PROTOCOLS_101,
  // 102: PROCESSING_102,
  // 103: EARLY_HITS_103,
  200: OK_200,
  201: CREATED_201,
  202: ACCEPTED_202,
  203: NON_AUTHORITATIVE_INFORMATION_203,
  204: NO_CONTENT_204,
  205: RESET_CONTENT_205,
  206: PARTIAL_CONTENT_206,
  207: MULTI_STATUS_207,
  208: ALREADY_REPORTED_208,
  226: IM_USED_226,

  300: MULTIPLE_CHOICE_300,
  301: MOVED_PERMANENTLY_301,
  302: FOUND_302,
  303: SEE_OTHER_303,
  304: NOT_MODIFIED_304,
  305: USE_PROXY_305,
  306: UNUSED_306,
  307: TEMPORARY_REDIRECT_307,
  308: PERMANENT_REDIRECT_308,

  400: BAD_REQUEST_400,
  401: UNAUTHORIZED_401,
  402: FORBIDDEN_403,
  404: NOT_FOUND_404,
  405: METHOD_NOT_ALLOWED_405,
  406: NOT_ACCEPTABLE_406,
  407: PROXY_AUTHENTICATION_REQUIRED_407,
  408: REQUEST_TIMEOUT_408,
  409: CONFLICT_409,
  410: GONE_410,
  411: LENGTH_REQUIRED_411,
  412: PRECONDITION_FAILED_412,
  413: PAYLOAD_TOO_LARGE_413,
  414: URI_TOO_LONG_414,
  415: UNSUPPORTED_MEDIA_TYPE_415,
  416: RANGE_NOT_SATISFIABLE_416,
  417: EXPECTATION_FAILED_417,
  418: IM_A_TEAPOT_418,
  421: MISDIRECTED_REQUEST_421,
  422: UNPROCESSABLE_ENTITY_422,
  423: LOCKED_423,
  424: FAILED_DEPENDENCY_424,
  425: TOO_EARLY_425,
  426: UPGRADE_REQUIRED_426,
  428: PRECONDITION_REQUIRED_428,
  429: TOO_MANY_REQUESTS_429,
  431: REQUEST_HEADER_FIELDS_TOO_LARGE_431,
  451: UNAVAILABLE_FOR_LEGAL_REASONS_451,
};
