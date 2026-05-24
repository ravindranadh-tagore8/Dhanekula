let currentStep = 1;
const totalSteps = 5;

function showError(id, msg = true) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.add('show');
  }
}

function hideError(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.remove('show');
  }
}

function validateStep(step) {
  let valid = true;

  function req(id, err) {
    const el = document.getElementById(id);
    if (!el || !el.value.trim()) {
      if (el) el.classList.add('error');
      showError(err);
      valid = false;
    } else {
      el.classList.remove('error');
      hideError(err);
    }
  }

  if (step === 1) {
    req('fname', 'fname-err');
    req('lname', 'lname-err');
    req('dob', 'dob-err');
    req('gender', 'gender-err');
    req('address', 'address-err');

    const mobile = document.getElementById('mobile');
    if (!mobile || !/^\d{10}$/.test(mobile.value)) {
      if (mobile) mobile.classList.add('error');
      showError('mobile-err');
      valid = false;
    } else {
      mobile.classList.remove('error');
      hideError('mobile-err');
    }

    const email = document.getElementById('email');
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      if (email) email.classList.add('error');
      showError('email-err');
      valid = false;
    } else {
      email.classList.remove('error');
      hideError('email-err');
    }
  }

  if (step === 3) {
    const prog = document.querySelector('input[name="progtype"]:checked');
    if (!prog) {
      alert('Please select program type');
      valid = false;
    }
    req('branch1', 'branch1-err');
  }

  if (step === 5) {
    if (!document.getElementById('decl1') || !document.getElementById('decl2') ||
      !document.getElementById('decl1').checked || !document.getElementById('decl2').checked) {
      alert('Please accept declarations');
      valid = false;
    }
  }

  return valid;
}

function changeStep(dir) {
  if (dir === 1 && !validateStep(currentStep)) return;
  if (dir === 1 && currentStep === totalSteps) {
    submitForm();
    return;
  }

  const stepEl = document.getElementById(`step-${currentStep}`);
  const nodeEl = document.getElementById(`node-${currentStep}`);
  if (stepEl) stepEl.classList.remove('active');
  if (nodeEl) nodeEl.classList.remove('active');

  if (dir === 1 && nodeEl) nodeEl.classList.add('done');

  currentStep += dir;
  if (currentStep < 1) currentStep = 1;
  if (currentStep > totalSteps) currentStep = totalSteps;

  const stepElNew = document.getElementById(`step-${currentStep}`);
  const nodeElNew = document.getElementById(`node-${currentStep}`);
  if (stepElNew) stepElNew.classList.add('active');
  if (nodeElNew) nodeElNew.classList.add('active');

  const prevBtn = document.getElementById('btn-prev');
  if (prevBtn) prevBtn.style.visibility = currentStep === 1 ? 'hidden' : 'visible';

  const counter = document.getElementById('step-counter');
  if (counter) counter.textContent = `Step ${currentStep} of ${totalSteps}`;

  const nextBtn = document.getElementById('btn-next');
  if (nextBtn) nextBtn.textContent = currentStep === totalSteps ? 'Submit Application' : 'Next →';

  if (currentStep === totalSteps) buildReview();

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function buildReview() {
  const fname = (document.getElementById('fname') || {}).value || '';
  const lname = (document.getElementById('lname') || {}).value || '';
  const mobile = (document.getElementById('mobile') || {}).value || '';
  const email = (document.getElementById('email') || {}).value || '';
  const branch = (document.getElementById('branch1') || {}).value || '';
  const prog = document.querySelector('input[name="progtype"]:checked');

  const summaryEl = document.getElementById('review-summary');
  if (!summaryEl) return;

  summaryEl.innerHTML = `
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
    ${row('Name', fname + ' ' + lname)}
    ${row('Mobile', mobile)}
    ${row('Email', email)}
    ${row('Program', prog ? prog.value : '—')}
    ${row('Branch', branch)}
  </div>
  `;
}

function row(label, value) {
  return `
  <div style="background:#fff;padding:14px;border-radius:10px;border:1px solid #e2e8f0;">
    <div style="font-size:11px;color:#64748b;text-transform:uppercase;margin-bottom:4px;">${label}</div>
    <div style="font-weight:700;">${value || '—'}</div>
  </div>
  `;
}

function submitForm() {
  const appId = 'DIET-2026-' + Math.floor(10000 + Math.random() * 90000);
  const appEl = document.getElementById('app-id-display');
  if (appEl) appEl.textContent = appId;

  const mainWrap = document.getElementById('main-wrap');
  if (mainWrap) mainWrap.style.display = 'none';

  const hero = document.getElementById('hero-strip');
  if (hero) hero.style.display = 'none';

  const progress = document.getElementById('progress-bar-wrap');
  if (progress) progress.style.display = 'none';

  const success = document.getElementById('success-screen');
  if (success) success.style.display = 'flex';
}
async function downloadPDF(){

  const { jsPDF } = window.jspdf;

  const doc = new jsPDF();

  doc.setFontSize(22);

  doc.text(
    'DIET Admission Application',
    20,
    20
  );

  doc.setFontSize(14);

  doc.text(
    'Application Submitted Successfully',
    20,
    40
  );

  doc.text(
    'Application ID:',
    20,
    60
  );

  doc.text(
    document.getElementById('app-id-display')
    .textContent,
    70,
    60
  );

  doc.save('DIET_Application.pdf');

}