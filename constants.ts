import { ContentData } from './types';

const LECTURES_COMMON = {
  ko: [
    {
      title: "Corporate & Field Lectures",
      items: [
        { host: "글로벌핀테크진흥센터(FINPC)", topic: "디지털금융 전문인력 양성과정" },
        { host: "삼성금융연수원", topic: "디지털 입문 과정: 디지털서비스 A to Z" },
        { host: "삼성화재", topic: "디지털 서비스 기획 과정" },
        { host: "삼성생명", topic: "디자인씽킹 과정" },
        { host: "KB 금융", topic: "디지털 서비스 기획 과정" },
        { host: "하나금융TI", topic: "디자인씽킹 과정" },
        { host: "네이버클라우드", topic: "프로덕트 리딩 역량 향상 과정" },
      ]
    },
    {
      title: "Online Lectures",
      items: [
        { host: "패스트캠퍼스", topic: "한 번에 끝내는 서비스 기획의 모든 것 - O2O 서비스 기획" },
        { host: "패스트캠퍼스", topic: "메가바이트 스쿨 프로덕트 매니저 과정 (멘토링)" },
        { host: "SW Camp", topic: "프로덕트 매니저 과정 (멘토링)" },
      ]
    },
    {
      title: "Academic Lectures",
      items: [
        { host: "이화여자대학교", topic: "e커머스 서비스 기획 과정" }
      ]
    }
  ],
  en: [
    {
      title: "Corporate & Field Lectures",
      items: [
        { host: "Global Fintech Promotion Center (FINPC)", topic: "Digital Finance Specialist Training Course" },
        { host: "Samsung Finance Academy", topic: "Digital Intro: Digital Service A to Z" },
        { host: "Samsung Fire & Marine Insurance", topic: "Digital Service Planning Course" },
        { host: "Samsung Life Insurance", topic: "Design Thinking Course" },
        { host: "KB Financial Group", topic: "Digital Service Planning Course" },
        { host: "Hana TI", topic: "Design Thinking Course" },
        { host: "Naver Cloud", topic: "Product Leadership Improvement Course" },
      ]
    },
    {
      title: "Online Lectures",
      items: [
        { host: "Fast Campus", topic: "All About Service Planning - O2O Service Planning" },
        { host: "Fast Campus", topic: "Megabyte School Product Manager Course (Mentoring)" },
        { host: "SW Camp", topic: "Product Manager Course (Mentoring)" },
      ]
    },
    {
      title: "Academic Lectures",
      items: [
        { host: "Ewha Womans University", topic: "e-Commerce Service Planning Course" }
      ]
    }
  ]
};

