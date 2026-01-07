import React, { useState } from 'react';
import { MapPin, Clock, DollarSign, Star, ExternalLink, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

const places = [
  {
    name: "維多利亞港",
    area: "尖沙咀",
    category: "景點",
    description: "世界三大夜景之一，可以在星光大道欣賞對岸港島的璀璨燈火",
    image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=600",
    tips: "每晚8點有「幻彩詠香江」燈光音樂匯演",
    price: "免費",
    rating: 5
  },
  {
    name: "太平山頂",
    area: "中環",
    category: "景點",
    description: "香港最高點，乘坐山頂纜車可欣賞維港兩岸風光",
    image: "https://images.unsplash.com/photo-1506970845246-18f21d533b20?w=600",
    tips: "傍晚時分前往可同時看日落和夜景",
    price: "纜車來回 $88",
    rating: 5
  },
  {
    name: "香港迪士尼樂園",
    area: "大嶼山",
    category: "主題公園",
    description: "全球最小但最精緻的迪士尼樂園，適合一日遊",
    image: "https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=600",
    tips: "平日人較少，可用App預約快速通行",
    price: "$639起",
    rating: 4
  },
  {
    name: "海洋公園",
    area: "黃竹坑",
    category: "主題公園",
    description: "結合海洋生物展覽和機動遊戲的主題公園",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600",
    tips: "纜車和登山電梯都是獨特體驗",
    price: "$498起",
    rating: 4
  },
  {
    name: "旺角女人街",
    area: "旺角",
    category: "購物",
    description: "售賣各種價廉物美的商品，是掃貨好去處",
    image: "https://images.unsplash.com/photo-1513415277900-a62401e19be4?w=600",
    tips: "可以講價，晚上比較熱鬧",
    price: "視乎消費",
    rating: 4
  },
  {
    name: "銅鑼灣時代廣場",
    area: "銅鑼灣",
    category: "購物",
    description: "香港最繁華的購物區之一，品牌齊全",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600",
    tips: "跨年倒數活動地點",
    price: "視乎消費",
    rating: 4
  },
  {
    name: "蘭桂坊",
    area: "中環",
    category: "夜生活",
    description: "香港最著名的酒吧街，夜生活勝地",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600",
    tips: "萬聖節、平安夜特別熱鬧",
    price: "視乎消費",
    rating: 4
  },
  {
    name: "大澳漁村",
    area: "大嶼山",
    category: "文化",
    description: "香港僅存的水上漁村，可以看傳統棚屋",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
    tips: "可以乘小船遊覽，品嚐蝦醬",
    price: "船程約$40",
    rating: 5
  },
  {
    name: "廟街夜市",
    area: "佐敦",
    category: "文化",
    description: "香港最有特色的夜市，有各種街頭美食和表演",
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600",
    tips: "可以找到粵劇表演和算命攤位",
    price: "視乎消費",
    rating: 4
  },
  {
    name: "西貢",
    area: "新界",
    category: "自然",
    description: "香港後花園，有美麗海灘和海鮮街",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
    tips: "可以坐船去橋咀島浮潛",
    price: "船費約$50-100",
    rating: 5
  },
  {
    name: "麥理浩徑",
    area: "新界",
    category: "自然",
    description: "香港最著名的遠足徑，全長100公里",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600",
    tips: "第一、二段風景最美，適合初學者",
    price: "免費",
    rating: 5
  },
  {
    name: "尖沙咀K11 MUSEA",
    area: "尖沙咀",
    category: "購物",
    description: "結合藝術與購物的文化零售新地標",
    image: "https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=600",
    tips: "有很多打卡位和藝術裝置",
    price: "視乎消費",
    rating: 4
  }
];

const categories = ["全部", "景點", "購物", "主題公園", "文化", "自然", "夜生活"];

export default function HKPlaces() {
  const [selectedCategory, setSelectedCategory] = useState("全部");
  const [favorites, setFavorites] = useState([]);

  const filteredPlaces = selectedCategory === "全部"
    ? places
    : places.filter(p => p.category === selectedCategory);

  const toggleFavorite = (name) => {
    setFavorites(prev => 
      prev.includes(name) 
        ? prev.filter(n => n !== name)
        : [...prev, name]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-emerald-200 font-medium mb-4 block">探索香港</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              香港好去處
            </h1>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              發掘香港最值得一遊的景點、美食和活動
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-emerald-500 text-white"
                  : "bg-white text-gray-700 hover:bg-emerald-50 shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Places Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredPlaces.map((place, index) => (
              <motion.div
                key={place.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={place.image} 
                      alt={place.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <button
                        onClick={() => toggleFavorite(place.name)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                          favorites.includes(place.name)
                            ? "bg-red-500 text-white"
                            : "bg-white/80 text-gray-600 hover:bg-white"
                        }`}
                      >
                        <Heart className={`w-5 h-5 ${favorites.includes(place.name) ? "fill-current" : ""}`} />
                      </button>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                        {place.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{place.name}</h3>
                        <div className="flex items-center text-gray-500 text-sm">
                          <MapPin className="w-4 h-4 mr-1" />
                          {place.area}
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(place.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4">{place.description}</p>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-gray-500">
                        <DollarSign className="w-4 h-4" />
                        <span>{place.price}</span>
                      </div>
                      <div className="p-3 bg-emerald-50 rounded-lg">
                        <p className="text-emerald-700 text-sm">
                          💡 {place.tips}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}