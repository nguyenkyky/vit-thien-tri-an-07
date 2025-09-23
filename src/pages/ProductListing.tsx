import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, ShoppingBag } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductListing = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // Sample product data
  const products: Product[] = [
    {
      id: 1,
      name: "Hoa cúc trắng",
      price: 150000,
      image: "/placeholder.svg",
      category: "Hoa tươi"
    },
    {
      id: 2,
      name: "Nến thờ cao cấp",
      price: 80000,
      image: "/placeholder.svg",
      category: "Đồ thờ"
    },
    {
      id: 3,
      name: "Hương thơm truyền thống",
      price: 120000,
      image: "/placeholder.svg",
      category: "Đồ thờ"
    },
    {
      id: 4,
      name: "Hoa hồng đỏ",
      price: 200000,
      image: "/placeholder.svg",
      category: "Hoa tươi"
    },
    {
      id: 5,
      name: "Bánh kẹo cúng",
      price: 100000,
      image: "/placeholder.svg",
      category: "Thực phẩm"
    },
    {
      id: 6,
      name: "Trái cây cúng",
      price: 180000,
      image: "/placeholder.svg",
      category: "Thực phẩm"
    }
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-memorial-cream/30 to-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ShoppingBag className="w-8 h-8 text-memorial-red" />
            <h1 className="text-4xl font-bold text-memorial-dark">Đặt đồ lễ</h1>
          </div>
          <p className="text-memorial-gray text-lg max-w-2xl mx-auto">
            Đặt mua các sản phẩm dâng lễ, hoa tươi và đồ thờ cúng để thể hiện lòng thành kính
          </p>
        </div>

        {/* Search section */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-memorial-gray w-5 h-5" />
            <Input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 bg-white border-memorial-gold/30 focus:border-memorial-red shadow-memorial"
            />
          </div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="group cursor-pointer hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1 border-memorial-gold/20 bg-white"
              onClick={() => handleProductClick(product.id)}
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-memorial-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <div className="mb-2">
                    <span className="text-xs text-memorial-gray bg-memorial-cream px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-memorial-dark mb-2 group-hover:text-memorial-red transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-memorial-red">
                      {formatPrice(product.price)}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-memorial-gold/20 flex items-center justify-center group-hover:bg-memorial-gold transition-colors">
                      <ShoppingBag className="w-4 h-4 text-memorial-dark" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <ShoppingBag className="w-16 h-16 text-memorial-gray mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-memorial-dark mb-2">
              Không tìm thấy sản phẩm
            </h3>
            <p className="text-memorial-gray">
              Thử tìm kiếm với từ khóa khác
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProductListing;