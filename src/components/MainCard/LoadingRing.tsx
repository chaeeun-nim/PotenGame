export default function LoadingRing() {
  return (
    <>
      <div className="w-[100px] md:w-[150px] xl:w-[200px]  flex justify-center items-center">
        <div className="w-4 h-4 md:w-6 md:h-6 border-2 md:border-4 border-t-transparent border-poten-gray-2 rounded-full animate-spin"></div>
      </div>
    </>
  );
}
