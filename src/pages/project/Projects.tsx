import React from "react";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-black text-center mb-8">
                    My Recent <strong className="text-blue-500">Works</strong>
                </h1>
                <p className="text-center text-black mb-12">
                    Here are a few projects I've worked on recently.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ProjectCard
                        imgPath=""
                        isBlog={false}
                        title="Classification & Garbage Collection"
                        description="An application that helps users classify garbage and find collection points within the system. 
                        It enhances user experience through educational games, point exchange, and donation features.
                        Built using Dart, TypeScript, Java (Springboot) with three roles: User, Employee, Admin.
                        Utilizes Flask and Roboflow to train a model for recognizing different types of waste as objects."
                        ghLink=""
                        demoLink=""
                        frontendLink="https://github.com/ThachSangW3G/ecoTS_FE"
                        backendLink="https://github.com/ledangthuongsp/ecoTS_BE"
                    />
                    <ProjectCard
                        imgPath=""
                        isBlog={false}
                        title="Flight Booking Website"
                        description="A flight booking website that allows users to book domestic flights and make payments via Visa.
                        Developed with TypeScript (React) and Java (Springboot), 
                        integrating modern features of a flight booking website such as viewing flight lists, flight details, booking tickets, and booking history."
                        ghLink="https://github.com/yourusername/flight-booking"
                        demoLink=""
                        frontendLink="https://github.com/ledangthuongsp/FlightBooking"
                        backendLink="https://github.com/ledangthuongsp/FlightBooking_BE"
                    />
                    <ProjectCard
                        imgPath=""
                        isBlog={false}
                        title="Mobile Shopping App"
                        description="This application is entirely built with Android Studio, with no backend, and uses Firebase for storing model information.
                        The app includes basic roles like User, Employee, and Admin, and meets all shopping needs such as viewing products, selecting products, product details, 
                        adding products to the cart, purchasing products, viewing purchase history, canceling orders, and tracking orders."
                        ghLink="https://github.com/trungtinhn/SE114_SHOPPINGAPP"
                        demoLink=""
                    />
                    <ProjectCard
                        imgPath=""
                        isBlog={false}
                        title="Personal Portfolio"
                        description="A personal project that others can clone to build their own portfolio if they find it suitable.
                        This project mainly focuses on UI without a backend, developed using React (TypeScript)."
                        ghLink="https://github.com/ledangthuongsp/ThuongProfile"
                        demoLink="https://ledangthuongsp.github.io/ThuongProfile/"
                    />
                    {/* <ProjectCard
                        imgPath=""
                        isBlog={false}
                        title="Camera Store Website"
                        description="A website for selling cameras and camera accessories.
                        Built to modern website standards, it includes three basic roles: User, Employee, and Admin.
                        Utilizes the MERN stack (MongoDB, Express, React, Node.js) to provide full functionality for a camera and accessories 
                        e-commerce website, including viewing products, product details, pricing, adding to cart, placing orders, canceling orders, tracking orders, and chatting with admin.
                        Users can also rate products and provide feedback to employees about issues with their orders and process returns or exchanges."
                        ghLink=""
                        frontendLink="https://github.com/ledangthuongsp/GearShop/tree/main/gearshop-frontend"
                        backendLink="https://github.com/ledangthuongsp/GearShop/tree/main/gearshop-backend"
                    /> */}
                </div>
            </div>
        </div>
    );
};

export default Projects;
