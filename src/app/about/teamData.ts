import member1 from '@/assets/img/about/doul.webp';
import member2 from '@/assets/img/about/chaeeun.webp';
import member3 from '@/assets/img/about/dongcho.webp';
import member4 from '@/assets/img/about/taewoo.webp';
import { StaticImageData } from 'next/image';

export interface teamPerson {
  id: number;
  name: string;
  githubLink: string;
  title: string;
  subtitle: string;
  position: string;
  work: string;
  reviewtitle: string;
  review: string;
  img: StaticImageData;
}

export const teamData: teamPerson[] = [
  {
    id: 1,
    name: '이도울',
    githubLink: 'https://github.com/dooollee',
    title: '목표를 향해 꾸준히\n걸어가는 개발자',
    subtitle: '확실한 목표를 동기부여로 삼고\n조금씩 천천히 나아가는 개발자',
    work: '헤더 GNB\n로그인\n회원가입\n유저기록관리',
    position: 'PM',
    reviewtitle: '함께의 중요성을 깨닳았어요.',
    img: member1,
    review:
      '개발에 있어서 저의 장점은 다양한 시도를 두려워하지 않는 것과 아이디어를 내는것이라고 생각합니다. 그러나 디자인은 잘 하지 못합니다. ui를 만드는데 미숙한 부분이 있고 꼼꼼한 면이 부족하여 문서정리를 어려워 하기도하죠. 혼자였으면 어려웠을 프로젝트를 각자의 장점을 살려 하나의 온전한 결과물을 만들어냈습니다. 서로 부족한 부분을 채워주고 자극받으며 성장한 귀중한 시간이었습니다.',
  },
  {
    id: 2,
    name: '송채은',
    githubLink: 'https://github.com/chaeeun-nim',
    title: '365일 연구중인 연구 및\n탐색형 개발자 입니다.',
    subtitle: '학습 욕심이 많아 분야를 가리지 않고\n꾸준히 연구하는 개발자',
    work: '메인페이지\n모바일 하단 GNB\nFooter\n장바구니\n상품구매\n검색\n좋아요',
    position: 'PL',
    reviewtitle: '더 좋은 개발자,\n더 좋은 사람이 될 수 있었어요.',
    img: member2,
    review:
      '사소한 문제도 함께 나누고 고민하는 순간들이 모여 모두가 성장했던 추억이 되었습니다. 뛰어난 전문성이 있는 팀원, 성장에 대한 의지가 강한 팀원, 할 일을 성실히 묵묵히 수행하는 팀원에게 정말 많이 배웠습니다. 개발 실력 뿐 만 아니라 더 나은 사람이 될 수 있는 기회에 감사합니다.',
  },
  {
    id: 3,
    name: '배동초',
    githubLink: 'https://github.com/sua17',
    title: '계속해서 배우며 성장하는\n개발자 입니다.',
    subtitle: '끊임없이 배우고 실천하며, 성장하는\n개발자',
    work: '마이페이지\n주문조회\n유저상세조회\n주소등록\n게시판UI',
    position: 'DR',
    reviewtitle: '협업 속에서 팀과 함께\n온전히 성장할 수 있었어요.',
    img: member3,
    review: `팀과의 협업을 통해 팀워크와 책임감의 가치를 깊이 체감했습니다. ‘내가 잘 해낼 수 있을까’ 라는 고민 속에서도, 의견을 나누며 함께 만들어가는 과정은 큰 배움이었습니다. 솔직한 피드백과 꾸준한 노력 끝에, 성장하는 나 자신을 발견한 소중한 시간이었습니다.`,
  },
  {
    id: 4,
    name: '김태우',
    githubLink: 'https://github.com/twkimfe',
    title: '꾸준히 학습하고, 구현에\n파고드는 개발자 입니다.',
    subtitle: '스스로 부족한 부분을 찾아\n끈기있게 공부하여 결국 해내는 개발자',
    work: '상품 목록 조회\n상품 필터링\n상품 목록 정렬\n상품 상세 페이지\n페이지 경로관리',
    position: 'PR',
    reviewtitle:
      '사실 이번 프로젝트에서 맡은 바 업무를\n제대로 수행할 수 있을까 걱정이 됐어요.',
    img: member4,
    review:
      '프로젝트 시작할 때, 혼자의 힘으로는 기능 구현조차도 어려웠습니다. 그런 제가 이번 파이널 프로젝트에 담당 업무를 잘 해낼 수 있을까 걱정이 많이 되었지만, Poten 팀원들의 많은 도움을 받으면서 꾸준히 해보니 점차 구현해 낼 수 있었습니다. 그런 과정을 몸소 느끼며, 앞으로 있을 개발자로 임하는 길도 끈기로 가다 보면 반드시 해낼 수 있겠다고 생각하게 되었습니다.',
  },
];
