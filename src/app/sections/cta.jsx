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
                    <h2 className="cta-title">Experience True Luxury. Your Personal Escape Awaits.</h2>
                    <p className="cta-subtitle">Let us craft an unforgettable stay—effortless, private, and tailored to you.</p>

                    <div className="cta-bottom">
                        <p className="cta-text">
                            Dreaming of a serene beachfront suite, private spa retreats, or exclusive gourmet dining? Our team will curate every element of your luxurious getaway: bespoke accommodations, airport transfers, premium experiences, and concierge at your service. Reserve your complimentary consultation or speak directly with a resort specialist now.
                        </p>

                        <div className="cta-buttons">
                            <a href="#" className="button-primary" ref={btnRef} onMouseLeave={() => onButtonLeave(btnRef)} onMouseEnter={() => onButtonEnter(btnRef)}>Contact a Specialist</a>
                            <a href="#" className="button-secondary" ref={btn1Ref} onMouseLeave={() => onButtonLeave(btn1Ref)} onMouseEnter={() => onButtonEnter(btn1Ref)}>Request My Tailored Offer</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
   
    );
}