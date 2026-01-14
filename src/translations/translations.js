const translations = {
    th: {
        nav: {
            home: 'หน้าแรก',
            rooms: 'ห้องพัก',
            facilities: 'สิ่งอำนวยความสะดวก',
            nearby: 'สถานที่ใกล้เคียง',
            gallery: 'แกลเลอรี่',
            contact: 'ติดต่อเรา',
            booking: 'จองห้องพัก'
        },
        footer: {
            description: 'สัมผัสประสบการณ์การพักผ่อนระดับพรีเมียม ด้วยการบริการที่เหนือระดับ ท่ามกลางบรรยากาศที่งดงามและสะดวกสบาย',
            quickLinks: 'ลิงก์ด่วน',
            services: 'บริการ',
            meetingRoom: 'ห้องประชุม',
            promotions: 'โปรโมชั่น',
            newsletter: 'รับข่าวสารและโปรโมชั่น',
            newsletterText: 'สมัครรับข่าวสารเพื่อรับโปรโมชั่นพิเศษ',
            emailPlaceholder: 'กรอกอีเมลของคุณ',
            subscribe: 'สมัคร',
            privacy: 'นโยบายความเป็นส่วนตัว',
            terms: 'ข้อกำหนดและเงื่อนไข'
        },
        hero: {
            slides: [
                {
                    title: 'ยินดีต้อนรับสู่',
                    subtitle: 'PJ-Residence',
                    description: 'สัมผัสประสบการณ์การพักผ่อนระดับพรีเมียม ท่ามกลางบรรยากาศที่งดงามและการบริการระดับ 5 ดาว',
                    cta: 'สำรวจห้องพัก'
                },
                {
                    title: 'ห้องพักหรูหรา',
                    subtitle: 'Exclusive Suites',
                    description: 'ห้องพักที่ออกแบบอย่างประณีต พร้อมสิ่งอำนวยความสะดวกครบครัน มอบความสะดวกสบายสูงสุด',
                    cta: 'ดูห้องพัก'
                },
                {
                    title: 'ทำเลที่ตั้งเยี่ยม',
                    subtitle: 'Prime Location',
                    description: 'ตั้งอยู่ใจกลางเมือง ใกล้แหล่งช้อปปิ้ง สถานที่ท่องเที่ยว และระบบขนส่งสาธารณะ',
                    cta: 'ดูสถานที่ใกล้เคียง'
                }
            ],
            scrollDown: 'เลื่อนลง',
            checkIn: 'เช็คอิน',
            checkOut: 'เช็คเอาท์',
            guests: 'ผู้เข้าพัก',
            guestOptions: ['1 ท่าน', '2 ท่าน', '3 ท่าน', '4 ท่าน'],
            roomLabel: 'ห้อง',
            roomOptions: ['1 ห้อง', '2 ห้อง', '3 ห้อง'],
            searchRooms: 'ค้นหาห้องว่าง',
            goToSlide: 'ไปยังสไลด์'
        },
        about: {
            subtitle: 'เกี่ยวกับเรา',
            star: 'ดาว',
            description1: 'PJ-Residence เรสซิเด้นท์หรู บนถนนนนทบุรี (ซอยนนทบุรี 38) ให้บริการห้องพัก พร้อมอาหารเช้า เติมความสุขตลอดการเข้าพักด้วยสิ่งอำนวยความสะดวกครบครัน',
            description2: 'ตอบโจทย์ชีวิตคนเมืองที่ต้องการที่พัก เสมือนบ้านหลังที่สองของคุณ เน้นความเป็นส่วนตัว สะอาด และปลอดภัย',
            likeSecondHome: 'เสมือนบ้านหลังที่สองของคุณ',
            features: [
                { icon: '🔐', text: 'ประตูระบบ Door Rfid Tec และ Key Card ทุกห้อง' },
                { icon: '📹', text: 'กล้องวงจรปิด (CCTV) ตลอด 24 ชั่วโมง' },
                { icon: '📶', text: 'อินเตอร์เน็ต WiFi ฟรี!!' },
                { icon: '🍳', text: 'พร้อมอาหารเช้า' },
                { icon: '🧹', text: 'สะอาด และปลอดภัย' },
                { icon: '🏠', text: 'เน้นความเป็นส่วนตัว' }
            ]
        },
        accommodations: {
            subtitle: 'ห้องพัก',
            title: 'ที่พักสุดหรู',
            description: 'เลือกห้องพักที่เหมาะกับคุณ ทุกห้องออกแบบมาเพื่อความสะดวกสบายสูงสุด',
            viewDetails: 'ดูรายละเอียด',
            govOfficial: 'ข้าราชการ/รัฐวิสาหกิจ (650 บาท/คืน)',
            govSub: '(*โปรดแสดงบัตร)',
            googleReview: 'รีวิว Google Map 5 ดาว (650 บาท/คืน)',
            perNight: '/คืน',
            viewAllRooms: 'ดูรายระเอียดห้องพัก',
            perMonth: '/เดือน',
            rooms: [
                {
                    name: 'ห้องพักรายเดือน',
                    nameEn: 'Monthly Room',
                    price: '฿5,000 - 8,500',
                    unit: 'perMonth',
                    description: 'ห้องพักพร้อมเฟอร์นิเจอร์ครบครัน เหมาะสำหรับการพักอาศัยระยะยาว พร้อมสิ่งอำนวยความสะดวก',
                    size: '28-32 ตร.ม.',
                    guests: '2 ท่าน',
                    bed: 'เตียง King Size',
                    features: ['เฟอร์นิเจอร์ครบ', 'ที่จอดรถ', 'ระบบความปลอดภัย']
                },
                {
                    name: 'ห้องพักรายวัน',
                    nameEn: 'Daily Room',
                    price: '฿850',
                    unit: 'perNight',
                    description: 'ห้องพักสำหรับนักเดินทาง สะอาด ปลอดภัย พร้อมบริการทำความสะอาดและน้ำดื่ม',
                    size: '28-32 ตร.ม.',
                    guests: '2 ท่าน',
                    bed: 'เตียง King Size',
                    features: ['WiFi ฟรี', 'ทำความสะอาด', 'น้ำดื่มฟรี']
                }
            ]
        },
        nearbyPlaces: {
            subtitle: 'สถานที่ใกล้เคียง',
            description: 'ตั้งอยู่ใจกลางเมือง เดินทางสะดวกสบายไปยังสถานที่สำคัญต่างๆ',
            categories: [
                { category: 'ช้อปปิ้ง & ไลฟ์สไตล์', icon: '🛍️' },
                { category: 'การเดินทาง', icon: '🚇' },
                { category: 'สถานที่ราชการ', icon: '🏛️' },
                { category: 'โรงพยาบาล', icon: '🏥' }
            ]
        },
        gallery: {
            subtitle: 'แกลเลอรี่',
            description: 'สำรวจความงดงามของ PJ-Residence ผ่านภาพถ่ายคุณภาพสูง',
            viewAll: 'ดูแกลเลอรี่ทั้งหมด',
            categories: {
                rooms: 'ห้องพัก',
                lobby: 'ล็อบบี้'
            }
        },
        contact: {
            subtitle: 'ติดต่อเรา',
            description: 'หากมีคำถามหรือต้องการข้อมูลเพิ่มเติม สามารถติดต่อเราได้ตลอด 24 ชั่วโมง',
            address: 'ที่อยู่',
            phone: 'โทรศัพท์',
            email: 'อีเมล',
            workingHours: 'เวลาทำการ',
            open24: 'เปิดให้บริการ 24 ชั่วโมง',
            sendMessage: 'ส่งข้อความถึงเรา',
            name: 'ชื่อ-นามสกุล',
            namePlaceholder: 'กรุณากรอกชื่อของคุณ',
            phonePlaceholder: '08X-XXX-XXXX',
            message: 'ข้อความ',
            messagePlaceholder: 'กรุณากรอกข้อความหรือคำถามของคุณ',
            submit: 'ส่งข้อความ',
            thankYou: 'ขอบคุณสำหรับข้อความ เราจะติดต่อกลับโดยเร็วที่สุด'
        },
        roomsPage: {
            heroSubtitle: 'ห้องพัก',
            heroTitle: 'รายละเอียดห้องพัก',
            heroDescription: 'ต้อนรับคุณด้วยห้องพักในแบบโมเดิร์นสไตล์ จำนวน 36 ห้อง',
            modernStyle: 'ห้องพักโมเดิร์นสไตล์',
            roomDescription: 'PJ-Residence ต้อนรับคุณด้วยห้องพักในแบบโมเดิร์นสไตล์ จำนวน 36 ห้อง แบบเตียงเดี่ยว พร้อมสิ่งอำนวยความสะดวกที่ทันสมัย ทั้ง ตู้เย็น ไมโครเวฟ ทีวี รวมถึง น้ำดื่ม ชา-กาแฟ ฟรี!! ทุกห้อง เครื่องปรับอากาศทุกห้อง',
            amenitiesTitle: 'สิ่งอำนวยความสะดวกในห้องพัก',
            commonAreaTitle: 'พื้นที่ส่วนกลาง',
            pricingSubtitle: 'ราคาห้องพัก',
            pricingTitle: 'อัตราค่าบริการ',
            pricingDescription: 'เลือกแพ็คเกจที่เหมาะกับคุณ',
            popular: 'ยอดนิยม',
            monthly: 'รายเดือน',
            popular: 'ยอดนิยม',
            monthly: 'รายเดือน',
            daily: 'รายวัน',
            rent: 'ค่าเช่า',
            furnitureDeposit: 'ค่าประกันเฟอร์นิเจอร์',
            perMonth: 'บาท/เดือน',
            perNight: 'บาท/คืน',
            deposit: 'ค่าประกันห้อง',
            water: 'ค่าน้ำ',
            electricity: 'ค่าไฟ',
            minContract: 'สัญญาเช่าขั้นต่ำ',
            minContract: 'สัญญาเช่าขั้นต่ำ',
            months: 'เดือน',
            lessThanOneMonth: 'ไม่ถึง 1 เดือน',
            included: 'รวมในราคา',
            priceNote: '* ราคาอาจมีการเปลี่ยนแปลง กรุณาติดต่อสอบถามข้อมูลเพิ่มเติม',
            amenities: [
                { icon: '🛋️', name: 'เฟอร์นิเจอร์ครบครัน' },
                { icon: '❄️', name: 'เครื่องปรับอากาศ' },
                { icon: '☕', name: 'กาแฟและเครื่องดื่ม ฟรี' },
                { icon: '📺', name: 'ทีวี' },
                { icon: '🚿', name: 'เครื่องทำน้ำอุ่น' },
                { icon: '🍳', name: 'ไมโครเวฟ' },
                { icon: '🫖', name: 'กาน้ำร้อน' },
                { icon: '🧊', name: 'ตู้เย็น' },
                { icon: '📡', name: 'จานดาวเทียม' },
                { icon: '🍽️', name: 'ที่ล้างจาน' },
                { icon: '🛗', name: 'ลิฟท์โดยสาร' },
                { icon: '🚫', name: 'ห้ามเลี้ยงสัตว์ทุกชนิด' }
            ],
            facilities: [
                { icon: '🍽️', title: 'ห้องอาหาร', description: 'รองรับได้กว่า 40 ที่นั่ง โปร่งสบาย สามารถปรับเปลี่ยนเป็นห้องประชุมได้' },
                { icon: '📚', title: 'Living Room', description: 'พื้นที่พักผ่อนแบบสบายๆ เพลิดเพลินกับการอ่านหนังสือหลากสไตล์' },
                { icon: '💻', title: 'Computer Zone', description: 'คอมพิวเตอร์ตั้งโต๊ะสำหรับทำงานหรือหาข้อมูลได้แบบไม่มีสะดุด' },
                { icon: '♿', title: 'รองรับผู้สูงอายุและผู้พิการ', description: 'มีสิ่งอำนวยความสะดวกสำหรับผู้สูงอายุและผู้พิการ รวมถึงทางลาดสำหรับรถเข็น' }
            ]
        },
        facilitiesPage: {
            heroSubtitle: 'สิ่งอำนวยความสะดวก',
            heroDescription: 'ครบครันทุกสิ่งอำนวยความสะดวกเพื่อการพักผ่อนที่สมบูรณ์แบบ',
            categories: [
                {
                    category: 'สิ่งอำนวยความสะดวกภายใน',
                    icon: '🏠',
                    items: ['เฟอร์นิเจอร์ครบครัน', 'เครื่องปรับอากาศ', 'ทีวี', 'จานดาวเทียม', 'เครื่องทำน้ำอุ่น', 'ไมโครเวฟ', 'กาน้ำร้อน', 'ตู้เย็น', 'ที่ล้างจาน', 'ลิฟท์โดยสาร', 'ห้ามเลี้ยงสัตว์ทุกชนิด', 'รองรับวีลแชร์', 'รองรับผู้สูงอายุและผู้พิการ']
                },
                {
                    category: 'สิ่งอำนวยความสะดวกภายนอก',
                    icon: '🌳',
                    items: ['ที่จอดรถ', 'นิตยสารและหนังสือพิมพ์', 'ตู้กดน้ำเย็น', 'ตู้กดน้ำร้อน', 'กาแฟและเครื่องดื่ม ฟรี']
                },
                {
                    category: 'ความปลอดภัย',
                    icon: '🔒',
                    items: ['สัญญาณเตือนเหตุอัคคีภัย', 'รปภ.', 'DOOR RFID TEC', 'KEY CARD', 'กล้องวงจรปิด 30 ตัว']
                }
            ]
        },
        nearbyPage: {
            heroSubtitle: 'สถานที่ใกล้เคียง',
            heroDescription: 'ตั้งอยู่ในทำเลที่สะดวก ใกล้สถานที่สำคัญมากมาย'
        },
        galleryPage: {
            heroSubtitle: 'แกลเลอรี่',
            heroDescription: 'ชมภาพบรรยากาศและห้องพักของ PJ-Residence',
            tabs: {
                overview: 'Overview',
                rooms: 'ห้องพัก'
            }
        },
        contactPage: {
            heroSubtitle: 'ติดต่อเรา',
            heroDescription: 'หากมีคำถามหรือต้องการจองห้องพัก สามารถติดต่อเราได้ตลอด 24 ชั่วโมง',
            locationTitle: 'ทำเลที่ตั้ง',
            locationText1: 'PJ-Residence ใกล้สาธารณูปโภค อย่าง รถไฟฟ้าสีม่วง แหล่งช้อปปิ้ง อย่าง เซ็นทรัล รัตนาธิเบศร์, Esplanade, ศูนย์การค้าสลากไทย',
            locationText2: 'อีกทั้งยังแวดล้อมด้วยสถานที่ราชการและโรงพยาบาล อย่าง กระทรวงพาณิชย์, สำนักงาน ป.ป.ช., กระทรวงสาธารณสุข, กรมราชทัณฑ์, สลากกินแบ่งรัฐบาล, โรงพยาบาลพระนั่งเกล้า และสถาบันโรคทรวงอก เป็นต้น',
            highlights: [
                { icon: '🚇', text: 'ใกล้รถไฟฟ้าสายสีม่วง' },
                { icon: '🛍️', text: 'ใกล้ห้างสรรพสินค้า' },
                { icon: '🏛️', text: 'ใกล้หน่วยงานราชการ' },
                { icon: '🏥', text: 'ใกล้โรงพยาบาล' }
            ],
            sendMessageSubtitle: 'ส่งข้อความ',
            inquiryTitle: 'ติดต่อสอบถาม',
            formDescription: 'กรอกแบบฟอร์มด้านล่างเพื่อติดต่อเรา หรือสอบถามข้อมูลเพิ่มเติม',
            selectTopic: '-- เลือกหัวข้อ --',
            topics: {
                booking: 'สอบถามการจองห้องพัก',
                price: 'สอบถามราคา',
                facilities: 'สอบถามสิ่งอำนวยความสะดวก',
                other: 'อื่นๆ'
            },
            topic: 'หัวข้อ',
            checkIn: 'Check-in: 14:00 น.',
            checkOut: 'Check-out: 12:00 น.',
            socialMedia: 'Social Media'
        }
    },
    en: {
        nav: {
            home: 'Home',
            rooms: 'Rooms',
            facilities: 'Facilities',
            nearby: 'Nearby',
            gallery: 'Gallery',
            contact: 'Contact',
            booking: 'Book Now'
        },
        footer: {
            description: 'Experience premium relaxation with exceptional service amidst a beautiful and comfortable atmosphere.',
            quickLinks: 'Quick Links',
            services: 'Services',
            meetingRoom: 'Meeting Room',
            promotions: 'Promotions',
            newsletter: 'Newsletter',
            newsletterText: 'Subscribe for special promotions',
            emailPlaceholder: 'Enter your email',
            subscribe: 'Subscribe',
            privacy: 'Privacy Policy',
            terms: 'Terms & Conditions'
        },
        hero: {
            slides: [
                {
                    title: 'Welcome to',
                    subtitle: 'PJ-Residence',
                    description: 'Experience premium relaxation amidst beautiful surroundings with 5-star service',
                    cta: 'Explore Rooms'
                },
                {
                    title: 'Luxurious Rooms',
                    subtitle: 'Exclusive Suites',
                    description: 'Exquisitely designed rooms with complete amenities for ultimate comfort',
                    cta: 'View Rooms'
                },
                {
                    title: 'Prime Location',
                    subtitle: 'Prime Location',
                    description: 'Located in the city center, near shopping areas, attractions, and public transportation',
                    cta: 'View Nearby Places'
                }
            ],
            scrollDown: 'Scroll Down',
            checkIn: 'Check-in',
            checkOut: 'Check-out',
            guests: 'Guests',
            guestOptions: ['1 Guest', '2 Guests', '3 Guests', '4 Guests'],
            roomLabel: 'Room',
            roomOptions: ['1 Room', '2 Rooms', '3 Rooms'],
            searchRooms: 'Search Rooms',
            goToSlide: 'Go to slide'
        },
        about: {
            subtitle: 'About Us',
            star: 'Star',
            description1: 'PJ-Residence, a luxury residence on Nonthaburi Road (Soi Nonthaburi 38), offers rooms with breakfast and complete amenities for a comfortable stay.',
            description2: 'Perfect for city dwellers seeking accommodation like a second home, emphasizing privacy, cleanliness, and safety.',
            likeSecondHome: 'Like your second home',
            features: [
                { icon: '🔐', text: 'Door RFID Tec and Key Card for all rooms' },
                { icon: '📹', text: 'CCTV 24 hours' },
                { icon: '📶', text: 'Free WiFi Internet!!' },
                { icon: '🍳', text: 'Breakfast included' },
                { icon: '🧹', text: 'Clean and safe' },
                { icon: '🏠', text: 'Privacy focused' }
            ]
        },
        accommodations: {
            subtitle: 'Rooms',
            title: 'Luxury Accommodation',
            description: 'Choose the room that suits you. Every room is designed for maximum comfort.',
            viewDetails: 'View Details',
            govOfficial: 'Gov. Official (650 THB/night)',
            govSub: '(*Show ID)',
            googleReview: 'Google Map 5-Star Review (650 THB/night)',
            perNight: '/night',
            viewAllRooms: 'View All Rooms',
            perMonth: '/month',
            rooms: [
                {
                    name: 'Monthly Room',
                    nameEn: 'Monthly Room',
                    price: '5,000 - 8,500 THB',
                    unit: 'perMonth',
                    description: 'Fully furnished room for long-term stay with complete amenities',
                    size: '28-32 sqm.',
                    guests: '2 Guests',
                    bed: 'King Size Bed',
                    features: ['Fully Furnished', 'Parking', 'Security System']
                },
                {
                    name: 'Daily Room',
                    nameEn: 'Daily Room',
                    price: '850 THB',
                    unit: 'perNight',
                    description: 'Room for travelers, clean and safe with cleaning service and drinking water',
                    size: '28-32 sqm.',
                    guests: '2 Guests',
                    bed: 'King Size Bed',
                    features: ['Free WiFi', 'Cleaning', 'Free Water']
                }
            ]
        },
        nearbyPlaces: {
            subtitle: 'Nearby Places',
            description: 'Located in the city center with convenient access to important places',
            categories: [
                { category: 'Shopping & Lifestyle', icon: '🛍️' },
                { category: 'Transportation', icon: '🚇' },
                { category: 'Government Offices', icon: '🏛️' },
                { category: 'Hospitals', icon: '🏥' }
            ]
        },
        gallery: {
            subtitle: 'Gallery',
            description: 'Explore the beauty of PJ-Residence through high-quality photos',
            viewAll: 'View All Gallery',
            categories: {
                rooms: 'Rooms',
                lobby: 'Lobby'
            }
        },
        contact: {
            subtitle: 'Contact Us',
            description: 'For questions or more information, contact us 24 hours',
            address: 'Address',
            phone: 'Phone',
            email: 'Email',
            workingHours: 'Working Hours',
            open24: 'Open 24 hours',
            sendMessage: 'Send us a message',
            name: 'Full Name',
            namePlaceholder: 'Enter your name',
            phonePlaceholder: '08X-XXX-XXXX',
            message: 'Message',
            messagePlaceholder: 'Enter your message or question',
            submit: 'Send Message',
            thankYou: 'Thank you for your message. We will contact you soon.'
        },
        roomsPage: {
            heroSubtitle: 'Rooms',
            heroTitle: 'Room Details',
            heroDescription: 'Welcome with 36 modern-style rooms',
            modernStyle: 'Modern Style Rooms',
            roomDescription: 'PJ-Residence welcomes you with 36 modern-style single bed rooms with modern amenities including refrigerator, microwave, TV, and free drinking water, tea-coffee in every room with air conditioning.',
            amenitiesTitle: 'Room Amenities',
            commonAreaTitle: 'Common Areas',
            pricingSubtitle: 'Room Rates',
            pricingTitle: 'Service Rates',
            pricingDescription: 'Choose the package that suits you',
            popular: 'Popular',
            monthly: 'Monthly',
            popular: 'Popular',
            monthly: 'Monthly',
            daily: 'Daily',
            rent: 'Rent',
            furnitureDeposit: 'Furniture Deposit',
            perMonth: 'THB/month',
            perNight: 'THB/night',
            deposit: 'Room Deposit',
            water: 'Water',
            electricity: 'Electricity',
            minContract: 'Minimum Contract',
            minContract: 'Minimum Contract',
            months: 'months',
            lessThanOneMonth: 'Less than 1 Month',
            included: 'Included',
            priceNote: '* Prices may change. Please contact for more information.',
            amenities: [
                { icon: '🛋️', name: 'Fully Furnished' },
                { icon: '❄️', name: 'Air Conditioning' },
                { icon: '☕', name: 'Free Coffee & Drinks' },
                { icon: '📺', name: 'TV' },
                { icon: '🚿', name: 'Water Heater' },
                { icon: '🍳', name: 'Microwave' },
                { icon: '🫖', name: 'Electric Kettle' },
                { icon: '🧊', name: 'Refrigerator' },
                { icon: '📡', name: 'Satellite TV' },
                { icon: '🍽️', name: 'Sink' },
                { icon: '🛗', name: 'Elevator' },
                { icon: '🚫', name: 'No Pets Allowed' }
            ],
            facilities: [
                { icon: '🍽️', title: 'Restaurant', description: 'Accommodates over 40 seats, spacious, can be converted to meeting room' },
                { icon: '📚', title: 'Living Room', description: 'Relaxing area, enjoy reading various books' },
                { icon: '💻', title: 'Computer Zone', description: 'Desktop computer for work or research' },
                { icon: '♿', title: 'Elderly & Disabled Friendly', description: 'Facilities designed for elderly and disabled guests, including wheelchair ramps.' }
            ]
        },
        facilitiesPage: {
            heroSubtitle: 'Facilities',
            heroDescription: 'Complete amenities for a perfect stay',
            categories: [
                {
                    category: 'Indoor Facilities',
                    icon: '🏠',
                    items: ['Fully Furnished', 'Air Conditioning', 'TV', 'Satellite TV', 'Water Heater', 'Microwave', 'Electric Kettle', 'Refrigerator', 'Sink', 'Elevator', 'No Pets Allowed', 'Wheelchair Accessible', 'Elderly & Disabled Friendly']
                },
                {
                    category: 'Outdoor Facilities',
                    icon: '🌳',
                    items: ['Parking', 'Magazines & Newspapers', 'Cold Water Dispenser', 'Hot Water Dispenser', 'Free Coffee & Drinks']
                },
                {
                    category: 'Security',
                    icon: '🔒',
                    items: ['Fire Alarm', 'Security Guard', 'DOOR RFID TEC', 'KEY CARD', '30 CCTV Cameras']
                }
            ]
        },
        nearbyPage: {
            heroSubtitle: 'Nearby Places',
            heroDescription: 'Located in a convenient location near many important places'
        },
        galleryPage: {
            heroSubtitle: 'Gallery',
            heroDescription: 'View photos of PJ-Residence atmosphere and rooms',
            tabs: {
                overview: 'Overview',
                rooms: 'Rooms'
            }
        },
        contactPage: {
            heroSubtitle: 'Contact Us',
            heroDescription: 'For questions or room booking, contact us 24 hours',
            locationTitle: 'Location',
            locationText1: 'PJ-Residence is near public utilities like Purple Line BTS, shopping centers like Central Rattanathibet, Esplanade, Thai Lottery Center',
            locationText2: 'Also surrounded by government agencies and hospitals such as Ministry of Commerce, NACC, Ministry of Public Health, Department of Corrections, Government Lottery Office, Pranangklao Hospital, and Central Chest Institute',
            highlights: [
                { icon: '🚇', text: 'Near Purple Line BTS' },
                { icon: '🛍️', text: 'Near Shopping Malls' },
                { icon: '🏛️', text: 'Near Government Offices' },
                { icon: '🏥', text: 'Near Hospitals' }
            ],
            sendMessageSubtitle: 'Send Message',
            inquiryTitle: 'Contact Inquiry',
            formDescription: 'Fill out the form below to contact us or request more information',
            selectTopic: '-- Select Topic --',
            topics: {
                booking: 'Room Booking Inquiry',
                price: 'Price Inquiry',
                facilities: 'Facilities Inquiry',
                other: 'Other'
            },
            topic: 'Topic',
            checkIn: 'Check-in: 2:00 PM',
            checkOut: 'Check-out: 12:00 PM',
            socialMedia: 'Social Media'
        }
    },
    cn: {
        nav: {
            home: '首页',
            rooms: '客房',
            facilities: '设施',
            nearby: '周边',
            gallery: '图库',
            contact: '联系我们',
            booking: '立即预订'
        },
        footer: {
            description: '在优美舒适的氛围中体验优质的休闲服务。',
            quickLinks: '快速链接',
            services: '服务',
            meetingRoom: '会议室',
            promotions: '促销活动',
            newsletter: '订阅新闻',
            newsletterText: '订阅以获取特别优惠',
            emailPlaceholder: '输入您的邮箱',
            subscribe: '订阅',
            privacy: '隐私政策',
            terms: '条款与条件'
        },
        hero: {
            slides: [
                {
                    title: '欢迎来到',
                    subtitle: 'PJ-Residence',
                    description: '在优美的环境中体验五星级的优质休闲服务',
                    cta: '探索客房'
                },
                {
                    title: '豪华客房',
                    subtitle: '尊贵套房',
                    description: '精心设计的客房，设施齐全，为您提供极致舒适',
                    cta: '查看客房'
                },
                {
                    title: '优越位置',
                    subtitle: '黄金地段',
                    description: '位于市中心，靠近购物区、景点和公共交通',
                    cta: '查看周边'
                }
            ],
            scrollDown: '向下滚动',
            checkIn: '入住',
            checkOut: '退房',
            guests: '客人',
            guestOptions: ['1位客人', '2位客人', '3位客人', '4位客人'],
            roomLabel: '房间',
            roomOptions: ['1间房', '2间房', '3间房'],
            searchRooms: '搜索客房',
            goToSlide: '转到幻灯片'
        },
        about: {
            subtitle: '关于我们',
            star: '星',
            description1: 'PJ-Residence是位于暖武里路（暖武里38巷）的豪华公寓，提供含早餐的客房和完善的设施。',
            description2: '为城市居民提供如同第二个家般的住宿，注重隐私、清洁和安全。',
            likeSecondHome: '如同您的第二个家',
            features: [
                { icon: '🔐', text: '所有房间配备RFID门锁和钥匙卡' },
                { icon: '📹', text: '24小时闭路电视监控' },
                { icon: '📶', text: '免费WiFi网络!!' },
                { icon: '🍳', text: '含早餐' },
                { icon: '🧹', text: '干净安全' },
                { icon: '🏠', text: '注重隐私' }
            ]
        },
        accommodations: {
            subtitle: '客房',
            title: '豪华住宿',
            description: '选择适合您的房间。每间房都为最大舒适度而设计。',
            viewDetails: '查看详情',
            govOfficial: '公务员/国企员工 (650 泰铢/晚)',
            govSub: '(*请出示证件)',
            googleReview: '谷歌地图 5 星好评 (650 泰铢/晚)',
            perNight: '/晚',
            viewAllRooms: '查看所有客房',
            perMonth: '/月',
            rooms: [
                {
                    name: '月租房',
                    nameEn: 'Monthly Room',
                    price: '5,000 - 8,500 泰铢',
                    unit: 'perMonth',
                    description: '设施齐全的长期住宿房间',
                    size: '28-32平方米',
                    guests: '2位客人',
                    bed: '大床',
                    features: ['家具齐全', '停车场', '安保系统']
                },
                {
                    name: '日租房',
                    nameEn: 'Daily Room',
                    price: '850 泰铢',
                    unit: 'perNight',
                    description: '为旅客提供干净安全的房间，含清洁服务和饮用水',
                    size: '28-32平方米',
                    guests: '2位客人',
                    bed: '大床',
                    features: ['免费WiFi', '清洁服务', '免费饮用水']
                }
            ]
        },
        nearbyPlaces: {
            subtitle: '周边地点',
            description: '位于市中心，方便到达各重要地点',
            categories: [
                { category: '购物与生活', icon: '🛍️' },
                { category: '交通', icon: '🚇' },
                { category: '政府机构', icon: '🏛️' },
                { category: '医院', icon: '🏥' }
            ]
        },
        gallery: {
            subtitle: '图库',
            description: '通过高质量照片探索PJ-Residence的美丽',
            viewAll: '查看全部图库',
            categories: {
                rooms: '客房',
                lobby: '大堂'
            }
        },
        contact: {
            subtitle: '联系我们',
            description: '如有问题或需要更多信息，请24小时联系我们',
            address: '地址',
            phone: '电话',
            email: '邮箱',
            workingHours: '营业时间',
            open24: '24小时营业',
            sendMessage: '给我们留言',
            name: '姓名',
            namePlaceholder: '请输入您的姓名',
            phonePlaceholder: '08X-XXX-XXXX',
            message: '留言',
            messagePlaceholder: '请输入您的留言或问题',
            submit: '发送留言',
            thankYou: '感谢您的留言。我们会尽快与您联系。'
        },
        roomsPage: {
            heroSubtitle: '客房',
            heroTitle: '客房详情',
            heroDescription: '欢迎入住36间现代风格客房',
            modernStyle: '现代风格客房',
            roomDescription: 'PJ-Residence欢迎您入住36间现代风格单人床客房，配备现代化设施，包括冰箱、微波炉、电视，每间客房均提供免费饮用水、茶和咖啡，并配有空调。',
            amenitiesTitle: '客房设施',
            commonAreaTitle: '公共区域',
            pricingSubtitle: '房价',
            pricingTitle: '服务价格',
            pricingDescription: '选择适合您的套餐',
            popular: '热门',
            monthly: '月租',
            popular: '热门',
            monthly: '月租',
            daily: '日租',
            rent: '租金',
            furnitureDeposit: '家具押金',
            perMonth: '泰铢/月',
            perNight: '泰铢/晚',
            deposit: '押金',
            water: '水费',
            electricity: '电费',
            minContract: '最短合同',
            minContract: '最短合同',
            months: '个月',
            lessThanOneMonth: '不满 1 个月',
            included: '已包含',
            priceNote: '* 价格可能会有变动，请联系我们获取更多信息。',
            amenities: [
                { icon: '🛋️', name: '家具齐全' },
                { icon: '❄️', name: '空调' },
                { icon: '☕', name: '免费咖啡和饮料' },
                { icon: '📺', name: '电视' },
                { icon: '🚿', name: '热水器' },
                { icon: '🍳', name: '微波炉' },
                { icon: '🫖', name: '电热水壶' },
                { icon: '🧊', name: '冰箱' },
                { icon: '📡', name: '卫星电视' },
                { icon: '🍽️', name: '洗碗槽' },
                { icon: '🛗', name: '电梯' },
                { icon: '🚫', name: '禁止宠物' }
            ],
            facilities: [
                { icon: '🍽️', title: '餐厅', description: '可容纳40多个座位，宽敞舒适，可改为会议室' },
                { icon: '📚', title: '休息室', description: '放松区域，享受阅读各种书籍' },
                { icon: '💻', title: '电脑区', description: '台式电脑供工作或查找资料' },
                { icon: '♿', title: '适宜老人和残疾人', description: '专为老人和残疾人设计的设施，包括轮椅坡道。' }
            ]
        },
        facilitiesPage: {
            heroSubtitle: '设施',
            heroDescription: '完善的设施，让您享受完美的住宿体验',
            categories: [
                {
                    category: '室内设施',
                    icon: '🏠',
                    items: ['家具齐全', '空调', '电视', '卫星电视', '热水器', '微波炉', '电热水壶', '冰箱', '洗碗槽', '电梯', '禁止宠物', '轮椅通道', '适宜老人和残疾人']
                },
                {
                    category: '室外设施',
                    icon: '🌳',
                    items: ['停车场', '杂志和报纸', '冷水机', '热水机', '免费咖啡和饮料']
                },
                {
                    category: '安保',
                    icon: '🔒',
                    items: ['火灾报警', '保安', 'DOOR RFID TEC', 'KEY CARD', '30个监控摄像头']
                }
            ]
        },
        nearbyPage: {
            heroSubtitle: '周边地点',
            heroDescription: '位于便利位置，靠近众多重要地点'
        },
        galleryPage: {
            heroSubtitle: '图库',
            heroDescription: '查看PJ-Residence的环境和客房照片',
            tabs: {
                overview: '概览',
                rooms: '客房'
            }
        },
        contactPage: {
            heroSubtitle: '联系我们',
            heroDescription: '如有问题或需要预订客房，请24小时联系我们',
            locationTitle: '位置',
            locationText1: 'PJ-Residence靠近公共设施，如紫线BTS、购物中心如Central Rattanathibet、Esplanade、泰国彩票中心',
            locationText2: '周围还有政府机构和医院，如商务部、反腐败委员会、公共卫生部、惩教局、政府彩票办公室、Pranangklao医院和中央胸科研究所',
            highlights: [
                { icon: '🚇', text: '靠近紫线BTS' },
                { icon: '🛍️', text: '靠近购物中心' },
                { icon: '🏛️', text: '靠近政府机构' },
                { icon: '🏥', text: '靠近医院' }
            ],
            sendMessageSubtitle: '发送消息',
            inquiryTitle: '联系咨询',
            formDescription: '填写下面的表格联系我们或获取更多信息',
            selectTopic: '-- 选择主题 --',
            topics: {
                booking: '客房预订咨询',
                price: '价格咨询',
                facilities: '设施咨询',
                other: '其他'
            },
            topic: '主题',
            checkIn: '入住: 下午2:00',
            checkOut: '退房: 中午12:00',
            socialMedia: '社交媒体'
        }
    }
};

export default translations;
