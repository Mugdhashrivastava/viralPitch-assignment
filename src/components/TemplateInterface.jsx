import React from 'react';
import { Sidebar } from './Sidebar';
import { TemplateEditor } from './TemplateEditor';

export const TemplateInterface = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <TemplateEditor />
    </div>
  );
};