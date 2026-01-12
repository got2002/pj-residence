import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useLanguage } from '../context/LanguageContext';
import './Booking.css';

const DailyBooking = () => {
    const { t, language } = useLanguage();
    const location = useLocation();
    const searchParams = location.state || {};

    const [step, setStep] = useState(1);
    const [isCustomGuests, setIsCustomGuests] = useState(false);
    const [isCustomRooms, setIsCustomRooms] = useState(false);

    // Check if initial values exceed standard options
    useEffect(() => {
        if (searchParams.guests > 10) setIsCustomGuests(true);
        if (searchParams.rooms > 10) setIsCustomRooms(true);
    }, []);

    const [formData, setFormData] = useState({
        // Step 1: Room Selection
        roomType: 'daily',
        bookingType: 'reserve',
        checkIn: searchParams.checkIn || '',
        checkOut: searchParams.checkOut || '',
        guests: searchParams.guests || 1,
        rooms: searchParams.rooms || 1,

        // Step 2: Guest Information
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        idNumber: '',
        nationality: 'thai',

        // Step 3: Special Requests
        specialRequests: '',
        arrivalTime: '14:00',
        earlyCheckIn: false,
        lateCheckOut: false,
        extraBed: false,
        breakfastIncluded: true,

        // Step 4: Payment
        paymentMethod: 'bank_transfer',
        paymentMethod: 'bank_transfer',
        agreeTerms: false,
        isGovernment: false,
        isGoogleReview: false
    });

    const roomTypes = {
        th: [
            {
                id: 'daily',
                name: 'ห้องพักรายวัน',
                price: 850,
                priceUnit: 'บาท/คืน',
                popular: false,
                pricing: [
                    { label: 'ค่าประกันห้อง', value: '1,000 บาท (1 คืน)' }
                ],
                amenities: [
                    { label: 'WiFi', value: 'ฟรี' },
                    { label: 'ทำความสะอาด ทุกวัน' },
                    { label: 'เฟอร์นิเจอร์ครบครัน' },
                    { label: 'เครื่องปรับอากาศ' },
                    { label: 'กาแฟและเครื่องดื่ม ฟรี' },
                    { label: 'ทีวี' },
                    { label: 'เครื่องทำน้ำอุ่น' },
                    { label: 'ไมโครเวฟ' },
                    { label: 'ตู้เย็น' },
                    { label: 'ลิฟต์' },
                    { label: 'รองรับวีลแชร์' },
                    { label: 'รองรับผู้สูงอายุและผู้พิการ' }
                ]
            }
        ],
        en: [
            {
                id: 'daily',
                name: 'Daily Room',
                price: 850,
                priceUnit: 'THB/night',
                popular: false,
                pricing: [
                    { label: 'Room Deposit', value: '1,000 THB (1 night)' }
                ],
                amenities: [
                    { label: 'WiFi', value: 'Free' },
                    { label: 'Daily Cleaning' },
                    { label: 'Fully Furnished' },
                    { label: 'Air Conditioning' },
                    { label: 'Coffee & Drinks Free' },
                    { label: 'TV' },
                    { label: 'Water Heater' },
                    { label: 'Microwave' },
                    { label: 'Refrigerator' },
                    { label: 'Elevator' },
                    { label: 'Wheelchair Accessible' },
                    { label: 'Elderly & Disabled Friendly' }
                ]
            }
        ],
        cn: [
            {
                id: 'daily',
                name: '日租房',
                price: 850,
                priceUnit: '泰铢/晚',
                popular: false,
                pricing: [
                    { label: '押金', value: '1,000 泰铢 (1晚)' }
                ],
                amenities: [
                    { label: 'WiFi', value: '免费' },
                    { label: '每天清洁' },
                    { label: '家具齐全' },
                    { label: '空调' },
                    { label: '咖啡和饮料 免费' },
                    { label: '电视' },
                    { label: '热水器' },
                    { label: '微波炉' },
                    { label: '冰箱' },
                    { label: '电梯' },
                    { label: '轮椅通道' },
                    { label: '适宜老人和残疾人' }
                ]
            }
        ]
    };

    const labels = {
        th: {
            heroSubtitle: 'จองห้องพัก',
            heroTitle: 'ระบบจองห้องพัก (รายวัน)',
            heroDescription: 'จองห้องพักรายวันกับเราง่ายๆ เพียงไม่กี่ขั้นตอน',
            step1: 'เลือกห้องพัก',
            step2: 'ข้อมูลผู้เข้าพัก',
            step3: 'คำขอพิเศษ',
            step4: 'ยืนยันการจอง',
            selectRoom: 'เลือกประเภทห้องพัก',
            checkIn: 'วันที่เช็คอิน',
            checkOut: 'วันที่เช็คเอาท์',
            guests: 'จำนวนผู้เข้าพัก',
            rooms: 'จำนวนห้อง',
            firstName: 'ชื่อ',
            lastName: 'นามสกุล',
            email: 'อีเมล',
            phone: 'เบอร์โทรศัพท์',
            idNumber: 'เลขบัตรประชาชน / พาสปอร์ต',
            nationality: 'สัญชาติ',
            thai: 'ไทย',
            foreigner: 'ต่างชาติ',
            specialRequests: 'คำขอพิเศษ',
            arrivalTime: 'เวลาเข้าพักโดยประมาณ',
            earlyCheckIn: 'เช็คอินก่อนเวลา (ขึ้นอยู่กับห้องว่าง)',
            lateCheckOut: 'เช็คเอาท์ช้า (ขึ้นอยู่กับห้องว่าง)',
            extraBed: 'เพิ่มเตียงพิเศษ (+500 บาท/คืน)',
            breakfastIncluded: 'รวมอาหารเช้า',
            paymentMethod: 'วิธีการชำระเงิน',
            bankTransfer: 'โอนเงินผ่านธนาคาร',
            creditCard: 'บัตรเครดิต/เดบิต',
            payAtHotel: 'ชำระที่โรงแรม',
            bookingSummary: 'สรุปการจอง',
            roomCost: 'ค่าห้องพัก',
            extraServices: 'บริการเพิ่มเติม',
            total: 'รวมทั้งหมด',
            agreeTerms: 'ฉันยอมรับเงื่อนไขและข้อกำหนดการจอง',
            next: 'ถัดไป',
            back: 'ย้อนกลับ',
            confirmBooking: 'ยืนยันการจอง',
            bookingSuccess: 'จองห้องพักสำเร็จ!',
            bookingSuccessMsg: 'ขอบคุณสำหรับการจอง เราจะส่งรายละเอียดไปยังอีเมลของคุณ',
            bookingNumber: 'หมายเลขการจอง',
            important: 'สำคัญ',
            checkInTime: 'เวลาเช็คอิน: 14:00 น.',
            checkOutTime: 'เวลาเช็คเอาท์: 12:00 น.',
            depositNote: 'กรุณาชำระค่ามัดจำ 50% ภายใน 24 ชั่วโมงเพื่อยืนยันการจอง',
            required: 'จำเป็น',
            person: 'ท่าน',
            room: 'ห้อง',
            night: 'คืน',
            month: 'เดือน'
        },
        en: {
            heroSubtitle: 'Booking',
            heroTitle: 'Daily Room Booking',
            heroDescription: 'Book your daily room with us in just a few steps',
            step1: 'Select Room',
            step2: 'Guest Information',
            step3: 'Special Requests',
            step4: 'Booking Confirmation',
            selectRoom: 'Select Room Type',
            checkIn: 'Check-in Date',
            checkOut: 'Check-out Date',
            guests: 'Number of Guests',
            rooms: 'Number of Rooms',
            firstName: 'First Name',
            lastName: 'Last Name',
            email: 'Email',
            phone: 'Phone Number',
            idNumber: 'ID / Passport Number',
            nationality: 'Nationality',
            thai: 'Thai',
            foreigner: 'Foreigner',
            specialRequests: 'Special Requests',
            arrivalTime: 'Estimated Arrival Time',
            earlyCheckIn: 'Early Check-in (subject to availability)',
            lateCheckOut: 'Late Check-out (subject to availability)',
            extraBed: 'Extra Bed (+500 THB/night)',
            breakfastIncluded: 'Breakfast Included',
            paymentMethod: 'Payment Method',
            bankTransfer: 'Bank Transfer',
            creditCard: 'Credit/Debit Card',
            payAtHotel: 'Pay at Hotel',
            bookingSummary: 'Booking Summary',
            roomCost: 'Room Cost',
            extraServices: 'Extra Services',
            total: 'Total',
            agreeTerms: 'I agree to the booking terms and conditions',
            next: 'Next',
            back: 'Back',
            confirmBooking: 'Confirm Booking',
            bookingSuccess: 'Booking Successful!',
            bookingSuccessMsg: 'Thank you for your booking. Details will be sent to your email.',
            bookingNumber: 'Booking Number',
            important: 'Important',
            checkInTime: 'Check-in Time: 2:00 PM',
            checkOutTime: 'Check-out Time: 12:00 PM',
            depositNote: 'Please pay 50% deposit within 24 hours to confirm your booking',
            required: 'Required',
            person: 'person(s)',
            room: 'room(s)',
            night: 'night(s)',
            month: 'month(s)'
        },
        cn: {
            heroSubtitle: '预订客房',
            heroTitle: '日租房预订',
            heroDescription: '只需几步即可轻松预订客房',
            step1: '选择客房',
            step2: '客人信息',
            step3: '特殊要求',
            step4: '确认预订',
            selectRoom: '选择房型',
            checkIn: '入住日期',
            checkOut: '退房日期',
            guests: '客人数量',
            rooms: '房间数量',
            firstName: '名',
            lastName: '姓',
            email: '邮箱',
            phone: '电话号码',
            idNumber: '身份证/护照号码',
            nationality: '国籍',
            thai: '泰国',
            foreigner: '外国',
            specialRequests: '特殊要求',
            arrivalTime: '预计到达时间',
            earlyCheckIn: '提前入住（视房间情况）',
            lateCheckOut: '延迟退房（视房间情况）',
            extraBed: '加床（+500泰铢/晚）',
            breakfastIncluded: '含早餐',
            paymentMethod: '付款方式',
            bankTransfer: '银行转账',
            creditCard: '信用卡/借记卡',
            payAtHotel: '到店支付',
            bookingSummary: '预订摘要',
            roomCost: '房费',
            extraServices: '额外服务',
            total: '总计',
            agreeTerms: '我同意预订条款和条件',
            next: '下一步',
            back: '返回',
            confirmBooking: '确认预订',
            bookingSuccess: '预订成功！',
            bookingSuccessMsg: '感谢您的预订，详情将发送到您的邮箱。',
            bookingNumber: '预订号',
            important: '重要',
            checkInTime: '入住时间: 下午2:00',
            checkOutTime: '退房时间: 中午12:00',
            depositNote: '请在24小时内支付50%定金以确认预订',
            required: '必填',
            person: '位客人',
            room: '间',
            night: '晚',
            month: '月'
        }
    };

    const l = labels[language] || labels.th;
    const rooms = roomTypes[language] || roomTypes.th;

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (step < 4) {
            setStep(step + 1);
        } else {
            // Submit booking
            try {
                const bookingNumber = 'PJ' + Date.now().toString().slice(-8);
                await fetch('/api/notify', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        ...formData,
                        totalPayable,
                        bookingNumber,
                        note: formData.specialRequests
                    })
                });
            } catch (error) {
                console.error('Notify failed', error);
            }
            setStep(5); // Success step
        }
    };

    const calculatePrice = () => {
        const selectedRoom = rooms.find(r => r.id === formData.roomType);

        let basePrice = selectedRoom?.price || 0;

        // Overlay Government Check (Removed auto-discount)
        // if (formData.roomType === 'daily' && (formData.isGovernment || formData.isGoogleReview)) {
        //    basePrice = 650;
        // }

        let extraCost = 0;

        // Calculate nights
        let nights = 1;
        if (formData.checkIn && formData.checkOut) {
            const start = new Date(formData.checkIn);
            const end = new Date(formData.checkOut);
            const diffTime = end - start;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            nights = diffDays > 0 ? diffDays : 1;
        }

        // Get deposit from pricing data
        let deposit = 1000 * formData.rooms; // 1000 per room

        if (formData.extraBed) {
            extraCost += 500;
        }

        const roomTotal = (basePrice * formData.rooms * nights) + (extraCost * nights);
        const totalPayable = roomTotal + deposit;

        return { basePrice, extraCost: extraCost * nights, deposit, roomTotal, totalPayable, nights };
    };

    const { basePrice, extraCost, deposit, roomTotal, totalPayable } = calculatePrice();

    const generateBookingNumber = () => {
        return 'PJ' + Date.now().toString().slice(-8);
    };

    return (
        <div className="booking-page">
            <Header />

            {/* Hero Banner */}
            <section className="booking-hero">
                <div className="booking-hero__overlay"></div>
                <div className="booking-hero__content">
                    <span className="booking-hero__subtitle">{l.heroSubtitle}</span>
                    <h1 className="booking-hero__title">{l.heroTitle}</h1>
                    <p className="booking-hero__description">{l.heroDescription}</p>
                </div>
            </section>

            <main className="booking-main section">
                <div className="container">
                    {/* Progress Steps */}
                    {step < 5 && (
                        <div className="booking-steps">
                            <div className={`booking-step ${step >= 1 ? 'booking-step--active' : ''} ${step > 1 ? 'booking-step--completed' : ''}`}>
                                <div className="booking-step__number">1</div>
                                <span className="booking-step__label">{l.step1}</span>
                            </div>
                            <div className="booking-step__line"></div>
                            <div className={`booking-step ${step >= 2 ? 'booking-step--active' : ''} ${step > 2 ? 'booking-step--completed' : ''}`}>
                                <div className="booking-step__number">2</div>
                                <span className="booking-step__label">{l.step2}</span>
                            </div>
                            <div className="booking-step__line"></div>
                            <div className={`booking-step ${step >= 3 ? 'booking-step--active' : ''} ${step > 3 ? 'booking-step--completed' : ''}`}>
                                <div className="booking-step__number">3</div>
                                <span className="booking-step__label">{l.step3}</span>
                            </div>
                            <div className="booking-step__line"></div>
                            <div className={`booking-step ${step >= 4 ? 'booking-step--active' : ''}`}>
                                <div className="booking-step__number">4</div>
                                <span className="booking-step__label">{l.step4}</span>
                            </div>
                        </div>
                    )}

                    <div className={`booking-content ${step !== 4 ? 'booking-content--centered' : ''}`}>
                        <form className="booking-form" onSubmit={handleSubmit}>
                            {/* Step 1: Room Selection */}
                            {step === 1 && (
                                <div className="booking-form__step">
                                    <h2 className="booking-form__title">{l.step1}</h2>

                                    <div className="booking-form__group">
                                        <label>{l.selectRoom} <span className="required">*</span></label>
                                        <div className="booking-room-options">
                                            {rooms.map(room => (
                                                <label
                                                    key={room.id}
                                                    className={`booking-room-option ${formData.roomType === room.id ? 'booking-room-option--selected' : ''}`}
                                                >
                                                    <input
                                                        type="radio"
                                                        name="roomType"
                                                        value={room.id}
                                                        checked={formData.roomType === room.id}
                                                        onChange={handleChange}
                                                        disabled={room.id !== 'daily'} // Force Daily Only
                                                    />
                                                    <div className="booking-room-option__content">
                                                        <img src={`/images/gallery__placeholder${room.id === 'daily' ? '1' : ''}.png`} alt={room.name} />
                                                        <div className="booking-room-option__info">
                                                            <h4>{room.name}</h4>
                                                            <span className="booking-room-option__price">
                                                                {room.price.toLocaleString()} {room.priceUnit}
                                                            </span>

                                                            {/* Government Official Checkbox (Only for Daily) */}
                                                            {room.id === 'daily' && (
                                                                <>
                                                                    <div className="gov-checkbox-wrapper" style={{ margin: '0.5rem 0', padding: '0.5rem', background: '#f0fdf4', borderRadius: '6px', border: '1px solid #bbf7d0' }}>
                                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#166534', fontWeight: '600' }}>
                                                                            {language === 'th' ? 'ข้าราชการ/รัฐวิสาหกิจ (650 บาท/คืน)' : language === 'cn' ? '公务员/国企员工 (650 泰铢/晚)' : 'Gov. Official (650 THB/night)'}
                                                                            <span style={{ fontSize: '0.75rem', fontWeight: 'normal', color: '#15803d' }}>{language === 'th' ? '(*โปรดแสดงบัตร)' : language === 'cn' ? '(*请出示证件)' : '(*Show ID)'}</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="google-review-wrapper" style={{ margin: '0.5rem 0', padding: '0.5rem', background: '#eff6ff', borderRadius: '6px', border: '1px solid #bfdbfe' }}>
                                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#1e40af', fontWeight: '600' }}>
                                                                            {language === 'th' ? 'รีวิว Google Map 5 ดาว (650 บาท/คืน)' : language === 'cn' ? '谷歌地图 5 星好评 (650 泰铢/晚)' : 'Google Map 5-Star Review (650 THB/night)'}
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            )}

                                                            {/* Pricing Section */}
                                                            <ul className="booking-room-option__pricing">
                                                                {room.pricing.map((item, idx) => (
                                                                    <li key={idx}>
                                                                        <span className="pricing-label">{item.label}:</span>
                                                                        <span className="pricing-value">{item.value}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>

                                                            {/* Amenities Section */}
                                                            <div className="booking-room-option__amenities-title">สิ่งอำนวยความสะดวก</div>
                                                            <ul className="booking-room-option__amenities">
                                                                {room.amenities.map((item, idx) => (
                                                                    <li key={idx}>
                                                                        <span className="amenity-label">{item.label}</span>
                                                                        {item.value && <span className="amenity-value"> ({item.value})</span>}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Daily Room Form Parts */}
                                    <div className="booking-form__row">
                                        <div className="booking-form__group">
                                            <label htmlFor="checkIn">{l.checkIn} <span className="required">*</span></label>
                                            <input
                                                type="date"
                                                id="checkIn"
                                                name="checkIn"
                                                value={formData.checkIn}
                                                onChange={handleChange}
                                                required
                                                min={new Date().toISOString().split('T')[0]}
                                            />
                                        </div>
                                        <div className="booking-form__group">
                                            <label htmlFor="checkOut">{l.checkOut} <span className="required">*</span></label>
                                            <input
                                                type="date"
                                                id="checkOut"
                                                name="checkOut"
                                                value={formData.checkOut}
                                                onChange={handleChange}
                                                required
                                                min={formData.checkIn || new Date().toISOString().split('T')[0]}
                                            />
                                        </div>
                                    </div>

                                    <div className="booking-form__row">
                                        <div className="booking-form__group">
                                            <label htmlFor="guests">{l.guests}</label>
                                            {!isCustomGuests ? (
                                                <select
                                                    id="guests"
                                                    name="guests"
                                                    value={formData.guests}
                                                    onChange={(e) => {
                                                        if (e.target.value === 'custom') {
                                                            setIsCustomGuests(true);
                                                            setFormData(p => ({ ...p, guests: '' }));
                                                        } else {
                                                            handleChange(e);
                                                        }
                                                    }}
                                                >
                                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                                                        <option key={n} value={n}>{n} {l.person}</option>
                                                    ))}
                                                    <option value="custom">{t('contactPage.topics.other') || 'Other'}</option>
                                                </select>
                                            ) : (
                                                <div className="custom-input-group">
                                                    <input
                                                        type="number"
                                                        name="guests"
                                                        value={formData.guests}
                                                        onChange={handleChange}
                                                        placeholder={l.guests}
                                                        min="1"
                                                        autoFocus
                                                    />
                                                    <button
                                                        type="button"
                                                        className="btn-link"
                                                        onClick={() => setIsCustomGuests(false)}
                                                        style={{ fontSize: '0.8rem', marginLeft: '5px' }}
                                                    >
                                                        ↩
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                        <div className="booking-form__group">
                                            <label htmlFor="rooms">{l.rooms}</label>
                                            {!isCustomRooms ? (
                                                <select
                                                    id="rooms"
                                                    name="rooms"
                                                    value={formData.rooms}
                                                    onChange={(e) => {
                                                        if (e.target.value === 'custom') {
                                                            setIsCustomRooms(true);
                                                            setFormData(p => ({ ...p, rooms: '' }));
                                                        } else {
                                                            handleChange(e);
                                                        }
                                                    }}
                                                >
                                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                                                        <option key={n} value={n}>{n} {l.room}</option>
                                                    ))}
                                                    <option value="custom">{language === 'th' ? 'อื่นๆ' : 'Other'}</option>
                                                </select>
                                            ) : (
                                                <div className="custom-input-group">
                                                    <input
                                                        type="number"
                                                        name="rooms"
                                                        value={formData.rooms}
                                                        onChange={handleChange}
                                                        placeholder={l.rooms}
                                                        min="1"
                                                        autoFocus
                                                    />
                                                    <button
                                                        type="button"
                                                        className="btn-link"
                                                        onClick={() => setIsCustomRooms(false)}
                                                        style={{ fontSize: '0.8rem', marginLeft: '5px' }}
                                                    >
                                                        ↩
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 2: Guest Information */}
                            {step === 2 && (
                                <div className="booking-form__step">
                                    <h2 className="booking-form__title">{l.step2}</h2>

                                    <div className="booking-form__row">
                                        <div className="booking-form__group">
                                            <label htmlFor="firstName">{l.firstName} <span className="required">*</span></label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="booking-form__group">
                                            <label htmlFor="lastName">{l.lastName} <span className="required">*</span></label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="booking-form__row">
                                        <div className="booking-form__group">
                                            <label htmlFor="email">{l.email} <span className="required">*</span></label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="booking-form__group">
                                            <label htmlFor="phone">{l.phone} <span className="required">*</span></label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                placeholder="08X-XXX-XXXX"
                                            />
                                        </div>
                                    </div>

                                    <div className="booking-form__row">
                                        <div className="booking-form__group">
                                            <label htmlFor="idNumber">{l.idNumber} <span className="required">*</span></label>
                                            <input
                                                type="text"
                                                id="idNumber"
                                                name="idNumber"
                                                value={formData.idNumber}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="booking-form__group">
                                            <label htmlFor="nationality">{l.nationality}</label>
                                            <select id="nationality" name="nationality" value={formData.nationality} onChange={handleChange}>
                                                <option value="thai">{l.thai}</option>
                                                <option value="foreigner">{l.foreigner}</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Special Requests / Additional Info */}
                            {step === 3 && (
                                <div className="booking-form__step">
                                    <h2 className="booking-form__title">{l.step3}</h2>

                                    <div className="booking-form__group">
                                        <label htmlFor="arrivalTime">{l.arrivalTime}</label>
                                        <select id="arrivalTime" name="arrivalTime" value={formData.arrivalTime} onChange={handleChange}>
                                            {['14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'].map(time => (
                                                <option key={time} value={time}>{time}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="booking-form__checkboxes">
                                        <label className="booking-checkbox">
                                            <input
                                                type="checkbox"
                                                name="earlyCheckIn"
                                                checked={formData.earlyCheckIn}
                                                onChange={handleChange}
                                            />
                                            <span className="booking-checkbox__mark"></span>
                                            <span className="booking-checkbox__label">{l.earlyCheckIn}</span>
                                        </label>

                                        <label className="booking-checkbox">
                                            <input
                                                type="checkbox"
                                                name="lateCheckOut"
                                                checked={formData.lateCheckOut}
                                                onChange={handleChange}
                                            />
                                            <span className="booking-checkbox__mark"></span>
                                            <span className="booking-checkbox__label">{l.lateCheckOut}</span>
                                        </label>

                                        <label className="booking-checkbox">
                                            <input
                                                type="checkbox"
                                                name="extraBed"
                                                checked={formData.extraBed}
                                                onChange={handleChange}
                                            />
                                            <span className="booking-checkbox__mark"></span>
                                            <span className="booking-checkbox__label">{l.extraBed}</span>
                                        </label>


                                    </div>

                                    <div className="booking-form__group">
                                        <label htmlFor="specialRequests">{l.specialRequests}</label>
                                        <textarea
                                            id="specialRequests"
                                            name="specialRequests"
                                            value={formData.specialRequests}
                                            onChange={handleChange}
                                            rows="4"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Step 4: Payment / Confirmation */}
                            {step === 4 && (
                                <div className="booking-form__step">
                                    <h2 className="booking-form__title">{l.step4}</h2>



                                    <div className="booking-important">
                                        <h4>⚠️ {l.important}</h4>
                                        <ul>
                                            <li>{l.checkInTime}</li>
                                            <li>{l.checkOutTime}</li>
                                        </ul>
                                        <ul className="booking-critical-list">
                                            <li>* {language === 'th' ? 'การทำรายการนี้ถือเป็นการยืนยันการจองห้องพักเรียบร้อยแล้ว' : language === 'cn' ? '此交易即确认为已完成客房预订' : 'This transaction confirms your room booking'}</li>
                                            <li>* {language === 'th' ? 'กรุณาติดต่อแผนกต้อนรับเพื่อลงทะเบียนเข้าพักในวันที่กำหนด' : language === 'cn' ? '请在预定日期前往酒店前台办理入住手续' : 'Please proceed to the hotel reception for check-in on the scheduled date'}</li>
                                            <li>* {language === 'th' ? 'ไม่มีค่าธรรมเนียมในการดำเนินการจอง' : language === 'cn' ? '本次预订不收取任何服务费' : 'No booking fees or service charges apply'}</li>
                                        </ul>
                                    </div>

                                    <label className="booking-checkbox booking-checkbox--terms">
                                        <input
                                            type="checkbox"
                                            name="agreeTerms"
                                            checked={formData.agreeTerms}
                                            onChange={handleChange}
                                            required
                                        />
                                        <span className="booking-checkbox__mark"></span>
                                        <span className="booking-checkbox__label">{l.agreeTerms} <span className="required">*</span></span>
                                    </label>
                                </div>
                            )}

                            {/* Step 5: Success */}
                            {step === 5 && (
                                <div className="booking-success">
                                    <div className="booking-success__icon">✅</div>
                                    <h2 className="booking-success__title">{l.bookingSuccess}</h2>
                                    <p className="booking-success__message">{l.bookingSuccessMsg}</p>
                                    <div className="booking-success__number">
                                        <span>{l.bookingNumber}:</span>
                                        <strong>{generateBookingNumber()}</strong>
                                    </div>
                                    <div className="booking-success__details">
                                        <p><strong>{rooms.find(r => r.id === formData.roomType)?.name}</strong></p>
                                        <p>{formData.checkIn} → {formData.checkOut}</p>
                                        <p>{formData.guests} {l.person} • {formData.rooms} {l.room}</p>
                                    </div>
                                </div>
                            )}

                            {/* Navigation Buttons */}
                            {step < 5 && (
                                <div className="booking-form__actions">
                                    {step > 1 && (
                                        <button type="button" className="btn btn-outline-gold" onClick={() => setStep(step - 1)}>
                                            {l.back}
                                        </button>
                                    )}

                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={step === 4 && !formData.agreeTerms}
                                    >
                                        {step === 4 ? l.confirmBooking : l.next}
                                    </button>
                                </div>
                            )}
                        </form>

                        {/* Booking Summary Sidebar (Only on Step 4) */}
                        {step === 4 && (
                            <div className="booking-summary">
                                <h3 className="booking-summary__title">{l.bookingSummary}</h3>

                                <div className="booking-summary__room">
                                    <img src={`/images/gallery__placeholder${formData.roomType === 'daily' ? '1' : ''}.png`} alt="Room" />
                                    <div>
                                        <h4>{rooms.find(r => r.id === formData.roomType)?.name}</h4>
                                        <span>{formData.rooms} {l.room}</span>
                                    </div>
                                </div>

                                {formData.checkIn && formData.checkOut && (
                                    <div className="booking-summary__dates">
                                        <div>
                                            <span>{l.checkIn}</span>
                                            <strong>{formData.checkIn}</strong>
                                        </div>
                                        <div>
                                            <span>{l.checkOut}</span>
                                            <strong>{formData.checkOut}</strong>
                                        </div>
                                    </div>
                                )}

                                <div className="booking-summary__line"></div>

                                <div className="booking-summary__row">
                                    <span>{l.roomCost}</span>
                                    <span>฿{basePrice.toLocaleString()}</span>
                                </div>

                                {extraCost > 0 && (
                                    <div className="booking-summary__row">
                                        <span>{l.extraServices}</span>
                                        <span>฿{extraCost.toLocaleString()}</span>
                                    </div>
                                )}

                                <div className="booking-summary__row booking-summary__subtotal">
                                    <span>{language === 'th' ? 'รวมค่าห้อง' : language === 'cn' ? '房费小计' : 'Room Subtotal'}</span>
                                    <span>฿{roomTotal.toLocaleString()}</span>
                                </div>

                                <div className="booking-summary__line"></div>

                                <div className="booking-summary__row booking-summary__deposit">
                                    <span>{language === 'th' ? 'ค่าประกันห้อง' : language === 'cn' ? '押金' : 'Room Deposit'}</span>
                                    <span>฿{deposit.toLocaleString()}</span>
                                </div>
                                <div className="booking-summary__deposit-note">
                                    {language === 'th' ? '(ได้คืนเมื่อย้ายออก)' : language === 'cn' ? '(退房时退还)' : '(Refundable on checkout)'}
                                </div>

                                <div className="booking-summary__line"></div>

                                <div className="booking-summary__row booking-summary__total">
                                    <span>{language === 'th' ? 'ค่าบริการทั้งหมด' : language === 'cn' ? '总费用' : 'Total Service Cost'}</span>
                                    <span>฿{totalPayable.toLocaleString()}</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default DailyBooking;
