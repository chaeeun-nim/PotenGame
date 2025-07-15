import Image from 'next/image';
import doubleLeftIcon from '@/assets/icons/doubleLeft.svg'
import leftIcon from '@/assets/icons/left.svg'
import doubleRightIcon from '@/assets/icons/doubleRight.svg'
import rightIcon from '@/assets/icons/right.svg'
/* 
아래 page에 사용 되는 component
- /list/[product] 
- /forum
*/

export default function PageBottomNav() {
  return (
  <>
    <button type="button">
      <Image src={doubleLeftIcon} alt='first page'/>
    </button>
    <button type="button">
      <Image src={leftIcon} alt='previous page'/>
    </button>
    <a>1</a>
    <a>2</a>
    <a>3</a>
    <a>4</a>
    <a>5</a>
    <button type="button">
      <Image src={rightIcon} alt='next page'/>
    </button>    
    <button type="button">
      <Image src={doubleRightIcon} alt='last page'/>
    </button>
  </>
);
}
