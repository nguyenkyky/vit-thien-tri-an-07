import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
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
  };

  return (
    <div className="min-h-screen bg-background">
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
        <Card className="mb-8">
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
        <Card>
          <CardHeader>
            <CardTitle className="text-memorial-dark">
              Kết quả tìm kiếm ({data.length} kết quả)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="w-full">
              <div className="min-w-[1200px]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead rowSpan={2} className="text-center border-r">STT</TableHead>
                      <TableHead colSpan={4} className="text-center border-r">Vị trí mộ liệt sĩ</TableHead>
                      <TableHead colSpan={7} className="text-center border-r">Thông tin về phần mộ</TableHead>
                      <TableHead colSpan={2} className="text-center">Thông tin về di chuyển hài cốt liệt sĩ</TableHead>
                    </TableRow>
                    <TableRow>
                      <TableHead className="text-center">Khu</TableHead>
                      <TableHead className="text-center">Lô</TableHead>
                      <TableHead className="text-center">Hàng</TableHead>
                      <TableHead className="text-center border-r">Mộ</TableHead>
                      <TableHead className="text-center">Họ tên</TableHead>
                      <TableHead className="text-center">Năm sinh</TableHead>
                      <TableHead className="text-center">Nguyên quán</TableHead>
                      <TableHead className="text-center">Nguyên quán (mới)</TableHead>
                      <TableHead className="text-center">Đơn vị</TableHead>
                      <TableHead className="text-center">Cấp bậc, chức vụ</TableHead>
                      <TableHead className="text-center border-r">Ngày hy sinh</TableHead>
                      <TableHead className="text-center">Địa phương an táng sau khi di chuyển</TableHead>
                      <TableHead className="text-center">Người di chuyển</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data.map((item) => (
                      <TableRow key={item.stt}>
                        <TableCell className="text-center border-r">{item.stt}</TableCell>
                        <TableCell className="text-center">{item.khu}</TableCell>
                        <TableCell className="text-center">{item.lo}</TableCell>
                        <TableCell className="text-center">{item.hang}</TableCell>
                        <TableCell className="text-center border-r">{item.mo}</TableCell>
                        <TableCell className="font-medium">{item.hoTen}</TableCell>
                        <TableCell className="text-center">{item.namSinh}</TableCell>
                        <TableCell>{item.nguyenQuan}</TableCell>
                        <TableCell>{item.nguyenQuanMoi}</TableCell>
                        <TableCell>{item.donVi}</TableCell>
                        <TableCell className="text-center">{item.capBacChucVu}</TableCell>
                        <TableCell className="text-center border-r">{item.ngayHySinh}</TableCell>
                        <TableCell>{item.diaPhuongAnTang || "—"}</TableCell>
                        <TableCell>{item.nguoiDiChuyen || "—"}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default TombSearch;