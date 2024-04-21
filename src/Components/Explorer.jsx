import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import css from "../assets/ExplorerIcons/css.svg";
import html from "../assets/ExplorerIcons/html.svg";
import json from "../assets/ExplorerIcons/json.svg";
import github from "../assets/ExplorerIcons/github.svg";
import react from "../assets/ExplorerIcons/react.svg";
import ts from "../assets/ExplorerIcons/ts.svg";
import folderopens from "../assets/ExplorerIcons/folderopen.svg";
import folderclose from "../assets/ExplorerIcons/folderclose.svg";

const Explorer = () => {
    const [showFiles, setShowFiles] = useState(true);
    const [selectedFile, setSelectedFile] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleShowFiles = () => {
        setShowFiles(!showFiles);
    };

    const handleFileClick = (path) => {
        setSelectedFile(path);
        navigate(path);
    };

    const ExplorerItems = [
        {
            name: "Info.jsx",
            icon: react,
            path: "/"
        },
        {
            name: "experience.html",
            icon: html,
            path: "/experience"
        },
        {
            name: "work.ts",
            icon: ts,
            path: "/works"
        },
        {
            name: "contact.css",
            icon: css,
            path: "/contact"
        },
        {
            name: "github.md",
            icon: github,
            path: "/github"
        },
        {
            name: "about.json",
            icon: json,
            path: "/about"
        }
    ];

    return (
        <div className='font-poppins w-[240px]  text-white border-r border-solid border-black'>
            <div className='pt-2 pb-2'>
                <h1 className='text-sm font-extralight pr-2 pl-4'>EXPLORER</h1>
            </div>
            <div>
                <div className='flex cursor-pointer gap-2 p-2' onClick={toggleShowFiles}>
                    <img className="w-[18px] h-[18px]" src={showFiles ? folderopens : folderclose} alt="Folder Icon" />
                    <h1 className=''>InternProject</h1>
                </div>
                {showFiles && ExplorerItems.map((value, index) => (
                    <div key={index} className={`flex pl-6 pb-2 cursor-pointer hover:bg-zinc-800 ${location.pathname === value.path ? 'border-l-2 border-blue-500' : ''}`} onClick={() => handleFileClick(value.path)}>
                        <img className="w-[20px] h-[20px] pt-2" src={value.icon} alt={value.name} />
                        <h1 className='pl-2'>{value.name}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Explorer;
