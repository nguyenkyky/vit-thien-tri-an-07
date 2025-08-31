import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "@/hooks/use-toast";

interface RegistrationData {
  location: string;
  visitorType: string;
  groupName: string;
  leaderName: string;
  phone: string;
  email: string;
  visitDate: Date | undefined;
  numberOfVisitors: string;
}

interface BookedVisit {
  id: number;
  dateTime: string;
  location: string;
  groupName: string;
  leaderName: string;
  numberOfVisitors: number;
}

const VisitRegistration = () => {
  const [formData, setFormData] = useState<RegistrationData>({
    location: "",
    visitorType: "",
    groupName: "",
    leaderName: "",
    phone: "",
    email: "",
    visitDate: undefined,
    numberOfVisitors: "",
  });

  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  // Sample booked visits data
  const [bookedVisits] = useState<BookedVisit[]>([
    {
      id: 1,
      dateTime: "2024-09-05 09:00",
      location: "Nghĩa trang Liệt sĩ Vị Xuyên",
      groupName: "Trường THPT Vị Xuyên",
      leaderName: "Nguyễn Văn A",
      numberOfVisitors: 45
    },
    {
      id: 2,
      dateTime: "2024-09-07 14:00",
      location: "Điểm cao 468",
      groupName: "Đoàn cựu chiến binh",
      leaderName: "Trần Văn B",
      numberOfVisitors: 25
    },
    {
      id: 3,
      dateTime: "2024-09-10 10:30",
      location: "Nghĩa trang Liệt sĩ Vị Xuyên",
      groupName: "Gia đình liệt sĩ Hoàng Văn C",
      leaderName: "Hoàng Thị D",
      numberOfVisitors: 8
    }
  ]);

  const handleInputChange = (field: keyof RegistrationData, value: string | Date | undefined) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleConfirm = () => {
    // Basic validation
    if (!formData.location || !formData.visitorType || !formData.groupName || !formData.leaderName || 
        !formData.phone || !formData.email || !formData.visitDate || !formData.numberOfVisitors) {
      toast({
        title: "Lỗi",
        description: "Vui lòng điền đầy đủ thông tin",
        variant: "destructive"
      });
      return;
    }
    setShowConfirmDialog(true);
  };

  const handleFinalConfirm = () => {
    setShowConfirmDialog(false);
    setShowSuccessDialog(true);
    // Reset form
    setFormData({
      location: "",
      visitorType: "",
      groupName: "",
      leaderName: "",
      phone: "",
      email: "",
      visitDate: undefined,
      numberOfVisitors: "",
    });
  };

  const handleCancel = () => {
    setFormData({
      location: "",
      visitorType: "",
      groupName: "",
      leaderName: "",
      phone: "",
      email: "",
      visitDate: undefined,
      numberOfVisitors: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Đăng Ký Lịch Viếng</h1>
            <p className="text-muted-foreground">Đăng ký lịch viếng nghĩa trang và điểm tưởng niệm</p>
          </div>

          <Tabs defaultValue="register" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="register">Đăng ký lịch viếng</TabsTrigger>
              <TabsTrigger value="booked">Danh sách lịch đã đặt</TabsTrigger>
            </TabsList>

            <TabsContent value="register" className="space-y-6">
              <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-6 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="location">Địa điểm</Label>
                    <Select value={formData.location} onValueChange={(value) => handleInputChange('location', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn địa điểm" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Nghĩa trang Liệt sĩ Vị Xuyên">Nghĩa trang Liệt sĩ Vị Xuyên</SelectItem>
                        <SelectItem value="Điểm cao 468">Điểm cao 468</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="visitorType">Loại đối tượng</Label>
                    <Select value={formData.visitorType} onValueChange={(value) => handleInputChange('visitorType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn loại đối tượng" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Cá nhân">Cá nhân</SelectItem>
                        <SelectItem value="Trường học">Trường học</SelectItem>
                        <SelectItem value="Thân nhân liệt sĩ">Thân nhân liệt sĩ</SelectItem>
                        <SelectItem value="Cựu chiến binh">Cựu chiến binh</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="groupName">Tên cá nhân/ tập thể đăng ký</Label>
                    <Input
                      id="groupName"
                      value={formData.groupName}
                      onChange={(e) => handleInputChange('groupName', e.target.value)}
                      placeholder="Nhập tên cá nhân hoặc tập thể"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="leaderName">Tên trưởng đoàn</Label>
                    <Input
                      id="leaderName"
                      value={formData.leaderName}
                      onChange={(e) => handleInputChange('leaderName', e.target.value)}
                      placeholder="Nhập tên trưởng đoàn"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Số điện thoại liên hệ</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="Nhập số điện thoại"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Nhập địa chỉ email"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Thời gian đăng ký viếng</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !formData.visitDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.visitDate ? format(formData.visitDate, "dd/MM/yyyy") : "Chọn ngày viếng"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={formData.visitDate}
                          onSelect={(date) => handleInputChange('visitDate', date)}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="numberOfVisitors">Số lượng người viếng</Label>
                    <Input
                      id="numberOfVisitors"
                      type="number"
                      value={formData.numberOfVisitors}
                      onChange={(e) => handleInputChange('numberOfVisitors', e.target.value)}
                      placeholder="Nhập số lượng người"
                    />
                  </div>
                </div>

                <div className="flex gap-4 mt-6 justify-center">
                  <Button onClick={handleConfirm} className="px-8">
                    Xác nhận
                  </Button>
                  <Button onClick={handleCancel} variant="outline" className="px-8">
                    Hủy
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="booked">
              <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Danh sách lịch đã đặt</h3>
                <div className="border border-border/50 rounded-md overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead className="text-center border-r border-border/30">STT</TableHead>
                        <TableHead className="border-r border-border/30">Ngày giờ</TableHead>
                        <TableHead className="border-r border-border/30">Địa điểm</TableHead>
                        <TableHead className="border-r border-border/30">Tên cá nhân/ tập thể</TableHead>
                        <TableHead className="border-r border-border/30">Trưởng đoàn</TableHead>
                        <TableHead className="text-center">Số lượng</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {bookedVisits.map((visit, index) => (
                        <TableRow key={visit.id} className="hover:bg-muted/30">
                          <TableCell className="text-center border-r border-border/30">{index + 1}</TableCell>
                          <TableCell className="border-r border-border/30">{visit.dateTime}</TableCell>
                          <TableCell className="border-r border-border/30">{visit.location}</TableCell>
                          <TableCell className="border-r border-border/30">{visit.groupName}</TableCell>
                          <TableCell className="border-r border-border/30">{visit.leaderName}</TableCell>
                          <TableCell className="text-center">{visit.numberOfVisitors}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Xác nhận thông tin đăng ký</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 py-4">
            <div><strong>Địa điểm:</strong> {formData.location}</div>
            <div><strong>Loại đối tượng:</strong> {formData.visitorType}</div>
            <div><strong>Tên đăng ký:</strong> {formData.groupName}</div>
            <div><strong>Trưởng đoàn:</strong> {formData.leaderName}</div>
            <div><strong>Điện thoại:</strong> {formData.phone}</div>
            <div><strong>Email:</strong> {formData.email}</div>
            <div><strong>Ngày viếng:</strong> {formData.visitDate ? format(formData.visitDate, "dd/MM/yyyy") : ""}</div>
            <div><strong>Số lượng:</strong> {formData.numberOfVisitors} người</div>
          </div>
          <DialogFooter>
            <Button onClick={handleFinalConfirm}>Xác nhận</Button>
            <Button onClick={() => setShowConfirmDialog(false)} variant="outline">Chỉnh sửa</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-center">Thành công!</DialogTitle>
          </DialogHeader>
          <div className="text-center py-4">
            <p>Đăng ký lịch viếng thành công. Chúng tôi sẽ liên hệ với bạn sớm nhất.</p>
          </div>
          <DialogFooter>
            <Button onClick={() => setShowSuccessDialog(false)} className="w-full">Đóng</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VisitRegistration;