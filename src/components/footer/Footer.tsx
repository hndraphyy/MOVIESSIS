import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:flex justify-between gap-10">
          <div className="">
            <Link
              href="/"
              aria-label="Moviessis Home"
              className=" text-white font-bold text-2xl md:text-3xl tracking-wide"
            >
              <span className="text-primary">MOVIESSIS</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              A film production company that specializes in creating visually
              stunning and impactful content.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 tracking-wide">
              MENU
            </h3>
            <ul className="space-y-2 text-sm">
              {["Home", "Movies", "Popular"].map((item, i) => (
                <li key={i}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="hover:text-primary transition-colors duration-300 ease-in-out"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 tracking-wide">
              BUSINESS
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                "Movie",
                "Web Series",
                "Sinetron",
                "Film Distributor",
                "Platinum Cineplex",
                "Pay TV",
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-primary transition-colors duration-300 ease-in-out"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 tracking-wide">
              GOVERNANCE
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                "Articles of Association",
                "Internal & External Audit",
                "Code of Conduct",
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-primary transition-colors duration-300 ease-in-out"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-4 text-center text-sm text-gray-500">
          © 2025 MOVIESSIS All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
