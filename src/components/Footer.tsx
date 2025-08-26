import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flag, MapPin, Phone, Mail, Clock, QrCode, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-memorial-dark text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Organization info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-memorial-gold rounded-full flex items-center justify-center">
                <Flag className="w-6 h-6 text-memorial-dark" />
              </div>
              <div>
                <h5 className="text-xl font-bold">Ban Quản lý</h5>
                <p className="text-gray-300">Nghĩa trang Liệt sĩ Vị Xuyên</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Đơn vị quản lý và vận hành Nghĩa trang Liệt sĩ Vị Xuyên, 
              phục vụ công tác tưởng niệm và tri ân các anh hùng liệt sĩ.
            </p>
            
            {/* Contact info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-memorial-gold" />
                <span className="text-sm">Điểm cao 468, Vị Xuyên, Hà Giang</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-memorial-gold" />
                <span className="text-sm">Nhung - 0988.058.390</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-memorial-gold" />
                <span className="text-sm">info@ntlsvx.gov.vn</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-memorial-gold" />
                <span className="text-sm">Mở cửa: 7:00 - 17:00 hàng ngày</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h6 className="text-lg font-semibold mb-4">Liên kết nhanh</h6>
            <ul className="space-y-2">
              {[
                "Giới thiệu",
                "Tin tức - Sự kiện",
                "Tra cứu mộ",
                "Đăng ký viếng",
                "Sổ vàng tri ân",
                "Nhắn tìm đồng đội"
              ].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-memorial-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* QR Code & Support */}
          <div>
            <h6 className="text-lg font-semibold mb-4">Hỗ trợ</h6>
            
            <Card className="bg-white/10 border-white/20 mb-4">
              <CardContent className="p-4 text-center">
                <QrCode className="w-16 h-16 text-memorial-gold mx-auto mb-2" />
                <p className="text-sm text-gray-300 mb-2">QR Code</p>
                <p className="text-xs text-gray-400">Chuyển khoản đặt lễ</p>
              </CardContent>
            </Card>

            <Button variant="gold" className="w-full mb-4">
              <MessageSquare className="w-4 h-4 mr-2" />
              Đóng góp ý kiến
            </Button>

            <div className="text-xs text-gray-400">
              <p className="mb-1">Chính sách bảo mật</p>
              <p>Điều khoản sử dụng</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-300">
              © 2024 Nghĩa trang Liệt sĩ Vị Xuyên. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <span>Được phát triển bởi</span>
              <span className="text-memorial-gold font-semibold">NTLSVX Tech Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;