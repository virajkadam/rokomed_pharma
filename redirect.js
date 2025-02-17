// Save the current path to sessionStorage before redirecting
(function() {
  const currentPath = window.location.pathname;
  const currentSearch = window.location.search;
  const currentHash = window.location.hash;

  // Save the full URL to sessionStorage
  sessionStorage.setItem('redirectUrl', currentPath + currentSearch + currentHash);

  // Redirect to the root with a special query parameter
  window.location.href = `/?currentRoute=${encodeURIComponent(currentPath.slice(1))}`;
})(); 