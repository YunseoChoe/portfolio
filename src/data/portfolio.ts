export const profile = {
  name: "최윤서",
  role: "Backend Engineer",
  tagline: "더 나은 방법을 끊임없이 탐구하고, 수치로 증명하는 엔지니어 최윤서입니다.",
  email: "choeyunseo4060@naver.com",
  github: "https://github.com/YunseoChoe",
  blog: "https://velog.io/@choeyunseo/series",
};

export const competencies = [
  "안정성을 보장하는 테스트 코드 작성 및 품질 관리",
  "Spring Data JPA 및 QueryDSL 기반 데이터 모델링 · 쿼리 최적화",
  "대용량 트래픽 환경을 고려한 아키텍처 설계 및 성능 최적화",
  "동시성 문제를 분석 · 해결하고, 성능 지표 · 안정성을 기반으로 시스템 구조를 설계 및 개선",
];

export const skills: { category: string; items: string[] }[] = [
  { category: "Language", items: ["Java", "Kotlin", "Python"] },
  { category: "Backend", items: ["Spring Boot", "Spring Security · JWT", "JPA", "QueryDSL"] },
  { category: "Database", items: ["MySQL", "Redis", "MongoDB"] },
  { category: "Infra", items: ["AWS", "Docker", "GitHub Actions"] },
  { category: "Test & Monitoring", items: ["JUnit", "JaCoCo", "k6", "Prometheus", "Grafana"] },
];

export const education = [
  {
    period: "2022.03 ~ 2026.02",
    title: "상명대학교 소프트웨어학과 (졸업)",
    details: ["학점 4.0 / 4.5", "성적 장학금 6회, SW 인재 장학금 1회"],
  },
];

export const activities = [
  {
    period: "2026.01 ~ 2026.07",
    title: "프로그래머스 백엔드 데브코스 9기",
    org: "그렙 (Grepp) · 백엔드 수료",
    details: [
      "4회의 팀 프로젝트 수행 (전 프로젝트 백엔드 개발 담당)",
      "Java · Spring Boot 기반 RESTful API 설계 및 구현",
      "Java → Kotlin 마이그레이션을 통한 코드 가독성 및 null 안전성 개선 학습",
      "JPQL · QueryDSL 활용 동적 쿼리 작성 및 복잡한 조회 성능 최적화",
      "AOP 기반 공통 관심사 분리로 유지보수성 높은 설계 구조 적용",
      "TDD 기반 단위·통합 테스트 작성 및 코드 커버리지 관리",
      "Docker · AWS 클라우드 환경 서비스 구축 및 GitHub Actions CI/CD 파이프라인 구성",
      "2 · 3차 프로젝트 팀장으로 Jira 기반 협업 일정 관리 및 팀 커뮤니케이션 주도",
      "자체 코드 리뷰 및 Gemini Code Assist를 활용한 코드 품질 점검과 리팩토링 수행",
    ],
  },
  {
    period: "2024.02 ~ 2024.08",
    title: "Kakao X 9oormthon Univ 2기",
    org: "goorm · 백엔드 수료",
    details: [
      "Node.js 기반 백엔드 학습",
      "CI/CD 파이프라인 구축을 통한 테스트 자동화 학습",
      "2024 벚꽃톤 참여 — 웹툰 작가와 독자 간 긍정적 소통 유도 서비스",
    ],
  },
  {
    period: "2023.01 ~ 2023.12",
    title: "멋쟁이사자처럼 대학 11기",
    org: "LIKELION · 백엔드 수료",
    details: [
      "Django 기반 백엔드 학습",
      "알고리즘 스터디 기획 및 운영 — 매주 스터디를 운영하며 문제 해결 능력과 가독성 있는 코드 작성 습관 체득",
      "2023 해커톤 참여 — 디지털 격차 해소를 위한 1:1 심부름 매칭 웹 서비스",
    ],
  },
];

export const awards = [
  { date: "2026.07", title: "프로그래머스 데브코스 Baton 프로젝트 장려상", detail: "12개 팀 중 3위" },
  { date: "2026.05", title: "프로그래머스 데브코스 RunGo 프로젝트 우수상", detail: "12개 팀 중 2위" },
  { date: "2024.12", title: "제3회 SM@ COSSTHON 우수상", detail: "첨단분야 혁신융합대학사업 (COSS)" },
];

