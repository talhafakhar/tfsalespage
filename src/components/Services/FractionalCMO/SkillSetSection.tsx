import React from 'react';
import {
    Wrench,
    Code,
    Palette,
    Shield,
    Zap,
    Heart
} from 'lucide-react';
import Timeline from "@/components/Common/Timeline";

const tools = [
    {
        id: 'development',
        category: 'Development Tools',
        icon: Code,
        color: 'blue',
        items: [
            'React & TypeScript',
            'Next.js Framework',
            'Node.js Backend',
            'Express Server',
            'MongoDB Database',
            'RESTful APIs'
        ]
    },
    {
        id: 'design',
        category: 'Design & UI',
        icon: Palette,
        color: 'purple',
        items: [
            'Figma Design',
            'Tailwind CSS',
            'Framer Motion',
            'Responsive Design',
            'Component Library',
            'Design Systems'
        ]
    },
    {
        id: 'devops',
        category: 'DevOps & Deployment',
        icon: Wrench,
        color: 'green',
        items: [
            'Docker Containers',
            'AWS Cloud',
            'CI/CD Pipeline',
            'Kubernetes',
            'Nginx',
            'Load Balancing'
        ]
    },
    {
        id: 'security',
        category: 'Security & Auth',
        icon: Shield,
        color: 'red',
        items: [
            'JWT Authentication',
            'OAuth Integration',
            'Data Encryption',
            'HTTPS/SSL',
            'Security Audits',
            'Penetration Testing'
        ]
    },
    {
        id: 'performance',
        category: 'Performance',
        icon: Zap,
        color: 'yellow',
        items: [
            'Code Optimization',
            'Lazy Loading',
            'CDN Integration',
            'Caching Strategy',
            'Bundle Optimization',
            'Performance Monitoring'
        ]
    },
    {
        id: 'testing',
        category: 'Testing & QA',
        icon: Heart,
        color: 'pink',
        items: [
            'Unit Testing',
            'Integration Tests',
            'E2E Testing',
            'Jest Framework',
            'Cypress Testing',
            'Quality Assurance'
        ]
    }
];

const SkillSet: React.FC = () => {
    return (
        <div className="py-16 px-1 sm:px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold  mb-8 leading-tight">
                        Our{" "}<span className="text-primary"> Tech Stack</span>
                    </h2>
                    <p className="leading-relaxed">
                        Watch our technology stack unfold in an interactive timeline experience
                    </p>
                </div>

                <Timeline
                    items={tools}
                    autoProgress={true}
                    intervalMs={3500}
                />
            </div>
        </div>
    );
};

export default SkillSet;