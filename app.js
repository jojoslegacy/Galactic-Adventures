(() => {
  const $app = document.getElementById('app');
  if (!$app) return;
  $app.innerHTML = `
    <div style="padding:24px;text-align:center">
      <h1 style="color:#35f0c0">Galactic Academy</h1>
      <p>The app is recovering. The full app.js and content scripts (content/*.js) need to be restored in the repository.</p>
      <p class="dim">Please re-upload the complete local project (including the content/ folder and icons/) and push so the curriculum and correct logo load.</p>
      <p>Auto-deploy is active — the next successful push will update the live site.</p>
      <button onclick="location.reload()" style="margin-top:16px;padding:12px 24px;background:#35f0c0;border:0;border-radius:12px;font-weight:700;color:#04251d">Reload</button>
    </div>
  `;
})();
