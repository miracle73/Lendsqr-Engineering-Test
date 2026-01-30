import React from 'react';
import './UserDetail.scss';

interface UserDetailProps {
  user: {
    id: string;
    userName: string;
    email: string;
    phoneNumber: string;
    orgName: string;
    status: string;
  };
  onBack: () => void;
}

const UserDetail: React.FC<UserDetailProps> = ({ user, onBack }) => {
  const [activeTab, setActiveTab] = React.useState('general');

  const tabs = [
    { id: 'general', label: 'General Details' },
    { id: 'documents', label: 'Documents' },
    { id: 'bank', label: 'Bank Details' },
    { id: 'loans', label: 'Loans' },
    { id: 'savings', label: 'Savings' },
    { id: 'app', label: 'App and System' },
  ];

  return (
    <div className="user-detail">
      {/* Back Button */}
      <button className="back-btn" onClick={onBack}>
        <svg width="28" height="10" viewBox="0 0 28 10" fill="none">
          <path d="M0.94 5.34L4.94 9.34L5.88 8.4L3.14 5.66H28V4.66H3.14L5.88 1.94L4.94 1L0.94 5L0.94 5.34Z" fill="#545F7D"/>
        </svg>
        <span>Back to Users</span>
      </button>

      {/* Header */}
      <div className="detail-header">
        <h1 className="page-title">User Details</h1>
        <div className="action-buttons">
          <button className="btn-blacklist">BLACKLIST USER</button>
          <button className="btn-activate">ACTIVATE USER</button>
        </div>
      </div>

      {/* Profile Card */}
      <div className="profile-card">
        <div className="profile-top">
          <div className="profile-info">
            <div className="avatar">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="20" fill="#213F7D" fillOpacity="0.1"/>
                <path d="M20 12C17.79 12 16 13.79 16 16C16 18.21 17.79 20 20 20C22.21 20 24 18.21 24 16C24 13.79 22.21 12 20 12ZM20 22C16.67 22 10 23.67 10 27V28H30V27C30 23.67 23.33 22 20 22Z" fill="#213F7D"/>
              </svg>
            </div>
            <div className="name-section">
              <h2>Grace Effiom</h2>
              <p>LSQFf587g90</p>
            </div>
          </div>

          <div className="tier-section">
            <p className="tier-label">User's Tier</p>
            <div className="stars">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#E9B200"/>
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" stroke="#E9B200" fill="none"/>
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" stroke="#E9B200" fill="none"/>
              </svg>
            </div>
          </div>

          <div className="balance-section">
            <h2>₦200,000.00</h2>
            <p>9912345678/Providus Bank</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Details Content */}
      <div className="details-content">
        {activeTab === 'general' && (
          <>
            {/* Personal Information */}
            <section className="info-section">
              <h3>Personal Information</h3>
              <div className="info-grid">
                <div className="info-item">
                  <label>FULL NAME</label>
                  <p>Grace Effiom</p>
                </div>
                <div className="info-item">
                  <label>PHONE NUMBER</label>
                  <p>07060780922</p>
                </div>
                <div className="info-item">
                  <label>EMAIL ADDRESS</label>
                  <p>grace@gmail.com</p>
                </div>
                <div className="info-item">
                  <label>BVN</label>
                  <p>07060780922</p>
                </div>
                <div className="info-item">
                  <label>GENDER</label>
                  <p>Female</p>
                </div>
                <div className="info-item">
                  <label>MARITAL STATUS</label>
                  <p>Single</p>
                </div>
                <div className="info-item">
                  <label>CHILDREN</label>
                  <p>None</p>
                </div>
                <div className="info-item">
                  <label>TYPE OF RESIDENCE</label>
                  <p>Parent's Apartment</p>
                </div>
              </div>
            </section>

            {/* Education and Employment */}
            <section className="info-section">
              <h3>Education and Employment</h3>
              <div className="info-grid">
                <div className="info-item">
                  <label>LEVEL OF EDUCATION</label>
                  <p>B.Sc</p>
                </div>
                <div className="info-item">
                  <label>EMPLOYMENT STATUS</label>
                  <p>Employed</p>
                </div>
                <div className="info-item">
                  <label>SECTOR OF EMPLOYMENT</label>
                  <p>FinTech</p>
                </div>
                <div className="info-item">
                  <label>DURATION OF EMPLOYMENT</label>
                  <p>2 years</p>
                </div>
                <div className="info-item">
                  <label>OFFICE EMAIL</label>
                  <p>grace@lendsqr.com</p>
                </div>
                <div className="info-item">
                  <label>MONTHLY INCOME</label>
                  <p>₦200,000.00 - ₦400,000.00</p>
                </div>
                <div className="info-item">
                  <label>LOAN REPAYMENT</label>
                  <p>40,000</p>
                </div>
              </div>
            </section>

            {/* Socials */}
            <section className="info-section">
              <h3>Socials</h3>
              <div className="info-grid">
                <div className="info-item">
                  <label>TWITTER</label>
                  <p>@grace_effiom</p>
                </div>
                <div className="info-item">
                  <label>FACEBOOK</label>
                  <p>Grace Effiom</p>
                </div>
                <div className="info-item">
                  <label>INSTAGRAM</label>
                  <p>@grace_effiom</p>
                </div>
              </div>
            </section>

            {/* Guarantor */}
            <section className="info-section">
              <h3>Guarantor</h3>
              <div className="info-grid">
                <div className="info-item">
                  <label>FULL NAME</label>
                  <p>Debby Ogana</p>
                </div>
                <div className="info-item">
                  <label>PHONE NUMBER</label>
                  <p>07060780922</p>
                </div>
                <div className="info-item">
                  <label>EMAIL ADDRESS</label>
                  <p>debby@gmail.com</p>
                </div>
                <div className="info-item">
                  <label>RELATIONSHIP</label>
                  <p>Sister</p>
                </div>
              </div>
            </section>

            {/* Second Guarantor */}
            <section className="info-section guarantor-section">
              <div className="info-grid">
                <div className="info-item">
                  <label>FULL NAME</label>
                  <p>Debby Ogana</p>
                </div>
                <div className="info-item">
                  <label>PHONE NUMBER</label>
                  <p>07060780922</p>
                </div>
                <div className="info-item">
                  <label>EMAIL ADDRESS</label>
                  <p>debby@gmail.com</p>
                </div>
                <div className="info-item">
                  <label>RELATIONSHIP</label>
                  <p>Sister</p>
                </div>
              </div>
            </section>
          </>
        )}

        {activeTab !== 'general' && (
          <div className="empty-tab">
            <p>No {tabs.find(t => t.id === activeTab)?.label} available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetail;