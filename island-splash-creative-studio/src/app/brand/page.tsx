'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Save, Palette, Image, Check } from 'lucide-react';

const defaultColors = {
  primary: '#84CC16',
  secondary: '#14B8A6',
  accent: '#F97316',
};

export default function BrandPage() {
  const [colors, setColors] = useState(defaultColors);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold mb-2">Brand Settings 🎨</h2>
        <p className="text-gray-600">Customize your brand identity</p>
      </motion.div>

      {/* Logo Upload */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
      >
        <div className="flex items-center gap-2 mb-4">
          <Image className="text-lime-500" size={20} />
          <h3 className="font-semibold">Brand Logo</h3>
        </div>

        <div className="flex items-center gap-6">
          {/* Current Logo */}
          <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-lime-400 to-turquoise-400 flex items-center justify-center">
            <span className="text-3xl">🏝️</span>
          </div>

          {/* Upload */}
          <div className="flex-1">
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-4 text-center hover:border-lime-400 transition-colors cursor-pointer">
              <Upload className="mx-auto text-gray-400 mb-2" size={24} />
              <p className="text-sm text-gray-500">Click to upload new logo</p>
              <p className="text-xs text-gray-400">PNG, SVG up to 2MB</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Colors */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
      >
        <div className="flex items-center gap-2 mb-6">
          <Palette className="text-lime-500" size={20} />
          <h3 className="font-semibold">Brand Colors</h3>
        </div>

        <div className="space-y-4">
          {Object.entries(colors).map(([key, value]) => (
            <div key={key} className="flex items-center gap-4">
              <label className="w-28 capitalize text-gray-600">{key}</label>
              <input
                type="color"
                value={value}
                onChange={(e) => setColors({ ...colors, [key]: e.target.value })}
                className="w-12 h-12 rounded-lg border-2 border-gray-200 cursor-pointer"
              />
              <input
                type="text"
                value={value}
                onChange={(e) => setColors({ ...colors, [key]: e.target.value })}
                className="flex-1 px-4 py-2 rounded-lg border border-gray-200 font-mono text-sm"
              />
            </div>
          ))}
        </div>

        {/* Preview */}
        <div className="mt-6 p-4 rounded-xl bg-gray-50">
          <p className="text-sm text-gray-500 mb-3">Preview</p>
          <div className="flex gap-3">
            <div 
              className="flex-1 h-12 rounded-lg flex items-center justify-center text-white font-semibold"
              style={{ backgroundColor: colors.primary }}
            >
              Primary
            </div>
            <div 
              className="flex-1 h-12 rounded-lg flex items-center justify-center text-white font-semibold"
              style={{ backgroundColor: colors.secondary }}
            >
              Secondary
            </div>
            <div 
              className="flex-1 h-12 rounded-lg flex items-center justify-center text-white font-semibold"
              style={{ backgroundColor: colors.accent }}
            >
              Accent
            </div>
          </div>
        </div>
      </motion.div>

      {/* Brand Name */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
      >
        <h3 className="font-semibold mb-4">Brand Name</h3>
        <input
          type="text"
          defaultValue="Island Splash"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-lime-400 focus:ring-2 focus:ring-lime-100 transition-all"
        />
      </motion.div>

      {/* Save Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <button
          onClick={handleSave}
          className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
            saved
              ? 'bg-green-500 text-white'
              : 'bg-lime-500 text-white hover:bg-lime-600'
          }`}
        >
          {saved ? (
            <>
              <Check size={20} />
              Saved!
            </>
          ) : (
            <>
              <Save size={20} />
              Save Brand Settings
            </>
          )}
        </button>
      </motion.div>
    </div>
  );
}
