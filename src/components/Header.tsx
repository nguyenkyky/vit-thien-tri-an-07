import { Button } from "@/components/ui/button";
import { Menu, Flag, Phone, MapPin } from "lucide-react";

const Header = () => {
  const menuItems = [
    "Giới thiệu",
    "Tin tức – Sự kiện", 
    "Tra cứu mộ",
    "Đăng ký viếng",
    "Sổ vàng tri ân",
    "Nhắn tìm đồng đội",
    "Đóng góp ý kiến"
  ];

  return (
    <header className="bg-white border-b border-border shadow-elegant">
      {/* Top info bar */}
      <div className="bg-memorial-red text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Liên hệ: Nhung - 0988.058.390</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Vị Xuyên, Hà Giang</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Flag className="w-4 h-4" />
            <span>Tri ân các Anh hùng Liệt sĩ</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and title */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-memorial-gold rounded-full flex items-center justify-center">
              <Flag className="w-8 h-8 text-memorial-dark" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-memorial-dark">
                Nghĩa trang Liệt sĩ Vị Xuyên
              </h1>
              <p className="text-memorial-gray text-sm">
                Cổng thông tin điện tử
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <a
              href="/"
              className="text-memorial-dark hover:text-memorial-red transition-colors font-medium"
            >
              Trang chủ
            </a>
            <a
              href="/about"
              className="text-memorial-dark hover:text-memorial-red transition-colors font-medium"
            >
              Giới thiệu
            </a>
            <a
              href="/tomb-search"
              className="text-memorial-dark hover:text-memorial-red transition-colors font-medium"
            >
              Tra cứu mộ
            </a>
            <a
              href="/visit-registration"
              className="text-memorial-dark hover:text-memorial-red transition-colors font-medium"
            >
              Đăng ký viếng
            </a>
            {menuItems.slice(3).map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-memorial-dark hover:text-memorial-red transition-colors font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;