import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious, 
  PaginationEllipsis 
} from "@/components/ui/pagination";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, RotateCcw } from "lucide-react";

interface MartyrData {
  stt: number;
  khu: string;
  lo: string;
  hang: string;
  mo: string;
  hoTen: string;
  namSinh: string;
  nguyenQuan: string;
  nguyenQuanMoi: string;
  donVi: string;
  capBacChucVu: string;
  ngayHySinh: string;
  diaPhuongAnTang: string;
  nguoiDiChuyen: string;
}

const TombSearch = () => {
  const [searchForm, setSearchForm] = useState({
    tenLietSi: "",
    nguyenQuan: "",
    nguyenQuanMoi: "",
    ngaySinh: "",
    donVi: "",
    ngayHySinh: ""
  });

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Sample data
  const sampleData: MartyrData[] = [
    {
      stt: 1,
      khu: "A",
      lo: "01",
      hang: "05",
      mo: "12",
      hoTen: "Nguyễn Văn Thành",
      namSinh: "1960",
      nguyenQuan: "Hà Nội",
      nguyenQuanMoi: "Quận Ba Đình, Hà Nội", 
      donVi: "Trung đoàn 246",
      capBacChucVu: "Trung sĩ",
      ngayHySinh: "15/02/1979",
      diaPhuongAnTang: "",
      nguoiDiChuyen: ""
    },
    {
      stt: 2,
      khu: "A",
      lo: "02",
      hang: "03",
      mo: "08",
      hoTen: "Trần Minh Đức",
      namSinh: "1958",
      nguyenQuan: "Hải Phòng",
      nguyenQuanMoi: "Quận Hồng Bàng, Hải Phòng",
      donVi: "Tiểu đoàn 3, Trung đoàn 246",
      capBacChucVu: "Thiếu úy",
      ngayHySinh: "17/02/1979",
      diaPhuongAnTang: "",
      nguoiDiChuyen: ""
    },
    {
      stt: 3,
      khu: "B",
      lo: "01",
      hang: "02",
      mo: "15",
      hoTen: "Lê Văn Hùng",
      namSinh: "1961",
      nguyenQuan: "Nam Định",
      nguyenQuanMoi: "Huyện Nghĩa Hưng, Nam Định",
      donVi: "Trung đoàn 148",
      capBacChucVu: "Hạ sĩ",
      ngayHySinh: "20/02/1979",
      diaPhuongAnTang: "Nghĩa trang liệt sĩ Nam Định",
      nguoiDiChuyen: "Gia đình"
    },
    {
      stt: 4,
      khu: "B",
      lo: "03",
      hang: "01",
      mo: "07",
      hoTen: "Phạm Quốc Tuấn",
      namSinh: "1959",
      nguyenQuan: "Thái Bình",
      nguyenQuanMoi: "Huyện Kiến Xương, Thái Bình",
      donVi: "Trung đoàn 356",
      capBacChucVu: "Trung úy",
      ngayHySinh: "22/02/1979",
      diaPhuongAnTang: "",
      nguoiDiChuyen: ""
    },
    {
      stt: 5,
      khu: "C",
      lo: "02",
      hang: "04",
      mo: "09",
      hoTen: "Vũ Đình Long",
      namSinh: "1962",
      nguyenQuan: "Bắc Ninh",
      nguyenQuanMoi: "Huyện Yên Phong, Bắc Ninh",
      donVi: "Tiểu đoàn 2, Trung đoàn 148",
      capBacChucVu: "Binh nhất",
      ngayHySinh: "25/02/1979",
      diaPhuongAnTang: "",
      nguoiDiChuyen: ""
    }
  ];

  const [data, setData] = useState<MartyrData[]>(sampleData);

  // Calculate pagination
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handleInputChange = (field: string, value: string) => {
    setSearchForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleReset = () => {
    setSearchForm({
      tenLietSi: "",
      nguyenQuan: "",
      nguyenQuanMoi: "",
      ngaySinh: "",
      donVi: "",
      ngayHySinh: ""
    });
    setData(sampleData);
    setCurrentPage(1);
  };

  const handleSearch = () => {
    // Filter data based on search form
    const filteredData = sampleData.filter(item => {
      const matchName = !searchForm.tenLietSi || 
        item.hoTen.toLowerCase().includes(searchForm.tenLietSi.toLowerCase());
      const matchOriginalPlace = !searchForm.nguyenQuan || 
        item.nguyenQuan.toLowerCase().includes(searchForm.nguyenQuan.toLowerCase());
      const matchNewPlace = !searchForm.nguyenQuanMoi || 
        item.nguyenQuanMoi.toLowerCase().includes(searchForm.nguyenQuanMoi.toLowerCase());
      const matchBirthYear = !searchForm.ngaySinh || 
        item.namSinh.includes(searchForm.ngaySinh);
      const matchUnit = !searchForm.donVi || 
        item.donVi.toLowerCase().includes(searchForm.donVi.toLowerCase());
      const matchSacrificeDate = !searchForm.ngayHySinh || 
        item.ngayHySinh.includes(searchForm.ngayHySinh);

      return matchName && matchOriginalPlace && matchNewPlace && 
             matchBirthYear && matchUnit && matchSacrificeDate;
    });
    
    setData(filteredData);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-memorial-cream to-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-memorial-dark mb-2">
            Tra cứu mộ Liệt sĩ
          </h1>
          <p className="text-memorial-gray">
            Tìm kiếm thông tin mộ liệt sĩ tại Nghĩa trang Liệt sĩ Vị Xuyên
          </p>
        </div>

        {/* Search Form */}
        <Card className="mb-8 border-2 border-memorial-red/20 shadow-[var(--shadow-memorial)] bg-card/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-memorial-dark">Thông tin tìm kiếm</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div className="space-y-2">
                <Label htmlFor="tenLietSi">Tên liệt sĩ</Label>
                <Input
                  id="tenLietSi"
                  value={searchForm.tenLietSi}
                  onChange={(e) => handleInputChange("tenLietSi", e.target.value)}
                  placeholder="Nhập tên liệt sĩ"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nguyenQuan">Nguyên quán</Label>
                <Input
                  id="nguyenQuan"
                  value={searchForm.nguyenQuan}
                  onChange={(e) => handleInputChange("nguyenQuan", e.target.value)}
                  placeholder="Nhập nguyên quán"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nguyenQuanMoi">Nguyên quán (theo nghị quyết mới)</Label>
                <Input
                  id="nguyenQuanMoi"
                  value={searchForm.nguyenQuanMoi}
                  onChange={(e) => handleInputChange("nguyenQuanMoi", e.target.value)}
                  placeholder="Nhập nguyên quán mới"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ngaySinh">Ngày sinh</Label>
                <Input
                  id="ngaySinh"
                  value={searchForm.ngaySinh}
                  onChange={(e) => handleInputChange("ngaySinh", e.target.value)}
                  placeholder="Nhập năm sinh"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="donVi">Đơn vị</Label>
                <Input
                  id="donVi"
                  value={searchForm.donVi}
                  onChange={(e) => handleInputChange("donVi", e.target.value)}
                  placeholder="Nhập đơn vị"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ngayHySinh">Ngày hy sinh</Label>
                <Input
                  id="ngayHySinh"
                  value={searchForm.ngayHySinh}
                  onChange={(e) => handleInputChange("ngayHySinh", e.target.value)}
                  placeholder="Nhập ngày hy sinh"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <Button onClick={handleReset} variant="outline" className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4" />
                Làm mới
              </Button>
              <Button onClick={handleSearch} className="flex items-center gap-2">
                <Search className="w-4 h-4" />
                Tra cứu
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Table */}
        <Card className="border-2 border-memorial-red/20 shadow-[var(--shadow-memorial)] bg-card/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-memorial-dark">
              Kết quả tìm kiếm ({data.length} kết quả)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="w-full">
              <div className="min-w-[1200px]">
                <Table className="border-2 border-memorial-red/30">
                  <TableHeader>
                    <TableRow className="bg-memorial-red/5 border-b-2 border-memorial-red/30">
                      <TableHead rowSpan={2} className="text-center border-r-2 border-memorial-red/30 font-semibold text-memorial-dark">STT</TableHead>
                      <TableHead colSpan={4} className="text-center border-r-2 border-memorial-red/30 font-semibold text-memorial-dark">Vị trí mộ liệt sĩ</TableHead>
                      <TableHead colSpan={7} className="text-center border-r-2 border-memorial-red/30 font-semibold text-memorial-dark">Thông tin về phần mộ</TableHead>
                      <TableHead colSpan={2} className="text-center font-semibold text-memorial-dark">Thông tin về di chuyển hài cốt liệt sĩ</TableHead>
                    </TableRow>
                    <TableRow className="bg-memorial-red/5 border-b-2 border-memorial-red/30">
                      <TableHead className="text-center border-r border-memorial-red/20 font-medium text-memorial-dark">Khu</TableHead>
                      <TableHead className="text-center border-r border-memorial-red/20 font-medium text-memorial-dark">Lô</TableHead>
                      <TableHead className="text-center border-r border-memorial-red/20 font-medium text-memorial-dark">Hàng</TableHead>
                      <TableHead className="text-center border-r-2 border-memorial-red/30 font-medium text-memorial-dark">Mộ</TableHead>
                      <TableHead className="text-center border-r border-memorial-red/20 font-medium text-memorial-dark">Họ tên</TableHead>
                      <TableHead className="text-center border-r border-memorial-red/20 font-medium text-memorial-dark">Năm sinh</TableHead>
                      <TableHead className="text-center border-r border-memorial-red/20 font-medium text-memorial-dark">Nguyên quán</TableHead>
                      <TableHead className="text-center border-r border-memorial-red/20 font-medium text-memorial-dark">Nguyên quán (mới)</TableHead>
                      <TableHead className="text-center border-r border-memorial-red/20 font-medium text-memorial-dark">Đơn vị</TableHead>
                      <TableHead className="text-center border-r border-memorial-red/20 font-medium text-memorial-dark">Cấp bậc, chức vụ</TableHead>
                      <TableHead className="text-center border-r-2 border-memorial-red/30 font-medium text-memorial-dark">Ngày hy sinh</TableHead>
                      <TableHead className="text-center border-r border-memorial-red/20 font-medium text-memorial-dark">Địa phương an táng sau khi di chuyển</TableHead>
                      <TableHead className="text-center font-medium text-memorial-dark">Người di chuyển</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentData.map((item, index) => (
                      <TableRow key={item.stt} className="hover:bg-memorial-cream/50 transition-colors border-b border-memorial-red/10">
                        <TableCell className="text-center border-r-2 border-memorial-red/30 font-medium">{item.stt}</TableCell>
                        <TableCell className="text-center border-r border-memorial-red/20">{item.khu}</TableCell>
                        <TableCell className="text-center border-r border-memorial-red/20">{item.lo}</TableCell>
                        <TableCell className="text-center border-r border-memorial-red/20">{item.hang}</TableCell>
                        <TableCell className="text-center border-r-2 border-memorial-red/30">{item.mo}</TableCell>
                        <TableCell className="font-semibold text-memorial-dark border-r border-memorial-red/20">{item.hoTen}</TableCell>
                        <TableCell className="text-center border-r border-memorial-red/20">{item.namSinh}</TableCell>
                        <TableCell className="border-r border-memorial-red/20">{item.nguyenQuan}</TableCell>
                        <TableCell className="border-r border-memorial-red/20">{item.nguyenQuanMoi}</TableCell>
                        <TableCell className="border-r border-memorial-red/20">{item.donVi}</TableCell>
                        <TableCell className="text-center border-r border-memorial-red/20">{item.capBacChucVu}</TableCell>
                        <TableCell className="text-center border-r-2 border-memorial-red/30">{item.ngayHySinh}</TableCell>
                        <TableCell className="border-r border-memorial-red/20">{item.diaPhuongAnTang || "—"}</TableCell>
                        <TableCell>{item.nguoiDiChuyen || "—"}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </ScrollArea>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-6 flex justify-center">
                <Pagination>
                  <PaginationContent>
                    {currentPage > 1 && (
                      <PaginationItem>
                        <PaginationPrevious 
                          onClick={() => handlePageChange(currentPage - 1)}
                          className="cursor-pointer hover:bg-memorial-cream/70"
                        />
                      </PaginationItem>
                    )}
                    
                    {/* Show first page */}
                    {currentPage > 3 && (
                      <>
                        <PaginationItem>
                          <PaginationLink
                            onClick={() => handlePageChange(1)}
                            className="cursor-pointer hover:bg-memorial-cream/70"
                          >
                            1
                          </PaginationLink>
                        </PaginationItem>
                        {currentPage > 4 && (
                          <PaginationItem>
                            <PaginationEllipsis />
                          </PaginationItem>
                        )}
                      </>
                    )}
                    
                    {/* Show current page and surrounding pages */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                      .filter(page => 
                        page >= Math.max(1, currentPage - 2) && 
                        page <= Math.min(totalPages, currentPage + 2)
                      )
                      .map(page => (
                        <PaginationItem key={page}>
                          <PaginationLink
                            onClick={() => handlePageChange(page)}
                            isActive={page === currentPage}
                            className="cursor-pointer hover:bg-memorial-cream/70"
                          >
                            {page}
                          </PaginationLink>
                        </PaginationItem>
                      ))
                    }
                    
                    {/* Show last page */}
                    {currentPage < totalPages - 2 && (
                      <>
                        {currentPage < totalPages - 3 && (
                          <PaginationItem>
                            <PaginationEllipsis />
                          </PaginationItem>
                        )}
                        <PaginationItem>
                          <PaginationLink
                            onClick={() => handlePageChange(totalPages)}
                            className="cursor-pointer hover:bg-memorial-cream/70"
                          >
                            {totalPages}
                          </PaginationLink>
                        </PaginationItem>
                      </>
                    )}
                    
                    {currentPage < totalPages && (
                      <PaginationItem>
                        <PaginationNext 
                          onClick={() => handlePageChange(currentPage + 1)}
                          className="cursor-pointer hover:bg-memorial-cream/70"
                        />
                      </PaginationItem>
                    )}
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default TombSearch;