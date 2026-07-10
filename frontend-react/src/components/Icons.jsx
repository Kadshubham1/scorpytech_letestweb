import React from 'react';
import { 
  Users, CheckCircle, Award, Cpu, GraduationCap, Briefcase, 
  Brain, Code, Calendar, Terminal, Coffee, Binary, Atom, 
  Server, Database, Cloud, CloudLightning,
  Globe, Smartphone, Wifi, Box, Shield, BarChart, Headphones,
  FileText, Star, Lightbulb, Search, Settings, CheckSquare, Monitor
} from 'lucide-react';

export const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Github = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export const Twitter = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

import { 
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiPython, 
  SiFastapi, SiSpringboot, SiFlutter, SiPostgresql, SiMongodb, 
  SiDocker, SiKubernetes
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';

const iconMap = {
  // Stats & General
  'users': Users,
  'check-circle': CheckCircle,
  'award': Award,
  'cpu': Cpu,
  // Services
  'graduation-cap': GraduationCap,
  'briefcase': Briefcase,
  'brain': Brain,
  'code': Code,
  'calendar': Calendar,
  
  // FYP new icons
  'globe': Globe,
  'smartphone': Smartphone,
  'wifi': Wifi,
  'box': Box,
  'shield': Shield,
  'bar-chart': BarChart,
  'headphones': Headphones,
  'file-text': FileText,
  'star': Star,
  'lightbulb': Lightbulb,
  'search': Search,
  'settings': Settings,
  'check-square': CheckSquare,
  'monitor': Monitor,

  // Tech Stack
  'react': SiReact,
  'nextjs': SiNextdotjs,
  'typescript': SiTypescript,
  'nodejs': SiNodedotjs,
  'python': SiPython,
  'fastapi': SiFastapi,
  'java': FaJava,
  'springboot': SiSpringboot,
  'flutter': SiFlutter,
  'postgresql': SiPostgresql,
  'mongodb': SiMongodb,
  'docker': SiDocker,
  'kubernetes': SiKubernetes,
  'aws': FaAws,
  'openai': Brain,
  
  // Fallbacks
  'cpp': Binary,
  'javascript': Code,
  'mysql': Database,
  'azure': CloudLightning
};

export const renderIcon = (name, className = 'w-6 h-6') => {
  const IconComponent = iconMap[name?.toLowerCase()] || Code;
  return <IconComponent className={className} />;
};
