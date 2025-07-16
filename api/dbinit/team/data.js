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
          purchases: 0,
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
        type: 'seller',
        loginType: 'email',
        image: `files/${clientId}/user-neo.png`,
        createdAt: getTime(-50),
        updatedAt: getTime(-30, -60 * 60 * 3),
        extra: {
          purchases: 2,
          nickname: '셀러네오',
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
          purchases: 5,
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
          purchases: 20,
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
        seller_id: 2,
        // 상품가격
        price: 310000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '포켓몬스터 소울실버',
        // 재고수량
        quantity: 8,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-01-thumbnail.webp`,
            name: 'pro-01-thumbnail.jpg',
            originalname: '포켓몬스터 소울실버.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-01-detail.webp`,
            name: 'pro-01-detail.webp',
            originalname: '포켓몬스터 소울실버.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2010-02-02',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'NINTENDONDS', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'Nintendo NDS',
          // 버전
          platformVersion: null,
          // 원가
          originalPrice: 49000,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 12000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '뉴 슈퍼 마리오브라더스',
        // 재고수량
        quantity: 8,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-02-thumbnail.webp`,
            name: 'pro-02-thumbnail.jpg',
            originalname: '뉴 슈퍼 마리오브라더스.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-02-detail.webp`,
            name: 'pro-02-detail.webp',
            originalname: '뉴 슈퍼 마리오브라더스.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2007-03-08',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'NINTENDONDS', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'Nintendo NDS',
          // 버전
          platformVersion: null,
          // 원가
          originalPrice: 49800,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 15000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '마리오&루이지 RPG 시간의파트너',
        // 재고수량
        quantity: 8,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-03-thumbnail.webp`,
            name: 'pro-03-thumbnail.jpg',
            originalname: '마리오&루이지 RPG 시간의파트너.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-03-detail.webp`,
            name: 'pro-03-detail.webp',
            originalname: '마리오&루이지 RPG 시간의파트너.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2010-07-12',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'NINTENDONDS', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'Nintendo NDS',
          // 버전
          platformVersion: null,
          // 원가
          originalPrice: 49800,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 75000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '포켓몬스터 블랙 2',
        // 재고수량
        quantity: 5,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-04-thumbnail.webp`,
            name: 'pro-04-thumbnail.jpg',
            originalname: '포켓몬스터 블랙 2.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-04-detail.webp`,
            name: 'pro-04-detail.webp',
            originalname: '포켓몬스터 블랙 2.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2012-11-08',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'NINTENDONDS', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'Nintendo NDS',
          // 버전
          platformVersion: null,
          // 원가
          originalPrice: 39000,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 115000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '포켓몬스터 화이트',
        // 재고수량
        quantity: 5,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-05-thumbnail.webp`,
            name: 'pro-05-thumbnail.jpg',
            originalname: '포켓몬스터 화이트.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-05-detail.webp`,
            name: 'pro-05-detail.webp',
            originalname: '포켓몬스터 화이트.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2011-04-21',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'NINTENDONDS', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'Nintendo NDS',
          // 버전
          platformVersion: null,
          // 원가
          originalPrice: 39000,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 22000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '소닉 러시 어드밴처',
        // 재고수량
        quantity: 5,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-06-thumbnail.webp`,
            name: 'pro-06-thumbnail.jpg',
            originalname: '소닉 러시 어드밴처.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-06-detail.webp`,
            name: 'pro-06-detail.webp',
            originalname: '소닉 러시 어드밴처.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2009-09-17',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'NINTENDONDS', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'Nintendo NDS',
          // 버전
          platformVersion: null,
          // 원가
          originalPrice: 39000,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 120000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '리듬세상',
        // 재고수량
        quantity: 5,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-07-thumbnail.webp`,
            name: 'pro-07-thumbnail.jpg',
            originalname: '리듬세상.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-07-detail.webp`,
            name: 'pro-07-detail.webp',
            originalname: '리듬세상.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2009-09-24',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'NINTENDONDS', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'Nintendo NDS',
          // 버전
          platformVersion: null,
          // 원가
          originalPrice: 39000,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 18500,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '마리오와 소닉 베이징 올림픽',
        // 재고수량
        quantity: 5,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-08-thumbnail.webp`,
            name: 'pro-08-thumbnail.jpg',
            originalname: '마리오와 소닉 베이징 올림픽.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-08-detail.webp`,
            name: 'pro-08-detail.webp',
            originalname: '마리오와 소닉 베이징 올림픽.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2009-09-24',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'NINTENDONDS', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'Nintendo NDS',
          // 버전
          platformVersion: null,
          // 원가
          originalPrice: 39000,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 16500,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '밴쿠버 2010 동계올림픽',
        // 재고수량
        quantity: 5,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-09-thumbnail.webp`,
            name: 'pro-09-thumbnail.jpg',
            originalname: '밴쿠버 2010 동계올림픽.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-09-detail.webp`,
            name: 'pro-09-detail.webp',
            originalname: '밴쿠버 2010 동계올림픽.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2009-09-24',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'NINTENDONDS', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'Nintendo NDS',
          // 버전
          platformVersion: null,
          // 원가
          originalPrice: 39000,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 239000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '포켓몬스터Pt 기라티나',
        // 재고수량
        quantity: 5,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-10-thumbnail.webp`,
            name: 'pro-10-thumbnail.jpg',
            originalname: '포켓몬스터Pt 기라티나.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-10-detail.webp`,
            name: 'pro-10-detail.webp',
            originalname: '포켓몬스터Pt 기라티나.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2009-07-02',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'NINTENDONDS', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'Nintendo NDS',
          // 버전
          platformVersion: null,
          // 원가
          originalPrice: 39000,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 109000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '놀러오세요 동물의 숲',
        // 재고수량
        quantity: 5,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-11-thumbnail.webp`,
            name: 'pro-11-thumbnail.jpg',
            originalname: '놀러오세요 동물의 숲.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-11-detail.webp`,
            name: 'pro-11-detail.webp',
            originalname: '놀러오세요 동물의 숲.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2007-12-06',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'NINTENDONDS', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'Nintendo NDS',
          // 버전
          platformVersion: null,
          // 원가
          originalPrice: 39000,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 225000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '포켓몬스터DP 디아루가',
        // 재고수량
        quantity: 5,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-12-thumbnail.webp`,
            name: 'pro-12-thumbnail.jpg',
            originalname: '포켓몬스터DP 디아루가.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-12-detail.webp`,
            name: 'pro-12-detail.webp',
            originalname: '포켓몬스터DP 디아루가.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2008-02-14',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'NINTENDONDS', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'Nintendo NDS',
          // 버전
          platformVersion: null,
          // 원가
          originalPrice: 39000,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 215000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '닌텐도 DSi LL',
        // 재고수량
        quantity: 5,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-13-thumbnail.webp`,
            name: 'pro-13-thumbnail.jpg',
            originalname: '닌텐도 DSi.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-13-detail.webp`,
            name: 'pro-13-detail.webp',
            originalname: '닌텐도 DSi.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2009-11-21',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['HARDWARE', 'NINTENDONDS', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'Nintendo NDS',
          // 버전
          platformVersion: null,
          // 원가
          originalPrice: 198000,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 95000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '닌텐도 DSi',
        // 재고수량
        quantity: 5,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-14-thumbnail.webp`,
            name: 'pro-14-thumbnail.jpg',
            originalname: '닌텐도 DSi.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-14-detail.webp`,
            name: 'pro-14-detail.webp',
            originalname: '닌텐도 DSi.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2010-04-15',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['HARDWARE', 'NINTENDONDS', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'Nintendo NDS',
          // 버전
          platformVersion: null,
          // 원가
          originalPrice: 198000,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 18000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '스낵월드 트레져러스',
        // 재고수량
        quantity: 5,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-15-thumbnail.webp`,
            name: 'pro-15-thumbnail.jpg',
            originalname: '스낵월드 트레져러스.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-15-detail.webp`,
            name: 'pro-15-detail.webp',
            originalname: '스낵월드 트레져러스.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2019-04-18',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'NINTENDO01', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '15세 이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 1,
          // 원가
          originalPrice: 59000,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 14000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '피트니스 복싱',
        // 재고수량
        quantity: 5,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-16-thumbnail.webp`,
            name: 'pro-16-thumbnail.jpg',
            originalname: '피트니스 복싱.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-16-detail.webp`,
            name: 'pro-16-detail.webp',
            originalname: '피트니스 복싱.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2018-12-20',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'NINTENDO01', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
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
          originalPrice: 54000,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 78000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '칼리굴라 오버도즈',
        // 재고수량
        quantity: 5,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-17-thumbnail.webp`,
            name: 'pro-17-thumbnail.jpg',
            originalname: '칼리굴라 오버도즈.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-17-detail.webp`,
            name: 'pro-17-detail.webp',
            originalname: '칼리굴라 오버도즈.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2018-10-31',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'NINTENDO01', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '15세 이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 1,
          // 원가
          originalPrice: 54000,
          // 언어,원산지
          language: '음성-일본어,영어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 36000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '열혈경파 쿠니오군 외전 리버시티 걸즈',
        // 재고수량
        quantity: 5,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-18-thumbnail.webp`,
            name: 'pro-18-thumbnail.jpg',
            originalname: '열혈경파 쿠니오군 외전 리버시티 걸즈.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-18-detail.webp`,
            name: 'pro-18-detail.webp',
            originalname: '열혈경파 쿠니오군 외전 리버시티 걸즈.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2019-07-26',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'NINTENDO01', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '12세 이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 1,
          // 원가
          originalPrice: 49000,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 62000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '건볼트 스트라이커팩',
        // 재고수량
        quantity: 5,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-19-thumbnail.webp`,
            name: 'pro-19-thumbnail.jpg',
            originalname: '건볼트 스트라이커팩.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-19-detail.webp`,
            name: 'pro-19-detail.webp',
            originalname: '건볼트 스트라이커팩.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2018-10-04',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'NINTENDO01', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '미사용 중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 1,
          // 원가
          originalPrice: 49000,
          // 언어,원산지
          language: '음성-영어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 34000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '사이쿄 컬렉션 Vol.1',
        // 재고수량
        quantity: 5,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-20-thumbnail.webp`,
            name: 'pro-20-thumbnail.jpg',
            originalname: '사이쿄 컬렉션 Vol.1.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-20-detail.webp`,
            name: 'pro-20-detail.webp',
            originalname: '사이쿄 컬렉션 Vol.1.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2018-09-21',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'NINTENDO01', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '12세 이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 1,
          // 원가
          originalPrice: 49000,
          // 언어,원산지
          language: '음성-영어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 26000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '건볼트 크로니클 루미너스 어벤저 iX',
        // 재고수량
        quantity: 5,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-21-thumbnail.webp`,
            name: 'pro-21-thumbnail.jpg',
            originalname: '건볼트 크로니클 루미너스 어벤저 iX.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-21-detail.webp`,
            name: 'pro-21-detail.webp',
            originalname: '건볼트 크로니클 루미너스 어벤저 iX.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2019-09-24',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'NINTENDO01', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '12세 이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 1,
          // 원가
          originalPrice: 49000,
          // 언어,원산지
          language: '음성-일본어,영어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 12000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '피파20',
        // 재고수량
        quantity: 4,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-22-thumbnail.webp`,
            name: 'pro-22-thumbnail.jpg',
            originalname: '피파20.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-22-detail.webp`,
            name: 'pro-22-detail.webp',
            originalname: '피파20.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2019-09-27',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'NINTENDO01', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '12세 이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 1,
          // 원가
          originalPrice: 49000,
          // 언어,원산지
          language: '음성-영어 / 자막-한국어,일본어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 37000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '베리드 스타즈',
        // 재고수량
        quantity: 4,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-23-thumbnail.webp`,
            name: 'pro-23-thumbnail.jpg',
            originalname: '베리드 스타즈.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-23-detail.webp`,
            name: 'pro-23-detail.webp',
            originalname: '베리드 스타즈.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2020-07-30',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'NINTENDO01', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
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
          originalPrice: 49000,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 29000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '마리오 골프 슈퍼 러시',
        // 재고수량
        quantity: 6,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-24-thumbnail.webp`,
            name: 'pro-24-thumbnail.jpg',
            originalname: '마리오 골프 슈퍼 러시.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-24-detail.webp`,
            name: 'pro-24-detail.webp',
            originalname: '마리오 골프 슈퍼 러시.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2021-06-25',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'NINTENDO01', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
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
          originalPrice: 49000,
          // 언어,원산지
          language: '자막-한글 외 9개국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 26000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '뿌이뿌이 모이카 모두 함께 모루카 파티',
        // 재고수량
        quantity: 6,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-25-thumbnail.webp`,
            name: 'pro-25-thumbnail.jpg',
            originalname: '뿌이뿌이 모이카 모두 함께 모루카 파티.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-25-detail.webp`,
            name: 'pro-25-detail.webp',
            originalname: '뿌이뿌이 모이카 모두 함께 모루카 파티.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2021-06-25',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'NINTENDO01', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
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
          originalPrice: 49800,
          // 언어,원산지
          language: '음성-일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 39500,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '네모바지 스폰지밥',
        // 재고수량
        quantity: 6,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-26-thumbnail.webp`,
            name: 'pro-26-thumbnail.jpg',
            originalname: '네모바지 스폰지밥.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-26-detail.webp`,
            name: 'pro-26-detail.webp',
            originalname: '네모바지 스폰지밥.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2020-07-30',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'NINTENDO01', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
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
          originalPrice: 49800,
          // 언어,원산지
          language: '음성-영어,일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 47000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '젤다의 전설 브레스 오브 더 와일드',
        // 재고수량
        quantity: 6,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-27-thumbnail.webp`,
            name: 'pro-27-thumbnail.jpg',
            originalname: '젤다의 전설 브레스 오브 더 와일드.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-27-detail.webp`,
            name: 'pro-27-detail.webp',
            originalname: '젤다의 전설 브레스 오브 더 와일드.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2017-12-01',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'NINTENDO01', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
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
          originalPrice: 74800,
          // 언어,원산지
          language: '음성-영어,일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 41000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '마리오카트 8 디럭스',
        // 재고수량
        quantity: 6,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-28-thumbnail.webp`,
            name: 'pro-28-thumbnail.jpg',
            originalname: '마리오카트 8 디럭스.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-28-detail.webp`,
            name: 'pro-28-detail.webp',
            originalname: '마리오카트 8 디럭스.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2017-12-01',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'NINTENDO01', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
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
          originalPrice: 64000,
          // 언어,원산지
          language: '음성-영어,일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 169000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '닌텐도 스위치 본체 그레이',
        // 재고수량
        quantity: 10,
        // 판매된 수량
        buyQuantity: 0,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-29-thumbnail.webp`,
            name: 'pro-29-thumbnail.jpg',
            originalname: '닌텐도 스위치 본체 그레이.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-29-detail.webp`,
            name: 'pro-29-detail.webp',
            originalname: '닌텐도 스위치 본체 그레이.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2017-03-03',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['HARDWARE', 'NINTENDO01', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '미사용 중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 1,
          // 원가
          originalPrice: 360000,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 169000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '닌텐도 스위치 본체 네온',
        // 재고수량
        quantity: 8,
        // 판매된 수량
        buyQuantity: 0,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-30-thumbnail.webp`,
            name: 'pro-30-thumbnail.jpg',
            originalname: '닌텐도 스위치 본체 네온.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-30-detail.webp`,
            name: 'pro-30-detail.webp',
            originalname: '닌텐도 스위치 본체 네온.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2017-03-03',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['HARDWARE', 'NINTENDO01', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '미사용 중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 1,
          // 원가
          originalPrice: 360000,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 215000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '스위치 본체 모여봐요 동물의 숲 에디션',
        // 재고수량
        quantity: 8,
        // 판매된 수량
        buyQuantity: 0,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-31-thumbnail.webp`,
            name: 'pro-31-thumbnail.jpg',
            originalname: '스위치 본체 모여봐요 동물의 숲 에디션.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-31-detail.webp`,
            name: 'pro-31-detail.webp',
            originalname: '스위치 본체 모여봐요 동물의 숲 에디션.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2020-03-20',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['HARDWARE', 'NINTENDO01', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '미사용 중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 1,
          // 원가
          originalPrice: 360000,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 39000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: 'NBA 2K18',
        // 재고수량
        quantity: 10,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-32-thumbnail.webp`,
            name: 'pro-32-thumbnail.jpg',
            originalname: 'NBA 2K18.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-32-detail.webp`,
            name: 'pro-32-detail.webp',
            originalname: 'NBA 2K18.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2017-12-13',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'NINTENDO01', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 1,
          // 원가
          originalPrice: 64800,
          // 언어,원산지
          language: '음성-영어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 67000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '엘더스크롤5 스카이림',
        // 재고수량
        quantity: 10,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-33-thumbnail.webp`,
            name: 'pro-33-thumbnail.jpg',
            originalname: '엘더스크롤5 스카이림.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-33-detail.webp`,
            name: 'pro-33-detail.webp',
            originalname: '엘더스크롤5 스카이림.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2017-12-01',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'NINTENDO01', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '청소년 이용불가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 1,
          // 원가
          originalPrice: 69800,
          // 언어,원산지
          language: '음성-영어 / 자막-영어,중국어,프랑스어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 62000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '리디&수르의 아틀리에',
        // 재고수량
        quantity: 10,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-34-thumbnail.webp`,
            name: 'pro-34-thumbnail.jpg',
            originalname: '리디&수르의 아틀리에.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-34-detail.webp`,
            name: 'pro-34-detail.webp',
            originalname: '리디&수르의 아틀리에.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2018-03-29',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'NINTENDO01', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '12세 이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 1,
          // 원가
          originalPrice: 64800,
          // 언어,원산지
          language: '음성-일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 53000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '블레이블루 크로스 태그 배틀',
        // 재고수량
        quantity: 10,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-35-thumbnail.webp`,
            name: 'pro-35-thumbnail.jpg',
            originalname: '블레이블루 크로스 태그 배틀.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-35-detail.webp`,
            name: 'pro-35-detail.webp',
            originalname: '블레이블루 크로스 태그 배틀.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2018-05-31',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'NINTENDO01', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '12세 이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 1,
          // 원가
          originalPrice: 54000,
          // 언어,원산지
          language: '음성-일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 137000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '월드 오브 파이널 판타지 맥시마',
        // 재고수량
        quantity: 10,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-36-thumbnail.webp`,
            name: 'pro-36-thumbnail.jpg',
            originalname: '월드 오브 파이널 판타지 맥시마.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-36-detail.webp`,
            name: 'pro-36-detail.webp',
            originalname: '월드 오브 파이널 판타지 맥시마.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2019-02-28',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'NINTENDO01', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '18세 이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 1,
          // 원가
          originalPrice: 59800,
          // 언어,원산지
          language: '음성-일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 48000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '테니스 월드 투어',
        // 재고수량
        quantity: 10,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-37-thumbnail.webp`,
            name: 'pro-37-thumbnail.jpg',
            originalname: '테니스 월드 투어.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-37-detail.webp`,
            name: 'pro-37-detail.webp',
            originalname: '테니스 월드 투어.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2018-06-12',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'NINTENDO01', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 1,
          // 원가
          originalPrice: 49900,
          // 언어,원산지
          language: '음성-영어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 53500,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '멋진 이 세계 Final Remix',
        // 재고수량
        quantity: 10,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-38-thumbnail.webp`,
            name: 'pro-38-thumbnail.jpg',
            originalname: '멋진 이 세계 Final Remix.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-38-detail.webp`,
            name: 'pro-38-detail.webp',
            originalname: '멋진 이 세계 Final Remix.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2018-10-12',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'NINTENDO01', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 1,
          // 원가
          originalPrice: 54900,
          // 언어,원산지
          language: '음성-영어 / 자막-영어,중국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 114000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '테트리스 99',
        // 재고수량
        quantity: 10,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-39-thumbnail.webp`,
            name: 'pro-39-thumbnail.jpg',
            originalname: '테트리스 99.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-39-detail.webp`,
            name: 'pro-39-detail.webp',
            originalname: '테트리스 99.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2019-08-08',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'NINTENDO01', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 1,
          // 원가
          originalPrice: 29900,
          // 언어,원산지
          language: '음성-없음 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 59000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '포켓몬스터 소드',
        // 재고수량
        quantity: 10,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-40-thumbnail.webp`,
            name: 'pro-40-thumbnail.jpg',
            originalname: '포켓몬스터 소드.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-40-detail.webp`,
            name: 'pro-40-detail.webp',
            originalname: '포켓몬스터 소드.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2019-11-15',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'NINTENDO01', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 1,
          // 원가
          originalPrice: 64000,
          // 언어,원산지
          language: '음성-없음 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 59000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '포켓몬스터 실드',
        // 재고수량
        quantity: 10,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-41-thumbnail.webp`,
            name: 'pro-41-thumbnail.jpg',
            originalname: '포켓몬스터 실드.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-41-detail.webp`,
            name: 'pro-41-detail.webp',
            originalname: '포켓몬스터 실드.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2019-11-15',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'NINTENDO01', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 1,
          // 원가
          originalPrice: 64000,
          // 언어,원산지
          language: '음성-없음 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 57000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '마리오와 소닉 2020도쿄올림픽',
        // 재고수량
        quantity: 10,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-42-thumbnail.webp`,
            name: 'pro-42-thumbnail.jpg',
            originalname: '마리오와 소닉 2020도쿄올림픽.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-42-detail.webp`,
            name: 'pro-42-detail.webp',
            originalname: '마리오와 소닉 2020도쿄올림픽.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2019-07-24',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'NINTENDO01', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 1,
          // 원가
          originalPrice: 59900,
          // 언어,원산지
          language: '음성-없음 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 43000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '제물과 눈의 세츠나',
        // 재고수량
        quantity: 10,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-42-thumbnail.webp`,
            name: 'pro-42-thumbnail.jpg',
            originalname: '제물과 눈의 세츠나.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-42-detail.webp`,
            name: 'pro-42-detail.webp',
            originalname: '제물과 눈의 세츠나.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2020-10-22',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'NINTENDO01', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '12세 이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 1,
          // 원가
          originalPrice: 44900,
          // 언어,원산지
          language: '음성-없음 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 385000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '닌텐도 스위치 마리오 레드블루 한정판 세트',
        // 재고수량
        quantity: 10,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-44-thumbnail.webp`,
            name: 'pro-44-thumbnail.jpg',
            originalname: '닌텐도 스위치 마리오 레드블루 한정판 세트.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-44-detail.webp`,
            name: 'pro-44-detail.webp',
            originalname: '닌텐도 스위치 마리오 레드블루 한정판 세트.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2021-02-12',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['HARDWARE', 'NINTENDO01', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 1,
          // 원가
          originalPrice: 360000,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 385000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '닌텐도 스위치 OLED',
        // 재고수량
        quantity: 20,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-45-thumbnail.webp`,
            name: 'pro-45-thumbnail.jpg',
            originalname: '닌텐도 스위치 OLED.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-45-detail.webp`,
            name: 'pro-45-detail.webp',
            originalname: '닌텐도 스위치 OLED.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2021-10-08',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['HARDWARE', 'NINTENDO01', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 1,
          // 원가
          originalPrice: 360000,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 249000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '닌텐도 스위치 라이트',
        // 재고수량
        quantity: 20,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-46-thumbnail.webp`,
            name: 'pro-46-thumbnail.jpg',
            originalname: '닌텐도 스위치 라이트.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-46-detail.webp`,
            name: 'pro-46-detail.webp',
            originalname: '닌텐도 스위치 라이트.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2019-09-20',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['HARDWARE', 'NINTENDO01', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 1,
          // 원가
          originalPrice: 249000,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },

      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 74800,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '마리오파티 잼버리 TV',
        // 재고수량
        quantity: 20,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-47-thumbnail.webp`,
            name: 'pro-47-thumbnail.jpg',
            originalname: '마리오파티 잼버리 TV.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-47-detail.webp`,
            name: 'pro-47-detail.webp',
            originalname: '마리오파티 잼버리 TV.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2025-07-24',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'NINTENDO02', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 2,
          // 원가
          originalPrice: 84800,
          // 언어,원산지
          language: '음성-없음 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 88000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '동키콩 바난자',
        // 재고수량
        quantity: 20,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-48-thumbnail.webp`,
            name: 'pro-48-thumbnail.jpg',
            originalname: '동키콩 바난자.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-48-detail.webp`,
            name: 'pro-48-detail.webp',
            originalname: '동키콩 바난자.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2025-07-17',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'NINTENDO02', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 2,
          // 원가
          originalPrice: 88000,
          // 언어,원산지
          language: '음성-없음 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 49800,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '다마고치 원더 샵',
        // 재고수량
        quantity: 20,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-49-thumbnail.webp`,
            name: 'pro-49-thumbnail.jpg',
            originalname: '다마고치 원더 샵.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-49-detail.webp`,
            name: 'pro-49-detail.webp',
            originalname: '다마고치 원더 샵.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2025-06-26',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'NINTENDO02', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 2,
          // 원가
          originalPrice: 59800,
          // 언어,원산지
          language: '음성-없음 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 64800,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '스트리트 파이터 6 Years 1-2 파이터즈 에디션',
        // 재고수량
        quantity: 20,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-50-thumbnail.webp`,
            name: 'pro-50-thumbnail.jpg',
            originalname: '스트리트 파이터 6 Years 1-2 파이터즈 에디션.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-50-detail.webp`,
            name: 'pro-50-detail.webp',
            originalname: '스트리트 파이터 6 Years 1-2 파이터즈 에디션.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2025-06-05',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'NINTENDO02', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 2,
          // 원가
          originalPrice: 64800,
          // 언어,원산지
          language: '음성-없음 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 68000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '스플릿 픽션',
        // 재고수량
        quantity: 20,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-51-thumbnail.webp`,
            name: 'pro-51-thumbnail.jpg',
            originalname: '스플릿 픽션.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-51-detail.webp`,
            name: 'pro-51-detail.webp',
            originalname: '스플릿 픽션.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2025-06-05',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'NINTENDO02', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 2,
          // 원가
          originalPrice: 68000,
          // 언어,원산지
          language: '음성-없음 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 69800,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '호그와트 레거시',
        // 재고수량
        quantity: 20,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-52-thumbnail.webp`,
            name: 'pro-52-thumbnail.jpg',
            originalname: '호그와트 레거시.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-52-detail.webp`,
            name: 'pro-52-detail.webp',
            originalname: '호그와트 레거시.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2025-06-05',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'NINTENDO02', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '12세 이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 2,
          // 원가
          originalPrice: 69800,
          // 언어,원산지
          language: '음성-영어,일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 84800,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '젤다의전설 왕국의 눈물',
        // 재고수량
        quantity: 20,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-53-thumbnail.webp`,
            name: 'pro-53-thumbnail.jpg',
            originalname: '젤다의전설 왕국의 눈물.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-53-detail.webp`,
            name: 'pro-53-detail.webp',
            originalname: '젤다의전설 왕국의 눈물.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2025-06-05',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'NINTENDO02', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '12세 이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 2,
          // 원가
          originalPrice: 84800,
          // 언어,원산지
          language: '음성-없음 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
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
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-54-thumbnail.webp`,
            name: 'pro-54-thumbnail.jpg',
            originalname: '젤다의 전설 야생의 숨결.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-54-detail.webp`,
            name: 'pro-54-detail.webp',
            originalname: '젤다의 전설 야생의 숨결.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2025-06-05',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'NINTENDO02', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '12세 이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 2,
          // 원가
          originalPrice: 84800,
          // 언어,원산지
          language: '음성-없음 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 98000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '마리오 카트 월드',
        // 재고수량
        quantity: 20,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-55-thumbnail.webp`,
            name: 'pro-55-thumbnail.jpg',
            originalname: '마리오 카트 월드.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-55-detail.webp`,
            name: 'pro-55-detail.webp',
            originalname: '마리오 카트 월드.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2025-06-05',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'NINTENDO02', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 2,
          // 원가
          originalPrice: 98000,
          // 언어,원산지
          language: '음성-없음 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 44800,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '뿌요뿌요 테트리스 2S',
        // 재고수량
        quantity: 20,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-56-thumbnail.webp`,
            name: 'pro-56-thumbnail.jpg',
            originalname: '뿌요뿌요 테트리스 2S.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-56-detail.webp`,
            name: 'pro-56-detail.webp',
            originalname: '뿌요뿌요 테트리스 2S.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2025-06-05',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'NINTENDO02', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 2,
          // 원가
          originalPrice: 44800,
          // 언어,원산지
          language: '음성-일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 49800,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '소닉 섀도우 제너레이션즈',
        // 재고수량
        quantity: 20,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-57-thumbnail.webp`,
            name: 'pro-57-thumbnail.jpg',
            originalname: '소닉 섀도우 제너레이션즈.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-57-detail.webp`,
            name: 'pro-57-detail.webp',
            originalname: '소닉 섀도우 제너레이션즈.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2025-06-05',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'NINTENDO02', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 2,
          // 원가
          originalPrice: 49800,
          // 언어,원산지
          language: '음성-일본어,영어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 89800,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '사이버펑크2077 얼티밋 에디션',
        // 재고수량
        quantity: 20,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-57-thumbnail.webp`,
            name: 'pro-57-thumbnail.jpg',
            originalname: '사이버펑크2077 얼티밋 에디션.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-57-detail.webp`,
            name: 'pro-57-detail.webp',
            originalname: '사이버펑크2077 얼티밋 에디션.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2025-06-05',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'NINTENDO02', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '18세 이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 2,
          // 원가
          originalPrice: 89800,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 316000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: 'SWITCH2 닌텐도 스위치 2 본체',
        // 재고수량
        quantity: 100,
        // 판매된 수량
        buyQuantity: 0,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-59-thumbnail.webp`,
            name: 'pro-59-thumbnail.jpg',
            originalname: 'SWITCH2 닌텐도 스위치 2 본체.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-59-detail.webp`,
            name: 'pro-59-detail.webp',
            originalname: 'SWITCH2 닌텐도 스위치 2 본체.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2025-06-05',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['HARDWARE', 'NINTENDO02', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '18세 이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 2,
          // 원가
          originalPrice: 648000,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 688000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: 'SWITCH2 닌텐도 스위치 2 본체 마리오 카트 월드 세트',
        // 재고수량
        quantity: 100,
        // 판매된 수량
        buyQuantity: 0,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-60-thumbnail.webp`,
            name: 'pro-60-thumbnail.jpg',
            originalname: 'SWITCH2 닌텐도 스위치 2 본체 마리오 카트 월드 세트.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-60-detail.webp`,
            name: 'pro-60-detail.webp',
            originalname: 'SWITCH2 닌텐도 스위치 2 본체 마리오 카트 월드 세트.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2025-06-05',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['HARDWARE', 'NINTENDO02', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'Nintendo Switch',
          // 버전
          platformVersion: 2,
          // 원가
          originalPrice: 688000,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 14500,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '바이오 하자드 RE 2',
        // 재고수량
        quantity: 70,
        // 판매된 수량
        buyQuantity: 60,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-61-thumbnail.webp`,
            name: 'pro-61-thumbnail.jpg',
            originalname: '바이오 하자드 RE 2.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-61-detail.webp`,
            name: 'pro-61-detail.webp',
            originalname: '바이오 하자드 RE 2.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2019-01-25',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'PLAYSTATION04', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '18세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 4,
          // 원가
          originalPrice: 688000,
          // 언어,원산지
          language: '음성-영어,일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 17500,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '어쌔신크리드4 블랙플래그',
        // 재고수량
        quantity: 85,
        // 판매된 수량
        buyQuantity: 82,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-62-thumbnail.webp`,
            name: 'pro-62-thumbnail.jpg',
            originalname: '어쌔신크리드4 블랙플래그.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-62-detail.webp`,
            name: 'pro-62-detail.webp',
            originalname: '어쌔신크리드4 블랙플래그.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2014-01-23',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'PLAYSTATION04', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '18세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 4,
          // 원가
          originalPrice: 62000,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 21500,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '낵 (KNACK)',
        // 재고수량
        quantity: 85,
        // 판매된 수량
        buyQuantity: 82,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-63-thumbnail.webp`,
            name: 'pro-63-thumbnail.jpg',
            originalname: '낵 (KNACK).webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-63-detail.webp`,
            name: 'pro-63-detail.webp',
            originalname: '낵 (KNACK).webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2013-12-17',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'PLAYSTATION04', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 4,
          // 원가
          originalPrice: 59900,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 70500,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '죠죠의 기묘한 모험 아이즈 오브 헤븐',
        // 재고수량
        quantity: 85,
        // 판매된 수량
        buyQuantity: 82,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-64-thumbnail.webp`,
            name: 'pro-64-thumbnail.jpg',
            originalname: '죠죠의 기묘한 모험 아이즈 오브 헤븐.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-64-detail.webp`,
            name: 'pro-64-detail.webp',
            originalname: '죠죠의 기묘한 모험 아이즈 오브 헤븐.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2015-12-17',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'PLAYSTATION04', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 4,
          // 원가
          originalPrice: 62000,
          // 언어,원산지
          language: '음성-일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 19500,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '에일리언네이션 한글판',
        // 재고수량
        quantity: 20,
        // 판매된 수량
        buyQuantity: 5,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-65-thumbnail.webp`,
            name: 'pro-65-thumbnail.jpg',
            originalname: '에일리언네이션 한글판.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-65-detail.webp`,
            name: 'pro-65-detail.webp',
            originalname: '에일리언네이션 한글판.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2015-10-05',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'PLAYSTATION04', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '18세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 4,
          // 원가
          originalPrice: 62000,
          // 언어,원산지
          language: '음성-영어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 31000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '파크라이4 컴플리트에디션',
        // 재고수량
        quantity: 10,
        // 판매된 수량
        buyQuantity: 7,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-66-thumbnail.webp`,
            name: 'pro-66-thumbnail.jpg',
            originalname: '파크라이4 컴플리트에디션.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-66-detail.webp`,
            name: 'pro-66-detail.webp',
            originalname: '파크라이4 컴플리트에디션.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2015-06-18',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION04', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '18세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 4,
          // 원가
          originalPrice: 59900,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 23000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '라이즈 오브 툼레이더 20주년 에디션',
        // 재고수량
        quantity: 20,
        // 판매된 수량
        buyQuantity: 7,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-67-thumbnail.webp`,
            name: 'pro-67-thumbnail.jpg',
            originalname: '라이즈 오브 툼레이더 20주년 에디션.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-67-detail.webp`,
            name: 'pro-67-detail.webp',
            originalname: '라이즈 오브 툼레이더 20주년 에디션.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2016-10-11',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION04', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '18세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 4,
          // 원가
          originalPrice: 64000,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 7500,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '플레이스테이션 VR 월드',
        // 재고수량
        quantity: 20,
        // 판매된 수량
        buyQuantity: 7,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-68-thumbnail.webp`,
            name: 'pro-68-thumbnail.jpg',
            originalname: '플레이스테이션 VR 월드.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-68-detail.webp`,
            name: 'pro-68-detail.webp',
            originalname: '플레이스테이션 VR 월드.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2016-10-12',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION04', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '18세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 4,
          // 원가
          originalPrice: 69800,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 13500,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '드라이브클럽 VR',
        // 재고수량
        quantity: 20,
        // 판매된 수량
        buyQuantity: 7,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-69-thumbnail.webp`,
            name: 'pro-69-thumbnail.jpg',
            originalname: '드라이브클럽 VR.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-69-detail.webp`,
            name: 'pro-69-detail.webp',
            originalname: '드라이브클럽 VR.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2016-10-12',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION04', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 4,
          // 원가
          originalPrice: 69800,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 22000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '용과같이 제로 맹세의 장소',
        // 재고수량
        quantity: 20,
        // 판매된 수량
        buyQuantity: 7,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-70-thumbnail.webp`,
            name: 'pro-70-thumbnail.jpg',
            originalname: '용과같이 제로 맹세의 장소.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-70-detail.webp`,
            name: 'pro-70-detail.webp',
            originalname: '용과같이 제로 맹세의 장소.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2016-11-17',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION04', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '18세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 4,
          // 원가
          originalPrice: 59900,
          // 언어,원산지
          language: '음성-일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 26000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '타이탄폴2',
        // 재고수량
        quantity: 10,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-71-thumbnail.webp`,
            name: 'pro-71-thumbnail.jpg',
            originalname: '타이탄폴2.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-71-detail.webp`,
            name: 'pro-71-detail.webp',
            originalname: '타이탄폴2.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2016-10-28',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION04', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '18세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 4,
          // 원가
          originalPrice: 65000,
          // 언어,원산지
          language: '음성-영어 / 자막-영어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 26000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '배트맨 아캄나이트 고티 GOTY 에디션',
        // 재고수량
        quantity: 10,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-72-thumbnail.webp`,
            name: 'pro-72-thumbnail.jpg',
            originalname: '배트맨 아캄나이트 고티 GOTY 에디션.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-72-detail.webp`,
            name: 'pro-72-detail.webp',
            originalname: '배트맨 아캄나이트 고티 GOTY 에디션.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2016-11-08',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION04', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '18세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 4,
          // 원가
          originalPrice: 52000,
          // 언어,원산지
          language: '음성-영어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 21000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '엑스컴2',
        // 재고수량
        quantity: 10,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-73-thumbnail.webp`,
            name: 'pro-73-thumbnail.jpg',
            originalname: '엑스컴2.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-73-detail.webp`,
            name: 'pro-73-detail.webp',
            originalname: '엑스컴2.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2016-11-08',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION04', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '15세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 4,
          // 원가
          originalPrice: 49800,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 21500,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '도쿄 재너두 eX+',
        // 재고수량
        quantity: 10,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-74-thumbnail.webp`,
            name: 'pro-74-thumbnail.jpg',
            originalname: '도쿄 재너두 eX+.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-74-detail.webp`,
            name: 'pro-74-detail.webp',
            originalname: '도쿄 재너두 eX+.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2017-04-07',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION04', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '12세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 4,
          // 원가
          originalPrice: 69900,
          // 언어,원산지
          language: '음성-일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 169000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '신형 본체 2218B (1TB)',
        // 재고수량
        quantity: 5,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-75-thumbnail.webp`,
            name: 'pro-75-thumbnail.jpg',
            originalname: '신형 본체 2218B (1TB).webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-75-detail.webp`,
            name: 'pro-75-detail.webp',
            originalname: '신형 본체 2218B (1TB).webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2018-07-20',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['HARDWARE', 'PLAYSTATION04', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 4,
          // 원가
          originalPrice: 378000,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 249000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: 'PS4 PRO 킹덤하츠 3 리미티드 에디션 프로 본체 7218 (1TB)',
        // 재고수량
        quantity: 5,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-76-thumbnail.webp`,
            name: 'pro-76-thumbnail.jpg',
            originalname: 'PS4 PRO 킹덤하츠 3 리미티드 에디션 프로 본체 7218 (1TB).webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-76-detail.webp`,
            name: 'pro-76-detail.webp',
            originalname: 'PS4 PRO 킹덤하츠 3 리미티드 에디션 프로 본체 7218 (1TB).webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2019-01-25',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['HARDWARE', 'PLAYSTATION04', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 4,
          // 원가
          originalPrice: 548000,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 189000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '프로 본체 (1TB)',
        // 재고수량
        quantity: 5,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-77-thumbnail.webp`,
            name: 'pro-77-thumbnail.jpg',
            originalname: '프로 본체 (1TB).webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-77-detail.webp`,
            name: 'pro-77-detail.webp',
            originalname: '프로 본체 (1TB).webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2016-11-10',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['HARDWARE', 'PLAYSTATION04', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 4,
          // 원가
          originalPrice: 499000,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 35000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '렘넌트 프롬 디 애쉬',
        // 재고수량
        quantity: 15,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-78-thumbnail.webp`,
            name: 'pro-78-thumbnail.jpg',
            originalname: '렘넌트 프롬 디 애쉬.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-78-detail.webp`,
            name: 'pro-78-detail.webp',
            originalname: '렘넌트 프롬 디 애쉬.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2019-01-06',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION04', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '18세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 4,
          // 원가
          originalPrice: 59900,
          // 언어,원산지
          language: '음성-영어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 36000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '데드 바이 데이라이트',
        // 재고수량
        quantity: 9,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-79-thumbnail.webp`,
            name: 'pro-79-thumbnail.jpg',
            originalname: '데드 바이 데이라이트.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-79-detail.webp`,
            name: 'pro-79-detail.webp',
            originalname: '데드 바이 데이라이트.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2018-02-08',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION04', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '18세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 4,
          // 원가
          originalPrice: 59900,
          // 언어,원산지
          language: '음성-영어 / 자막-영어,한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 35000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '다운타운 열혈이야기 SP',
        // 재고수량
        quantity: 12,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-80-thumbnail.webp`,
            name: 'pro-80-thumbnail.jpg',
            originalname: '다운타운 열혈이야기 SP.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-80-detail.webp`,
            name: 'pro-80-detail.webp',
            originalname: '다운타운 열혈이야기 SP.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2023-10-10',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION04', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '12세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 4,
          // 원가
          originalPrice: 39900,
          // 언어,원산지
          language: '음성-영어,일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 26000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '디비전2 워싱턴 DC 에디션',
        // 재고수량
        quantity: 12,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-81-thumbnail.webp`,
            name: 'pro-81-thumbnail.jpg',
            originalname: '디비전2 워싱턴 DC 에디션.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-81-detail.webp`,
            name: 'pro-81-detail.webp',
            originalname: '디비전2 워싱턴 DC 에디션.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2019-03-15',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION04', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '18세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 4,
          // 원가
          originalPrice: 76000,
          // 언어,원산지
          language: '음성-영어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 58000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '용과같이8 외전',
        // 재고수량
        quantity: 8,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-82-thumbnail.webp`,
            name: 'pro-82-thumbnail.jpg',
            originalname: '용과같이8 외전.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-82-detail.webp`,
            name: 'pro-82-detail.webp',
            originalname: '용과같이8 외전.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2025-02-21',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION04', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '18세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 4,
          // 원가
          originalPrice: 59900,
          // 언어,원산지
          language: '음성-일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 83000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '콜오브 듀티 블랙옵스6',
        // 재고수량
        quantity: 12,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-83-thumbnail.webp`,
            name: 'pro-83-thumbnail.jpg',
            originalname: '콜오브 듀티 블랙옵스6.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-83-detail.webp`,
            name: 'pro-83-detail.webp',
            originalname: '콜오브 듀티 블랙옵스6.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2024-10-25',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION04', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '18세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 4,
          // 원가
          originalPrice: 84500,
          // 언어,원산지
          language: '음성-영어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 79000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '이스 셀세타의 수해 Kai',
        // 재고수량
        quantity: 12,
        // 판매된 수량
        buyQuantity: 1,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-84-thumbnail.webp`,
            name: 'pro-84-thumbnail.jpg',
            originalname: '이스 셀세타의 수해 Kai.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-84-detail.webp`,
            name: 'pro-84-detail.webp',
            originalname: '이스 셀세타의 수해 Kai.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2020-04-23',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION04', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '18세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 4,
          // 원가
          originalPrice: 39800,
          // 언어,원산지
          language: '음성-일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 27000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '렉페스트',
        // 재고수량
        quantity: 20,
        // 판매된 수량
        buyQuantity: 8,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-85-thumbnail.webp`,
            name: 'pro-85-thumbnail.jpg',
            originalname: '렉페스트.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-85-detail.webp`,
            name: 'pro-85-detail.webp',
            originalname: '렉페스트.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2020-01-16',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION04', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '12세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 4,
          // 원가
          originalPrice: 39800,
          // 언어,원산지
          language: '음성-영어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 45000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '원피스 월드 시커 디럭스 에디션',
        // 재고수량
        quantity: 20,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-86-thumbnail.webp`,
            name: 'pro-86-thumbnail.jpg',
            originalname: '원피스 월드 시커 디럭스 에디션.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-86-detail.webp`,
            name: 'pro-86-detail.webp',
            originalname: '원피스 월드 시커 디럭스 에디션.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2019-03-14',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION04', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '12세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 4,
          // 원가
          originalPrice: 64000,
          // 언어,원산지
          language: '음성-일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 65000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '언더나이트 인버스2 시스타 셀레스',
        // 재고수량
        quantity: 20,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-87-thumbnail.webp`,
            name: 'pro-87-thumbnail.jpg',
            originalname: '언더나이트 인버스2 시스타 셀레스.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-87-detail.webp`,
            name: 'pro-87-detail.webp',
            originalname: '언더나이트 인버스2 시스타 셀레스.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2024-01-25',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION04', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '12세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 4,
          // 원가
          originalPrice: 69800,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 62800,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '용과같이8',
        // 재고수량
        quantity: 20,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-88-thumbnail.webp`,
            name: 'pro-88-thumbnail.jpg',
            originalname: '용과같이8.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-88-detail.webp`,
            name: 'pro-88-detail.webp',
            originalname: '용과같이8.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2024-01-26',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION04', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '18세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 4,
          // 원가
          originalPrice: 79900,
          // 언어,원산지
          language: '음성-일본어,영어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 54800,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '어쌔신크리드 미라지',
        // 재고수량
        quantity: 20,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-89-thumbnail.webp`,
            name: 'pro-89-thumbnail.jpg',
            originalname: '어쌔신크리드 미라지.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-89-detail.webp`,
            name: 'pro-89-detail.webp',
            originalname: '어쌔신크리드 미라지.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2023-10-05',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION04', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '18세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 4,
          // 원가
          originalPrice: 54800,
          // 언어,원산지
          language: '음성-영어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 345000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '신형 본체 2117A (500GB) / 화이트',
        // 재고수량
        quantity: 8,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-90-thumbnail.webp`,
            name: 'pro-90-thumbnail.jpg',
            originalname: '신형 본체 2117A (500GB) / 화이트.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-90-detail.webp`,
            name: 'pro-90-detail.webp',
            originalname: '신형 본체 2117A (500GB) / 화이트.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2017-01-19',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['HARDWARE', 'PLAYSTATION04', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '18세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 4,
          // 원가
          originalPrice: 378000,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 33500,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '파이널판타지 16',
        // 재고수량
        quantity: 8,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-91-thumbnail.webp`,
            name: 'pro-91-thumbnail.jpg',
            originalname: '파이널판타지 16.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-91-detail.webp`,
            name: 'pro-91-detail.webp',
            originalname: '파이널판타지 16.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2023-06-22',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'PLAYSTATION05', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '미사용 중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '18세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 79900,
          // 언어,원산지
          language: '음성-영어,일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 30500,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '바이오하자드 RE4',
        // 재고수량
        quantity: 16,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-92-thumbnail.webp`,
            name: 'pro-92-thumbnail.jpg',
            originalname: '바이오하자드 RE4.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-92-detail.webp`,
            name: 'pro-92-detail.webp',
            originalname: '바이오하자드 RE4.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2023-03-23',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'PLAYSTATION05', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '미사용 중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '18세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 72700,
          // 언어,원산지
          language: '음성-영어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 39000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '스타워즈 아웃로',
        // 재고수량
        quantity: 20,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-93-thumbnail.webp`,
            name: 'pro-93-thumbnail.jpg',
            originalname: '스타워즈 아웃로.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-93-detail.webp`,
            name: 'pro-93-detail.webp',
            originalname: '스타워즈 아웃로.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2024-08-30',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'PLAYSTATION05', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '미사용 중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '18세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 79800,
          // 언어,원산지
          language: '음성-영어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 52000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '콜오브듀티 뱅가드',
        // 재고수량
        quantity: 18,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-94-thumbnail.webp`,
            name: 'pro-94-thumbnail.jpg',
            originalname: '콜오브듀티 뱅가드.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-94-detail.webp`,
            name: 'pro-94-detail.webp',
            originalname: '콜오브듀티 뱅가드.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2021-11-05',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'PLAYSTATION05', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '미사용 중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '18세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 84900,
          // 언어,원산지
          language: '음성-영어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 17000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: 'MLB 더 쇼 22',
        // 재고수량
        quantity: 20,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-95-thumbnail.webp`,
            name: 'pro-95-thumbnail.jpg',
            originalname: 'MLB 더 쇼 22.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-95-detail.webp`,
            name: 'pro-95-detail.webp',
            originalname: 'MLB 더 쇼 22.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2022-04-05',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION05', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '미사용 중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '18세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 79800,
          // 언어,원산지
          language: '음성-영어 / 자막-영어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 37000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '택틱스 오우거 리본',
        // 재고수량
        quantity: 80,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-96-thumbnail.webp`,
            name: 'pro-96-thumbnail.jpg',
            originalname: '택틱스 오우거 리본.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-96-detail.webp`,
            name: 'pro-96-detail.webp',
            originalname: '택틱스 오우거 리본.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2022-11-11',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION05', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '미사용 중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '18세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 54000,
          // 언어,원산지
          language: '음성-영어,일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 31500,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '영웅전설 여의궤적2 크림슨',
        // 재고수량
        quantity: 18,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-97-thumbnail.webp`,
            name: 'pro-97-thumbnail.jpg',
            originalname: '영웅전설 여의궤적2 크림슨.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-97-detail.webp`,
            name: 'pro-97-detail.webp',
            originalname: '영웅전설 여의궤적2 크림슨.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2022-10-27',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION05', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '미사용 중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '15세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 54000,
          // 언어,원산지
          language: '음성-일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 22000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '와일드 하츠',
        // 재고수량
        quantity: 10,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-98-thumbnail.webp`,
            name: 'pro-98-thumbnail.jpg',
            originalname: '와일드 하츠.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-98-detail.webp`,
            name: 'pro-98-detail.webp',
            originalname: '와일드 하츠.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2023-02-17',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION05', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '미사용 중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '12세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 83000,
          // 언어,원산지
          language: '음성-영어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 36500,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '스타워즈 제다이 서바이버',
        // 재고수량
        quantity: 7,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-99-thumbnail.webp`,
            name: 'pro-99-thumbnail.jpg',
            originalname: '스타워즈 제다이 서바이버.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-99-detail.webp`,
            name: 'pro-99-detail.webp',
            originalname: '스타워즈 제다이 서바이버.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2023-04-28',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION05', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '미사용 중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '12세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 83000,
          // 언어,원산지
          language: '음성-영어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 34000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '성탑신기 트리니티 트리거',
        // 재고수량
        quantity: 7,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-100-thumbnail.webp`,
            name: 'pro-100-thumbnail.jpg',
            originalname: '성탑신기 트리니티 트리거.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-100-detail.webp`,
            name: 'pro-100-detail.webp',
            originalname: '성탑신기 트리니티 트리거.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2023-01-19',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION05', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '12세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 64800,
          // 언어,원산지
          language: '음성-일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 22500,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: 'NBA 2K24',
        // 재고수량
        quantity: 12,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-101-thumbnail.webp`,
            name: 'pro-101-thumbnail.jpg',
            originalname: 'NBA 2K24.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-101-detail.webp`,
            name: 'pro-101-detail.webp',
            originalname: 'NBA 2K24.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2023-09-08',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION05', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '12세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 79800,
          // 언어,원산지
          language: '음성-영어,일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
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
        quantity: 12,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-102-thumbnail.webp`,
            name: 'pro-102-thumbnail.jpg',
            originalname: '소닉 섀도우 제너레이션즈.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-102-detail.webp`,
            name: 'pro-102-detail.webp',
            originalname: '소닉 섀도우 제너레이션즈.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2024-10-25',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION05', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 49800,
          // 언어,원산지
          language: '음성-영어,일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 33500,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '파이널판타지16',
        // 재고수량
        quantity: 12,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-103-thumbnail.webp`,
            name: 'pro-103-thumbnail.jpg',
            originalname: '파이널판타지16.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-103-detail.webp`,
            name: 'pro-103-detail.webp',
            originalname: '파이널판타지16.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2023-06-22',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION05', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 79800,
          // 언어,원산지
          language: '음성-영어,일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 550000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: 'PS5 프로 콘솔',
        // 재고수량
        quantity: 6,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-104-thumbnail.webp`,
            name: 'pro-104-thumbnail.jpg',
            originalname: 'PS5 프로 콘솔.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-104-detail.webp`,
            name: 'pro-104-detail.webp',
            originalname: 'PS5 프로 콘솔.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2024-11-07',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['HARDWARE', 'PLAYSTATION05', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '미사용 중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 940000,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 495000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: 'PS5본체 1018A / 디스크',
        // 재고수량
        quantity: 10,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-105-thumbnail.webp`,
            name: 'pro-105-thumbnail.jpg',
            originalname: 'PS5본체 1018A / 디스크.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-105-detail.webp`,
            name: 'pro-105-detail.webp',
            originalname: 'PS5본체 1018A / 디스크.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2020-11-19',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['HARDWARE', 'PLAYSTATION05', 'USED'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '미사용 중고',
          // 중고인지, 아닌지
          used: true,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 688000,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 49800,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '사가 프론티어2 리마스터',
        // 재고수량
        quantity: 18,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-106-thumbnail.webp`,
            name: 'pro-106-thumbnail.jpg',
            originalname: '사가 프론티어2 리마스터.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-106-detail.webp`,
            name: 'pro-106-detail.webp',
            originalname: '사가 프론티어2 리마스터.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2025-06-05',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'PLAYSTATION05', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '12세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 49800,
          // 언어,원산지
          language: '음성-영어,일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 59800,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '그림 가디언즈 서번트 오브 더 다크',
        // 재고수량
        quantity: 12,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-107-thumbnail.webp`,
            name: 'pro-107-thumbnail.jpg',
            originalname: '그림 가디언즈 서번트 오브 더 다크.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-107-detail.webp`,
            name: 'pro-107-detail.webp',
            originalname: '그림 가디언즈 서번트 오브 더 다크.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2025-04-24',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'PLAYSTATION05', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '18세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 59800,
          // 언어,원산지
          language: '음성-영어,일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 68000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '아랑전설 시티 오브 더 울브스 스페셜 에디션',
        // 재고수량
        quantity: 7,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-108-thumbnail.webp`,
            name: 'pro-108-thumbnail.jpg',
            originalname: '아랑전설 시티 오브 더 울브스 스페셜 에디션.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-108-detail.webp`,
            name: 'pro-108-detail.webp',
            originalname: '아랑전설 시티 오브 더 울브스 스페셜 에디션.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2025-04-24',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'PLAYSTATION05', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '12세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 69800,
          // 언어,원산지
          language: '음성-영어,일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 48000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '데빌위딘 삿갓',
        // 재고수량
        quantity: 7,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-109-thumbnail.webp`,
            name: 'pro-109-thumbnail.jpg',
            originalname: '데빌위딘 삿갓.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-109-detail.webp`,
            name: 'pro-109-detail.webp',
            originalname: '데빌위딘 삿갓.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2025-04-30',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'PLAYSTATION05', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '12세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 49800,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 59000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '동방 스펠 카니발',
        // 재고수량
        quantity: 11,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-110-thumbnail.webp`,
            name: 'pro-110-thumbnail.jpg',
            originalname: '동방 스펠 카니발.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-110-detail.webp`,
            name: 'pro-110-detail.webp',
            originalname: '동방 스펠 카니발.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2025-04-24',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'PLAYSTATION05', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 69800,
          // 언어,원산지
          language: '음성-일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 78000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: 'MLB 25 더쇼',
        // 재고수량
        quantity: 11,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-111-thumbnail.webp`,
            name: 'pro-111-thumbnail.jpg',
            originalname: 'MLB 25 더쇼.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-111-detail.webp`,
            name: 'pro-111-detail.webp',
            originalname: 'MLB 25 더쇼.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2025-03-18',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'PLAYSTATION05', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 79800,
          // 언어,원산지
          language: '음성-영어 / 자막-영어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 45800,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '슈퍼 테크노스 월드 열혈 아케이드 클래식 컬렉션',
        // 재고수량
        quantity: 11,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-112-thumbnail.webp`,
            name: 'pro-112-thumbnail.jpg',
            originalname: '슈퍼 테크노스 월드 열혈 아케이드 클래식 컬렉션.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-112-detail.webp`,
            name: 'pro-112-detail.webp',
            originalname: '슈퍼 테크노스 월드 열혈 아케이드 클래식 컬렉션.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2025-04-24',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'PLAYSTATION05', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 45800,
          // 언어,원산지
          language: '음성-영어,일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 62000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '유미아의 아틀리에 추억의 연금술사와 창환의 땅',
        // 재고수량
        quantity: 17,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-113-thumbnail.webp`,
            name: 'pro-113-thumbnail.jpg',
            originalname: '유미아의 아틀리에 추억의 연금술사와 창환의 땅.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-113-detail.webp`,
            name: 'pro-113-detail.webp',
            originalname: '유미아의 아틀리에 추억의 연금술사와 창환의 땅.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2025-03-21',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'PLAYSTATION05', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '15세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 79800,
          // 언어,원산지
          language: '음성-영어,일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 68000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '블리치 리버스 오브 소울즈',
        // 재고수량
        quantity: 9,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-113-thumbnail.webp`,
            name: 'pro-113-thumbnail.jpg',
            originalname: '블리치 리버스 오브 소울즈.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-113-detail.webp`,
            name: 'pro-113-detail.webp',
            originalname: '블리치 리버스 오브 소울즈.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2025-03-21',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'PLAYSTATION05', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '15세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 69800,
          // 언어,원산지
          language: '음성-일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 32000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '묶이지 않은 자들을 위한 우주',
        // 재고수량
        quantity: 9,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-115-thumbnail.webp`,
            name: 'pro-115-thumbnail.jpg',
            originalname: '묶이지 않은 자들을 위한 우주.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-115-detail.webp`,
            name: 'pro-115-detail.webp',
            originalname: '묶이지 않은 자들을 위한 우주.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2025-03-17',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'PLAYSTATION05', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '15세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 69800,
          // 언어,원산지
          language: '음성-일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 76800,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: 'WWE 2K25',
        // 재고수량
        quantity: 9,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-116-thumbnail.webp`,
            name: 'pro-116-thumbnail.jpg',
            originalname: 'WWE 2K25.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-116-detail.webp`,
            name: 'pro-116-detail.webp',
            originalname: 'WWE 2K25.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2025-03-21',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'PLAYSTATION05', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '15세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 79800,
          // 언어,원산지
          language: '음성-일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 79800,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '어쌔신크리드 섀도우스 스페셜 에디션',
        // 재고수량
        quantity: 7,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-117-thumbnail.webp`,
            name: 'pro-117-thumbnail.jpg',
            originalname: '어쌔신크리드 섀도우스 스페셜 에디션.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-117-detail.webp`,
            name: 'pro-117-detail.webp',
            originalname: '어쌔신크리드 섀도우스 스페셜 에디션.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2025-03-20',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'PLAYSTATION05', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '18세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 79800,
          // 언어,원산지
          language: '음성-일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 69800,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '신듀얼리티 에코 오브 에이다 디럭스 에디션',
        // 재고수량
        quantity: 7,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-118-thumbnail.webp`,
            name: 'pro-118-thumbnail.jpg',
            originalname: '신듀얼리티 에코 오브 에이다 디럭스 에디션.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-118-detail.webp`,
            name: 'pro-118-detail.webp',
            originalname: '신듀얼리티 에코 오브 에이다 디럭스 에디션.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2025-01-16',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'PLAYSTATION05', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '15세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 79800,
          // 언어,원산지
          language: '음성-일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 39000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '아스트레아 식스 사이디드 오라클',
        // 재고수량
        quantity: 7,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-119-thumbnail.webp`,
            name: 'pro-119-thumbnail.jpg',
            originalname: '아스트레아 식스 사이디드 오라클.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-119-detail.webp`,
            name: 'pro-119-detail.webp',
            originalname: '아스트레아 식스 사이디드 오라클.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2025-01-21',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'PLAYSTATION05', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 49900,
          // 언어,원산지
          language: '음성-일본어,영어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 47000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '프리덤 워즈 리마스터',
        // 재고수량
        quantity: 20,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-120-thumbnail.webp`,
            name: 'pro-120-thumbnail.jpg',
            originalname: '프리덤 워즈 리마스터.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-120-detail.webp`,
            name: 'pro-120-detail.webp',
            originalname: '프리덤 워즈 리마스터.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2025-01-09',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'PLAYSTATION05', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 49800,
          // 언어,원산지
          language: '음성-일본어,영어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 83000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '시드마이어의 문명 7 VII 스탠다드에디션',
        // 재고수량
        quantity: 8,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-121-thumbnail.webp`,
            name: 'pro-121-thumbnail.jpg',
            originalname: '시드마이어의 문명 7 VII 스탠다드에디션.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-121-detail.webp`,
            name: 'pro-121-detail.webp',
            originalname: '시드마이어의 문명 7 VII 스탠다드에디션.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2025-02-11',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['GAME', 'PLAYSTATION05', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '12세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 83000,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 37000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '울프팽 스컬팽 새턴 트리뷰트 부스티드',
        // 재고수량
        quantity: 8,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-122-thumbnail.webp`,
            name: 'pro-122-thumbnail.jpg',
            originalname: '울프팽 스컬팽 새턴 트리뷰트 부스티드.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-122-detail.webp`,
            name: 'pro-122-detail.webp',
            originalname: '울프팽 스컬팽 새턴 트리뷰트 부스티드.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2024-12-31',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION05', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '12세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 49900,
          // 언어,원산지
          language: '음성-영어,일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 42000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '네온 블러드',
        // 재고수량
        quantity: 8,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-123-thumbnail.webp`,
            name: 'pro-123-thumbnail.jpg',
            originalname: '네온 블러드.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-123-detail.webp`,
            name: 'pro-123-detail.webp',
            originalname: '네온 블러드.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2024-12-31',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION05', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '18세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 44000,
          // 언어,원산지
          language: '음성-영어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 62000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '투포인트 뮤지엄 익스플로러 에디션',
        // 재고수량
        quantity: 8,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-124-thumbnail.webp`,
            name: 'pro-124-thumbnail.jpg',
            originalname: '투포인트 뮤지엄 익스플로러 에디션.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-124-detail.webp`,
            name: 'pro-124-detail.webp',
            originalname: '투포인트 뮤지엄 익스플로러 에디션.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2025-03-04',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION05', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 62000,
          // 언어,원산지
          language: '음성-영어,일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 39500,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '언더 디피트',
        // 재고수량
        quantity: 16,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-125-thumbnail.webp`,
            name: 'pro-125-thumbnail.jpg',
            originalname: '언더 디피트.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-125-detail.webp`,
            name: 'pro-125-detail.webp',
            originalname: '언더 디피트.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2024-12-19',
          // 신상품인가
          isNew: false,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION05', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '12세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 62000,
          // 언어,원산지
          language: '음성-일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 51000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '몬스터헌터 와일즈',
        // 재고수량
        quantity: 16,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-126-thumbnail.webp`,
            name: 'pro-126-thumbnail.jpg',
            originalname: '몬스터헌터 와일즈.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-126-detail.webp`,
            name: 'pro-126-detail.webp',
            originalname: '몬스터헌터 와일즈.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2025-02-28',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION05', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '15세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 74800,
          // 언어,원산지
          language: '음성-일본어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 45000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '돌연변이 닌자 거북이 슈레더의 복수 얼티밋 에디션',
        // 재고수량
        quantity: 20,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-127-thumbnail.webp`,
            name: 'pro-127-thumbnail.jpg',
            originalname: '돌연변이 닌자 거북이 슈레더의 복수 얼티밋 에디션.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-127-detail.webp`,
            name: 'pro-127-detail.webp',
            originalname: '돌연변이 닌자 거북이 슈레더의 복수 얼티밋 에디션.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2025-02-28',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION05', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '12세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 69900,
          // 언어,원산지
          language: '음성-일본어,영어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 37000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '바이오하자드 7 레지던트 이블 공드에디션',
        // 재고수량
        quantity: 20,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-128-thumbnail.webp`,
            name: 'pro-128-thumbnail.jpg',
            originalname: '바이오하자드 7 레지던트 이블 공드에디션.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-128-detail.webp`,
            name: 'pro-128-detail.webp',
            originalname: '바이오하자드 7 레지던트 이블 공드에디션.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2024-12-06',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION05', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '18세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 72700,
          // 언어,원산지
          language: '음성-일본어,영어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 64800,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: '퍼스트 버서커 카잔',
        // 재고수량
        quantity: 20,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-129-thumbnail.webp`,
            name: 'pro-129-thumbnail.jpg',
            originalname: '퍼스트 버서커 카잔.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-129-detail.webp`,
            name: 'pro-129-detail.webp',
            originalname: '퍼스트 버서커 카잔.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2025-03-28',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: false,
          // 카테고리
          category: ['GAME', 'PLAYSTATION05', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '18세 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 72700,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 725000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: 'PS5 Slim 슬림 본체 에디션 CFI-2018A / 디스크버전',
        // 재고수량
        quantity: 50,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-130-thumbnail.webp`,
            name: 'pro-130-thumbnail.jpg',
            originalname: 'PS5 Slim 슬림 본체 에디션 CFI-2018A / 디스크버전.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-130-detail.webp`,
            name: 'pro-130-detail.webp',
            originalname: 'PS5 Slim 슬림 본체 에디션 CFI-2018A / 디스크버전.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2023-12-20',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['HARDWARE', 'PLAYSTATION05', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 748000,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 579000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: 'PS5 Slim 슬림 본체 에디션 CFI-2018B / 디지털 버전',
        // 재고수량
        quantity: 40,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-131-thumbnail.webp`,
            name: 'pro-131-thumbnail.jpg',
            originalname: 'PS5 Slim 슬림 본체 에디션 CFI-2018B / 디지털 버전.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-131-detail.webp`,
            name: 'pro-131-detail.webp',
            originalname: 'PS5 Slim 슬림 본체 에디션 CFI-2018B / 디지털 버전.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2023-12-20',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['HARDWARE', 'PLAYSTATION05', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 598000,
          // 언어,원산지
          language: '음성-한국어 / 자막-한국어',
        },
      },
      {
        _id: await nextSeq('product'),
        seller_id: 2,
        // 상품가격
        price: 598000,
        // 배송비
        shippingFees: 4000,
        // 사이트에 노출될지말지
        show: true,
        // 판매여부
        active: true,
        // 제품명
        name: 'PS5본체 CFI-1018A / 디스크버전',
        // 재고수량
        quantity: 40,
        // 판매된 수량
        buyQuantity: 3,
        // 메인이미지
        mainImages: [
          {
            path: `files/${clientId}/pro-131-thumbnail.webp`,
            name: 'pro-131-thumbnail.jpg',
            originalname: 'PS5본체 CFI-1018A / 디스크버전.webp',
          },
        ],
        // 상세설명, 상세페이지(원래 쌤 코드는 div박스였으나 우리팀은 이미지로 대체함으로 메인이미지와 같은형식으로 차용)
        content: [
          {
            path: `files/${clientId}/pro-131-detail.webp`,
            name: 'pro-131-detail.webp',
            originalname: 'PS5본체 CFI-1018A / 디스크버전.webp',
          },
        ],
        // 등록날짜
        createdAt: getTime(-41, -60 * 60 * 2),
        // 수정날짜
        updatedAt: getTime(-40, -60 * 15),
        // 그외 기타
        extra: {
          // 발매일
          releaseDate: '2020-11-12',
          // 신상품인가
          isNew: true,
          // 베스트 상품인가
          isBest: true,
          // 카테고리
          category: ['HARDWARE', 'PLAYSTATION05', 'NEW'],
          // 리스트 노출 순서(숫자가 작을수록 먼저)
          sort: 1,
          // 제품상태
          condition: '새상품',
          // 중고인지, 아닌지
          used: false,
          // 이용등급
          ageGrade: '전체 이용가',
          // 플랫폼 정보
          platform: 'PlayStation',
          // 버전
          platformVersion: 5,
          // 원가
          originalPrice: 628000,
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
