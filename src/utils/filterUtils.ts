// utils/filterUtils.ts
export interface Category {
  type: string;
  value: string;
}

export interface FilterState {
  platform?: string;
  condition?: 'used' | 'new';
  category?: 'GAME' | 'CONSOLE';
  [key: string]: string | undefined;
}

// 필터 매핑 설정
export const FILTER_MAPPINGS = {
  // 단일 필터
  used: { condition: 'used' as const },
  new: { condition: 'new' as const },
  game: { category: 'GAME' as const },
  console: { category: 'CONSOLE' as const },

  // 복합 필터
  'used-game': { condition: 'used' as const, category: 'GAME' as const },
  'used-console': { condition: 'used' as const, category: 'CONSOLE' as const },
  'new-game': { condition: 'new' as const, category: 'GAME' as const },
  'new-console': { condition: 'new' as const, category: 'CONSOLE' as const },
} as const;

export type FilterMappingKey = keyof typeof FILTER_MAPPINGS;

/**
 * 라벨이 현재 필터 상태와 일치하는지 확인
 */
export const isLabelActive = (label: Category, filters: FilterState): boolean => {
  // 플랫폼 필터 확인
  if (label.value.startsWith('platform-')) {
    return !!filters.platform;
  }

  // 매핑된 필터 확인
  const mapping = FILTER_MAPPINGS[label.value as FilterMappingKey];
  if (mapping) {
    return Object.entries(mapping).every(
      ([key, value]) => filters[key as keyof FilterState] === value
    );
  }

  return false;
};

/**
 * 필터 적용 함수
 */
export const applyFilter = (label: Category, currentFilters: FilterState): FilterState => {
  const newFilters = { ...currentFilters };

  // 플랫폼 필터 처리
  if (label.value.startsWith('platform-')) {
    return newFilters; // 플랫폼을 이미 설정되어 변경하지 않음
  }

  // 매핑된 필터 확인
  const mapping = FILTER_MAPPINGS[label.value as FilterMappingKey];
  if (mapping) {
    Object.assign(newFilters, mapping);
  }

  return newFilters;
};

/**
 * 필터 제거 함수
 */
export const removeFilter = (label: Category, currentFilters: FilterState): FilterState => {
  const newFilters = { ...currentFilters };

  // 플랫폼 필터 제거
  if (label.value.startsWith('platform-')) {
    delete newFilters.platform;
    return newFilters;
  }

  // 매핑된 필터 제거
  const mapping = FILTER_MAPPINGS[label.value as FilterMappingKey];
  if (mapping) {
    Object.keys(mapping).forEach(key => {
      delete newFilters[key as keyof FilterState];
    });
  }

  return newFilters;
};

/**
 * 필터 상태에 따른 활성 버튼 인덱스 배열 반환
 */
export const getActiveButtonIndices = (labels: Category[], filters: FilterState): number[] => {
  const activeIndices: number[] = [];
  
  labels.forEach((label, index) => {
    if (isLabelActive(label, filters)) {
      activeIndices.push(index);
    }
  });

  return activeIndices;
}

/**
 * 카테고리별 동적 필터 생성
 */
export const createDynamicCategories = (categoryCode: string): Category[] => {
  const getCategoryValue = (code: string): string => {
    const categoryMap: { [key: string]: string } = {
      NINTENDONDS: '닌텐도 NDS',
      NINTENDO01: '닌텐도 스위치 1',
      NINTENDO02: '닌텐도 스위치 2',
      PLAYSTATION04: '플레이스테이션 4',
      PLAYSTATION05: '플레이스테이션 5',
    };

    return categoryMap[code] || '전체 상품';
  };

  const platformValue = getCategoryValue(categoryCode);

  return [
    { type: platformValue, value: `platform-${categoryCode}` },
    { type: '중고', value: 'used' },
    { type: '게임', value: 'game' },
  ];
};

/**
 * 기본 카테고리 라벨
 */
export const DEFAULT_CATEGORIES: Category[] = [
  { type: '중고 게임', value: 'used-game' },
  { type: '중고 게임기', value: 'used-console' },
  { type: '새제품 게임', value: 'new-game' },
  { type: '새제품 게임기', value: 'new-console' },
];

/**
 * 필터 토글 함수 (적용/제거 통합)
 */
export const toggleFilter = (
  label: Category,
  currentFilters: FilterState,
  isCurrentlyActive: boolean
): FilterState => {
  return isCurrentlyActive
    ? removeFilter(label, currentFilters)
    : applyFilter(label, currentFilters);
};

/**
 * 필터 상태가 비어있는지 확인
 */
export const isFiltersEmpty = (filters: FilterState): boolean => {
  return Object.keys(filters).length === 0;
};

/**
 * 필터 표시 텍스트 생성
 */
export const getFilterDisplayText = (filters: FilterState): string[] => {
  const displayTexts: string[] = [];

  if (filters.platform) {
    displayTexts.push(filters.platform);
  }

  if (filters.condition) {
    displayTexts.push(filters.condition === 'used' ? '중고' : '새제품');
  }

  if (filters.category) {
    displayTexts.push(filters.category === 'GAME' ? '게임' : '게임기');
  }

  return displayTexts;
};