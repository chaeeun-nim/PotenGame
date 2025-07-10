import '@/app/globals.css';
/* 
아래 page에 사용 되는 component
- /list/[product] 
- /forum
*/

export default function SelectBar() {
  return (
    <>
      <h2 className="font-semibold pl-4 border-l-4 border-l-[var(--color-poten-red)]">닌텐도 DS</h2>
      <hr className="my-5 border-[var(--color-poten-gray-1)]" />
      <button
        type="button"
        className="px-10 py-2 bg-[var(--color-poten-red)] rounded-4xl text-white mr-5">
        소프트웨어
      </button>
      <button
        type="button"
        className="px-10 py-2 border-2 border-[var(--color-poten-red)] rounded-4xl text-[var(--color-poten-black)] mr-5">
        주변기기
      </button>
      <button
        type="button"
        className="px-10 py-2 border-2 border-[var(--color-poten-red)] rounded-4xl text-[var(--color-poten-black)] mr-5">
        액세서리
      </button>
      <button
        type="button"
        className="px-10 py-2 border-2 rounded-4xl text-[var(--color-poten-black)] mr-5">
        아미보
      </button>
      <select name="product-filter" id="filter-option-select" className='bg-[#FBFBFB]'>
        <option value="lastest">최신순</option>
        <option value="name-abc">상품명</option>
        <option value="lowest-price">낮은가격</option>
        <option value="highest-price">높은가격</option>
        <option value="most-likes">인기상품</option>
        <option value="most-reviews">리뷰순</option>
      </select>
    </>
  );
}
