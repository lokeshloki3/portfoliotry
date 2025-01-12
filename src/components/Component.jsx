import React from "react";

export default function Component() {
  return (
    <>
      <header
        className="sticky top-0 z-10"
        style={{
          borderWidth: "0px",
          borderStyle: "solid",
          borderColor: "rgb(229, 231, 235)",
          boxSizing: "border-box",
          position: "sticky",
          top: "0px",
          zIndex: 10,
          color: "rgb(25, 25, 35)",
        }}
      >
        <app-header
          style={{
            borderWidth: "0px",
            borderStyle: "solid",
            borderColor: "rgb(229, 231, 235)",
            boxSizing: "border-box",
          }}
        >
          <header
            className="sticky top-0 z-10"
            style={{
              borderWidth: "0px",
              borderStyle: "solid",
              borderColor: "rgb(229, 231, 235)",
              boxSizing: "border-box",
              position: "sticky",
              top: "0px",
              zIndex: 10,
            }}
          >
            <div
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgb(229, 231, 235)",
                boxSizing: "border-box",
              }}
            >
              <div
                className="flex items-center justify-between rounded-2xl bg-white p-3 shadow dark:bg-dark dark:shadow-dark"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderRadius: "1rem",
                  backgroundColor: "rgb(255 255 255 / 1)",
                  padding: "0.75rem",
                  boxShadow:
                    "var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)",
                }}
              >
                <a
                  className="inline-flex items-center gap-3 text-2xl font-semibold text-dark dark:text-white"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    textDecoration: "inherit",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    fontSize: "1.5rem",
                    lineHeight: "2rem",
                    fontWeight: 600,
                    color: "rgb(25 25 35 / 1)",
                  }}
                >
                  <img
                    className="dark:hidden w-[150px]"
                    alt="CreativeHand Logo"
                    src="https://aashish-bhagwat.creativehand.co.in/assets/work_brands/creativehand_text_logo.png"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "block",
                      verticalAlign: "middle",
                      maxWidth: "100%",
                      height: "auto",
                      width: "150px",
                    }}
                  />
                  <img
                    className="hidden dark:block w-[150px] dark:invert"
                    alt="CreativeHand Logo Dark"
                    src="https://aashish-bhagwat.creativehand.co.in/assets/work_brands/creativehand_text_logo_bw-no-bg.png"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      verticalAlign: "middle",
                      maxWidth: "100%",
                      height: "auto",
                      display: "none",
                      width: "150px",
                    }}
                  />
                </a>
                <nav
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                  }}
                >
                  <ul
                    className="hidden gap-3 flex-1 flex-wrap items-center justify-center lg:flex"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      listStyle: "none",
                      margin: "0px",
                      padding: "0px",
                      flex: "1 1 0%",
                      flexWrap: "wrap",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.75rem",
                      display: "flex",
                    }}
                  >
                    <li
                      className="group/menu-item"
                      tabIndex="0"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    >
                      <div
                        className="group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition hover:bg-gray-200 cursor-pointer hover:text-dark group-[.active]/menu-item:bg-gray-200 group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          display: "inline-flex",
                          cursor: "pointer",
                          alignItems: "center",
                          gap: "0.5rem",
                          borderRadius: "0.5rem",
                          paddingLeft: "0.75rem",
                          paddingRight: "0.75rem",
                          paddingTop: "0.5rem",
                          paddingBottom: "0.5rem",
                          textAlign: "center",
                          fontSize: "1rem",
                          lineHeight: "1.5rem",
                          fontWeight: 500,
                          color: "rgb(87 96 118 / 1)",
                          transitionProperty:
                            "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)",
                          transitionDuration: "0.15s",
                        }}
                      >
                        <svg
                          className="h-6 w-6 text-[#8991A7] transition group-hover:text-dark group-[.active]/menu-item:text-dark dark:group-hover:text-white dark:group-[.active]/menu-item:text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.2"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            display: "block",
                            verticalAlign: "middle",
                            height: "1.5rem",
                            width: "1.5rem",
                            color: "rgb(137 145 167 / 1)",
                            transitionProperty:
                              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.15s",
                          }}
                        >
                          <path
                            d="M15.833 7.258 11.39 3.802a2.222 2.222 0 0 0-2.728 0L4.216 7.258a2.22 2.22 0 0 0-.858 1.754v6a1.667 1.667 0 0 0 1.667 1.667h10a1.667 1.667 0 0 0 1.667-1.666v-6c0-.686-.317-1.334-.859-1.755Z"
                            style={{
                              borderWidth: "0px",
                              borderStyle: "solid",
                              borderColor: "rgb(229, 231, 235)",
                              boxSizing: "border-box",
                            }}
                          />
                          <path
                            d="M13.333 12.5c-1.841 1.11-4.826 1.11-6.667 0"
                            style={{
                              borderWidth: "0px",
                              borderStyle: "solid",
                              borderColor: "rgb(229, 231, 235)",
                              boxSizing: "border-box",
                            }}
                          />
                        </svg>
                        <span
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                          }}
                        >
                          <a
                            href="https://aashish-bhagwat.creativehand.co.in/home"
                            style={{
                              borderWidth: "0px",
                              borderStyle: "solid",
                              borderColor: "rgb(229, 231, 235)",
                              boxSizing: "border-box",
                              textDecoration: "inherit",
                              color: "inherit",
                            }}
                          >
                            Home
                          </a>
                        </span>
                      </div>
                    </li>
                    <li
                      className="group/menu-item"
                      tabIndex="0"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    >
                      <div
                        className="group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition hover:bg-gray-200 cursor-pointer hover:text-dark group-[.active]/menu-item:bg-gray-200 group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          display: "inline-flex",
                          cursor: "pointer",
                          alignItems: "center",
                          gap: "0.5rem",
                          borderRadius: "0.5rem",
                          paddingLeft: "0.75rem",
                          paddingRight: "0.75rem",
                          paddingTop: "0.5rem",
                          paddingBottom: "0.5rem",
                          textAlign: "center",
                          fontSize: "1rem",
                          lineHeight: "1.5rem",
                          fontWeight: 500,
                          color: "rgb(87 96 118 / 1)",
                          transitionProperty:
                            "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)",
                          transitionDuration: "0.15s",
                        }}
                      >
                        <svg
                          className="h-6 w-6 text-[#8991A7] transition group-hover:text-dark group-[.active]/menu-item:text-dark dark:group-hover:text-white dark:group-[.active]/menu-item:text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.2"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            display: "block",
                            verticalAlign: "middle",
                            height: "1.5rem",
                            width: "1.5rem",
                            color: "rgb(137 145 167 / 1)",
                            transitionProperty:
                              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.15s",
                          }}
                        >
                          <path
                            d="M10.5 10.833a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                            style={{
                              borderWidth: "0px",
                              borderStyle: "solid",
                              borderColor: "rgb(229, 231, 235)",
                              boxSizing: "border-box",
                            }}
                          />
                          <path
                            d="M10.5 2.5c6 0 7.5 1.5 7.5 7.5s-1.5 7.5-7.5 7.5S3 16 3 10s1.5-7.5 7.5-7.5Z"
                            style={{
                              borderWidth: "0px",
                              borderStyle: "solid",
                              borderColor: "rgb(229, 231, 235)",
                              boxSizing: "border-box",
                            }}
                          />
                          <path
                            d="M5.5 16.708v-.041a3.333 3.333 0 0 1 3.333-3.334h3.334a3.333 3.333 0 0 1 3.333 3.334v.041"
                            style={{
                              borderWidth: "0px",
                              borderStyle: "solid",
                              borderColor: "rgb(229, 231, 235)",
                              boxSizing: "border-box",
                            }}
                          />
                        </svg>
                        <span
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                          }}
                        >
                          <a
                            href="https://aashish-bhagwat.creativehand.co.in/about"
                            style={{
                              borderWidth: "0px",
                              borderStyle: "solid",
                              borderColor: "rgb(229, 231, 235)",
                              boxSizing: "border-box",
                              textDecoration: "inherit",
                              color: "inherit",
                            }}
                          >
                            About
                          </a>
                        </span>
                      </div>
                    </li>
                    <li
                      className="group/menu-item"
                      tabIndex="0"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    >
                      <div
                        className="group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition hover:bg-gray-200 cursor-pointer hover:text-dark group-[.active]/menu-item:bg-gray-200 group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          display: "inline-flex",
                          cursor: "pointer",
                          alignItems: "center",
                          gap: "0.5rem",
                          borderRadius: "0.5rem",
                          paddingLeft: "0.75rem",
                          paddingRight: "0.75rem",
                          paddingTop: "0.5rem",
                          paddingBottom: "0.5rem",
                          textAlign: "center",
                          fontSize: "1rem",
                          lineHeight: "1.5rem",
                          fontWeight: 500,
                          color: "rgb(87 96 118 / 1)",
                          transitionProperty:
                            "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)",
                          transitionDuration: "0.15s",
                        }}
                      >
                        <svg
                          className="h-6 w-6 text-[#8991A7] transition group-hover:text-dark group-[.active]/menu-item:text-dark dark:group-hover:text-white dark:group-[.active]/menu-item:text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.2"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            display: "block",
                            verticalAlign: "middle",
                            height: "1.5rem",
                            width: "1.5rem",
                            color: "rgb(137 145 167 / 1)",
                            transitionProperty:
                              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.15s",
                          }}
                        >
                          <path
                            d="M10.5 3.333 3.833 6.667 10.5 10l6.667-3.333L10.5 3.333ZM3.833 10l6.667 3.333L17.167 10M3.833 13.333l6.667 3.334 6.667-3.334"
                            style={{
                              borderWidth: "0px",
                              borderStyle: "solid",
                              borderColor: "rgb(229, 231, 235)",
                              boxSizing: "border-box",
                            }}
                          />
                        </svg>
                        <span
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                          }}
                        >
                          <a
                            href="https://aashish-bhagwat.creativehand.co.in/services"
                            style={{
                              borderWidth: "0px",
                              borderStyle: "solid",
                              borderColor: "rgb(229, 231, 235)",
                              boxSizing: "border-box",
                              textDecoration: "inherit",
                              color: "inherit",
                            }}
                          >
                            Services
                          </a>
                        </span>
                      </div>
                    </li>
                    <li
                      className="group/menu-item"
                      tabIndex="0"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    >
                      <div
                        className="group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition hover:bg-gray-200 cursor-pointer hover:text-dark group-[.active]/menu-item:bg-gray-200 group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          display: "inline-flex",
                          cursor: "pointer",
                          alignItems: "center",
                          gap: "0.5rem",
                          borderRadius: "0.5rem",
                          paddingLeft: "0.75rem",
                          paddingRight: "0.75rem",
                          paddingTop: "0.5rem",
                          paddingBottom: "0.5rem",
                          textAlign: "center",
                          fontSize: "1rem",
                          lineHeight: "1.5rem",
                          fontWeight: 500,
                          color: "rgb(87 96 118 / 1)",
                          transitionProperty:
                            "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)",
                          transitionDuration: "0.15s",
                        }}
                      >
                        <svg
                          className="h-6 w-6 text-[#8991A7] transition group-hover:text-dark group-[.active]/menu-item:text-dark dark:group-hover:text-white dark:group-[.active]/menu-item:text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.2"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            display: "block",
                            verticalAlign: "middle",
                            height: "1.5rem",
                            width: "1.5rem",
                            color: "rgb(137 145 167 / 1)",
                            transitionProperty:
                              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.15s",
                          }}
                        >
                          <path
                            d="m3.503 5.998 5.949-2.591a.8.8 0 0 1 1.058.439l4.103 9.918a.834.834 0 0 1-.428 1.087l-5.948 2.59a.8.8 0 0 1-1.059-.438l-4.103-9.92a.833.833 0 0 1 .428-1.085ZM13 3.333h.833a.833.833 0 0 1 .834.834v2.916M17.167 5c.22.093.433.18.64.263a.833.833 0 0 1 .442 1.092l-1.915 4.478"
                            style={{
                              borderWidth: "0px",
                              borderStyle: "solid",
                              borderColor: "rgb(229, 231, 235)",
                              boxSizing: "border-box",
                            }}
                          />
                        </svg>
                        <span
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                          }}
                        >
                          <a
                            href="https://aashish-bhagwat.creativehand.co.in/works"
                            style={{
                              borderWidth: "0px",
                              borderStyle: "solid",
                              borderColor: "rgb(229, 231, 235)",
                              boxSizing: "border-box",
                              textDecoration: "inherit",
                              color: "inherit",
                            }}
                          >
                            Works
                          </a>
                        </span>
                      </div>
                    </li>
                    <li
                      className="group/menu-item active"
                      tabIndex="0"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    >
                      <div
                        className="group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition hover:bg-gray-200 cursor-pointer hover:text-dark group-[.active]/menu-item:bg-gray-200 group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          display: "inline-flex",
                          cursor: "pointer",
                          alignItems: "center",
                          gap: "0.5rem",
                          borderRadius: "0.5rem",
                          paddingLeft: "0.75rem",
                          paddingRight: "0.75rem",
                          paddingTop: "0.5rem",
                          paddingBottom: "0.5rem",
                          textAlign: "center",
                          fontSize: "1rem",
                          lineHeight: "1.5rem",
                          fontWeight: 500,
                          transitionProperty:
                            "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)",
                          transitionDuration: "0.15s",
                          backgroundColor: "rgb(229 231 235 / 1)",
                          color: "rgb(25 25 35 / 1)",
                        }}
                      >
                        <svg
                          className="h-6 w-6 text-[#8991A7] transition group-hover:text-dark group-[.active]/menu-item:text-dark dark:group-hover:text-white dark:group-[.active]/menu-item:text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.2"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            display: "block",
                            verticalAlign: "middle",
                            height: "1.5rem",
                            width: "1.5rem",
                            transitionProperty:
                              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.15s",
                            color: "rgb(25 25 35 / 1)",
                          }}
                        >
                          <path
                            d="m14.667 9.167 1.25-1.25a2.357 2.357 0 1 0-3.333-3.334l-8.75 8.75v3.334h3.333L8.834 15m2.916-9.583 3.333 3.333m.417 9.583 2.792-2.736a1.785 1.785 0 0 0 .004-2.56 1.87 1.87 0 0 0-2.608-.005l-.186.184-.186-.184a1.869 1.869 0 0 0-2.607-.005 1.787 1.787 0 0 0-.005 2.56l2.796 2.746Z"
                            style={{
                              borderWidth: "0px",
                              borderStyle: "solid",
                              borderColor: "rgb(229, 231, 235)",
                              boxSizing: "border-box",
                            }}
                          />
                        </svg>
                        <span
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                          }}
                        >
                          <a
                            href="https://aashish-bhagwat.creativehand.co.in/blogs"
                            style={{
                              borderWidth: "0px",
                              borderStyle: "solid",
                              borderColor: "rgb(229, 231, 235)",
                              boxSizing: "border-box",
                              textDecoration: "inherit",
                              color: "inherit",
                            }}
                          >
                            Blog
                          </a>
                        </span>
                      </div>
                    </li>
                    <li
                      className="group/menu-item"
                      tabIndex="0"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    >
                      <div
                        className="group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition hover:bg-gray-200 cursor-pointer hover:text-dark group-[.active]/menu-item:bg-gray-200 group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          display: "inline-flex",
                          cursor: "pointer",
                          alignItems: "center",
                          gap: "0.5rem",
                          borderRadius: "0.5rem",
                          paddingLeft: "0.75rem",
                          paddingRight: "0.75rem",
                          paddingTop: "0.5rem",
                          paddingBottom: "0.5rem",
                          textAlign: "center",
                          fontSize: "1rem",
                          lineHeight: "1.5rem",
                          fontWeight: 500,
                          color: "rgb(87 96 118 / 1)",
                          transitionProperty:
                            "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)",
                          transitionDuration: "0.15s",
                        }}
                      >
                        <svg
                          className="h-6 w-6 text-[#8991A7] transition group-hover:text-dark group-[.active]/menu-item:text-dark dark:group-hover:text-white dark:group-[.active]/menu-item:text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.2"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            display: "block",
                            verticalAlign: "middle",
                            height: "1.5rem",
                            width: "1.5rem",
                            color: "rgb(137 145 167 / 1)",
                            transitionProperty:
                              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.15s",
                          }}
                        >
                          <path
                            d="M6.667 7.5h6.666m-6.666 3.333h5M15 3.333a2.5 2.5 0 0 1 2.5 2.5V12.5A2.5 2.5 0 0 1 15 15h-4.167l-4.166 2.5V15H5a2.5 2.5 0 0 1-2.5-2.5V5.833a2.5 2.5 0 0 1 2.5-2.5h10Z"
                            style={{
                              borderWidth: "0px",
                              borderStyle: "solid",
                              borderColor: "rgb(229, 231, 235)",
                              boxSizing: "border-box",
                            }}
                          />
                        </svg>
                        <span
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                          }}
                        >
                          <a
                            href="https://aashish-bhagwat.creativehand.co.in/contact"
                            style={{
                              borderWidth: "0px",
                              borderStyle: "solid",
                              borderColor: "rgb(229, 231, 235)",
                              boxSizing: "border-box",
                              textDecoration: "inherit",
                              color: "inherit",
                            }}
                          >
                            Contact
                          </a>
                        </span>
                      </div>
                    </li>
                  </ul>
                </nav>
                <div
                  className="hidden items-center gap-4 lg:flex"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    alignItems: "center",
                    gap: "1rem",
                    display: "flex",
                  }}
                >
                  <div
                    id="appearance-ico"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                    }}
                  >
                    <button
                      className="hs-dark-mode group flex h-10 w-10 items-center justify-center rounded-lg text-center font-medium text-dark transition hover:bg-light dark:text-gray-400 dark:hover:text-gray-500 block"
                      type="button"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px",
                        padding: "0px",
                        fontFamily: "inherit",
                        fontFeatureSettings: "inherit",
                        fontVariationSettings: "inherit",
                        fontSize: "100%",
                        lineHeight: "inherit",
                        textTransform: "none",
                        cursor: "pointer",
                        appearance: "button",
                        backgroundColor: "transparent",
                        backgroundImage: "none",
                        display: "flex",
                        height: "2.5rem",
                        width: "2.5rem",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "0.5rem",
                        textAlign: "center",
                        fontWeight: 500,
                        color: "rgb(25 25 35 / 1)",
                        transitionProperty:
                          "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                        transitionDuration: "0.15s",
                      }}
                    >
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          display: "block",
                          verticalAlign: "middle",
                          height: "1.5rem",
                          width: "1.5rem",
                        }}
                      >
                        <path
                          d="M11.8 3a8.656 8.656 0 0 0-4.523 1.28A8.918 8.918 0 0 0 4.04 7.756a9.167 9.167 0 0 0 .44 9.24 8.863 8.863 0 0 0 3.553 3.137 8.633 8.633 0 0 0 4.624.824 8.69 8.69 0 0 0 4.381-1.723 8.973 8.973 0 0 0 2.892-3.78c.3-.738-.419-1.48-1.142-1.179a5.604 5.604 0 0 1-3.892.15 5.74 5.74 0 0 1-3.083-2.431 5.956 5.956 0 0 1-.848-3.886c.17-1.357.8-2.61 1.78-3.541l.069-.072c.485-.567.099-1.488-.668-1.488h-.234l-.06-.005L11.8 3Z"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                          }}
                        />
                      </svg>
                    </button>
                    <button
                      className="hs-dark-mode group h-10 w-10 items-center justify-center rounded-lg text-center font-medium text-dark transition hover:bg-light dark:text-[#FD7E41] dark:hover:bg-dark dark:hover:text-[#FD7E41] hidden"
                      type="button"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px",
                        padding: "0px",
                        fontFamily: "inherit",
                        fontFeatureSettings: "inherit",
                        fontVariationSettings: "inherit",
                        fontSize: "100%",
                        lineHeight: "inherit",
                        textTransform: "none",
                        cursor: "pointer",
                        appearance: "button",
                        backgroundColor: "transparent",
                        backgroundImage: "none",
                        display: "none",
                        height: "2.5rem",
                        width: "2.5rem",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "0.5rem",
                        textAlign: "center",
                        fontWeight: 500,
                        color: "rgb(25 25 35 / 1)",
                        transitionProperty:
                          "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                        transitionDuration: "0.15s",
                      }}
                    >
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          display: "block",
                          verticalAlign: "middle",
                          height: "1.5rem",
                          width: "1.5rem",
                        }}
                      >
                        <path
                          d="M10 15.833a.833.833 0 0 1 .828.736l.005.098v.833a.833.833 0 0 1-1.66.097l-.006-.097v-.833a.833.833 0 0 1 .833-.834Zm5.26-1.741.08.069.582.583a.833.833 0 0 1-1.1 1.248l-.078-.07-.583-.583a.833.833 0 0 1 1.015-1.306l.085.059Zm-9.42.068a.833.833 0 0 1 .068 1.1l-.069.08-.583.582a.833.833 0 0 1-1.248-1.1l.07-.078.583-.583a.833.833 0 0 1 1.178 0ZM3.333 9.167a.833.833 0 0 1 .098 1.66l-.098.006H2.5a.833.833 0 0 1-.098-1.66l.098-.006h.833Zm14.167 0a.833.833 0 0 1 .098 1.66l-.098.006h-.833a.833.833 0 0 1-.098-1.66l.098-.006h.833ZM5.178 4.008l.078.07.583.583a.833.833 0 0 1-1.1 1.247l-.078-.069-.583-.583A.833.833 0 0 1 5.092 3.95l.086.058Zm10.744.069a.833.833 0 0 1 .07 1.1l-.07.079-.583.583a.833.833 0 0 1-1.247-1.1l.069-.078.583-.584a.833.833 0 0 1 1.178 0ZM10 1.667a.833.833 0 0 1 .828.736l.005.097v.833a.833.833 0 0 1-1.66.098l-.006-.098V2.5A.833.833 0 0 1 10 1.667Zm0 4.166a4.167 4.167 0 1 1-4.163 4.348L5.833 10l.004-.18A4.167 4.167 0 0 1 10 5.832Z"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                          }}
                        />
                      </svg>
                    </button>
                  </div>
                  <a
                    id="resume-btn"
                    className="inline-flex items-center gap-2 rounded-lg bg-dark px-6 py-4 text-center text-base font-semibold leading-tight text-white transition hover:bg-primary dark:bg-dark-2 dark:text-white dark:hover:bg-primary dark:hover:text-white cursor-pointer"
                    href="https://github.com/Aashishb4u/Aashishb4u/raw/78a86e626e4c6d366015fa97df913f57abe714fe/Aashish%20Bhagwat%20Resume%20_%202025.pdf"
                    target="_blank"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      textDecoration: "inherit",
                      display: "inline-flex",
                      cursor: "pointer",
                      alignItems: "center",
                      gap: "0.5rem",
                      borderRadius: "0.5rem",
                      backgroundColor: "rgb(25 25 35 / 1)",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      paddingTop: "1rem",
                      paddingBottom: "1rem",
                      textAlign: "center",
                      fontSize: "1rem",
                      fontWeight: 600,
                      lineHeight: 1.25,
                      color: "rgb(255 255 255 / 1)",
                      transitionProperty:
                        "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                      transitionDuration: "0.15s",
                    }}
                  >
                    <i
                      className="fa fa-download"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        fontVariant: "normal",
                        display: "inline-block",
                        fontStyle: "normal",
                        fontSizeAdjust: "none",
                        fontKerning: "auto",
                        fontOpticalSizing: "auto",
                        fontFeatureSettings: "normal",
                        fontVariationSettings: "normal",
                        fontWeight: "normal",
                        fontStretch: "normal",
                        lineHeight: 1,
                        fontFamily: "FontAwesome",
                        fontSize: "inherit",
                        textRendering: "auto",
                        WebkitFontSmoothing: "antialiased",
                      }}
                    />
                    <span
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    >
                      Resume
                    </span>
                  </a>
                </div>
                <button
                  className="text-dark transition dark:text-white/70 lg:hidden"
                  type="button"
                  aria-controls="mobile-menu"
                  aria-label="Toggle navigation"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    margin: "0px",
                    padding: "0px",
                    fontFamily: "inherit",
                    fontFeatureSettings: "inherit",
                    fontVariationSettings: "inherit",
                    fontSize: "100%",
                    fontWeight: "inherit",
                    lineHeight: "inherit",
                    textTransform: "none",
                    cursor: "pointer",
                    appearance: "button",
                    backgroundColor: "transparent",
                    backgroundImage: "none",
                    color: "rgb(25 25 35 / 1)",
                    transitionProperty:
                      "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDuration: "0.15s",
                    display: "none",
                  }}
                >
                  <span
                    className="sr-only"
                    style={{
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      border: "0px",
                      padding: "0px",
                      margin: "-1px",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      borderWidth: "0px",
                      position: "absolute",
                      width: "1px",
                      height: "1px",
                      clip: "rect(0px, 0px, 0px, 0px)",
                    }}
                  >
                    Toggle Navigation
                  </span>
                  <svg
                    className="h-9 w-9 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "block",
                      verticalAlign: "middle",
                      height: "2.25rem",
                      width: "2.25rem",
                      flexShrink: 0,
                    }}
                  >
                    <path
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                      fillRule="evenodd"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    />
                  </svg>
                </button>
              </div>
            </div>
          </header>
          <div
            id="mobile-menu"
            className="-translate-x-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar]:w-2 bg-white bottom-0 dark:bg-dark duration-300 fixed h-full hidden hs-overlay hs-overlay-open:translate-x-0 overflow-y-auto start-0 top-0 transform transition-all w-64 z-[60]"
            style={{
              borderWidth: "0px",
              borderStyle: "solid",
              borderColor: "rgb(229, 231, 235)",
              boxSizing: "border-box",
              position: "fixed",
              bottom: "0px",
              insetInlineStart: "0px",
              top: "0px",
              zIndex: 60,
              display: "none",
              height: "100%",
              width: "16rem",
              transform:
                "translate(-100%,0) rotate(0) skew(0) skewY(0) scaleX(1) scaleY(1)",
              overflowY: "auto",
              backgroundColor: "rgb(255 255 255 / 1)",
              transitionProperty: "all",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              transitionDuration: "0.3s",
            }}
          >
            <div
              className="flex h-full flex-col justify-between gap-5 p-5"
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgb(229, 231, 235)",
                boxSizing: "border-box",
                display: "flex",
                height: "100%",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "1.25rem",
                padding: "1.25rem",
              }}
            >
              <div
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                }}
              >
                <a
                  className="inline-flex items-center gap-3 px-3 text-2xl font-semibold text-dark dark:text-white"
                  href="https://aashish-bhagwat.creativehand.co.in/index.html"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    textDecoration: "inherit",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    paddingLeft: "0.75rem",
                    paddingRight: "0.75rem",
                    fontSize: "1.5rem",
                    lineHeight: "2rem",
                    fontWeight: 600,
                    color: "rgb(25 25 35 / 1)",
                  }}
                >
                  <img
                    className="dark:hidden w-[150px]"
                    alt="CreativeHand Logo"
                    src="https://aashish-bhagwat.creativehand.co.in/assets/work_brands/creativehand_text_logo.png"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "block",
                      verticalAlign: "middle",
                      maxWidth: "100%",
                      height: "auto",
                      width: "150px",
                    }}
                  />
                  <img
                    className="hidden dark:block w-[150px] dark:invert"
                    alt="CreativeHand Logo Dark"
                    src="https://aashish-bhagwat.creativehand.co.in/assets/work_brands/creativehand_text_logo_bw-no-bg.png"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      verticalAlign: "middle",
                      maxWidth: "100%",
                      height: "auto",
                      display: "none",
                      width: "150px",
                    }}
                  />
                </a>
              </div>
              <ul
                className="mt-4 flex flex-1 flex-col gap-2"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  listStyle: "none",
                  margin: "0px",
                  padding: "0px",
                  marginTop: "1rem",
                  display: "flex",
                  flex: "1 1 0%",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <li
                  className="group/menu-item"
                  tabIndex="0"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                  }}
                >
                  <a
                    className="group inline-flex w-full items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition hover:bg-light hover:text-dark group-[.active]/menu-item:bg-light group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white"
                    href="https://aashish-bhagwat.creativehand.co.in/index.html"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      textDecoration: "inherit",
                      display: "inline-flex",
                      width: "100%",
                      alignItems: "center",
                      gap: "0.5rem",
                      borderRadius: "0.5rem",
                      paddingLeft: "0.75rem",
                      paddingRight: "0.75rem",
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      textAlign: "center",
                      fontSize: "1rem",
                      lineHeight: "1.5rem",
                      fontWeight: 500,
                      color: "rgb(87 96 118 / 1)",
                      transitionProperty:
                        "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                      transitionDuration: "0.15s",
                    }}
                  >
                    <svg
                      className="h-6 w-6 text-[#8991A7] transition group-hover:text-dark group-[.active]/menu-item:text-dark dark:group-hover:text-white dark:group-[.active]/menu-item:text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.2"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "block",
                        verticalAlign: "middle",
                        height: "1.5rem",
                        width: "1.5rem",
                        color: "rgb(137 145 167 / 1)",
                        transitionProperty:
                          "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                        transitionDuration: "0.15s",
                      }}
                    >
                      <path
                        d="M15.833 7.258 11.39 3.802a2.222 2.222 0 0 0-2.728 0L4.216 7.258a2.22 2.22 0 0 0-.858 1.754v6a1.667 1.667 0 0 0 1.667 1.667h10a1.667 1.667 0 0 0 1.667-1.666v-6c0-.686-.317-1.334-.859-1.755Z"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                        }}
                      />
                      <path
                        d="M13.333 12.5c-1.841 1.11-4.826 1.11-6.667 0"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                        }}
                      />
                    </svg>
                    <span
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    >
                      Home
                    </span>
                  </a>
                </li>
                <li
                  className="group/menu-item"
                  tabIndex="0"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                  }}
                >
                  <a
                    className="group inline-flex w-full items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition hover:bg-light hover:text-dark group-[.active]/menu-item:bg-light group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      textDecoration: "inherit",
                      display: "inline-flex",
                      width: "100%",
                      alignItems: "center",
                      gap: "0.5rem",
                      borderRadius: "0.5rem",
                      paddingLeft: "0.75rem",
                      paddingRight: "0.75rem",
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      textAlign: "center",
                      fontSize: "1rem",
                      lineHeight: "1.5rem",
                      fontWeight: 500,
                      color: "rgb(87 96 118 / 1)",
                      transitionProperty:
                        "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                      transitionDuration: "0.15s",
                    }}
                  >
                    <svg
                      className="h-6 w-6 text-[#8991A7] transition group-hover:text-dark group-[.active]/menu-item:text-dark dark:group-hover:text-white dark:group-[.active]/menu-item:text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.2"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "block",
                        verticalAlign: "middle",
                        height: "1.5rem",
                        width: "1.5rem",
                        color: "rgb(137 145 167 / 1)",
                        transitionProperty:
                          "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                        transitionDuration: "0.15s",
                      }}
                    >
                      <path
                        d="M10.5 10.833a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                        }}
                      />
                      <path
                        d="M10.5 2.5c6 0 7.5 1.5 7.5 7.5s-1.5 7.5-7.5 7.5S3 16 3 10s1.5-7.5 7.5-7.5Z"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                        }}
                      />
                      <path
                        d="M5.5 16.708v-.041a3.333 3.333 0 0 1 3.333-3.334h3.334a3.333 3.333 0 0 1 3.333 3.334v.041"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                        }}
                      />
                    </svg>
                    <span
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    >
                      About
                    </span>
                  </a>
                </li>
                <li
                  className="group/menu-item"
                  tabIndex="0"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                  }}
                >
                  <a
                    className="group inline-flex w-full items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition hover:bg-light hover:text-dark group-[.active]/menu-item:bg-light group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      textDecoration: "inherit",
                      display: "inline-flex",
                      width: "100%",
                      alignItems: "center",
                      gap: "0.5rem",
                      borderRadius: "0.5rem",
                      paddingLeft: "0.75rem",
                      paddingRight: "0.75rem",
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      textAlign: "center",
                      fontSize: "1rem",
                      lineHeight: "1.5rem",
                      fontWeight: 500,
                      color: "rgb(87 96 118 / 1)",
                      transitionProperty:
                        "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                      transitionDuration: "0.15s",
                    }}
                  >
                    <svg
                      className="h-6 w-6 text-[#8991A7] transition group-hover:text-dark group-[.active]/menu-item:text-dark dark:group-hover:text-white dark:group-[.active]/menu-item:text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.2"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "block",
                        verticalAlign: "middle",
                        height: "1.5rem",
                        width: "1.5rem",
                        color: "rgb(137 145 167 / 1)",
                        transitionProperty:
                          "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                        transitionDuration: "0.15s",
                      }}
                    >
                      <path
                        d="M10.5 3.333 3.833 6.667 10.5 10l6.667-3.333L10.5 3.333ZM3.833 10l6.667 3.333L17.167 10M3.833 13.333l6.667 3.334 6.667-3.334"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                        }}
                      />
                    </svg>
                    <span
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    >
                      Services
                    </span>
                  </a>
                </li>
                <li
                  className="group/menu-item"
                  tabIndex="0"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                  }}
                >
                  <a
                    className="group inline-flex w-full items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition hover:bg-light hover:text-dark group-[.active]/menu-item:bg-light group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      textDecoration: "inherit",
                      display: "inline-flex",
                      width: "100%",
                      alignItems: "center",
                      gap: "0.5rem",
                      borderRadius: "0.5rem",
                      paddingLeft: "0.75rem",
                      paddingRight: "0.75rem",
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      textAlign: "center",
                      fontSize: "1rem",
                      lineHeight: "1.5rem",
                      fontWeight: 500,
                      color: "rgb(87 96 118 / 1)",
                      transitionProperty:
                        "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                      transitionDuration: "0.15s",
                    }}
                  >
                    <svg
                      className="h-6 w-6 text-[#8991A7] transition group-hover:text-dark group-[.active]/menu-item:text-dark dark:group-hover:text-white dark:group-[.active]/menu-item:text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.2"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "block",
                        verticalAlign: "middle",
                        height: "1.5rem",
                        width: "1.5rem",
                        color: "rgb(137 145 167 / 1)",
                        transitionProperty:
                          "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                        transitionDuration: "0.15s",
                      }}
                    >
                      <path
                        d="m3.503 5.998 5.949-2.591a.8.8 0 0 1 1.058.439l4.103 9.918a.834.834 0 0 1-.428 1.087l-5.948 2.59a.8.8 0 0 1-1.059-.438l-4.103-9.92a.833.833 0 0 1 .428-1.085ZM13 3.333h.833a.833.833 0 0 1 .834.834v2.916M17.167 5c.22.093.433.18.64.263a.833.833 0 0 1 .442 1.092l-1.915 4.478"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                        }}
                      />
                    </svg>
                    <span
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    >
                      Works
                    </span>
                  </a>
                </li>
                <li
                  className="group/menu-item active"
                  tabIndex="0"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                  }}
                >
                  <a
                    className="group inline-flex w-full items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition hover:bg-light hover:text-dark group-[.active]/menu-item:bg-light group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      textDecoration: "inherit",
                      display: "inline-flex",
                      width: "100%",
                      alignItems: "center",
                      gap: "0.5rem",
                      borderRadius: "0.5rem",
                      paddingLeft: "0.75rem",
                      paddingRight: "0.75rem",
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      textAlign: "center",
                      fontSize: "1rem",
                      lineHeight: "1.5rem",
                      fontWeight: 500,
                      transitionProperty:
                        "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                      transitionDuration: "0.15s",
                      backgroundColor: "rgb(240 242 245 / 1)",
                      color: "rgb(25 25 35 / 1)",
                    }}
                  >
                    <svg
                      className="h-6 w-6 text-[#8991A7] transition group-hover:text-dark group-[.active]/menu-item:text-dark dark:group-hover:text-white dark:group-[.active]/menu-item:text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.2"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "block",
                        verticalAlign: "middle",
                        height: "1.5rem",
                        width: "1.5rem",
                        transitionProperty:
                          "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                        transitionDuration: "0.15s",
                        color: "rgb(25 25 35 / 1)",
                      }}
                    >
                      <path
                        d="m14.667 9.167 1.25-1.25a2.357 2.357 0 1 0-3.333-3.334l-8.75 8.75v3.334h3.333L8.834 15m2.916-9.583 3.333 3.333m.417 9.583 2.792-2.736a1.785 1.785 0 0 0 .004-2.56 1.87 1.87 0 0 0-2.608-.005l-.186.184-.186-.184a1.869 1.869 0 0 0-2.607-.005 1.787 1.787 0 0 0-.005 2.56l2.796 2.746Z"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                        }}
                      />
                    </svg>
                    <span
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    >
                      Blog
                    </span>
                  </a>
                </li>
                <li
                  className="group/menu-item"
                  tabIndex="0"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                  }}
                >
                  <a
                    className="group inline-flex w-full items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition hover:bg-light hover:text-dark group-[.active]/menu-item:bg-light group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      textDecoration: "inherit",
                      display: "inline-flex",
                      width: "100%",
                      alignItems: "center",
                      gap: "0.5rem",
                      borderRadius: "0.5rem",
                      paddingLeft: "0.75rem",
                      paddingRight: "0.75rem",
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      textAlign: "center",
                      fontSize: "1rem",
                      lineHeight: "1.5rem",
                      fontWeight: 500,
                      color: "rgb(87 96 118 / 1)",
                      transitionProperty:
                        "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                      transitionDuration: "0.15s",
                    }}
                  >
                    <svg
                      className="h-6 w-6 text-[#8991A7] transition group-hover:text-dark group-[.active]/menu-item:text-dark dark:group-hover:text-white dark:group-[.active]/menu-item:text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.2"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "block",
                        verticalAlign: "middle",
                        height: "1.5rem",
                        width: "1.5rem",
                        color: "rgb(137 145 167 / 1)",
                        transitionProperty:
                          "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                        transitionTimingFunction:
                          "cubic-bezier(0.4, 0, 0.2, 1)",
                        transitionDuration: "0.15s",
                      }}
                    >
                      <path
                        d="M6.667 7.5h6.666m-6.666 3.333h5M15 3.333a2.5 2.5 0 0 1 2.5 2.5V12.5A2.5 2.5 0 0 1 15 15h-4.167l-4.166 2.5V15H5a2.5 2.5 0 0 1-2.5-2.5V5.833a2.5 2.5 0 0 1 2.5-2.5h10Z"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                        }}
                      />
                    </svg>
                    <span
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    >
                      Contact
                    </span>
                  </a>
                </li>
              </ul>
              <div
                className="flex flex-col gap-3"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <button
                  className="hs-dark-mode flex w-full items-center justify-start gap-2 rounded-lg px-4 py-2 text-center text-sm text-muted transition hover:bg-light hs-dark-mode-active:hidden dark:hover:bg-dark dark:hover:text-white"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    margin: "0px",
                    padding: "0px",
                    fontFamily: "inherit",
                    fontFeatureSettings: "inherit",
                    fontVariationSettings: "inherit",
                    fontWeight: "inherit",
                    textTransform: "none",
                    appearance: "button",
                    backgroundColor: "transparent",
                    backgroundImage: "none",
                    cursor: "pointer",
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "0.5rem",
                    borderRadius: "0.5rem",
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                    paddingTop: "0.5rem",
                    paddingBottom: "0.5rem",
                    textAlign: "center",
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem",
                    color: "rgb(87 96 118 / 1)",
                    transitionProperty:
                      "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDuration: "0.15s",
                  }}
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "block",
                      verticalAlign: "middle",
                      height: "1.5rem",
                      width: "1.5rem",
                    }}
                  >
                    <path
                      d="M11.8 3a8.656 8.656 0 0 0-4.523 1.28A8.918 8.918 0 0 0 4.04 7.756a9.167 9.167 0 0 0 .44 9.24 8.863 8.863 0 0 0 3.553 3.137 8.633 8.633 0 0 0 4.624.824 8.69 8.69 0 0 0 4.381-1.723 8.973 8.973 0 0 0 2.892-3.78c.3-.738-.419-1.48-1.142-1.179a5.604 5.604 0 0 1-3.892.15 5.74 5.74 0 0 1-3.083-2.431 5.956 5.956 0 0 1-.848-3.886c.17-1.357.8-2.61 1.78-3.541l.069-.072c.485-.567.099-1.488-.668-1.488h-.234l-.06-.005L11.8 3Z"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    />
                  </svg>
                  <span
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                    }}
                  >
                    Change appearance
                  </span>
                </button>
                <button
                  className="hs-dark-mode hidden w-full items-center justify-start gap-2 rounded-lg px-4 py-2 text-center text-sm text-muted transition hover:bg-light hs-dark-mode-active:flex dark:hover:bg-dark dark:hover:text-white"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    margin: "0px",
                    padding: "0px",
                    fontFamily: "inherit",
                    fontFeatureSettings: "inherit",
                    fontVariationSettings: "inherit",
                    fontWeight: "inherit",
                    textTransform: "none",
                    appearance: "button",
                    backgroundColor: "transparent",
                    backgroundImage: "none",
                    cursor: "pointer",
                    display: "none",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "0.5rem",
                    borderRadius: "0.5rem",
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                    paddingTop: "0.5rem",
                    paddingBottom: "0.5rem",
                    textAlign: "center",
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem",
                    color: "rgb(87 96 118 / 1)",
                    transitionProperty:
                      "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDuration: "0.15s",
                  }}
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "block",
                      verticalAlign: "middle",
                      height: "1.5rem",
                      width: "1.5rem",
                    }}
                  >
                    <path
                      d="M10 15.833a.833.833 0 0 1 .828.736l.005.098v.833a.833.833 0 0 1-1.66.097l-.006-.097v-.833a.833.833 0 0 1 .833-.834Zm5.26-1.741.08.069.582.583a.833.833 0 0 1-1.1 1.248l-.078-.07-.583-.583a.833.833 0 0 1 1.015-1.306l.085.059Zm-9.42.068a.833.833 0 0 1 .068 1.1l-.069.08-.583.582a.833.833 0 0 1-1.248-1.1l.07-.078.583-.583a.833.833 0 0 1 1.178 0ZM3.333 9.167a.833.833 0 0 1 .098 1.66l-.098.006H2.5a.833.833 0 0 1-.098-1.66l.098-.006h.833Zm14.167 0a.833.833 0 0 1 .098 1.66l-.098.006h-.833a.833.833 0 0 1-.098-1.66l.098-.006h.833ZM5.178 4.008l.078.07.583.583a.833.833 0 0 1-1.1 1.247l-.078-.069-.583-.583A.833.833 0 0 1 5.092 3.95l.086.058Zm10.744.069a.833.833 0 0 1 .07 1.1l-.07.079-.583.583a.833.833 0 0 1-1.247-1.1l.069-.078.583-.584a.833.833 0 0 1 1.178 0ZM10 1.667a.833.833 0 0 1 .828.736l.005.097v.833a.833.833 0 0 1-1.66.098l-.006-.098V2.5A.833.833 0 0 1 10 1.667Zm0 4.166a4.167 4.167 0 1 1-4.163 4.348L5.833 10l.004-.18A4.167 4.167 0 0 1 10 5.832Z"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    />
                  </svg>
                  <span
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                    }}
                  >
                    Change appearance
                  </span>
                </button>
                <a
                  className="cursor-pointer inline-flex w-full items-center justify-center gap-2 rounded-lg bg-dark px-6 py-4 text-center text-base font-semibold leading-tight text-white transition hover:bg-primary dark:bg-dark-2 dark:text-white dark:hover:bg-primary dark:hover:text-white"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    textDecoration: "inherit",
                    display: "inline-flex",
                    width: "100%",
                    cursor: "pointer",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    borderRadius: "0.5rem",
                    backgroundColor: "rgb(25 25 35 / 1)",
                    paddingLeft: "1.5rem",
                    paddingRight: "1.5rem",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                    textAlign: "center",
                    fontSize: "1rem",
                    fontWeight: 600,
                    lineHeight: 1.25,
                    color: "rgb(255 255 255 / 1)",
                    transitionProperty:
                      "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDuration: "0.15s",
                  }}
                >
                  <span
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                    }}
                  >
                    Let's Talk
                  </span>
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "block",
                      verticalAlign: "middle",
                      height: "1.25rem",
                      width: "1.25rem",
                    }}
                  >
                    <path
                      d="M17.5 11.667v-5h-5"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    />
                    <path
                      d="m17.5 6.667-7.5 7.5-7.5-7.5"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </app-header>
      </header>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  border-width: 0px;
  border-style: solid;
  border-color: rgb(229, 231, 235);
  box-sizing: border-box;
  line-height: 1.5;
  text-size-adjust: 100%;
  tab-size: 4;
  font-family: Montserrat, BuckeyeSans, HelveticaNeue, Helvetica, Arial, sans-serif;
  font-feature-settings: normal;
  font-variation-settings: normal;
  -webkit-tap-highlight-color: transparent;
  height: 100%;
}

body {
  border-width: 0px;
  border-style: solid;
  border-color: rgb(229, 231, 235);
  box-sizing: border-box;
  line-height: inherit;
  height: 100%;
  margin: 0px;
  font-family: Montserrat, BuckeyeSans, HelveticaNeue, Helvetica, Arial, sans-serif;
}
`,
        }}
      />
    </>
  );
}
