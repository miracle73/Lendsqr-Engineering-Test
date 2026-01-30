import React, { useState, useEffect, useRef } from 'react';
import './Users.scss';
import UserDetail from './UserDetail';
import { FirstIcon, SecondIcon, ThirdIcon, FourthIcon } from '../../assets/svg';

interface User {
  id: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  status: 'Active' | 'Inactive' | 'Pending' | 'Blacklisted';
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [showFilter, setShowFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const [filters, setFilters] = useState({
    organization: '',
    username: '',
    email: '',
    date: '',
    phoneNumber: '',
    status: ''
  });

  useEffect(() => {
    const generateMockUsers = (): User[] => {
      const statuses: Array<'Active' | 'Inactive' | 'Pending' | 'Blacklisted'> = ['Active', 'Inactive', 'Pending', 'Blacklisted'];
      const orgs = ['Lendsqr', 'Irorun', 'Lendstar'];
      const mockUsers: User[] = [];

      for (let i = 1; i <= 500; i++) {
        mockUsers.push({
          id: `${i}`,
          orgName: orgs[Math.floor(Math.random() * orgs.length)],
          userName: `user${i}`,
          email: `user${i}@example.com`,
          phoneNumber: `080${String(Math.floor(Math.random() * 100000000)).padStart(8, '0')}`,
          createdAt: new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString(),
          status: statuses[Math.floor(Math.random() * statuses.length)]
        });
      }
      return mockUsers;
    };

    const mockUsers = generateMockUsers();
    setUsers(mockUsers);
    setFilteredUsers(mockUsers);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeMenu && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeMenu]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const applyFilters = () => {
    let filtered = users;

    if (filters.organization) {
      filtered = filtered.filter(user => 
        user.orgName.toLowerCase().includes(filters.organization.toLowerCase())
      );
    }
    if (filters.username) {
      filtered = filtered.filter(user => 
        user.userName.toLowerCase().includes(filters.username.toLowerCase())
      );
    }
    if (filters.email) {
      filtered = filtered.filter(user => 
        user.email.toLowerCase().includes(filters.email.toLowerCase())
      );
    }
    if (filters.phoneNumber) {
      filtered = filtered.filter(user => 
        user.phoneNumber.includes(filters.phoneNumber)
      );
    }
    if (filters.status) {
      filtered = filtered.filter(user => user.status === filters.status);
    }

    setFilteredUsers(filtered);
    setShowFilter(false);
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setFilters({
      organization: '',
      username: '',
      email: '',
      date: '',
      phoneNumber: '',
      status: ''
    });
    setFilteredUsers(users);
    setShowFilter(false);
  };

  const handleViewDetails = (user: User) => {
    setSelectedUser(user);
    setActiveMenu(null);
  };

  const handleBackToUsers = () => {
    setSelectedUser(null);
  };

  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric',
    }) + ', ' + date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const getStatusClass = (status: string) => {
    return `status-badge status-${status.toLowerCase()}`;
  };

  if (selectedUser) {
    return <UserDetail user={selectedUser} onBack={handleBackToUsers} />;
  }

