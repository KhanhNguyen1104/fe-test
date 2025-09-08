import Link from "next/link";

export function Footer() {
  return (
    <footer className="absolute bottom-0 w-full bg-gray-900 px-8 py-12 text-gray-300">
      <div className="container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Company */}
        <div>
          <h3 className="mb-4 font-semibold text-white">
            AGEST Vietnam
          </h3>
          <p className="text-sm">
            Pioneer in IT & Digital Transformation Consulting in
            Vietnam.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-4 font-semibold text-white">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-white">
                Custom Software Development
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Mobile & Web App Development
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Software Testing & QA Consulting
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Big Data & AI Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Insights & Careers */}
        <div>
          <h4 className="mb-4 font-semibold text-white">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blogs" className="hover:text-white">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/news" className="hover:text-white">
                News
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-white">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:text-white">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="mb-4 font-semibold text-white">
            Contact & Follow
          </h4>
          <div className="space-y-1 text-sm">
            <p>Ho Chi Minh: TTC Building, 253 Hoàng Văn Thụ, HCM</p>
            <p>Hà Nội: HL Tower, 6/82 Duy Tân, Cầu Giấy</p>
            <p>Đà Nẵng: VietinBank Building, 36 Trần Quốc Toản</p>
            <p>
              Email:{" "}
              <Link
                href="mailto:info@agest.vn"
                className="hover:text-white"
              >
                info@agest.vn
              </Link>
            </p>
            <p>Phone: (+84) 28 3990 3839</p>
          </div>
          <div className="mt-4 flex space-x-4">
            {/* <Link href="#" className="hover:text-white">
              <FaFacebookF />
            </Link>
            <Link href="#" className="hover:text-white">
              <FaLinkedinIn />
            </Link>
            <Link href="#" className="hover:text-white">
              <FaYoutube />
            </Link> */}
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center border-t border-gray-700 pt-4 text-center text-xs">
        <p>
          Copyright ©{new Date().getFullYear()} AGEST Vietnam. All
          rights reserved. AGEST is a registered trademark, and Action
          Based Testing and TestArchitect are trademarks of AGEST
          Vietnam. All other trademarks contained herein are the
          property of their respective owners.
        </p>
      </div>
    </footer>
  );
}
