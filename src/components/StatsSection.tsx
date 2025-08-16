import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Calendar, MapPin, ArrowRight, Newspaper } from "lucide-react";

const StatsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-memorial-red to-memorial-red/90 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Stats */}
          <div>
            <h3 className="text-3xl font-bold mb-8">Thống kê & Hoạt động</h3>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 mx-auto mb-3 text-memorial-gold" />
                  <div className="text-3xl font-bold mb-1">127,892</div>
                  <div className="text-sm opacity-90">Lượt thăm viếng năm 2024</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Calendar className="w-12 h-12 mx-auto mb-3 text-memorial-gold" />
                  <div className="text-3xl font-bold mb-1">1,247</div>
                  <div className="text-sm opacity-90">Lịch viếng đã đặt</div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h4 className="text-xl font-semibold mb-3">🕯️ Thăm viếng hôm nay</h4>
              <div className="text-3xl font-bold text-memorial-gold mb-2">342 lượt</div>
              <p className="text-sm opacity-90">Cập nhật lúc 14:30, 16/08/2024</p>
            </div>
          </div>

          {/* Recent events */}
          <div>
            <h4 className="text-2xl font-bold mb-6">Sự kiện tưởng niệm gần nhất</h4>
            
            <div className="space-y-4 mb-6">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-memorial-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-memorial-dark" />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Lễ tưởng niệm 27/7/2024</h5>
                      <p className="text-sm opacity-90 mb-2">
                        Lễ tưởng niệm 45 năm chiến thắng biên giới phía Bắc, 
                        với sự tham gia của 500+ thân nhân liệt sĩ
                      </p>
                      <div className="text-xs text-memorial-gold">27/07/2024</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-memorial-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-memorial-dark" />
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Chương trình tìm mộ liệt sĩ</h5>
                      <p className="text-sm opacity-90 mb-2">
                        Đã xác định được 15 mộ liệt sĩ chưa rõ danh tính, 
                        liên hệ được với 8 gia đình
                      </p>
                      <div className="text-xs text-memorial-gold">15/08/2024</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button variant="gold" className="group">
              <Newspaper className="w-4 h-4 mr-2" />
              Xem tất cả tin tức
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;