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
        <div className="flex flex-col justify-between h-full border rounded-lg shadow-lg overflow-hidden bg-gray-800">
            <img src={props.imgPath} alt="Project" className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold mb-2 text-white">{props.title}</h2>
                <p className="text-gray-300 flex-grow">{props.description}</p>
                <div className="mt-4">
                    <a href={props.ghLink} target="_blank" rel="noopener noreferrer">
                        <button className="flex-1 items-center bg-purple-600 text-white px-4 py-2 rounded-md mr-2">
                            <BsGithub className="mr-2" />
                            {props.isBlog ? "Blog" : "GitHub"}
                        </button>
                    </a>
                    {props.demoLink && !props.isBlog && (
                        <a href={props.demoLink} target="_blank" rel="noopener noreferrer">
                            <button className="flex-1 items-center bg-purple-600 text-white px-4 py-2 rounded-md ml-2">
                                <CgWebsite className="mr-2" />
                                Demo
                            </button>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
