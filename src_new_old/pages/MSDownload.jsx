import React from "react";
import { SideNav, TopNav } from "../components";
import word from "../assets/word.png";
import book from "../assets/dummyBook.png";

const MSDownload = () => {
  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">
            <div
              className="publish-container"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <section>
                <div
                  className="inner-flex"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    margin: "20px auto",
                    width: "fit-content",
                  }}
                >
                  <h5
                    style={{
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "rgba(0, 22, 51, 0.7)",
                    }}
                  >
                    Download
                  </h5>
                  <img src={word} alt="word image" />
                </div>
                <article
                  className="book-wrapper"
                  style={{
                    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                    padding: "20px",
                    borderRadius: "8px",
                    textAlign: "center",
                  }}
                >
                  <h5
                    style={{
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "rgba(0, 22, 51, 1)",
                    }}
                  >
                    The Lost Sheep{" "}
                  </h5>
                  <img src={book} alt="" />
                </article>
                <small
                  className="book-size"
                  style={{
                    margin: "10px auto",
                    display: "block",
                    textAlign: "center",
                    fontSize: "14px",
                    fontWeight: " 400",
                    lineHeight: "21px",
                    color: "rgba(0, 22, 51, 0.7)",
                  }}
                >
                  1.24Mb
                </small>
              </section>
            </div>
            <aside
              className="progress"
              style={{ width: "50%", margin: "20px auto" }}
            >
              <div
                className="file-size"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p
                  style={{
                    fontWeight: "400",
                    fontSize: "14px",
                    color: "rgba(0, 22, 51, 1)",
                  }}
                >
                  537Kb
                </p>
                <p
                  style={{
                    fontWeight: "400",
                    fontSize: "14px",
                    color: "rgba(0, 22, 51, 1)",
                  }}
                >
                  1.24Mb
                </p>
              </div>
              <progress
                id="file"
                value="42"
                max="100"
                style={{
                  display: "block",
                  width: "100%",
                  margin: "0 0 10px",
                  height: "35px",
                }}
              ></progress>
              <label
                for="file"
                style={{
                  textAlign: "center",
                  display: "block",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "21px",
                  color: "rgba(0, 22, 51, 1)",
                }}
              >
                downloading...
              </label>
            </aside>
            {/* btn */}
            <button
              className="article-btn"
              style={{ fontSize: "14px", width: "25%", margin: "10px auto " }}
            >
              cancel
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default MSDownload;
