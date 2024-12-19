"use client"
import { Clipboard } from "lucide-react";
import { useState } from 'react';
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { codeSnippets } from '@/lib/codeHelper';
import Buttons from "@/components/buttons";

type ComponentName = 'buttons';

const components = [
  { name: 'buttons', title: 'Buttons', Component: Buttons },
] as const;

export default function Page() {
  const [showCode, setShowCode] = useState<Record<ComponentName, boolean>>({
    buttons: false
  });

  const toggleCodeVisibility = (component: ComponentName) => {
    setShowCode(prev => ({ ...prev, [component]: !prev[component] }));
  };

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code)
      .then(() => toast("Code copied to clipboard!"))
      .catch(err => console.error("Failed to copy: ", err));
  };

  const renderComponent = ({ name, title, Component }: typeof components[number]) => (
    <div key={name} className="flex flex-col items-start justify-center gap-4 w-full mt-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-2">
        <div className="flex items-center justify-start gap-2">
          <h1 className="text-md font-medium">{title}</h1>
        </div>
        <div className="flex items-center justify-start gap-2">
          <Button variant="outline" onClick={() => toggleCodeVisibility(name)} className="w-full sm:w-auto">
            {showCode[name] ? 'Hide Code' : 'View Code'}
          </Button>
        </div>
      </div>
      {showCode[name] ? (
        <div className="relative w-full h-[300px] sm:h-[400px]">
          <pre className="border border-zinc-900 p-4 rounded-lg w-full h-full overflow-auto text-xs sm:text-sm">
            <code>{codeSnippets[name]}</code>
          </pre>
          <Button
            size="icon"
            variant="outline"
            onClick={() => copyToClipboard(codeSnippets[name])}
            className="absolute top-2 right-2 flex items-center justify-center p-2 rounded-md"
          >
            <Clipboard className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div className="w-full">
          <Component />
        </div>
      )}
    </div>
  );

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <div className="space-y-8">
          <div>
            <h1 className="text-2xl font-medium text-zinc-900 dark:text-zinc-50">UI Components</h1>
            <p className="mt-2 text-zinc-500 dark:text-zinc-400">
              A minimal collection of UI components built with shadcn/ui.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-6">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-50 mb-4">Installation</h2>
            <div className="space-y-3 text-sm text-zinc-500 dark:text-zinc-400">
              <p>how to install , run  this so</p>
            </div>
            <a
              href="https://ui.shadcn.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-zinc-900 dark:text-zinc-50 hover:underline"
            >
              View Documentation →
            </a>
          </div>

          {components.map(renderComponent)}
        </div>
      </div>
    </main>
  )
}