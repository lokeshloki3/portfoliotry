import React from "react";

export default function Home() {
  return (
    <>
      <main
        className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6 m-6"
        style={{
          borderWidth: "0px",
          borderStyle: "solid",
          borderColor: "rgb(229, 231, 235)",
          boxSizing: "border-box",
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0px, 1fr))",
          gap: "1.5rem",
          color: "rgb(25, 25, 35)",
        }}
      >
        <app-user-card
          style={{
            borderWidth: "0px",
            borderStyle: "solid",
            borderColor: "rgb(229, 231, 235)",
            boxSizing: "border-box",
          }}
        >
          <div
            className="right-0 top-[100px] lg:sticky rounded-2xl bg-white p-6 shadow dark:bg-dark dark:shadow-dark"
            style={{
              borderWidth: "0px",
              borderStyle: "solid",
              borderColor: "rgb(229, 231, 235)",
              boxSizing: "border-box",
              right: "0px",
              top: "100px",
              borderRadius: "1rem",
              backgroundColor: "rgb(255 255 255 / 1)",
              padding: "1.5rem",
              boxShadow:
                "var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)",
              position: "sticky",
            }}
          >
            <div
              className="aspect-6/4 overflow-hidden rounded-lg bg-light text-center dark:bg-dark-2"
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgb(229, 231, 235)",
                boxSizing: "border-box",
                overflow: "hidden",
                borderRadius: "0.5rem",
                backgroundColor: "rgb(240 242 245 / 1)",
                textAlign: "center",
                aspectRatio: "6 / 4",
              }}
            >
              <img
                className="dark:hidden inline-block h-full w-full scale-110 object-contain object-bottom"
                alt="profile_image"
                src="https://aashish-bhagwat.creativehand.co.in/assets/profile_landscape_ch.png"
                title="image"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  verticalAlign: "middle",
                  maxWidth: "100%",
                  display: "inline-block",
                  height: "100%",
                  width: "100%",
                  transform:
                    "translate(0,0) rotate(0) skew(0) skewY(0) scaleX(1.1) scaleY(1.1)",
                  objectFit: "contain",
                  objectPosition: "center bottom",
                }}
              />
              <img
                className="hidden dark:inline-block h-full w-full scale-110 object-contain object-bottom"
                alt="profile_image"
                src="https://aashish-bhagwat.creativehand.co.in/assets/profile_landscape_ch_blck.png"
                title="image"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  verticalAlign: "middle",
                  maxWidth: "100%",
                  display: "none",
                  height: "100%",
                  width: "100%",
                  transform:
                    "translate(0,0) rotate(0) skew(0) skewY(0) scaleX(1.1) scaleY(1.1)",
                  objectFit: "contain",
                  objectPosition: "center bottom",
                }}
              />
            </div>
            <div
              className="mt-6"
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgb(229, 231, 235)",
                boxSizing: "border-box",
                marginTop: "1.5rem",
              }}
            >
              <h1
                className="text-2xl font-semibold dark:text-light"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  margin: "0px",
                  fontSize: "1.5rem",
                  lineHeight: "2rem",
                  fontWeight: 600,
                }}
              >
                Aashish Bhagwat 👋
              </h1>
              <p
                className="mt-2 text-muted dark:text-light/70"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  margin: "0px",
                  marginTop: "0.5rem",
                  color: "rgb(87 96 118 / 1)",
                }}
              >
                {" "}
                A Passionate{" "}
                <span
                  className="font-semibold text-dark dark:text-white"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    fontWeight: 600,
                    color: "rgb(25 25 35 / 1)",
                  }}
                >
                  {" "}
                  Full Stack Developer{" "}
                </span>{" "}
                🖥️ &{" "}
                <span
                  className="font-semibold text-dark dark:text-white"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    fontWeight: 600,
                    color: "rgb(25 25 35 / 1)",
                  }}
                >
                  {" "}
                  Product Designer{" "}
                </span>{" "}
                having{" "}
                <span
                  className="font-semibold text-dark dark:text-white"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    fontWeight: 600,
                    color: "rgb(25 25 35 / 1)",
                  }}
                >
                  {" "}
                  7 years{" "}
                </span>{" "}
                of Experiences in 20+ Technologies so far.{" "}
              </p>
              <div
                className="mt-6 flex gap-2"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  marginTop: "1.5rem",
                  display: "flex",
                  gap: "0.5rem",
                }}
              >
                <a
                  id="call-btn"
                  className="shadow cursor-pointer inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-primary px-6 py-4 font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50"
                  style={{
                    borderStyle: "solid",
                    boxSizing: "border-box",
                    textDecoration: "inherit",
                    display: "inline-flex",
                    cursor: "pointer",
                    alignItems: "center",
                    columnGap: "0.5rem",
                    borderRadius: "0.5rem",
                    borderWidth: "1px",
                    borderColor: "transparent",
                    backgroundColor: "rgb(135 126 255 / 1)",
                    paddingLeft: "1.5rem",
                    paddingRight: "1.5rem",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                    fontWeight: 500,
                    color: "rgb(255 255 255 / 1)",
                    boxShadow:
                      "var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)",
                    transitionProperty:
                      "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDuration: "0.15s",
                  }}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
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
                      d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Zm10 3a2 2 0 0 1 2 2m-2-6a6 6 0 0 1 6 6"
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
                    Call
                  </span>
                </a>
                <a
                  id="wa-btn"
                  className="shadow cursor-pointer hover:bg-light inline-flex items-center gap-x-2 rounded-lg border border-light px-6 py-4 font-medium transition border-1 focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-gray-1 dark:text-light/70 dark:hover:bg-dark dark:hover:text-white"
                  href="https://api.whatsapp.com/send?phone=+919403733265&text=Hello,%20I%20want%20to%20send%20you%20a%20message."
                  target="_blank"
                  style={{
                    borderStyle: "solid",
                    boxSizing: "border-box",
                    textDecoration: "inherit",
                    color: "inherit",
                    display: "inline-flex",
                    cursor: "pointer",
                    alignItems: "center",
                    columnGap: "0.5rem",
                    borderRadius: "0.5rem",
                    borderWidth: "1px",
                    borderColor: "rgb(240 242 245 / 1)",
                    paddingLeft: "1.5rem",
                    paddingRight: "1.5rem",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                    fontWeight: 500,
                    boxShadow:
                      "var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)",
                    transitionProperty:
                      "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDuration: "0.15s",
                  }}
                >
                  <i
                    className="fa fa-whatsapp"
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
                      textRendering: "auto",
                      WebkitFontSmoothing: "antialiased",
                      fontSize: "24px",
                    }}
                  />
                </a>
                <button
                  className="shadow js-clipboard hs-tooltip inline-flex items-center gap-x-2 rounded-lg border border-light bg-transparent px-6 py-4 font-medium text-dark transition [--trigger:focus] hover:bg-light focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-gray-1 dark:text-light/70 dark:hover:bg-dark dark:hover:text-white"
                  type="button"
                  style={{
                    borderStyle: "solid",
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
                    backgroundImage: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    columnGap: "0.5rem",
                    borderRadius: "0.5rem",
                    borderWidth: "1px",
                    borderColor: "rgb(240 242 245 / 1)",
                    backgroundColor: "transparent",
                    paddingLeft: "1.5rem",
                    paddingRight: "1.5rem",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                    fontWeight: 500,
                    color: "rgb(25 25 35 / 1)",
                    boxShadow:
                      "var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)",
                    transitionProperty:
                      "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDuration: "0.15s",
                  }}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
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
                      d="M8 10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8Z"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    />
                    <path
                      d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"
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
                    Email
                  </span>
                </button>
              </div>
              <div
                className="mt-8 flex flex-wrap items-center gap-2"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  marginTop: "2rem",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <a
                  className="shadow flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary"
                  href="https://www.facebook.com/aashish.bhagwat.5/"
                  target="_blank"
                  title="facebook"
                  style={{
                    borderStyle: "solid",
                    boxSizing: "border-box",
                    textDecoration: "inherit",
                    display: "flex",
                    height: "2.5rem",
                    width: "2.5rem",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "0.5rem",
                    borderWidth: "1px",
                    borderColor: "rgb(226 232 240 / 1)",
                    backgroundColor: "transparent",
                    textAlign: "center",
                    color: "rgb(71 85 105 / 1)",
                    boxShadow:
                      "var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)",
                    transitionProperty:
                      "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDuration: "0.15s",
                  }}
                >
                  <i
                    className="text-xl fa fa-facebook-square"
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
                      fontFamily: "FontAwesome",
                      textRendering: "auto",
                      WebkitFontSmoothing: "antialiased",
                      fontSize: "1.25rem",
                      lineHeight: "1.75rem",
                    }}
                  />
                </a>
                <a
                  className="shadow flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary"
                  href="https://www.instagram.com/aashu.bhagwat/"
                  target="_blank"
                  title="instagram"
                  style={{
                    borderStyle: "solid",
                    boxSizing: "border-box",
                    textDecoration: "inherit",
                    display: "flex",
                    height: "2.5rem",
                    width: "2.5rem",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "0.5rem",
                    borderWidth: "1px",
                    borderColor: "rgb(226 232 240 / 1)",
                    backgroundColor: "transparent",
                    textAlign: "center",
                    color: "rgb(71 85 105 / 1)",
                    boxShadow:
                      "var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)",
                    transitionProperty:
                      "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDuration: "0.15s",
                  }}
                >
                  <i
                    className="text-xl fa fa-instagram"
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
                      fontFamily: "FontAwesome",
                      textRendering: "auto",
                      WebkitFontSmoothing: "antialiased",
                      fontSize: "1.25rem",
                      lineHeight: "1.75rem",
                    }}
                  />
                </a>
                <a
                  className="shadow flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary"
                  href="https://github.com/Aashishb4u"
                  target="_blank"
                  title="github"
                  style={{
                    borderStyle: "solid",
                    boxSizing: "border-box",
                    textDecoration: "inherit",
                    display: "flex",
                    height: "2.5rem",
                    width: "2.5rem",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "0.5rem",
                    borderWidth: "1px",
                    borderColor: "rgb(226 232 240 / 1)",
                    backgroundColor: "transparent",
                    textAlign: "center",
                    color: "rgb(71 85 105 / 1)",
                    boxShadow:
                      "var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)",
                    transitionProperty:
                      "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDuration: "0.15s",
                  }}
                >
                  <i
                    className="text-xl fa fa-github"
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
                      fontFamily: "FontAwesome",
                      textRendering: "auto",
                      WebkitFontSmoothing: "antialiased",
                      fontSize: "1.25rem",
                      lineHeight: "1.75rem",
                    }}
                  />
                </a>
                <a
                  className="shadow flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary"
                  href="https://www.linkedin.com/in/aashish-bhagwat/"
                  target="_blank"
                  title="linkedIn"
                  style={{
                    borderStyle: "solid",
                    boxSizing: "border-box",
                    textDecoration: "inherit",
                    display: "flex",
                    height: "2.5rem",
                    width: "2.5rem",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "0.5rem",
                    borderWidth: "1px",
                    borderColor: "rgb(226 232 240 / 1)",
                    backgroundColor: "transparent",
                    textAlign: "center",
                    color: "rgb(71 85 105 / 1)",
                    boxShadow:
                      "var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)",
                    transitionProperty:
                      "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDuration: "0.15s",
                  }}
                >
                  <i
                    className="text-xl fa fa-linkedin"
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
                      fontFamily: "FontAwesome",
                      textRendering: "auto",
                      WebkitFontSmoothing: "antialiased",
                      fontSize: "1.25rem",
                      lineHeight: "1.75rem",
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </app-user-card>
        <div
          className="grid grid-cols-1 gap-4 lg:gap-6"
          style={{
            borderWidth: "0px",
            borderStyle: "solid",
            borderColor: "rgb(229, 231, 235)",
            boxSizing: "border-box",
            display: "grid",
            gridTemplateColumns: "repeat(1, minmax(0px, 1fr))",
            gap: "1.5rem",
          }}
        >
          <div
            className="group rounded-2xl bg-white px-6 pt-0 shadow dark:bg-dark dark:shadow-dark"
            style={{
              borderWidth: "0px",
              borderStyle: "solid",
              borderColor: "rgb(229, 231, 235)",
              boxSizing: "border-box",
              borderRadius: "1rem",
              backgroundColor: "rgb(255 255 255 / 1)",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
              paddingTop: "0px",
              boxShadow:
                "var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)",
            }}
          >
            <h2
              className="relative bg-white pb-2 pt-6 text-2xl font-semibold dark:bg-dark dark:text-light"
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgb(229, 231, 235)",
                boxSizing: "border-box",
                margin: "0px",
                position: "relative",
                backgroundColor: "rgb(255 255 255 / 1)",
                paddingBottom: "0.5rem",
                paddingTop: "1.5rem",
                fontSize: "1.5rem",
                lineHeight: "2rem",
                fontWeight: 600,
              }}
            >
              {" "}
              Work Experience{" "}
            </h2>
            <div
              className="max-h-[250px] space-y-4 overflow-hidden pb-6 pt-4 [&::-webkit-scrollbar-thumb]:bg-gray-400 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-0"
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgb(229, 231, 235)",
                boxSizing: "border-box",
                maxHeight: "250px",
                overflow: "hidden",
                paddingBottom: "1.5rem",
                paddingTop: "1rem",
              }}
            >
              <div
                className="animate-scrollY space-y-4 group-hover:[animation-play-state:paused]"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                }}
              >
                <div
                  className="flex justify-between gap-4"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "1rem",
                  }}
                >
                  <p
                    className="flex items-center mt-1 w-1/4 text-sm font-medium text-muted dark:text-light/70"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      margin: "0px",
                      marginTop: "0.25rem",
                      display: "flex",
                      width: "25%",
                      alignItems: "center",
                      fontSize: "0.875rem",
                      lineHeight: "1.25rem",
                      fontWeight: 500,
                      color: "rgb(87 96 118 / 1)",
                    }}
                  >
                    {" "}
                    2022 - 2025{" "}
                  </p>
                  <div
                    className="w-3/4 flex items-center gap-3"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "flex",
                      width: "75%",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <div
                      className="grid h-12 w-12 shrink-0 place-content-center rounded-lg bg-white"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "grid",
                        height: "3rem",
                        width: "3rem",
                        flexShrink: 0,
                        placeContent: "center",
                        borderRadius: "0.5rem",
                        backgroundColor: "rgb(255 255 255 / 1)",
                      }}
                    >
                      <img
                        className="w-10 mix-blend-multiply rounded object-cover"
                        alt="logo_image"
                        src="https://aashish-bhagwat.creativehand.co.in/assets/work_brands/creativehand-logo.png"
                        title="image"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          display: "block",
                          verticalAlign: "middle",
                          maxWidth: "100%",
                          height: "auto",
                          width: "2.5rem",
                          borderRadius: "0.25rem",
                          objectFit: "cover",
                          mixBlendMode: "multiply",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    >
                      <h6
                        className="text-base font-semibold text-dark dark:text-light/70"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          fontSize: "1rem",
                          lineHeight: "1.5rem",
                          fontWeight: 600,
                          color: "rgb(25 25 35 / 1)",
                        }}
                      >
                        {" "}
                        CreativeHand{" "}
                      </h6>
                      <p
                        className="text-sm text-muted"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          fontSize: "0.875rem",
                          lineHeight: "1.25rem",
                          color: "rgb(87 96 118 / 1)",
                        }}
                      >
                        {" "}
                        CTO | Co-Founder{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="flex justify-between gap-4"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "1rem",
                    marginTop: "calc(1rem * calc(1 - 0))",
                    marginBottom: "calc(1rem * 0)",
                  }}
                >
                  <p
                    className="flex items-center mt-1 w-1/4 text-sm font-medium text-muted dark:text-light/70"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      margin: "0px",
                      marginTop: "0.25rem",
                      display: "flex",
                      width: "25%",
                      alignItems: "center",
                      fontSize: "0.875rem",
                      lineHeight: "1.25rem",
                      fontWeight: 500,
                      color: "rgb(87 96 118 / 1)",
                    }}
                  >
                    {" "}
                    2022 - 2023{" "}
                  </p>
                  <div
                    className="w-3/4 flex items-center gap-3"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "flex",
                      width: "75%",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <div
                      className="grid h-12 w-12 shrink-0 place-content-center rounded-lg bg-white"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "grid",
                        height: "3rem",
                        width: "3rem",
                        flexShrink: 0,
                        placeContent: "center",
                        borderRadius: "0.5rem",
                        backgroundColor: "rgb(255 255 255 / 1)",
                      }}
                    >
                      <img
                        className="w-10 mix-blend-multiply rounded object-cover"
                        alt="logo_image"
                        src="https://www.wipro.com/content/dam/nexus/staticsites/homepage/header/Wipro_Primary Logo_Color_RGB.svg"
                        title="image"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          display: "block",
                          verticalAlign: "middle",
                          maxWidth: "100%",
                          height: "auto",
                          width: "2.5rem",
                          borderRadius: "0.25rem",
                          objectFit: "cover",
                          mixBlendMode: "multiply",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    >
                      <h6
                        className="text-base font-semibold text-dark dark:text-light/70"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          fontSize: "1rem",
                          lineHeight: "1.5rem",
                          fontWeight: 600,
                          color: "rgb(25 25 35 / 1)",
                        }}
                      >
                        {" "}
                        Wipro{" "}
                      </h6>
                      <p
                        className="text-sm text-muted"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          fontSize: "0.875rem",
                          lineHeight: "1.25rem",
                          color: "rgb(87 96 118 / 1)",
                        }}
                      >
                        {" "}
                        Full Stack Developer{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="flex justify-between gap-4"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "1rem",
                    marginTop: "calc(1rem * calc(1 - 0))",
                    marginBottom: "calc(1rem * 0)",
                  }}
                >
                  <p
                    className="flex items-center w-1/4 mt-1 text-sm font-medium text-muted dark:text-light/70"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      margin: "0px",
                      marginTop: "0.25rem",
                      display: "flex",
                      width: "25%",
                      alignItems: "center",
                      fontSize: "0.875rem",
                      lineHeight: "1.25rem",
                      fontWeight: 500,
                      color: "rgb(87 96 118 / 1)",
                    }}
                  >
                    {" "}
                    2017 - 2022{" "}
                  </p>
                  <div
                    className="w-3/4 flex items-center gap-3"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "flex",
                      width: "75%",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <div
                      className="grid h-12 w-12 shrink-0 place-content-center rounded-lg bg-white"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "grid",
                        height: "3rem",
                        width: "3rem",
                        flexShrink: 0,
                        placeContent: "center",
                        borderRadius: "0.5rem",
                        backgroundColor: "rgb(255 255 255 / 1)",
                      }}
                    >
                      <img
                        className="mix-blend-multiply w-10 rounded object-cover"
                        alt="brand"
                        src="https://aashish-bhagwat.creativehand.co.in/assets/work_brands/tudip.png"
                        title="image"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          display: "block",
                          verticalAlign: "middle",
                          maxWidth: "100%",
                          height: "auto",
                          width: "2.5rem",
                          borderRadius: "0.25rem",
                          objectFit: "cover",
                          mixBlendMode: "multiply",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    >
                      <h6
                        className="text-base font-semibold text-dark dark:text-light/70"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          fontSize: "1rem",
                          lineHeight: "1.5rem",
                          fontWeight: 600,
                          color: "rgb(25 25 35 / 1)",
                        }}
                      >
                        {" "}
                        Tudip Technologies{" "}
                      </h6>
                      <p
                        className="text-sm text-muted"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          fontSize: "0.875rem",
                          lineHeight: "1.25rem",
                          color: "rgb(87 96 118 / 1)",
                        }}
                      >
                        Full Stack Developer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="rounded-2xl bg-white p-6 shadow dark:bg-dark dark:shadow-dark"
            style={{
              borderWidth: "0px",
              borderStyle: "solid",
              borderColor: "rgb(229, 231, 235)",
              boxSizing: "border-box",
              borderRadius: "1rem",
              backgroundColor: "rgb(255 255 255 / 1)",
              padding: "1.5rem",
              boxShadow:
                "var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)",
            }}
          >
            <h2
              className="text-2xl font-semibold dark:text-light"
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgb(229, 231, 235)",
                boxSizing: "border-box",
                margin: "0px",
                fontSize: "1.5rem",
                lineHeight: "2rem",
                fontWeight: 600,
              }}
            >
              My Expert Area
            </h2>
            <div
              className="mt-6 grid grid-cols-4 gap-4 md:grid-cols-3"
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgb(229, 231, 235)",
                boxSizing: "border-box",
                marginTop: "1.5rem",
                display: "grid",
                gap: "1rem",
                gridTemplateColumns: "repeat(3, minmax(0px, 1fr))",
              }}
            >
              <div
                className="text-center"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  textAlign: "center",
                }}
              >
                <div
                  className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    display: "grid",
                    placeContent: "center",
                    borderRadius: "0.5rem",
                    backgroundColor: "rgb(240 242 245 / 1)",
                    padding: "0.75rem",
                  }}
                >
                  <img
                    className="h-8 object-cover"
                    alt="Angular"
                    src="https://cdn.simpleicons.org/angular/dd1100"
                    title="Angular"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "block",
                      verticalAlign: "middle",
                      maxWidth: "100%",
                      height: "2rem",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p
                  className="mt-1 text-xs md:text-sm font-medium text-dark dark:text-light/70"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    margin: "0px",
                    marginTop: "0.25rem",
                    fontWeight: 500,
                    color: "rgb(25 25 35 / 1)",
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem",
                  }}
                >
                  {" "}
                  Angular{" "}
                </p>
              </div>
              <div
                className="text-center"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  textAlign: "center",
                }}
              >
                <div
                  className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    display: "grid",
                    placeContent: "center",
                    borderRadius: "0.5rem",
                    backgroundColor: "rgb(240 242 245 / 1)",
                    padding: "0.75rem",
                  }}
                >
                  <img
                    className="h-8 object-cover"
                    alt="React Js"
                    src="https://cdn.simpleicons.org/react/61DAFB"
                    title="React Js"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "block",
                      verticalAlign: "middle",
                      maxWidth: "100%",
                      height: "2rem",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p
                  className="mt-1 text-xs md:text-sm font-medium text-dark dark:text-light/70"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    margin: "0px",
                    marginTop: "0.25rem",
                    fontWeight: 500,
                    color: "rgb(25 25 35 / 1)",
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem",
                  }}
                >
                  {" "}
                  React Js{" "}
                </p>
              </div>
              <div
                className="text-center"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  textAlign: "center",
                }}
              >
                <div
                  className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    display: "grid",
                    placeContent: "center",
                    borderRadius: "0.5rem",
                    backgroundColor: "rgb(240 242 245 / 1)",
                    padding: "0.75rem",
                  }}
                >
                  <img
                    className="h-8 object-cover"
                    alt="Node Js"
                    src="https://cdn.simpleicons.org/node.js/5FA04E"
                    title="Node Js"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "block",
                      verticalAlign: "middle",
                      maxWidth: "100%",
                      height: "2rem",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p
                  className="mt-1 text-xs md:text-sm font-medium text-dark dark:text-light/70"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    margin: "0px",
                    marginTop: "0.25rem",
                    fontWeight: 500,
                    color: "rgb(25 25 35 / 1)",
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem",
                  }}
                >
                  {" "}
                  Node Js{" "}
                </p>
              </div>
              <div
                className="text-center"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  textAlign: "center",
                }}
              >
                <div
                  className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    display: "grid",
                    placeContent: "center",
                    borderRadius: "0.5rem",
                    backgroundColor: "rgb(240 242 245 / 1)",
                    padding: "0.75rem",
                  }}
                >
                  <img
                    className="h-8 object-cover"
                    alt="Javascript"
                    src="https://cdn.simpleicons.org/javascript/FEC119"
                    title="Javascript"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "block",
                      verticalAlign: "middle",
                      maxWidth: "100%",
                      height: "2rem",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p
                  className="mt-1 text-xs md:text-sm font-medium text-dark dark:text-light/70"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    margin: "0px",
                    marginTop: "0.25rem",
                    fontWeight: 500,
                    color: "rgb(25 25 35 / 1)",
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem",
                  }}
                >
                  {" "}
                  Javascript{" "}
                </p>
              </div>
              <div
                className="text-center"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  textAlign: "center",
                }}
              >
                <div
                  className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    display: "grid",
                    placeContent: "center",
                    borderRadius: "0.5rem",
                    backgroundColor: "rgb(240 242 245 / 1)",
                    padding: "0.75rem",
                  }}
                >
                  <img
                    className="h-8 object-cover"
                    alt="Laravel"
                    src="https://cdn.simpleicons.org/laravel/FF2D20"
                    title="Laravel"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "block",
                      verticalAlign: "middle",
                      maxWidth: "100%",
                      height: "2rem",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p
                  className="mt-1 text-xs md:text-sm font-medium text-dark dark:text-light/70"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    margin: "0px",
                    marginTop: "0.25rem",
                    fontWeight: 500,
                    color: "rgb(25 25 35 / 1)",
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem",
                  }}
                >
                  {" "}
                  Laravel{" "}
                </p>
              </div>
              <div
                className="text-center"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  textAlign: "center",
                }}
              >
                <div
                  className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    display: "grid",
                    placeContent: "center",
                    borderRadius: "0.5rem",
                    backgroundColor: "rgb(240 242 245 / 1)",
                    padding: "0.75rem",
                  }}
                >
                  <img
                    className="h-8 object-cover"
                    alt="Ionic"
                    src="https://cdn.simpleicons.org/ionic/3880FF"
                    title="Ionic"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "block",
                      verticalAlign: "middle",
                      maxWidth: "100%",
                      height: "2rem",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p
                  className="mt-1 text-xs md:text-sm font-medium text-dark dark:text-light/70"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    margin: "0px",
                    marginTop: "0.25rem",
                    fontWeight: 500,
                    color: "rgb(25 25 35 / 1)",
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem",
                  }}
                >
                  {" "}
                  Ionic{" "}
                </p>
              </div>
              <div
                className="text-center"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  textAlign: "center",
                }}
              >
                <div
                  className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    display: "grid",
                    placeContent: "center",
                    borderRadius: "0.5rem",
                    backgroundColor: "rgb(240 242 245 / 1)",
                    padding: "0.75rem",
                  }}
                >
                  <img
                    className="h-8 object-cover"
                    alt="Github"
                    src="https://cdn.simpleicons.org/github/000000"
                    title="Github"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "block",
                      verticalAlign: "middle",
                      maxWidth: "100%",
                      height: "2rem",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p
                  className="mt-1 text-xs md:text-sm font-medium text-dark dark:text-light/70"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    margin: "0px",
                    marginTop: "0.25rem",
                    fontWeight: 500,
                    color: "rgb(25 25 35 / 1)",
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem",
                  }}
                >
                  {" "}
                  Github{" "}
                </p>
              </div>
              <div
                className="text-center"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  textAlign: "center",
                }}
              >
                <div
                  className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    display: "grid",
                    placeContent: "center",
                    borderRadius: "0.5rem",
                    backgroundColor: "rgb(240 242 245 / 1)",
                    padding: "0.75rem",
                  }}
                >
                  <img
                    className="h-8 object-cover"
                    alt="HTML"
                    src="https://cdn.simpleicons.org/html5/E34F26"
                    title="HTML"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "block",
                      verticalAlign: "middle",
                      maxWidth: "100%",
                      height: "2rem",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p
                  className="mt-1 text-xs md:text-sm font-medium text-dark dark:text-light/70"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    margin: "0px",
                    marginTop: "0.25rem",
                    fontWeight: 500,
                    color: "rgb(25 25 35 / 1)",
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem",
                  }}
                >
                  {" "}
                  HTML{" "}
                </p>
              </div>
              <div
                className="text-center"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  textAlign: "center",
                }}
              >
                <div
                  className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    display: "grid",
                    placeContent: "center",
                    borderRadius: "0.5rem",
                    backgroundColor: "rgb(240 242 245 / 1)",
                    padding: "0.75rem",
                  }}
                >
                  <img
                    className="h-8 object-cover"
                    alt="CSS"
                    src="https://cdn.simpleicons.org/css3/1572B6"
                    title="CSS"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "block",
                      verticalAlign: "middle",
                      maxWidth: "100%",
                      height: "2rem",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p
                  className="mt-1 text-xs md:text-sm font-medium text-dark dark:text-light/70"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    margin: "0px",
                    marginTop: "0.25rem",
                    fontWeight: 500,
                    color: "rgb(25 25 35 / 1)",
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem",
                  }}
                >
                  {" "}
                  CSS{" "}
                </p>
              </div>
              <div
                className="text-center"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  textAlign: "center",
                }}
              >
                <div
                  className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    display: "grid",
                    placeContent: "center",
                    borderRadius: "0.5rem",
                    backgroundColor: "rgb(240 242 245 / 1)",
                    padding: "0.75rem",
                  }}
                >
                  <img
                    className="h-8 object-cover"
                    alt="JQuery"
                    src="https://cdn.simpleicons.org/jquery/0769AD"
                    title="JQuery"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "block",
                      verticalAlign: "middle",
                      maxWidth: "100%",
                      height: "2rem",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p
                  className="mt-1 text-xs md:text-sm font-medium text-dark dark:text-light/70"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    margin: "0px",
                    marginTop: "0.25rem",
                    fontWeight: 500,
                    color: "rgb(25 25 35 / 1)",
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem",
                  }}
                >
                  {" "}
                  JQuery{" "}
                </p>
              </div>
              <div
                className="text-center"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  textAlign: "center",
                }}
              >
                <div
                  className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    display: "grid",
                    placeContent: "center",
                    borderRadius: "0.5rem",
                    backgroundColor: "rgb(240 242 245 / 1)",
                    padding: "0.75rem",
                  }}
                >
                  <img
                    className="h-8 object-cover"
                    alt="Mongo DB"
                    src="https://cdn.simpleicons.org/mongodb/47A248"
                    title="Mongo DB"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "block",
                      verticalAlign: "middle",
                      maxWidth: "100%",
                      height: "2rem",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p
                  className="mt-1 text-xs md:text-sm font-medium text-dark dark:text-light/70"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    margin: "0px",
                    marginTop: "0.25rem",
                    fontWeight: 500,
                    color: "rgb(25 25 35 / 1)",
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem",
                  }}
                >
                  {" "}
                  Mongo DB{" "}
                </p>
              </div>
              <div
                className="text-center"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  textAlign: "center",
                }}
              >
                <div
                  className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    display: "grid",
                    placeContent: "center",
                    borderRadius: "0.5rem",
                    backgroundColor: "rgb(240 242 245 / 1)",
                    padding: "0.75rem",
                  }}
                >
                  <img
                    className="h-8 object-cover"
                    alt="NGINX"
                    src="https://cdn.simpleicons.org/nginx/009639"
                    title="NGINX"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "block",
                      verticalAlign: "middle",
                      maxWidth: "100%",
                      height: "2rem",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p
                  className="mt-1 text-xs md:text-sm font-medium text-dark dark:text-light/70"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    margin: "0px",
                    marginTop: "0.25rem",
                    fontWeight: 500,
                    color: "rgb(25 25 35 / 1)",
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem",
                  }}
                >
                  {" "}
                  NGINX{" "}
                </p>
              </div>
              <div
                className="text-center"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  textAlign: "center",
                }}
              >
                <div
                  className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    display: "grid",
                    placeContent: "center",
                    borderRadius: "0.5rem",
                    backgroundColor: "rgb(240 242 245 / 1)",
                    padding: "0.75rem",
                  }}
                >
                  <img
                    className="h-8 object-cover"
                    alt="PWA"
                    src="https://cdn.simpleicons.org/pwa/5A0FC8"
                    title="PWA"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "block",
                      verticalAlign: "middle",
                      maxWidth: "100%",
                      height: "2rem",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p
                  className="mt-1 text-xs md:text-sm font-medium text-dark dark:text-light/70"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    margin: "0px",
                    marginTop: "0.25rem",
                    fontWeight: 500,
                    color: "rgb(25 25 35 / 1)",
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem",
                  }}
                >
                  {" "}
                  PWA{" "}
                </p>
              </div>
              <div
                className="text-center"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  textAlign: "center",
                }}
              >
                <div
                  className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    display: "grid",
                    placeContent: "center",
                    borderRadius: "0.5rem",
                    backgroundColor: "rgb(240 242 245 / 1)",
                    padding: "0.75rem",
                  }}
                >
                  <img
                    className="h-8 object-cover"
                    alt="Wordpress"
                    src="https://cdn.simpleicons.org/wordpress/21759B"
                    title="Wordpress"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "block",
                      verticalAlign: "middle",
                      maxWidth: "100%",
                      height: "2rem",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p
                  className="mt-1 text-xs md:text-sm font-medium text-dark dark:text-light/70"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    margin: "0px",
                    marginTop: "0.25rem",
                    fontWeight: 500,
                    color: "rgb(25 25 35 / 1)",
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem",
                  }}
                >
                  {" "}
                  Wordpress{" "}
                </p>
              </div>
              <div
                className="text-center"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  textAlign: "center",
                }}
              >
                <div
                  className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    display: "grid",
                    placeContent: "center",
                    borderRadius: "0.5rem",
                    backgroundColor: "rgb(240 242 245 / 1)",
                    padding: "0.75rem",
                  }}
                >
                  <img
                    className="h-8 object-cover"
                    alt="Figma"
                    src="https://cdn.simpleicons.org/figma/F24E1E"
                    title="Figma"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "block",
                      verticalAlign: "middle",
                      maxWidth: "100%",
                      height: "2rem",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <p
                  className="mt-1 text-xs md:text-sm font-medium text-dark dark:text-light/70"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    margin: "0px",
                    marginTop: "0.25rem",
                    fontWeight: 500,
                    color: "rgb(25 25 35 / 1)",
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem",
                  }}
                >
                  {" "}
                  Figma{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="rounded-2xl bg-white p-6 shadow dark:bg-dark dark:shadow-dark"
          style={{
            borderWidth: "0px",
            borderStyle: "solid",
            borderColor: "rgb(229, 231, 235)",
            boxSizing: "border-box",
            borderRadius: "1rem",
            backgroundColor: "rgb(255 255 255 / 1)",
            padding: "1.5rem",
            boxShadow:
              "var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)",
          }}
        >
          <div
            className="flex flex-wrap items-center justify-between gap-2"
            style={{
              borderWidth: "0px",
              borderStyle: "solid",
              borderColor: "rgb(229, 231, 235)",
              boxSizing: "border-box",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "0.5rem",
            }}
          >
            <h2
              className="text-2xl font-semibold dark:text-light"
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgb(229, 231, 235)",
                boxSizing: "border-box",
                margin: "0px",
                fontSize: "1.5rem",
                lineHeight: "2rem",
                fontWeight: 600,
              }}
            >
              Recent Projects
            </h2>
            <a
              className="inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary"
              href="https://aashish-bhagwat.creativehand.co.in/works"
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgb(229, 231, 235)",
                boxSizing: "border-box",
                textDecoration: "inherit",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                borderBottomWidth: "1px",
                textAlign: "center",
                fontSize: "1rem",
                lineHeight: "1.5rem",
                color: "rgb(135 126 255 / 1)",
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
                All Projects
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
                  d="M4.167 10h11.666m-4.999 5 5-5m-5-5 5 5"
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
          <div
            className="mt-6 space-y-6"
            style={{
              borderWidth: "0px",
              borderStyle: "solid",
              borderColor: "rgb(229, 231, 235)",
              boxSizing: "border-box",
              marginTop: "1.5rem",
            }}
          >
            <div
              className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0"
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgb(229, 231, 235)",
                boxSizing: "border-box",
                position: "relative",
                overflow: "hidden",
                borderRadius: "0.5rem",
                backgroundColor: "rgb(240 242 245 / 1)",
                padding: "1.5rem",
                paddingBottom: "0px",
              }}
            >
              <div
                className="relative aspect-6/4 overflow-hidden rounded-t-lg"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  position: "relative",
                  overflow: "hidden",
                  borderTopLeftRadius: "0.5rem",
                  borderTopRightRadius: "0.5rem",
                  aspectRatio: "6 / 4",
                }}
              >
                <img
                  className="h-full w-full rounded-t-lg object-cover object-top transition"
                  alt="image"
                  src="https://aashish-bhagwat.creativehand.co.in/assets/new_projects/indistays_banner.png"
                  title="image"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    display: "block",
                    verticalAlign: "middle",
                    maxWidth: "100%",
                    height: "100%",
                    width: "100%",
                    borderTopLeftRadius: "0.5rem",
                    borderTopRightRadius: "0.5rem",
                    objectFit: "cover",
                    objectPosition: "center top",
                    transitionProperty:
                      "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDuration: "0.15s",
                  }}
                />
                <a
                  className="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100 vbox-item"
                  href="https://aashish-bhagwat.creativehand.co.in/assets/new_projects/indistays_banner.png"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    textDecoration: "inherit",
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    display: "grid",
                    height: "2.5rem",
                    width: "2.5rem",
                    placeContent: "center",
                    borderRadius: "9999px",
                    backgroundColor: "rgb(255 255 255 / 1)",
                    color: "rgb(135 126 255 / 1)",
                    boxShadow:
                      "var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1)",
                    transitionProperty:
                      "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDuration: "0.15s",
                    visibility: "hidden",
                    transform:
                      "translate(-50%,-40%) rotate(0) skew(0) skewY(0) scaleX(1) scaleY(1)",
                    opacity: 0,
                  }}
                >
                  <svg
                    className="h-6 w-6"
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
                      height: "1.5rem",
                      width: "1.5rem",
                    }}
                  >
                    <path
                      d="M10 4.167v11.666M4.167 10h11.666"
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
              <div
                className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 bg-gradient-to-t from-black/20 p-4"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  position: "absolute",
                  left: "0px",
                  right: "0px",
                  bottom: "0px",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  backgroundImage:
                    "linear-gradient(to top,rgb(0 0 0 / .2) , rgb(0 0 0 / 0))",
                  padding: "1rem",
                }}
              >
                <span
                  className="rounded bg-white px-2 py-1 text-xs font-medium text-primary shadow"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    borderRadius: "0.25rem",
                    backgroundColor: "rgb(255 255 255 / 1)",
                    paddingLeft: "0.5rem",
                    paddingRight: "0.5rem",
                    paddingTop: "0.25rem",
                    paddingBottom: "0.25rem",
                    fontSize: "0.75rem",
                    lineHeight: "1rem",
                    fontWeight: 500,
                    color: "rgb(135 126 255 / 1)",
                    boxShadow:
                      "var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)",
                  }}
                >
                  <a
                    className="border-b border-transparent transition hover:border-b-primary hover:text-primary dark:hover:text-primary"
                    href="https://indistays.com/home"
                    target="_blank"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      boxSizing: "border-box",
                      textDecoration: "inherit",
                      color: "inherit",
                      borderBottomWidth: "1px",
                      borderColor: "transparent",
                      transitionProperty:
                        "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                      transitionDuration: "0.15s",
                    }}
                  >
                    {" "}
                    Indistays{" "}
                  </a>
                </span>
              </div>
            </div>
            <div
              className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0"
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgb(229, 231, 235)",
                boxSizing: "border-box",
                position: "relative",
                overflow: "hidden",
                borderRadius: "0.5rem",
                backgroundColor: "rgb(240 242 245 / 1)",
                padding: "1.5rem",
                paddingBottom: "0px",
                marginTop: "calc(1.5rem * calc(1 - 0))",
                marginBottom: "calc(1.5rem * 0)",
              }}
            >
              <div
                className="relative aspect-6/4 overflow-hidden rounded-t-lg"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  position: "relative",
                  overflow: "hidden",
                  borderTopLeftRadius: "0.5rem",
                  borderTopRightRadius: "0.5rem",
                  aspectRatio: "6 / 4",
                }}
              >
                <img
                  className="h-full w-full rounded-t-lg object-cover object-top transition"
                  alt="image"
                  src="https://aashish-bhagwat.creativehand.co.in/assets/new_projects/elev8.png"
                  title="image"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    display: "block",
                    verticalAlign: "middle",
                    maxWidth: "100%",
                    height: "100%",
                    width: "100%",
                    borderTopLeftRadius: "0.5rem",
                    borderTopRightRadius: "0.5rem",
                    objectFit: "cover",
                    objectPosition: "center top",
                    transitionProperty:
                      "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDuration: "0.15s",
                  }}
                />
                <a
                  className="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100 vbox-item"
                  href="https://aashish-bhagwat.creativehand.co.in/assets/new_projects/elev8.png"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    textDecoration: "inherit",
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    display: "grid",
                    height: "2.5rem",
                    width: "2.5rem",
                    placeContent: "center",
                    borderRadius: "9999px",
                    backgroundColor: "rgb(255 255 255 / 1)",
                    color: "rgb(135 126 255 / 1)",
                    boxShadow:
                      "var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1)",
                    transitionProperty:
                      "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDuration: "0.15s",
                    visibility: "hidden",
                    transform:
                      "translate(-50%,-40%) rotate(0) skew(0) skewY(0) scaleX(1) scaleY(1)",
                    opacity: 0,
                  }}
                >
                  <svg
                    className="h-6 w-6"
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
                      height: "1.5rem",
                      width: "1.5rem",
                    }}
                  >
                    <path
                      d="M10 4.167v11.666M4.167 10h11.666"
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
              <div
                className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 bg-gradient-to-t from-black/20 p-4"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  position: "absolute",
                  left: "0px",
                  right: "0px",
                  bottom: "0px",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  backgroundImage:
                    "linear-gradient(to top,rgb(0 0 0 / .2) , rgb(0 0 0 / 0))",
                  padding: "1rem",
                }}
              >
                <span
                  className="rounded bg-white px-2 py-1 text-xs font-medium text-primary shadow"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    borderRadius: "0.25rem",
                    backgroundColor: "rgb(255 255 255 / 1)",
                    paddingLeft: "0.5rem",
                    paddingRight: "0.5rem",
                    paddingTop: "0.25rem",
                    paddingBottom: "0.25rem",
                    fontSize: "0.75rem",
                    lineHeight: "1rem",
                    fontWeight: 500,
                    color: "rgb(135 126 255 / 1)",
                    boxShadow:
                      "var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)",
                  }}
                >
                  <a
                    className="border-b border-transparent transition hover:border-b-primary hover:text-primary dark:hover:text-primary"
                    href="https://www.e8matrix.com/staging"
                    target="_blank"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      boxSizing: "border-box",
                      textDecoration: "inherit",
                      color: "inherit",
                      borderBottomWidth: "1px",
                      borderColor: "transparent",
                      transitionProperty:
                        "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                      transitionDuration: "0.15s",
                    }}
                  >
                    {" "}
                    Elev8 Matrix - US{" "}
                  </a>
                </span>
              </div>
            </div>
            <div
              className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0"
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgb(229, 231, 235)",
                boxSizing: "border-box",
                position: "relative",
                overflow: "hidden",
                borderRadius: "0.5rem",
                backgroundColor: "rgb(240 242 245 / 1)",
                padding: "1.5rem",
                paddingBottom: "0px",
                marginTop: "calc(1.5rem * calc(1 - 0))",
                marginBottom: "calc(1.5rem * 0)",
              }}
            >
              <div
                className="relative aspect-6/4 overflow-hidden rounded-t-lg"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  position: "relative",
                  overflow: "hidden",
                  borderTopLeftRadius: "0.5rem",
                  borderTopRightRadius: "0.5rem",
                  aspectRatio: "6 / 4",
                }}
              >
                <img
                  className="h-full w-full rounded-t-lg object-cover object-top transition"
                  alt="image"
                  src="https://aashish-bhagwat.creativehand.co.in/assets/new_projects/frylow_banner.png"
                  title="image"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    display: "block",
                    verticalAlign: "middle",
                    maxWidth: "100%",
                    height: "100%",
                    width: "100%",
                    borderTopLeftRadius: "0.5rem",
                    borderTopRightRadius: "0.5rem",
                    objectFit: "cover",
                    objectPosition: "center top",
                    transitionProperty:
                      "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDuration: "0.15s",
                  }}
                />
                <a
                  className="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100 vbox-item"
                  href="https://aashish-bhagwat.creativehand.co.in/assets/new_projects/frylow_banner.png"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    textDecoration: "inherit",
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    display: "grid",
                    height: "2.5rem",
                    width: "2.5rem",
                    placeContent: "center",
                    borderRadius: "9999px",
                    backgroundColor: "rgb(255 255 255 / 1)",
                    color: "rgb(135 126 255 / 1)",
                    boxShadow:
                      "var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1)",
                    transitionProperty:
                      "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDuration: "0.15s",
                    visibility: "hidden",
                    transform:
                      "translate(-50%,-40%) rotate(0) skew(0) skewY(0) scaleX(1) scaleY(1)",
                    opacity: 0,
                  }}
                >
                  <svg
                    className="h-6 w-6"
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
                      height: "1.5rem",
                      width: "1.5rem",
                    }}
                  >
                    <path
                      d="M10 4.167v11.666M4.167 10h11.666"
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
              <div
                className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 bg-gradient-to-t from-black/20 p-4"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  position: "absolute",
                  left: "0px",
                  right: "0px",
                  bottom: "0px",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  backgroundImage:
                    "linear-gradient(to top,rgb(0 0 0 / .2) , rgb(0 0 0 / 0))",
                  padding: "1rem",
                }}
              >
                <span
                  className="rounded bg-white px-2 py-1 text-xs font-medium text-primary shadow"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    borderRadius: "0.25rem",
                    backgroundColor: "rgb(255 255 255 / 1)",
                    paddingLeft: "0.5rem",
                    paddingRight: "0.5rem",
                    paddingTop: "0.25rem",
                    paddingBottom: "0.25rem",
                    fontSize: "0.75rem",
                    lineHeight: "1rem",
                    fontWeight: 500,
                    color: "rgb(135 126 255 / 1)",
                    boxShadow:
                      "var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)",
                  }}
                >
                  <a
                    className="border-b border-transparent transition hover:border-b-primary hover:text-primary dark:hover:text-primary"
                    href="https://frylowstore.com/"
                    target="_blank"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      boxSizing: "border-box",
                      textDecoration: "inherit",
                      color: "inherit",
                      borderBottomWidth: "1px",
                      borderColor: "transparent",
                      transitionProperty:
                        "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                      transitionDuration: "0.15s",
                    }}
                  >
                    {" "}
                    Frylow Web Store{" "}
                  </a>
                </span>
              </div>
            </div>
            <div
              className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0"
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgb(229, 231, 235)",
                boxSizing: "border-box",
                position: "relative",
                overflow: "hidden",
                borderRadius: "0.5rem",
                backgroundColor: "rgb(240 242 245 / 1)",
                padding: "1.5rem",
                paddingBottom: "0px",
                marginTop: "calc(1.5rem * calc(1 - 0))",
                marginBottom: "calc(1.5rem * 0)",
              }}
            >
              <div
                className="relative aspect-6/4 overflow-hidden rounded-t-lg"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  position: "relative",
                  overflow: "hidden",
                  borderTopLeftRadius: "0.5rem",
                  borderTopRightRadius: "0.5rem",
                  aspectRatio: "6 / 4",
                }}
              >
                <img
                  className="h-full w-full rounded-t-lg object-cover object-top transition"
                  alt="image"
                  src="https://aashish-bhagwat.creativehand.co.in/assets/new_projects/infix_banner.png"
                  title="image"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    display: "block",
                    verticalAlign: "middle",
                    maxWidth: "100%",
                    height: "100%",
                    width: "100%",
                    borderTopLeftRadius: "0.5rem",
                    borderTopRightRadius: "0.5rem",
                    objectFit: "cover",
                    objectPosition: "center top",
                    transitionProperty:
                      "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDuration: "0.15s",
                  }}
                />
                <a
                  className="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100 vbox-item"
                  href="https://aashish-bhagwat.creativehand.co.in/assets/new_projects/infix_banner.png"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    textDecoration: "inherit",
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    display: "grid",
                    height: "2.5rem",
                    width: "2.5rem",
                    placeContent: "center",
                    borderRadius: "9999px",
                    backgroundColor: "rgb(255 255 255 / 1)",
                    color: "rgb(135 126 255 / 1)",
                    boxShadow:
                      "var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1)",
                    transitionProperty:
                      "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDuration: "0.15s",
                    visibility: "hidden",
                    transform:
                      "translate(-50%,-40%) rotate(0) skew(0) skewY(0) scaleX(1) scaleY(1)",
                    opacity: 0,
                  }}
                >
                  <svg
                    className="h-6 w-6"
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
                      height: "1.5rem",
                      width: "1.5rem",
                    }}
                  >
                    <path
                      d="M10 4.167v11.666M4.167 10h11.666"
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
              <div
                className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 bg-gradient-to-t from-black/20 p-4"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  position: "absolute",
                  left: "0px",
                  right: "0px",
                  bottom: "0px",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  backgroundImage:
                    "linear-gradient(to top,rgb(0 0 0 / .2) , rgb(0 0 0 / 0))",
                  padding: "1rem",
                }}
              >
                <span
                  className="rounded bg-white px-2 py-1 text-xs font-medium text-primary shadow"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    borderRadius: "0.25rem",
                    backgroundColor: "rgb(255 255 255 / 1)",
                    paddingLeft: "0.5rem",
                    paddingRight: "0.5rem",
                    paddingTop: "0.25rem",
                    paddingBottom: "0.25rem",
                    fontSize: "0.75rem",
                    lineHeight: "1rem",
                    fontWeight: 500,
                    color: "rgb(135 126 255 / 1)",
                    boxShadow:
                      "var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)",
                  }}
                >
                  <a
                    className="border-b border-transparent transition hover:border-b-primary hover:text-primary dark:hover:text-primary"
                    href="https://infixlogistics.com/"
                    target="_blank"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      boxSizing: "border-box",
                      textDecoration: "inherit",
                      color: "inherit",
                      borderBottomWidth: "1px",
                      borderColor: "transparent",
                      transitionProperty:
                        "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                      transitionDuration: "0.15s",
                    }}
                  >
                    {" "}
                    Infix Logistics | E-commerce{" "}
                  </a>
                </span>
              </div>
            </div>
            <div
              className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0"
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgb(229, 231, 235)",
                boxSizing: "border-box",
                position: "relative",
                overflow: "hidden",
                borderRadius: "0.5rem",
                backgroundColor: "rgb(240 242 245 / 1)",
                padding: "1.5rem",
                paddingBottom: "0px",
                marginTop: "calc(1.5rem * calc(1 - 0))",
                marginBottom: "calc(1.5rem * 0)",
              }}
            >
              <div
                className="relative aspect-6/4 overflow-hidden rounded-t-lg"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  position: "relative",
                  overflow: "hidden",
                  borderTopLeftRadius: "0.5rem",
                  borderTopRightRadius: "0.5rem",
                  aspectRatio: "6 / 4",
                }}
              >
                <img
                  className="h-full w-full rounded-t-lg object-cover object-top transition"
                  alt="image"
                  src="https://aashish-bhagwat.creativehand.co.in/assets/new_projects/auto_commenter_banner.png"
                  title="image"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    display: "block",
                    verticalAlign: "middle",
                    maxWidth: "100%",
                    height: "100%",
                    width: "100%",
                    borderTopLeftRadius: "0.5rem",
                    borderTopRightRadius: "0.5rem",
                    objectFit: "cover",
                    objectPosition: "center top",
                    transitionProperty:
                      "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDuration: "0.15s",
                  }}
                />
                <a
                  className="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100 vbox-item"
                  href="https://aashish-bhagwat.creativehand.co.in/assets/new_projects/auto_commenter_banner.png"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    textDecoration: "inherit",
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    display: "grid",
                    height: "2.5rem",
                    width: "2.5rem",
                    placeContent: "center",
                    borderRadius: "9999px",
                    backgroundColor: "rgb(255 255 255 / 1)",
                    color: "rgb(135 126 255 / 1)",
                    boxShadow:
                      "var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1)",
                    transitionProperty:
                      "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDuration: "0.15s",
                    visibility: "hidden",
                    transform:
                      "translate(-50%,-40%) rotate(0) skew(0) skewY(0) scaleX(1) scaleY(1)",
                    opacity: 0,
                  }}
                >
                  <svg
                    className="h-6 w-6"
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
                      height: "1.5rem",
                      width: "1.5rem",
                    }}
                  >
                    <path
                      d="M10 4.167v11.666M4.167 10h11.666"
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
              <div
                className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 bg-gradient-to-t from-black/20 p-4"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  position: "absolute",
                  left: "0px",
                  right: "0px",
                  bottom: "0px",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  backgroundImage:
                    "linear-gradient(to top,rgb(0 0 0 / .2) , rgb(0 0 0 / 0))",
                  padding: "1rem",
                }}
              >
                <span
                  className="rounded bg-white px-2 py-1 text-xs font-medium text-primary shadow"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    borderRadius: "0.25rem",
                    backgroundColor: "rgb(255 255 255 / 1)",
                    paddingLeft: "0.5rem",
                    paddingRight: "0.5rem",
                    paddingTop: "0.25rem",
                    paddingBottom: "0.25rem",
                    fontSize: "0.75rem",
                    lineHeight: "1rem",
                    fontWeight: 500,
                    color: "rgb(135 126 255 / 1)",
                    boxShadow:
                      "var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)",
                  }}
                >
                  <a
                    className="border-b border-transparent transition hover:border-b-primary hover:text-primary dark:hover:text-primary"
                    href="https://chromewebstore.google.com/detail/linkedin-auto-commenter/pagjldpgebbhhfekjghppoajdmdhbpee"
                    target="_blank"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      boxSizing: "border-box",
                      textDecoration: "inherit",
                      color: "inherit",
                      borderBottomWidth: "1px",
                      borderColor: "transparent",
                      transitionProperty:
                        "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                      transitionDuration: "0.15s",
                    }}
                  >
                    {" "}
                    LinkedIn Auto Commenter - Bot{" "}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
