(() => {
  const $app = document.getElementById('app');
  if (!$app) return;
  $app.innerHTML = `
    <div style="padding:24px;text-align:center">
      <h1 style="color:#35f0c0">Galactic Academy</h1>
      <p>Recovery mode: the full app.js is too large for remote update tools right now.</p>
      <p class="dim">Please upload the complete local app.js (and content/ folder) from your computer to this repo, then the auto-deploy will publish the working version.</p>
      <button onclick="location.reload()" style="margin-top:16px;padding:12px 24px;background:#35f0c0;border:0;border-radius:12px;font-weight:700;color:#04251d">Reload</button>
    </div>
  `;
})();
