export const Dashboard = () => {
  return (
    <>
      <div className="w-full mt-[20px] overflow-y-scroll max-h-[616px]">
        <div className="w-full flex justify-center flex-wrap gap-[30px]">
          {Array.from({ length: 50 }).map((_, index) => (
            <div key={index} className="w-full max-w-[150px] h-[150px] rounded-md border-blue-200 border-[2px] flex justify-center items-center text-[20px] text-blue-200" />
          ))}
        </div>
      </div>
    </>
  );
};
