import CircleIcon from '@mui/icons-material/Circle';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useReady } from '../globalContext';

export default function Resort() {
    const btn1ref = useRef();
    const ready = useReady();

    const rooms = [
        {
            image: "/1.png",
            title: "Ocean Suite (55 m²)",
            desc: "Private balcony, direct sea view, deep soaking tub, and butler service on request."
        },
        {
            image: "/2.png",
            title: "Garden & Spa Suite",
            desc: "Direct access to gardens, private terrace, and priority access to the resort spa."
        },
        {
            image: "/3.png",
            title: "Palm Grove Suite",
            desc: "View of the main pool, Mediterranean atmosphere, and outdoor lounge area."
        },
        {
            image: "/4.png",
            title: "Infinity Villa",
            desc: "Private infinity pool, contemporary design, and breathtaking panoramic view."
        },
        {
            image: "/5.png",
            title: "Panorama Suite",
            desc: "View of the bay and mountains, spacious balcony, and direct access to communal areas."
        }
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

    useEffect(() => {
        if (!ready) return;
        
    }, [ready]);

    return(
        <section className="resort-section">
            <div className="resort-top">
                <div className="resort-intitles">
                    <div className="resort-badge">
                        <CircleIcon/>
                        <span>Popular Resorts</span>
                    </div>
                    <h1 className="resort-title">Rooms & Suites — a <i>Personal</i> <b>Sanctuary</b></h1>
                    <p className="resort-para">Suites with sea views, private villas with pools, and tailored services for a stay that matches your desires.</p>
                </div>
                <div className="resort-cta">
                    <p className="resort-desc">Each room and suite at UPON HOTEL is designed to offer the perfect balance of contemporary elegance, absolute comfort, and privacy. Generous space, fine materials, and soothing views create a haven where every detail invites you to unwind.</p>
                    <a href="#" className="button-black" ref={btn1ref} onMouseLeave={() => onButtonLeave(btn1ref)} onMouseEnter={() => onButtonEnter(btn1ref)}>See more</a>
               
                </div>
            </div>
            <div className="resort-bottom">
                {rooms.map((room, index) => (
                    <div className="resort-card" key={index}>
                        <img src={room.image} alt={room.title} className="resort-card-img" />
                        <div className="resort-card-icon">
                            <ArrowOutwardIcon/>
                        </div>
                        <div className="resort-card-overlay">
                            <h3 className="resort-card-title">{room.title}</h3>
                            <p className="resort-card-desc">{room.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}