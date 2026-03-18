'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Wand2, Upload, Instagram, Video, Facebook, Download, Copy } from 'lucide-react';

const platforms = [
  { id: 'instagram', icon: Instagram, label: 'Instagram' },
  { id: 'tiktok', icon: Video, label: 'TikTok' },
  { id: 'facebook', icon: Facebook, label: 'Facebook' },
];

const aspects = [
  { id: '9:16', label: 'Story/Reel', icon: '📱' },
  { id: '1:1', label: 'Square', icon: '⬜' },
  { id: '16:9', label: 'Landscape', icon: '🖥️' },
];

const styles = [
  { id: 'tropical', label: 'Tropical', color: 'bg-green-500' },
  { id: 'minimal', label: 'Minimal', color: 'bg-gray-500' },
  { id: 'bold', label: 'Bold', color: 'bg-orange-500' },
  { id: 'party', label: 'Party', color: 'bg-pink-500' },
];

export default function CreatePage() {
  const [prompt, setPrompt] = useState('');
  const [platform, setPlatform] = useState('instagram');
  const [aspect, setAspect] = useState('9:16');
  const [style, setStyle] = useState('tropical');
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    if (prompt.trim()) {
      setGenerated(true);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold mb-2">Create New Creative ✨</h2>
        <p className="text-gray-600">Describe what you want and let AI do the magic</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Prompt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
          >
            <label className="block font-semibold mb-3">Describe your creative</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="A tropical beach sunset with palm trees, crystal clear turquoise water, cold beverage can with condensation, golden hour lighting..."
              className="w-full h-40 p-4 rounded-xl border border-gray-200 focus:border-lime-400 focus:ring-2 focus:ring-lime-100 transition-all resize-none"
            />
          </motion.div>

          {/* Reference Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
          >
            <label className="block font-semibold mb-3">Reference Image (optional)</label>
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-lime-400 transition-colors cursor-pointer">
              <Upload className="mx-auto text-gray-400 mb-2" size={32} />
              <p className="text-gray-500">Drop an image or click to upload</p>
              <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 10MB</p>
            </div>
          </motion.div>

          {/* Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-5"
          >
            {/* Platform */}
            <div>
              <label className="block font-semibold mb-3">Platform</label>
              <div className="flex gap-2">
                {platforms.map((p) => {
                  const Icon = p.icon;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setPlatform(p.id)}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 transition-all ${
                        platform === p.id
                          ? 'border-lime-500 bg-lime-50 text-lime-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Icon size={18} />
                      <span className="font-medium">{p.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Aspect Ratio */}
            <div>
              <label className="block font-semibold mb-3">Aspect Ratio</label>
              <div className="flex gap-2">
                {aspects.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => setAspect(a.id)}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 transition-all ${
                      aspect === a.id
                        ? 'border-turquoise-500 bg-turquoise-50 text-turquoise-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <span>{a.icon}</span>
                    <span className="font-medium">{a.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Style */}
            <div>
              <label className="block font-semibold mb-3">Style</label>
              <div className="flex gap-2 flex-wrap">
                {styles.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setStyle(s.id)}
                    className={`px-4 py-2 rounded-full border-2 transition-all ${
                      style === s.id
                        ? 'border-lime-500 bg-lime-50 text-lime-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <span className={`w-3 h-3 rounded-full ${s.color} inline-block mr-2`} />
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Preview Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="sticky top-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Preview</h3>
                <span className="text-sm text-gray-500">{aspect} • {platform}</span>
              </div>

              {/* Canvas */}
              <div 
                className="aspect-[9/16] bg-gradient-to-br from-lime-100 to-turquoise-100 rounded-xl flex items-center justify-center overflow-hidden"
                style={{ aspectRatio: aspect === '9:16' ? '9/16' : aspect === '1:1' ? '1/1' : '16/9' }}
              >
                {generated ? (
                  <div className="text-center p-6">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-xl bg-gradient-to-br from-lime-400 to-turquoise-400 flex items-center justify-center">
                      <span className="text-4xl">🐬</span>
                    </div>
                    <p className="text-gray-600 font-medium">Your creative will appear here!</p>
                    <p className="text-sm text-gray-400 mt-1">Prompt sent to AI generator</p>
                  </div>
                ) : (
                  <div className="text-center p-6">
                    <Wand2 className="mx-auto text-lime-400 mb-4" size={48} />
                    <p className="text-gray-500">Enter a prompt to generate</p>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-4">
                <button
                  onClick={handleGenerate}
                  disabled={!prompt.trim()}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-lime-500 text-white rounded-xl font-semibold hover:bg-lime-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <Wand2 size={20} />
                  Generate
                </button>
                {generated && (
                  <>
                    <button className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors">
                      <Copy size={20} />
                    </button>
                    <button className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors">
                      <Download size={20} />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