  return (
    <div className="users-content">
      <h1 className="page-title">Users</h1>
      
      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-icon users-icon">
            <FirstIcon />
          </div>
          <p className="stat-label">USERS</p>
          <p className="stat-value">2,453</p>
        </div>

        <div className="stat-card">
          <div className="stat-icon active-icon">
            <SecondIcon />
          </div>
          <p className="stat-label">ACTIVE USERS</p>
          <p className="stat-value">2,453</p>
        </div>

        <div className="stat-card">
          <div className="stat-icon loans-icon">
          <ThirdIcon />
          </div>
          <p className="stat-label">USERS WITH LOANS</p>
          <p className="stat-value">12,453</p>
        </div>

        <div className="stat-card">
          <div className="stat-icon savings-icon bg-[#FF3366] ">
           <FourthIcon />
          </div>
          <p className="stat-label">USERS WITH SAVINGS</p>
          <p className="stat-value">102,453</p>
        </div>
      </div>

      <div className="table-container">
        <div className="table-wrapper">
          <table className="users-table">
            <thead>
              <tr>
                <th>
                  ORGANIZATION
                  <button className="filter-btn" onClick={() => setShowFilter(!showFilter)}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6.22222 13.3333H9.77778V11.5556H6.22222V13.3333ZM0.5 2.66667V4.44444H15.5V2.66667H0.5ZM3.16667 8.88889H12.8333V7.11111H3.16667V8.88889Z" fill="#545F7D"/>
                    </svg>
                  </button>
                </th>
                <th>
                  USERNAME
                  <button className="filter-btn" onClick={() => setShowFilter(!showFilter)}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6.22222 13.3333H9.77778V11.5556H6.22222V13.3333ZM0.5 2.66667V4.44444H15.5V2.66667H0.5ZM3.16667 8.88889H12.8333V7.11111H3.16667V8.88889Z" fill="#545F7D"/>
                    </svg>
                  </button>
                </th>
                <th>
                  EMAIL
                  <button className="filter-btn" onClick={() => setShowFilter(!showFilter)}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6.22222 13.3333H9.77778V11.5556H6.22222V13.3333ZM0.5 2.66667V4.44444H15.5V2.66667H0.5ZM3.16667 8.88889H12.8333V7.11111H3.16667V8.88889Z" fill="#545F7D"/>
                    </svg>
                  </button>
                </th>
                <th>
                  PHONE NUMBER
                  <button className="filter-btn" onClick={() => setShowFilter(!showFilter)}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6.22222 13.3333H9.77778V11.5556H6.22222V13.3333ZM0.5 2.66667V4.44444H15.5V2.66667H0.5ZM3.16667 8.88889H12.8333V7.11111H3.16667V8.88889Z" fill="#545F7D"/>
                    </svg>
                  </button>
                </th>
                <th>
                  DATE JOINED
                  <button className="filter-btn" onClick={() => setShowFilter(!showFilter)}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6.22222 13.3333H9.77778V11.5556H6.22222V13.3333ZM0.5 2.66667V4.44444H15.5V2.66667H0.5ZM3.16667 8.88889H12.8333V7.11111H3.16667V8.88889Z" fill="#545F7D"/>
                    </svg>
                  </button>
                </th>
                <th>
                  STATUS
                  <button className="filter-btn" onClick={() => setShowFilter(!showFilter)}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6.22222 13.3333H9.77778V11.5556H6.22222V13.3333ZM0.5 2.66667V4.44444H15.5V2.66667H0.5ZM3.16667 8.88889H12.8333V7.11111H3.16667V8.88889Z" fill="#545F7D"/>
                    </svg>
                  </button>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.orgName}</td>
                  <td>{user.userName}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{formatDate(user.createdAt)}</td>
                  <td>
                    <span className={getStatusClass(user.status)}>{user.status}</span>
                  </td>
                  <td>
                    <div ref={activeMenu === user.id ? menuRef : null} style={{ position: 'relative' }}>
                      <button 
                        className="menu-btn"
                        onClick={() => setActiveMenu(activeMenu === user.id ? null : user.id)}
                      >
                        ⋮
                      </button>
                      {activeMenu === user.id && (
                        <div className="action-menu">
                          <button className="menu-item" onClick={() => handleViewDetails(user)}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M8 3C4.36364 3 1.25818 5.28067 0 8.5C1.25818 11.7193 4.36364 14 8 14C11.6364 14 14.7418 11.7193 16 8.5C14.7418 5.28067 11.6364 3 8 3ZM8 12.1667C5.99273 12.1667 4.36364 10.5253 4.36364 8.5C4.36364 6.47467 5.99273 4.83333 8 4.83333C10.0073 4.83333 11.6364 6.47467 11.6364 8.5C11.6364 10.5253 10.0073 12.1667 8 12.1667ZM8 6.3C6.79273 6.3 5.81818 7.28267 5.81818 8.5C5.81818 9.71733 6.79273 10.7 8 10.7C9.20727 10.7 10.1818 9.71733 10.1818 8.5C10.1818 7.28267 9.20727 6.3 8 6.3Z" fill="#545F7D"/>
                            </svg>
                            View Details
                          </button>
                          <button className="menu-item">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M8 8C6.9 8 6 7.1 6 6C6 4.9 6.9 4 8 4C9.1 4 10 4.9 10 6C10 7.1 9.1 8 8 8ZM12 12.5V14H4V12.5C4 10.5 6 9 8 9C10 9 12 10.5 12 12.5ZM15 8H13V6H15V8ZM15 12H13V10H15V12ZM1 8H3V10H1V8ZM1 4H3V6H1V4Z" fill="#545F7D"/>
                            </svg>
                            Blacklist User
                          </button>
                          <button className="menu-item">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M8 8C6.9 8 6 7.1 6 6C6 4.9 6.9 4 8 4C9.1 4 10 4.9 10 6C10 7.1 9.1 8 8 8ZM12 12.5V14H4V12.5C4 10.5 6 9 8 9C10 9 12 10.5 12 12.5ZM14.3 7.9L13 6.6L11.7 7.9L10.8 7L12.1 5.7L10.8 4.4L11.7 3.5L13 4.8L14.3 3.5L15.2 4.4L13.9 5.7L15.2 7L14.3 7.9Z" fill="#545F7D"/>
                            </svg>
                            Activate User
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showFilter && (
          <>
            <div className="filter-overlay" onClick={() => setShowFilter(false)} />
            <div className="filter-popup">
              <div className="filter-content">
                <div className="filter-group">
                  <label>Organization</label>
                  <select name="organization" value={filters.organization} onChange={handleFilterChange}>
                    <option value="">Select</option>
                    <option value="Lendsqr">Lendsqr</option>
                    <option value="Irorun">Irorun</option>
                    <option value="Lendstar">Lendstar</option>
                  </select>
                </div>

                <div className="filter-group">
                  <label>Username</label>
                  <input 
                    type="text" 
                    name="username" 
                    placeholder="User"
                    value={filters.username}
                    onChange={handleFilterChange}
                  />
                </div>

                <div className="filter-group">
                  <label>Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email"
                    value={filters.email}
                    onChange={handleFilterChange}
                  />
                </div>

                <div className="filter-group">
                  <label>Date</label>
                  <input 
                    type="date" 
                    name="date"
                    value={filters.date}
                    onChange={handleFilterChange}
                  />
                </div>

                <div className="filter-group">
                  <label>Phone Number</label>
                  <input 
                    type="tel" 
                    name="phoneNumber" 
                    placeholder="Phone Number"
                    value={filters.phoneNumber}
                    onChange={handleFilterChange}
                  />
                </div>

                <div className="filter-group">
                  <label>Status</label>
                  <select name="status" value={filters.status} onChange={handleFilterChange}>
                    <option value="">Select</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Pending">Pending</option>
                    <option value="Blacklisted">Blacklisted</option>
                  </select>
                </div>

                <div className="filter-actions">
                  <button className="btn-reset" onClick={resetFilters}>Reset</button>
                  <button className="btn-filter" onClick={applyFilters}>Filter</button>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="pagination">
          <div className="pagination-info">
            <span>Showing</span>
            <select value={itemsPerPage} onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <span>out of {filteredUsers.length}</span>
          </div>

          <div className="pagination-controls">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="page-btn nav-btn"
            >
              ‹
            </button>
            
            {currentPage > 3 && totalPages > 5 && (
              <>
                <button onClick={() => setCurrentPage(1)} className="page-btn">1</button>
                {currentPage > 4 && <span className="ellipsis">...</span>}
              </>
            )}

            {[...Array(Math.min(5, totalPages))].map((_, i) => {
              let pageNum: number;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }
              
              if (pageNum < 1 || pageNum > totalPages) return null;
              
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`page-btn ${currentPage === pageNum ? 'active' : ''}`}
                >
                  {pageNum}
                </button>
              );
            })}

            {currentPage < totalPages - 2 && totalPages > 5 && (
              <>
                {currentPage < totalPages - 3 && <span className="ellipsis">...</span>}
                <button onClick={() => setCurrentPage(totalPages)} className="page-btn">{totalPages}</button>
              </>
            )}

            <button 
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="page-btn nav-btn"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;