import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CircleIcon from '@mui/icons-material/Circle';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Splitting from 'splitting';
import "splitting/dist/splitting.css";
import { useReady } from '../globalContext';

export default function Home() {
    const titleRef = useRef();
    const ready = useReady();
    const badgeRef = useRef();
    const paraRef = useRef();
    const btn1Ref = useRef();
    const btn2Ref = useRef();
    const arrow1Ref = useRef();
    const arrow2Ref = useRef();
    const homeRef = useRef();
    const backgroundRef = useRef();

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

    useEffect(() => {
        if (!ready) return;
    
        const run = async () => {
            const Splitting = (await import("splitting")).default;
            await import("splitting/dist/splitting.css");
    
            const [title] = Splitting({ target: titleRef.current, by: "chars" });
            const [para] = Splitting({ target: paraRef.current, by: "chars"});
    
            gsap.fromTo(
                title.chars,
                { yPercent: 110 },
                {
                    yPercent: 0,
                    duration: 0.7,
                    delay: 0.6,
                    ease: "power4.out",
                    stagger: 0.02,
                }
            );

            gsap.fromTo(
                para.chars,
                { yPercent: 110 },
                {
                    yPercent: 0,
                    duration: 0.7,
                    delay: 1.2,
                    ease: "power4.out",
                    stagger: 0.005,
                }
            );

            gsap.fromTo(badgeRef.current,
                {
                    y: "100%",
                    opacity: 0,
                    filter: "blur(12px)"
                },
                {
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 1.2,
                    delay: 0.3,
                    ease: "power3.out",
                }
            );

            gsap.fromTo(btn1Ref.current,
                {
                    scale: 0,
                    filter: "blur(5px)"
                },
                {
                    scale: 1,
                    filter: "blur(0px)",
                    duration: 1.2,
                    delay: 1.5,
                    ease: "elastic.out(1, 0.8)",
                }
            );

            gsap.fromTo(btn2Ref.current,
                {
                    scale: 0,
                    filter: "blur(5px)"
                },
                {
                    scale: 1,
                    filter: "blur(0px)",
                    duration: 1.2,
                    delay: 1.7,
                    ease: "elastic.out(1, 0.8)",
                }
            );

            gsap.to(homeRef.current, {
                scrollTrigger: {
                    trigger: homeRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
                y: -200,
                ease: "power2.in",
                duration: 1
            });

            gsap.to(backgroundRef.current, {
                scrollTrigger: {
                    trigger: homeRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
                scale: 1.5,
                y: 100,
                ease: "power2.in",
                duration: 1,
            });
        };
    
        run();
    
    }, [ready]);

    return (
        <section className="home-section">
            <div className="home-main" ref={homeRef}>
                <div className="home-background" ref={backgroundRef}></div>
                <div className="home-top"></div>
                <div className="home-bottom">
                    <div className="home-hero">
                        <div className="home-text">
                            <div className="home-badge" ref={badgeRef} >
                                <CircleIcon/>
                                <span>Explore the world differently</span>
                            </div>
                            <h1 className="home-title" ref={titleRef} >
                                Stay where elegance meets the horizon
                            </h1>
                            <p className="home-desc" ref={paraRef} >
                                A 5★ resort on the coast, private suites, infinity pools, and tailor-made experiences for a truly rejuvenating journey.
                            </p>
                        </div>
                        <div className="home-para">
                            <p>Welcome to Upon Hotel — a haven of refinement and tranquility offering panoramic view suites, exceptional cuisine, and wellness rituals designed to reinvent your senses.</p>
                        </div>
                    </div>
                    <div className="home-cta">
                        <div className="cta-button">
                                <a href="#" className="button-primary" ref={btn1Ref} onMouseEnter={() => onButtonEnter(btn1Ref)} onMouseLeave={() => onButtonLeave(btn1Ref)}>Book now</a>
                                <a href="#" className="button-secondary" ref={btn2Ref} onMouseEnter={() => onButtonEnter(btn2Ref)} onMouseLeave={() => onButtonLeave(btn2Ref)}>See our rooms & suites</a>
                        </div>
                        <div className="arrow-cta">
                            <button ref={arrow1Ref} onMouseEnter={() => onButtonEnter(arrow1Ref)} onMouseLeave={() => onButtonLeave(arrow1Ref)}>
                             <ArrowBackIcon/>
                            </button>
                            <button  ref={arrow2Ref} onMouseEnter={() => onButtonEnter(arrow2Ref)} onMouseLeave={() => onButtonLeave(arrow2Ref)}>
                                <ArrowForwardIcon/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="home-scroll-button">
                    <button><ArrowDownwardIcon/></button>
                </div>
            </div>
        </section>
    );
}