import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ShoppingCart, ShoppingBag, Plus, Minus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  categories: string[];
}

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [quantity, setQuantity] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Sample product data - in real app this would come from API
  const products: Product[] = [
    {
      id: 1,
      name: "Hoa cúc trắng",
      price: 150000,
      image: "/placeholder.svg",
      category: "Hoa tươi",
      description: "Hoa cúc trắng tươi, biểu tượng của sự thuần khiết và lòng thành kính. Được chăm sóc kỹ lưỡng, phù hợp cho các dịp trang trọng và thể hiện lòng tôn kính với các Anh hùng Liệt sĩ.",
      categories: ["Bó nhỏ (10 bông)", "Bó vừa (20 bông)", "Bó lớn (30 bông)"]
    },
    {
      id: 2,
      name: "Nến thờ cao cấp",
      price: 80000,
      image: "/placeholder.svg",
      category: "Đồ thờ",
      description: "Nến thờ cao cấp được làm từ sáp ong thiên nhiên, cháy lâu và không khói. Thích hợp để thắp hương trong các buổi lễ tưởng niệm và bày tỏ lòng tôn kính.",
      categories: ["Nến nhỏ (15cm)", "Nến vừa (20cm)", "Nến lớn (25cm)"]
    },
    {
      id: 3,
      name: "Hương thơm truyền thống",
      price: 120000,
      image: "/placeholder.svg",
      category: "Đồ thờ",
      description: "Hương truyền thống với hương thơm nhẹ nhàng, thanh tịnh. Được chế tác theo công thức cổ truyền, mang lại không gian linh thiêng và trang nghiêm.",
      categories: ["Hộp 50 que", "Hộp 100 que", "Hộp 200 que"]
    }
  ];

  const product = products.find(p => p.id === parseInt(id || "1"));

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-memorial-cream/30 to-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-memorial-dark mb-4">
              Không tìm thấy sản phẩm
            </h1>
            <Button onClick={() => navigate("/products")} variant="memorial">
              Quay lại danh sách sản phẩm
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const totalPrice = product.price * quantity;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const handleAddToCart = () => {
    toast({
      title: "Đã thêm vào giỏ hàng",
      description: `${product.name} đã được thêm vào giỏ hàng của bạn.`,
    });
  };

  const handleOrderNow = () => {
    toast({
      title: "Đặt hàng thành công",
      description: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-memorial-cream/30 to-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back button */}
        <Button
          variant="ghost"
          onClick={() => navigate("/products")}
          className="mb-6 text-memorial-dark hover:text-memorial-red"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Quay lại danh sách sản phẩm
        </Button>

        {/* Product detail */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left side - Product Image */}
          <div className="space-y-4">
            <Card className="border-memorial-gold/20 shadow-elegant">
              <CardContent className="p-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 lg:h-[500px] object-cover rounded-lg"
                />
              </CardContent>
            </Card>
          </div>

          {/* Right side - Product Details */}
          <div className="space-y-6">
            <div>
              <div className="mb-3">
                <span className="text-sm text-memorial-gray bg-memorial-cream px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
              <h1 className="text-3xl font-bold text-memorial-dark mb-4">
                {product.name}
              </h1>
              <p className="text-memorial-gray text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price */}
            <div className="p-4 bg-gradient-to-br from-memorial-cream to-memorial-cream/80 rounded-lg border border-memorial-gold/20">
              <div className="text-3xl font-bold text-memorial-red">
                {formatPrice(product.price)}
              </div>
              <p className="text-memorial-gray text-sm mt-1">Giá bán lẻ</p>
            </div>

            {/* Category Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-memorial-dark">
                Phân loại *
              </label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-white border-memorial-gold/30 focus:border-memorial-red">
                  <SelectValue placeholder="Chọn phân loại sản phẩm" />
                </SelectTrigger>
                <SelectContent>
                  {product.categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Quantity */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-memorial-dark">
                Số lượng
              </label>
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                  className="border-memorial-gold/30 hover:bg-memorial-cream"
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="text-xl font-semibold text-memorial-dark w-12 text-center">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(1)}
                  className="border-memorial-gold/30 hover:bg-memorial-cream"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Total Price */}
            <div className="p-4 bg-gradient-to-br from-memorial-red/10 to-memorial-red/5 rounded-lg border border-memorial-red/20">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-memorial-dark">
                  Tổng cộng:
                </span>
                <span className="text-2xl font-bold text-memorial-red">
                  {formatPrice(totalPrice)}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleAddToCart}
                variant="outline"
                className="w-full h-12 text-lg border-memorial-red text-memorial-red hover:bg-memorial-red hover:text-white"
                disabled={!selectedCategory}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Thêm vào giỏ hàng
              </Button>
              <Button
                onClick={handleOrderNow}
                variant="memorial"
                className="w-full h-12 text-lg"
                disabled={!selectedCategory}
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Đặt ngay
              </Button>
            </div>

            {!selectedCategory && (
              <p className="text-sm text-memorial-gray text-center">
                Vui lòng chọn phân loại sản phẩm để tiếp tục
              </p>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;