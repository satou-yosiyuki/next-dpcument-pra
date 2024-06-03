const Loading = () => {
  console.log("loading");
  return (
    <div className="h-screen">
      <div className="flex justify-center items-center gap-6 mt-10">
        <div className="h-10 w-10 animate-spin border-[5px] border-sky-400 rounded-full  border-t-transparent"></div>
        <p className="text-[30px] font-weight">Loading</p>
      </div>
    </div>
  );
};

export default Loading;
