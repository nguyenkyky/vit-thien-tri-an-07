import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Contributor {
  id: number;
  name: string;
  contribution: string;
  time: string;
  amount?: string;
}

const generateFakeData = (count: number): Contributor[] => {
  const names = [
    "Nguyễn Văn An", "Trần Thị Bình", "Lê Văn Cường", "Phạm Thị Dung", 
    "Hoàng Văn Em", "Vũ Thị Phượng", "Đặng Văn Giang", "Bùi Thị Hoa",
    "Ngô Văn Inh", "Đinh Thị Kim", "Tạ Văn Long", "Lý Thị Mai",
    "Dương Văn Nam", "Cao Thị Oanh", "Phan Văn Phúc", "Đỗ Thị Quỳnh",
    "Chu Văn Quân", "Võ Thị Rộ", "Lâm Văn Sơn", "Nguyễn Thị Tâm"
  ];
  
  const contributions = [
    "Hương trầm", "Nến cúng", "Hoa tươi", "Tiền mặt", "Gạo", "Dầu ăn",
    "Bánh kẹo", "Nước uống", "Khăn lạnh", "Tăm hướng", "Giấy tiền vàng",
    "Trái cây", "Chè cúng", "Bánh chưng", "Hoa đào", "Cờ hoa"
  ];

  const amounts = ["500.000đ", "1.000.000đ", "2.000.000đ", "300.000đ", "750.000đ", "1.500.000đ"];

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: names[Math.floor(Math.random() * names.length)],
    contribution: contributions[Math.floor(Math.random() * contributions.length)],
    time: new Date(Date.now() - Math.floor(Math.random() * 90 * 24 * 60 * 60 * 1000)).toLocaleDateString('vi-VN'),
    amount: amounts[Math.floor(Math.random() * amounts.length)]
  }));
};

const GratitudeBook = () => {
  const [contributors] = useState<Contributor[]>(() => generateFakeData(50));
  
  // Duplicate data for seamless loop
  const duplicatedContributors = [...contributors, ...contributors];

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

        <div className="bg-card rounded-lg border shadow-lg overflow-hidden">
          <div className="max-h-[600px] overflow-hidden">
            <Table className="relative">
              <TableHeader className="sticky top-0 bg-primary/10 z-10">
                <TableRow>
                  <TableHead className="w-[60px] text-center font-semibold">STT</TableHead>
                  <TableHead className="font-semibold">Tên nhà hảo tâm</TableHead>
                  <TableHead className="font-semibold">Hiện vật đóng góp</TableHead>
                  <TableHead className="font-semibold">Giá trị</TableHead>
                  <TableHead className="font-semibold">Thời gian</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody 
                className="animate-[scroll_60s_linear_infinite]"
                style={{
                  animation: 'scroll 60s linear infinite'
                }}
              >
                {duplicatedContributors.map((contributor, index) => (
                  <TableRow 
                    key={`${contributor.id}-${index}`}
                    className="hover:bg-primary/5 transition-colors border-b border-border/50"
                  >
                    <TableCell className="text-center font-medium text-muted-foreground">
                      {(index % contributors.length) + 1}
                    </TableCell>
                    <TableCell className="font-semibold text-foreground">
                      {contributor.name}
                    </TableCell>
                    <TableCell className="text-foreground">
                      {contributor.contribution}
                    </TableCell>
                    <TableCell className="font-semibold text-primary">
                      {contributor.amount}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {contributor.time}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="text-center py-4 bg-muted/30 border-t">
            <p className="text-sm text-muted-foreground">
              ✨ Cảm ơn tất cả các nhà hảo tâm đã đóng góp cho công tác chăm sóc liệt sĩ ✨
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GratitudeBook;