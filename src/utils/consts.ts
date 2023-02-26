const TOKEN = '5746597907:AAHGSRJeuvLGl93WNVu6EBZj-PairRo4yXQ';

const CHAT_ID = -1001528010156;

export function sendMsg(data: BOTData) {
    const url = 'https://api.telegram.org/bot' + TOKEN + '/sendMessage'; // токен бота
    const body = JSON.stringify({ // склеиваем объект в JSON строку
        chat_id: CHAT_ID,
        parse_mode: 'Markdown', // разметка сообщений вкл (чтобы использовать *жирный текст*)
        text: 'NEW ORDER\n\nName: ' + data.name + '\nTel.number: ' + data.tel + '\nEmail: ' + data.email + '\nMessage: ' + data.message + '\nFrom: [' + window.location.href + '](' + window.location.href + ')'
    });
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: body
    })
}

export const services: Services = {
    'en':
        [
            { name: 'Cleaning after renovation', id: 'cleaning_after_renovation', img: 'https://www.nomorechores.com/wp-content/uploads/2017/09/dreamstime_m_81089211.jpg', description: 'Cleaning after renovation is a particularly thorough and gentle procedure. We know how difficult it is to find a cleaning company you can trust. For us, reliability is the most important detail! First of all, we will be happy to come to your home, determine the amount of work required, and then give an appropriate price offer. The price is determined by the area of the house, the amount of furniture, electrical appliances, the number of windows and the adjacent territory, if any.', icon: require('../utils/imgs/services/cleaning.png') },
            { name: 'Paint works', id: 'paint_works', img: 'https://static.angstrem-mebel.ru/upload/medialibrary/b55/b5588502660872d9524942ff5475f458.jpg', description: 'Interior and exterior painting of apartments and private houses with a high level of finish. We paint walls, stairwells, railings, doors, frames and windows. When painting walls, it is important not to make mistakes and not paint surfaces that have any damage. Even if the paint seems to be covering the grooves, cracks or holes, this is only a temporary solution, and after a short time they will open again and show themselves. Therefore, it is better to trust professionals.', icon: require('../utils/imgs/services/paint.png') },
            { name: 'Ceramic works', id: 'ceramic_works', img: require('../utils/imgs/how-to-install-ceramic-wall-tile-1824817-hero-7225f2fef8ec4499b25825c5d56a0cf3.jpg'), description: 'Tired of the old bathroom in your house? Interested in a renovation? You don`t have to worry about anything! We dismantle the existing headset, perform infrastructural and sealing works, reinstall tiles and new headset, all with a high level of service and quality.', icon: require('../utils/imgs/services/ceramic.png') },
            { name: 'Plumbing works', id: 'plumbing_works', img: 'https://dmsplumbing.co.za/wp-content/uploads/2019/12/Plumbing-Professional-Services-1080x675.jpg', description: 'We offer a wide range of plumbing services such as unblocking, plumbing and sewer pipe repairs, leak detection, water pressure boosting and plumbing fixture installation.', icon: require('../utils/imgs/services/plumbing.png') },
            { name: 'Plaster works', id: 'plaster_works', img: 'https://www.evershineuae.net/drv_images/cities/af92ceab984ce5619ff2c7c9a9a81e37.jpg', description: 'Plastering is considered one of the most common renovation works in Israel. The ability to build almost anything in a practical and thoughtful way allows you to achieve impressive results - from the construction of a simple wall or ceiling to more complex works.', icon: require('../utils/imgs/services/plaster.png') },
            { name: 'Parquet works', id: 'parquet_works', img: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.gridumagija.lv/wp-content/uploads/elementor/thumbs/ieklasana-768x768-1-pyaacbc02uxbmr88rivd69zld6imvxp17an4gkozuw.jpg?v=1669474386', description: 'Parquet is a unique floor covering. Parquet flooring has become popular in recent years and can be seen in almost every home or office. To be frank, installing laminate flooring is the perfect solution for an Israeli home: the way it is installed is simple, it comes in a variety of styles and textures, and the price is the most attractive in the segment.', icon: require('../utils/imgs/services/parquet.png') }

        ],
    'ru':
        [
            { name: 'Уборка после ремонта', id: 'cleaning_after_renovation', img: 'https://www.nomorechores.com/wp-content/uploads/2017/09/dreamstime_m_81089211.jpg', description: 'Уборка после ремонта – особенно тщательная и бережная процедура. Мы знаем, как сложно найти клининговую компанию, которой можно доверять. Для нас надежность - самая важная деталь! Прежде всего, мы будем рады приехать к вам домой, определить объем необходимых работ, а затем дать соответствующее ценовое предложение. Цена определяется площадью дома, количеством мебели, электроприборов, количеством окон и придомовой территорией при ее наличии.', icon: require('../utils/imgs/services/cleaning.png') },
            { name: 'Малярные работы', id: 'paint_works', img: 'https://static.angstrem-mebel.ru/upload/medialibrary/b55/b5588502660872d9524942ff5475f458.jpg', description: 'Покраска квартир и частных домов внутри и снаружи с высоким уровнем отделки. Мы занимаемся покраской стен, лестничных клеток, перил, дверей, рам и окон. При покраске стен важно не допускать ошибки и не красить поверхности имеющие какие-либо повреждения. Даже если кажется, что краска закрывает бороздки, трещины или дыры, это лишь временное решение, и через короткое время они снова откроются и покажут себя. Поэтому лучше довериться профессионалам.', icon: require('../utils/imgs/services/paint.png') },
            { name: 'Работа с плиткой', id: 'ceramic_works', img: require('../utils/imgs/how-to-install-ceramic-wall-tile-1824817-hero-7225f2fef8ec4499b25825c5d56a0cf3.jpg'), description: 'Устали от старой ванной комнаты в вашем доме? Заинтересованы в ремонте? Вам не нужно ни о чем беспокоиться! Мы демонтируем существующую гарнитуру, выполним инфраструктурные и герметизирующие работы, переустановим плитку и новый гарнитур, и все это с высоким уровнем сервиса и качества.', icon: require('../utils/imgs/services/ceramic.png') },
            { name: 'Сантехнические услуги', id: 'plumbing_works', img: 'https://dmsplumbing.co.za/wp-content/uploads/2019/12/Plumbing-Professional-Services-1080x675.jpg', description: 'Мы предлагаем широкий спектр сантехнических услуг, таких как: разблокировка засоров, ремонт водопроводных и канализационных труб, обнаружение утечек, повышение давления воды и установка сантехнического оборудования.', icon: require('../utils/imgs/services/plumbing.png') },
            { name: 'Работа с гипсом', id: 'plaster_works', img: 'https://www.evershineuae.net/drv_images/cities/af92ceab984ce5619ff2c7c9a9a81e37.jpg', description: 'Штукатурные работы считаются одними из самых распространенных ремонтных работ в Израиле. Возможность построить практически все что угодно практично и продуманно, позволяет добиться впечатляющих результатов - от возведения простой стены или потолка до более сложных работ.', icon: require('../utils/imgs/services/plaster.png') },
            { name: 'Parquet works', id: 'parquet_works', img: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.gridumagija.lv/wp-content/uploads/elementor/thumbs/ieklasana-768x768-1-pyaacbc02uxbmr88rivd69zld6imvxp17an4gkozuw.jpg?v=1669474386', description: 'Паркет – уникальное напольное покрытие. Паркетный пол стал популярным в последние годы и его можно увидеть практически в каждом доме или офисе. Если говорить откровенно, то укладка ламината — идеальное решение для израильского дома: способ его укладки прост, он бывает разных стилей и фактур, а цена — самая привлекательная в этом сегменте.', icon: require('../utils/imgs/services/parquet.png') }
        ],
    'he':
        [
            { name: 'נקיון אחרי שיפוץ', id: 'cleaning_after_renovation', img: 'https://www.nomorechores.com/wp-content/uploads/2017/09/dreamstime_m_81089211.jpg', description: 'אנחנו מציעים מגוון רחב של שירותים ללקוחות שלנו שאחד מהם זה ניקיון יסודי לאחר שיפוץ וניקיון לפני אכלוס. ניקיון לאחר שיפוץ הינו הליך ניקיון יסודי ועדין במיוחד. אנחנו יודעים עד כמה קשה למצוא חברת ניקיון שאפשר לסמוך עליה. אצלנו בחברה האמינות - פרט הכי חשוב!!!קודם כל אנחנו נשמח להגיע אליכם הביתה, לאבחן כמות העבודה הנדרשת ולאחר מכן לתת הצעת מחיר הרלוונטית. המחיר נקבע לפי שטח הבית, כמות ריהוט, מכשירי חשמלאים, מספר חלונות ושטח חיצוני במידה וקיים.', icon: require('../utils/imgs/services/cleaning.png') },
            { name: 'עבודות צבע', id: 'paint_works', img: 'https://static.angstrem-mebel.ru/upload/medialibrary/b55/b5588502660872d9524942ff5475f458.jpg', description: 'צביעת דירות ובתים פרטיים מבפנים ומבחוץ ברמת גימור גבוה. ניתן לצבוע חומות, חדרי מדרגות, מעקות, דלתות, משקופים וחלונות. כשצובעים קירות, חשוב שלא לעשות זאת סתם כך על קיר שיש בו נזקים כאלה ואחרים. אפילו אם נראה כאילו שהצבע חוסם חריצים, סדקים או חורים, מדובר בפתרון זמני בלבד, ותוך זמן קצר הם יפתחו שוב ויראו את עצמם. לכן צביעת דירה ושפכטל תמיד באים יד ביד.', icon: require('../utils/imgs/services/paint.png') },
            { name: 'עבודות קרמיקה', id: 'ceramic_works', img: require('../utils/imgs/how-to-install-ceramic-wall-tile-1824817-hero-7225f2fef8ec4499b25825c5d56a0cf3.jpg'), description: 'נמאס לכם מחדר הרחצה הישן בביתכם? מעוניינים לשפץ? אין צורך שתדאגו לכלום! אנחנו נפרק את הקיים נבצע עבודות תשתית ואיטום ונתקין מחדש אריחים ומוצרים חדשים והכל תחת מעטה השירות והאיכות של הקבוצה.', icon: require('../utils/imgs/services/ceramic.png') },
            { name: 'עבודות אינסטלציה', id: 'plumbing_works', img: 'https://dmsplumbing.co.za/wp-content/uploads/2019/12/Plumbing-Professional-Services-1080x675.jpg', description: 'אנו מציעים מגוון רחב של שירותי אינסטלציה כגון: פתיחת סתימות, תיקוני צנרת מים וביוב, איתור נזילות, הגברת לחץ מים והתקנת כלים סניטריים.', icon: require('../utils/imgs/services/plumbing.png') },
            { name: 'עבודות גבס', id: 'plaster_works', img: 'https://www.evershineuae.net/drv_images/cities/af92ceab984ce5619ff2c7c9a9a81e37.jpg', description: 'עבודות גבס נחשבות לאחת מעבודות השיפוצים הנפוצות בישראל. היכולת לבנות כמעט כל דבר באופן פרקטי ומעוצב, מאפשר להגיע לתוצאות מרשימות – החל מבנייה של קיר או תקרה פשוטים ועד לעבודות מורכבות יותר.', icon: require('../utils/imgs/services/plaster.png') },
            { name: 'עבודות פרקט', id: 'parquet_works', img: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.gridumagija.lv/wp-content/uploads/elementor/thumbs/ieklasana-768x768-1-pyaacbc02uxbmr88rivd69zld6imvxp17an4gkozuw.jpg?v=1669474386', description: 'פרקט הוא ריצוף מיוחד במינו. רצפת פרקט הפכה להיות פופולרית בשנים האחרונות וניתן לראות אותה כמעט בכל בית או משרד. אם נהיה כנים, התקנת פרקט למינציה היא הפתרון האידיאלי לבית הישראלי: שיטת ההתקנה שלו פשוטה, הוא מגיע במגוון סגנונות וטקסטורות, והמחיר שלו הכי אטרקטיבי בשוק הפרקטים כיום.', icon: require('../utils/imgs/services/parquet.png') }
        ],
};

export const aboutUs: AboutUs = {
    'he': 'אנחנו מאמינים בעבודה מקצועית ואיכותית המתאימה את עצמה לצרכים שלכם ועומדת בתקנים מחמירים, לוחות זמנים ואיכות חסרת פשרות. החברה מקפידה על איכות שיפוץ בסטנדרטים הגבוהים ביותר, עמידה בלוחות זמנים ושימוש בחומרים איכותיים בלבד. כשאנחנו מתחילים לשפץ ולעצב אנחנו חושבים קודם כל עליכם, שיהיה לכם כיף ונוח בתוך בית החלומות שלכם. אנו יחד אתכם מהחלום ועד הגשמתו. חברתנו עוסקת בשיפוצים כלליים - ריצוף, שבירת קירות, עבודות חשמל, אינסטלציה, עבודות צבע ושפכטל, הנחת פרקט, שיפוץ חדרי שירותים ואמבטיה. עבודות גבס. אנו עובדים עם בעלי מקצוע מנוסים בכל התחומים משלב התשתיות ועד לשלב הגמר.',
    'ru': 'Мы верим в профессиональную и качественную работу, которая адаптируется к вашим потребностям и соответствует строгим стандартам, графикам и бескомпромиссному качеству. Компания придерживается самых высоких стандартов качества ремонта, соблюдения сроков и использования только качественных материалов.Когда мы приступаем к ремонту и проектированию, мы думаем в первую очередь о вас, о том, чтобы вам было удобно и комфортно в доме вашей мечты. Мы с вами от мечты до ее осуществления. Наша компания занимается капитальным ремонтом: настилом полов, разборкой стен, электромонтажными, сантехническими, малярными, штукатурными и шпаклевочными работами, укладкой паркета, ремонтом санузлов и ванных комнат. Мы работаем только с опытными профессионалами во всех областях, от этапа инфраструктуры до этапа отделки.',
    'en': 'We believe in professional and quality work that adapts itself to your needs and meets strict standards, schedules and uncompromising quality. The company adheres to the highest standards of renovation quality, meeting deadlines and using only high-quality materials. When we start renovating and designing, we think first of all about you, that you will have pleasent and be comfortable in your dream home. We are with you from the dream to its fulfillment. Our company deals in general renovations: flooring, breaking down walls, electrical, plumbing, plaster, paint and putty works, laying parquet, renovating bathrooms. We only work with experienced professionals in all fields from the infrastructure phase to the finishing phase.'
}


export const carouselInfo: CarouselInfo = {
    'en': {
        first: {
            title: 'About us',
            btn: 'About us',
            text: ''
        },
        second: {
            title: 'Hundreds of customers',
            btn: 'Contact us',
            text: ''
        },
        third: {
            title: 'Services',
            btn: 'Check services',
            text: ''
        }
    },
    'ru': {
        first: {
            title: 'О нас',
            btn: 'О нас',
            text: ''
        },
        second: {
            title: 'Более ста довольных клиентов',
            btn: 'Связаться',
            text: ''
        },
        third: {
            title: 'Наши сервисы',
            btn: 'Сервисы',
            text: ''
        }
    },
    'he': {
        first: {
            title: 'מידע עלינו',
            btn: 'מידע עלינו',
            text: ''
        },
        second: {
            title: 'יותר ממאה לקוחות מרוצים',
            btn: 'תתקשרו עלינו',
            text: ''
        },
        third: {
            title: 'שירותים שלנו',
            btn: 'לשירותים',
            text: ''
        }
    }
}

interface CarouselInfo {
    [key: string]: {
        first: {
            title: string,
            btn: string,
            text: string
        },
        second: {
            title: string,
            btn: string,
            text: string
        },
        third: {
            title: string,
            btn: string,
            text: string
        }
    }
}

interface Services {
    [key: string]: ServicesDescribing[]
}

interface ServicesDescribing {
    name: string,
    id: string,
    img: string,
    description: string,
    icon: string
}

interface BOTData {
    message: string,
    tel: string,
    email: string,
    name: string
}

interface AboutUs {
    [key: string]: string;
}
