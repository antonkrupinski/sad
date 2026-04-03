document.getElementById('applyBtn').addEventListener('click', () => {
  const grade = document.getElementById('gradeInput').value.trim();
  if (grade) {
    chrome.storage.sync.set({ desiredGrade: grade }, () => {
      alert(`Desired grade set to ${grade}`);
      // Execute content script to change the grade
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          files: ['content.js']
        });
      });
    });
  } else {
    alert('Please enter a grade.');
  }
});
