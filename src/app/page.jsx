"use client"
import "./page.scss";
import CallToAction from "./sections/cta";
import Footer from "./sections/footer";
import Home from "./sections/Home";
import Marquee from "./sections/marquee";
import Nav from "./sections/nav";
import Resort from "./sections/resort";
import Stats from "./sections/stats";
import Loader from "./loader";
import { useRef, useState } from "react";
import { ReadyContext } from "./globalContext";

export default function Landing() {
  const [ready, setReady] = useState(false);
  const contentRef = useRef(null);
  const navRef = useRef(null);

  return (
    <>
      <ReadyContext.Provider value={ready}>
        <Loader contentRef={contentRef} navRef={navRef} onComplete={() => setReady(true)} />
        <Nav ref={navRef} />
        <div ref={contentRef} style={{ visibility: "hidden" }}>
          <main>
            <Home/>
            <Marquee/>
            <Resort/>
            <Marquee/>
            <Stats/>
            <CallToAction/>
            <Marquee/>
            <Footer/>
          </main>
        </div>
      </ReadyContext.Provider>
    </>
  );
}