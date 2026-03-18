'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Video, Facebook, Search } from 'lucide-react';

const templates = [
  { 
    id: 1, 
    name: 'Tropical Sunset', 
    platform: 'instagram', 
    aspect: '9:16',
    preview: '🌅'
  },
  { 
    id: 2, 
    name: 'Cocktail Pour', 
    platform: 'tiktok', 
    aspect: '9:16',
    preview: '🍹'
  },
  { 
    id: 3, 
    name: 'Beach Vibes', 
    platform: 'instagram', 
    aspect: '1:1',
    preview: '🏖️'
  },
  { 
    id: 4, 
    name: 'Product Shot', 
    platform: 'facebook', 
    aspect: '1:1',
    preview: '🥥'
  },
  { 
    id: 5, 
    name: 'Party Mode', 
    platform: 'tiktok', 
    aspect: '9:16',
    preview: '🎉'
  },
  { 
    id: 6, 
    name: 'Minimal Drink', 
    platform: 'instagram', 
    aspect: '1:1',
    preview: '🍋'
  },
  { 
    id: 7, 
    name: 'Ocean View', 
    platform: 'facebook', 
    aspect: '16:9',
    preview: '🌊'
  },
  { 
    id: 8, 
    name: 'Sunrise Yoga', 
    platform: 'instagram', 
    aspect: '9:16',
    preview: '🧘'
  },
];

const filters = [
  { id: 'all', label: 'All' },
  { id: 'instagram', label: 'Instagram' },
  { id: 'tiktok', label: 'TikTok' },
  { id: 'facebook', label: 'Facebook' },
];

export default function TemplatesPage() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = templates.filter(t => {
    const matchesFilter = filter === 'all' || t.platform === filter;
    const matchesSearch = t.name.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getIcon = (platform: string) => {
    switch (platform) {
      case 'instagram': return Instagram;
      case 'tiktok': return Video;
      case 'facebook': return Facebook;
      default: return Instagram;
    }
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold mb-2">Template Library 📸</h2>
        <p className="text-gray-600">Choose a template to get started quickly</p>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-wrap gap-4 items-center"
      >
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search templates..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-lime-400 focus:ring-2 focus:ring-lime-100 transition-all"
          />
        </div>
        
        <div className="flex gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                filter === f.id
                  ? 'bg-lime-500 text-white'
                  : 'bg-white border border-gray-200 hover:border-gray-300'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((template, i) => {
          const Icon = getIcon(template.platform);
          return (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all">
                {/* Preview */}
                <div className="aspect-[9/16] bg-gradient-to-br from-lime-50 to-turquoise-50 flex items-center justify-center relative">
                  <span className="text-6xl">{template.preview}</span>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="px-6 py-2 bg-white rounded-full font-semibold text-sm">
                      Use Template
                    </button>
                  </div>
                </div>
                
                {/* Info */}
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{template.name}</h3>
                    <Icon size={16} className="text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-500">{template.aspect}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No templates found</p>
          <p className="text-gray-400">Try a different search or filter</p>
        </div>
      )}
    </div>
  );
}
