/* 상품 상세 페이지 '/list/[id]' 하단부 (상품 상세 정보) 교환/반품 안내 component를 구현한 컴포넌트입니다.(상품 상세 페이지 하단부) */

export default function ItemDetailNotice() {
  return (
    <div className="p-4 md:p-6 xl:p-8">
      {/* 교환 및 반품 안내 */}
      <section className="mb-6 md:mb-8 xl:mb-10">
        <div className="mb-3 md:mb-4 xl:mb-5 text-center bg-poten-snowgray2 p-2 md:p-3 xl:p-4">
          <h2 className="text-sm md:text-base xl:text-lg font-bold mb-2">
            포텐게임 반품/교환 안내
          </h2>
          <div className="max-w-[300px] md:max-w-[500px] mx-auto">
            <span className="text-xs md:text-base">
              반품 시 먼저 판매자와 연락하셔서 반품사유, 택배사, 배송비, 반품지 주소 등을
              협의하신 후 반품상품을 발송해 주시기 바랍니다.
            </span>
          </div>
        </div>

        <article className="mb-4 md:mb-5 xl:mb-6">
          <div className="mb-3 md:mb-4 xl:mb-5">
            <h4 className="text-xs md:text-sm xl:text-base font-medium mb-2 text-gray-700">
              교환 및 반품 접수 방법
            </h4>
            <p className="text-xs md:text-sm xl:text-base leading-relaxed mb-2 text-gray-600">
              상품 수령 후 7일 이내 고객센터(070-4640-1229) 또는 1:1 게시판 문의로
              접수(필수)
            </p>
            <ul className="text-xs md:text-sm xl:text-base leading-relaxed space-y-1 md:space-y-2 xl:space-y-2 ml-4">
              <li className="text-gray-600">
                • 교환 및 반품 접수 안내와 배송비 안내를 받으시기 바랍니다.
              </li>
              <li className="text-red-600">
                (임의로 반송하여 6,000원 이외의 추가 금액이 발생할 경우 추가 금액은
                고객님께 청구됩니다.)
              </li>
              <li className="text-gray-600">
                • 업체 측에서 교환 및 반품 접수 확인 후 우체국 택배를 통하여 상품 회수
                접수하며, 상품 업체 측에서 수령 및 상태 확인이 되어야 처리됩니다.
              </li>
            </ul>
          </div>
        </article>
      </section>

      {/* 기본 정보 테이블 */}
      <section className="mb-6 md:mb-8 xl:mb-10">
        <table className="w-full border-collapse border border-gray-300">
          <tbody>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 p-2 md:p-3 xl:p-4 font-medium text-xs md:text-sm xl:text-base bg-poten-snowgray2">
                판매자 지정 택배사
              </td>
              <td className="border border-gray-300 p-2 md:p-3 xl:p-4 text-xs md:text-sm xl:text-base">
                우체국 택배
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 md:p-3 xl:p-4 font-medium text-xs md:text-sm xl:text-base bg-poten-snowgray2">
                교환 배송비
              </td>
              <td className="border border-gray-300 p-2 md:p-3 xl:p-4 text-xs md:text-sm xl:text-base">
                6,000 원
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 p-2 md:p-3 xl:p-4 font-medium text-xs md:text-sm xl:text-base bg-poten-snowgray2">
                보내실 곳
              </td>
              <td className="border border-gray-300 p-2 md:p-3 xl:p-4 text-xs md:text-sm xl:text-base">
                경북 울릉군 울릉읍 독도안용복길 3
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 md:p-3 xl:p-4 font-medium text-xs md:text-sm xl:text-base bg-poten-snowgray2 align-top">
                교환/반품 사유에 따른 요청 가능 기간
              </td>
              <td className="border border-gray-300 p-2 md:p-3 xl:p-4 text-xs md:text-sm xl:text-base">
                구매자 다음 변심은 상품 수령 후 7일 이내
                <br />
                <br />
                표시/광고와 상이, 계약 내용과 다르게 이행된 경우 상품 수령 후 3개월 이내
                혹은 표시/광고와 다른 사실을 알 날로부터 30일 이내
                <br />둘 중 하나 경과시 교환/반품 불가
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 교환/반품 불가능 사유 */}
      <section className="mb-6 md:mb-8 xl:mb-10">
        <h2 className="text-sm md:text-base xl:text-lg font-bold mb-3 md:mb-4 xl:mb-5 text-center bg-poten-snowgray2 p-2 md:p-3 xl:p-4">
          교환/반품 불가 사유
        </h2>
        <ul className="text-xs md:text-sm xl:text-base leading-relaxed space-y-2 md:space-y-3 xl:space-y-3">
          <li>
            - 청약철회 가능 기간 상품 수령 후 7일 이내(택배 도착일 기준)이 경과된 경우
          </li>
          <li>- 고객센터 및 게시판에 내용을 접수하지 않고 임의로 반송을 보낸 경우</li>
          <li>- 고객님의 책임이 있는 사유로 상품이 멸실, 훼손, 가치가 하락된 경우</li>
          <li className="ml-4">
            ▷ 상품 포장(컵비닐 포장)을 개봉하였거나 훼손되어 상품의 가치가 하락된 경우
          </li>
          <li className="ml-4 text-gray-600">
            (타이틀의 경우 복제가 가능하며, 청약철회 기간 내 실질적인 사용이 가능하기에
            단순 포장 훼손 시 상품 가치 하락(중고품) 됩니다.)
          </li>
          <li>
            - 고객님의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히 감소한 경우
          </li>
          <li className="ml-4">
            ▷ 직접적인 사용(전자기기 전원 ON 및 연결, 사용 흔적 및 훼손, 구성품 누락
            등)으로 인하여 상품의 가치가 상실된 경우
          </li>
          <li className="ml-4">
            ▷ 고유 넘버링이 되어 있는 제품(봉체 및 주변기기 등)의 포장재 누락 및 훼손으로
            상품의 가치가 상실된 경우
          </li>
        </ul>
      </section>

      {/* 문의 안내 */}
      <section className="mb-6 md:mb-8 xl:mb-10">
        <h3 className="text-sm md:text-base xl:text-lg font-bold mb-3 md:mb-4 xl:mb-5 text-center bg-poten-snowgray2 p-2 md:p-3 xl:p-4">
          문의하기
        </h3>
        <div className="text-xs md:text-sm xl:text-base leading-relaxed space-y-2 md:space-y-3 xl:space-y-4">
          <p>• 고객센터: 1588-0000 (평일 09:00~18:00)</p>
          <p>• 이메일: support@gamestore.com</p>
          <p>• 온라인 문의: 마이페이지 → 1:1 문의</p>
        </div>
      </section>

      {/* 판매자 정보 */}
      <section className="mb-6 md:mb-8 xl:mb-10">
        <h2 className="text-sm md:text-base xl:text-lg font-bold mb-3 md:mb-4 xl:mb-5 text-center bg-poten-snowgray2 p-2 md:p-3 xl:p-4">
          판매자 정보
        </h2>
        <table className="w-full border-collapse border border-gray-300">
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2 md:p-3 xl:p-4 font-medium text-xs md:text-sm xl:text-base bg-poten-snowgray2 w-1/4">
                상호명
              </td>
              <td className="border border-gray-300 p-2 md:p-3 xl:p-4 text-xs md:text-sm xl:text-base w-1/4">
                (주) 포텐게임
              </td>
              <td className="border border-gray-300 p-2 md:p-3 xl:p-4 font-medium text-xs md:text-sm xl:text-base bg-poten-snowgray2 w-1/4">
                대표자
              </td>
              <td className="border border-gray-300 p-2 md:p-3 xl:p-4 text-xs md:text-sm xl:text-base w-1/4">
                이도올
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 주의사항 */}
      <section>
        <h2 className="text-sm md:text-base xl:text-lg font-bold mb-3 md:mb-4 xl:mb-5 text-center bg-poten-snowgray2 p-2 md:p-3 xl:p-4">
          주의사항
        </h2>
        <ul className="text-xs md:text-sm xl:text-base leading-relaxed space-y-2 md:space-y-3 xl:space-y-4">
          <li>
            • 전자상거래 등에서의 소비자보호에 관한 법률에 의한 반품규정이 판매자가 지정한
            반품 조건보다 우선합니다.
          </li>
          <li>
            • 전자상거래 등에서의 소비자보호에 관한 법률에 의거하여 미성년자가 물품을
            구매하는 경우, 법정대리인이 동의하지 않으면 미성년자 본인 또는 법정대리인이
            구매를 취소할 수 있습니다.
          </li>
          <li>
            • 전기용품 및 생활용품 안전관리법 및 어린이제품 안전 특별법 규정에 의한
            안전관리대상 품목인 전기용품, 생활용품, 어린이제품을 판매 또는 구매하실
            경우에는 해당 제품이 안전인증, 안전확인, 공급자적합성 확인, 안전기준준수 적용
            제품인지 확인하시기 바랍니다.
          </li>
        </ul>
      </section>
    </div>
  );
}
