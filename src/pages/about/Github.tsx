import React from "react";
import GitHubCalendar from "react-github-calendar";

const Github: React.FC = () => {
    return (
        <div className="flex flex-col items-center pb-8">
            <h1 className="text-4xl font-semibold pb-5 font-sans">
                Days I <strong className="text-cyan-400">Code</strong>
            </h1>
            <GitHubCalendar
                username="ledangthuongsp"
                blockSize={15}
                blockMargin={5}
                fontSize={16}
            />
        </div>
    );
}

export default Github;
