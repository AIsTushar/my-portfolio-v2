import Link from "next/link";

function Footer() {
  return (
    <footer className="border-t-[1px] border-solid border-black font-medium text-lg">
      <div className="w-full h-full z-0 bg-white px-32 py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <Link href="/">Home</Link>
        <Link href="mailto:azizultushar98@gmail.com">Contact</Link>
      </div>
    </footer>
  );
}

export default Footer;