const KO_CONTENT: ContentData = {
  nav: [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Work', id: 'work' },
    { label: 'Lectures', id: 'lectures' },
    { label: 'Contact', id: 'contact' },
  ],
  hero: {
    mainCopy: `"Only the market can tell\nif your idea is good.\nEverything else is just opinion."`,
    subCopy: "시장의 선택을 받을 수 있는, 좋은 서비스를 설계합니다.",
    author: "10년 차 Product Owner, 김성재",
    intro: `좋은 서비스는 책상 위에서 만들어지는 것이 아니라, 시장에서 선택받을 때 비로소 만들어집니다.\n저는 규제의 복잡함, 기술의 한계, 물류의 불확실성 속에서도\n사용자의 문제를 가장 단순하게 해결함으로써\n서비스가 시장의 선택을 받을 확률을 높이는 일을 해왔습니다.`
  },
  about: {
    philosophyTitle: "The Builder's Mindset",
    journeyTitle: "Journey",
    philosophyItems: [
      {
        title: "1. Possibility (가능성)",
        description: "제품의 성공은 보장되어 있지 않습니다. 그렇기에 PO는 감이 아닌 명확한 근거를 레버로 설정하여 성공 확률을 높여야 합니다. 신규 대출 상품을 론칭할 때도, 사전 신청 서비스와 잠재고객 타겟 마케팅을 통해 수요를 미리 검증하고 시장의 반응을 예측했습니다."
      },
      {
        title: "2. Simplicity (단순함)",
        description: "복잡한 문제를 사용자에게 전가하지 않습니다. 은행의 까다로운 심사 과정, 복잡한 물류 프로세스, 통합검색에 대한 넘쳐나는 니즈를 해결하기 위해서 사용자에게는 가장 단순한 경험을 제공했습니다. 복잡한 문제를 해결하는 방법은 가장 단순하기 때문에 오히려 해결하지 못하곤 합니다."
      },
      {
        title: "3. Absorbency (흡수력)",
        description: "도메인의 경계를 두지 않습니다. 커머스에서 금융으로, 플랫폼에서 물류로 이동하며 낯선 문제를 마주할 때마다, 모르는 것을 인정하고 치열하게 학습하여 내 것으로 만듭니다. 이것이 제가 10년 동안 다양한 도메인에서 성과를 낼 수 있었던 원동력입니다."
      }
    ],
    journeyItems: [
      {
        company: "LINE Financial",
        period: "2024.11 - 2025.07",
        role: "Thailand Fintech Product Team, PO"
      },
      {
        company: "Toss Bank",
        period: "2023.05 - 2024.09",
        role: "Product Foundation & Joint Loan Squad, PO"
      },
      {
        company: "Wanted Lab",
        period: "2022.09 - 2023.05",
        role: "Core Team, PO"
      },
      {
        company: "Bucketplace (오늘의집)",
        period: "2021.07 - 2022.05",
        role: "Logistics Product Group, PO"
      },
      {
        company: "Woowa Bros (배달의민족)",
        period: "2020.05 - 2021.06",
        role: "Delivery Platform Team, PM"
      },
      {
        company: "SSG.COM",
        period: "2016.03 - 2020.05",
        role: "Platform & Admin Planning Team, Planner"
      }
    ]
  },
  work: {
    title: "Selected Works",
    labels: {
      problem: "The Problem",
      approach: "The Approach",
      result: "The Result"
    },
    items: [
      {
        id: "01",
        title: "Case 01. 금융 규제와 수익성 돌파",
        subtitle: "Project: 토스뱅크 햇살론뱅크 론칭",
        problem: "연체율 증가로 신용대출 수익성이 악화되고, 대출 부결 고객이 급증하여 이탈률이 높아지는 상황이었습니다. 90%의 고객이 빈손으로 돌아가는 경험을 바꿔야 했습니다.",
        approach: "정부 보증 상품인 '햇살론뱅크'에서 기회를 발견했습니다. 복잡한 서민금융진흥원의 심사 과정을 스크래핑 기술로 자동화하여, 토스뱅크만의 심리스(Seamless)한 대출 경험으로 재설계했습니다. 동시에 잠재 고객 타겟팅을 통해 마케팅 효율을 극대화했습니다.",
        result: "출시 3개월 만에 목표액 2,000억 원을 달성하며 시장 점유율 1위(60%)를 기록했습니다."
      },
      {
        id: "02",
        title: "Case 02. 기술적 난제와 운영의 결합",
        subtitle: "Project: 신분증 OCR 자체 모델 개발",
        problem: "신형 신분증 인식 실패로 계좌 개설 단계에서 많은 고객이 이탈했습니다. 외부 솔루션으로는 즉각적인 대응이 불가능한 'Dead End' 상황이었습니다.",
        approach: "개발자, 디자이너와 TF를 구성하여 자체 OCR 모델을 딥러닝으로 구축했습니다. 기술이 해결하지 못하는 1%의 예외 케이스는 '수기 검수 프로세스'라는 운영 절차를 도입하여 빈틈없이 메웠습니다.",
        result: "인식 실패로 인한 이탈률을 완벽하게 방어하고, 자체 기술력을 확보했습니다."
      },
      {
        id: "03",
        title: "Case 03. 물류 불확실성의 시스템화",
        subtitle: "Project: 오늘의집 지정일 배송 시스템(TMS) 구축",
        problem: "가구 시장은 배송 날짜를 확약할 수 없어 고객의 불안이 높았습니다. 이는 구매 전환을 막는 가장 큰 허들이었습니다.",
        approach: "주문 접수부터 배차, 설치까지 전 과정을 관리하는 TMS(Transportation Management System)를 0부터 구축했습니다. 셀러, 기사, 고객의 이해관계를 조율하여 '예측 가능한 물류'를 실현했습니다.",
        result: "쿠팡과 더불어 가구 지정일 배송이 가능한 유일한 플랫폼 시스템을 구축했습니다."
      }
    ]
  },
  lectures: {
    title: "Sharing Insights",
    subtitle: "현업에서 검증된 지식과 경험을 나눕니다.",
    categories: LECTURES_COMMON.ko
  },
  footer: {
    title: "Contact",
    description: "함께 해결해야 할 복잡한 문제가 있다면,\n언제든 연락 주세요.",
    copyright: "© 2025 Kim Seongjae. All rights reserved."
  }
};

