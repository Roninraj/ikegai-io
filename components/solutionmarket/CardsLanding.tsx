"use client"

import {
    LayoutGrid, Bookmark,
    MoreVertical, Eye, Pencil, Play, Copy
} from "lucide-react"
import "@/styles/css/CardsLanding.css"
import "@/styles/css/Navbar.css"

export default function SolutionCard({title, description, tags, gradient}:
{
    title: string,
    description: string,
    tags: string[],
    gradient: string
}) 
{
    return (
        <div style={{ backgroundColor: gradient }} className="solution-card">

            <div className="solution-card-header">
                <div className="card-header-top">
                    <div className="icon-container">
                        <LayoutGrid size={20} />
                    </div>
                    <div className="action-buttons">
                        <button className="ghost-btn">
                            <Bookmark size={18} />
                        </button>
                        <button className="ghost-btn">
                            <MoreVertical size={18} />
                        </button>  
                    </div>
                </div>
                <h4 className="solution-card-title">{title}</h4>
            </div>

            <div className="solution-card-content">
                <p className="solution-card-description">
                    {description}
                </p>

                <div className="tag-container">
                    {tags.map((tag, i) => (
                        <span key={i} className="solution-badge">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="solution-card-footer">
                <div className="card-nav-bar">
                    <div className="card-nav-inner">

                        {/* View Button */}
                        <button className="card-nav-btn view">
                            <Eye size={16} />
                            <span className="card-nav-btn-text">View</span>
                        </button>

                        {/* Edit Button */}
                        <button className="card-nav-btn edit">
                            <Pencil size={16} />
                            <span className="card-nav-btn-text">Edit</span>
                        </button>

                        {/* Copy Button */}
                        <button className="card-nav-btn copy">
                            <Copy size={16} />
                            <span className="card-nav-btn-text">Copy</span>
                        </button>

                        {/* Play Button */}
                        <button className="card-nav-btn play">
                            <Play size={16} />
                            <span className="card-nav-btn-text">Play</span>
                        </button>

                    </div>
                </div>
            </div>

        </div>
    )
}
