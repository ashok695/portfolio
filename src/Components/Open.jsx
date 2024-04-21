import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import css from "../assets/ExplorerIcons/css.svg";
import html from "../assets/ExplorerIcons/html.svg";
import json from "../assets/ExplorerIcons/json.svg";
import github from "../assets/ExplorerIcons/github.svg";
import react from "../assets/ExplorerIcons/react.svg";
import ts from "../assets/ExplorerIcons/ts.svg";

const Open = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const handleButtonClick = (path) => {
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
        <div className='text-white'>
            <div className='flex gap-4 cursor-pointer border-top'>
                {ExplorerItems.map((file, index) => (
                    <div key={index} className={`flex ${location.pathname === file.path ? 'border-t-2 border-blue-500' : ''}`} onClick={() => handleButtonClick(file.path)}>
                        <img src={file.icon} className='w-[20px] h-[20px] pt-2'/>
                        <h1 className=''>{file.name}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Open;
