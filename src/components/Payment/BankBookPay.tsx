export default function BankBookPay() {
  return (
    <>
      <div className="w-full xl:max-w-[894px] mx-auto h-[300px] px-4 md:px-6 xl:px-0 mt-4">
        <p className="my-4  text-poten-error-color font-bold">
          3일 이내에 미입금시 자동으로 주문이 취소됩니다.
        </p>
        <div className=" px-4  md:py-1 border-l-8 border-poten-gray-1 w-full">
          <h6 className="font-bold text-[20px]">농협은행</h6>
          <p className="text-[18px]">3333-05-8451268</p>
          <p className="text-sm">예금주 : (주)포텐게임</p>
        </div>
      </div>
    </>
  );
}
