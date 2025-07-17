'use client';

import { getMainBest } from '@/data/functions/mainBest';
import { ApiRes } from '@/types/api';
import { Iproduct } from '@/types/products';
import { useEffect, useState } from 'react';
import BestCard from './BestCard';
import BestLoading from './BestLoading';

export default function PsBest({ opacity }: { opacity: string }) {
  const [data, setData] = useState<ApiRes<Iproduct[]> | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMainBest('PlayStation');
      setData(res);
    };
    fetchData();
  }, []);

  if (!data) {
    return (
      <>
        <BestLoading />
      </>
    );
  }

  return (
    <>{data.ok ? <BestCard items={data.item} opacity={opacity} /> : '데이터 조회 실패'}</>
  );
}
