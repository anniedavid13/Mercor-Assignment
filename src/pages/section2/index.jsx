import styles from "./index.module.css";
import SVG1 from "../../assets/sec2-1.svg";
import SVG2 from "../../assets/sec2-2.svg";
import SVG3 from "../../assets/sec2-3.svg";
import Card from "./Card";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SectionTwo = () => {
  const cardOneRef = useRef(null);
  const cardTwoRef = useRef(null);
  const cardThreeRef = useRef(null);
  const scrollColorRef = useRef(null);
  const scrollWhiteRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: cardOneRef.current,
      start: 5000,
      toggleClass: "slide-down",
      endTrigger: ".no-exist",
    });
    ScrollTrigger.create({
      trigger: cardTwoRef.current,
      start: 5000,
      toggleClass: "slide-up",
      end: 7000,
    });
    ScrollTrigger.create({
      trigger: cardThreeRef.current,
      start: 7000,
      toggleClass: "slide-up",
      endTrigger: ".no-exist",
    });
  }, []);

  return (
    <div className={styles["container"]}>
      <div style={{ position: "sticky", top: 0, left: 0, height: "100vh" }}>
        <div
          className="container"
          style={{ height: "100%", display: "flex", alignItems: "center" }}
        >
          <div className="row g-0 justify-content-between">
            <div className="col-6">
              <div style={{ maxWidth: "80%" }}>
                <svg
                  width="18px"
                  height="18px"
                  display="inline-block"
                  style={{ marginTop: "-6px" }}
                >
                  <path
                    d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999545 9.14164 -0.0999545 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z"
                    fill="#A594FD"
                  ></path>
                </svg>
                <h4
                  style={{
                    color: "#a594fd",
                    display: "inline-block",
                    margin: "0 0 0 5px",
                  }}
                >
                  Workflow
                </h4>
                <h1
                  style={{
                    fontSize: "5rem",
                    fontWeight: "600",
                    lineHeight: "80px",
                  }}
                >
                  Create at the speed of thought.
                </h1>
                <h6
                  style={{
                    marginTop: "3rem",
                    lineHeight: "25px",
                    color: "#adadad",
                  }}
                >
                  Focus on your getting your thoughts out and crafting the best
                  message while Chronicle does the heavy lifting for you
                </h6>
              </div>
            </div>
            <div className="col-6" style={{ height: "100%" }}>
              <div
                style={{
                  position: "relative",
                  height: "100%",
                  marginTop: "-5rem",
                }}
              >
                <div
                  className={`${styles["card-container"]} ${styles["card-1"]}`}
                  ref={cardOneRef}
                >
                  <Card
                    svg={SVG1}
                    heading="A keyboard first experience"
                    text="Powerful shortcuts and a keyboard-first workflow means you
                        will get to your finish line in to time!"
                  />
                </div>
                <div
                  className={`${styles["card-container"]} ${styles["card-2"]}`}
                  ref={cardTwoRef}
                >
                  <Card
                    svg={SVG2}
                    heading="Bullets to visuals in a click"
                    text="Transform any block to any other and try different options without any design hassle"
                  />
                </div>
                <div
                  className={`${styles["card-container"]} ${styles["card-3"]}`}
                  ref={cardThreeRef}
                >
                  <Card
                    svg={SVG3}
                    heading="A powerful assistant just a click away"
                    text="Insert blocks, perform powerful actions and leverage the limitless power of AI - all without leaving your keyboard"
                  />
                </div>
                <span
                  style={{
                    position: "absolute",
                    right: "-30px",
                    marginTop: "5px",
                  }}
                >
                  <span className={styles["bar"]} ref={scrollColorRef}></span>
                  <span
                    className={styles["bar-white"]}
                    ref={scrollWhiteRef}
                  ></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
