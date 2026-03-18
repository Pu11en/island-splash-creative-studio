'use client';

import { motion } from 'framer-motion';
import { Plus, Image, FolderOpen, Palette, Sparkles } from 'lucide-react';
import Link from 'next/link';

const quickActions = [
  { 
    href: '/create', 
    icon: Plus, 
    label: 'Create New', 
    desc: 'Generate a new creative',
    color: 'bg-lime-500' 
  },
  { 
    href: '/templates', 
    icon: Image, 
    label: 'Browse Templates', 
    desc: 'Pick a pre-made design',
    color: 'bg-turquoise-500' 
  },
  { 
    href: '/assets', 
    icon: FolderOpen, 
    label: 'Manage Assets', 
    desc: 'Upload & organize files',
    color: 'bg-orange-500' 
  },
  { 
    href: '/brand', 
    icon: Palette, 
    label: 'Brand Settings', 
    desc: 'Colors, logos & more',
    color: 'bg-pink-500' 
  },
];

const recentProjects = [
  { name: 'Summer Sunset Post', platform: 'Instagram', date: '2 hours ago' },
  { name: 'Mojito Reel', platform: 'TikTok', date: 'Yesterday' },
  { name: 'Beach Party Story', platform: 'Instagram', date: '3 days ago' },
];

export default function HomePage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-8"
      >
        <h2 className="text-4xl font-bold mb-2">
          Welcome to <span className="text-lime-600">Island Splash</span> 🌴
        </h2>
        <p className="text-gray-600 text-lg">
          Create stunning social media content for your tropical brand
        </p>
      </motion.div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickActions.map((action, i) => {
          const Icon = action.icon;
          return (
            <motion.div
              key={action.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={action.href}
                className="block p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all group"
              >
                <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-1">{action.label}</h3>
                <p className="text-sm text-gray-500">{action.desc}</p>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Recent Projects */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
      >
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="text-lime-500" size={20} />
          <h3 className="text-xl font-semibold">Recent Projects</h3>
        </div>
        <div className="space-y-3">
          {recentProjects.map((project, i) => (
            <div 
              key={i}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div>
                <p className="font-medium">{project.name}</p>
                <p className="text-sm text-gray-500">{project.platform}</p>
              </div>
              <span className="text-sm text-gray-400">{project.date}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Tips */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-lime-50 to-turquoise-50 rounded-2xl p-6 border border-lime-100"
      >
        <h3 className="font-semibold text-lg mb-2">💡 Pro Tip</h3>
        <p className="text-gray-600">
          Use the <strong>Tropical Sunset</strong> template for maximum engagement! 
          Posts with warm colors get 32% more saves on Instagram.
        </p>
      </motion.div>
    </div>
  );
}
