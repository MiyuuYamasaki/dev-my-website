export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Luxury Haven</h3>
            <p className="mb-4">123 Serenity Lane, Paradise City, 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@luxuryhaven.com</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Company Profile</h4>
            <p className="text-sm leading-relaxed">
              Luxury Haven was founded in 2010 with a vision to redefine luxury
              hospitality. Our commitment to excellence and attention to detail
              have made us a leader in the industry. With a team of dedicated
              professionals, we strive to provide our guests with unforgettable
              experiences and unparalleled comfort. Our sustainable practices
              and community engagement initiatives reflect our dedication to
              responsible luxury and creating a positive impact in the world.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2023 Luxury Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
