import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Calendar, ArrowRight } from "lucide-react";

const IntroSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-memorial-cream via-white to-memorial-cream/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-memorial-dark mb-6">
              Nghĩa trang Liệt sĩ Vị Xuyên
            </h3>
            <p className="text-lg text-memorial-gray mb-6 leading-relaxed">
              Nằm tại Điểm cao 468, Vị Xuyên, Hà Giang - nơi đã diễn ra những trận chiến 
              oanh liệt bảo vệ biên giới phía Bắc. Nghĩa trang là nơi an nghỉ của hàng nghìn 
              anh hùng liệt sĩ đã hy sinh vì Tổ quốc.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <Card className="text-center p-4">
                <CardContent className="p-0">
                  <Users className="w-8 h-8 text-memorial-red mx-auto mb-2" />
                  <div className="text-2xl font-bold text-memorial-dark">2,847</div>
                  <div className="text-sm text-memorial-gray">Liệt sĩ</div>
                </CardContent>
              </Card>
              
              <Card className="text-center p-4">
                <CardContent className="p-0">
                  <MapPin className="w-8 h-8 text-memorial-red mx-auto mb-2" />
                  <div className="text-2xl font-bold text-memorial-dark">468m</div>
                  <div className="text-sm text-memorial-gray">Độ cao</div>
                </CardContent>
              </Card>
              
              <Card className="text-center p-4">
                <CardContent className="p-0">
                  <Calendar className="w-8 h-8 text-memorial-red mx-auto mb-2" />
                  <div className="text-2xl font-bold text-memorial-dark">1979</div>
                  <div className="text-sm text-memorial-gray">Thành lập</div>
                </CardContent>
              </Card>
            </div>

            <Button variant="memorial" className="group">
              Tìm hiểu thêm
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Video/Image placeholder */}
          <div className="relative">
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-elegant">
              <div className="w-full h-full bg-gradient-to-br from-memorial-red/20 to-memorial-gold/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <div className="w-0 h-0 border-l-[12px] border-l-memorial-red border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-memorial-dark font-medium">Video giới thiệu</p>
                  <p className="text-memorial-gray text-sm">Nghĩa trang Liệt sĩ Vị Xuyên</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;