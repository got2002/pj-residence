import { useLanguage } from '../../context/LanguageContext';
import './NearbyPlaces.css';

const NearbyPlaces = () => {
    const { t, language } = useLanguage();

    const placesData = [
        {
            id: 1,
            icon: '🛍️',
            items: [
                { name: 'Central Rattanathibet', distance: '2.8 Km.' },
                { name: 'Owl Night Market', distance: '3 Km.' },
                { name: 'Esplanade', distance: '5 Km.' }
            ]
        },
        {
            id: 2,
            icon: '🚇',
            items: [
                { name: 'Pink Line MRT', distance: '1.6 Km.' },
                { name: 'BTS Violet Line', distance: '4.5 Km.' },
                { name: 'Nonthaburi Pier', distance: '8.2 Km.' }
            ]
        },
        {
            id: 3,
            icon: '🏛️',
            items: [
                { name: 'Ministry of Commerce', distance: '4 Km.' },
                { name: 'Gov. Lottery Office', distance: '600 M.' },
                { name: 'Nonthaburi Civic Center', distance: '4.6 Km.' }
            ]
        },
        {
            id: 4,
            icon: '🏥',
            items: [
                { name: 'Central Chest Institute', distance: '3.9 Km.' },
                { name: 'Pranangklao Hospital', distance: '5.9 Km.' },
                { name: 'Ministry of Public Health', distance: '7.4 Km.' }
            ]
        }
    ];

    const categories = t('nearbyPlaces.categories');

    return (
        <section className="nearby section">
            <div className="nearby__background"></div>
            <div className="container">
                <div className="nearby__content">
                    {/* Section Header */}
                    <div className="nearby__header">
                        <span className="section-subtitle nearby__subtitle">{t('nearbyPlaces.subtitle')}</span>
                        <h2 className="section-title nearby__title">Nearby Places</h2>
                        <div className="divider"></div>
                        <p className="nearby__description">
                            {t('nearbyPlaces.description')}
                        </p>
                    </div>

                    {/* Places Grid */}
                    <div className="nearby__grid">
                        {placesData.map((place, index) => (
                            <div
                                key={place.id}
                                className="nearby__card glass"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="nearby__card-header">
                                    <span className="nearby__card-icon">{categories[index].icon}</span>
                                    <h3 className="nearby__card-category">{categories[index].category}</h3>
                                </div>
                                <ul className="nearby__card-list">
                                    {place.items.map((item, i) => (
                                        <li key={i} className="nearby__card-item">
                                            <span className="nearby__card-name">{item.name}</span>
                                            <span className="nearby__card-distance">{item.distance}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NearbyPlaces;
