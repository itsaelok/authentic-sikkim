export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-2xl font-bold">
              Authentic Sikkim
            </h2>

            <p className="mt-4 text-gray-300 leading-7">
              Your trusted source for news, tourism, education,
              government jobs, and everything happening in Sikkim.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>Home</li>
              <li>Latest News</li>
              <li>Tourism</li>
              <li>Government Jobs</li>
              <li>Student Corner</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">
              Contact
            </h3>

            <p className="text-gray-300">
              Email: info@authenticsikkim.com
            </p>

            <p className="text-gray-300 mt-2">
              Gangtok, Sikkim, India
            </p>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          © {new Date().getFullYear()} Authentic Sikkim. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}