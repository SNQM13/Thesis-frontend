// Function to show content based on the section ID passed
function showContent(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    
    // Hide all content sections
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Show the selected section by its ID
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}