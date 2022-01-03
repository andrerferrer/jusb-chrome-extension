const copyBtn = document.querySelector('.CopyContentModal-copyButton.btn.btn--md.btn--blue')

if (copyBtn) {
  copyBtn.addEventListener('click', () => {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", document.querySelector("#app-root > div > div.portal-container > div > span > div > div.modal-dialog.modal-dialog-full > div > div.modal-body > div > div > div > div").innerText)
  })
}
