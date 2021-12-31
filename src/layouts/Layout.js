import { useState } from "react";
import { FaEllipsisH, FaEllipsisV, FaGithubAlt } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/Layout.module.css";

const menuOptions = [
  {
    name: "Informational Status",
    path: "/informational-status",
    options: [
      {
        status: 100,
        name: "Continue",
        path: "/informational-status/continue",
      },
      {
        status: 101,
        name: "Switching Protocols",
        path: "/informational-status/switching-protocols",
      },
      {
        status: 102,
        name: "Processing",
        path: "/informational-status/processing",
      },
      {
        status: 103,
        name: "Early Hints",
        path: "/informational-status/early-hints",
      },
    ],
  },
  {
    name: "Success Status",
    path: "/success-status",
    options: [
      {
        status: 200,
        name: "OK",
        path: "/success-status/ok",
      },
      {
        status: 201,
        name: "Created",
        path: "/success-status/created",
      },
      {
        status: 202,
        name: "Accepted",
        path: "/success-status/accepted",
      },
      {
        status: 203,
        name: "Non-Authoritative Information",
        path: "/success-status/non-authoritative-information",
      },
      {
        status: 204,
        name: "No Content",
        path: "/success-status/no-content",
      },
      {
        status: 205,
        name: "Reset Content",
        path: "/success-status/reset-content",
      },
      {
        status: 206,
        name: "Partial Content",
        path: "/success-status/partial-content",
      },
      {
        status: 207,
        name: "Multi-Status",
        path: "/success-status/multi-status",
      },
      {
        status: 208,
        name: "Already Reported",
        path: "/success-status/already-reported",
      },
      {
        status: 226,
        name: "IM Used",
        path: "/success-status/im-used",
      },
    ],
  },
  {
    name: "Redirection Status",
    path: "/redirection-status",
    options: [
      {
        status: 300,
        name: "Multiple Choices",
        path: "/redirection-status/multiple-choices",
      },
      {
        status: 301,
        name: "Moved Permanently",
        path: "/redirection-status/moved-permanently",
      },
      {
        status: 302,
        name: "Found",
        path: "/redirection-status/found",
      },
      {
        status: 303,
        name: "See Other",
        path: "/redirection-status/see-other",
      },
      {
        status: 304,
        name: "Not Modified",
        path: "/redirection-status/not-modified",
      },
      {
        status: 305,
        name: "Use Proxy",
        path: "/redirection-status/use-proxy",
      },
      {
        status: 306,
        name: "Switch Proxy",
        path: "/redirection-status/switch-proxy",
      },
      {
        status: 307,
        name: "Temporary Redirect",
        path: "/redirection-status/temporary-redirect",
      },
      {
        status: 308,
        name: "Permanent Redirect",
        path: "/redirection-status/permanent-redirect",
      },
    ],
  },
  {
    name: "Client Error Status",
    path: "/client-error-status",
    options: [
      {
        status: 400,
        name: "Bad Request",
        path: "/client-error-status/bad-request",
      },
      {
        status: 401,
        name: "Unauthorized",
        path: "/client-error-status/unauthorized",
      },
      {
        status: 402,
        name: "Payment Required",
        path: "/client-error-status/payment-required",
      },
      {
        status: 403,
        name: "Forbidden",
        path: "/client-error-status/forbidden",
      },
      {
        status: 404,
        name: "Not Found",
        path: "/client-error-status/not-found",
      },
      {
        status: 405,
        name: "Method Not Allowed",
        path: "/client-error-status/method-not-allowed",
      },
      {
        status: 406,
        name: "Not Acceptable",
        path: "/client-error-status/not-acceptable",
      },
      {
        status: 407,
        name: "Proxy Authentication Required",
        path: "/client-error-status/proxy-authentication-required",
      },
      {
        status: 408,
        name: "Request Timeout",
        path: "/client-error-status/request-timeout",
      },
      {
        status: 409,
        name: "Conflict",
        path: "/client-error-status/conflict",
      },
      {
        status: 410,
        name: "Gone",
        path: "/client-error-status/gone",
      },
      {
        status: 411,
        name: "Length Required",
        path: "/client-error-status/length-required",
      },
      {
        status: 412,
        name: "Precondition Failed",
        path: "/client-error-status/precondition-failed",
      },
      {
        status: 413,
        name: "Payload Too Large",
        path: "/client-error-status/payload-too-large",
      },
      {
        status: 414,
        name: "URI Too Long",
        path: "/client-error-status/uri-too-long",
      },
      {
        status: 415,
        name: "Unsupported Media Type",
        path: "/client-error-status/unsupported-media-type",
      },
      {
        status: 416,
        name: "Range Not Satisfiable",
        path: "/client-error-status/range-not-satisfiable",
      },
      {
        status: 417,
        name: "Expectation Failed",
        path: "/client-error-status/expectation-failed",
      },
      {
        status: 418,
        name: "I'm a teapot",
        path: "/client-error-status/im-a-teapot",
      },
      {
        status: 421,
        name: "Misdirected Request",
        path: "/client-error-status/misdirected-request",
      },
      {
        status: 422,
        name: "Unprocessable Entity",

        path: "/client-error-status/unprocessable-entity",
      },
      {
        status: 423,
        name: "Locked",
        path: "/client-error-status/locked",
      },
      {
        status: 424,
        name: "Failed Dependency",
        path: "/client-error-status/failed-dependency",
      },
      {
        status: 426,
        name: "Upgrade Required",
        path: "/client-error-status/upgrade-required",
      },
      {
        status: 428,
        name: "Precondition Required",
        path: "/client-error-status/precondition-required",
      },
      {
        status: 429,
        name: "Too Many Requests",
        path: "/client-error-status/too-many-requests",
      },
      {
        status: 431,
        name: "Request Header Fields Too Large",
        path: "/client-error-status/request-header-fields-too-large",
      },
      {
        status: 451,
        name: "Unavailable For Legal Reasons",
        path: "/client-error-status/unavailable-for-legal-reasons",
      },
    ],
  },
  {
    name: "Server Error Status",
    path: "/server-error-status",
    options: [
      {
        status: 500,
        name: "Internal Server Error",
        path: "/server-error-status/internal-server-error",
      },
      {
        status: 501,
        name: "Not Implemented",
        path: "/server-error-status/not-implemented",
      },
      {
        status: 502,
        name: "Bad Gateway",
        path: "/server-error-status/bad-gateway",
      },
      {
        status: 503,
        name: "Service Unavailable",
        path: "/server-error-status/service-unavailable",
      },
      {
        status: 504,
        name: "Gateway Timeout",
        path: "/server-error-status/gateway-timeout",
      },
      {
        status: 505,
        name: "HTTP Version Not Supported",
        path: "/server-error-status/http-version-not-supported",
      },
      {
        status: 506,
        name: "Variant Also Negotiates",
        path: "/server-error-status/variant-also-negotiates",
      },
      {
        status: 507,
        name: "Insufficient Storage",
        path: "/server-error-status/insufficient-storage",
      },
      {
        status: 508,
        name: "Loop Detected",
        path: "/server-error-status/loop-detected",
      },
      {
        status: 510,
        name: "Not Extended",
        path: "/server-error-status/not-extended",
      },
      {
        status: 511,
        name: "Network Authentication Required",
        path: "/server-error-status/network-authentication-required",
      },
    ],
  },
];

const Sidebar = () => {
  const router = useRouter();

  const isActivePath = (path) => {
    return router.pathname === path;
  };

  return (
    <div className={styles.sidebar}>
      <div>
        <Link href='/'>
          <a>
            <h1>Relay It</h1>
          </a>
        </Link>
        {/* List Options */}
        {menuOptions.map((group) => (
          <div key={group.name}>
            <h2 className={styles.group}>{group.name}</h2>
            <ul key={group.name}>
              {group.options.map((option) => (
                <Link href={option.path} key={option.name} passHref>
                  <li
                    className={
                      isActivePath(option.path)
                        ? styles.optionActive
                        : styles.option
                    }
                    title={option.name}
                  >
                    <strong>{option.status}</strong> {option.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* Links to github */}
      <div className={styles.links}>
        <a>
          <FaGithubAlt className={styles.link} />
        </a>
      </div>
    </div>
  );
};

export default function Layout({ children }) {
  return (
    <div className={styles.gridWrapper}>
      <Sidebar />
      <div className={styles.container}>{children}</div>
    </div>
  );
}
