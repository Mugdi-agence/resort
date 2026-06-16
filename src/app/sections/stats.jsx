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
        { number: "320", label: "luxury rooms & suites" },
        { number: "6", label: "award-winning restaurants" },
        { number: "3", label: "private beaches" },
        { number: "15K+", label: "guests welcomed last year" },
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

    const testimonials = [
        {
            name: "— Alice M., Paris",
            quote: "\"The spa and private beach were incredible! We felt truly pampered throughout our stay.\""
        },
    ];

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

                {/* Affiche les témoignages pour resorts/hôtels */}
                {testimonials.map((testimonial, idx) => (
                    <div className="stats-testimonial" key={idx}>
                        <div className="stats-testimonial-icon">
                            <PersonIcon/>
                        </div>
                        <div className="stats-testimonial-text">
                            <p className="stats-testimonial-name">{testimonial.name}</p>
                            <p className="stats-testimonial-quote">{testimonial.quote}</p>
                        </div>
                    </div>
                ))}
           
            </div>
        </section>
    );
}