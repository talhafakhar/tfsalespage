import React from 'react';
import Timeline from "@/components/Common/Timeline";
import {LucideIcon} from "lucide-react";
type SkillItem = {
    id: string;
    title: string;
    icon: LucideIcon;
    items: string[];
};

type SkillSetProps = {
    title: string;
    titleTwo: string;
    description: string;
    mapContent: SkillItem[];
};
const SkillSet: React.FC<SkillSetProps> = ({title,titleTwo,description,mapContent}) => {
    return (
        <div className="py-16 px-1 sm:px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold  mb-8 leading-tight">
                        {title}{" "}<span className="text-primary">{titleTwo}</span>
                    </h2>
                    <p className="leading-relaxed">
                        {description}
                    </p>
                </div>
                <Timeline
                    items={mapContent}
                    autoProgress={true}
                    intervalMs={3500}
                />
            </div>
        </div>
    );
};

export default SkillSet;