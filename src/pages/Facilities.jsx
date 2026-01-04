import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useLanguage } from '../context/LanguageContext';
import './Facilities.css';

const Facilities = () => {
    const { t } = useLanguage();
    const allFacilities = t('facilitiesPage.categories');

    return (
        <div className="facilities-page">
            <Header />

            {/* Hero Banner */}
            <section className="facilities-hero">
                <div className="facilities-hero__overlay"></div>
                <div className="facilities-hero__content">
                    <span className="facilities-hero__subtitle">{t('facilitiesPage.heroSubtitle')}</span>
                    <h1 className="facilities-hero__title">Facilities & Services</h1>
                    <p className="facilities-hero__description">
                        {t('facilitiesPage.heroDescription')}
                    </p>
                </div>
            </section>

            <main>
                {/* All Facilities in One Section */}
                <section className="facilities-all section">
                    <div className="container">
                        <div className="facilities-all__grid">
                            {allFacilities.map((group, index) => (
                                <div key={index} className="facilities-all__category">
                                    <div className="facilities-all__category-header">
                                        <span className="facilities-all__category-icon">{group.icon}</span>
                                        <h3 className="facilities-all__category-title">{group.category}</h3>
                                    </div>
                                    <ul className="facilities-all__list">
                                        {group.items.map((item, i) => (
                                            <li key={i} className="facilities-all__item">
                                                <span className="facilities-all__check">✓</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Facilities;
