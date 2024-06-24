import React from "react";
import ProjectCard from "./ProjectCard";


const Projects: React.FC = () => {
    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-white text-center mb-8">
                    My Recent <strong className="text-purple-500">Works</strong>
                </h1>
                <p className="text-center text-white mb-12">
                    Here are a few projects I've worked on recently.
                </p>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <ProjectCard
                            imgPath=""
                            isBlog={false}
                            title="Chatify"
                            description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                            ghLink="https://github.com/soumyajit4419/Chatify"
                            demoLink="https://chatify-49.web.app/"
                        />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <ProjectCard
                            imgPath=""
                            isBlog={false}
                            title="Bits-0f-C0de"
                            description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
                            ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
                            demoLink="https://blogs.soumya-jit.tech/"
                        />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <ProjectCard
                            imgPath=""
                            isBlog={false}
                            title="Editor.io"
                            description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
                            ghLink="https://github.com/soumyajit4419/Editor.io"
                            demoLink="https://editor.soumya-jit.tech/"
                        />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <ProjectCard
                            imgPath=""
                            isBlog={false}
                            title="Plant AI"
                            description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
                            ghLink="https://github.com/soumyajit4419/Plant_AI"
                            demoLink="https://plant49-ai.herokuapp.com/"
                        />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                        <ProjectCard
                            imgPath=""
                            isBlog={false}
                            title="Ai For Social Good"
                            description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
                            ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
                        // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Projects;
