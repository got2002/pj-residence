import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useLanguage } from '../context/LanguageContext';
import './Nearby.css';

const Nearby = () => {
    const { t, language } = useLanguage();

    const nearbyPlaces = [
        { name: 'The Government Lottery Office', nameTh: 'สำนักงานสลากกินแบ่งรัฐบาล', nameCn: '政府彩票办公室', distance: '600 M.', icon: '🏛️', image: '/images/nearby/5.jpg' },
        { name: 'Pink Line MRT (Sanambin Nam)', nameTh: 'รถไฟฟ้าสายสีชมพู (สถานีสนามบินน้ำ)', nameCn: '粉红线轻轨', distance: '1.6 Km.', icon: '🚇', image: '/images/nearby/btspink.jpg' },
        { name: 'Central Rattanathibet', nameTh: 'เซ็นทรัล รัตนาธิเบศร์', nameCn: 'Central Rattanathibet', distance: '2.8 Km.', icon: '🛍️', image: '/images/nearby/rattanathibet.jpg' },
        { name: 'Owl Night Market', nameTh: 'ตลาดนกฮูก', nameCn: '猫头鹰夜市', distance: '3 Km.', icon: '🦉', image: '/images/nearby/nuxhug.png' },
        { name: 'Central Chest Institute of Thailand', nameTh: 'สถาบันโรคทรวงอกกลาง', nameCn: '中央胸科研究所', distance: '3.9 Km.', icon: '🏥', image: '/images/nearby/7.jpg' },
        { name: 'Ministry of Commerce', nameTh: 'กระทรวงพาณิชย์', nameCn: '商务部', distance: '4 Km.', icon: '🏢', image: '/images/nearby/14.jpg' },
        { name: 'BTS Violet Line', nameTh: 'รถไฟฟ้า BTS สายสีม่วง', nameCn: '紫线轻轨', distance: '4.5 Km.', icon: '🚇', image: '/images/nearby/9.jpg' },
        { name: 'Esplanade', nameTh: 'เอสพลานาด', nameCn: 'Esplanade购物中心', distance: '5 Km.', icon: '🛒', image: '/images/nearby/10.jpg' },
        { name: 'Rajamangala University', nameTh: 'มหาวิทยาลัยเทคโนโลยีราชมงคลสุวรรณภูมิ', nameCn: '拉贾曼加拉理工大学', distance: '5.2 Km.', icon: '🎓', image: '/images/nearby/12.jpg' },
        { name: 'Pranangklao Hospital', nameTh: 'โรงพยาบาลพระนั่งเกล้า', nameCn: 'Pranangklao医院', distance: '5.9 Km.', icon: '🏥', image: '/images/nearby/13.jpg' },
        { name: 'Department of Corrections', nameTh: 'กรมราชทัณฑ์', nameCn: '惩教局', distance: '6.7 Km.', icon: '🏛️', image: '/images/nearby/11.jpg' },
        { name: 'NACC', nameTh: 'สำนักงาน ป.ป.ช.', nameCn: '反腐败委员会', distance: '7.2 Km.', icon: '⚖️', image: '/images/nearby/6.jpg' },
        { name: 'Ministry of Public Health', nameTh: 'กระทรวงสาธารณสุข', nameCn: '公共卫生部', distance: '7.4 Km.', icon: '🏥', image: '/images/nearby/8.jpg' },
        { name: 'Nonthaburi Pier Clock Tower', nameTh: 'หอนาฬิกา ท่าน้ำนนท์', nameCn: '暖武里码头钟楼', distance: '8.2 Km.', icon: '🕰️', image: '/images/nearby/non.png' },
    ];

    const getPlaceName = (place) => {
        if (language === 'th') return place.nameTh;
        if (language === 'cn') return place.nameCn || place.name;
        return place.name;
    };

    return (
        <div className="nearby-page">
            <Header />

            {/* Hero Banner */}
            <section className="nearby-hero">
                <div className="nearby-hero__overlay"></div>
                <div className="nearby-hero__content">
                    <span className="nearby-hero__subtitle">{t('nearbyPage.heroSubtitle')}</span>
                    <h1 className="nearby-hero__title">Nearby Places</h1>
                    <p className="nearby-hero__description">
                        {t('nearbyPage.heroDescription')}
                    </p>
                </div>
            </section>

            <main>
                {/* Nearby Places Grid */}
                <section className="nearby-places section">
                    <div className="container">
                        <div className="nearby-places__grid">
                            {nearbyPlaces.map((place, index) => (
                                <div key={index} className="nearby-card">
                                    {/* Image Placeholder */}
                                    <div className="nearby-card__image">
                                        {place.image ? (
                                            <img
                                                src={place.image}
                                                alt={place.name}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                        ) : (
                                            <div className="nearby-card__image-placeholder">
                                                <span>{place.icon}</span>
                                            </div>
                                        )}
                                        <div className="nearby-card__distance-badge">
                                            {place.distance}
                                        </div>
                                    </div>
                                    {/* Content */}
                                    <div className="nearby-card__content">
                                        <h3 className="nearby-card__name">{getPlaceName(place)}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Map */}
                        <div className="nearby-places__map">
                            <iframe
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                src="https://maps.google.com/maps?q=VGJ2%2B29%20Nonthaburi&t=&z=17&ie=UTF8&iwloc=&output=embed"
                            ></iframe>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Nearby;
