import { rankingData } from '@/data/functions/rankingData';

export default async function PotenRanking() {
  const NintendoData = await rankingData('Nintendo Switch', 'GAME');
  const NintendoDsData = await rankingData('Nintendo NDS', 'GAME');
  const PsData = await rankingData('PlayStation', 'GAME');
  console.log('스위치', NintendoData);
  console.log('nds', NintendoDsData);
  console.log('플스', PsData);
  return <></>;
}
