import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useLanguage } from '../context/LanguageContext';
import './Nearby.css';

const Nearby = () => {
    const { t, language } = useLanguage();

    const nearbyPlaces = [
        { name: 'Sanambin Nam Market', nameTh: 'ตลาดนัดสนามบินน้ำ (ตลาดนัดหน้าวัง)', nameCn: 'Sanambin Nam Market', time: { th: '1 นาที', en: '1 Min', cn: '1 分钟' }, icon: '🛍️', image: '/images/nearby/fd05af89b37e47a8b2d80c48e0bbbc16.jpg' },
        { name: 'Makro Food Service', nameTh: 'แม็คโคร ฟูดเซอร์วิส สนามบินน้ำ', nameCn: 'Makro Food Service', time: { th: '2 นาที', en: '2 Mins', cn: '2 分钟' }, icon: '🛒', image: '/images/nearby/20230220_Makro.jpg' },
        { name: 'The Government Lottery Office', nameTh: 'สำนักงานสลากกินแบ่งรัฐบาล', nameCn: '政府彩票办公室', time: { th: '3 นาที', en: '3 Mins', cn: '3 分钟' }, icon: '🏛️', image: '/images/nearby/5.jpg' },
        { name: 'Big C Food Service', nameTh: 'บิ๊กซี ฟู๊ด เซอร์วิส สาขาสนามบินน้ำ', nameCn: 'Big C Food Service', time: { th: '4 นาที', en: '4 Mins', cn: '4 分钟' }, icon: '🛒', image: '/images/nearby/images.jfif' },
        { name: 'Pink Line MRT (Sanambin Nam)', nameTh: 'รถไฟฟ้าสายสีชมพู (สถานีสนามบินน้ำ)', nameCn: '粉红线轻轨', time: { th: '5 นาที', en: '5 Mins', cn: '5 分钟' }, icon: '🚇', image: '/images/nearby/btspink.jpg' },
        { name: 'Central Northville', nameTh: 'เซ็นทรัล นอร์ทวิลล์', nameCn: 'Central Northville', time: { th: '5 นาที', en: '5 Mins', cn: '5 分钟' }, icon: '🛍️', image: '/images/nearby/rattanathibet.jpg' },
        { name: 'NACC', nameTh: 'สำนักงาน ป.ป.ช.', nameCn: '反腐败委员会', time: { th: '5 นาที', en: '5 Mins', cn: '5 分钟' }, icon: '⚖️', image: '/images/nearby/6.jpg' },
        { name: 'Owl Night Market', nameTh: 'ตลาดนกฮูก', nameCn: '猫头鹰夜市', time: { th: '5 นาที', en: '5 Mins', cn: '5 分钟' }, icon: '🦉', image: '/images/nearby/nuxhug.png' },
        { name: 'Ministry of Commerce', nameTh: 'กระทรวงพาณิชย์', nameCn: '商务部', time: { th: '6 นาที', en: '6 Mins', cn: '6 分钟' }, icon: '🏢', image: '/images/nearby/14.jpg' },
        { name: 'Esplanade', nameTh: 'เอสพลานาด', nameCn: 'Esplanade购物中心', time: { th: '8 นาที', en: '8 Mins', cn: '8 分钟' }, icon: '🛒', image: '/images/nearby/10.jpg' },
        { name: 'Makut Rommayasaran Park', nameTh: 'อุทยานมกุฏรมยสราญ', nameCn: 'Makut Rommayasaran Park', time: { th: '9 นาที', en: '9 Mins', cn: '9 分钟' }, icon: '🌳', image: '/images/nearby/2017113096a3be3cf272e017046d1b2674a52bd3151826.jpg' },
        { name: 'Lotus Rattanathibet', nameTh: 'โลตัส รัตนาธิเบศร์', nameCn: 'Lotus Rattanathibet', time: { th: '9 นาที', en: '9 Mins', cn: '9 分钟' }, icon: '🛒', image: '/images/nearby/32e831df9bd24653a9db34e93ed82cab.jpg' },
        { name: 'Department of Corrections', nameTh: 'กรมราชทัณฑ์', nameCn: '惩教局', time: { th: '9 นาที', en: '9 Mins', cn: '9 分钟' }, icon: '🏛️', image: '/images/nearby/11.jpg' },
        { name: 'Rajamangala University', nameTh: 'มหาวิทยาลัยเทคโนโลยีราชมงคลสุวรรณภูมิ', nameCn: '拉贾曼加拉理工大学', time: { th: '9 นาที', en: '9 Mins', cn: '9 分钟' }, icon: '🎓', image: '/images/nearby/12.jpg' },
        { name: 'Ton Sak Market', nameTh: 'ตลาดต้นสัก สนามบินน้ำ', nameCn: 'Ton Sak Market', time: { th: '10 นาที', en: '10 Mins', cn: '10 分钟' }, icon: '🛍️', image: '/images/nearby/images (1).jfif' },
        { name: 'Suwong Chai Driving Range', nameTh: 'สนามไดรฟ์กอล์​ฟ สุวงค์ชัย', nameCn: 'Suwong Chai Driving Range', time: { th: '11 นาที', en: '11 Mins', cn: '11 分钟' }, icon: '⛳', image: '/images/nearby/images (2).jfif' },
        { name: 'Purple Line MRT (Nonthaburi Civic Center)', nameTh: 'รถไฟฟ้าสายสีม่วง สถานีแยกนนทบุรี 1', nameCn: '紫线轻轨', time: { th: '11 นาที', en: '11 Mins', cn: '11 分钟' }, icon: '🚇', image: '/images/nearby/9.jpg' },
        { name: 'Than Phet Non Market', nameTh: 'ตลาดฐานเพชรนนท์', nameCn: 'Than Phet Non Market', time: { th: '12 นาที', en: '12 Mins', cn: '12 分钟' }, icon: '🛍️', image: '/images/nearby/download.jfif' },
        { name: 'Central Chest Institute of Thailand', nameTh: 'สถาบันโรคทรวงอกกลาง', nameCn: '中央胸科研究所', time: { th: '12 นาที', en: '12 Mins', cn: '12 分钟' }, icon: '🏥', image: '/images/nearby/7.jpg' },
        { name: 'Nonthaburi Pier Clock Tower', nameTh: 'หอนาฬิกา ท่าน้ำนนท์', nameCn: '暖武里码头钟楼', time: { th: '13 นาที', en: '13 Mins', cn: '13 分钟' }, icon: '🕰️', image: '/images/nearby/non.png' },
        { name: 'Pranangklao Hospital', nameTh: 'โรงพยาบาลพระนั่งเกล้า', nameCn: 'Pranangklao医院', time: { th: '14 นาที', en: '14 Mins', cn: '14 分钟' }, icon: '🏥', image: '/images/nearby/13.jpg' },
        { name: 'Ministry of Public Health', nameTh: 'กระทรวงสาธารณสุข', nameCn: '公共卫生部', time: { th: '22 นาที', en: '22 Mins', cn: '22 分钟' }, icon: '🏥', image: '/images/nearby/8.jpg' },
    ];

    const getPlaceName = (place) => {
        if (language === 'th') return place.nameTh;
        if (language === 'cn') return place.nameCn || place.name;
        return place.name;
    };

    const getTime = (place) => {
        return place.time[language] || place.time.en;
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
                                                {/* Placeholder Pattern handled by CSS */}
                                            </div>
                                        )}
                                        <div className="nearby-card__distance-badge">
                                            {getTime(place)}
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
