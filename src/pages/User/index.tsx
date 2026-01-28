import React, { useState, useEffect } from 'react';
import './Users.scss';

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

  // Filter states
  const [filters, setFilters] = useState({
    organization: '',
    username: '',
    email: '',
    date: '',
    phoneNumber: '',
    status: ''
  });

  useEffect(() => {
    // Mock data generation
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

  // Pagination
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
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusClass = (status: string) => {
    return `status-badge status-${status.toLowerCase()}`;
  };

  return (
    <div className="users-content">
      {/* Page Title */}
      <h1 className="page-title">Users</h1>
      
      {/* Stats Cards */}
      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-icon users-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="20" fill="#DF18FF" fillOpacity="0.1"/>
              <path d="M20 11C17.24 11 15 13.24 15 16C15 18.76 17.24 21 20 21C22.76 21 25 18.76 25 16C25 13.24 22.76 11 20 11ZM20 23C16.67 23 10 24.67 10 28V30H30V28C30 24.67 23.33 23 20 23Z" fill="#DF18FF"/>
            </svg>
          </div>
          <p className="stat-label">USERS</p>
          <p className="stat-value">2,453</p>
        </div>

        <div className="stat-card">
          <div className="stat-icon active-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="20" fill="#5718FF" fillOpacity="0.1"/>
              <path d="M20 11C17.24 11 15 13.24 15 16C15 18.76 17.24 21 20 21C22.76 21 25 18.76 25 16C25 13.24 22.76 11 20 11ZM20 23C16.67 23 10 24.67 10 28V30H30V28C30 24.67 23.33 23 20 23Z" fill="#5718FF"/>
            </svg>
          </div>
          <p className="stat-label">ACTIVE USERS</p>
          <p className="stat-value">2,453</p>
        </div>

        <div className="stat-card">
          <div className="stat-icon loans-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="20" fill="#F55F44" fillOpacity="0.1"/>
              <path d="M20 11C17.24 11 15 13.24 15 16C15 18.76 17.24 21 20 21C22.76 21 25 18.76 25 16C25 13.24 22.76 11 20 11ZM20 23C16.67 23 10 24.67 10 28V30H30V28C30 24.67 23.33 23 20 23Z" fill="#F55F44"/>
            </svg>
          </div>
          <p className="stat-label">USERS WITH LOANS</p>
          <p className="stat-value">12,453</p>
        </div>

        <div className="stat-card">
          <div className="stat-icon savings-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="20" fill="#FF3366" fillOpacity="0.1"/>
              <path d="M20 11C17.24 11 15 13.24 15 16C15 18.76 17.24 21 20 21C22.76 21 25 18.76 25 16C25 13.24 22.76 11 20 11ZM20 23C16.67 23 10 24.67 10 28V30H30V28C30 24.67 23.33 23 20 23Z" fill="#FF3366"/>
            </svg>
          </div>
          <p className="stat-label">USERS WITH SAVINGS</p>
          <p className="stat-value">102,453</p>
        </div>
      </div>

      {/* Users Table */}
      <div className="table-container">
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
                  <button 
                    className="menu-btn"
                    onClick={() => setActiveMenu(activeMenu === user.id ? null : user.id)}
                  >
                    ⋮
                  </button>
                  {activeMenu === user.id && (
                    <div className="action-menu">
                      <button className="menu-item">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M8 3.5C9.1 3.5 10 2.6 10 1.5C10 0.4 9.1 -0.5 8 -0.5C6.9 -0.5 6 0.4 6 1.5C6 2.6 6.9 3.5 8 3.5ZM8 5.5C6.9 5.5 6 6.4 6 7.5C6 8.6 6.9 9.5 8 9.5C9.1 9.5 10 8.6 10 7.5C10 6.4 9.1 5.5 8 5.5ZM8 11.5C6.9 11.5 6 12.4 6 13.5C6 14.6 6.9 15.5 8 15.5C9.1 15.5 10 14.6 10 13.5C10 12.4 9.1 11.5 8 11.5Z" fill="#545F7D"/>
                        </svg>
                        View Details
                      </button>
                      <button className="menu-item">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M8 3.5C9.1 3.5 10 2.6 10 1.5C10 0.4 9.1 -0.5 8 -0.5C6.9 -0.5 6 0.4 6 1.5C6 2.6 6.9 3.5 8 3.5ZM8 5.5C6.9 5.5 6 6.4 6 7.5C6 8.6 6.9 9.5 8 9.5C9.1 9.5 10 8.6 10 7.5C10 6.4 9.1 5.5 8 5.5ZM8 11.5C6.9 11.5 6 12.4 6 13.5C6 14.6 6.9 15.5 8 15.5C9.1 15.5 10 14.6 10 13.5C10 12.4 9.1 11.5 8 11.5Z" fill="#545F7D"/>
                        </svg>
                        Blacklist User
                      </button>
                      <button className="menu-item">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M8 3.5C9.1 3.5 10 2.6 10 1.5C10 0.4 9.1 -0.5 8 -0.5C6.9 -0.5 6 0.4 6 1.5C6 2.6 6.9 3.5 8 3.5ZM8 5.5C6.9 5.5 6 6.4 6 7.5C6 8.6 6.9 9.5 8 9.5C9.1 9.5 10 8.6 10 7.5C10 6.4 9.1 5.5 8 5.5ZM8 11.5C6.9 11.5 6 12.4 6 13.5C6 14.6 6.9 15.5 8 15.5C9.1 15.5 10 14.6 10 13.5C10 12.4 9.1 11.5 8 11.5Z" fill="#545F7D"/>
                        </svg>
                        Activate User
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Filter Popup */}
        {showFilter && (
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
        )}

        {/* Pagination */}
        <div className="pagination">
          <div className="pagination-info">
            Showing
            <select value={itemsPerPage} onChange={(e) => setItemsPerPage(Number(e.target.value))}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            out of {filteredUsers.length}
          </div>

          <div className="pagination-controls">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="page-btn"
            >
              &lt;
            </button>
            
            {[...Array(Math.min(5, totalPages))].map((_, i) => {
              let pageNum = i + 1;
              if (currentPage > 3 && totalPages > 5) {
                pageNum = currentPage - 2 + i;
              }
              if (pageNum > totalPages) return null;
              
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

            <button 
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="page-btn"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;