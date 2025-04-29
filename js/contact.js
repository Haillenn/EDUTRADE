document.addEventListener('DOMContentLoaded', function() {
    var submitButton = document.getElementById('bth-submitButton');
    
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Redirect to another page
        window.location.href = 'identification.html';  
    });
});