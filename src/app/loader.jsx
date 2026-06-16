// loader.jsx
"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";

const IMAGES = [
    "/background.png",
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.avif",
    "/7.jpeg",
];

export default function Loader({ onComplete, contentRef, navRef }) {
    const loaderRef = useRef(null);
    const countRef  = useRef(null);

    useEffect(() => {
        const counter = { val: 0 };
        let loaded = 0;

        if (contentRef?.current) gsap.set(contentRef.current, { autoAlpha: 0, yPercent: 6 });
        if (navRef?.current)     gsap.set(navRef.current, { autoAlpha: 0, yPercent: -10 });

        const reveal = () => {
            gsap.timeline()
                .to(counter, {
                    val: 100,
                    duration: 0.4,
                    ease: "power2.out",
                    onUpdate() {
                        if (countRef.current)
                            countRef.current.textContent = Math.round(counter.val);
                    }
                })
                .to(loaderRef.current, {
                    yPercent: -100,
                    duration: 0.9,
                    ease: "power3.inOut",
                })
                .call(() => onComplete?.(), [], "<")
                .to(contentRef?.current, {
                    autoAlpha: 1,
                    yPercent: 0,
                    duration: 0.9,
                    ease: "power3.out",
                }, "<")
                .to(navRef?.current, {
                    autoAlpha: 1,
                    yPercent: 0,
                    duration: 0.7,
                    ease: "power3.out",
                }, "<");
        };

        const onLoad = () => {
            loaded++;
            const progress = (loaded / IMAGES.length) * 100;

            gsap.to(counter, {
                val: progress,
                duration: 0.3,
                ease: "power1.out",
                onUpdate() {
                    if (countRef.current)
                        countRef.current.textContent = Math.round(counter.val);
                }
            });

            if (loaded === IMAGES.length) reveal();
        };

        IMAGES.forEach(src => {
            const img = new Image();
            img.onload  = onLoad;
            img.onerror = onLoad;
            img.src = src;
        });

    }, []);

    return (
        <div ref={loaderRef} className="loader">
            <span ref={countRef} className="loader-count">0</span>
        </div>
    );
}