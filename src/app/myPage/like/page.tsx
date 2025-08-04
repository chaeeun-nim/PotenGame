import LikepageHeader from '@/components/LikePage/LikepageHeader';
import LikePageList from '@/components/LikePage/LikePageList';

export default function LikePage() {
  return (
    <>
      <LikepageHeader />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-16">
        <LikePageList />
      </div>
    </>
  );
}
