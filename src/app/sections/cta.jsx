import gsap from "gsap";
import { useRef } from "react";

export default function CallToAction() {
    const btnRef = useRef();
    const btn1Ref = useRef();

    function onButtonEnter(ref) {
        if (!ref.current) return;
        gsap.killTweensOf(ref.current);
        gsap.to(ref.current, {
            scale: 1.05,
            duration: 0.3,
            opacity: 0.7,
            ease: "elastic.out(2, 1)"
        });
    }
    
    function onButtonLeave(ref) {
        if (!ref.current) return;
        gsap.killTweensOf(ref.current);
        gsap.to(ref.current, {
            scale: 1,
            duration: 0.4,
            opacity: 1,
            ease: "elastic.out(2, 1)"
        });
    }

    return (
        <section className="cta-section">
            <div className="cta-card">
                <div className="cta-bg" style={{ backgroundImage: "url('/4.png')" }}></div>
                <div className="cta-overlay"></div>

                <div className="cta-content">
                    <h2 className="cta-title">Ready to go? We'll handle the rest.</h2>
                    <p className="cta-subtitle">Your next memory begins here—simple, safe, and 100% personalized.</p>

                    <div className="cta-bottom">
                        <p className="cta-text">
                            Whether you dream of a relaxing getaway, an off-the-beaten-path adventure, or a family trip, our team crafts a tailor-made itinerary and takes care of every detail: flights, accommodations, transfers, and curated activities. Request your free quote or speak directly with an advisor.
                        </p>

                        <div className="cta-buttons">
                            <a href="#" className="button-primary" ref={btnRef} onMouseLeave={() => onButtonLeave(btnRef)} onMouseEnter={() => onButtonEnter(btnRef)}>Contact an advisor</a>
                            <a href="#" className="button-secondary" ref={btn1Ref} onMouseLeave={() => onButtonLeave(btn1Ref)} onMouseEnter={() => onButtonEnter(btn1Ref)}>Request my personalized quote</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}