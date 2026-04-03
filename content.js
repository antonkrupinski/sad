// Observe DOM changes
const observer = new MutationObserver(mutations => {
  // Save changes or log them
  // For simplicity, let's save added/removed nodes
  chrome.storage.local.get(['edits'], data => {
    let edits = data.edits || [];
    mutations.forEach(mutation => {
      if (mutation.type === 'childList') {
        edits.push({
          type: 'childList',
          addedNodes: Array.from(mutation.addedNodes).map(node => node.outerHTML),
          removedNodes: Array.from(mutation.removedNodes).map(node => node.outerHTML)
        });
      }
    });
    chrome.storage.local.set({edits});
  });
});

observer.observe(document, { childList: true, subtree: true });

// Reapply saved edits on load
chrome.storage.local.get(['edits'], data => {
  if (data.edits) {
    data.edits.forEach(edit => {
      // Reapply based on saved data
      // For example, re-insert nodes (simplified)
    });
  }
});
