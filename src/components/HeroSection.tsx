import { Button } from "@/components/ui/button";
import { Search, Calendar, Heart } from "lucide-react";
import heroImage from "@/assets/hero-cemetery.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            "Không ai bị lãng quên,<br />
            không điều gì bị lãng quên"
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Tri ân các Anh hùng Liệt sĩ đã hy sinh vì Tổ quốc<br />
            Kết nối thân nhân, gìn giữ ký ức lịch sử
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="memorial" size="lg" className="min-w-[200px]">
            <Search className="w-5 h-5 mr-2" />
            Tra cứu mộ liệt sĩ
          </Button>
          <Button variant="gold" size="lg" className="min-w-[200px]">
            <Calendar className="w-5 h-5 mr-2" />
            Đặt lịch viếng
          </Button>
        </div>

        {/* Memorial quote */}
        <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
          <Heart className="w-8 h-8 mx-auto mb-3 text-memorial-gold" />
          <p className="text-lg italic">
            "Tổ quốc ghi công, nhân dân ghi ơn những người con ưu tú đã anh dũng hy sinh 
            vì độc lập, tự do của dân tộc, vì hạnh phúc của nhân dân"
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;