import PersonIcon from '@mui/icons-material/Person';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export default function Stats() {
    const backgroundRef = useRef();
    const btnRef = useRef();

    useEffect(() => {
        gsap.to(backgroundRef.current, {
            scrollTrigger: {
                trigger: backgroundRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
            y: -100,
            duration: 1,
            ease: "power2"
        });
    }, []);

    const stats = [
        { number: "10+", label: "years of experience" },
        { number: "5,000+", label: "happy clients" },
        { number: "98%", label: "satisfaction rate (2024 survey)" },
        { number: "50+", label: "partner hotels" },
    ];

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
        <section className="stats-section">
            <div className="stats-list">
                {stats.map((stat, index) => (
                    <div className="stats-item" key={index}>
                        <h2 className="stats-number">{stat.number}</h2>
                        <p className="stats-label">{stat.label}</p>
                    </div>
                ))}
            </div>

            <div className="stats-visual" >
                <div className="stats-img" ref={backgroundRef}/>

                <a href="#" className="stats-contact" ref={btnRef} onMouseLeave={() => onButtonLeave(btnRef)} onMouseEnter={() => onButtonEnter(btnRef)}>Contact</a>

                <div className="stats-testimonial">
                    <div className="stats-testimonial-icon">
                        <PersonIcon/>
                    </div>
                    <div className="stats-testimonial-text">
                        <p className="stats-testimonial-name">— Camille & Julien, Lyon</p>
                        <p className="stats-testimonial-quote">"Perfect itinerary, impeccable service — we discovered places we never would have found on our own."</p>
                    </div>
                </div>
            </div>
        </section>
    );
}