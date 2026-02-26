import React, { useRef } from 'react';
import AqionFloLogoIcon from "./AqionFloLogoIcon";
import { Check, ArrowRight, Zap, Shield, Clock } from 'lucide-react';

const DashboardShowcase = () => {

  const highlights = [
    { icon: <Zap size={18} />, text: 'Real-time data synchronization' },
    { icon: <Shield size={18} />, text: 'Bank-grade security' },
    { icon: <Clock size={18} />, text: '99.9% uptime guarantee' },
  ];

  const features = [
    'Interactive charts with drill-down capabilities',
    'Customizable widgets and layouts',
    'Role-based access control',
    'Mobile-responsive design',
    'Dark and light mode support',
    'One-click report generation'
  ];

  return (
    <section
      id="showcase"
      className="relative py-24 lg:py-32 bg-[#070B14] overflow-hidden"
      style={{ zIndex: 30 }}
    >
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#818cf8]/5 to-transparent pointer-events-none" />

      <div className="relative w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Content */}
            <div>
              <div className="eyebrow">The Operating System for Modern Business</div>
              <h2 className="headline mb-6">
                Your Command Center. <br />
                <span className="text-gradient">Reimagined.</span>
              </h2>
              <p className="body-text mb-8">
                The AqionFlo dashboard aggregates millions of data points into immediate intelligence.
                Financial health, liquidity, receivables, and obligations—all in one unified view.
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-4 mb-8">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#818cf8]/10 border border-[#818cf8]/20"
                  >
                    <span className="text-[#818cf8]">{item.icon}</span>
                    <span className="text-[#F4F7FF] text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={() => {
                  const el = document.querySelector('#cta');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary inline-flex items-center justify-center text-center"
              >
                See it in action
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Right - Dashboard Preview */}
            <div ref={dashboardRef} className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#818cf8]/20 to-[#3B82F6]/20 rounded-3xl blur-2xl opacity-50" />

              {/* Dashboard Frame */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
                {/* Browser Chrome */}
                <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white rounded-md px-3 py-1 text-xs text-gray-500 text-center">
                      app.aqionflo.io
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 bg-gray-50">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <AqionFloLogoIcon className="w-8 h-8" />
                      <span className="text-gray-800 font-semibold">AqionFlo</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-200" />
                      <div className="w-8 h-8 rounded-full bg-gray-200" />
                    </div>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <div className="text-xs text-gray-500 mb-1">Total Revenue</div>
                      <div className="text-xl font-bold text-gray-800">$1.2M</div>
                      <div className="text-xs text-green-500 mt-1">+12.5%</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <div className="text-xs text-gray-500 mb-1">Active Orders</div>
                      <div className="text-xl font-bold text-gray-800">248</div>
                      <div className="text-xs text-green-500 mt-1">+8.2%</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <div className="text-xs text-gray-500 mb-1">Inventory Value</div>
                      <div className="text-xl font-bold text-gray-800">$840K</div>
                      <div className="text-xs text-amber-500 mt-1">-2.1%</div>
                    </div>
                  </div>

                  {/* Chart Placeholder */}
                  <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-gray-700">Revenue Overview</span>
                      <div className="flex gap-2">
                        <span className="text-xs px-2 py-1 bg-gray-100 rounded">Monthly</span>
                      </div>
                    </div>
                    <div className="h-32 flex items-end gap-2">
                      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-[#818cf8] to-[#818cf8]/50 rounded-t"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-gray-400">
                      <span>Jan</span>
                      <span>Dec</span>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <span className="text-sm font-medium text-gray-700">Recent Activity</span>
                    <div className="mt-3 space-y-3">
                      {[
                        { text: 'New order #1024 from Acme Corp', time: '2 min ago', color: 'bg-green-100 text-green-600' },
                        { text: 'Payment received $5,200', time: '15 min ago', color: 'bg-blue-100 text-blue-600' },
                        { text: 'Low stock alert: Item A-123', time: '1 hour ago', color: 'bg-amber-100 text-amber-600' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${item.color.split(' ')[0]}`} />
                          <span className="text-sm text-gray-600 flex-1">{item.text}</span>
                          <span className="text-xs text-gray-400">{item.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div ref={featuresRef} className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="feature-item flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#818cf8]/20 flex items-center justify-center flex-shrink-0">
                  <Check size={14} className="text-[#818cf8]" />
                </div>
                <span className="text-[#A7B1C8]">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcase;
