import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const { language, setLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { path: '/', label: t('nav.home') },
        { path: '/rooms', label: t('nav.rooms') },
        { path: '/facilities', label: t('nav.facilities') },
        { path: '/nearby', label: t('nav.nearby') },
        { path: '/gallery', label: t('nav.gallery') },
        { path: '/contact', label: t('nav.contact') },
    ];

    const languages = [
        { code: 'th', label: 'TH' },
        { code: 'en', label: 'EN' },
        { code: 'cn', label: 'CN' },
    ];

    return (
        <header className={`header ${isScrolled ? 'header--scrolled' : ''} ${isMobileMenuOpen ? 'header--menu-open' : ''}`}>
            <div className="header__container">
                {/* Logo */}
                <Link to="/" className="header__logo">
                    <img src="/images/logo.png" alt="PJ-Residence" className="header__logo-img" />
                </Link>

                {/* Navigation */}
                <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
                    <ul className="header__nav-list">
                        {navLinks.map((link) => (
                            <li key={link.path} className="header__nav-item">
                                <Link
                                    to={link.path}
                                    className={`header__nav-link ${location.pathname === link.path ? 'header__nav-link--active' : ''}`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link to="/booking" className="btn btn-primary header__booking-btn">
                        {t('nav.booking')}
                    </Link>
                </nav>

                {/* Language Switcher */}
                <div className="header__language-switcher">
                    {languages.map((lang, index) => (
                        <span key={lang.code}>
                            <button
                                className={`header__language-btn ${language === lang.code ? 'header__language-btn--active' : ''}`}
                                onClick={() => setLanguage(lang.code)}
                            >
                                {lang.label}
                            </button>
                            {index < languages.length - 1 && <span className="header__language-divider">|</span>}
                        </span>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={`header__mobile-toggle ${isMobileMenuOpen ? 'header__mobile-toggle--open' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
};

export default Header;

