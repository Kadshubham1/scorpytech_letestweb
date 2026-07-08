import os
import re

COMPONENTS_DIR = "src/components"
APP_FILE = "src/App.jsx"

def process_file(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Replace background colors
    content = re.sub(r'bg-slate-900', 'bg-white', content)
    content = re.sub(r'bg-slate-950', 'bg-white', content)
    content = re.sub(r'bg-slate-800', 'bg-section-bg', content)
    content = re.sub(r'bg-slate-50', 'bg-white', content)
    content = re.sub(r'bg-slate-100', 'bg-section-bg', content)
    content = re.sub(r'bg-slate-800/50', 'bg-white', content)
    content = re.sub(r'bg-slate-900/50', 'bg-white', content)

    # 2. Replace text colors (dark mode -> light mode)
    content = re.sub(r'text-slate-400', 'text-gray-500', content)
    content = re.sub(r'text-slate-300', 'text-gray-600', content)
    content = re.sub(r'text-white', 'text-gray-900', content)
    content = re.sub(r'text-slate-50', 'text-gray-900', content)
    content = re.sub(r'text-slate-800', 'text-gray-900', content)
    content = re.sub(r'text-slate-900', 'text-gray-900', content)

    # 3. Gradients & branding colors
    content = re.sub(r'bg-gradient-to-r from-indigo-[0-9]+ to-purple-[0-9]+', 'bg-primary', content)
    content = re.sub(r'bg-gradient-to-r from-indigo-[0-9]+ via-purple-[0-9]+ to-pink-[0-9]+', 'bg-primary', content)
    content = re.sub(r'text-transparent bg-clip-text bg-gradient-to-r from-indigo-[0-9]+ to-purple-[0-9]+', 'text-primary', content)
    content = re.sub(r'text-indigo-400', 'text-primary', content)
    content = re.sub(r'text-indigo-600', 'text-primary', content)
    content = re.sub(r'bg-indigo-600', 'bg-primary', content)
    content = re.sub(r'bg-indigo-500', 'bg-primary', content)
    content = re.sub(r'bg-indigo-50', 'bg-primary/10', content)
    content = re.sub(r'bg-indigo-500/10', 'bg-primary/10', content)
    content = re.sub(r'bg-indigo-500/20', 'bg-primary/20', content)
    content = re.sub(r'hover:bg-indigo-700', 'hover:bg-primary-dark', content)

    # 4. Remove rounded extremes & glassmorphism
    content = re.sub(r'rounded-2xl', 'rounded-md', content)
    content = re.sub(r'rounded-3xl', 'rounded-lg', content)
    content = re.sub(r'rounded-xl', 'rounded-md', content)
    # Don't replace rounded-full because of avatars/icons
    
    # Remove glassmorphism borders and backgrounds
    content = re.sub(r'border-slate-800', 'border-gray-200', content)
    content = re.sub(r'border-slate-700', 'border-gray-200', content)
    content = re.sub(r'border-white/10', 'border-gray-200', content)
    content = re.sub(r'border-white/5', 'border-gray-200', content)
    content = re.sub(r'backdrop-blur-[a-z]+', '', content)
    
    # Shadows
    content = re.sub(r'shadow-2xl', 'shadow-md', content)
    content = re.sub(r'shadow-xl', 'shadow-sm', content)
    content = re.sub(r'hover:shadow-indigo-500/20', 'hover:shadow-sm', content)

    # Animations
    content = re.sub(r'animate-float', '', content)
    content = re.sub(r'hover:-translate-y-1', '', content)
    content = re.sub(r'hover:-translate-y-2', '', content)
    
    # Fix explicit dark classes that might have been broken (e.g. text-gray-900 inside a primary button)
    # Let's fix primary buttons manually if needed.
    # In Tailwind, button primary usually looks like: `bg-primary text-gray-900`. 
    # Wait, `bg-primary text-white` is better.
    # The regex `text-white -> text-gray-900` changes button text to dark. Let's fix it by adding a specific replacement for buttons.
    # Actually, a better approach is to change `text-white` to `text-gray-900` globally, then change `bg-primary text-gray-900` to `bg-primary text-white`
    content = content.replace("bg-primary text-gray-900", "bg-primary text-white")
    content = content.replace("bg-primary px-", "bg-primary text-white px-")
    
    # Specific component tweaks
    # Hero floating elements
    content = re.sub(r'absolute top-\[.*?\].*?bg-indigo-500/20.*?>', 'hidden>', content)

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

if os.path.exists(APP_FILE):
    process_file(APP_FILE)

for root, _, files in os.walk(COMPONENTS_DIR):
    for file in files:
        if file.endswith(".jsx"):
            process_file(os.path.join(root, file))

print("Refactoring complete.")
