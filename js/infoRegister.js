document.addEventListener('DOMContentLoaded', function() {
    // Hàm để tạo dãy số 8 chữ số ngẫu nhiên
    function generateRandomNumber(length) {
        let result = '';
        const characters = '0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    // Tạo dãy số 8 chữ số và gán vào trường Username
    var usernameInput = document.getElementById('bth-Username');
    usernameInput.value = generateRandomNumber(8);
});

document.addEventListener('DOMContentLoaded', function() {
    var passwordInput = document.getElementById('bth-inputPassword');
    var lengthRequirement = document.getElementById('bth-lengthRequirement');
    var complexityRequirement = document.getElementById('bth-complexityRequirement');

    // Hàm kiểm tra các yêu cầu mật khẩu
    function validatePassword(password) {
        var lengthValid = password.length >= 8 && password.length <= 32;
        var complexityValid = /[a-z]/.test(password) &&
                              /[A-Z]/.test(password) &&
                              /\d/.test(password) &&
                              /[\W_]/.test(password); // ký tự đặc biệt

        // Cập nhật màu sắc của các thông báo
        lengthRequirement.classList.toggle('valid', lengthValid);
        lengthRequirement.classList.toggle('invalid', !lengthValid);

        complexityRequirement.classList.toggle('valid', complexityValid);
        complexityRequirement.classList.toggle('invalid', !complexityValid);
    }

    // Kiểm tra mật khẩu khi người dùng nhập
    passwordInput.addEventListener('input', function() {
        validatePassword(passwordInput.value);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var passwordInput = document.getElementById('bth-inputPassword');
    var confirmPasswordInput = document.getElementById('bth-inputPasswordConfirm');
    var passwordMatchError = document.getElementById('bth-passwordMatchError');

    function validatePasswords() {
        var password = passwordInput.value;
        var confirmPassword = confirmPasswordInput.value;

        if (password !== confirmPassword) {
            passwordMatchError.style.display = 'block'; // Hiển thị thông báo lỗi
        } else {
            passwordMatchError.style.display = 'none'; // Ẩn thông báo lỗi
        }
    }

    // Kiểm tra khi người dùng nhập vào các trường mật khẩu
    passwordInput.addEventListener('input', validatePasswords);
    confirmPasswordInput.addEventListener('input', validatePasswords);
});

document.addEventListener('DOMContentLoaded', function() {
    var submitButton = document.getElementById('bth-submitButton');
    
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        window.location.href = 'contact.html';  
    });
});
