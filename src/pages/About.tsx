import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Calendar, Users, Award, Mountain, Flag, Heart, Star } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-memorial-cream via-white to-memorial-cream overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--memorial-gold))_0%,transparent_50%)] opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--memorial-red))_0%,transparent_50%)] opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-memorial-gold/20 px-4 py-2 rounded-full mb-6">
              <Star className="w-5 h-5 text-memorial-red" />
              <span className="text-memorial-dark font-medium">Tri ân các Anh hùng Liệt sĩ</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-memorial-dark mb-6 leading-tight">
              Nghĩa trang Liệt sĩ<br />
              <span className="text-memorial-red">Vị Xuyên</span>
            </h1>
            
            <p className="text-xl text-memorial-gray max-w-3xl mx-auto leading-relaxed">
              Nơi an nghỉ trang nghiêm của các Anh hùng Liệt sĩ đã hy sinh vì độc lập, tự do của Tổ quốc. 
              Mỗi phần mộ là một câu chuyện anh dũng, mỗi tấm bia là một lời tri ân vĩnh cửu.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          
          {/* Overview Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="group hover:shadow-elegant transition-all duration-300 border-memorial-cream/50 hover:border-memorial-gold/30">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-memorial-red to-memorial-red/80 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-memorial-dark">Vị trí địa lý</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-memorial-gray leading-relaxed">
                  Tọa lạc tại Điểm cao 468, xã Vị Xuyên, huyện Vị Xuyên, tỉnh Hà Giang - 
                  nơi có vị trí chiến lược quan trọng trong việc bảo vệ biên giới phía Bắc.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 border-memorial-cream/50 hover:border-memorial-gold/30">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-memorial-gold to-memorial-gold/80 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Calendar className="w-8 h-8 text-memorial-dark" />
                </div>
                <CardTitle className="text-memorial-dark">Lịch sử hình thành</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-memorial-gray leading-relaxed">
                  Được thành lập năm 1979, sau cuộc chiến tranh bảo vệ biên giới phía Bắc, 
                  để tôn vinh và ghi nhớ những anh hùng đã ngã xuống vì Tổ quốc.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 border-memorial-cream/50 hover:border-memorial-gold/30">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-memorial-red to-memorial-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-memorial-dark">Quy mô nghĩa trang</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-memorial-gray leading-relaxed">
                  Là nơi an nghỉ của hàng nghìn liệt sĩ từ khắp các tỉnh thành trên cả nước, 
                  với thiết kế trang trọng, khang trang phù hợp với không gian thiêng liêng.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Mountain className="w-6 h-6 text-memorial-red" />
                  <h2 className="text-3xl font-bold text-memorial-dark">Điểm cao 468</h2>
                </div>
                <p className="text-memorial-gray leading-relaxed mb-6">
                  Nghĩa trang Liệt sĩ Vị Xuyên tọa lạc trên Điểm cao 468 - một vị trí địa lý có ý nghĩa 
                  lịch sử đặc biệt quan trọng. Đây không chỉ là nơi diễn ra những trận chiến oanh liệt 
                  trong cuộc chiến tranh bảo vệ biên giới phía Bắc năm 1979, mà còn là biểu tượng của 
                  tinh thần bất굴, ý chí kiên cường của quân và dân ta.
                </p>
                
                <div className="bg-memorial-cream/50 p-6 rounded-lg border border-memorial-gold/20">
                  <h3 className="font-semibold text-memorial-dark mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-memorial-red" />
                    Ý nghĩa lịch sử
                  </h3>
                  <p className="text-memorial-gray leading-relaxed">
                    Từ độ cao 468m so với mực nước biển, nơi đây đã chứng kiến những hy sinh cao cả 
                    của các chiến sĩ Việt Nam. Mỗi tấm bia mộ đều ghi dấu một cuộc đời anh dũng, 
                    một tấm lòng son sắt với Tổ quốc.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Flag className="w-6 h-6 text-memorial-red" />
                  <h2 className="text-3xl font-bold text-memorial-dark">Sứ mệnh thiêng liêng</h2>
                </div>
                <p className="text-memorial-gray leading-relaxed mb-4">
                  Nghĩa trang không chỉ là nơi an nghỉ của các anh hùng liệt sĩ, mà còn là:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-memorial-red rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-memorial-gray">Trung tâm giáo dục truyền thống yêu nước cho các thế hệ</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-memorial-red rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-memorial-gray">Nơi kết nối tình cảm giữa các gia đình liệt sĩ</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-memorial-red rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-memorial-gray">Biểu tượng của lòng biết ơn của dân tộc</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Content - Image Section */}
            <div className="space-y-6">
              <div className="relative group">
                <div className="aspect-[4/3] bg-gradient-to-br from-memorial-cream via-memorial-gold/20 to-memorial-red/20 rounded-xl overflow-hidden shadow-elegant">
                  <div className="w-full h-full flex items-center justify-center bg-memorial-gray/5">
                    <div className="text-center p-8">
                      <Mountain className="w-16 h-16 text-memorial-red mx-auto mb-4 opacity-60" />
                      <h3 className="text-xl font-semibold text-memorial-dark mb-2">Toàn cảnh nghĩa trang</h3>
                      <p className="text-memorial-gray">Nhìn từ trên cao xuống Điểm cao 468</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-gradient-to-br from-memorial-gold/30 to-memorial-cream rounded-lg overflow-hidden shadow-memorial">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center p-4">
                      <Flag className="w-10 h-10 text-memorial-red mx-auto mb-2 opacity-60" />
                      <p className="text-sm text-memorial-gray">Đài tưởng niệm</p>
                    </div>
                  </div>
                </div>
                
                <div className="aspect-square bg-gradient-to-br from-memorial-red/20 to-memorial-gold/30 rounded-lg overflow-hidden shadow-memorial">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center p-4">
                      <Heart className="w-10 h-10 text-memorial-red mx-auto mb-2 opacity-60" />
                      <p className="text-sm text-memorial-gray">Khu mộ liệt sĩ</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-gradient-to-br from-memorial-gold/10 to-memorial-cream/50 border-memorial-gold/30">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-memorial-red rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-memorial-dark">Thông điệp</h4>
                      <p className="text-sm text-memorial-gray">Lời nhắn gửi đến thế hệ tương lai</p>
                    </div>
                  </div>
                  <blockquote className="text-memorial-dark font-medium italic leading-relaxed">
                    "Không ai bị lãng quên, không điều gì bị lãng quên. Những anh hùng đã ngã xuống 
                    để chúng ta có được hôm nay, và chúng ta sẽ mãi mãi ghi nhớ công ơn ấy."
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Sections */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-memorial-dark mb-4">
                Sứ mệnh và trách nhiệm
              </h2>
              <p className="text-memorial-gray max-w-3xl mx-auto leading-relaxed">
                Nghĩa trang Liệt sĩ Vị Xuyên không chỉ là nơi an nghỉ mà còn là trung tâm kết nối, 
                giáo dục và bảo tồn giá trị truyền thống dân tộc.
              </p>
            </div>

            <div className="space-y-12 mb-16">
              {/* Bảo tồn ký ức lịch sử */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Flag className="w-6 h-6 text-memorial-red" />
                  <h3 className="text-2xl font-bold text-memorial-dark">Bảo tồn ký ức lịch sử</h3>
                </div>
                <p className="text-memorial-gray leading-relaxed mb-4">
                  Lưu giữ và truyền tải những câu chuyện anh hùng, những ký ức thiêng liêng về cuộc chiến bảo vệ biên giới. 
                  Mỗi mộ phần là một trang sử sống động, ghi dấu những khoảnh khắc anh dũng của các chiến sĩ Việt Nam.
                </p>
                <div className="bg-memorial-cream/30 p-5 rounded-lg border border-memorial-gold/20">
                  <p className="text-memorial-gray leading-relaxed">
                    Chúng tôi không ngừng thu thập, sắp xếp và lưu trữ các tài liệu, hình ảnh, kỷ vật liên quan đến 
                    cuộc chiến và các anh hùng liệt sĩ, tạo thành kho tàng tư liệu quý báu cho thế hệ hôm nay và mai sau.
                  </p>
                </div>
              </div>

              {/* Hỗ trợ thân nhân */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-memorial-red" />
                  <h3 className="text-2xl font-bold text-memorial-dark">Hỗ trợ thân nhân</h3>
                </div>
                <p className="text-memorial-gray leading-relaxed mb-4">
                  Đồng hành cùng gia đình liệt sĩ trong việc tìm kiếm thông tin, tổ chức tưởng niệm và duy trì 
                  mối liên hệ tinh thần với người thân đã khuất. Mỗi gia đình đều được quan tâm, hỗ trợ tận tình.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-memorial-red rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-memorial-gray">Hỗ trợ tra cứu thông tin và vị trí mộ liệt sĩ</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-memorial-red rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-memorial-gray">Tổ chức các buổi tưởng niệm theo yêu cầu gia đình</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-memorial-red rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-memorial-gray">Kết nối các gia đình có hoàn cảnh tương tự</span>
                  </li>
                </ul>
              </div>

              {/* Kết nối cộng đồng */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-memorial-red" />
                  <h3 className="text-2xl font-bold text-memorial-dark">Kết nối cộng đồng</h3>
                </div>
                <p className="text-memorial-gray leading-relaxed mb-4">
                  Tạo cầu nối giữa các thế hệ, kết nối người dân khắp nơi trong tinh thần tri ân và tôn vinh 
                  những giá trị cao đẹp của dân tộc. Nghĩa trang là điểm hẹn của tình yêu nước và lòng biết ơn.
                </p>
                <div className="bg-memorial-gold/10 p-5 rounded-lg border border-memorial-gold/30">
                  <p className="text-memorial-gray leading-relaxed">
                    Thông qua các hoạt động tưởng niệm, triển lãm và chương trình giáo dục, chúng tôi góp phần 
                    xây dựng cộng đồng đoàn kết, có trách nhiệm với lịch sử và truyền thống dân tộc.
                  </p>
                </div>
              </div>

              {/* Giáo dục thế hệ trẻ */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-memorial-red" />
                  <h3 className="text-2xl font-bold text-memorial-dark">Giáo dục thế hệ trẻ</h3>
                </div>
                <p className="text-memorial-gray leading-relaxed mb-4">
                  Nuôi dưỡng lòng yêu nước, tự hào dân tộc trong lòng thế hệ trẻ qua những bài học sống 
                  về lòng dũng cảm và tinh thần hy sinh. Mỗi chuyến thăm là một bài học về lòng yêu nước.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-memorial-cream/40 p-4 rounded-lg">
                    <h4 className="font-semibold text-memorial-dark mb-2">Chương trình giáo dục</h4>
                    <p className="text-sm text-memorial-gray">Tổ chức các buổi học ngoại khóa, kể chuyện lịch sử cho học sinh</p>
                  </div>
                  <div className="bg-memorial-cream/40 p-4 rounded-lg">
                    <h4 className="font-semibold text-memorial-dark mb-2">Hoạt động trải nghiệm</h4>
                    <p className="text-sm text-memorial-gray">Các hoạt động thực tế giúp thế hệ trẻ hiểu sâu sắc về lịch sử</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Memorial Section */}
      <section className="py-20 bg-gradient-to-br from-memorial-red/5 via-memorial-cream/30 to-memorial-gold/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--memorial-gold))_0%,transparent_70%)] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Memorial Image Placeholder */}
            <div className="aspect-[16/9] bg-gradient-to-br from-memorial-red/20 via-memorial-cream/50 to-memorial-gold/30 rounded-2xl overflow-hidden shadow-elegant mb-12 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-memorial-dark/60 via-transparent to-transparent"></div>
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-12 relative z-10">
                  <Flag className="w-20 h-20 text-memorial-red mx-auto mb-6 opacity-80" />
                  <h3 className="text-2xl font-bold text-memorial-dark mb-4">Tượng đài tưởng niệm</h3>
                  <p className="text-memorial-gray text-lg">Biểu tượng của lòng tri ân vĩnh cửu</p>
                </div>
              </div>
            </div>

            {/* Memorial Message */}
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-memorial-red leading-tight">
                  Tổ quốc ghi công – Nhân dân đời đời nhớ ơn
                </h2>
                
                <div className="w-24 h-1 bg-gradient-to-r from-memorial-red to-memorial-gold mx-auto rounded-full"></div>
              </div>

              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-lg text-memorial-dark leading-relaxed font-medium">
                  Mỗi nén nhang, mỗi bông hoa, mỗi lời tri ân tại Nghĩa trang Liệt sĩ Vị Xuyên 
                  là minh chứng rằng: sự hy sinh của các anh hùng sẽ không bao giờ bị lãng quên.
                </p>

                <p className="text-memorial-gray leading-relaxed">
                  Chúng ta – những thế hệ hôm nay và mai sau – có trách nhiệm tiếp nối, ghi nhớ và tri ân. 
                  Hãy cùng nhau:
                </p>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-white/50 p-6 rounded-xl border border-memorial-gold/20 backdrop-blur-sm">
                    <div className="w-12 h-12 bg-memorial-red rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-memorial-dark font-medium text-sm leading-relaxed">
                      Thăm viếng, tưởng niệm trực tiếp hoặc trực tuyến
                    </p>
                  </div>

                  <div className="bg-white/50 p-6 rounded-xl border border-memorial-gold/20 backdrop-blur-sm">
                    <div className="w-12 h-12 bg-memorial-gold rounded-full flex items-center justify-center mx-auto mb-4">
                      <Flag className="w-6 h-6 text-memorial-dark" />
                    </div>
                    <p className="text-memorial-dark font-medium text-sm leading-relaxed">
                      Ghi lại, chia sẻ những câu chuyện, kỷ niệm về các anh hùng liệt sĩ
                    </p>
                  </div>

                  <div className="bg-white/50 p-6 rounded-xl border border-memorial-gold/20 backdrop-blur-sm">
                    <div className="w-12 h-12 bg-gradient-to-br from-memorial-red to-memorial-gold rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-memorial-dark font-medium text-sm leading-relaxed">
                      Chung tay xây dựng và lan tỏa tinh thần "Tổ quốc ghi công" đến cộng đồng
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-memorial-cream via-white to-memorial-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-memorial-dark mb-6">
            Cùng tìm hiểu và tri ân
          </h2>
          <p className="text-memorial-gray mb-8 max-w-2xl mx-auto leading-relaxed">
            Hãy cùng chúng tôi tìm hiểu thêm về lịch sử, tham gia các hoạt động tưởng niệm 
            và thể hiện lòng biết ơn đối với các anh hùng liệt sĩ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-memorial-red hover:bg-memorial-red/90 text-white px-8 py-3">
              Tra cứu mộ liệt sĩ
            </Button>
            <Button variant="outline" className="border-memorial-gold text-memorial-dark hover:bg-memorial-gold/10 px-8 py-3">
              Đăng ký viếng thăm
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;