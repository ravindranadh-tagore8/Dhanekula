function doLogin() {
  const idEl = document.getElementById('student-id');
  const pwEl = document.getElementById('password');
  const deptEl = document.getElementById('dept-select');

  const id = idEl ? idEl.value.trim() : '';
  const pw = pwEl ? pwEl.value.trim() : '';
  const dept = deptEl ? deptEl.value : '';

  if (!id || !pw || !dept) {
    alert('Please fill all fields.');
    return;
  }

  const student = {
    id,
    name: id,
    department: dept,
    email: '',
    semester: 6,
    gpa: 0
  };

  localStorage.setItem('studentData', JSON.stringify(student));
  displayPortal(student);
}

function doRegister() {
  const idEl = document.getElementById('student-id');
  const pwEl = document.getElementById('password');
  const deptEl = document.getElementById('dept-select');

  const id = idEl ? idEl.value.trim() : '';
  const pw = pwEl ? pwEl.value.trim() : '';
  const dept = deptEl ? deptEl.value : '';

  if (!id || !pw || !dept) {
    alert('Please fill all required fields before registering.');
    return;
  }

  const name = prompt('Enter your full name to open the portal:') || id;
  const email = prompt('Enter your email address:') || '';

  const student = {
    id,
    name,
    department: dept,
    email,
    semester: 1,
    gpa: 0
  };

  localStorage.setItem('studentData', JSON.stringify(student));
  displayPortal(student);
}

function displayPortal(student) {
  const loginScreen = document.getElementById('login-screen');
  const portalScreen = document.getElementById('portal-screen');
  
  if (loginScreen) loginScreen.style.display = 'none';
  if (portalScreen) portalScreen.style.display = 'block';

  const portalName = document.getElementById('portal-name');
  if (portalName) portalName.textContent = student.name || student.id;

  const sidebarName = document.getElementById('sidebar-name');
  if (sidebarName) sidebarName.textContent = student.name || 'Student';

  const sidebarId = document.getElementById('sidebar-id');
  if (sidebarId) sidebarId.textContent = student.id + ' · ' + student.department;

  const sidebarAvatar = document.getElementById('sidebar-avatar');
  if (sidebarAvatar) sidebarAvatar.textContent = (student.name || student.id).charAt(0).toUpperCase();

  const now = new Date();
  const portalDate = document.getElementById('portal-date');
  if (portalDate) portalDate.textContent = now.toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }) + ' · Semester ' + (student.semester || 6);
}

function doLogout() {
  const portalScreen = document.getElementById('portal-screen');
  const loginScreen = document.getElementById('login-screen');
  if (portalScreen) portalScreen.style.display = 'none';
  if (loginScreen) loginScreen.style.display = 'flex';

  const idEl = document.getElementById('student-id');
  const pwEl = document.getElementById('password');
  const deptEl = document.getElementById('dept-select');
  if (idEl) idEl.value = '';
  if (pwEl) pwEl.value = '';
  if (deptEl) deptEl.value = '';

  // Clear stored authentication data
  localStorage.removeItem('authToken');
  localStorage.removeItem('studentData');
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const loginScreen = document.getElementById('login-screen');
    if (loginScreen && loginScreen.style.display !== 'none') doLogin();
  }
});