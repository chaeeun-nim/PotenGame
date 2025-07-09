import '@/app/globals.css'
/* 
아래 page에 사용 되는 component
- /list/[product] 
- /forum
*/

export default function SelectBar() {
  return (
  <>
    <h2 className='font-semibold ml-4 mb-5 '>닌텐도 DS</h2>
    <button>소프트웨어</button>
    <button>주변기기</button>
    <button>액세서리</button>
    <button>아미보</button>
  </>
);
}
