import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Calendar, Play, Image as ImageIcon, Eye } from "lucide-react";

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  title: string;
}

interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  media: MediaItem[];
}

const mockEvents: Event[] = [
  {
    id: "1",
    title: "Lễ tưởng niệm liệt sĩ 27/7",
    date: "27/07/2024",
    description: "Lễ tưởng niệm các anh hùng liệt sĩ hy sinh vì độc lập tự do của Tổ quốc",
    media: [
      { id: "1", type: "image", url: "/api/placeholder/300/200", title: "Lễ dâng hương" },
      { id: "2", type: "image", url: "/api/placeholder/300/200", title: "Đoàn đại biểu" },
      { id: "3", type: "video", url: "/api/placeholder/300/200", thumbnail: "/api/placeholder/300/200", title: "Toàn cảnh lễ tưởng niệm" },
      { id: "4", type: "image", url: "/api/placeholder/300/200", title: "Khu mộ liệt sĩ" },
      { id: "5", type: "image", url: "/api/placeholder/300/200", title: "Hoa kính tặng" }
    ]
  },
  {
    id: "2", 
    title: "Ngày thương binh liệt sĩ 27/7",
    date: "27/07/2024",
    description: "Chương trình tri ân các anh hùng liệt sĩ và thương binh",
    media: [
      { id: "6", type: "image", url: "/api/placeholder/300/200", title: "Lễ tri ân" },
      { id: "7", type: "video", url: "/api/placeholder/300/200", thumbnail: "/api/placeholder/300/200", title: "Phỏng vấn cựu chiến binh" },
      { id: "8", type: "image", url: "/api/placeholder/300/200", title: "Tặng quà thương binh" },
      { id: "9", type: "image", url: "/api/placeholder/300/200", title: "Hoạt động tình nguyện" }
    ]
  },
  {
    id: "3",
    title: "Lễ an táng liệt sĩ",
    date: "15/05/2024", 
    description: "Lễ an táng hài cốt liệt sĩ vừa được tìm thấy tại chiến trường",
    media: [
      { id: "10", type: "image", url: "/api/placeholder/300/200", title: "Lễ an táng" },
      { id: "11", type: "image", url: "/api/placeholder/300/200", title: "Gia đình liệt sĩ" },
      { id: "12", type: "video", url: "/api/placeholder/300/200", thumbnail: "/api/placeholder/300/200", title: "Nghi thức an táng" },
      { id: "13", type: "image", url: "/api/placeholder/300/200", title: "Khu mộ mới" },
      { id: "14", type: "image", url: "/api/placeholder/300/200", title: "Thắp hương tưởng niệm" },
      { id: "15", type: "image", url: "/api/placeholder/300/200", title: "Lễ viếng" }
    ]
  }
];

export default function FeaturedEvents() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewMore = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const MediaGrid = ({ media, isPreview = false }: { media: MediaItem[], isPreview?: boolean }) => {
    const displayMedia = isPreview ? media.slice(0, 4) : media;
    
    return (
      <div className={`grid gap-2 ${isPreview ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}`}>
        {displayMedia.map((item) => (
          <div key={item.id} className="relative group rounded-lg overflow-hidden border">
            <img
              src={item.type === 'video' ? item.thumbnail : item.url}
              alt={item.title}
              className="w-full h-24 md:h-32 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              {item.type === 'video' ? (
                <Play className="w-6 h-6 text-white" />
              ) : (
                <ImageIcon className="w-6 h-6 text-white" />
              )}
            </div>
            {item.type === 'video' && (
              <Badge variant="secondary" className="absolute top-2 right-2 text-xs">
                Video
              </Badge>
            )}
          </div>
        ))}
        {isPreview && media.length > 4 && (
          <div className="relative rounded-lg overflow-hidden border bg-muted flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <Eye className="w-6 h-6 mx-auto mb-1" />
              <span className="text-xs">+{media.length - 4}</span>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Sự kiện nổi bật</h1>
          <p className="text-muted-foreground">
            Những hoạt động và sự kiện quan trọng tại nghĩa trang liệt sĩ
          </p>
        </div>

        <div className="space-y-8">
          {mockEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                    <div className="flex items-center text-muted-foreground text-sm mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      {event.date}
                    </div>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <MediaGrid media={event.media} isPreview={true} />
                
                <div className="flex justify-center">
                  <Button 
                    variant="outline" 
                    onClick={() => handleViewMore(event)}
                    className="hover:bg-primary hover:text-primary-foreground"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Xem thêm ({event.media.length} ảnh/video)
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {selectedEvent?.title}
            </DialogTitle>
            <p className="text-muted-foreground">{selectedEvent?.description}</p>
          </DialogHeader>
          
          {selectedEvent && (
            <div className="mt-4">
              <MediaGrid media={selectedEvent.media} />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}