"use client"

import {
    Home, Bot, Waypoints, Database, Network, Table,
    LayoutGrid, Power, Info
} from "lucide-react"
import "@/styles/css/Navbar.css"

export default function SideBar() {
    return (
        <aside className="side-nav">

            {/* Top Section: Logo & Menus */}
            <div>
                {/* Logo */}
                <div className="side-nav-logo-section">
                    <h1 className="side-nav-logo">KPMG</h1>
                </div>

                <div className="side-nav-section">
                    {/* Marketplace Section */}
                    <div className="side-nav-header">Marketplace</div>
                    <nav className="side-nav-links">
                        <a href="#" className="side-nav-link active">
                            <Home size={20} />
                            Solutions
                        </a>
                        <a href="#" className="side-nav-link inactive">
                            <Bot size={20} />
                            Agent
                        </a>
                        <a href="#" className="side-nav-link inactive">
                            <Waypoints size={20} />
                            Tools & MCP
                        </a>
                    </nav>

                    {/* Knowledge Hub Section */}
                    <div className="side-nav-header">Knowledge Hub</div>
                    <nav className="side-nav-links">
                        <a href="#" className="side-nav-link inactive">
                            <Database size={20} />
                            Dataset
                        </a>
                        <a href="#" className="side-nav-link inactive">
                            <Network size={20} />
                            Graph
                        </a>
                        <a href="#" className="side-nav-link inactive">
                            <Table size={20} />
                            Table
                        </a>
                    </nav>

                    {/* IKE.GAI Powered Section */}
                    <div className="side-nav-header">IKE.GAI Powered</div>
                    <nav className="side-nav-links">
                        <a href="#" className="side-nav-link inactive">
                            <LayoutGrid size={20} />
                            AI Apps
                        </a>
                    </nav>
                </div>
            </div>

            {/* Bottom Section: User Profile */}
            <div className="side-nav-bottom">
                <div className="user-profile">
                    <div className="user-info">
                        <div className="info-icon-wrapper">
                            <Info size={14} />
                        </div>
                        <span className="username">ikegaiuser</span>
                    </div>
                    <Power className="power-icon" size={18} />
                </div>
            </div>
        </aside>
    )
}
