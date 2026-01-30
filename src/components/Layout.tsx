import React, { useState, useEffect } from 'react';
import './Layout.scss';
import { NotificationIcon, SearchIcon } from '../assets/svg';
import Profilepic from "../assets/images/avatar.png"
import { SwitchOrganizations, DashboardIcon, UsersIcon,
    Guarantors, LoanRequest, Loans, DecisionModels, SavingsProducts,
    Savings, ServiceAccount, Services, Whitelist, Karma, FeesAndCharges,
    FeesAndPricing, Transactions, Settlement, Report, Preferences, AuditLogs
 } from '../assets/svg';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);
            if (!mobile) {
                setIsSidebarOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(prevState => !prevState);
    };

    const closeSidebar = () => {
        if (isMobile) {
            setIsSidebarOpen(false);
        }
    };

    return (
        <div className="layout">
            {/* Mobile Overlay */}
            {isMobile && isSidebarOpen && (
                <div className="sidebar-overlay" onClick={closeSidebar} />
            )}

            {/* Sidebar */}
            <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
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
                    {/* Mobile close button */}
                    <button className="close-sidebar-btn" onClick={closeSidebar}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M18 6L6 18M6 6L18 18" stroke="#213F7D" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </button>
                </div>

                <div className="sidebar-content">
                    {/* Switch Organization */}
                    <div className="org-switcher" onClick={closeSidebar}>
                     <SwitchOrganizations />
                        <span>Switch Organization</span>
                     
                    </div>

                    {/* Dashboard */}
                    <div className="menu-item" onClick={closeSidebar}>
                     <DashboardIcon />
                        <span>Dashboard</span>
                    </div>

                    {/* Customers Section */}
                    <div className="menu-section">
                        <p className="section-title">CUSTOMERS</p>
                        <div className="menu-item active" onClick={closeSidebar}>
                          <UsersIcon />
                            <span>Users</span>
                        </div>
                        <div className="menu-item" onClick={closeSidebar}>
                           <Guarantors />
                            <span>Guarantors</span>
                        </div>
                        <div className="menu-item" onClick={closeSidebar}>
                          <Loans />
                            <span>Loans</span>
                        </div>
                        <div className="menu-item" onClick={closeSidebar}>
                          <DecisionModels />
                            <span>Decision Models</span>
                        </div>
                        <div className="menu-item" onClick={closeSidebar}>
                        <Savings />
                            <span>Savings</span>
                        </div>
                        <div className="menu-item" onClick={closeSidebar}>
                            <LoanRequest />
                            <span>Loan Requests</span>
                        </div>
                        <div className="menu-item" onClick={closeSidebar}>
                          <Whitelist />
                            <span>Whitelist</span>
                        </div>
                        <div className="menu-item" onClick={closeSidebar}>
                            <Karma />
                            <span>Karma</span>
                        </div>
                    </div>

                    {/* Businesses Section */}
                    <div className="menu-section">
                        <p className="section-title">BUSINESSES</p>
                        <div className="menu-item" onClick={closeSidebar}>
                          <SwitchOrganizations />
                            <span>Organization</span>
                        </div>
                        <div className="menu-item" onClick={closeSidebar}>
                           <LoanRequest />
                            <span>Loan Products</span>
                        </div>
                        <div className="menu-item" onClick={closeSidebar}>
                           <SavingsProducts />
                            <span>Savings Products</span>
                        </div>
                        <div className="menu-item" onClick={closeSidebar}>
                          <FeesAndCharges />
                            <span>Fees and Charges</span>
                        </div>
                        <div className="menu-item" onClick={closeSidebar}>
                           <Transactions />
                            <span>Transactions</span>
                        </div>
                        <div className="menu-item" onClick={closeSidebar}>
                           <Services />
                            <span>Services</span>
                        </div>
                        <div className="menu-item" onClick={closeSidebar}>
                          <ServiceAccount />
                            <span>Service Account</span>
                        </div>
                        <div className="menu-item" onClick={closeSidebar}>
                           <Settlement />
                            <span>Settlements</span>
                        </div>
                        <div className="menu-item" onClick={closeSidebar}>
                          <Report />
                            <span>Reports</span>
                        </div>
                    </div>

                    {/* Settings Section */}
                    <div className="menu-section">
                        <p className="section-title">SETTINGS</p>
                        <div className="menu-item" onClick={closeSidebar}>
                           <Preferences />
                            <span>Preferences</span>
                        </div>
                        <div className="menu-item" onClick={closeSidebar}>
                          <FeesAndPricing />
                            <span>Fees and Pricing</span>
                        </div>
                        <div className="menu-item" onClick={closeSidebar}>
                            <AuditLogs />
                            <span>Audit Logs</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="main-wrapper">
                {/* Header */}
                <header className="header">
                    {/* Mobile hamburger */}
                    <button className="hamburger-btn" onClick={toggleSidebar}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M3 12H21M3 6H21M3 18H21" stroke="#213F7D" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </button>

                    {/* Mobile logo */}
                    <div className="mobile-logo">
                        <svg width="20" height="20" viewBox="0 0 25 25" fill="none">
                            <path d="M2.5 2.5H12.5V12.5H2.5V2.5Z" fill="#213F7D" />
                            <path d="M12.5 2.5H22.5V12.5H12.5V2.5Z" fill="#39CDCC" />
                            <path d="M2.5 12.5H12.5V22.5H2.5V12.5Z" fill="#39CDCC" />
                            <ellipse cx="17.5" cy="17.5" rx="5" ry="5" fill="#213F7D" />
                        </svg>
                    </div>

                    <div className="header-left">
                        <input type="text" placeholder="Search for anything" className="search-input" />
                        <button className="search-btn">
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