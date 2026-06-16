import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useReady } from "../globalContext";
import { forwardRef } from "react";

const Nav = forwardRef(function Nav(props, ref) {
    const btnRef = useRef();
    const ready = useReady();
    const navRef = useRef();

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

        function run() {
            gsap.fromTo(navRef.current, {
                y: -100
            }, { y: 0, delay: 1.2, duration: 1, ease: "elastic.out(1, 0.8)"});
        }

        run();
    }, [ready]);
    return (
        <nav className="nav" ref={navRef}>
            <div className="nav-logo">
                <span className="nav-logo-bar"></span>
                <div>
                    <p className="nav-logo-small">UPON</p>
                    <p className="nav-logo-big">HOTEL</p>
                </div>
            </div>

            <ul className="nav-links">
                <li><a href="#">Accueil</a></li>
                <li><a href="#">Destinations</a></li>
                <li><a href="#">Stats</a></li>
                <li><a href="#">CTA</a></li>
            </ul>

            <div className="nav-actions">
                <a href="#" className="nav-contact" ref={btnRef} onMouseLeave={() => onButtonLeave(btnRef)} onMouseEnter={() => onButtonEnter(btnRef)}>Contact</a>
                <span className="nav-lang">EN</span>
            </div>
        </nav>
    );
});

export default Nav;