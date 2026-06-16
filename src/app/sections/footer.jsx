import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="footer-card">
                <div className="footer-bg" style={{ backgroundImage: "url('/7.jpeg')" }}></div>
                <div className="footer-overlay"></div>

                <div className="footer-top">
                    <div className="footer-col footer-brand">
                        <div className="footer-logo">
                            <span className="footer-logo-bar"></span>
                            <div>
                                <p className="footer-logo-small">UPON</p>
                                <p className="footer-logo-big">VOYAGES</p>
                            </div>
                        </div>
                        <p className="footer-tagline">Explore. Breathe. Leave transformed.</p>

                        <p className="footer-mentions">Secure payments · Travel insurance available · Certified local partners</p>
                    </div>

                    <div className="footer-col footer-nav">
                        <h3 className="footer-title">Navigation</h3>
                        <ul className="footer-links">
                            <li><a href="#">Destinations</a></li>
                            <li><a href="#">Tailor-made trips</a></li>
                            <li><a href="#">Current offers</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Free quote</a></li>
                        </ul>
                    </div>

                    <div className="footer-col footer-contact">
                        <h3 className="footer-title">Contact</h3>
                        <p className="footer-contact-sub">UPON Voyages Agency</p>

                        <div className="footer-contact-info">
                            <p>Phone: +33 1 23 45 67 89</p>
                            <p>Email: contact@voyagenom.com</p>
                            <p>Address: 12 rue des Voyages, 75001 Paris, France</p>
                            <p>Hours: Mon–Fri 9:00–18:00</p>
                        </div>

                        <p className="footer-social-text">Follow us for daily travel inspiration and great deals.</p>

                        <div className="footer-social">
                            <a href="#"><FacebookIcon/></a>
                            <a href="#"><InstagramIcon/></a>
                            <a href="#"><YouTubeIcon/></a>
                            <a href="#"><TwitterIcon/></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2025 VoyageNom — All rights reserved. SIRET 123 456 789. VAT FR12 345678901.</p>
                    <p>Privacy Policy · Terms & Conditions · Cookie Management</p>
                </div>
            </div>
        </footer>
    );
}