const EN_CONTENT: ContentData = {
  nav: [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Work', id: 'work' },
    { label: 'Lectures', id: 'lectures' },
    { label: 'Contact', id: 'contact' },
  ],
  hero: {
    mainCopy: `"Only the market can tell\nif your idea is good.\nEverything else is just opinion."`,
    subCopy: "Designing good services chosen by the market.",
    author: "10-year Product Owner, Seongjae Kim",
    intro: `Great services are not created at a desk, but when they are chosen by the market.\nAmidst complex regulations, technological limitations, and logistics uncertainties,\nI have increased the probability of market selection\nby solving user problems in the simplest possible way.`
  },
  about: {
    philosophyTitle: "The Builder's Mindset",
    journeyTitle: "Journey",
    philosophyItems: [
      {
        title: "1. Possibility",
        description: "Success is not guaranteed. Therefore, a PO must use clear evidence as a lever, not intuition, to increase the possibility of success. Even when launching a new loan product, I verified demand in advance through pre-application services and targeted marketing to predict market reaction."
      },
      {
        title: "2. Simplicity",
        description: "Do not pass complex problems on to the user. To resolve needs for strict bank screening, complex logistics, and integrated search, I provided the simplest experience to users. Complex problems are often unsolved because the solutions are not simple enough."
      },
      {
        title: "3. Absorbency",
        description: "Do not limit domain boundaries. Moving from commerce to finance, platform to logistics, facing unfamiliar problems, I admit what I don't know and learn fiercely to make it mine. This is the driving force behind my achievements across various domains over 10 years."
      }
    ],
    journeyItems: [
      {
        company: "LINE Financial",
        period: "2024.11 - 2025.07",
        role: "Thailand Fintech Product Team, PO"
      },
      {
        company: "Toss Bank",
        period: "2023.05 - 2024.09",
        role: "Product Foundation & Joint Loan Squad, PO"
      },
      {
        company: "Wanted Lab",
        period: "2022.09 - 2023.05",
        role: "Core Team, PO"
      },
      {
        company: "Bucketplace (Ohou)",
        period: "2021.07 - 2022.05",
        role: "Logistics Product Group, PO"
      },
      {
        company: "Woowa Bros (Baemin)",
        period: "2020.05 - 2021.06",
        role: "Delivery Platform Team, PM"
      },
      {
        company: "SSG.COM",
        period: "2016.03 - 2020.05",
        role: "Platform & Admin Planning Team, Planner"
      }
    ]
  },
  work: {
    title: "Selected Works",
    labels: {
      problem: "The Problem",
      approach: "The Approach",
      result: "The Result"
    },
    items: [
      {
        id: "01",
        title: "Case 01. Breakthrough in Financial Regulation & Profitability",
        subtitle: "Project: Launch of Toss Bank 'Sunshine Loan Bank'",
        problem: "Profitability of credit loans worsened due to rising delinquency rates, and customer churn increased due to loan rejections. We needed to change the experience where 90% of customers left empty-handed.",
        approach: "We discovered an opportunity in 'Sunshine Loan Bank', a government-guaranteed product. We automated the complex screening process of the Korea Inclusive Finance Agency using scraping technology, redesigning it into Toss Bank's seamless loan experience. At the same time, we maximized marketing efficiency through potential customer targeting.",
        result: "Achieved the target of 200 billion KRW within 3 months of launch, recording the No. 1 market share (60%)."
      },
      {
        id: "02",
        title: "Case 02. Combining Technical Challenges with Operations",
        subtitle: "Project: Development of In-house ID OCR Model",
        problem: "Many customers dropped off during the account opening stage due to recognition failures of new ID cards. It was a 'Dead End' situation where immediate response with external solutions was impossible.",
        approach: "We formed a TF with developers and designers to build a proprietary OCR model using deep learning. The 1% of exception cases that technology could not solve were seamlessly covered by introducing an operational procedure called 'manual verification process'.",
        result: "Completely defended against churn due to recognition failures and secured proprietary technology."
      },
      {
        id: "03",
        title: "Case 03. Systematizing Logistics Uncertainty",
        subtitle: "Project: Development of Designated Day Delivery System (TMS)",
        problem: "The furniture market had high customer anxiety as delivery dates could not be confirmed. This was the biggest hurdle preventing purchase conversion.",
        approach: "We built a TMS (Transportation Management System) from scratch to manage the entire process from order receipt to dispatch and installation. By coordinating the interests of sellers, drivers, and customers, we realized 'predictable logistics'.",
        result: "Established the only platform system capable of designated delivery dates for furniture, alongside Coupang."
      }
    ]
  },
  lectures: {
    title: "Sharing Insights",
    subtitle: "Sharing proven knowledge and experience from the field.",
    categories: LECTURES_COMMON.en
  },
  footer: {
    title: "Contact",
    description: "Please feel free to contact me if you have any complex problems to solve together.",
    copyright: "© 2025 Kim Seongjae. All rights reserved."
  }
};

export const CONTENT = {
  ko: KO_CONTENT,
  en: EN_CONTENT
};

export const CONTACT_INFO = {
  email: "hzory74@gmail.com",
  linkedin: "linkedin.com/in/seongjae-kim"
};