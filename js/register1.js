document.querySelectorAll('input[name="objectType"]').forEach(radio => {
    radio.addEventListener('change', function() {
        // Ẩn tất cả các thẻ card
        document.querySelectorAll('.requirement-content').forEach(card => card.classList.remove('active'));

        // Hiển thị thẻ card tương ứng dựa trên radio button được chọn
        if (document.getElementById('bth-personalRadio').checked) {
            document.getElementById('bth-personalContent').classList.add('active');
        } else if (document.getElementById('bth-personalPublicRadio').checked) {
            document.getElementById('bth-personalPublicContent').classList.add('active');
        } else if (document.getElementById('bth-organizationRadio').checked) {
            document.getElementById('bth-organizationContent').classList.add('active');
        } else if (document.getElementById('bth-organizationPublicRadio').checked) {
            document.getElementById('bth-organizationPublicContent').classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var submitButton = document.getElementById('bth-submitButton');
    
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Redirect to another page
        window.location.href = 'register2.html';  
    });
});
