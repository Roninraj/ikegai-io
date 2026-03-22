"use client"

import { Bell, Moon } from "lucide-react"
import "@/styles/css/Navbar.css"

export default function NavBar() {
    return (
        <header className="top-nav">

            {/* Notification & Theme Toggles */}
            <div className="top-nav-right">
                <button className="top-nav-btn">
                    <Bell />
                    <span className="notification-dot"></span>
                </button>
                <button className="top-nav-btn">
                    <Moon />
                </button>
            </div>

        </header>
    )
}
