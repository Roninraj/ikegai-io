"use client";
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import '@/styles/css/CreateApp.css';

const CreateAppDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="dropdown-container" ref={dropdownRef}>
            {/* Toggle Button */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="create-app-btn"
            >
                + Create New App
                <span className="btn-divider">
                    <ChevronDown className={`arrow-icon ${isOpen ? 'rotate' : ''}`} />
                </span>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <ul className="dropdown-menu">
                    <li 
                        className="dropdown-item"
                        onClick={() => { console.log("Form Builder"); setIsOpen(false); }}
                    >
                        <span className="dropdown-item-text">Form Builder</span>
                    </li>
                    <li 
                        className="dropdown-item"
                        onClick={() => { console.log("Visual Builder"); setIsOpen(false); }}
                    >
                        <span className="dropdown-item-text">Visual Builder</span>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default CreateAppDropdown;
