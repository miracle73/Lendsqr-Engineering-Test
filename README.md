# Lendsqr Users Page - Setup Instructions

## Quick Start

1. **Copy the files to your React project:**
   - `Users.tsx` → `src/pages/Users/Users.tsx`
   - `Users.scss` → `src/pages/Users/Users.scss`
   - `App.tsx` → `src/App.tsx` (or integrate into your existing App)
   - `App.scss` → `src/App.scss`

2. **Make sure SCSS is installed:**
   ```bash
   npm install sass
   ```

3. **Install React Router (if not already installed):**
   ```bash
   npm install react-router-dom
   npm install @types/react-router-dom --save-dev
   ```

4. **Run your app:**
   ```bash
   npm start
   ```

## Features Implemented

✅ **Stats Cards** - 4 cards showing user statistics  
✅ **Users Table** - Displaying user data with proper columns  
✅ **Filter Functionality** - Click filter icon to open filter popup  
✅ **Pagination** - Navigate through 500 mock users  
✅ **Action Menu** - Three-dot menu for each user row  
✅ **Status Badges** - Color-coded status (Active, Inactive, Pending, Blacklisted)  
✅ **Mobile Responsive** - Works on all screen sizes  
✅ **Mock Data** - 500 users generated automatically  

## File Structure

```
src/
├── pages/
│   └── Users/
│       ├── Users.tsx      # Main component
│       └── Users.scss     # Styles
├── App.tsx                # App wrapper
└── App.scss               # Global styles
```

## Key Features

### 1. Filter System
- Click any filter icon in table header
- Filter by: Organization, Username, Email, Phone, Status
- Reset or Apply filters

### 2. Pagination
- Show 10/20/50/100 items per page
- Navigate with prev/next buttons
- Page numbers displayed

### 3. Action Menu
- Click three-dot icon on any row
- Options: View Details, Blacklist User, Activate User

### 4. Responsive Design
- Desktop: Full table layout
- Tablet: Adjusted spacing
- Mobile: Horizontal scroll for table, stacked stats cards

## Customization

### Change Colors
Edit the SCSS variables in `Users.scss`:
```scss
// Status colors
.status-active { color: #39cd62; }
.status-inactive { color: #545f7d; }
.status-pending { color: #e9b200; }
.status-blacklisted { color: #e4033b; }
```

### Add Real API
Replace the mock data generation in `useEffect`:
```typescript
useEffect(() => {
  // Replace this with your API call
  fetch('your-api-endpoint')
    .then(res => res.json())
    .then(data => {
      setUsers(data);
      setFilteredUsers(data);
    });
}, []);
```

## Notes

- Uses Work Sans font (loaded from Google Fonts)
- All data is mock-generated (500 users)
- Filter popup appears on first filter icon click
- Mobile responsive with horizontal scroll on small screens
- Status badges are color-coded per design requirements

## Next Steps

1. Connect to real API endpoint
2. Add routing to User Details page
3. Implement actual user actions (blacklist, activate)
4. Add localStorage for filter preferences
5. Add unit tests