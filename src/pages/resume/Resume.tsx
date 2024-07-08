import React from "react";
import CV from '../../assets/ledangthuong_resume_internship.pdf'
const Resume: React.FC = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = CV; // Replace with the path to your PDF file
        link.download = "resume.pdf";
        link.click();
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col items-center">
                <h1 className="mb-4">Download Le Dang Thuong Resume (Internship)</h1>
                <button
                    onClick={handleDownload}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Download Resume
                </button>
            </div>
        </div>
    );
};

export default Resume;
