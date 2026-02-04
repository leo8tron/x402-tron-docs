window.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('__docusaurus-base-url-issue-banner-container')
  if (modal) {
    modal.style.display = 'none'
    modal.style.visibility = 'hidden'
    modal.style.opacity = '0'
    modal.style.height = '0'
    modal.style.pointerEvents = 'none'
  }
})
