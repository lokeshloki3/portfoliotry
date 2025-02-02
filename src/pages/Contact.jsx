import React from "react";

export default function Component() {
  return (
    <>
      <div
        className="rounded-2xl bg-white p-6 shadow dark:bg-dark dark:shadow-dark lg:col-span-2 lg:p-10"
        style={{
          borderWidth: "0px",
          borderStyle: "solid",
          borderColor: "rgb(229, 231, 235)",
          boxSizing: "border-box",
          borderRadius: "1rem",
          backgroundColor: "rgb(255 255 255 / 1)",
          boxShadow:
            "var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)",
          gridColumn: "span 2 / span 2",
          padding: "2.5rem",
          color: "rgb(25, 25, 35)",
        }}
      >
        <div
          className="flex flex-col-reverse items-start gap-6 lg:flex-row lg:gap-10"
          style={{
            borderWidth: "0px",
            borderStyle: "solid",
            borderColor: "rgb(229, 231, 235)",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "row",
            gap: "2.5rem",
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
            <h2
              className="text-3xl font-semibold text-dark dark:text-light lg:text-[24px]"
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgb(229, 231, 235)",
                boxSizing: "border-box",
                margin: "0px",
                lineHeight: "2.25rem",
                fontWeight: 600,
                color: "rgb(25 25 35 / 1)",
                fontSize: "24px",
              }}
            >
              {" "}
              Hi, This is{" "}
              <span
                className="text-primary"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  color: "rgb(135 126 255 / 1)",
                }}
              >
                Aashish Bhagwat
              </span>{" "}
              👋{" "}
            </h2>
            <p
              className="mt-4 text-lg text-muted dark:text-light/70 lg:mt-6 lg:text-lg"
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgb(229, 231, 235)",
                boxSizing: "border-box",
                margin: "0px",
                color: "rgb(87 96 118 / 1)",
                marginTop: "1.5rem",
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
              }}
            >
              {"A Passionate"}
              {"Full Stack Developer, Social Media Manager"}
              {"🖥️ &"}
              {"Product Designer."}
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
                co-founder of Creativehand{" "}
              </span>
              , with a track record of helping brands establish their online
              presence and handling social media, available for hire.{" "}
            </p>
          </div>
          <div
            className="flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-light px-4 py-2 text-center text-base font-medium leading-none text-primary dark:bg-dark-2 lg:text-lg"
            style={{
              borderWidth: "0px",
              borderStyle: "solid",
              borderColor: "rgb(229, 231, 235)",
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              whiteSpace: "nowrap",
              borderRadius: "0.5rem",
              backgroundColor: "rgb(240 242 245 / 1)",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
              textAlign: "center",
              fontWeight: 500,
              color: "rgb(135 126 255 / 1)",
              fontSize: "1.125rem",
              lineHeight: "1.75rem",
            }}
          >
            <span
              className="relative flex h-2 w-2 shrink-0"
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgb(229, 231, 235)",
                boxSizing: "border-box",
                position: "relative",
                display: "flex",
                height: "0.5rem",
                width: "0.5rem",
                flexShrink: 0,
              }}
            >
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75 dark:bg-light"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  position: "absolute",
                  display: "inline-flex",
                  height: "100%",
                  width: "100%",
                  animation:
                    "1s cubic-bezier(0, 0, 0.2, 1) 0s infinite normal none running ping",
                  borderRadius: "9999px",
                  backgroundColor: "rgb(135 126 255 / 1)",
                  opacity: 0.75,
                }}
              />
              <span
                className="relative inline-flex h-2 w-2 rounded-full bg-primary"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  position: "relative",
                  display: "inline-flex",
                  height: "0.5rem",
                  width: "0.5rem",
                  borderRadius: "9999px",
                  backgroundColor: "rgb(135 126 255 / 1)",
                }}
              />
            </span>
            <span
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgb(229, 231, 235)",
                boxSizing: "border-box",
              }}
            >
              Available For Hire
            </span>
          </div>
        </div>
        <div
          className="mt-8 flex flex-wrap justify-between gap-6 lg:mt-12 lg:gap-10"
          style={{
            borderWidth: "0px",
            borderStyle: "solid",
            borderColor: "rgb(229, 231, 235)",
            boxSizing: "border-box",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginTop: "3rem",
            gap: "2.5rem",
          }}
        >
          <div
            className="flex flex-wrap items-start gap-6 lg:gap-10"
            style={{
              borderWidth: "0px",
              borderStyle: "solid",
              borderColor: "rgb(229, 231, 235)",
              boxSizing: "border-box",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-start",
              gap: "2.5rem",
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
              <h2
                className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  margin: "0px",
                  lineHeight: "2.25rem",
                  fontWeight: 600,
                  color: "rgb(25 25 35 / 1)",
                  fontSize: "40px",
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
                  20
                </span>
                +{" "}
              </h2>
              <p
                className="mt-2 text-muted"
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
                Technologies So Far
              </p>
            </div>
            <div
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgb(229, 231, 235)",
                boxSizing: "border-box",
              }}
            >
              <h2
                className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  margin: "0px",
                  lineHeight: "2.25rem",
                  fontWeight: 600,
                  color: "rgb(25 25 35 / 1)",
                  fontSize: "40px",
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
                  40
                </span>
                +{" "}
              </h2>
              <p
                className="mt-2 text-muted"
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
                Projects Completed
              </p>
            </div>
            <div
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgb(229, 231, 235)",
                boxSizing: "border-box",
              }}
            >
              <h2
                className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  margin: "0px",
                  lineHeight: "2.25rem",
                  fontWeight: 600,
                  color: "rgb(25 25 35 / 1)",
                  fontSize: "40px",
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
                  100
                </span>
                +{" "}
              </h2>
              <p
                className="mt-2 text-muted"
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
                Happy Clients
              </p>
            </div>
          </div>
        </div>
        <div
          className="mt-10 lg:mt-14"
          style={{
            borderWidth: "0px",
            borderStyle: "solid",
            borderColor: "rgb(229, 231, 235)",
            boxSizing: "border-box",
            marginTop: "3.5rem",
          }}
        >
          <div
            className="flex flex-wrap items-center justify-between gap-6"
            style={{
              borderWidth: "0px",
              borderStyle: "solid",
              borderColor: "rgb(229, 231, 235)",
              boxSizing: "border-box",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1.5rem",
            }}
          >
            <h3
              className="text-2xl font-medium text-dark dark:text-light lg:text-3xl"
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgb(229, 231, 235)",
                boxSizing: "border-box",
                margin: "0px",
                fontWeight: 500,
                color: "rgb(25 25 35 / 1)",
                fontSize: "1.875rem",
                lineHeight: "2.25rem",
              }}
            >
              {" "}
              Trusted By 1200+ Clients{" "}
            </h3>
            <div
              className="flex items-center gap-2"
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgb(229, 231, 235)",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <button
                className="review-carousel-button-prev grid h-9 w-9 place-content-center rounded-lg border border-muted/30 text-muted transition hover:border-primary hover:text-primary"
                aria-controls="swiper-wrapper-7c7109ccc7b16f738"
                aria-label="Previous slide"
                tabIndex="0"
                style={{
                  borderStyle: "solid",
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
                  appearance: "button",
                  backgroundColor: "transparent",
                  backgroundImage: "none",
                  cursor: "pointer",
                  display: "grid",
                  height: "2.25rem",
                  width: "2.25rem",
                  placeContent: "center",
                  borderRadius: "0.5rem",
                  borderWidth: "1px",
                  borderColor: "rgba(87, 96, 118, 0.3)",
                  color: "rgb(87 96 118 / 1)",
                  transitionProperty:
                    "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  transitionDuration: "0.15s",
                }}
              >
                <svg
                  className="h-5 w-5 shrink-0"
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
                    flexShrink: 0,
                  }}
                >
                  <path
                    d="M4.167 10h11.666M4.167 10l5 5m-5-5 5-5"
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
                className="review-carousel-button-next grid h-9 w-9 place-content-center rounded-lg border border-muted/30 text-muted transition hover:border-primary hover:text-primary"
                aria-controls="swiper-wrapper-7c7109ccc7b16f738"
                aria-label="Next slide"
                tabIndex="0"
                style={{
                  borderStyle: "solid",
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
                  appearance: "button",
                  backgroundColor: "transparent",
                  backgroundImage: "none",
                  cursor: "pointer",
                  display: "grid",
                  height: "2.25rem",
                  width: "2.25rem",
                  placeContent: "center",
                  borderRadius: "0.5rem",
                  borderWidth: "1px",
                  borderColor: "rgba(87, 96, 118, 0.3)",
                  color: "rgb(87 96 118 / 1)",
                  transitionProperty:
                    "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  transitionDuration: "0.15s",
                }}
              >
                <svg
                  className="h-5 w-5 shrink-0"
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
                    flexShrink: 0,
                  }}
                >
                  <path
                    d="M4.167 10h11.666m-5 5 5-5m-5-5 5 5"
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
          <div
            className="mt-8"
            style={{
              borderWidth: "0px",
              borderStyle: "solid",
              borderColor: "rgb(229, 231, 235)",
              boxSizing: "border-box",
              marginTop: "2rem",
            }}
          >
            <ngx-slick-carousel
              className="carousel slick-initialized slick-slider"
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgb(229, 231, 235)",
                position: "relative",
                display: "block",
                boxSizing: "border-box",
                userSelect: "none",
                touchAction: "pan-y",
                WebkitTapHighlightColor: "transparent",
              }}
            >
              <button
                className="slick-prev slick-arrow"
                type="button"
                aria-label="Previous"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  margin: "0px",
                  fontFamily: "inherit",
                  fontFeatureSettings: "inherit",
                  fontVariationSettings: "inherit",
                  fontWeight: "inherit",
                  textTransform: "none",
                  appearance: "button",
                  background: "transparent",
                  padding: "0px",
                  border: "none",
                  outline: "none",
                  position: "absolute",
                  display: "block",
                  height: "20px",
                  width: "20px",
                  lineHeight: "0px",
                  fontSize: "0px",
                  cursor: "pointer",
                  backgroundImage: "initial",
                  backgroundColor: "transparent",
                  color: "transparent",
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: "-25px",
                }}
              >
                Previous
              </button>
              <div
                className="slick-list draggable"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  overflow: "hidden",
                  margin: "0px",
                  padding: "0px",
                  position: "relative",
                  display: "block",
                  transform: "translateZ(0px)",
                }}
              >
                <div
                  className="slick-track"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    position: "relative",
                    left: "0px",
                    top: "0px",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    transition: "transform 500ms",
                    opacity: 1,
                    width: "6498px",
                    transform: "translate3d(-3610px, 0px, 0px)",
                  }}
                >
                  <div
                    className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2 mx-3 slick-slide slick-cloned"
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      marginLeft: "0.75rem",
                      marginRight: "0.75rem",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      borderRadius: "0.5rem",
                      backgroundColor: "rgb(240 242 245 / 1)",
                      padding: "1.5rem",
                      cssFloat: "left",
                      height: "100%",
                      minHeight: "1px",
                      display: "block",
                      width: "337px",
                    }}
                  >
                    <div
                      className="flex flex-wrap items-center justify-between gap-4"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                      }}
                    >
                      <div
                        className="flex flex-wrap items-center gap-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "center",
                          gap: "0.25rem",
                        }}
                      >
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                      </div>
                      <a
                        className="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-dark"
                        href="https://www.patelbailbonds.com/"
                        tabIndex="-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          textDecoration: "inherit",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          borderRadius: "0.25rem",
                          backgroundColor: "rgb(255 255 255 / 1)",
                          paddingLeft: "0.5rem",
                          paddingRight: "0.5rem",
                          paddingTop: "0.25rem",
                          paddingBottom: "0.25rem",
                          fontSize: "0.875rem",
                          lineHeight: 1,
                          color: "rgb(135 126 255 / 1)",
                          transitionProperty:
                            "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)",
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
                          Patel Bail Bonds
                        </span>
                        <svg
                          className="h-3.5 w-3.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 14 15"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            display: "block",
                            verticalAlign: "middle",
                            height: "0.875rem",
                            width: "0.875rem",
                            flexShrink: 0,
                          }}
                        >
                          <path
                            d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25"
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
                    <blockquote
                      className="text-gray-600 dark:text-gray-400 mt-6 flex-1 text-base"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "1.5rem",
                        flex: "1 1 0%",
                        fontSize: "1rem",
                        lineHeight: "1.5rem",
                        color: "rgb(75 85 99 / 1)",
                      }}
                    >
                      {" "}
                      Aashish's work on our bail bonds web application was
                      incredible. His attention to detail and focus on client
                      satisfaction make him a top developer.{" "}
                    </blockquote>
                    <p
                      className="mt-8 font-medium"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "2rem",
                        fontWeight: 500,
                      }}
                    >
                      {" "}
                      Patel Bail Bonds -{" "}
                      <span
                        className="font-normal text-muted"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          fontWeight: 400,
                          color: "rgb(87 96 118 / 1)",
                        }}
                      >
                        {" "}
                        Lakewood Bail Bonds{" "}
                      </span>
                    </p>
                  </div>
                  <div
                    className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2 mx-3 slick-slide slick-cloned"
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      marginLeft: "0.75rem",
                      marginRight: "0.75rem",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      borderRadius: "0.5rem",
                      backgroundColor: "rgb(240 242 245 / 1)",
                      padding: "1.5rem",
                      cssFloat: "left",
                      height: "100%",
                      minHeight: "1px",
                      display: "block",
                      width: "337px",
                    }}
                  >
                    <div
                      className="flex flex-wrap items-center justify-between gap-4"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                      }}
                    >
                      <div
                        className="flex flex-wrap items-center gap-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "center",
                          gap: "0.25rem",
                        }}
                      >
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                      </div>
                      <a
                        className="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-dark"
                        href="https://www.dubaiclient.com/"
                        tabIndex="-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          textDecoration: "inherit",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          borderRadius: "0.25rem",
                          backgroundColor: "rgb(255 255 255 / 1)",
                          paddingLeft: "0.5rem",
                          paddingRight: "0.5rem",
                          paddingTop: "0.25rem",
                          paddingBottom: "0.25rem",
                          fontSize: "0.875rem",
                          lineHeight: 1,
                          color: "rgb(135 126 255 / 1)",
                          transitionProperty:
                            "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)",
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
                          Betting Application
                        </span>
                        <svg
                          className="h-3.5 w-3.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 14 15"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            display: "block",
                            verticalAlign: "middle",
                            height: "0.875rem",
                            width: "0.875rem",
                            flexShrink: 0,
                          }}
                        >
                          <path
                            d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25"
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
                    <blockquote
                      className="text-gray-600 dark:text-gray-400 mt-6 flex-1 text-base"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "1.5rem",
                        flex: "1 1 0%",
                        fontSize: "1rem",
                        lineHeight: "1.5rem",
                        color: "rgb(75 85 99 / 1)",
                      }}
                    >
                      {" "}
                      Aashish created a powerful betting application for us. His
                      technical skills and dedication were key to the project’s
                      success.{" "}
                    </blockquote>
                    <p
                      className="mt-8 font-medium"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "2rem",
                        fontWeight: 500,
                      }}
                    >
                      {" "}
                      Dubai Client -{" "}
                      <span
                        className="font-normal text-muted"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          fontWeight: 400,
                          color: "rgb(87 96 118 / 1)",
                        }}
                      >
                        {" "}
                        Founder, Betting Application{" "}
                      </span>
                    </p>
                  </div>
                  <div
                    className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2 mx-3 slick-slide slick-current slick-active"
                    aria-hidden="false"
                    tabIndex="-1"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      marginLeft: "0.75rem",
                      marginRight: "0.75rem",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      borderRadius: "0.5rem",
                      backgroundColor: "rgb(240 242 245 / 1)",
                      padding: "1.5rem",
                      cssFloat: "left",
                      height: "100%",
                      minHeight: "1px",
                      display: "block",
                      width: "337px",
                    }}
                  >
                    <div
                      className="flex flex-wrap items-center justify-between gap-4"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                      }}
                    >
                      <div
                        className="flex flex-wrap items-center gap-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "center",
                          gap: "0.25rem",
                        }}
                      >
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                      </div>
                      <a
                        className="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-dark"
                        href="https://www.indistays.com/"
                        tabIndex="-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          textDecoration: "inherit",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          borderRadius: "0.25rem",
                          backgroundColor: "rgb(255 255 255 / 1)",
                          paddingLeft: "0.5rem",
                          paddingRight: "0.5rem",
                          paddingTop: "0.25rem",
                          paddingBottom: "0.25rem",
                          fontSize: "0.875rem",
                          lineHeight: 1,
                          color: "rgb(135 126 255 / 1)",
                          transitionProperty:
                            "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)",
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
                          Indistays
                        </span>
                        <svg
                          className="h-3.5 w-3.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 14 15"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            display: "block",
                            verticalAlign: "middle",
                            height: "0.875rem",
                            width: "0.875rem",
                            flexShrink: 0,
                          }}
                        >
                          <path
                            d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25"
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
                    <blockquote
                      className="text-gray-600 dark:text-gray-400 mt-6 flex-1 text-base"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "1.5rem",
                        flex: "1 1 0%",
                        fontSize: "1rem",
                        lineHeight: "1.5rem",
                        color: "rgb(75 85 99 / 1)",
                      }}
                    >
                      {" "}
                      Aashish delivered an exceptional website for Indistays.
                      His attention to detail and innovative approach helped us
                      stand out in the market. Highly recommended!{" "}
                    </blockquote>
                    <p
                      className="mt-8 font-medium"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "2rem",
                        fontWeight: 500,
                      }}
                    >
                      {" "}
                      Shubham Mandlik -{" "}
                      <span
                        className="font-normal text-muted"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          fontWeight: 400,
                          color: "rgb(87 96 118 / 1)",
                        }}
                      >
                        {" "}
                        Founder{" "}
                      </span>
                    </p>
                  </div>
                  <div
                    className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2 mx-3 slick-slide slick-active"
                    aria-hidden="false"
                    tabIndex="-1"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      marginLeft: "0.75rem",
                      marginRight: "0.75rem",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      borderRadius: "0.5rem",
                      backgroundColor: "rgb(240 242 245 / 1)",
                      padding: "1.5rem",
                      cssFloat: "left",
                      height: "100%",
                      minHeight: "1px",
                      display: "block",
                      width: "337px",
                    }}
                  >
                    <div
                      className="flex flex-wrap items-center justify-between gap-4"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                      }}
                    >
                      <div
                        className="flex flex-wrap items-center gap-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "center",
                          gap: "0.25rem",
                        }}
                      >
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                      </div>
                      <a
                        className="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-dark"
                        href="https://www.akservices.com/"
                        tabIndex="-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          textDecoration: "inherit",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          borderRadius: "0.25rem",
                          backgroundColor: "rgb(255 255 255 / 1)",
                          paddingLeft: "0.5rem",
                          paddingRight: "0.5rem",
                          paddingTop: "0.25rem",
                          paddingBottom: "0.25rem",
                          fontSize: "0.875rem",
                          lineHeight: 1,
                          color: "rgb(135 126 255 / 1)",
                          transitionProperty:
                            "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)",
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
                          AK Services
                        </span>
                        <svg
                          className="h-3.5 w-3.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 14 15"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            display: "block",
                            verticalAlign: "middle",
                            height: "0.875rem",
                            width: "0.875rem",
                            flexShrink: 0,
                          }}
                        >
                          <path
                            d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25"
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
                    <blockquote
                      className="text-gray-600 dark:text-gray-400 mt-6 flex-1 text-base"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "1.5rem",
                        flex: "1 1 0%",
                        fontSize: "1rem",
                        lineHeight: "1.5rem",
                        color: "rgb(75 85 99 / 1)",
                      }}
                    >
                      {" "}
                      The website and marketing solutions provided by Aashish
                      significantly boosted our online presence. We couldn't be
                      happier with the results.{" "}
                    </blockquote>
                    <p
                      className="mt-8 font-medium"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "2rem",
                        fontWeight: 500,
                      }}
                    >
                      {" "}
                      Akash Abhang -{" "}
                      <span
                        className="font-normal text-muted"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          fontWeight: 400,
                          color: "rgb(87 96 118 / 1)",
                        }}
                      >
                        {" "}
                        CEO, AK Services{" "}
                      </span>
                    </p>
                  </div>
                  <div
                    className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2 mx-3 slick-slide"
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      marginLeft: "0.75rem",
                      marginRight: "0.75rem",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      borderRadius: "0.5rem",
                      backgroundColor: "rgb(240 242 245 / 1)",
                      padding: "1.5rem",
                      cssFloat: "left",
                      height: "100%",
                      minHeight: "1px",
                      display: "block",
                      width: "337px",
                    }}
                  >
                    <div
                      className="flex flex-wrap items-center justify-between gap-4"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                      }}
                    >
                      <div
                        className="flex flex-wrap items-center gap-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "center",
                          gap: "0.25rem",
                        }}
                      >
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                      </div>
                      <a
                        className="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-dark"
                        href="https://www.infixlogistic.com/"
                        tabIndex="-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          textDecoration: "inherit",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          borderRadius: "0.25rem",
                          backgroundColor: "rgb(255 255 255 / 1)",
                          paddingLeft: "0.5rem",
                          paddingRight: "0.5rem",
                          paddingTop: "0.25rem",
                          paddingBottom: "0.25rem",
                          fontSize: "0.875rem",
                          lineHeight: 1,
                          color: "rgb(135 126 255 / 1)",
                          transitionProperty:
                            "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)",
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
                          Infix Logistic
                        </span>
                        <svg
                          className="h-3.5 w-3.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 14 15"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            display: "block",
                            verticalAlign: "middle",
                            height: "0.875rem",
                            width: "0.875rem",
                            flexShrink: 0,
                          }}
                        >
                          <path
                            d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25"
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
                    <blockquote
                      className="text-gray-600 dark:text-gray-400 mt-6 flex-1 text-base"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "1.5rem",
                        flex: "1 1 0%",
                        fontSize: "1rem",
                        lineHeight: "1.5rem",
                        color: "rgb(75 85 99 / 1)",
                      }}
                    >
                      {" "}
                      Aashish's work on our logistics platform was outstanding.
                      His expertise and dedication to delivering high-quality
                      results made all the difference.{" "}
                    </blockquote>
                    <p
                      className="mt-8 font-medium"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "2rem",
                        fontWeight: 500,
                      }}
                    >
                      {" "}
                      Ashish Semwal -{" "}
                      <span
                        className="font-normal text-muted"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          fontWeight: 400,
                          color: "rgb(87 96 118 / 1)",
                        }}
                      >
                        {" "}
                        Founder, Infix Logistic{" "}
                      </span>
                    </p>
                  </div>
                  <div
                    className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2 mx-3 slick-slide"
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      marginLeft: "0.75rem",
                      marginRight: "0.75rem",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      borderRadius: "0.5rem",
                      backgroundColor: "rgb(240 242 245 / 1)",
                      padding: "1.5rem",
                      cssFloat: "left",
                      height: "100%",
                      minHeight: "1px",
                      display: "block",
                      width: "337px",
                    }}
                  >
                    <div
                      className="flex flex-wrap items-center justify-between gap-4"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                      }}
                    >
                      <div
                        className="flex flex-wrap items-center gap-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "center",
                          gap: "0.25rem",
                        }}
                      >
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                      </div>
                      <a
                        className="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-dark"
                        href="https://www.linkedin.com/"
                        tabIndex="-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          textDecoration: "inherit",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          borderRadius: "0.25rem",
                          backgroundColor: "rgb(255 255 255 / 1)",
                          paddingLeft: "0.5rem",
                          paddingRight: "0.5rem",
                          paddingTop: "0.25rem",
                          paddingBottom: "0.25rem",
                          fontSize: "0.875rem",
                          lineHeight: 1,
                          color: "rgb(135 126 255 / 1)",
                          transitionProperty:
                            "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)",
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
                          LinkedIn
                        </span>
                        <svg
                          className="h-3.5 w-3.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 14 15"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            display: "block",
                            verticalAlign: "middle",
                            height: "0.875rem",
                            width: "0.875rem",
                            flexShrink: 0,
                          }}
                        >
                          <path
                            d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25"
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
                    <blockquote
                      className="text-gray-600 dark:text-gray-400 mt-6 flex-1 text-base"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "1.5rem",
                        flex: "1 1 0%",
                        fontSize: "1rem",
                        lineHeight: "1.5rem",
                        color: "rgb(75 85 99 / 1)",
                      }}
                    >
                      {" "}
                      The LinkedIn Auto Commenter Bot developed by Aashish has
                      been a game changer for our business. His development
                      skills and commitment are unparalleled.{" "}
                    </blockquote>
                    <p
                      className="mt-8 font-medium"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "2rem",
                        fontWeight: 500,
                      }}
                    >
                      {" "}
                      LinkedIn Family -{" "}
                      <span
                        className="font-normal text-muted"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          fontWeight: 400,
                          color: "rgb(87 96 118 / 1)",
                        }}
                      >
                        {" "}
                        LinkedIn Bot{" "}
                      </span>
                    </p>
                  </div>
                  <div
                    className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2 mx-3 slick-slide"
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      marginLeft: "0.75rem",
                      marginRight: "0.75rem",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      borderRadius: "0.5rem",
                      backgroundColor: "rgb(240 242 245 / 1)",
                      padding: "1.5rem",
                      cssFloat: "left",
                      height: "100%",
                      minHeight: "1px",
                      display: "block",
                      width: "337px",
                    }}
                  >
                    <div
                      className="flex flex-wrap items-center justify-between gap-4"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                      }}
                    >
                      <div
                        className="flex flex-wrap items-center gap-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "center",
                          gap: "0.25rem",
                        }}
                      >
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                      </div>
                      <a
                        className="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-dark"
                        href="https://www.faxoc.com/"
                        tabIndex="-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          textDecoration: "inherit",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          borderRadius: "0.25rem",
                          backgroundColor: "rgb(255 255 255 / 1)",
                          paddingLeft: "0.5rem",
                          paddingRight: "0.5rem",
                          paddingTop: "0.25rem",
                          paddingBottom: "0.25rem",
                          fontSize: "0.875rem",
                          lineHeight: 1,
                          color: "rgb(135 126 255 / 1)",
                          transitionProperty:
                            "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)",
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
                          Faxoc
                        </span>
                        <svg
                          className="h-3.5 w-3.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 14 15"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            display: "block",
                            verticalAlign: "middle",
                            height: "0.875rem",
                            width: "0.875rem",
                            flexShrink: 0,
                          }}
                        >
                          <path
                            d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25"
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
                    <blockquote
                      className="text-gray-600 dark:text-gray-400 mt-6 flex-1 text-base"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "1.5rem",
                        flex: "1 1 0%",
                        fontSize: "1rem",
                        lineHeight: "1.5rem",
                        color: "rgb(75 85 99 / 1)",
                      }}
                    >
                      {" "}
                      Aashish developed a seamless web application for Faxoc.
                      His professionalism and technical expertise are beyond
                      compare.{" "}
                    </blockquote>
                    <p
                      className="mt-8 font-medium"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "2rem",
                        fontWeight: 500,
                      }}
                    >
                      {" "}
                      Ashwani Kumar -{" "}
                      <span
                        className="font-normal text-muted"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          fontWeight: 400,
                          color: "rgb(87 96 118 / 1)",
                        }}
                      >
                        {" "}
                        Founder, Faxoc{" "}
                      </span>
                    </p>
                  </div>
                  <div
                    className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2 mx-3 slick-slide"
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      marginLeft: "0.75rem",
                      marginRight: "0.75rem",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      borderRadius: "0.5rem",
                      backgroundColor: "rgb(240 242 245 / 1)",
                      padding: "1.5rem",
                      cssFloat: "left",
                      height: "100%",
                      minHeight: "1px",
                      display: "block",
                      width: "337px",
                    }}
                  >
                    <div
                      className="flex flex-wrap items-center justify-between gap-4"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                      }}
                    >
                      <div
                        className="flex flex-wrap items-center gap-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "center",
                          gap: "0.25rem",
                        }}
                      >
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                      </div>
                      <a
                        className="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-dark"
                        href="https://www.uroone.com/"
                        tabIndex="-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          textDecoration: "inherit",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          borderRadius: "0.25rem",
                          backgroundColor: "rgb(255 255 255 / 1)",
                          paddingLeft: "0.5rem",
                          paddingRight: "0.5rem",
                          paddingTop: "0.25rem",
                          paddingBottom: "0.25rem",
                          fontSize: "0.875rem",
                          lineHeight: 1,
                          color: "rgb(135 126 255 / 1)",
                          transitionProperty:
                            "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)",
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
                          URO ONE
                        </span>
                        <svg
                          className="h-3.5 w-3.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 14 15"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            display: "block",
                            verticalAlign: "middle",
                            height: "0.875rem",
                            width: "0.875rem",
                            flexShrink: 0,
                          }}
                        >
                          <path
                            d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25"
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
                    <blockquote
                      className="text-gray-600 dark:text-gray-400 mt-6 flex-1 text-base"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "1.5rem",
                        flex: "1 1 0%",
                        fontSize: "1rem",
                        lineHeight: "1.5rem",
                        color: "rgb(75 85 99 / 1)",
                      }}
                    >
                      {" "}
                      Working with Aashish on URO ONE was a fantastic
                      experience. His ability to transform our vision into a
                      working product exceeded our expectations.{" "}
                    </blockquote>
                    <p
                      className="mt-8 font-medium"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "2rem",
                        fontWeight: 500,
                      }}
                    >
                      {" "}
                      Ratansingh -{" "}
                      <span
                        className="font-normal text-muted"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          fontWeight: 400,
                          color: "rgb(87 96 118 / 1)",
                        }}
                      >
                        {" "}
                        Founder, URO ONE{" "}
                      </span>
                    </p>
                  </div>
                  <div
                    className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2 mx-3 slick-slide"
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      marginLeft: "0.75rem",
                      marginRight: "0.75rem",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      borderRadius: "0.5rem",
                      backgroundColor: "rgb(240 242 245 / 1)",
                      padding: "1.5rem",
                      cssFloat: "left",
                      height: "100%",
                      minHeight: "1px",
                      display: "block",
                      width: "337px",
                    }}
                  >
                    <div
                      className="flex flex-wrap items-center justify-between gap-4"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                      }}
                    >
                      <div
                        className="flex flex-wrap items-center gap-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "center",
                          gap: "0.25rem",
                        }}
                      >
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                      </div>
                      <a
                        className="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-dark"
                        href="https://www.patelbailbonds.com/"
                        tabIndex="-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          textDecoration: "inherit",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          borderRadius: "0.25rem",
                          backgroundColor: "rgb(255 255 255 / 1)",
                          paddingLeft: "0.5rem",
                          paddingRight: "0.5rem",
                          paddingTop: "0.25rem",
                          paddingBottom: "0.25rem",
                          fontSize: "0.875rem",
                          lineHeight: 1,
                          color: "rgb(135 126 255 / 1)",
                          transitionProperty:
                            "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)",
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
                          Patel Bail Bonds
                        </span>
                        <svg
                          className="h-3.5 w-3.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 14 15"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            display: "block",
                            verticalAlign: "middle",
                            height: "0.875rem",
                            width: "0.875rem",
                            flexShrink: 0,
                          }}
                        >
                          <path
                            d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25"
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
                    <blockquote
                      className="text-gray-600 dark:text-gray-400 mt-6 flex-1 text-base"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "1.5rem",
                        flex: "1 1 0%",
                        fontSize: "1rem",
                        lineHeight: "1.5rem",
                        color: "rgb(75 85 99 / 1)",
                      }}
                    >
                      {" "}
                      Aashish's work on our bail bonds web application was
                      incredible. His attention to detail and focus on client
                      satisfaction make him a top developer.{" "}
                    </blockquote>
                    <p
                      className="mt-8 font-medium"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "2rem",
                        fontWeight: 500,
                      }}
                    >
                      {" "}
                      Patel Bail Bonds -{" "}
                      <span
                        className="font-normal text-muted"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          fontWeight: 400,
                          color: "rgb(87 96 118 / 1)",
                        }}
                      >
                        {" "}
                        Lakewood Bail Bonds{" "}
                      </span>
                    </p>
                  </div>
                  <div
                    className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2 mx-3 slick-slide"
                    aria-hidden="true"
                    tabIndex="0"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      marginLeft: "0.75rem",
                      marginRight: "0.75rem",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      borderRadius: "0.5rem",
                      backgroundColor: "rgb(240 242 245 / 1)",
                      padding: "1.5rem",
                      cssFloat: "left",
                      height: "100%",
                      minHeight: "1px",
                      display: "block",
                      width: "337px",
                    }}
                  >
                    <div
                      className="flex flex-wrap items-center justify-between gap-4"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                      }}
                    >
                      <div
                        className="flex flex-wrap items-center gap-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "center",
                          gap: "0.25rem",
                        }}
                      >
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                      </div>
                      <a
                        className="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-dark"
                        href="https://www.dubaiclient.com/"
                        tabIndex="0"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          textDecoration: "inherit",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          borderRadius: "0.25rem",
                          backgroundColor: "rgb(255 255 255 / 1)",
                          paddingLeft: "0.5rem",
                          paddingRight: "0.5rem",
                          paddingTop: "0.25rem",
                          paddingBottom: "0.25rem",
                          fontSize: "0.875rem",
                          lineHeight: 1,
                          color: "rgb(135 126 255 / 1)",
                          transitionProperty:
                            "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)",
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
                          Betting Application
                        </span>
                        <svg
                          className="h-3.5 w-3.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 14 15"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            display: "block",
                            verticalAlign: "middle",
                            height: "0.875rem",
                            width: "0.875rem",
                            flexShrink: 0,
                          }}
                        >
                          <path
                            d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25"
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
                    <blockquote
                      className="text-gray-600 dark:text-gray-400 mt-6 flex-1 text-base"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "1.5rem",
                        flex: "1 1 0%",
                        fontSize: "1rem",
                        lineHeight: "1.5rem",
                        color: "rgb(75 85 99 / 1)",
                      }}
                    >
                      {" "}
                      Aashish created a powerful betting application for us. His
                      technical skills and dedication were key to the project’s
                      success.{" "}
                    </blockquote>
                    <p
                      className="mt-8 font-medium"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "2rem",
                        fontWeight: 500,
                      }}
                    >
                      {" "}
                      Dubai Client -{" "}
                      <span
                        className="font-normal text-muted"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          fontWeight: 400,
                          color: "rgb(87 96 118 / 1)",
                        }}
                      >
                        {" "}
                        Founder, Betting Application{" "}
                      </span>
                    </p>
                  </div>
                  <div
                    className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2 mx-3 slick-slide slick-cloned"
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      marginLeft: "0.75rem",
                      marginRight: "0.75rem",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      borderRadius: "0.5rem",
                      backgroundColor: "rgb(240 242 245 / 1)",
                      padding: "1.5rem",
                      cssFloat: "left",
                      height: "100%",
                      minHeight: "1px",
                      display: "block",
                      width: "337px",
                    }}
                  >
                    <div
                      className="flex flex-wrap items-center justify-between gap-4"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                      }}
                    >
                      <div
                        className="flex flex-wrap items-center gap-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "center",
                          gap: "0.25rem",
                        }}
                      >
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                      </div>
                      <a
                        className="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-dark"
                        href="https://www.indistays.com/"
                        tabIndex="0"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          textDecoration: "inherit",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          borderRadius: "0.25rem",
                          backgroundColor: "rgb(255 255 255 / 1)",
                          paddingLeft: "0.5rem",
                          paddingRight: "0.5rem",
                          paddingTop: "0.25rem",
                          paddingBottom: "0.25rem",
                          fontSize: "0.875rem",
                          lineHeight: 1,
                          color: "rgb(135 126 255 / 1)",
                          transitionProperty:
                            "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)",
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
                          Indistays
                        </span>
                        <svg
                          className="h-3.5 w-3.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 14 15"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            display: "block",
                            verticalAlign: "middle",
                            height: "0.875rem",
                            width: "0.875rem",
                            flexShrink: 0,
                          }}
                        >
                          <path
                            d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25"
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
                    <blockquote
                      className="text-gray-600 dark:text-gray-400 mt-6 flex-1 text-base"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "1.5rem",
                        flex: "1 1 0%",
                        fontSize: "1rem",
                        lineHeight: "1.5rem",
                        color: "rgb(75 85 99 / 1)",
                      }}
                    >
                      {" "}
                      Aashish delivered an exceptional website for Indistays.
                      His attention to detail and innovative approach helped us
                      stand out in the market. Highly recommended!{" "}
                    </blockquote>
                    <p
                      className="mt-8 font-medium"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "2rem",
                        fontWeight: 500,
                      }}
                    >
                      {" "}
                      Shubham Mandlik -{" "}
                      <span
                        className="font-normal text-muted"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          fontWeight: 400,
                          color: "rgb(87 96 118 / 1)",
                        }}
                      >
                        {" "}
                        Founder{" "}
                      </span>
                    </p>
                  </div>
                  <div
                    className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2 mx-3 slick-slide slick-cloned"
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      marginLeft: "0.75rem",
                      marginRight: "0.75rem",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      borderRadius: "0.5rem",
                      backgroundColor: "rgb(240 242 245 / 1)",
                      padding: "1.5rem",
                      cssFloat: "left",
                      height: "100%",
                      minHeight: "1px",
                      display: "block",
                      width: "337px",
                    }}
                  >
                    <div
                      className="flex flex-wrap items-center justify-between gap-4"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                      }}
                    >
                      <div
                        className="flex flex-wrap items-center gap-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "center",
                          gap: "0.25rem",
                        }}
                      >
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                      </div>
                      <a
                        className="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-dark"
                        href="https://www.akservices.com/"
                        tabIndex="-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          textDecoration: "inherit",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          borderRadius: "0.25rem",
                          backgroundColor: "rgb(255 255 255 / 1)",
                          paddingLeft: "0.5rem",
                          paddingRight: "0.5rem",
                          paddingTop: "0.25rem",
                          paddingBottom: "0.25rem",
                          fontSize: "0.875rem",
                          lineHeight: 1,
                          color: "rgb(135 126 255 / 1)",
                          transitionProperty:
                            "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)",
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
                          AK Services
                        </span>
                        <svg
                          className="h-3.5 w-3.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 14 15"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            display: "block",
                            verticalAlign: "middle",
                            height: "0.875rem",
                            width: "0.875rem",
                            flexShrink: 0,
                          }}
                        >
                          <path
                            d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25"
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
                    <blockquote
                      className="text-gray-600 dark:text-gray-400 mt-6 flex-1 text-base"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "1.5rem",
                        flex: "1 1 0%",
                        fontSize: "1rem",
                        lineHeight: "1.5rem",
                        color: "rgb(75 85 99 / 1)",
                      }}
                    >
                      {" "}
                      The website and marketing solutions provided by Aashish
                      significantly boosted our online presence. We couldn't be
                      happier with the results.{" "}
                    </blockquote>
                    <p
                      className="mt-8 font-medium"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "2rem",
                        fontWeight: 500,
                      }}
                    >
                      {" "}
                      Akash Abhang -{" "}
                      <span
                        className="font-normal text-muted"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          fontWeight: 400,
                          color: "rgb(87 96 118 / 1)",
                        }}
                      >
                        {" "}
                        CEO, AK Services{" "}
                      </span>
                    </p>
                  </div>
                  <div
                    className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2 mx-3 slick-slide slick-cloned"
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      marginLeft: "0.75rem",
                      marginRight: "0.75rem",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      borderRadius: "0.5rem",
                      backgroundColor: "rgb(240 242 245 / 1)",
                      padding: "1.5rem",
                      cssFloat: "left",
                      height: "100%",
                      minHeight: "1px",
                      display: "block",
                      width: "337px",
                    }}
                  >
                    <div
                      className="flex flex-wrap items-center justify-between gap-4"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                      }}
                    >
                      <div
                        className="flex flex-wrap items-center gap-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "center",
                          gap: "0.25rem",
                        }}
                      >
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                      </div>
                      <a
                        className="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-dark"
                        href="https://www.infixlogistic.com/"
                        tabIndex="-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          textDecoration: "inherit",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          borderRadius: "0.25rem",
                          backgroundColor: "rgb(255 255 255 / 1)",
                          paddingLeft: "0.5rem",
                          paddingRight: "0.5rem",
                          paddingTop: "0.25rem",
                          paddingBottom: "0.25rem",
                          fontSize: "0.875rem",
                          lineHeight: 1,
                          color: "rgb(135 126 255 / 1)",
                          transitionProperty:
                            "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)",
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
                          Infix Logistic
                        </span>
                        <svg
                          className="h-3.5 w-3.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 14 15"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            display: "block",
                            verticalAlign: "middle",
                            height: "0.875rem",
                            width: "0.875rem",
                            flexShrink: 0,
                          }}
                        >
                          <path
                            d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25"
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
                    <blockquote
                      className="text-gray-600 dark:text-gray-400 mt-6 flex-1 text-base"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "1.5rem",
                        flex: "1 1 0%",
                        fontSize: "1rem",
                        lineHeight: "1.5rem",
                        color: "rgb(75 85 99 / 1)",
                      }}
                    >
                      {" "}
                      Aashish's work on our logistics platform was outstanding.
                      His expertise and dedication to delivering high-quality
                      results made all the difference.{" "}
                    </blockquote>
                    <p
                      className="mt-8 font-medium"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "2rem",
                        fontWeight: 500,
                      }}
                    >
                      {" "}
                      Ashish Semwal -{" "}
                      <span
                        className="font-normal text-muted"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          fontWeight: 400,
                          color: "rgb(87 96 118 / 1)",
                        }}
                      >
                        {" "}
                        Founder, Infix Logistic{" "}
                      </span>
                    </p>
                  </div>
                  <div
                    className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2 mx-3 slick-slide slick-cloned"
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      marginLeft: "0.75rem",
                      marginRight: "0.75rem",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      borderRadius: "0.5rem",
                      backgroundColor: "rgb(240 242 245 / 1)",
                      padding: "1.5rem",
                      cssFloat: "left",
                      height: "100%",
                      minHeight: "1px",
                      display: "block",
                      width: "337px",
                    }}
                  >
                    <div
                      className="flex flex-wrap items-center justify-between gap-4"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                      }}
                    >
                      <div
                        className="flex flex-wrap items-center gap-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "center",
                          gap: "0.25rem",
                        }}
                      >
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                      </div>
                      <a
                        className="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-dark"
                        href="https://www.linkedin.com/"
                        tabIndex="-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          textDecoration: "inherit",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          borderRadius: "0.25rem",
                          backgroundColor: "rgb(255 255 255 / 1)",
                          paddingLeft: "0.5rem",
                          paddingRight: "0.5rem",
                          paddingTop: "0.25rem",
                          paddingBottom: "0.25rem",
                          fontSize: "0.875rem",
                          lineHeight: 1,
                          color: "rgb(135 126 255 / 1)",
                          transitionProperty:
                            "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)",
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
                          LinkedIn
                        </span>
                        <svg
                          className="h-3.5 w-3.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 14 15"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            display: "block",
                            verticalAlign: "middle",
                            height: "0.875rem",
                            width: "0.875rem",
                            flexShrink: 0,
                          }}
                        >
                          <path
                            d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25"
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
                    <blockquote
                      className="text-gray-600 dark:text-gray-400 mt-6 flex-1 text-base"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "1.5rem",
                        flex: "1 1 0%",
                        fontSize: "1rem",
                        lineHeight: "1.5rem",
                        color: "rgb(75 85 99 / 1)",
                      }}
                    >
                      {" "}
                      The LinkedIn Auto Commenter Bot developed by Aashish has
                      been a game changer for our business. His development
                      skills and commitment are unparalleled.{" "}
                    </blockquote>
                    <p
                      className="mt-8 font-medium"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "2rem",
                        fontWeight: 500,
                      }}
                    >
                      {" "}
                      LinkedIn Family -{" "}
                      <span
                        className="font-normal text-muted"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          fontWeight: 400,
                          color: "rgb(87 96 118 / 1)",
                        }}
                      >
                        {" "}
                        LinkedIn Bot{" "}
                      </span>
                    </p>
                  </div>
                  <div
                    className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2 mx-3 slick-slide slick-cloned"
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      marginLeft: "0.75rem",
                      marginRight: "0.75rem",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      borderRadius: "0.5rem",
                      backgroundColor: "rgb(240 242 245 / 1)",
                      padding: "1.5rem",
                      cssFloat: "left",
                      height: "100%",
                      minHeight: "1px",
                      display: "block",
                      width: "337px",
                    }}
                  >
                    <div
                      className="flex flex-wrap items-center justify-between gap-4"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                      }}
                    >
                      <div
                        className="flex flex-wrap items-center gap-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "center",
                          gap: "0.25rem",
                        }}
                      >
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                      </div>
                      <a
                        className="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-dark"
                        href="https://www.faxoc.com/"
                        tabIndex="-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          textDecoration: "inherit",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          borderRadius: "0.25rem",
                          backgroundColor: "rgb(255 255 255 / 1)",
                          paddingLeft: "0.5rem",
                          paddingRight: "0.5rem",
                          paddingTop: "0.25rem",
                          paddingBottom: "0.25rem",
                          fontSize: "0.875rem",
                          lineHeight: 1,
                          color: "rgb(135 126 255 / 1)",
                          transitionProperty:
                            "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)",
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
                          Faxoc
                        </span>
                        <svg
                          className="h-3.5 w-3.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 14 15"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            display: "block",
                            verticalAlign: "middle",
                            height: "0.875rem",
                            width: "0.875rem",
                            flexShrink: 0,
                          }}
                        >
                          <path
                            d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25"
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
                    <blockquote
                      className="text-gray-600 dark:text-gray-400 mt-6 flex-1 text-base"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "1.5rem",
                        flex: "1 1 0%",
                        fontSize: "1rem",
                        lineHeight: "1.5rem",
                        color: "rgb(75 85 99 / 1)",
                      }}
                    >
                      {" "}
                      Aashish developed a seamless web application for Faxoc.
                      His professionalism and technical expertise are beyond
                      compare.{" "}
                    </blockquote>
                    <p
                      className="mt-8 font-medium"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "2rem",
                        fontWeight: 500,
                      }}
                    >
                      {" "}
                      Ashwani Kumar -{" "}
                      <span
                        className="font-normal text-muted"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          fontWeight: 400,
                          color: "rgb(87 96 118 / 1)",
                        }}
                      >
                        {" "}
                        Founder, Faxoc{" "}
                      </span>
                    </p>
                  </div>
                  <div
                    className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2 mx-3 slick-slide slick-cloned"
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      marginLeft: "0.75rem",
                      marginRight: "0.75rem",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      borderRadius: "0.5rem",
                      backgroundColor: "rgb(240 242 245 / 1)",
                      padding: "1.5rem",
                      cssFloat: "left",
                      height: "100%",
                      minHeight: "1px",
                      display: "block",
                      width: "337px",
                    }}
                  >
                    <div
                      className="flex flex-wrap items-center justify-between gap-4"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                      }}
                    >
                      <div
                        className="flex flex-wrap items-center gap-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "center",
                          gap: "0.25rem",
                        }}
                      >
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                      </div>
                      <a
                        className="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-dark"
                        href="https://www.uroone.com/"
                        tabIndex="-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          textDecoration: "inherit",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          borderRadius: "0.25rem",
                          backgroundColor: "rgb(255 255 255 / 1)",
                          paddingLeft: "0.5rem",
                          paddingRight: "0.5rem",
                          paddingTop: "0.25rem",
                          paddingBottom: "0.25rem",
                          fontSize: "0.875rem",
                          lineHeight: 1,
                          color: "rgb(135 126 255 / 1)",
                          transitionProperty:
                            "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)",
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
                          URO ONE
                        </span>
                        <svg
                          className="h-3.5 w-3.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 14 15"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            display: "block",
                            verticalAlign: "middle",
                            height: "0.875rem",
                            width: "0.875rem",
                            flexShrink: 0,
                          }}
                        >
                          <path
                            d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25"
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
                    <blockquote
                      className="text-gray-600 dark:text-gray-400 mt-6 flex-1 text-base"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "1.5rem",
                        flex: "1 1 0%",
                        fontSize: "1rem",
                        lineHeight: "1.5rem",
                        color: "rgb(75 85 99 / 1)",
                      }}
                    >
                      {" "}
                      Working with Aashish on URO ONE was a fantastic
                      experience. His ability to transform our vision into a
                      working product exceeded our expectations.{" "}
                    </blockquote>
                    <p
                      className="mt-8 font-medium"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "2rem",
                        fontWeight: 500,
                      }}
                    >
                      {" "}
                      Ratansingh -{" "}
                      <span
                        className="font-normal text-muted"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          fontWeight: 400,
                          color: "rgb(87 96 118 / 1)",
                        }}
                      >
                        {" "}
                        Founder, URO ONE{" "}
                      </span>
                    </p>
                  </div>
                  <div
                    className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2 mx-3 slick-slide slick-cloned"
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      marginLeft: "0.75rem",
                      marginRight: "0.75rem",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      borderRadius: "0.5rem",
                      backgroundColor: "rgb(240 242 245 / 1)",
                      padding: "1.5rem",
                      cssFloat: "left",
                      height: "100%",
                      minHeight: "1px",
                      display: "block",
                      width: "337px",
                    }}
                  >
                    <div
                      className="flex flex-wrap items-center justify-between gap-4"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                      }}
                    >
                      <div
                        className="flex flex-wrap items-center gap-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "center",
                          gap: "0.25rem",
                        }}
                      >
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                      </div>
                      <a
                        className="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-dark"
                        href="https://www.patelbailbonds.com/"
                        tabIndex="-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          textDecoration: "inherit",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          borderRadius: "0.25rem",
                          backgroundColor: "rgb(255 255 255 / 1)",
                          paddingLeft: "0.5rem",
                          paddingRight: "0.5rem",
                          paddingTop: "0.25rem",
                          paddingBottom: "0.25rem",
                          fontSize: "0.875rem",
                          lineHeight: 1,
                          color: "rgb(135 126 255 / 1)",
                          transitionProperty:
                            "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)",
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
                          Patel Bail Bonds
                        </span>
                        <svg
                          className="h-3.5 w-3.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 14 15"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            display: "block",
                            verticalAlign: "middle",
                            height: "0.875rem",
                            width: "0.875rem",
                            flexShrink: 0,
                          }}
                        >
                          <path
                            d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25"
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
                    <blockquote
                      className="text-gray-600 dark:text-gray-400 mt-6 flex-1 text-base"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "1.5rem",
                        flex: "1 1 0%",
                        fontSize: "1rem",
                        lineHeight: "1.5rem",
                        color: "rgb(75 85 99 / 1)",
                      }}
                    >
                      {" "}
                      Aashish's work on our bail bonds web application was
                      incredible. His attention to detail and focus on client
                      satisfaction make him a top developer.{" "}
                    </blockquote>
                    <p
                      className="mt-8 font-medium"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "2rem",
                        fontWeight: 500,
                      }}
                    >
                      {" "}
                      Patel Bail Bonds -{" "}
                      <span
                        className="font-normal text-muted"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          fontWeight: 400,
                          color: "rgb(87 96 118 / 1)",
                        }}
                      >
                        {" "}
                        Lakewood Bail Bonds{" "}
                      </span>
                    </p>
                  </div>
                  <div
                    className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2 mx-3 slick-slide slick-cloned"
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      marginLeft: "0.75rem",
                      marginRight: "0.75rem",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      borderRadius: "0.5rem",
                      backgroundColor: "rgb(240 242 245 / 1)",
                      padding: "1.5rem",
                      cssFloat: "left",
                      height: "100%",
                      minHeight: "1px",
                      display: "block",
                      width: "337px",
                    }}
                  >
                    <div
                      className="flex flex-wrap items-center justify-between gap-4"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                      }}
                    >
                      <div
                        className="flex flex-wrap items-center gap-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "center",
                          gap: "0.25rem",
                        }}
                      >
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <img
                          className="h-4 w-4 shrink-0"
                          alt="star"
                          src="https://aashish-bhagwat.creativehand.co.in/assets/icons/star-full.svg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "1rem",
                            width: "1rem",
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                      </div>
                      <a
                        className="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-dark"
                        href="https://www.dubaiclient.com/"
                        tabIndex="-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          textDecoration: "inherit",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          borderRadius: "0.25rem",
                          backgroundColor: "rgb(255 255 255 / 1)",
                          paddingLeft: "0.5rem",
                          paddingRight: "0.5rem",
                          paddingTop: "0.25rem",
                          paddingBottom: "0.25rem",
                          fontSize: "0.875rem",
                          lineHeight: 1,
                          color: "rgb(135 126 255 / 1)",
                          transitionProperty:
                            "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                          transitionTimingFunction:
                            "cubic-bezier(0.4, 0, 0.2, 1)",
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
                          Betting Application
                        </span>
                        <svg
                          className="h-3.5 w-3.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 14 15"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            display: "block",
                            verticalAlign: "middle",
                            height: "0.875rem",
                            width: "0.875rem",
                            flexShrink: 0,
                          }}
                        >
                          <path
                            d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25"
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
                    <blockquote
                      className="text-gray-600 dark:text-gray-400 mt-6 flex-1 text-base"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "1.5rem",
                        flex: "1 1 0%",
                        fontSize: "1rem",
                        lineHeight: "1.5rem",
                        color: "rgb(75 85 99 / 1)",
                      }}
                    >
                      {" "}
                      Aashish created a powerful betting application for us. His
                      technical skills and dedication were key to the project’s
                      success.{" "}
                    </blockquote>
                    <p
                      className="mt-8 font-medium"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        margin: "0px",
                        marginTop: "2rem",
                        fontWeight: 500,
                      }}
                    >
                      {" "}
                      Dubai Client -{" "}
                      <span
                        className="font-normal text-muted"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          fontWeight: 400,
                          color: "rgb(87 96 118 / 1)",
                        }}
                      >
                        {" "}
                        Founder, Betting Application{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="slick-next slick-arrow"
                type="button"
                aria-label="Next"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  margin: "0px",
                  fontFamily: "inherit",
                  fontFeatureSettings: "inherit",
                  fontVariationSettings: "inherit",
                  fontWeight: "inherit",
                  textTransform: "none",
                  appearance: "button",
                  background: "transparent",
                  padding: "0px",
                  border: "none",
                  outline: "none",
                  position: "absolute",
                  display: "block",
                  height: "20px",
                  width: "20px",
                  lineHeight: "0px",
                  fontSize: "0px",
                  cursor: "pointer",
                  backgroundImage: "initial",
                  backgroundColor: "transparent",
                  color: "transparent",
                  top: "50%",
                  transform: "translateY(-50%)",
                  right: "-25px",
                }}
              >
                Next
              </button>
            </ngx-slick-carousel>
          </div>
        </div>
        <div className="mt-10 lg:mt-14 border-0 border-solid border-gray-200 box-border">
          <h3 className="text-2xl font-medium text-gray-900 dark:text-light lg:text-3xl m-0 leading-9">
            Education History
          </h3>
          <div className="mt-8 space-y-4 border-0 border-solid border-gray-200 box-border">
            <div className="group relative grid grid-cols-1 items-center gap-4 rounded-lg border border-transparent bg-light p-6 transition hover:border-light hover:bg-white dark:bg-dark-2 dark:hover:border-primary dark:hover:bg-black md:grid-cols-4 xl:gap-10">
              <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:gap-6">
                <div>
                  <h5 className="font-medium leading-tight text-dark dark:text-light xl:text-lg xl:leading-tight">
                    Bachelor of Engineering (Computers)
                  </h5>
                  <p className="text-muted">2011 - 2016</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <svg
                  className="h-5 w-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 9.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z" />
                  <path d="m12 15.5 3.4 5.89 1.598-3.233 3.598.232-3.4-5.889m-10.394 0-3.4 5.89L7 18.157l1.598 3.232 3.4-5.889" />
                </svg>
                <h5 className="font-medium leading-tight text-dark dark:text-light">
                  5.3
                </h5>
              </div>

              <div className="text-right">
                <a className="inline-flex items-center justify-center gap-2 rounded bg-white px-3 py-2 text-center text-sm leading-none text-dark transition after:absolute after:inset-0 after:h-full after:w-full after:content-[''] hover:bg-light hover:text-primary dark:bg-dark dark:text-light/70 dark:hover:bg-dark-2 dark:hover:text-primary">
                  <span>JSPM College</span>
                  <svg
                    className="h-3.5 w-3.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 14 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25" />
                  </svg>
                </a>
              </div>
            </div>

            <div
              className="group relative grid grid-cols-1 items-center gap-4 rounded-lg border border-transparent bg-light p-6 transition hover:border-light hover:bg-white dark:bg-dark-2 dark:hover:border-primary dark:hover:bg-black md:grid-cols-4 xl:gap-10"
              style={{
                borderStyle: "solid",
                boxSizing: "border-box",
                position: "relative",
                display: "grid",
                alignItems: "center",
                borderRadius: "0.5rem",
                borderWidth: "1px",
                borderColor: "transparent",
                backgroundColor: "rgb(240 242 245 / 1)",
                padding: "1.5rem",
                transitionProperty:
                  "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                transitionDuration: "0.15s",
                gridTemplateColumns: "repeat(4, minmax(0px, 1fr))",
                gap: "2.5rem",
                marginTop: "calc(1rem * calc(1 - 0))",
                marginBottom: "calc(1rem * 0)",
              }}
            >
              <div
                className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:gap-6"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  display: "flex",
                  gridColumn: "span 2 / span 2",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "1.5rem",
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
                  <h5
                    className="font-medium leading-tight text-dark dark:text-light xl:text-lg xl:leading-tight"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      margin: "0px",
                      fontWeight: 500,
                      color: "rgb(25 25 35 / 1)",
                      fontSize: "1.125rem",
                      lineHeight: 1.25,
                    }}
                  >
                    {" "}
                    HSC{" "}
                  </h5>
                  <p
                    className="text-muted"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      margin: "0px",
                      color: "rgb(87 96 118 / 1)",
                    }}
                  >
                    2009 - 2011
                  </p>
                </div>
              </div>
              <div
                className="flex items-center gap-1.5"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                }}
              >
                <svg
                  className="h-5 w-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 25"
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
                    flexShrink: 0,
                  }}
                >
                  <path
                    d="M6 9.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                    }}
                  />
                  <path
                    d="m12 15.5 3.4 5.89 1.598-3.233 3.598.232-3.4-5.889m-10.394 0-3.4 5.89L7 18.157l1.598 3.232 3.4-5.889"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                    }}
                  />
                </svg>
                <h5
                  className="font-medium leading-tight text-dark dark:text-light"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    fontSize: "inherit",
                    margin: "0px",
                    fontWeight: 500,
                    lineHeight: 1.25,
                    color: "rgb(25 25 35 / 1)",
                  }}
                >
                  {" "}
                  77.83%{" "}
                </h5>
              </div>
              <div
                className="text-right"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  textAlign: "right",
                }}
              >
                <a
                  className="inline-flex items-center justify-center gap-2 rounded bg-white px-3 py-2 text-center text-sm leading-none text-dark transition after:absolute after:inset-0 after:h-full after:w-full after:content-[''] hover:bg-light hover:text-primary dark:bg-dark dark:text-light/70 dark:hover:bg-dark-2 dark:hover:text-primary"
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
                    borderRadius: "0.25rem",
                    backgroundColor: "rgb(255 255 255 / 1)",
                    paddingLeft: "0.75rem",
                    paddingRight: "0.75rem",
                    paddingTop: "0.5rem",
                    paddingBottom: "0.5rem",
                    textAlign: "center",
                    fontSize: "0.875rem",
                    lineHeight: 1,
                    color: "rgb(25 25 35 / 1)",
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
                    Pune University
                  </span>
                  <svg
                    className="h-3.5 w-3.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 14 15"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "block",
                      verticalAlign: "middle",
                      height: "0.875rem",
                      width: "0.875rem",
                      flexShrink: 0,
                    }}
                  >
                    <path
                      d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25"
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
            <div
              className="group relative grid grid-cols-1 items-center gap-4 rounded-lg border border-transparent bg-light p-6 transition hover:border-light hover:bg-white dark:bg-dark-2 dark:hover:border-primary dark:hover:bg-black md:grid-cols-4 xl:gap-10"
              style={{
                borderStyle: "solid",
                boxSizing: "border-box",
                position: "relative",
                display: "grid",
                alignItems: "center",
                borderRadius: "0.5rem",
                borderWidth: "1px",
                borderColor: "transparent",
                backgroundColor: "rgb(240 242 245 / 1)",
                padding: "1.5rem",
                transitionProperty:
                  "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                transitionDuration: "0.15s",
                gridTemplateColumns: "repeat(4, minmax(0px, 1fr))",
                gap: "2.5rem",
                marginTop: "calc(1rem * calc(1 - 0))",
                marginBottom: "calc(1rem * 0)",
              }}
            >
              <div
                className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:gap-6"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  display: "flex",
                  gridColumn: "span 2 / span 2",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "1.5rem",
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
                  <h5
                    className="font-medium leading-tight text-dark dark:text-light xl:text-lg xl:leading-tight"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      margin: "0px",
                      fontWeight: 500,
                      color: "rgb(25 25 35 / 1)",
                      fontSize: "1.125rem",
                      lineHeight: 1.25,
                    }}
                  >
                    {" "}
                    SSC{" "}
                  </h5>
                  <p
                    className="text-muted"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      margin: "0px",
                      color: "rgb(87 96 118 / 1)",
                    }}
                  >
                    2009
                  </p>
                </div>
              </div>
              <div
                className="flex items-center gap-1.5"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                }}
              >
                <svg
                  className="h-5 w-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 25"
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
                    flexShrink: 0,
                  }}
                >
                  <path
                    d="M6 9.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                    }}
                  />
                  <path
                    d="m12 15.5 3.4 5.89 1.598-3.233 3.598.232-3.4-5.889m-10.394 0-3.4 5.89L7 18.157l1.598 3.232 3.4-5.889"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                    }}
                  />
                </svg>
                <h5
                  className="font-medium leading-tight text-dark dark:text-light"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    fontSize: "inherit",
                    margin: "0px",
                    fontWeight: 500,
                    lineHeight: 1.25,
                    color: "rgb(25 25 35 / 1)",
                  }}
                >
                  {" "}
                  91.76%{" "}
                </h5>
              </div>
              <div
                className="text-right"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  textAlign: "right",
                }}
              >
                <a
                  className="inline-flex items-center justify-center gap-2 rounded bg-white px-3 py-2 text-center text-sm leading-none text-dark transition after:absolute after:inset-0 after:h-full after:w-full after:content-[''] hover:bg-light hover:text-primary dark:bg-dark dark:text-light/70 dark:hover:bg-dark-2 dark:hover:text-primary"
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
                    borderRadius: "0.25rem",
                    backgroundColor: "rgb(255 255 255 / 1)",
                    paddingLeft: "0.75rem",
                    paddingRight: "0.75rem",
                    paddingTop: "0.5rem",
                    paddingBottom: "0.5rem",
                    textAlign: "center",
                    fontSize: "0.875rem",
                    lineHeight: 1,
                    color: "rgb(25 25 35 / 1)",
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
                    Pune University
                  </span>
                  <svg
                    className="h-3.5 w-3.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 14 15"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      display: "block",
                      verticalAlign: "middle",
                      height: "0.875rem",
                      width: "0.875rem",
                      flexShrink: 0,
                    }}
                  >
                    <path
                      d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25"
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
        </div>
        <div
          className="mt-10 lg:mt-14"
          style={{
            borderWidth: "0px",
            borderStyle: "solid",
            borderColor: "rgb(229, 231, 235)",
            boxSizing: "border-box",
            marginTop: "3.5rem",
          }}
        >
          <div
            className="flex flex-wrap items-center justify-between gap-6"
            style={{
              borderWidth: "0px",
              borderStyle: "solid",
              borderColor: "rgb(229, 231, 235)",
              boxSizing: "border-box",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1.5rem",
            }}
          >
            <h3
              className="text-2xl font-medium text-dark dark:text-light lg:text-3xl"
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgb(229, 231, 235)",
                boxSizing: "border-box",
                margin: "0px",
                fontWeight: 500,
                color: "rgb(25 25 35 / 1)",
                fontSize: "1.875rem",
                lineHeight: "2.25rem",
              }}
            >
              {" "}
              Article and Publications{" "}
            </h3>
            <div
              className="flex items-center gap-2"
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgb(229, 231, 235)",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <button
                className="blog-carousel-button-prev grid h-9 w-9 place-content-center rounded-lg border border-muted/30 text-muted transition hover:border-primary hover:text-primary"
                aria-controls="swiper-wrapper-4137462dd78c10fff"
                aria-label="Previous slide"
                tabIndex="0"
                style={{
                  borderStyle: "solid",
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
                  appearance: "button",
                  backgroundColor: "transparent",
                  backgroundImage: "none",
                  cursor: "pointer",
                  display: "grid",
                  height: "2.25rem",
                  width: "2.25rem",
                  placeContent: "center",
                  borderRadius: "0.5rem",
                  borderWidth: "1px",
                  borderColor: "rgba(87, 96, 118, 0.3)",
                  color: "rgb(87 96 118 / 1)",
                  transitionProperty:
                    "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  transitionDuration: "0.15s",
                }}
              >
                <svg
                  className="h-5 w-5 shrink-0"
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
                    flexShrink: 0,
                  }}
                >
                  <path
                    d="M4.167 10h11.666M4.167 10l5 5m-5-5 5-5"
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
                className="blog-carousel-button-next grid h-9 w-9 place-content-center rounded-lg border border-muted/30 text-muted transition hover:border-primary hover:text-primary"
                aria-controls="swiper-wrapper-4137462dd78c10fff"
                aria-label="Next slide"
                tabIndex="0"
                style={{
                  borderStyle: "solid",
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
                  appearance: "button",
                  backgroundColor: "transparent",
                  backgroundImage: "none",
                  cursor: "pointer",
                  display: "grid",
                  height: "2.25rem",
                  width: "2.25rem",
                  placeContent: "center",
                  borderRadius: "0.5rem",
                  borderWidth: "1px",
                  borderColor: "rgba(87, 96, 118, 0.3)",
                  color: "rgb(87 96 118 / 1)",
                  transitionProperty:
                    "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  transitionDuration: "0.15s",
                }}
              >
                <svg
                  className="h-5 w-5 shrink-0"
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
                    flexShrink: 0,
                  }}
                >
                  <path
                    d="M4.167 10h11.666m-5 5 5-5m-5-5 5 5"
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
          <div
            className="mt-8"
            style={{
              borderWidth: "0px",
              borderStyle: "solid",
              borderColor: "rgb(229, 231, 235)",
              boxSizing: "border-box",
              marginTop: "2rem",
            }}
          >
            <ngx-slick-carousel
              className="carousel slick-initialized slick-slider"
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgb(229, 231, 235)",
                position: "relative",
                display: "block",
                boxSizing: "border-box",
                userSelect: "none",
                touchAction: "pan-y",
                WebkitTapHighlightColor: "transparent",
              }}
            >
              <button
                className="slick-prev slick-arrow"
                type="button"
                aria-label="Previous"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  margin: "0px",
                  fontFamily: "inherit",
                  fontFeatureSettings: "inherit",
                  fontVariationSettings: "inherit",
                  fontWeight: "inherit",
                  textTransform: "none",
                  appearance: "button",
                  background: "transparent",
                  padding: "0px",
                  border: "none",
                  outline: "none",
                  position: "absolute",
                  display: "block",
                  height: "20px",
                  width: "20px",
                  lineHeight: "0px",
                  fontSize: "0px",
                  cursor: "pointer",
                  backgroundImage: "initial",
                  backgroundColor: "transparent",
                  color: "transparent",
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: "-25px",
                }}
              >
                Previous
              </button>
              <div
                className="slick-list draggable"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  overflow: "hidden",
                  margin: "0px",
                  padding: "0px",
                  position: "relative",
                  display: "block",
                  transform: "translateZ(0px)",
                }}
              >
                <div
                  className="slick-track"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    position: "relative",
                    left: "0px",
                    top: "0px",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    transition: "transform 500ms",
                    opacity: 1,
                    width: "3610px",
                    transform: "translate3d(-2166px, 0px, 0px)",
                  }}
                >
                  <div
                    className="flex mx-4 slick-slide slick-cloned"
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      marginLeft: "1rem",
                      marginRight: "1rem",
                      cssFloat: "left",
                      height: "100%",
                      minHeight: "1px",
                      display: "block",
                      width: "329px",
                    }}
                  >
                    <div
                      className="relative"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        position: "relative",
                      }}
                    >
                      <a
                        className="cursor-pointer group block aspect-6/4 overflow-hidden rounded-lg"
                        tabIndex="-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          textDecoration: "inherit",
                          color: "inherit",
                          display: "block",
                          cursor: "pointer",
                          overflow: "hidden",
                          borderRadius: "0.5rem",
                          aspectRatio: "6 / 4",
                        }}
                      >
                        <img
                          className="h-full w-full rounded-lg object-cover transition duration-700 group-hover:scale-105"
                          alt="blog_image"
                          src="https://portfolio-api.creativehand.co.in/uploads/large_indistays_banner_upwork_e1d232d226.png"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "100%",
                            width: "100%",
                            borderRadius: "0.5rem",
                            objectFit: "cover",
                            transitionProperty:
                              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.7s",
                            display: "block",
                          }}
                        />
                      </a>
                      <div
                        className="absolute bottom-4 left-4 flex flex-wrap gap-2"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          position: "absolute",
                          bottom: "1rem",
                          left: "1rem",
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.5rem",
                        }}
                      >
                        <a
                          className="inline-flex items-center justify-center gap-2 rounded bg-white px-2 py-1 text-center text-xs leading-none text-primary shadow transition hover:bg-primary hover:text-white"
                          href="https://aashish-bhagwat.creativehand.co.in/#"
                          tabIndex="-1"
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
                            borderRadius: "0.25rem",
                            backgroundColor: "rgb(255 255 255 / 1)",
                            paddingLeft: "0.5rem",
                            paddingRight: "0.5rem",
                            paddingTop: "0.25rem",
                            paddingBottom: "0.25rem",
                            textAlign: "center",
                            fontSize: "0.75rem",
                            lineHeight: 1,
                            color: "rgb(135 126 255 / 1)",
                            boxShadow:
                              "var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)",
                            transitionProperty:
                              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.15s",
                          }}
                        >
                          {" "}
                          [object Object]{" "}
                        </a>
                      </div>
                    </div>
                    <div
                      className="mt-6 cursor-pointer"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        marginTop: "1.5rem",
                        cursor: "pointer",
                      }}
                    >
                      <h2
                        className="text-xl font-medium xl:text-2xl"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          fontWeight: 500,
                          fontSize: "1.5rem",
                          lineHeight: "2rem",
                        }}
                      >
                        <a
                          className="inline-block text-dark transition hover:text-primary dark:text-light/70 dark:hover:text-primary"
                          tabIndex="-1"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            textDecoration: "inherit",
                            display: "inline-block",
                            color: "rgb(25 25 35 / 1)",
                            transitionProperty:
                              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.15s",
                          }}
                        >
                          {" "}
                          Just for Testing{" "}
                        </a>
                      </h2>
                      <ul
                        className="mt-4 flex flex-wrap items-center gap-2"
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
                          flexWrap: "wrap",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <li
                          className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            position: "relative",
                            fontSize: "0.875rem",
                            lineHeight: "1.25rem",
                            color: "rgba(87, 96, 118, 0.5)",
                          }}
                        >
                          {" "}
                          15 Min read{" "}
                        </li>
                        <li
                          className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            position: "relative",
                            fontSize: "0.875rem",
                            lineHeight: "1.25rem",
                            color: "rgba(87, 96, 118, 0.5)",
                          }}
                        >
                          {" "}
                          Jan 1, 2025{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="flex mx-4 slick-slide slick-cloned"
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      marginLeft: "1rem",
                      marginRight: "1rem",
                      cssFloat: "left",
                      height: "100%",
                      minHeight: "1px",
                      display: "block",
                      width: "329px",
                    }}
                  >
                    <div
                      className="relative"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        position: "relative",
                      }}
                    >
                      <a
                        className="cursor-pointer group block aspect-6/4 overflow-hidden rounded-lg"
                        tabIndex="-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          textDecoration: "inherit",
                          color: "inherit",
                          display: "block",
                          cursor: "pointer",
                          overflow: "hidden",
                          borderRadius: "0.5rem",
                          aspectRatio: "6 / 4",
                        }}
                      >
                        <img
                          className="h-full w-full rounded-lg object-cover transition duration-700 group-hover:scale-105"
                          alt="blog_image"
                          src="https://portfolio-api.creativehand.co.in/uploads/large_blog_img_1_1_2078da2775.jpg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "100%",
                            width: "100%",
                            borderRadius: "0.5rem",
                            objectFit: "cover",
                            transitionProperty:
                              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.7s",
                            display: "block",
                          }}
                        />
                      </a>
                      <div
                        className="absolute bottom-4 left-4 flex flex-wrap gap-2"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          position: "absolute",
                          bottom: "1rem",
                          left: "1rem",
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.5rem",
                        }}
                      >
                        <a
                          className="inline-flex items-center justify-center gap-2 rounded bg-white px-2 py-1 text-center text-xs leading-none text-primary shadow transition hover:bg-primary hover:text-white"
                          href="https://aashish-bhagwat.creativehand.co.in/#"
                          tabIndex="-1"
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
                            borderRadius: "0.25rem",
                            backgroundColor: "rgb(255 255 255 / 1)",
                            paddingLeft: "0.5rem",
                            paddingRight: "0.5rem",
                            paddingTop: "0.25rem",
                            paddingBottom: "0.25rem",
                            textAlign: "center",
                            fontSize: "0.75rem",
                            lineHeight: 1,
                            color: "rgb(135 126 255 / 1)",
                            boxShadow:
                              "var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)",
                            transitionProperty:
                              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.15s",
                          }}
                        >
                          {" "}
                          [object Object]{" "}
                        </a>
                      </div>
                    </div>
                    <div
                      className="mt-6 cursor-pointer"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        marginTop: "1.5rem",
                        cursor: "pointer",
                      }}
                    >
                      <h2
                        className="text-xl font-medium xl:text-2xl"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          fontWeight: 500,
                          fontSize: "1.5rem",
                          lineHeight: "2rem",
                        }}
                      >
                        <a
                          className="inline-block text-dark transition hover:text-primary dark:text-light/70 dark:hover:text-primary"
                          tabIndex="-1"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            textDecoration: "inherit",
                            display: "inline-block",
                            color: "rgb(25 25 35 / 1)",
                            transitionProperty:
                              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.15s",
                          }}
                        >
                          {" "}
                          Want To Upgrade Your Brain? Stop Doing These 7 Things{" "}
                        </a>
                      </h2>
                      <ul
                        className="mt-4 flex flex-wrap items-center gap-2"
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
                          flexWrap: "wrap",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <li
                          className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            position: "relative",
                            fontSize: "0.875rem",
                            lineHeight: "1.25rem",
                            color: "rgba(87, 96, 118, 0.5)",
                          }}
                        >
                          {" "}
                          15 Min read{" "}
                        </li>
                        <li
                          className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            position: "relative",
                            fontSize: "0.875rem",
                            lineHeight: "1.25rem",
                            color: "rgba(87, 96, 118, 0.5)",
                          }}
                        >
                          {" "}
                          Jan 1, 2025{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="flex mx-4 slick-slide slick-current slick-active"
                    aria-hidden="false"
                    tabIndex="-1"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      marginLeft: "1rem",
                      marginRight: "1rem",
                      cssFloat: "left",
                      height: "100%",
                      minHeight: "1px",
                      display: "block",
                      width: "329px",
                    }}
                  >
                    <div
                      className="relative"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        position: "relative",
                      }}
                    >
                      <a
                        className="cursor-pointer group block aspect-6/4 overflow-hidden rounded-lg"
                        tabIndex="-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          textDecoration: "inherit",
                          color: "inherit",
                          display: "block",
                          cursor: "pointer",
                          overflow: "hidden",
                          borderRadius: "0.5rem",
                          aspectRatio: "6 / 4",
                        }}
                      >
                        <img
                          className="h-full w-full rounded-lg object-cover transition duration-700 group-hover:scale-105"
                          alt="blog_image"
                          src="https://portfolio-api.creativehand.co.in/uploads/large_creativehand_Business_Finance_b7434809cf.png"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "100%",
                            width: "100%",
                            borderRadius: "0.5rem",
                            objectFit: "cover",
                            transitionProperty:
                              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.7s",
                            display: "block",
                          }}
                        />
                      </a>
                      <div
                        className="absolute bottom-4 left-4 flex flex-wrap gap-2"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          position: "absolute",
                          bottom: "1rem",
                          left: "1rem",
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.5rem",
                        }}
                      >
                        <a
                          className="inline-flex items-center justify-center gap-2 rounded bg-white px-2 py-1 text-center text-xs leading-none text-primary shadow transition hover:bg-primary hover:text-white"
                          href="https://aashish-bhagwat.creativehand.co.in/#"
                          tabIndex="-1"
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
                            borderRadius: "0.25rem",
                            backgroundColor: "rgb(255 255 255 / 1)",
                            paddingLeft: "0.5rem",
                            paddingRight: "0.5rem",
                            paddingTop: "0.25rem",
                            paddingBottom: "0.25rem",
                            textAlign: "center",
                            fontSize: "0.75rem",
                            lineHeight: 1,
                            color: "rgb(135 126 255 / 1)",
                            boxShadow:
                              "var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)",
                            transitionProperty:
                              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.15s",
                          }}
                        >
                          {" "}
                          [object Object]{" "}
                        </a>
                      </div>
                    </div>
                    <div
                      className="mt-6 cursor-pointer"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        marginTop: "1.5rem",
                        cursor: "pointer",
                      }}
                    >
                      <h2
                        className="text-xl font-medium xl:text-2xl"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          fontWeight: 500,
                          fontSize: "1.5rem",
                          lineHeight: "2rem",
                        }}
                      >
                        <a
                          className="inline-block text-dark transition hover:text-primary dark:text-light/70 dark:hover:text-primary"
                          tabIndex="-1"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            textDecoration: "inherit",
                            display: "inline-block",
                            color: "rgb(25 25 35 / 1)",
                            transitionProperty:
                              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.15s",
                          }}
                        >
                          {" "}
                          My Next Blog{" "}
                        </a>
                      </h2>
                      <ul
                        className="mt-4 flex flex-wrap items-center gap-2"
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
                          flexWrap: "wrap",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <li
                          className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            position: "relative",
                            fontSize: "0.875rem",
                            lineHeight: "1.25rem",
                            color: "rgba(87, 96, 118, 0.5)",
                          }}
                        >
                          {" "}
                          15 Min read{" "}
                        </li>
                        <li
                          className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            position: "relative",
                            fontSize: "0.875rem",
                            lineHeight: "1.25rem",
                            color: "rgba(87, 96, 118, 0.5)",
                          }}
                        >
                          {" "}
                          Jan 1, 2025{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="flex mx-4 slick-slide slick-active"
                    aria-hidden="false"
                    tabIndex="-1"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      marginLeft: "1rem",
                      marginRight: "1rem",
                      cssFloat: "left",
                      height: "100%",
                      minHeight: "1px",
                      display: "block",
                      width: "329px",
                    }}
                  >
                    <div
                      className="relative"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        position: "relative",
                      }}
                    >
                      <a
                        className="cursor-pointer group block aspect-6/4 overflow-hidden rounded-lg"
                        tabIndex="-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          textDecoration: "inherit",
                          color: "inherit",
                          display: "block",
                          cursor: "pointer",
                          overflow: "hidden",
                          borderRadius: "0.5rem",
                          aspectRatio: "6 / 4",
                        }}
                      >
                        <img
                          className="h-full w-full rounded-lg object-cover transition duration-700 group-hover:scale-105"
                          alt="blog_image"
                          src="https://portfolio-api.creativehand.co.in/uploads/large_community_bg_f97b4d79bf.png"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "100%",
                            width: "100%",
                            borderRadius: "0.5rem",
                            objectFit: "cover",
                            transitionProperty:
                              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.7s",
                            display: "block",
                          }}
                        />
                      </a>
                      <div
                        className="absolute bottom-4 left-4 flex flex-wrap gap-2"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          position: "absolute",
                          bottom: "1rem",
                          left: "1rem",
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.5rem",
                        }}
                      >
                        <a
                          className="inline-flex items-center justify-center gap-2 rounded bg-white px-2 py-1 text-center text-xs leading-none text-primary shadow transition hover:bg-primary hover:text-white"
                          href="https://aashish-bhagwat.creativehand.co.in/#"
                          tabIndex="-1"
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
                            borderRadius: "0.25rem",
                            backgroundColor: "rgb(255 255 255 / 1)",
                            paddingLeft: "0.5rem",
                            paddingRight: "0.5rem",
                            paddingTop: "0.25rem",
                            paddingBottom: "0.25rem",
                            textAlign: "center",
                            fontSize: "0.75rem",
                            lineHeight: 1,
                            color: "rgb(135 126 255 / 1)",
                            boxShadow:
                              "var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)",
                            transitionProperty:
                              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.15s",
                          }}
                        >
                          {" "}
                          [object Object]{" "}
                        </a>
                      </div>
                    </div>
                    <div
                      className="mt-6 cursor-pointer"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        marginTop: "1.5rem",
                        cursor: "pointer",
                      }}
                    >
                      <h2
                        className="text-xl font-medium xl:text-2xl"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          fontWeight: 500,
                          fontSize: "1.5rem",
                          lineHeight: "2rem",
                        }}
                      >
                        <a
                          className="inline-block text-dark transition hover:text-primary dark:text-light/70 dark:hover:text-primary"
                          tabIndex="-1"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            textDecoration: "inherit",
                            display: "inline-block",
                            color: "rgb(25 25 35 / 1)",
                            transitionProperty:
                              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.15s",
                          }}
                        >
                          {" "}
                          3rd Blog{" "}
                        </a>
                      </h2>
                      <ul
                        className="mt-4 flex flex-wrap items-center gap-2"
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
                          flexWrap: "wrap",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <li
                          className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            position: "relative",
                            fontSize: "0.875rem",
                            lineHeight: "1.25rem",
                            color: "rgba(87, 96, 118, 0.5)",
                          }}
                        >
                          {" "}
                          15 Min read{" "}
                        </li>
                        <li
                          className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            position: "relative",
                            fontSize: "0.875rem",
                            lineHeight: "1.25rem",
                            color: "rgba(87, 96, 118, 0.5)",
                          }}
                        >
                          {" "}
                          Jan 1, 2025{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="flex mx-4 slick-slide"
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      marginLeft: "1rem",
                      marginRight: "1rem",
                      cssFloat: "left",
                      height: "100%",
                      minHeight: "1px",
                      display: "block",
                      width: "329px",
                    }}
                  >
                    <div
                      className="relative"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        position: "relative",
                      }}
                    >
                      <a
                        className="cursor-pointer group block aspect-6/4 overflow-hidden rounded-lg"
                        tabIndex="-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          textDecoration: "inherit",
                          color: "inherit",
                          display: "block",
                          cursor: "pointer",
                          overflow: "hidden",
                          borderRadius: "0.5rem",
                          aspectRatio: "6 / 4",
                        }}
                      >
                        <img
                          className="h-full w-full rounded-lg object-cover transition duration-700 group-hover:scale-105"
                          alt="blog_image"
                          src="https://portfolio-api.creativehand.co.in/uploads/large_indistays_banner_upwork_e1d232d226.png"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "100%",
                            width: "100%",
                            borderRadius: "0.5rem",
                            objectFit: "cover",
                            transitionProperty:
                              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.7s",
                            display: "block",
                          }}
                        />
                      </a>
                      <div
                        className="absolute bottom-4 left-4 flex flex-wrap gap-2"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          position: "absolute",
                          bottom: "1rem",
                          left: "1rem",
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.5rem",
                        }}
                      >
                        <a
                          className="inline-flex items-center justify-center gap-2 rounded bg-white px-2 py-1 text-center text-xs leading-none text-primary shadow transition hover:bg-primary hover:text-white"
                          href="https://aashish-bhagwat.creativehand.co.in/#"
                          tabIndex="-1"
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
                            borderRadius: "0.25rem",
                            backgroundColor: "rgb(255 255 255 / 1)",
                            paddingLeft: "0.5rem",
                            paddingRight: "0.5rem",
                            paddingTop: "0.25rem",
                            paddingBottom: "0.25rem",
                            textAlign: "center",
                            fontSize: "0.75rem",
                            lineHeight: 1,
                            color: "rgb(135 126 255 / 1)",
                            boxShadow:
                              "var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)",
                            transitionProperty:
                              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.15s",
                          }}
                        >
                          {" "}
                          [object Object]{" "}
                        </a>
                      </div>
                    </div>
                    <div
                      className="mt-6 cursor-pointer"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        marginTop: "1.5rem",
                        cursor: "pointer",
                      }}
                    >
                      <h2
                        className="text-xl font-medium xl:text-2xl"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          fontWeight: 500,
                          fontSize: "1.5rem",
                          lineHeight: "2rem",
                        }}
                      >
                        <a
                          className="inline-block text-dark transition hover:text-primary dark:text-light/70 dark:hover:text-primary"
                          tabIndex="-1"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            textDecoration: "inherit",
                            display: "inline-block",
                            color: "rgb(25 25 35 / 1)",
                            transitionProperty:
                              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.15s",
                          }}
                        >
                          {" "}
                          Just for Testing{" "}
                        </a>
                      </h2>
                      <ul
                        className="mt-4 flex flex-wrap items-center gap-2"
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
                          flexWrap: "wrap",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <li
                          className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            position: "relative",
                            fontSize: "0.875rem",
                            lineHeight: "1.25rem",
                            color: "rgba(87, 96, 118, 0.5)",
                          }}
                        >
                          {" "}
                          15 Min read{" "}
                        </li>
                        <li
                          className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            position: "relative",
                            fontSize: "0.875rem",
                            lineHeight: "1.25rem",
                            color: "rgba(87, 96, 118, 0.5)",
                          }}
                        >
                          {" "}
                          Jan 1, 2025{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="flex mx-4 slick-slide"
                    aria-hidden="true"
                    tabIndex="0"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      marginLeft: "1rem",
                      marginRight: "1rem",
                      cssFloat: "left",
                      height: "100%",
                      minHeight: "1px",
                      display: "block",
                      width: "329px",
                    }}
                  >
                    <div
                      className="relative"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        position: "relative",
                      }}
                    >
                      <a
                        className="cursor-pointer group block aspect-6/4 overflow-hidden rounded-lg"
                        tabIndex="0"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          textDecoration: "inherit",
                          color: "inherit",
                          display: "block",
                          cursor: "pointer",
                          overflow: "hidden",
                          borderRadius: "0.5rem",
                          aspectRatio: "6 / 4",
                        }}
                      >
                        <img
                          className="h-full w-full rounded-lg object-cover transition duration-700 group-hover:scale-105"
                          alt="blog_image"
                          src="https://portfolio-api.creativehand.co.in/uploads/large_blog_img_1_1_2078da2775.jpg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "100%",
                            width: "100%",
                            borderRadius: "0.5rem",
                            objectFit: "cover",
                            transitionProperty:
                              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.7s",
                            display: "block",
                          }}
                        />
                      </a>
                      <div
                        className="absolute bottom-4 left-4 flex flex-wrap gap-2"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          position: "absolute",
                          bottom: "1rem",
                          left: "1rem",
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.5rem",
                        }}
                      >
                        <a
                          className="inline-flex items-center justify-center gap-2 rounded bg-white px-2 py-1 text-center text-xs leading-none text-primary shadow transition hover:bg-primary hover:text-white"
                          href="https://aashish-bhagwat.creativehand.co.in/#"
                          tabIndex="0"
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
                            borderRadius: "0.25rem",
                            backgroundColor: "rgb(255 255 255 / 1)",
                            paddingLeft: "0.5rem",
                            paddingRight: "0.5rem",
                            paddingTop: "0.25rem",
                            paddingBottom: "0.25rem",
                            textAlign: "center",
                            fontSize: "0.75rem",
                            lineHeight: 1,
                            color: "rgb(135 126 255 / 1)",
                            boxShadow:
                              "var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)",
                            transitionProperty:
                              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.15s",
                          }}
                        >
                          {" "}
                          [object Object]{" "}
                        </a>
                      </div>
                    </div>
                    <div
                      className="mt-6 cursor-pointer"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        marginTop: "1.5rem",
                        cursor: "pointer",
                      }}
                    >
                      <h2
                        className="text-xl font-medium xl:text-2xl"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          fontWeight: 500,
                          fontSize: "1.5rem",
                          lineHeight: "2rem",
                        }}
                      >
                        <a
                          className="inline-block text-dark transition hover:text-primary dark:text-light/70 dark:hover:text-primary"
                          tabIndex="0"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            textDecoration: "inherit",
                            display: "inline-block",
                            color: "rgb(25 25 35 / 1)",
                            transitionProperty:
                              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.15s",
                          }}
                        >
                          {" "}
                          Want To Upgrade Your Brain? Stop Doing These 7 Things{" "}
                        </a>
                      </h2>
                      <ul
                        className="mt-4 flex flex-wrap items-center gap-2"
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
                          flexWrap: "wrap",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <li
                          className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            position: "relative",
                            fontSize: "0.875rem",
                            lineHeight: "1.25rem",
                            color: "rgba(87, 96, 118, 0.5)",
                          }}
                        >
                          {" "}
                          15 Min read{" "}
                        </li>
                        <li
                          className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            position: "relative",
                            fontSize: "0.875rem",
                            lineHeight: "1.25rem",
                            color: "rgba(87, 96, 118, 0.5)",
                          }}
                        >
                          {" "}
                          Jan 1, 2025{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="flex mx-4 slick-slide slick-cloned"
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      marginLeft: "1rem",
                      marginRight: "1rem",
                      cssFloat: "left",
                      height: "100%",
                      minHeight: "1px",
                      display: "block",
                      width: "329px",
                    }}
                  >
                    <div
                      className="relative"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        position: "relative",
                      }}
                    >
                      <a
                        className="cursor-pointer group block aspect-6/4 overflow-hidden rounded-lg"
                        tabIndex="0"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          textDecoration: "inherit",
                          color: "inherit",
                          display: "block",
                          cursor: "pointer",
                          overflow: "hidden",
                          borderRadius: "0.5rem",
                          aspectRatio: "6 / 4",
                        }}
                      >
                        <img
                          className="h-full w-full rounded-lg object-cover transition duration-700 group-hover:scale-105"
                          alt="blog_image"
                          src="https://portfolio-api.creativehand.co.in/uploads/large_creativehand_Business_Finance_b7434809cf.png"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "100%",
                            width: "100%",
                            borderRadius: "0.5rem",
                            objectFit: "cover",
                            transitionProperty:
                              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.7s",
                            display: "block",
                          }}
                        />
                      </a>
                      <div
                        className="absolute bottom-4 left-4 flex flex-wrap gap-2"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          position: "absolute",
                          bottom: "1rem",
                          left: "1rem",
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.5rem",
                        }}
                      >
                        <a
                          className="inline-flex items-center justify-center gap-2 rounded bg-white px-2 py-1 text-center text-xs leading-none text-primary shadow transition hover:bg-primary hover:text-white"
                          href="https://aashish-bhagwat.creativehand.co.in/#"
                          tabIndex="0"
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
                            borderRadius: "0.25rem",
                            backgroundColor: "rgb(255 255 255 / 1)",
                            paddingLeft: "0.5rem",
                            paddingRight: "0.5rem",
                            paddingTop: "0.25rem",
                            paddingBottom: "0.25rem",
                            textAlign: "center",
                            fontSize: "0.75rem",
                            lineHeight: 1,
                            color: "rgb(135 126 255 / 1)",
                            boxShadow:
                              "var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)",
                            transitionProperty:
                              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.15s",
                          }}
                        >
                          {" "}
                          [object Object]{" "}
                        </a>
                      </div>
                    </div>
                    <div
                      className="mt-6 cursor-pointer"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        marginTop: "1.5rem",
                        cursor: "pointer",
                      }}
                    >
                      <h2
                        className="text-xl font-medium xl:text-2xl"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          fontWeight: 500,
                          fontSize: "1.5rem",
                          lineHeight: "2rem",
                        }}
                      >
                        <a
                          className="inline-block text-dark transition hover:text-primary dark:text-light/70 dark:hover:text-primary"
                          tabIndex="0"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            textDecoration: "inherit",
                            display: "inline-block",
                            color: "rgb(25 25 35 / 1)",
                            transitionProperty:
                              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.15s",
                          }}
                        >
                          {" "}
                          My Next Blog{" "}
                        </a>
                      </h2>
                      <ul
                        className="mt-4 flex flex-wrap items-center gap-2"
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
                          flexWrap: "wrap",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <li
                          className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            position: "relative",
                            fontSize: "0.875rem",
                            lineHeight: "1.25rem",
                            color: "rgba(87, 96, 118, 0.5)",
                          }}
                        >
                          {" "}
                          15 Min read{" "}
                        </li>
                        <li
                          className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            position: "relative",
                            fontSize: "0.875rem",
                            lineHeight: "1.25rem",
                            color: "rgba(87, 96, 118, 0.5)",
                          }}
                        >
                          {" "}
                          Jan 1, 2025{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="flex mx-4 slick-slide slick-cloned"
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      marginLeft: "1rem",
                      marginRight: "1rem",
                      cssFloat: "left",
                      height: "100%",
                      minHeight: "1px",
                      display: "block",
                      width: "329px",
                    }}
                  >
                    <div
                      className="relative"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        position: "relative",
                      }}
                    >
                      <a
                        className="cursor-pointer group block aspect-6/4 overflow-hidden rounded-lg"
                        tabIndex="-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          textDecoration: "inherit",
                          color: "inherit",
                          display: "block",
                          cursor: "pointer",
                          overflow: "hidden",
                          borderRadius: "0.5rem",
                          aspectRatio: "6 / 4",
                        }}
                      >
                        <img
                          className="h-full w-full rounded-lg object-cover transition duration-700 group-hover:scale-105"
                          alt="blog_image"
                          src="https://portfolio-api.creativehand.co.in/uploads/large_community_bg_f97b4d79bf.png"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "100%",
                            width: "100%",
                            borderRadius: "0.5rem",
                            objectFit: "cover",
                            transitionProperty:
                              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.7s",
                            display: "block",
                          }}
                        />
                      </a>
                      <div
                        className="absolute bottom-4 left-4 flex flex-wrap gap-2"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          position: "absolute",
                          bottom: "1rem",
                          left: "1rem",
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.5rem",
                        }}
                      >
                        <a
                          className="inline-flex items-center justify-center gap-2 rounded bg-white px-2 py-1 text-center text-xs leading-none text-primary shadow transition hover:bg-primary hover:text-white"
                          href="https://aashish-bhagwat.creativehand.co.in/#"
                          tabIndex="-1"
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
                            borderRadius: "0.25rem",
                            backgroundColor: "rgb(255 255 255 / 1)",
                            paddingLeft: "0.5rem",
                            paddingRight: "0.5rem",
                            paddingTop: "0.25rem",
                            paddingBottom: "0.25rem",
                            textAlign: "center",
                            fontSize: "0.75rem",
                            lineHeight: 1,
                            color: "rgb(135 126 255 / 1)",
                            boxShadow:
                              "var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)",
                            transitionProperty:
                              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.15s",
                          }}
                        >
                          {" "}
                          [object Object]{" "}
                        </a>
                      </div>
                    </div>
                    <div
                      className="mt-6 cursor-pointer"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        marginTop: "1.5rem",
                        cursor: "pointer",
                      }}
                    >
                      <h2
                        className="text-xl font-medium xl:text-2xl"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          fontWeight: 500,
                          fontSize: "1.5rem",
                          lineHeight: "2rem",
                        }}
                      >
                        <a
                          className="inline-block text-dark transition hover:text-primary dark:text-light/70 dark:hover:text-primary"
                          tabIndex="-1"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            textDecoration: "inherit",
                            display: "inline-block",
                            color: "rgb(25 25 35 / 1)",
                            transitionProperty:
                              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.15s",
                          }}
                        >
                          {" "}
                          3rd Blog{" "}
                        </a>
                      </h2>
                      <ul
                        className="mt-4 flex flex-wrap items-center gap-2"
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
                          flexWrap: "wrap",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <li
                          className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            position: "relative",
                            fontSize: "0.875rem",
                            lineHeight: "1.25rem",
                            color: "rgba(87, 96, 118, 0.5)",
                          }}
                        >
                          {" "}
                          15 Min read{" "}
                        </li>
                        <li
                          className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            position: "relative",
                            fontSize: "0.875rem",
                            lineHeight: "1.25rem",
                            color: "rgba(87, 96, 118, 0.5)",
                          }}
                        >
                          {" "}
                          Jan 1, 2025{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="flex mx-4 slick-slide slick-cloned"
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      marginLeft: "1rem",
                      marginRight: "1rem",
                      cssFloat: "left",
                      height: "100%",
                      minHeight: "1px",
                      display: "block",
                      width: "329px",
                    }}
                  >
                    <div
                      className="relative"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        position: "relative",
                      }}
                    >
                      <a
                        className="cursor-pointer group block aspect-6/4 overflow-hidden rounded-lg"
                        tabIndex="-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          textDecoration: "inherit",
                          color: "inherit",
                          display: "block",
                          cursor: "pointer",
                          overflow: "hidden",
                          borderRadius: "0.5rem",
                          aspectRatio: "6 / 4",
                        }}
                      >
                        <img
                          className="h-full w-full rounded-lg object-cover transition duration-700 group-hover:scale-105"
                          alt="blog_image"
                          src="https://portfolio-api.creativehand.co.in/uploads/large_indistays_banner_upwork_e1d232d226.png"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "100%",
                            width: "100%",
                            borderRadius: "0.5rem",
                            objectFit: "cover",
                            transitionProperty:
                              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.7s",
                            display: "block",
                          }}
                        />
                      </a>
                      <div
                        className="absolute bottom-4 left-4 flex flex-wrap gap-2"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          position: "absolute",
                          bottom: "1rem",
                          left: "1rem",
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.5rem",
                        }}
                      >
                        <a
                          className="inline-flex items-center justify-center gap-2 rounded bg-white px-2 py-1 text-center text-xs leading-none text-primary shadow transition hover:bg-primary hover:text-white"
                          href="https://aashish-bhagwat.creativehand.co.in/#"
                          tabIndex="-1"
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
                            borderRadius: "0.25rem",
                            backgroundColor: "rgb(255 255 255 / 1)",
                            paddingLeft: "0.5rem",
                            paddingRight: "0.5rem",
                            paddingTop: "0.25rem",
                            paddingBottom: "0.25rem",
                            textAlign: "center",
                            fontSize: "0.75rem",
                            lineHeight: 1,
                            color: "rgb(135 126 255 / 1)",
                            boxShadow:
                              "var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)",
                            transitionProperty:
                              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.15s",
                          }}
                        >
                          {" "}
                          [object Object]{" "}
                        </a>
                      </div>
                    </div>
                    <div
                      className="mt-6 cursor-pointer"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        marginTop: "1.5rem",
                        cursor: "pointer",
                      }}
                    >
                      <h2
                        className="text-xl font-medium xl:text-2xl"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          fontWeight: 500,
                          fontSize: "1.5rem",
                          lineHeight: "2rem",
                        }}
                      >
                        <a
                          className="inline-block text-dark transition hover:text-primary dark:text-light/70 dark:hover:text-primary"
                          tabIndex="-1"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            textDecoration: "inherit",
                            display: "inline-block",
                            color: "rgb(25 25 35 / 1)",
                            transitionProperty:
                              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.15s",
                          }}
                        >
                          {" "}
                          Just for Testing{" "}
                        </a>
                      </h2>
                      <ul
                        className="mt-4 flex flex-wrap items-center gap-2"
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
                          flexWrap: "wrap",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <li
                          className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            position: "relative",
                            fontSize: "0.875rem",
                            lineHeight: "1.25rem",
                            color: "rgba(87, 96, 118, 0.5)",
                          }}
                        >
                          {" "}
                          15 Min read{" "}
                        </li>
                        <li
                          className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            position: "relative",
                            fontSize: "0.875rem",
                            lineHeight: "1.25rem",
                            color: "rgba(87, 96, 118, 0.5)",
                          }}
                        >
                          {" "}
                          Jan 1, 2025{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="flex mx-4 slick-slide slick-cloned"
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgb(229, 231, 235)",
                      boxSizing: "border-box",
                      marginLeft: "1rem",
                      marginRight: "1rem",
                      cssFloat: "left",
                      height: "100%",
                      minHeight: "1px",
                      display: "block",
                      width: "329px",
                    }}
                  >
                    <div
                      className="relative"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        position: "relative",
                      }}
                    >
                      <a
                        className="cursor-pointer group block aspect-6/4 overflow-hidden rounded-lg"
                        tabIndex="-1"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          textDecoration: "inherit",
                          color: "inherit",
                          display: "block",
                          cursor: "pointer",
                          overflow: "hidden",
                          borderRadius: "0.5rem",
                          aspectRatio: "6 / 4",
                        }}
                      >
                        <img
                          className="h-full w-full rounded-lg object-cover transition duration-700 group-hover:scale-105"
                          alt="blog_image"
                          src="https://portfolio-api.creativehand.co.in/uploads/large_blog_img_1_1_2078da2775.jpg"
                          title="image"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "100%",
                            width: "100%",
                            borderRadius: "0.5rem",
                            objectFit: "cover",
                            transitionProperty:
                              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.7s",
                            display: "block",
                          }}
                        />
                      </a>
                      <div
                        className="absolute bottom-4 left-4 flex flex-wrap gap-2"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          position: "absolute",
                          bottom: "1rem",
                          left: "1rem",
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.5rem",
                        }}
                      >
                        <a
                          className="inline-flex items-center justify-center gap-2 rounded bg-white px-2 py-1 text-center text-xs leading-none text-primary shadow transition hover:bg-primary hover:text-white"
                          href="https://aashish-bhagwat.creativehand.co.in/#"
                          tabIndex="-1"
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
                            borderRadius: "0.25rem",
                            backgroundColor: "rgb(255 255 255 / 1)",
                            paddingLeft: "0.5rem",
                            paddingRight: "0.5rem",
                            paddingTop: "0.25rem",
                            paddingBottom: "0.25rem",
                            textAlign: "center",
                            fontSize: "0.75rem",
                            lineHeight: 1,
                            color: "rgb(135 126 255 / 1)",
                            boxShadow:
                              "var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)",
                            transitionProperty:
                              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.15s",
                          }}
                        >
                          {" "}
                          [object Object]{" "}
                        </a>
                      </div>
                    </div>
                    <div
                      className="mt-6 cursor-pointer"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgb(229, 231, 235)",
                        boxSizing: "border-box",
                        marginTop: "1.5rem",
                        cursor: "pointer",
                      }}
                    >
                      <h2
                        className="text-xl font-medium xl:text-2xl"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgb(229, 231, 235)",
                          boxSizing: "border-box",
                          margin: "0px",
                          fontWeight: 500,
                          fontSize: "1.5rem",
                          lineHeight: "2rem",
                        }}
                      >
                        <a
                          className="inline-block text-dark transition hover:text-primary dark:text-light/70 dark:hover:text-primary"
                          tabIndex="-1"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            textDecoration: "inherit",
                            display: "inline-block",
                            color: "rgb(25 25 35 / 1)",
                            transitionProperty:
                              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                            transitionTimingFunction:
                              "cubic-bezier(0.4, 0, 0.2, 1)",
                            transitionDuration: "0.15s",
                          }}
                        >
                          {" "}
                          Want To Upgrade Your Brain? Stop Doing These 7 Things{" "}
                        </a>
                      </h2>
                      <ul
                        className="mt-4 flex flex-wrap items-center gap-2"
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
                          flexWrap: "wrap",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <li
                          className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            position: "relative",
                            fontSize: "0.875rem",
                            lineHeight: "1.25rem",
                            color: "rgba(87, 96, 118, 0.5)",
                          }}
                        >
                          {" "}
                          15 Min read{" "}
                        </li>
                        <li
                          className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgb(229, 231, 235)",
                            boxSizing: "border-box",
                            position: "relative",
                            fontSize: "0.875rem",
                            lineHeight: "1.25rem",
                            color: "rgba(87, 96, 118, 0.5)",
                          }}
                        >
                          {" "}
                          Jan 1, 2025{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="slick-next slick-arrow"
                type="button"
                aria-label="Next"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  margin: "0px",
                  fontFamily: "inherit",
                  fontFeatureSettings: "inherit",
                  fontVariationSettings: "inherit",
                  fontWeight: "inherit",
                  textTransform: "none",
                  appearance: "button",
                  background: "transparent",
                  padding: "0px",
                  border: "none",
                  outline: "none",
                  position: "absolute",
                  display: "block",
                  height: "20px",
                  width: "20px",
                  lineHeight: "0px",
                  fontSize: "0px",
                  cursor: "pointer",
                  backgroundImage: "initial",
                  backgroundColor: "transparent",
                  color: "transparent",
                  top: "50%",
                  transform: "translateY(-50%)",
                  right: "-25px",
                }}
              >
                Next
              </button>
            </ngx-slick-carousel>
          </div>
        </div>
        <div
          className="mt-10 lg:mt-14"
          style={{
            borderWidth: "0px",
            borderStyle: "solid",
            borderColor: "rgb(229, 231, 235)",
            boxSizing: "border-box",
            marginTop: "3.5rem",
          }}
        >
          <div
            className="group flex gap-6 overflow-hidden rounded-lg bg-light p-6 dark:bg-dark-2"
            style={{
              borderWidth: "0px",
              borderStyle: "solid",
              borderColor: "rgb(229, 231, 235)",
              boxSizing: "border-box",
              display: "flex",
              gap: "1.5rem",
              overflow: "hidden",
              borderRadius: "0.5rem",
              backgroundColor: "rgb(240 242 245 / 1)",
              padding: "1.5rem",
            }}
          >
            <div
              className="relative flex min-w-full shrink-0 animate-infinite-scroll gap-6 group-hover:[animation-play-state:paused]"
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgb(229, 231, 235)",
                boxSizing: "border-box",
                position: "relative",
                display: "flex",
                minWidth: "100%",
                flexShrink: 0,
                gap: "1.5rem",
                animation: "10s linear 0s infinite normal none running scroll",
              }}
            >
              <a
                className="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]"
                href="https://aashish-bhagwat.creativehand.co.in/contact.html"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  textDecoration: "inherit",
                  position: "relative",
                  display: "inline-block",
                  whiteSpace: "nowrap",
                  lineHeight: "2.25rem",
                  fontWeight: 500,
                  color: "rgb(87 96 118 / 1)",
                  transitionProperty:
                    "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  transitionDuration: "0.15s",
                  fontSize: "40px",
                }}
              >
                {" "}
                Let's 👋 Work Together{" "}
              </a>
              <a
                className="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]"
                href="https://aashish-bhagwat.creativehand.co.in/contact.html"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  textDecoration: "inherit",
                  position: "relative",
                  display: "inline-block",
                  whiteSpace: "nowrap",
                  lineHeight: "2.25rem",
                  fontWeight: 500,
                  color: "rgb(87 96 118 / 1)",
                  transitionProperty:
                    "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  transitionDuration: "0.15s",
                  fontSize: "40px",
                }}
              >
                {" "}
                Let's 👋 Work Together{" "}
              </a>
            </div>
            <div
              className="relative flex min-w-full shrink-0 animate-infinite-scroll gap-6 group-hover:[animation-play-state:paused]"
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgb(229, 231, 235)",
                boxSizing: "border-box",
                position: "relative",
                display: "flex",
                minWidth: "100%",
                flexShrink: 0,
                gap: "1.5rem",
                animation: "10s linear 0s infinite normal none running scroll",
              }}
            >
              <a
                className="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]"
                href="https://aashish-bhagwat.creativehand.co.in/contact.html"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  textDecoration: "inherit",
                  position: "relative",
                  display: "inline-block",
                  whiteSpace: "nowrap",
                  lineHeight: "2.25rem",
                  fontWeight: 500,
                  color: "rgb(87 96 118 / 1)",
                  transitionProperty:
                    "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  transitionDuration: "0.15s",
                  fontSize: "40px",
                }}
              >
                {" "}
                Let's 👋 Work Together{" "}
              </a>
              <a
                className="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]"
                href="https://aashish-bhagwat.creativehand.co.in/contact.html"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  textDecoration: "inherit",
                  position: "relative",
                  display: "inline-block",
                  whiteSpace: "nowrap",
                  lineHeight: "2.25rem",
                  fontWeight: 500,
                  color: "rgb(87 96 118 / 1)",
                  transitionProperty:
                    "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  transitionDuration: "0.15s",
                  fontSize: "40px",
                }}
              >
                {" "}
                Let's 👋 Work Together{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