export const certificates = [
  { name: "정보처리기사", issuer: "한국산업인력공단", date: "2025.09" },
  { name: "SQLD", issuer: "한국데이터산업진흥원", date: "2025.09" },
  { name: "리눅스마스터 2급 (1차)", issuer: "KAIT 한국정보통신진흥협회", date: "2025.05" },
  { name: "OPIc IM2", issuer: "ACTFL", date: "2025.02" },
];

export type Metric = { label: string; before: string; after: string; change: string };

export type Section = {
  title: string;
  subtitle?: string;
  blocks: { heading: string; items: string[] }[];
  table?: { caption: string; columns: string[]; rows: string[][] };
};

export type Project = {
  slug: string;
  name: string;
  title: string;
  period: string;
  duration: string;
  role: string;
  contribution?: string;
  team: string;
  org: string;
  award?: string;
  github: { label: string; url: string }[];
  summary: string;
  overview?: string;
  goal?: string;
  stack: { category: string; items: string }[];
  highlights: string[];
  stats?: { value: string; label: string }[];
  designPoints?: string[];
  sections: Section[];
  retrospective?: { good: { title: string; items: string[] }[]; improve: { title: string; items: string[] }[] };
};

export const projects: Project[] = [
  {
    slug: "baton",
    name: "Baton",
    title: "크레딧·에스크로 기반 1:1 안전 재능 교환 플랫폼",
    period: "2026.06 ~ 2026.07",
    duration: "4주",
    role: "백엔드",
    contribution: "70%",
    team: "백엔드 5명",
    org: "프로그래머스 백엔드 데브코스 9기",
    award: "장려상 (12개 팀 중 3위)",
    github: [
      { label: "Backend", url: "https://github.com/YunseoChoe/Baton-backend" },
      { label: "Frontend", url: "https://github.com/YunseoChoe/Baton-frontend" },
    ],
    summary: "가상 크레딧과 에스크로 결제 모델로 금전적 부담과 사기 걱정 없이 재능을 교환하는 플랫폼",
    overview:
      "기존 재능 교환 플랫폼은 높은 금전적 장벽이 있거나, 서비스의 고질적인 문제인 '거래 사기'와 '안전 장치 부재' 문제가 있었습니다. 이를 해결하기 위해 가상 크레딧(Credit)과 에스크로(Escrow) 결제 모델을 결합하여, 금전적 부담 없이 누구나 안전하게 재능을 교환할 수 있는 신뢰 기반의 플랫폼을 구축했습니다.",
    goal: "에스크로 결제와 가상 크레딧 시스템을 통해 누구나 금전적 사기 걱정 없이 지식과 재능을 나눌 수 있는 안전한 거래 플랫폼을 제공합니다.",
    stack: [
      { category: "Backend", items: "Java, Spring Boot, JPA, QueryDSL, Spring Security · JWT" },
      { category: "Frontend", items: "Next.js" },
      { category: "Database", items: "MySQL (dev), H2 (local)" },
      { category: "Infra", items: "AWS EC2, S3, Docker, GitHub Actions" },
      { category: "Test & Monitoring", items: "JUnit, JaCoCo, k6, Prometheus, Grafana" },
    ],
    highlights: [
      "가상 화폐(Credit) 및 에스크로 기반 안전 결제 시스템을 설계 · 구현하여 거래 신뢰성 확보",
      "원자적 업데이트를 활용한 크레딧 결제 동시성 제어로 처리량 2.6배 향상, 평균 응답 속도 약 83.3% 단축",
      "커서(No-Offset) 기반 페이징으로 100만 건 환경의 거래 내역 조회 속도 약 1,700배 단축 (1,769ms → 1.04ms)",
      "JaCoCo 테스트 커버리지 Line 87%, Branch 74% 달성 (475개 테스트 케이스)",
      "AWS S3 Presigned URL로 파일 업로드 트래픽을 분산하여 서버 네트워크 · 메모리 부하 최소화",
    ],
    stats: [
      { value: "2.6×", label: "크레딧 결제 처리량" },
      { value: "1,700×", label: "거래 내역 조회 속도" },
      { value: "8.5×", label: "파일 업로드 처리량" },
      { value: "87%", label: "Line Coverage" },
    ],
    designPoints: [
      "원자적 업데이트로 크레딧 차감 동시성 제어",
      "S3 Presigned URL로 대용량 파일 업로드 부하 분산",
      "커서 기반 페이징으로 거래 내역 조회 성능 개선",
      "Prometheus · Grafana 기반 실시간 모니터링",
    ],
    sections: [
      {
        title: "크레딧 및 에스크로 기반 안전 결제 시스템 설계",
        blocks: [
          {
            heading: "배경",
            items: [
              "개인 간 재능 교환 시 발생할 수 있는 금전적 사기 방지 필요",
              "거래가 완전히 종료될 때까지 거래 대금을 안전하게 묶어둘 결제 중개 장치 부재",
            ],
          },
          {
            heading: "목표",
            items: [
              "거래 생명주기와 자금의 흐름을 명확히 추적할 수 있는 데이터 모델링",
              "분쟁 상황을 포함하여 예외 없이 동작하는 안전 결제 파이프라인 구축",
            ],
          },
          {
            heading: "해결 방안",
            items: [
              "에스크로(Escrow) 독립 엔티티 설계",
              "비즈니스 흐름에 따라 4단계 상태(HELD, FROZEN, RELEASED, REFUNDED)로 생명주기 관리",
            ],
          },
          {
            heading: "결과",
            items: [
              "통합 시나리오 테스트로 회원가입부터 매칭 수락(동결) · 구매 확정(정산) · 내역 조회까지 이어지는 데이터 무결성 검증 완료",
            ],
          },
        ],
      },
      {
        title: "크레딧 차감 동시성 제어 개선",
        subtitle: "비관적 락 → DB 원자적 업데이트",
        blocks: [
          {
            heading: "배경 및 문제 상황",
            items: ["비관적 락은 트랜잭션 종료 시까지 락을 점유하여, 다수의 동시 결제 요청 시 병목 및 데드락 발생 위험 존재"],
          },
          {
            heading: "해결 방안",
            items: ["UPDATE ... WHERE balance >= X 형태의 쿼리로 DB 엔진의 원자성 활용"],
          },
          {
            heading: "기술적 고민",
            items: ["상태 관리가 중요한 거래에는 비관적 락, 고성능 가감산 처리가 필요한 크레딧에는 원자적 업데이트를 사용"],
          },
          {
            heading: "결과",
            items: ["불필요한 대기 시간을 없애 데이터 정합성을 유지하면서 시스템 처리량 극대화"],
          },
        ],
        table: {
          caption: "k6 50VU 크레딧 차감 동시성 테스트",
          columns: ["지표", "비관적 락", "원자적 업데이트", "개선율"],
          rows: [
            ["총 처리 건수", "32,612건", "85,166건", "2.61배 증가"],
            ["평균 응답 속도", "36ms", "6ms", "83.3% 단축"],
            ["최대 응답 지연", "958.32ms", "615.69ms", "약 35.7% 개선"],
            ["에러율", "0%", "0%", "-"],
          ],
        },
      },
      {
        title: "대용량 파일 업로드 아키텍처 의사결정",
        subtitle: "서버 중계(Multipart) vs S3 직접 업로드(Presigned URL)",
        blocks: [
          {
            heading: "배경",
            items: ["재능 교환 시 영상, 디자인, 코드 등 수백 MB의 대용량 결과물 업로드 아키텍처 고민"],
          },
          {
            heading: "해결 방안",
            items: [
              "[방안 1] 서버 중계 (Multipart): 구현은 단순하나 대용량 파일 수신 시 서버 메모리 폭증 및 스레드 병목 위험",
              "[방안 2] S3 직접 업로드 (Presigned URL): 백엔드는 업로드 권한 URL만 발급하고, 클라이언트가 S3로 직접 전송",
            ],
          },
          {
            heading: "의사 결정",
            items: [
              "대규모 트래픽 하에서도 백엔드 서버의 고가용성과 안정성을 확보하기 위해 S3 직접 업로드 채택",
              "설계 판단을 검증하기 위해 k6 부하 테스트로 두 방식의 성능 비교",
            ],
          },
          {
            heading: "결과",
            items: ["서버의 스레드 및 메모리 병목을 차단하고, 처리량 8.5배 증가 및 평균 응답 속도 88% 단축 (50ms → 6ms)"],
          },
        ],
        table: {
          caption: "k6 50VU 대용량 파일 업로드 부하 테스트",
          columns: ["지표", "서버 중계 (Multipart)", "S3 Presigned URL", "개선율"],
          rows: [
            ["총 처리 건수", "1,599건", "13,724건", "8.5배 증가"],
            ["평균 응답 속도", "50ms", "6ms", "88% 단축"],
            ["최대 응답 지연", "141ms", "15ms", "약 9.4배 개선"],
            ["일반 체감 속도", "41ms", "2ms", "20배 향상"],
          ],
        },
      },
      {
        title: "Cursor 기반(No-Offset) 페이징을 통한 조회 성능 최적화",
        blocks: [
          {
            heading: "배경 및 문제 상황",
            items: [
              "실시간 누적되는 거래 내역 조회를 Spring Data JPA의 기본 Offset 방식으로 구현",
              "더미 데이터 100만 건으로 DB 레벨 검증 실시",
              "90만 번째 페이지 조회 시 앞선 90만 건을 읽고 버리는 Full Scan으로 약 1,769ms 지연, 전체 COUNT 쿼리로 DB I/O 부하 가중",
            ],
          },
          {
            heading: "의사 결정",
            items: [
              "QueryDSL 도입: 마지막으로 읽은 PK를 커서로 받아 WHERE id < :cursor 조건으로 인덱스를 직접 스캔",
              "COUNT 쿼리 제거: LIMIT size + 1로 조회해 다음 페이지 존재 여부(hasNext)만 판단",
            ],
          },
          {
            heading: "결과",
            items: [
              "90만 번째 데이터 조회 응답 시간 약 1,700배 단축 (1,769ms → 1.04ms, O(N) → O(1))",
              "페이징 중 새 거래 내역이 생겨도 중복 노출 · 누락 없는 무한 스크롤 정합성 확보",
              "무거운 COUNT 쿼리 제거로 대용량 트래픽 상황의 서버 과부하 위험 감소",
            ],
          },
        ],
        table: {
          caption: "Offset vs Cursor 트레이드오프",
          columns: ["비교 항목", "Offset 방식", "Cursor 방식"],
          rows: [
            ["조회 성능", "페이지가 깊어질수록 저하 (O(N))", "데이터 양과 무관하게 일정 (O(1))"],
            ["데이터 정합성", "새 데이터 삽입 시 누락/중복 발생", "기준 PK 고정으로 누락/중복 방지"],
            ["UI 적합성", "특정 페이지 이동이 필요한 게시판", "최신순 무한 스크롤 앱 환경"],
          ],
        },
      },
    ],
    retrospective: {
      good: [
        {
          title: "데이터 정합성 및 멱등성을 고려한 설계",
          items: [
            "크레딧 정합성을 지키기 위한 API 멱등성 보장 방안을 깊이 있게 고민하며 시스템 설계 시야 확장",
            "무거운 멱등성 키 대신 도메인 상태 검증 · 동시성 제어 · 예외 처리를 결합하여 거래 API 멱등성 확보",
          ],
        },
        {
          title: "성능 최적화 전 과정 경험",
          items: ["실행 계획(EXPLAIN) 분석으로 Full Table Scan 제거, 인덱스 설계 및 쿼리 튜닝 경험"],
        },
        {
          title: "동시성 제어 트레이드오프 결정",
          items: ["여러 락 메커니즘을 비교하고 k6로 측정한 TPS · 응답속도를 근거로 가장 적합한 방식 채택"],
        },
        {
          title: "에스크로 결제 프로세스 및 정책 설계",
          items: [
            "동결(Hold) → 환불(Refund) → 최종 정산(Settle)으로 이어지는 에스크로 전체 라이프사이클 구현",
            "분쟁(Dispute) 판결에 따라 자금 흐름이 분기되는 커머스/핀테크 도메인 로직 설계",
          ],
        },
      ],
      improve: [
        {
          title: "도메인 간 결합도 해소",
          items: ["TradeService가 정산과 에스크로 해제를 직접 호출해 한 트랜잭션으로 묶여 있음 → Spring Events나 Kafka로 이벤트 기반 분리 예정"],
        },
        {
          title: "거래 완료 시 알림",
          items: ["상태 변경 시 즉각적인 피드백 부재 → SSE 또는 WebSocket으로 실시간 알림 구축 예정"],
        },
        {
          title: "크레딧 멱등성 확보",
          items: ["클라이언트 자동 재시도 같은 엣지 케이스 대비 → Redis 기반 Idempotency-Key 캐싱 도입 예정"],
        },
      ],
    },
  },
  {
    slug: "rungo",
    name: "RunGo",
    title: "대규모 트래픽과 동시성 제어를 고려한 마라톤 대회 주최·접수 통합 플랫폼",
    period: "2026.04 ~ 2026.05",
    duration: "6주",
    role: "백엔드, 팀장",
    contribution: "75%",
    team: "백엔드 5명",
    org: "프로그래머스 백엔드 데브코스 9기",
    award: "우수상 (12개 팀 중 2위)",
    github: [
      { label: "Backend", url: "https://github.com/YunseoChoe/RunGo-backend" },
      { label: "Backend (Kotlin)", url: "https://github.com/YunseoChoe/RunGo-backend-kotlin" },
    ],
    summary: "흩어진 마라톤 대회 정보를 모으고, 선착순 접수 트래픽을 견디도록 설계한 통합 플랫폼",
    overview:
      "국내 마라톤 인구는 꾸준히 늘고 매년 수백 개의 대회가 열리지만, 대회 정보는 여러 커뮤니티와 블로그에 흩어져 참여자와 주최자 모두 불편을 겪고 있습니다. 특히 인기 대회는 선착순 접수 특성상 서버 다운과 초과 예매 문제가 발생할 수 있습니다.",
    goal: "대회 탐색부터 참가 접수, 주최자 승인까지 아우르는 통합 플랫폼을 개발합니다. 300명 동시 접속을 가정해 고가용성을 확보하고, 부하 테스트로 성능 병목을 선제적으로 해결하는 아키텍처를 설계합니다.",
    stack: [
      { category: "Backend", items: "Java, Kotlin, Spring Boot, JPA, Spring Security · JWT" },
      { category: "Frontend", items: "Next.js" },
      { category: "Database", items: "MySQL (dev), Redis (dev), H2 (local)" },
      { category: "Infra", items: "AWS EC2, Docker, GitHub Actions" },
      { category: "Test & Monitoring", items: "JUnit, k6, Prometheus, Grafana" },
    ],
    highlights: [
      "Spring Security, JWT(Access & Refresh) 기반 인증/인가 시스템 및 RTR 보안 체계 구축",
      "Redis 기반 Refresh Token 관리 및 세션 탈취 감지를 통한 강제 로그아웃 처리 구현",
      "Redis 분산 락으로 토큰 재발급 동시성 제어, k6 30 VU 결과 p95 75ms · 에러율 0%",
      "전자상거래법 보존 정책에 따른 사용자 데이터 관리 시스템 설계 · 구현으로 개인정보 파기 자동화",
      "Java → Kotlin 마이그레이션으로 Null Safety 적용 및 코드 유지보수성 개선",
    ],
    stats: [
      { value: "75ms", label: "토큰 재발급 p95" },
      { value: "0%", label: "에러율 (k6 30 VU)" },
      { value: "~800", label: "최대 처리량 (RPS)" },
      { value: "-8.9%", label: "Kotlin 전환 후 평균 LOC" },
    ],
    designPoints: [
      "Redis로 Refresh Token 관리",
      "Redis 분산 락으로 토큰 재발급 동시성 제어",
      "Toss Payments confirm API로 실제 접수 결제 처리",
      "Prometheus · Grafana 기반 실시간 모니터링",
    ],
    sections: [
      {
        title: "Java → Kotlin 마이그레이션",
        blocks: [
          {
            heading: "목표",
            items: ["null-safety로 NPE 위험 감소", "DTO / data class로 코드 간결화 및 생산성 향상", "서비스 기능 유지"],
          },
          {
            heading: "전략",
            items: [
              "DTO → Controller → Service → Entity → Repository/Status → Test 순으로 점진적 전환",
              "@JVM 어노테이션은 테스트 이후 점진적 삭제",
              "named argument 적극 활용",
            ],
          },
          {
            heading: "결과",
            items: [
              "nullable 타입 명시로 컴파일 단계에서 null 처리 강제",
              "Java의 반복 코드를 data class 등으로 대체해 보일러플레이트 감소",
              "요청/응답 DTO를 val 중심으로 작성해 불필요한 상태 변경 방지",
            ],
          },
        ],
        table: {
          caption: "LOC (Lines of Code) 감소 효과",
          columns: ["구분", "변경 전", "변경 후", "감소율"],
          rows: [
            ["Controller", "206", "193", "-6.3%"],
            ["DTO", "323", "288", "-10.8%"],
            ["Entity", "78", "72", "-7.7%"],
            ["Service", "431", "385", "-10.7%"],
            ["평균", "-", "-", "-8.9%"],
          ],
        },
      },
      {
        title: "JWT 인증/인가 시스템",
        blocks: [
          {
            heading: "인증 흐름",
            items: [
              "Cookie(accessToken) → CustomAuthenticationFilter에서 id, email, role 추출",
              "SecurityContextHolder 저장 → AuthorizationFilter 인가 → SecurityConfig에서 401/403 분기 → Controller",
            ],
          },
          {
            heading: "XSS / CSRF 방어",
            items: ["HttpOnly 쿠키와 SameSite=Strict 설정으로 XSS 및 CSRF 공격 대응"],
          },
        ],
        table: {
          caption: "세션 vs JWT 설계 결정",
          columns: ["항목", "세션 기반 인증", "JWT"],
          rows: [
            ["서버 상태", "서버/DB에 세션 저장", "상태 비저장 (Refresh Token은 Redis)"],
            ["확장성", "세션 클러스터 필요", "서버 간 세션 공유 불필요"],
            ["서버 부하", "매 요청마다 세션 조회", "DB 조회 없음"],
            ["만료 관리", "서버에서 TTL 직접 제어", "Access · Refresh Token으로 관리"],
          ],
        },
      },
      {
        title: "토큰 재발급 동시성 제어 (Redis 분산 락)",
        blocks: [
          {
            heading: "배경 및 문제 상황",
            items: [
              "Access Token 만료 시 동일 클라이언트의 여러 API 요청이 동시에 재발급을 요청",
              "RTR 적용으로 재발급 시 기존 토큰이 무효화되어 상태 불일치로 인한 비정상 로그아웃 발생",
            ],
          },
          {
            heading: "핵심 구현 로직",
            items: [
              "[트랜잭션 외부] userId 기반 락 획득 시도 — 요청 A 획득, 중복 요청 B는 대기",
              "[트랜잭션 진입] 락을 획득한 요청 A만 타임아웃을 적용해 로직 진입",
              "[트랜잭션 내부] 기존 토큰 일치 여부 검증, 새 토큰 생성 후 Redis 데이터 갱신",
              "[트랜잭션 종료] 커밋으로 저장이 보장된 후 락 해제",
              "[대기 요청 처리] 요청 B는 A가 갱신한 데이터를 읽어 방어 로직 작동",
            ],
          },
        ],
        table: {
          caption: "락 방식 비교",
          columns: ["락", "장점", "단점"],
          rows: [
            ["낙관적 락", "DB 데드락 위험 없음", "토큰을 RDBMS로 이전, 버전 컬럼 추가 필요"],
            ["비관적 락", "충돌 원천 차단으로 정합성 보장", "RDBMS 이전 필요, 성능 저하 및 병목"],
            ["분산 락", "기존 인프라(Refresh Token 저장소) 활용", "Redis 장애 시 로직 중단, 구현 복잡도"],
          ],
        },
      },
      {
        title: "동시 접수 상황 부하 테스트",
        blocks: [
          {
            heading: "목적",
            items: [
              "선착순 접수 오픈 시 짧은 시간에 대규모 트래픽이 집중되는 상황(티켓팅)을 재현해 서버 한계 파악",
            ],
          },
          {
            heading: "결과",
            items: ["300 VU부터 응답 시간이 급증하며 처리량(RPS) 증가가 정체 — 최대 처리량 약 800 RPS"],
          },
        ],
        table: {
          caption: "k6 동시 사용자별 결과",
          columns: ["VU", "AVG (ms)", "P95 (ms)", "RPS", "상태"],
          rows: [
            ["100", "118", "149", "~840", "안정"],
            ["300", "361", "539", "~826", "임계"],
            ["500", "585", "740", "~848", "과부하"],
            ["1,000", "1,190", "1,410", "~829", "붕괴"],
          ],
        },
      },
    ],
    retrospective: {
      good: [
        {
          title: "팀장으로서 협업 주도",
          items: ["Jira 기반 일정 관리, 데일리 스크럼과 스프린트 단위 칸반 보드로 작업 병목 차단"],
        },
        {
          title: "동시성 제어 트레이드오프 결정",
          items: ["토큰 재발급 시 락 방식들의 장단점을 비교해 현재 인프라에 최적화된 방식 채택"],
        },
        {
          title: "운영 관점의 백엔드 개발",
          items: ["Prometheus · Grafana로 TPS, 에러율 등 핵심 지표를 검증하며 운영 안정성을 고려한 설계"],
        },
        {
          title: "테스트 코드 작성 습관",
          items: ["단위 · 통합 · 동시성 테스트와 엣지 케이스 실패 테스트로 핵심 로직의 신뢰성 확보"],
        },
        {
          title: "Kotlin 점진적 마이그레이션 주도",
          items: ["Java와의 상호 운용성을 유지하며 전환하고, Null Safety와 data class로 NPE 차단 및 코드량 감소"],
        },
      ],
      improve: [
        {
          title: "Redis 기반 보안 로직 강화",
          items: ["Redis 장애 시 락이 동작하지 않을 위험 → Sentinel 또는 Cluster 도입 고려"],
        },
        {
          title: "동시성 제어 및 UX 개선",
          items: ["락 획득 실패 시 단순 에러 대신 안전한 재시도나 대기열 도입"],
        },
        {
          title: "운영 및 장애 대응 고도화",
          items: [
            "임계치 초과 알림 자동화와 APM 도입으로 DB 쿼리 병목 정밀 추적",
            "분산 서버 에러 로그 중앙 집중화로 장애 원인 파악 시간 단축",
          ],
        },
      ],
    },
  },
  {
    slug: "wooajeong",
    name: "우아정",
    title: "안심 중고 거래 AI 플랫폼",
    period: "2025.03 ~ 2025.06",
    duration: "3개월",
    role: "백엔드, DevOps",
    team: "AI 1명, BE 1명, FE 1명",
    org: "상명대학교 캡스톤디자인",
    github: [{ label: "Backend", url: "https://github.com/YunseoChoe/Wooajeong-backend" }],
    summary: "AI를 활용한 안심 중고 거래 플랫폼의 백엔드와 배포 파이프라인을 혼자 담당",
    stack: [
      { category: "Backend", items: "Spring Boot, OAuth 2.0, STOMP" },
      { category: "Database", items: "MySQL, MongoDB" },
      { category: "Messaging", items: "RabbitMQ" },
      { category: "Infra", items: "AWS EC2, Docker, GitHub Actions" },
    ],
    highlights: [
      "EC2 · Docker · GitHub Actions 기반 CI/CD 파이프라인 구축 및 배포 자동화",
      "RabbitMQ · STOMP를 활용한 실시간 비동기 채팅 시스템 설계 및 구현",
      "채팅 데이터 저장소를 MySQL(채팅방 정보) · MongoDB(채팅 메시지)로 분리해 메시지 저장 성능 개선",
      "OAuth 2.0 기반 소셜 로그인 시스템 구축",
    ],
    sections: [],
  },
];
