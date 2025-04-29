document.querySelectorAll('input[name="objectType"]').forEach(radio => {
    radio.addEventListener('change', function() {
        // Ẩn tất cả các thẻ card
        document.querySelectorAll('.requirement-content').forEach(card => card.classList.remove('active'));

        // Hiển thị thẻ card tương ứng dựa trên radio button được chọn
        if (document.getElementById('bth-brokerRadio').checked) {
            document.getElementById('bth-brokerContent').classList.add('active');
        } else if (document.getElementById('bth-partnerRadio').checked) {
            document.getElementById('bth-partnerContent').classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var submitButton = document.getElementById('bth-submitButton');
    
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Redirect to another page
        window.location.href = 'infoRegister.html';  
    });
});
