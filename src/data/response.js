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
  415:UNSUPPORTED_MEDIA_TYPE_415,
  416:RANGE_NOT_SATISFIABLE_416,
  417:EXPECTATION_FAILED_417,
  418:IM_A_TEAPOT_418,
  421:MISDIRECTED_REQUEST_421,
  422:UNPROCESSABLE_ENTITY_422,
  423:LOCKED_423,
  424:FAILED_DEPENDENCY_424,
  425:TOO_EARLY_425,
  426:UPGRADE_REQUIRED_426,
  428:PRECONDITION_REQUIRED_428,
  429:TOO_MANY_REQUESTS_429,
  431:REQUEST_HEADER_FIELDS_TOO_LARGE_431,
  451:UNAVAILABLE_FOR_LEGAL_REASONS_451,
  
};
