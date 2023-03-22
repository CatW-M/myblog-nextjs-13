function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">Catherine's Daily Blog</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to a little jaunt through
          <span className="underline decoration-4 decoration-[#0af3f7]">
            {' '}
            Space and Time{' '}
          </span>
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        From Maine to California | Triumphs in Tech | Job Searching & So Much
        More!
      </p>
    </div>
  );
}

export default Banner;
