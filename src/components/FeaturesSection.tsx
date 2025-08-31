import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Calendar, 
  MessageCircle, 
  ShoppingBag, 
  BookOpen, 
  MessageSquare,
  Users,
  Heart
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Search,
      title: "Tra cứu mộ liệt sĩ",
      description: "Tìm kiếm thông tin mộ liệt sĩ theo tên, quê quán, đơn vị",
      color: "text-memorial-red"
    },
    {
      icon: Calendar,
      title: "Đăng ký viếng trực tuyến",
      description: "Đặt lịch viếng trước, nhận hướng dẫn chi tiết",
      color: "text-memorial-gold"
    },
    {
      icon: MessageCircle,
      title: "Gửi lời tri ân",
      description: "Để lại lời tri ân, tưởng nhớ các anh hùng liệt sĩ",
      color: "text-memorial-red"
    },
    {
      icon: Users,
      title: "Nhắn tìm đồng đội",
      description: "Kết nối với chiến hữu, tìm kiếm thông tin đồng đội",
      color: "text-memorial-gold"
    },
    {
      icon: ShoppingBag,
      title: "Đặt lễ trực tuyến",
      description: "Đặt hoa, lễ vật viếng online, thanh toán tiện lợi",
      color: "text-memorial-red"
    },
    {
      icon: BookOpen,
      title: "Sổ vàng tri ân",
      description: "Ghi lại những câu chuyện, kỷ niệm về liệt sĩ",
      color: "text-memorial-gold"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-white via-memorial-cream/20 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-memorial-dark mb-4">
            Chức năng tiêu biểu
          </h3>
          <p className="text-lg text-memorial-gray max-w-2xl mx-auto">
            Hệ thống tích hợp đầy đủ các tiện ích hỗ trợ thân nhân và người dân 
            trong việc tưởng niệm, tri ân các anh hùng liệt sĩ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-memorial transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-memorial-cream rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl text-memorial-dark">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-memorial-gray">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick access */}
        <div className="bg-gradient-to-br from-memorial-cream to-memorial-cream/80 rounded-lg p-8 border border-memorial-gold/20 shadow-elegant">
          <div className="text-center mb-6">
            <Heart className="w-12 h-12 text-memorial-red mx-auto mb-4" />
            <h4 className="text-2xl font-bold text-memorial-dark mb-2">
              Truy cập nhanh
            </h4>
            <p className="text-memorial-gray">
              Những chức năng được sử dụng nhiều nhất
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="memorial" size="lg">
              <Search className="w-5 h-5 mr-2" />
              Tra cứu ngay
            </Button>
            <Button variant="gold" size="lg">
              <Calendar className="w-5 h-5 mr-2" />
              Đặt lịch viếng
            </Button>
            <Button variant="outline" size="lg">
              <MessageSquare className="w-5 h-5 mr-2" />
              Góp ý kiến
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;