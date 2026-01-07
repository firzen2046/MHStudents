import React, { useState, useMemo } from 'react';
import { Search, Filter, SortAsc, MapPin, Star, ExternalLink, GraduationCap } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";

// 扩充的大学数据库
const universities = [
  // 一本大学
  { name: "北京大學", tier: "一本", province: "北京", ranking: 1, type: "综合", dseMin: "3-3-3-3", image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400" },
  { name: "清華大學", tier: "一本", province: "北京", ranking: 2, type: "理工", dseMin: "3-3-3-3", image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400" },
  { name: "復旦大學", tier: "一本", province: "上海", ranking: 3, type: "综合", dseMin: "3-3-2-2", image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400" },
  { name: "浙江大學", tier: "一本", province: "浙江", ranking: 4, type: "综合", dseMin: "3-3-2-2", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400" },
  { name: "上海交通大學", tier: "一本", province: "上海", ranking: 5, type: "理工", dseMin: "3-3-2-2", image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=400" },
  { name: "中國科學技術大學", tier: "一本", province: "安徽", ranking: 6, type: "理工", dseMin: "3-2-2-2", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400" },
  { name: "南京大學", tier: "一本", province: "江蘇", ranking: 7, type: "综合", dseMin: "3-2-2-2", image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400" },
  { name: "武漢大學", tier: "一本", province: "湖北", ranking: 8, type: "综合", dseMin: "2-2-2-2", image: "https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=400" },
  { name: "中山大學", tier: "一本", province: "廣東", ranking: 9, type: "综合", dseMin: "2-2-2-2", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400" },
  { name: "華中科技大學", tier: "一本", province: "湖北", ranking: 10, type: "理工", dseMin: "2-2-2-2", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400" },
  { name: "同濟大學", tier: "一本", province: "上海", ranking: 11, type: "理工", dseMin: "2-2-2-2", image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400" },
  { name: "北京師範大學", tier: "一本", province: "北京", ranking: 12, type: "师范", dseMin: "2-2-2-2", image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400" },
  { name: "南開大學", tier: "一本", province: "天津", ranking: 13, type: "综合", dseMin: "2-2-2-2", image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400" },
  { name: "天津大學", tier: "一本", province: "天津", ranking: 14, type: "理工", dseMin: "2-2-2-2", image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400" },
  { name: "西安交通大學", tier: "一本", province: "陝西", ranking: 15, type: "理工", dseMin: "2-2-2-2", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400" },
  { name: "哈爾濱工業大學", tier: "一本", province: "黑龍江", ranking: 16, type: "理工", dseMin: "2-2-2-2", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400" },
  { name: "四川大學", tier: "一本", province: "四川", ranking: 17, type: "综合", dseMin: "2-2-2-2", image: "https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=400" },
  { name: "中國人民大學", tier: "一本", province: "北京", ranking: 18, type: "文法", dseMin: "2-2-2-2", image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400" },
  { name: "北京航空航天大學", tier: "一本", province: "北京", ranking: 19, type: "理工", dseMin: "2-2-2-2", image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400" },
  { name: "廈門大學", tier: "一本", province: "福建", ranking: 20, type: "综合", dseMin: "2-2-2-2", image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400" },
  
  // 二本大学（优质）
  { name: "暨南大學", tier: "二本", province: "廣東", ranking: 53, type: "综合", dseMin: "2-2-1-1", image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400" },
  { name: "華南理工大學", tier: "二本", province: "廣東", ranking: 25, type: "理工", dseMin: "2-2-2-2", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400" },
  { name: "深圳大學", tier: "二本", province: "廣東", ranking: 70, type: "综合", dseMin: "2-2-1-1", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400" },
  { name: "華僑大學", tier: "二本", province: "福建", ranking: 100, type: "综合", dseMin: "2-1-1-1", image: "https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=400" },
  { name: "廣東外語外貿大學", tier: "二本", province: "廣東", ranking: 110, type: "语言", dseMin: "2-2-1-1", image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400" },
  { name: "北京語言大學", tier: "二本", province: "北京", ranking: 120, type: "语言", dseMin: "2-2-1-1", image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400" },
  { name: "華南師範大學", tier: "二本", province: "廣東", ranking: 75, type: "师范", dseMin: "2-2-1-1", image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400" },
  { name: "廣州大學", tier: "二本", province: "廣東", ranking: 145, type: "综合", dseMin: "2-1-1-1", image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400" },
  { name: "集美大學", tier: "二本", province: "福建", ranking: 207, type: "综合", dseMin: "1-1-1-1", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400" },
  { name: "廣東海洋大學", tier: "二本", province: "廣東", ranking: 234, type: "农林", dseMin: "1-1-1-1", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400" },
  { name: "北京聯合大學", tier: "二本", province: "北京", ranking: 250, type: "综合", dseMin: "1-1-1-1", image: "https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=400" },
  { name: "上海師範大學", tier: "二本", province: "上海", ranking: 111, type: "师范", dseMin: "2-1-1-1", image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400" },
  { name: "浙江工業大學", tier: "二本", province: "浙江", ranking: 85, type: "理工", dseMin: "2-2-1-1", image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400" },
  { name: "南京師範大學", tier: "二本", province: "江蘇", ranking: 40, type: "师范", dseMin: "2-2-2-2", image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400" },
  { name: "蘇州大學", tier: "二本", province: "江蘇", ranking: 42, type: "综合", dseMin: "2-2-2-2", image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400" },
  { name: "湖南師範大學", tier: "二本", province: "湖南", ranking: 52, type: "师范", dseMin: "2-2-1-1", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400" },
  { name: "福建師範大學", tier: "二本", province: "福建", ranking: 106, type: "师范", dseMin: "2-1-1-1", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400" },
  { name: "雲南大學", tier: "二本", province: "雲南", ranking: 65, type: "综合", dseMin: "2-2-1-1", image: "https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=400" },
  { name: "寧波大學", tier: "二本", province: "浙江", ranking: 75, type: "综合", dseMin: "2-2-1-1", image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400" },
  { name: "揚州大學", tier: "二本", province: "江蘇", ranking: 89, type: "综合", dseMin: "2-1-1-1", image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400" },
];

const provinces = ["全部", "北京", "上海", "廣東", "江蘇", "浙江", "福建", "湖北", "四川", "陝西", "天津", "安徽", "湖南", "雲南", "黑龍江"];
const types = ["全部", "综合", "理工", "师范", "语言", "文法", "农林"];

export default function MainlandUniDatabase() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("全部");
  const [selectedTier, setSelectedTier] = useState("全部");
  const [selectedType, setSelectedType] = useState("全部");
  const [sortBy, setSortBy] = useState("ranking");

  const filteredAndSortedUnis = useMemo(() => {
    let filtered = universities.filter(uni => {
      const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesProvince = selectedProvince === "全部" || uni.province === selectedProvince;
      const matchesTier = selectedTier === "全部" || uni.tier === selectedTier;
      const matchesType = selectedType === "全部" || uni.type === selectedType;
      return matchesSearch && matchesProvince && matchesTier && matchesType;
    });

    filtered.sort((a, b) => {
      if (sortBy === "ranking") return a.ranking - b.ranking;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "province") return a.province.localeCompare(b.province);
      return 0;
    });

    return filtered;
  }, [searchTerm, selectedProvince, selectedTier, selectedType, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-rose-600 via-rose-700 to-pink-700 py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-rose-200 font-medium mb-4 block">升學指南</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">內地大學數據庫</h1>
            <p className="text-xl text-rose-100 max-w-2xl mx-auto">
              收錄逾{universities.length}所內地大學資料，助你找到理想學府
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="搜尋大學名稱..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Province Filter */}
            <Select value={selectedProvince} onValueChange={setSelectedProvince}>
              <SelectTrigger>
                <SelectValue placeholder="省份" />
              </SelectTrigger>
              <SelectContent>
                {provinces.map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}
              </SelectContent>
            </Select>

            {/* Tier Filter */}
            <Select value={selectedTier} onValueChange={setSelectedTier}>
              <SelectTrigger>
                <SelectValue placeholder="批次" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="全部">全部批次</SelectItem>
                <SelectItem value="一本">一本</SelectItem>
                <SelectItem value="二本">二本</SelectItem>
              </SelectContent>
            </Select>

            {/* Type Filter */}
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="類型" />
              </SelectTrigger>
              <SelectContent>
                {types.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between mt-4 pt-4 border-t">
            <p className="text-sm text-gray-600">
              找到 <span className="font-bold text-rose-600">{filteredAndSortedUnis.length}</span> 所大學
            </p>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SortAsc className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ranking">按排名</SelectItem>
                <SelectItem value="name">按名稱</SelectItem>
                <SelectItem value="province">按省份</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Universities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedUnis.map((uni, index) => (
            <motion.div
              key={uni.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all h-full">
                <div className="h-48 overflow-hidden">
                  <img src={uni.image} alt={uni.name} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{uni.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin className="w-4 h-4" />
                        {uni.province}
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        uni.tier === "一本" 
                          ? "bg-red-100 text-red-700" 
                          : "bg-blue-100 text-blue-700"
                      }`}>
                        {uni.tier}
                      </span>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-center">
                        {uni.type}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">全國排名</span>
                      <span className="font-semibold text-rose-600">#{uni.ranking}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">DSE最低要求</span>
                      <span className="font-semibold text-gray-900">{uni.dseMin}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-amber-500">
                    {[...Array(uni.tier === "一本" ? 5 : 4)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredAndSortedUnis.length === 0 && (
          <div className="text-center py-12">
            <GraduationCap className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">未找到符合條件的大學</p>
          </div>
        )}
      </div>
    </div>
  );
}