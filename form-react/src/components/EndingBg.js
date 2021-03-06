import React from "react";
import { ReactSVG } from "react-svg";
import { useMediaPredicate } from "react-media-hook";
import EndingBgSVG from "../svgs/pub-with-bartender.svg";

export default function EndingBg() {
  // different svg vewbox size for ending background
  function MediaQueriesBg() {
    const mobileFirst = useMediaPredicate("(max-width: 460px)");
    const ipad768px = useMediaPredicate("(max-width: 800px)");
    const ipad1024px = useMediaPredicate("(max-width: 1100px)");
    const screen1200px = useMediaPredicate("(max-width: 1300px)");
    const screen1400px = useMediaPredicate("min-width: 1400px");

    if (mobileFirst) {
      return (
        <ReactSVG
          src={EndingBgSVG}
          afterInjection={(error, svg) => {
            if (error) {
              console.error(error);
              return;
            }
            svg.setAttribute("viewBox", "470 0 390 700");
          }}
          loading={() => <span>Loading</span>}
        ></ReactSVG>
      );
    } else if (ipad768px) {
      console.log(ipad768px);
      return (
        <ReactSVG
          src={EndingBgSVG}
          afterInjection={(error, svg) => {
            if (error) {
              console.error(error);
              return;
            }
          }}
          beforeInjection={(svg) => {
            svg.setAttribute("viewBox", "500 0 500 1100");
          }}
        ></ReactSVG>
      );
    } else if (ipad1024px) {
      return (
        <ReactSVG
          src={EndingBgSVG}
          afterInjection={(error, svg) => {
            if (error) {
              console.error(error);
              return;
            }
          }}
          beforeInjection={(svg) => {
            console.log(ipad1024px);
            svg.setAttribute("viewBox", "350 0 670 740");
          }}
        />
      );
    } else if (screen1200px) {
      return (
        <ReactSVG
          src={EndingBgSVG}
          afterInjection={(error, svg) => {
            if (error) {
              console.error(error);
              return;
            }
          }}
          beforeInjection={(svg) => {
            console.log(screen1200px);
            svg.setAttribute("viewBox", "26 30 1000 700");
          }}
        />
      );
    } else if (screen1400px) {
      return (
        <ReactSVG
          src={EndingBgSVG}
          afterInjection={(error, svg) => {
            if (error) {
              console.error(error);
              return;
            }
          }}
          beforeInjection={(svg) => {
            console.log(screen1400px);
            svg.setAttribute("viewBox", "0 0 1026 800");
          }}
        />
      );
    }

    return (
      <ReactSVG
        src={EndingBgSVG}
        afterInjection={(error, svg) => {
          if (error) {
            console.error(error);
            return;
          }
          svg.setAttribute("viewBox", "0 0 1026 680");
        }}
      ></ReactSVG>
    );
  }
  return <MediaQueriesBg />;
}
