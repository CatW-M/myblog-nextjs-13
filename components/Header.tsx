import Link from 'next/link';
import Image from 'next/image';

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src={'/logoblog.png'}
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
        <h1>CAnoakia</h1>
      </div>
      <div>
        <Link
          href="https://www.wheelermushlin.com"
          className="px-5 py-3 text-sm md:text-base bg-gray-200 text-[#001d46] flex items-center rounded-full text-center"
        >
          Visit my Portfolio
        </Link>
      </div>
    </header>
  );
}

export default Header;
