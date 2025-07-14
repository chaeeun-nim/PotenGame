import dayjs from 'dayjs';

function getTime(day = 0, second = 0) {
  return dayjs().add(day, 'days').add(second, 'seconds').format('YYYY.MM.DD HH:mm:ss');
}

export const initData = async (clientId, nextSeq) => {
  return {
    // 회원
    user: [
      {
        _id: await nextSeq('user'),
        email: 'admin@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '무지',
        phone: '01011112222',
        address: '서울시 강남구 역삼동 123',
        type: 'admin',
        loginType: 'email',
        image: `files/${clientId}/user-muzi.png`,
        createdAt: getTime(-100, -60 * 60 * 3),
        updatedAt: getTime(-100, -60 * 60 * 3),
        extra: {
          nickname: '관리자',
          birthday: '03-23',
          membershipClass: 'MC02',
          addressBook: [
            {
              id: 1,
              name: '집',
              value: '서울시 강남구 역삼동 123',
            },
            {
              id: 2,
              name: '회사',
              value: '서울시 강남구 신사동 234',
            },
          ],
        },
      },
      {
        _id: await nextSeq('user'),
        email: 's1@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '네오',
        phone: '01022223333',
        address: '서울시 강남구 삼성동 456',
        type: 'user',
        loginType: 'email',
        image: `files/${clientId}/user-neo.png`,
        createdAt: getTime(-50),
        updatedAt: getTime(-30, -60 * 60 * 3),
        extra: {
          nickname: '유저네오',
          birthday: '11-23',
          membershipClass: 'MC01',
          addressBook: [
            {
              id: 1,
              name: '회사',
              value: '서울시 강남구 삼성동 567',
            },
            {
              id: 2,
              name: '학교',
              value: '서울시 강남구 역삼동 234',
            },
          ],
        },
      },
      {
        _id: await nextSeq('user'),
        email: 's2@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '어피치',
        phone: '01033334444',
        address: '서울시 강남구 도곡동 789',
        type: 'user',
        loginType: 'email',
        image: `files/${clientId}/user-apeach.png`,
        createdAt: getTime(-40, -60 * 30),
        updatedAt: getTime(-30, -60 * 20),
        extra: {
          nickname: '유저어피치',
          confirm: false, // 관리자 승인이 안됨
          birthday: '11-24',
          membershipClass: 'MC02',
          addressBook: [
            {
              id: 1,
              name: '회사',
              value: '서울시 마포구 연희동 123',
            },
            {
              id: 2,
              name: '가게',
              value: '서울시 강남구 학동 234',
            },
          ],
        },
      },
      {
        _id: await nextSeq('user'),
        email: 'u1@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '제이지',
        phone: '01044445555',
        address: '서울시 강남구 논현동 222',
        type: 'user',
        loginType: 'email',
        image: `files/${clientId}/user-jayg.webp`,
        createdAt: getTime(-20, -60 * 30),
        updatedAt: getTime(-10, -60 * 60 * 12),
        extra: {
          nickname: '유저제이지',
          birthday: '11-30',
          membershipClass: 'MC02',
          address: [
            {
              id: 1,
              name: '회사',
              value: '서울시 강동구 천호동 123',
            },
            {
              id: 2,
              name: '집',
              value: '서울시 강동구 성내동 234',
            },
          ],
        },
      },
    ],

    // 상품
    product: [
      {
        _id: await nextSeq('product'),
        // 상품가격
        price: 49000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '포켓몬스터 바이올렛',
        // 재고수량
        quantity: 50,
        // 판매된 수량
        buyQuantity: 10,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-01-thumbnail.jpg`,
            name: 'pro-01-thumbnail.jpg',
            originalname: '포켓몬스터-바이올렛.jpg',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-01-detail.jpg`,
            name: 'pro-01-detail.jpg',
            originalname: '포켓몬스터-바이올렛.jpg',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '22.11.18',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'NINTENDO01', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 5,
          // 제품상태
          condition: '미사용 중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '전체이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 1,
          // 원가
          originalPrice: 69000,
          // 언어,원산지
          language: '음성-영어,한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        // 상품가격
        price: 84800,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '젤다의 전설 야생의 숨결',
        // 재고수량
        quantity: 20,
        // 판매된 수량
        buyQuantity: 10,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-02-thumbnail.jpg`,
            name: 'pro-02-thumbnail.jpg',
            originalname: '젤다의 전설 야생의 숨결.jpg',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-02-detail.jpg`,
            name: 'pro-02-detail.jpg',
            originalname: '젤다의 전설 야생의 숨결.jpg',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '25.06.05',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'NINTENDO02', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 5,
          // 제품상태
          condition: '신제품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '전체이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 2,
          // 원가
          originalPrice: 84800,
          // 언어,원산지
          language: '음성-영어,일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        // 상품가격
        price: 45000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '젤다의 전설 지혜의 투영',
        // 재고수량
        quantity: 5,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-03-thumbnail.jpg`,
            name: 'pro-03-thumbnail.jpg',
            originalname: '젤다의 전설 지혜의 투영.jpg',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-03-detail.jpg`,
            name: 'pro-03-detail.jpg',
            originalname: '젤다의 전설 지혜의 투영.jpg',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '24.09.26',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'NINTENDO01', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 5,
          // 제품상태
          condition: '미사용 중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '전체이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 1,
          // 원가
          originalPrice: 64800,
          // 언어,원산지
          language: '음성-일본어,한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        // 상품가격
        price: 50000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '포켓몬스터 렛츠고 피카츄',
        // 재고수량
        quantity: 10,
        // 판매된 수량
        buyQuantity: 2,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-04-thumbnail.jpg`,
            name: 'pro-04-thumbnail.jpg',
            originalname: '포켓몬스터 렛츠고 피카츄.jpg',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-04-detail.jpg`,
            name: 'pro-04-detail.jpg',
            originalname: '포켓몬스터 렛츠고 피카츄.jpg',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '18.11.16',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'NINTENDO01', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 5,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '전체이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 1,
          // 원가
          originalPrice: 64800,
          // 언어,원산지
          language: '음성-영어,한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        // 상품가격
        price: 28000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '소닉 섀도우 제너레이션즈',
        // 재고수량
        quantity: 4,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-05-thumbnail.jpg`,
            name: 'pro-05-thumbnail.jpg',
            originalname: '소닉 섀도우 제너레이션즈.jpg',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-05-detail.jpg`,
            name: 'pro-05-detail.jpg',
            originalname: '소닉 섀도우 제너레이션즈.jpg',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '24.10.24',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION05', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 5,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '전체이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 48900,
          // 언어,원산지
          language: '음성-영어,일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        // 상품가격
        price: 58000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '용과같이 8 외전',
        // 재고수량
        quantity: 50,
        // 판매된 수량
        buyQuantity: 5,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-06-thumbnail.jpg`,
            name: 'pro-06-thumbnail.jpg',
            originalname: '용과같이 8 외전.jpg',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-06-detail.jpg`,
            name: 'pro-06-detail.jpg',
            originalname: '용과같이 8 외전.jpg',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '25.02.25',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'PLAYSTATION04', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 5,
          // 제품상태
          condition: '새제품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '19세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 4,
          // 원가
          originalPrice: 58000,
          // 언어,원산지
          language: '음성-영어,일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        // 상품가격
        price: 13000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '고스트와이어 도쿄',
        // 재고수량
        quantity: 5,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-07-thumbnail.jpg`,
            name: 'pro-07-thumbnail.jpg',
            originalname: '고스트와이어 도쿄.jpg',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-07-detail.jpg`,
            name: 'pro-07-detail.jpg',
            originalname: '고스트와이어 도쿄.jpg',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '22.03.25',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION05', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 5,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '15세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 65000,
          // 언어,원산지
          language: '음성-영어,일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        // 상품가격
        price: 249000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '닌텐도 스위치 OLED 본체 스칼렛 바이올렛 에디션',
        // 재고수량
        quantity: 8,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-08-thumbnail.jpg`,
            name: 'pro-08-thumbnail.jpg',
            originalname: '닌텐도 스위치 OLED 본체 스칼렛 바이올렛 에디션.jpg',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-08-detail.jpg`,
            name: 'pro-08-detail.jpg',
            originalname: '닌텐도 스위치 OLED 본체 스칼렛 바이올렛 에디션.jpg',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '22.11.04',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['HARDWARE', 'NINTENDO01', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 5,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 1,
          // 원가
          originalPrice: 330000,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        // 상품가격
        price: 345000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '신형 본체 2117A (500GB) / 화이트 / PS4 히트번들 패키지',
        // 재고수량
        quantity: 3,
        // 판매된 수량
        buyQuantity: 0,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-09-thumbnail.jpg`,
            name: 'pro-09-thumbnail.jpg',
            originalname: '신형 본체 2117A (500GB) / 화이트 / PS4 히트번들 패키지.jpg',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-09-detail.jpg`,
            name: 'pro-09-detail.jpg',
            originalname: '신형 본체 2117A (500GB) / 화이트 / PS4 히트번들 패키지.jpg',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '17.10.26',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['HARDWARE', 'PLAYSTATION04', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 5,
          // 제품상태
          condition: '신제품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 4,
          // 원가
          originalPrice: 330000,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
    ],

    // 주문
    order: [
      {
        _id: await nextSeq('order'),
        user_id: 2,
        state: 'OS020',
        products: [
          {
            _id: 2,
            state: 'OS020',
            name: '젤다의 전설 야생의 숨결',
            image: {
              path: `files/${clientId}/pro-02-thumbnail.jpg`,
              name: 'pro-02-thumbnail.jpg',
              originalname: '젤다의 전설 야생의 숨결.jpg',
            },
            quantity: 1,
            price: 84800,
            review_id: 0,
          },
        ],
        cost: {
          products: 84800,
          shippingFees: 4000,
          discount: {
            products: 0,
            shippingFees: 4000,
          },
          total: 84800,
        },
        address: {
          name: '회사',
          value: '서울시 강남구 신사동 234',
        },
        createdAt: getTime(-6, -60 * 60 * 3),
        updatedAt: getTime(-6, -60 * 60 * 3),
      },
    ],

    // 후기
    review: [],

    // 장바구니
    cart: [
      {
        _id: await nextSeq('cart'),
        user_id: 4,
        product_id: 1,
        quantity: 2,
        createdAt: getTime(-7, -60 * 30),
        updatedAt: getTime(-7, -60 * 30),
      },
      {
        _id: await nextSeq('cart'),
        user_id: 4,
        product_id: 2,
        quantity: 1,
        createdAt: getTime(-4, -60 * 30),
        updatedAt: getTime(-3, -60 * 60 * 12),
      },
      {
        _id: await nextSeq('cart'),
        user_id: 2,
        product_id: 3,
        quantity: 2,
        createdAt: getTime(-3, -60 * 60 * 4),
        updatedAt: getTime(-3, -60 * 60 * 4),
      },
      {
        _id: await nextSeq('cart'),
        user_id: 2,
        product_id: 4,
        quantity: 3,
        createdAt: getTime(-2, -60 * 60 * 12),
        updatedAt: getTime(-1, -60 * 60 * 20),
      },
    ],

    // 즐겨찾기/북마크
    bookmark: [],

    // QnA, 공지사항 등의 게시판
    post: [
      {
        _id: await nextSeq('post'),
        type: 'community',
        views: 23,
        user: {
          _id: 2,
          name: '네오',
          image: `files/${clientId}/user-neo.png`,
        },
        title: '회원 가입했어요.',
        content: '잘 부탁드려요.',
        createdAt: getTime(-1, -60 * 60 * 14),
        updatedAt: getTime(-1, -60 * 60 * 2),
      },
    ],

    // 코드
    code: [
      {
        _id: 'productCategory',
        title: '상품 카테고리',
        codes: [
          {
            sort: 1,
            code: 'NINTENDONDS',
            value: '닌텐도 NDS',
            depth: 1,
          },
          {
            sort: 1,
            code: 'NINTENDO01',
            value: '닌텐도 스위치 1',
            depth: 1,
          },
          {
            sort: 1,
            code: 'NINTENDO02',
            value: '닌텐도 스위치 2',
            depth: 1,
          },
          {
            sort: 1,
            code: 'PLAYSTATION05',
            value: '플레이스테이션 5',
            depth: 1,
          },
          {
            sort: 1,
            code: 'PLAYSTATION04',
            value: '플레이스테이션 4',
            depth: 1,
          },
          {
            sort: 2,
            code: 'HARDWARE',
            value: '하드웨어',
            depth: 2,
          },
          {
            sort: 2,
            code: 'GAME',
            value: '게임',
            depth: 2,
          },
          {
            sort: 3,
            code: 'USED',
            value: '중고',
            depth: 3,
          },
          {
            sort: 3,
            code: 'NEW',
            value: '새제품',
            depth: 3,
          },
        ],
      },
      {
        _id: 'orderState',
        title: '주문 상태',
        codes: [
          {
            sort: 1,
            code: 'OS010',
            value: '주문 완료',
          },
          {
            sort: 2,
            code: 'OS020',
            value: '결제 완료',
          },
          {
            sort: 3,
            code: 'OS030',
            value: '배송 준비중',
          },
          {
            sort: 4,
            code: 'OS035',
            value: '배송중',
          },
          {
            sort: 5,
            code: 'OS040',
            value: '배송 완료',
          },
          {
            sort: 6,
            code: 'OS110',
            value: '반품 요청',
          },
          {
            sort: 7,
            code: 'OS120',
            value: '반품 처리중',
          },
          {
            sort: 8,
            code: 'OS130',
            value: '반품 완료',
          },
          {
            sort: 9,
            code: 'OS210',
            value: '교환 요청',
          },
          {
            sort: 10,
            code: 'OS220',
            value: '교환 처리중',
          },
          {
            sort: 11,
            code: 'OS230',
            value: '교환 완료',
          },
          {
            sort: 12,
            code: 'OS310',
            value: '환불 요청',
          },
          {
            sort: 13,
            code: 'OS320',
            value: '환불 처리중',
          },
          {
            sort: 14,
            code: 'OS330',
            value: '환불 완료',
          },
        ],
      },
      {
        _id: 'membershipClass',
        title: '회원 등급',
        codes: [
          {
            sort: 1,
            code: 'MC01',
            value: '일반',
            discountRate: 0, // 할인율
          },
          {
            sort: 2,
            code: 'MC02',
            value: '단골',
            discountRate: 5,
          },
        ],
      },
    ],

    // 설정
    config: [
      {
        _id: 'shippingFees',
        title: '배송비',
        value: 4000,
      },
      {
        _id: 'freeShippingFees',
        title: '배송비 무료 금액',
        value: 50000,
      },
    ],
  };
};
