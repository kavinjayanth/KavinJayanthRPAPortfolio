import {
  Bot,
  Workflow,
  FileCode2,
  Hash,
  Database,
  Braces,
  Zap,
  AppWindow,
  BarChart3,
  Code2,
  Palette,
  Atom,
  Cloud,
  Sparkles,
  Plug,
  Monitor,
  TerminalSquare,
  GitBranch,
  WorkflowIcon,
  Github,
} from 'lucide-react';
import { Cpu, Layers, Globe, Wrench, BrainCircuit } from 'lucide-react';

// To show a proficiency bar for a skill, add `level: 0-100` to it.
// No levels are shipped by default so nothing is overstated.
export const skillCategories = [
  {
    title: 'RPA Technologies',
    icon: Bot,
    featured: true,
    blurb: 'Core expertise',
    skills: [
      { name: 'UiPath', icon: Bot },
      { name: 'Automation Anywhere 360', icon: Workflow },
    ],
  },
  {
    title: 'Programming',
    icon: Cpu,
    skills: [
      { name: 'Python', icon: FileCode2 },
      { name: 'C#', icon: Hash },
      { name: 'SQL', icon: Database },
      { name: 'JavaScript', icon: Braces },
    ],
  },
  {
    title: 'Microsoft Power Platform',
    icon: Layers,
    skills: [
      { name: 'Power Automate', icon: Zap },
      { name: 'Power Apps', icon: AppWindow },
    ],
  },
  {
    title: 'Web Development',
    icon: Globe,
    skills: [
      { name: 'HTML', icon: Code2 },
      { name: 'CSS', icon: Palette },
      { name: 'React.js', icon: Atom },
      { name: 'UI/UX Design', icon: WorkflowIcon }

    ],
  },
  {
    title: 'Cloud & AI',
    icon: BrainCircuit,
    skills: [
      { name: 'Microsoft Azure AI', icon: Cloud },
      { name: 'Generative AI', icon: Sparkles },
    ],
  },
  {
    title: 'Development Tools',
    icon: Wrench,
    skills: [
      { name: 'Visual Studio', icon: Monitor },
      { name: 'VS Code', icon: TerminalSquare },
      { name: 'Git', icon: GitBranch },
      { name: 'GitHub', icon: Github },
    ],
  },
];
