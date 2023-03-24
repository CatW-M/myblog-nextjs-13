function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl text-[#001d46]">CAnoakia</h1>
        <h2 className="mt-5 md:mt-0 text-[#7D0D6a]">
          Welcome to CAnoakia, my blog about the space and time commitments of
          my first life.
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        Just a Cat in Colorado | Triumphs in Tech | Job Searching & So Much
        More!
      </p>
    </div>
  );
}

export default Banner;
