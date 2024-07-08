import React, { useState } from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

interface ProjectCardProps {
    imgPath: string;
    title: string;
    description: string;
    ghLink: string;
    demoLink?: string;
    isBlog?: boolean;
    frontendLink?: string;
    backendLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
    const [showGitHubButtons, setShowGitHubButtons] = useState(false);

    const handleGitHubClick = (e: React.MouseEvent) => {
        // Prevent default only if there are frontend or backend links
        if (props.frontendLink || props.backendLink) {
            e.preventDefault();
            setShowGitHubButtons(!showGitHubButtons);
        }
    };

    return (
        <div className="flex flex-col justify-between h-full border rounded-lg shadow-lg overflow-hidden bg-gray-200">
            <img src={props.imgPath} alt="Project" className="w-full h-100 object-cover" />
            <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold mb-2 text-black">{props.title}</h2>
                <p className="text-black flex-grow text-justify">{props.description}</p>
                <div className="flex flex-row mt-4">
                    <a href={props.ghLink} target="_blank" rel="noopener noreferrer" onClick={handleGitHubClick}>
                        <button className="flex flex-row items-center bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-700">
                            <BsGithub className="mr-2" />
                            {props.isBlog ? "Blog" : "GitHub"}
                        </button>
                    </a>
                    {props.demoLink && !props.isBlog && (
                        <a href={props.demoLink} target="_blank" rel="noopener noreferrer">
                            <button className="flex flex-row items-center bg-blue-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-blue-700">
                                <CgWebsite className="mr-2" />
                                Demo
                            </button>
                        </a>
                    )}
                </div>
                {showGitHubButtons && (
                    <div className="flex flex-row mt-4">
                        {props.frontendLink && (
                            <a href={props.frontendLink} target="_blank" rel="noopener noreferrer">
                                <button className="flex flex-row items-center bg-green-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-green-700">
                                    Frontend
                                </button>
                            </a>
                        )}
                        {props.backendLink && (
                            <a href={props.backendLink} target="_blank" rel="noopener noreferrer">
                                <button className="flex flex-row items-center bg-red-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-red-700">
                                    Backend
                                </button>
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
