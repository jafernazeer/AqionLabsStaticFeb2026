
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Calculator,
  Users,
  Factory,
  FileText,
  BarChart3,
  ArrowRight
} from 'lucide-react';

const ModulesSection = () => {


  const modules = [
    {
      icon: <LayoutDashboard size={28} />,
      title: 'Dashboard',
      description: 'Real-time visibility into financial health, liquidity, and key metrics at a glance.',
      features: ['Financial Health', 'Liquidity Pulse', 'Expense Breakdown'],
      color: '#818cf8'
    },
    {
      icon: <ShoppingCart size={28} />,
      title: 'Sales',
      description: 'Convert opportunity into revenue with zero friction. Track every deal lifecycle.',
      features: ['Pipeline Tracking', 'Quote to Invoice', 'Margin Visibility'],
      color: '#3B82F6'
    },
    {
      icon: <Package size={28} />,
      title: 'Inventory',
      description: 'Manage physical assets with digital precision. Real-time stock valuation.',
      features: ['Stock Control', 'Asset Valuation', 'Low Stock Alerts'],
      color: '#F59E0B'
    },
    {
      icon: <Calculator size={28} />,
      title: 'Accounts',
      description: 'Beyond simple bookkeeping. Visualize liquidity and manage banking obligations.',
      features: ['Cash Flow', 'Cheque Management', 'Expense Tracking'],
      color: '#EF4444'
    },
    {
      icon: <Users size={28} />,
      title: 'HR & Payroll',
      description: 'Centralize lifecycle management from department details to attendance logs.',
      features: ['Employee Profiles', 'Attendance', 'Claims Management'],
      color: '#8B5CF6'
    },
    {
      icon: <Factory size={28} />,
      title: 'Manufacturing',
      description: 'Streamline production with BOM management and automated fulfillment oversight.',
      features: ['BOM Management', 'Production Planning', 'Quality Control'],
      color: '#EC4899'
    },
    {
      icon: <FileText size={28} />,
      title: 'Procurement',
      description: 'Full transparency on purchasing lifecycle from supply creation to PO.',
      features: ['Purchase Orders', 'Supplier Management', 'Debit Notes'],
      color: '#14B8A6'
    },
    {
      icon: <BarChart3 size={28} />,
      title: 'Reports',
      description: 'One-click generation of essential financial instruments. All automated.',
      features: ['Balance Sheet', 'Tax Reports', 'Trial Balance'],
      color: '#F97316'
    }
  ];

  return (
    <section
      id="modules"
      className="relative py-24 lg:py-32 bg-[#0B1220]"
      style={{ zIndex: 30 }}
    >
      <div className="w-full px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="eyebrow">Complete ERP Suite</div>
          <h2 className="headline mb-6">
            Every Module. <span className="text-gradient">One Platform.</span>
          </h2>
          <p className="body-text">
            AqionFlo unifies all your business operations into a single, intelligent system. From sales to manufacturing, everything connected.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {modules.map((module, index) => (
            <div
              key={index}
              className="glass-panel p-6 group hover:border-opacity-30 transition-all duration-300"
              style={{ '--module-color': module.color } as React.CSSProperties}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${module.color}20`, color: module.color }}
              >
                {module.icon}
              </div>

              {/* Title */}
              <h3 className="text-[#F4F7FF] font-semibold text-lg mb-2 group-hover:text-[var(--module-color)] transition-colors">
                {module.title}
              </h3>

              {/* Description */}
              <p className="text-[#A7B1C8] text-sm leading-relaxed mb-4">
                {module.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {module.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: module.color }}
                    />
                    <span className="text-[#A7B1C8] text-xs">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Arrow */}
              <div className="mt-4 flex items-center gap-2 text-[var(--module-color)] opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-medium">Explore</span>
                <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
