// src/components/Footer.jsx
export default function Footer() {
    return (
      <footer className="bg-green-900 text-white py-6 px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">© 2025 TakaCare. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="mailto:support@takacare.ke" className="hover:text-yellow-300">support@takacare.ke</a>
          <a href="#" className="hover:text-yellow-300">Twitter</a>
          <a href="#" className="hover:text-yellow-300">Facebook</a>
        </div>
      </footer>
    );
  }
  