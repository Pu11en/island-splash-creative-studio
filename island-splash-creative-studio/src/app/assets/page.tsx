'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Image, Trash2, Download, Search, FolderPlus } from 'lucide-react';

const assets = [
  { id: 1, name: 'Logo White.png', type: 'logo', size: '24 KB', preview: '🎨' },
  { id: 2, name: 'Logo Dark.png', type: 'logo', size: '22 KB', preview: '🎨' },
  { id: 3, name: 'Product Can.png', type: 'product', size: '156 KB', preview: '🥫' },
  { id: 4, name: 'Beach Background.jpg', type: 'background', size: '2.4 MB', preview: '🏖️' },
  { id: 5, name: 'Palm Trees.png', type: 'background', size: '890 KB', preview: '🌴' },
  { id: 6, name: 'Sunset Gradient.jpg', type: 'background', size: '1.2 MB', preview: '🌅' },
];

const types = ['all', 'logo', 'product', 'background'];

export default function AssetsPage() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = assets.filter(a => {
    const matchesFilter = filter === 'all' || a.type === filter;
    const matchesSearch = a.name.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold mb-2">Asset Library 📁</h2>
        <p className="text-gray-600">Upload and manage your brand assets</p>
      </motion.div>

      {/* Upload Area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="border-2 border-dashed border-lime-300 rounded-2xl p-8 text-center bg-lime-50/50 hover:bg-lime-50 transition-colors cursor-pointer"
      >
        <Upload className="mx-auto text-lime-500 mb-4" size={48} />
        <p className="text-lg font-semibold text-gray-700">Drop files here or click to upload</p>
        <p className="text-gray-500 mt-1">PNG, JPG, SVG up to 10MB each</p>
      </motion.div>

      {/* Filters & Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap gap-4 items-center"
      >
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search assets..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-lime-400 focus:ring-2 focus:ring-lime-100 transition-all"
          />
        </div>

        <div className="flex gap-2">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-4 py-2 rounded-full font-medium capitalize transition-all ${
                filter === t
                  ? 'bg-lime-500 text-white'
                  : 'bg-white border border-gray-200 hover:border-gray-300'
              }`}
            >
              {t === 'all' ? 'All' : t}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filtered.map((asset, i) => (
          <motion.div
            key={asset.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.03 }}
            className="group bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all"
          >
            {/* Preview */}
            <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
              <span className="text-4xl">{asset.preview}</span>
            </div>

            {/* Info */}
            <div className="p-3">
              <p className="font-medium text-sm truncate">{asset.name}</p>
              <p className="text-xs text-gray-400">{asset.size}</p>
            </div>

            {/* Actions (show on hover) */}
            <div className="flex border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="flex-1 p-2 hover:bg-gray-50 text-gray-600">
                <Download size={16} className="mx-auto" />
              </button>
              <button className="flex-1 p-2 hover:bg-red-50 text-red-500">
                <Trash2 size={16} className="mx-auto" />
              </button>
            </div>
          </motion.div>
        ))}

        {/* Add Folder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: filtered.length * 0.03 }}
          className="cursor-pointer"
        >
          <div className="aspect-square rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400 hover:border-lime-300 hover:text-lime-500 transition-colors">
            <FolderPlus size={32} />
            <span className="text-sm mt-2">New Folder</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
