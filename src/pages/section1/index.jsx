import styles from "./index.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const SectionOne = () => {
  const mainTextRef = useRef(null);

  useEffect(() => {
    let num = 1000;
    for (const child of mainTextRef.current.children) {
      ScrollTrigger.create({
        trigger: child,
        start: num,
        toggleClass: "opacity-1",
        endTrigger: ".no-exist",
      });
      num += 30;
    }
  }, []);

  return (
    <div className="container">
      <div className={styles["textreveal-wrapper"]}>
        <div className={styles["textreveal-sticky"]}>
          <div className={styles["textreveal-inner"]}>
            <div style={{ position: "relative", width: "100%" }}>
              <p
                className={`${styles["main-text"]} ${styles["bold-text"]}`}
                ref={mainTextRef}
              >
                <span style={{ opacity: 0 }}>In</span>
                <span style={{ opacity: 0 }}>Chronicle</span>
                <span style={{ opacity: 0 }}>everything</span>
                <span style={{ opacity: 0 }}>is</span>
                <span style={{ opacity: 0 }}>made</span>
                <span style={{ opacity: 0 }}>with</span>
                <span style={{ opacity: 0 }}>Blocks</span>
                <span style={{ opacity: 0 }}>that</span>
                <span style={{ opacity: 0 }}>come</span>
                <span style={{ opacity: 0 }}>with</span>
                <span style={{ opacity: 0 }}>pixel</span>
                <span style={{ opacity: 0 }}>perfect</span>
                <span style={{ opacity: 0 }}>design,</span>
                <span style={{ opacity: 0 }}>interactivity</span>
                <span style={{ opacity: 0 }}>and</span>
                <span style={{ opacity: 0 }}>motion</span>
                <span style={{ opacity: 0 }}>out</span>
                <span style={{ opacity: 0 }}>of</span>
                <span style={{ opacity: 0 }}>the</span>
                <span style={{ opacity: 0 }}>box.</span>
                <span style={{ opacity: 0 }}>Instead</span>
                <span style={{ opacity: 0 }}>of</span>
                <span style={{ opacity: 0 }}>designing</span>
                <span style={{ opacity: 0 }}>from</span>
                <span style={{ opacity: 0 }}>scratch,</span>
                <span style={{ opacity: 0 }}>simply</span>
                <span style={{ opacity: 0 }}>choose</span>
                <span style={{ opacity: 0 }}>the</span>
                <span style={{ opacity: 0 }}>right</span>
                <span style={{ opacity: 0 }}>one</span>
                <span style={{ opacity: 0 }}>from</span>
                <span style={{ opacity: 0 }}>our</span>
                <span style={{ opacity: 0 }}>library</span>
                <span style={{ opacity: 0 }}>of</span>
                <span style={{ opacity: 0 }}>blocks</span>
                <span style={{ opacity: 0 }}>and</span>
                <span style={{ opacity: 0 }}>see</span>
                <span style={{ opacity: 0 }}>the</span>
                <span style={{ opacity: 0 }}>magic</span>
                <span style={{ opacity: 0 }}>unfold.</span>
              </p>
              <p
                className={`${styles["main-text"]} ${styles["semibold-text"]}`}
              >
                <span>In</span>
                <span>Chronicle</span>
                <span>everything</span>
                <span>is</span>
                <span>made</span>
                <span>with</span>
                <span>Blocks</span>
                <span>that</span>
                <span>come</span>
                <span>with</span>
                <span>pixel</span>
                <span>perfect</span>
                <span>design,</span>
                <span>interactivity</span>
                <span>and</span>
                <span>motion</span>
                <span>out</span>
                <span>of</span>
                <span>the</span>
                <span>box.</span>
                <span>Instead</span>
                <span>of</span>
                <span>designing</span>
                <span>from</span>
                <span>scratch,</span>
                <span>simply</span>
                <span>choose</span>
                <span>the</span>
                <span>right</span>
                <span>one</span>
                <span>from</span>
                <span>our</span>
                <span>library</span>
                <span>of</span>
                <span>blocks</span>
                <span>and</span>
                <span>see</span>
                <span>the</span>
                <span>magic</span>
                <span>unfold.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
