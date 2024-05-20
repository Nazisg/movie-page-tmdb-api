export default function Feature() {
  return (
    <section className="bg-bgImgs border border-[#262626] rounded-xl w-full h-56  bg-no-repeat flex flex-col gap-2 lg:flex-row justify-center lg:justify-between items-center px-10 mb-10">
      <div className="flex flex-col gap-1 lg:items-start items-center">
        <h3 className="font-bold lg:text-4xl text-2xl lg:text-left text-center">Start your free trial today!</h3>
        <p className="font-normal text-[#999999] pt-3 lg:text-base text-sm lg:text-left text-center">
          This is a clear and concise call to action that encourages users to
          sign up for a free trial of StreamVibe.
        </p>
      </div>
      <button className="font-semibold rounded-lg lg:py-3 lg:px-4 py-2 px-3 bg-primary-red lg:text-[0.9rem] text-[0.8rem]">
        Start a Free Trail
      </button>
    </section>
  );
}
