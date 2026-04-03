// Function to scrape classes and grades
function getClassesAndGrades() {
  const classes = [];
  // Example selector; change to match your Canvas page
  document.querySelectorAll('.some-class-selector').forEach(el => {
    const className = el.querySelector('.class-name').innerText;
    const gradeText = el.querySelector('.grade').innerText;
    classes.push({ element: el, name: className, grade: gradeText });
  });
  return classes;
}

// Prompt user for target grades
function promptForGrades(classes) {
  classes.forEach(c => {
    const target = prompt(`Enter desired grade for ${c.name} (current: ${c.grade}):`, c.grade);
    if (target) {
      c.targetGrade = target;
    }
  });
}

// Update grades on the page
function updateGrades(classes) {
  classes.forEach(c => {
    if (c.element && c.targetGrade) {
      const gradeEl = c.element.querySelector('.grade');
      if (gradeEl) {
        gradeEl.innerText = c.targetGrade;
      }
    }
  });
}

// Main execution
(function() {
  const classes = getClassesAndGrades();
  if (classes.length > 0) {
    promptForGrades(classes);
    updateGrades(classes);
  } else {
    alert('No classes found. Please adjust selectors.');
  }
})();
