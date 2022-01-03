chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.executeScript({
    code: `
      const copyBtn=document.querySelector(".CopyContentModal-copyButton.btn.btn--md.btn--blue");copyBtn&&window.prompt("Copy to clipboard: Ctrl+C, Enter",document.querySelector("#app-root > div > div.portal-container > div > span > div > div.modal-dialog.modal-dialog-full > div > div.modal-body > div > div > div > div").innerText);
    `
  });
});
