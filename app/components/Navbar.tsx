import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-dark">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link
              href="/"
              className="inline-block text-brand hover:underline underline-offset-8"
            >
              metatags
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    href="/generate"
                    className="text-neutral-400 transition hover:text-neutral-200"
                  >
                    Generate og:image
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
