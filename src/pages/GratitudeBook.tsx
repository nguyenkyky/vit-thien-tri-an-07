import { useState, useEffect, useCallback } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

interface Contributor {
  id: number;
  name: string;
  contribution: string;
  time: string;
  amount?: string;
}

const generateFakeData = (startId: number, count: number): Contributor[] => {
  const names = [
    "Nguyễn Văn An", "Trần Thị Bình", "Lê Văn Cường", "Phạm Thị Dung", 
    "Hoàng Văn Em", "Vũ Thị Phượng", "Đặng Văn Giang", "Bùi Thị Hoa",
    "Ngô Văn Inh", "Đinh Thị Kim", "Tạ Văn Long", "Lý Thị Mai",
    "Dương Văn Nam", "Cao Thị Oanh", "Phan Văn Phúc", "Đỗ Thị Quỳnh"
  ];
  
  const contributions = [
    "Hương trầm", "Nến cúng", "Hoa tươi", "Tiền mặt", "Gạo", "Dầu ăn",
    "Bánh kẹo", "Nước uống", "Khăn lạnh", "Tăm hướng", "Giấy tiền vàng",
    "Trái cây", "Chè cúng", "Bánh chưng", "Hoa đào", "Cờ hoa"
  ];

  const amounts = ["500.000đ", "1.000.000đ", "2.000.000đ", "300.000đ", "750.000đ"];

  return Array.from({ length: count }, (_, i) => ({
    id: startId + i,
    name: names[Math.floor(Math.random() * names.length)],
    contribution: contributions[Math.floor(Math.random() * contributions.length)],
    time: new Date(Date.now() - Math.floor(Math.random() * 30 * 24 * 60 * 60 * 1000)).toLocaleDateString('vi-VN'),
    amount: Math.random() > 0.3 ? amounts[Math.floor(Math.random() * amounts.length)] : undefined
  }));
};

const GratitudeBook = () => {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  const loadMoreContributors = useCallback(async () => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newContributors = generateFakeData(page * 20, 20);
    
    setContributors(prev => [...prev, ...newContributors]);
    setPage(prev => prev + 1);
    setLoading(false);
    
    // Stop infinite scroll after 200 items
    if (page >= 9) {
      setHasMore(false);
    }
  }, [loading, hasMore, page]);

  useEffect(() => {
    loadMoreContributors();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop
        >= document.documentElement.offsetHeight - 1000
      ) {
        loadMoreContributors();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMoreContributors]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Sổ Vàng Tri Ân
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tri ân những tấm lòng hảo tâm đã đóng góp, ủng hộ cho công tác chăm sóc 
            và tôn vinh các anh hùng liệt sĩ
          </p>
        </div>

        <div className="grid gap-4 md:gap-6">
          {contributors.map((contributor) => (
            <Card 
              key={contributor.id} 
              className="transition-all duration-300 hover:shadow-lg hover:shadow-primary-glow/20 border-l-4 border-l-primary bg-gradient-to-r from-card/50 to-card"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {contributor.name}
                      </h3>
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        Nhà hảo tâm
                      </Badge>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">Đóng góp:</span>
                        <span className="font-medium text-foreground">{contributor.contribution}</span>
                      </div>
                      
                      {contributor.amount && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">Giá trị:</span>
                          <span className="font-semibold text-primary">{contributor.amount}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <span className="text-sm text-muted-foreground">
                      {contributor.time}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {loading && (
            <div className="space-y-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Card key={i} className="border-l-4 border-l-primary/20">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-3">
                          <Skeleton className="h-6 w-32" />
                          <Skeleton className="h-5 w-20" />
                        </div>
                        <div className="flex gap-6">
                          <Skeleton className="h-4 w-24" />
                          <Skeleton className="h-4 w-20" />
                        </div>
                      </div>
                      <Skeleton className="h-4 w-16" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          
          {!hasMore && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">
                Cảm ơn tất cả các nhà hảo tâm đã đóng góp 🙏
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GratitudeBook;