# DIET Portal - Quick Start Guide

## Getting Started

### 1. Open Portal in Browser
Use a local web server to open the site:

**Option A: Python Server**
```bash
python -m http.server 8000
```
Then open: `http://localhost:8000/portal.html`

**Option B: VS Code Live Server**
- Install "Live Server" extension
- Right-click `portal.html` → "Open with Live Server"

### 2. Use Portal
- Enter your Roll Number
- Enter a password
- Select your department
- Click **Sign In to Portal →** or **Register Account**

### 3. Register Behavior
Clicking **Register Account** now opens the portal immediately without any backend.

## Project Structure
```
DIET-PROJECT/
├── index.html              # Main landing page
├── portal.html             # Student portal
├── admissions.html         # Admissions page
├── css/                    # Stylesheets
├── js/                     # Frontend JavaScript
├── firebase/               # Firebase config
```

## Features
✅ Local portal navigation without backend
✅ Immediate portal access via Register
✅ Login and registration handled on the frontend

## Support
- No backend required for the portal flow
- Open `portal.html` with a local server or Live Server

