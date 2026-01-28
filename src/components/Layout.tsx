import React, { useState } from 'react';
import './Layout.scss';
import { NotificationIcon, SearchIcon } from '../assets/svg';
import Profilepic from "../assets/images/avatar.png"

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(prevState => !prevState);
    };

    return (
        <div className="layout">
            {/* Sidebar */}
            <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
                <div className="sidebar-header">
                    <div className="logo">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M2.5 2.5H12.5V12.5H2.5V2.5Z" fill="#213F7D" />
                            <path d="M12.5 2.5H22.5V12.5H12.5V2.5Z" fill="#39CDCC" />
                            <path d="M2.5 12.5H12.5V22.5H2.5V12.5Z" fill="#39CDCC" />
                            <ellipse cx="17.5" cy="17.5" rx="5" ry="5" fill="#213F7D" />
                        </svg>
                        <span className="logo-text">lendsqr</span>
                    </div>
                </div>

                <div className="sidebar-content">
                    {/* Switch Organization */}
                    <div className="org-switcher">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M5.73333 1.33334H1.33333V5.73334H5.73333V1.33334Z" stroke="#213F7D" strokeWidth="1.5" />
                            <path d="M14.6667 1.33334H10.2667V5.73334H14.6667V1.33334Z" stroke="#213F7D" strokeWidth="1.5" />
                            <path d="M14.6667 10.2667H10.2667V14.6667H14.6667V10.2667Z" stroke="#213F7D" strokeWidth="1.5" />
                            <path d="M5.73333 10.2667H1.33333V14.6667H5.73333V10.2667Z" stroke="#213F7D" strokeWidth="1.5" />
                        </svg>
                        <span>Switch Organization</span>
                        <svg className="chevron" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M11 4.66675L7 8.66675L3 4.66675" stroke="#213F7D" strokeWidth="2" />
                        </svg>
                    </div>

                    {/* Dashboard */}
                    <div className="menu-item">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M2 2H6V8H2V2Z" fill="#213F7D" />
                            <path d="M10 2H14V6H10V2Z" fill="#213F7D" />
                            <path d="M10 10H14V14H10V10Z" fill="#213F7D" />
                            <path d="M2 12H6V14H2V12Z" fill="#213F7D" />
                        </svg>
                        <span>Dashboard</span>
                    </div>

                    {/* Customers Section */}
                    <div className="menu-section">
                        <p className="section-title">CUSTOMERS</p>
                        <div className="menu-item active">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z" fill="#213F7D" />
                            </svg>
                            <span>Users</span>
                        </div>
                        <div className="menu-item">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M14 2H12.82C12.4 0.84 11.3 0 10 0C8.7 0 7.6 0.84 7.18 2H6C5.86 2 5.73 2.01 5.6 2.04C5.21 2.12 4.86 2.32 4.59 2.59C4.41 2.77 4.26 2.99 4.16 3.23C4.06 3.46 4 3.72 4 4V14C4 14.27 4.06 14.54 4.16 14.78C4.26 15.01 4.41 15.23 4.59 15.42C4.86 15.69 5.21 15.89 5.6 15.97C5.73 15.99 5.86 16 6 16H14C14.27 16 14.54 15.94 14.77 15.84C15.01 15.74 15.23 15.59 15.41 15.41C15.68 15.14 15.88 14.79 15.96 14.4C15.98 14.27 16 14.14 16 14V4C16 3.72 15.94 3.45 15.84 3.21C15.74 2.98 15.59 2.76 15.41 2.58C15.14 2.31 14.79 2.11 14.4 2.03C14.27 2.01 14.14 2 14 2ZM10 1C10.55 1 11 1.45 11 2C11 2.55 10.55 3 10 3C9.45 3 9 2.55 9 2C9 1.45 9.45 1 10 1ZM14 14H6V4H14V14Z" fill="#213F7D" />
                            </svg>
                            <span>Guarantors</span>
                        </div>
                        <div className="menu-item">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M14 4H12V2C12 0.9 11.1 0 10 0H6C4.9 0 4 0.9 4 2V4H2C0.9 4 0 4.9 0 6V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V6C16 4.9 15.1 4 14 4ZM6 2H10V4H6V2Z" fill="#213F7D" />
                            </svg>
                            <span>Loans</span>
                        </div>
                        <div className="menu-item">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM8 14C4.69 14 2 11.31 2 8C2 4.69 4.69 2 8 2C11.31 2 14 4.69 14 8C14 11.31 11.31 14 8 14Z" fill="#213F7D" />
                            </svg>
                            <span>Decision Models</span>
                        </div>
                        <div className="menu-item">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M14 2H10.82C10.4 0.84 9.3 0 8 0C6.7 0 5.6 0.84 5.18 2H2C0.9 2 0 2.9 0 4V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V4C16 2.9 15.1 2 14 2ZM8 1C8.55 1 9 1.45 9 2C9 2.55 8.55 3 8 3C7.45 3 7 2.55 7 2C7 1.45 7.45 1 8 1Z" fill="#213F7D" />
                            </svg>
                            <span>Savings</span>
                        </div>
                        <div className="menu-item">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M12 2H4C2.9 2 2 2.9 2 4V12C2 13.1 2.9 14 4 14H12C13.1 14 14 13.1 14 12V4C14 2.9 13.1 2 12 2ZM12 12H4V4H12V12Z" fill="#213F7D" />
                            </svg>
                            <span>Loan Requests</span>
                        </div>
                        <div className="menu-item">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8 0L0 4V7.09C0 11.14 2.91 14.95 8 16C13.09 14.95 16 11.14 16 7.09V4L8 0Z" fill="#213F7D" />
                            </svg>
                            <span>Whitelist</span>
                        </div>
                        <div className="menu-item">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0Z" fill="#213F7D" />
                            </svg>
                            <span>Karma</span>
                        </div>
                    </div>

                    {/* Businesses Section */}
                    <div className="menu-section">
                        <p className="section-title">BUSINESSES</p>
                        <div className="menu-item">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M14 4H10.82C10.4 0.84 9.3 0 8 0C6.7 0 5.6 0.84 5.18 2H2C0.9 2 0 2.9 0 4V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V4C16 2.9 15.1 2 14 2Z" fill="#213F7D" />
                            </svg>
                            <span>Organization</span>
                        </div>
                        <div className="menu-item">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M14 2H2C0.9 2 0 2.9 0 4V12C0 13.1 0.9 14 2 14H14C15.1 14 16 13.1 16 12V4C16 2.9 15.1 2 14 2Z" fill="#213F7D" />
                            </svg>
                            <span>Loan Products</span>
                        </div>
                        <div className="menu-item">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M14 2H2C0.9 2 0 2.9 0 4V12C0 13.1 0.9 14 2 14H14C15.1 14 16 13.1 16 12V4C16 2.9 15.1 2 14 2Z" fill="#213F7D" />
                            </svg>
                            <span>Savings Products</span>
                        </div>
                        <div className="menu-item">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8 0L0 4V7.09C0 11.14 2.91 14.95 8 16C13.09 14.95 16 11.14 16 7.09V4L8 0Z" fill="#213F7D" />
                            </svg>
                            <span>Fees and Charges</span>
                        </div>
                        <div className="menu-item">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M14 2H2C0.9 2 0 2.9 0 4V12C0 13.1 0.9 14 2 14H14C15.1 14 16 13.1 16 12V4C16 2.9 15.1 2 14 2Z" fill="#213F7D" />
                            </svg>
                            <span>Transactions</span>
                        </div>
                        <div className="menu-item">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M12 2H4C2.9 2 2 2.9 2 4V12C2 13.1 2.9 14 4 14H12C13.1 14 14 13.1 14 12V4C14 2.9 13.1 2 12 2Z" fill="#213F7D" />
                            </svg>
                            <span>Services</span>
                        </div>
                        <div className="menu-item">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0Z" fill="#213F7D" />
                            </svg>
                            <span>Service Account</span>
                        </div>
                        <div className="menu-item">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M12 2H4C2.9 2 2 2.9 2 4V12C2 13.1 2.9 14 4 14H12C13.1 14 14 13.1 14 12V4C14 2.9 13.1 2 12 2Z" fill="#213F7D" />
                            </svg>
                            <span>Settlements</span>
                        </div>
                        <div className="menu-item">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M14 2H2C0.9 2 0 2.9 0 4V12C0 13.1 0.9 14 2 14H14C15.1 14 16 13.1 16 12V4C16 2.9 15.1 2 14 2Z" fill="#213F7D" />
                            </svg>
                            <span>Reports</span>
                        </div>
                    </div>

                    {/* Settings Section */}
                    <div className="menu-section">
                        <p className="section-title">SETTINGS</p>
                        <div className="menu-item">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M14 6H12.82C12.4 4.84 11.3 4 10 4C8.7 4 7.6 4.84 7.18 6H2C1.45 6 1 6.45 1 7C1 7.55 1.45 8 2 8H7.18C7.6 9.16 8.7 10 10 10C11.3 10 12.4 9.16 12.82 8H14C14.55 8 15 7.55 15 7C15 6.45 14.55 6 14 6Z" fill="#213F7D" />
                            </svg>
                            <span>Preferences</span>
                        </div>
                        <div className="menu-item">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0Z" fill="#213F7D" />
                            </svg>
                            <span>Fees and Pricing</span>
                        </div>
                        <div className="menu-item">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M14 2H2C0.9 2 0 2.9 0 4V12C0 13.1 0.9 14 2 14H14C15.1 14 16 13.1 16 12V4C16 2.9 15.1 2 14 2Z" fill="#213F7D" />
                            </svg>
                            <span>Audit Logs</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="main-wrapper">
                {/* Header */}
                <header className="header">
                    <div className="header-left">
                        <input type="text" placeholder="Search for anything" className="search-input" />
                        <button className="search-btn" onClick={toggleSidebar}>
                          <SearchIcon />
                        </button>
                    </div>

                    <div className="header-right">
                        <p className="docs-link" onClick={() => alert('Documentation link clicked')}>Docs</p>
                        <NotificationIcon />
                        <div className="user-profile">
                            <img src={Profilepic} alt="User" />
                            <span>Adedeji</span>
                            <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
                                <path d="M1 0.5L4 3.5L7 0.5" stroke="#213F7D" strokeWidth="1.5" />
                            </svg>
                        </div>
                    </div>
                </header>

                {/* Main Content Area */}
                <main className="main-content">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;