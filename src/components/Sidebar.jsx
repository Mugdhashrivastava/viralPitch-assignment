import React from 'react';
import { BarChart3, MessageSquare, Users, FileText, Settings, BarChart } from 'lucide-react';
import { cn } from '@/lib/utils';

const sidebarItems = [
  { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
  { id: 'chats', label: 'Chats', icon: MessageSquare },
  { id: 'contact-list', label: 'Contact list', icon: Users },
  { id: 'template', label: 'Template', icon: FileText, active: true },
  { id: 'manage-users', label: 'Manage users', icon: Settings },
  { id: 'reports', label: 'Reports', icon: BarChart },
];

export const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-card border-r border-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
            <span className="text-brand-foreground font-bold text-sm">W</span>
          </div>
          <span className="font-bold text-lg text-foreground">WHIZARD</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4">
        <ul className="space-y-1 px-3">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-colors",
                    item.active
                      ? "bg-brand text-brand-foreground"
                      : "text-neutral-600 hover:bg-neutral-100 hover:text-foreground"
                  )}
                >
                  <Icon size={18} />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};