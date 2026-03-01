// ==========================================
// Multi-Language Translations
// ==========================================

const translations = {
    en: {
        // Navigation
        nav: {
            home: "Home",
            about: "About",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact"
        },
        // Hero Section
        hero: {
            availability: "Available for opportunities",
            greeting: "Hi, I'm",
            name: "Temuulen Ganochir",
            subtitle: "Software Developer | Ulaanbaatar",
            description: "Computer Science graduate from SeoulTech with hands-on experience in full-stack and AI-integrated development. Focused on building reliable, data-driven applications that create real value.",
            contactButton: "Get In Touch",
            resumeButton: "Download Resume"
        },
        // About Section
        about: {
            title: "About Me",
            subtitle: "Get to know me better",
            paragraph1: "I'm a Computer Science graduate from Seoul National University of Science and Technology (SeoulTech), with a strong foundation in software development and a passion for creating meaningful technology solutions.",
            paragraph2: "My journey in tech has led me to work on diverse projects, from building AI-powered applications to developing full-stack web solutions. I'm particularly interested in machine learning, web development, and creating user-centric applications that solve real-world problems.",
            educationLabel: "Education",
            educationValue: "B.S. Computer Science - SeoulTech",
            focusLabel: "Focus",
            focusValue: "Full-Stack & AI Development",
            goalLabel: "Goal",
            goalValue: "Build impactful software"
        },
        // Skills Section
        skills: {
            title: "Technical Skills",
            subtitle: "Technologies I work with",
            categories: {
                languages: "Languages",
                frameworks: "Frameworks & Libraries",
                tools: "Tools & Technologies",
                spoken: "Spoken Languages"
            }
        },
        // Projects Section
        projects: {
            title: "Featured Projects",
            subtitle: "Some of my recent work",
            project1: {
                title: "PortfolioIQ — AI-Powered Financial Portfolio Analyzer",
                description: "Capstone project: Executed the full Software Development lifecycle for a mobile app analyzing stock/index portfolios. Integrated Yahoo Finance API to process real-time market data for automated risk assessment. Conducted iterative testing of PDF upload and manual input modules to ensure 100% data ingestion accuracy."
            },
            project2: {
                title: "AI Recipe Chat — Intelligent Cooking Assistant Website",
                description: "Served as Frontend Lead in an Agile team environment, delivering a personalized recipe recommendation engine. Optimized user experience by levelling up the interface with OpenAI-powered chat functionality. Collaborated on rapid prototyping and feature testing to ensure seamless natural language conversation flows."
            },
            project3: {
                title: "FinGuard — Emotion-Driven Personal Financial Risk Database",
                description: "Database Course Project: Designed a complex data architecture featuring schema normalization and behavioral pattern analysis. Performed advanced data modeling to classify financial risks based on emotional input. Produced structured analytical reports, testing database queries for performance and accuracy."
            }
        },
        // Contact Section
        contact: {
            title: "Get In Touch",
            description: "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!",
            email: "Email",
            github: "GitHub"
        },
        // Footer
        footer: {
            copyright: "© 2026 Temuulen Ganochir. All rights reserved.",
            tagline: "Built with passion and dedication."
        },
        // Accessibility
        aria: {
            themeToggle: "Toggle Dark/Light Mode",
            menuToggle: "Toggle menu",
            skipToContent: "Skip to main content"
        }
    },
    mn: {
        // Navigation
        nav: {
            home: "Нүүр",
            about: "Танилцуулга",
            skills: "Ур чадвар",
            projects: "Төслүүд",
            contact: "Холбоо барих"
        },
        // Hero Section
        hero: {
            availability: "Ажлын боломжид нээлттэй",
            greeting: "Сайн байна уу, би",
            name: "Темүүлэнгийн Ганочир",
            subtitle: "Програм хөгжүүлэгч | Улаанбаатар",
            description: "SeoulTech-ийн Компьютерийн шинжлэх ухааны төгсөгч, бүрэн стек болон хиймэл оюун ухаантай програм хөгжүүлэх туршлагатай. Өгөгдөлд суурилсан, найдвартай програмууд бий болгоход анхаарлаа хандуулдаг.",
            contactButton: "Холбоо барих",
            resumeButton: "Анкет татах"
        },
        // About Section
        about: {
            title: "Миний тухай",
            subtitle: "Надтай танилцах",
            paragraph1: "Би Seoul National University of Science and Technology (SeoulTech)-ийн Компьютерийн шинжлэх ухааны төгсөгч бөгөөд програм хөгжүүлэлтийн хүчтэй суурьтай, утга учиртай технологийн шийдлүүд бий болгох хүсэл эрмэлзэлтэй.",
            paragraph2: "Миний технологийн замнал надад олон төрлийн төслүүд дээр ажиллах боломж олгосон, хиймэл оюун ухаан ашигласан програмууд хөгжүүлэхээс эхлээд бүрэн стек вэб шийдлүүд бүтээх хүртэл. Би ялангуяа машин сургалт, вэб хөгжүүлэлт болон бодит амьдралын асуудлыг шийддэг хэрэглэгчид чиглэсэн програмууд бүтээхэд сонирхолтой.",
            educationLabel: "Боловсрол",
            educationValue: "Компьютерийн шинжлэх ухааны бакалавр - SeoulTech",
            focusLabel: "Чиглэл",
            focusValue: "Бүрэн стек ба ХОУ хөгжүүлэлт",
            goalLabel: "Зорилго",
            goalValue: "Нөлөө бүхий програм бүтээх"
        },
        // Skills Section
        skills: {
            title: "Техникийн ур чадвар",
            subtitle: "Миний ашигладаг технологиуд",
            categories: {
                languages: "Програмчлалын хэлүүд",
                frameworks: "Фреймворк ба номын сангууд",
                tools: "Хэрэгслүүд ба технологиуд",
                spoken: "Ярьдаг хэлүүд"
            }
        },
        // Projects Section
        projects: {
            title: "Онцлох төслүүд",
            subtitle: "Миний сүүлийн үеийн ажлууд",
            project1: {
                title: "PortfolioIQ — ХОУ-тай санхүүгийн багц шинжилгээ",
                description: "Төгсөлтийн төсөл: Хувьцаа/индекс багцыг шинжлэх гар утасны программын Програм хангамжийн хөгжлийн бүрэн мөчлөгийг гүйцэтгэсэн. Автомат эрсдэлийн үнэлгээнд зориулж бодит цагийн зах зээлийн өгөгдлийг боловсруулахын тулд Yahoo Finance API-г нэгтгэсэн. PDF байршуулалт болон гараар оруулах модулиудын 100% өгөгдөл оруулах нарийвчлалыг хангахын тулд давтан туршилт хийсэн."
            },
            project2: {
                title: "AI жор чат — Ухаалаг хоол хийх туслах вэбсайт",
                description: "Agile багийн орчинд Frontend Lead-ийн үүргийг гүйцэтгэж, хувийн жорын зөвлөмжийн системийг хүргэсэн. OpenAI-д суурилсан чатын функцээр интерфэйсийг сайжруулж хэрэглэгчийн туршлагыг оновчтой болгосон. Байгалийн хэлний яриа хөдөлгөөний жигд урсгалыг хангахын тулд хурдан прототип хийх болон функцийн туршилтанд хамтран ажилласан."
            },
            project3: {
                title: "FinGuard — Сэтгэл хөдлөлд суурилсан хувийн санхүүгийн эрсдэлийн мэдээллийн сан",
                description: "Мэдээллийн сангийн хичээлийн төсөл: Схемийн нормчлол болон зан үйлийн загварын шинжилгээг агуулсан нарийн төвөгтэй өгөгдлийн архитектурыг зохион бүтээсэн. Сэтгэл хөдлөлийн оролтод үндэслэн санхүүгийн эрсдэлийг ангилахын тулд өгөгдлийн нарийвчилсан загварчлалыг хийсэн. Гүйцэтгэл болон нарийвчлалын хувьд мэдээллийн сангийн асуулгуудыг туршиж, бүтэцтэй шинжилгээний тайланг гаргасан."
            }
        },
        // Contact Section
        contact: {
            title: "Холбоо барих",
            description: "Би одоогоор шинэ боломжуудыг хайж байна. Танд асуух зүйл байгаа эсвэл зүгээр л мэндчилгээ хэлмээр байвал надтай холбогдоорой!",
            email: "И-мэйл",
            github: "GitHub"
        },
        // Footer
        footer: {
            copyright: "© 2026 Темүүлэнгийн Ганочир. Бүх эрх хуулиар хамгаалагдсан.",
            tagline: "Хайр дурлал, зориг хичээлээр бүтээсэн."
        },
        // Accessibility
        aria: {
            themeToggle: "Харанхуй/Гэрэл горимыг солих",
            menuToggle: "Цэс нээх/хаах",
            skipToContent: "Үндсэн агуулга руу шилжих"
        }
    },
    ko: {
        // Navigation
        nav: {
            home: "홈",
            about: "소개",
            skills: "기술",
            projects: "프로젝트",
            contact: "연락"
        },
        // Hero Section
        hero: {
            availability: "새로운 기회를 찾고 있습니다",
            greeting: "안녕하세요, 저는",
            name: "테무렌 가노치르",
            subtitle: "소프트웨어 개발자 | 울란바토르",
            description: "SeoulTech 컴퓨터공학과 졸업생으로 풀스택 및 AI 통합 개발 경험을 보유하고 있습니다. 실질적인 가치를 창출하는 신뢰할 수 있는 데이터 기반 애플리케이션 구축에 집중하고 있습니다.",
            contactButton: "연락하기",
            resumeButton: "이력서 다운로드"
        },
        // About Section
        about: {
            title: "소개",
            subtitle: "저를 더 알아보세요",
            paragraph1: "저는 Seoul National University of Science and Technology (SeoulTech) 컴퓨터공학과 졸업생으로, 소프트웨어 개발의 탄탄한 기초와 의미 있는 기술 솔루션을 만드는 것에 대한 열정을 가지고 있습니다.",
            paragraph2: "기술 여정을 통해 AI 기반 애플리케이션 구축부터 풀스택 웹 솔루션 개발까지 다양한 프로젝트를 진행해 왔습니다. 특히 머신러닝, 웹 개발, 그리고 실제 문제를 해결하는 사용자 중심 애플리케이션 개발에 관심이 많습니다.",
            educationLabel: "학력",
            educationValue: "컴퓨터공학 학사 - SeoulTech",
            focusLabel: "전문 분야",
            focusValue: "풀스택 및 AI 개발",
            goalLabel: "목표",
            goalValue: "영향력 있는 소프트웨어 구축"
        },
        // Skills Section
        skills: {
            title: "기술 스택",
            subtitle: "사용하는 기술들",
            categories: {
                languages: "프로그래밍 언어",
                frameworks: "프레임워크 및 라이브러리",
                tools: "도구 및 기술",
                spoken: "사용 언어"
            }
        },
        // Projects Section
        projects: {
            title: "주요 프로젝트",
            subtitle: "최근 작업한 프로젝트들",
            project1: {
                title: "PortfolioIQ — AI 기반 금융 포트폴리오 분석기",
                description: "캡스톤 프로젝트: 주식/지수 포트폴리오를 분석하는 모바일 앱의 전체 소프트웨어 개발 생명주기를 수행했습니다. 자동 위험 평가를 위해 실시간 시장 데이터를 처리하기 위해 Yahoo Finance API를 통합했습니다. 100% 데이터 수집 정확도를 보장하기 위해 PDF 업로드 및 수동 입력 모듈의 반복 테스트를 수행했습니다."
            },
            project2: {
                title: "AI 레시피 챗 — 지능형 요리 도우미 웹사이트",
                description: "애자일 팀 환경에서 프론트엔드 리더로 활동하여 개인화된 레시피 추천 엔진을 제공했습니다. OpenAI 기반 채팅 기능으로 인터페이스를 개선하여 사용자 경험을 최적화했습니다. 원활한 자연어 대화 흐름을 보장하기 위해 빠른 프로토타이핑 및 기능 테스트에 협력했습니다."
            },
            project3: {
                title: "FinGuard — 감정 기반 개인 금융 위험 데이터베이스",
                description: "데이터베이스 과정 프로젝트: 스키마 정규화 및 행동 패턴 분석을 포함하는 복잡한 데이터 아키텍처를 설계했습니다. 감정 입력을 기반으로 금융 위험을 분류하기 위해 고급 데이터 모델링을 수행했습니다. 성능과 정확성을 위해 데이터베이스 쿼리를 테스트하여 구조화된 분석 보고서를 작성했습니다."
            }
        },
        // Contact Section
        contact: {
            title: "연락하기",
            description: "현재 새로운 기회를 찾고 있습니다. 질문이 있거나 인사를 하고 싶으시면 언제든지 연락 주세요!",
            email: "이메일",
            github: "GitHub"
        },
        // Footer
        footer: {
            copyright: "© 2026 테무렌 가노치르. All rights reserved.",
            tagline: "열정과 헌신으로 제작되었습니다."
        },
        // Accessibility
        aria: {
            themeToggle: "다크/라이트 모드 전환",
            menuToggle: "메뉴 열기/닫기",
            skipToContent: "메인 콘텐츠로 건너뛰기"
        }
    }
};
