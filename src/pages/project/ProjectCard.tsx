import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

interface ProjectCardProps {
    imgPath: string;
    title: string;
    description: string;
    ghLink: string;
    demoLink?: string;
    isBlog?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
    return (
        <div className="border rounded-lg shadow-lg overflow-hidden">
            <img src={props.imgPath} alt="Project" className="w-full h-48 object-cover" />
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{props.title}</h2>
                <p className="text-gray-700 mb-4">{props.description}</p>
                <a href={props.ghLink} target="_blank" rel="noopener noreferrer">
                    <button className="flex-1 items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
                        <BsGithub className="mr-2" />
                        {props.isBlog ? "Blog" : "GitHub"}
                    </button>
                </a>
                {props.demoLink && !props.isBlog && (
                    <a href={props.demoLink} target="_blank" rel="noopener noreferrer">
                        <button className="flex-1 items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-md ml-2">
                            <CgWebsite className="mr-2" />
                            Demo
                        </button>
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
