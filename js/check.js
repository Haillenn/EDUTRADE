document.addEventListener('DOMContentLoaded', function () {
    const useSameAddressCheckbox = document.getElementById('useSameAddress');
    const permanentCountrySelect = document.getElementById('permanent-country');
    const permanentCitySelect = document.getElementById('permanent-city');
    const permanentDistrictSelect = document.getElementById('permanent-district');
    const contactCountrySelect = document.getElementById('contact-country');
    const contactCitySelect = document.getElementById('contact-city');
    const contactDistrictSelect = document.getElementById('contact-district');

    const contactAddressDiv = document.getElementById('contact-address');

    function updateContactAddress() {
        if (useSameAddressCheckbox.checked) {
            contactCountrySelect.value = permanentCountrySelect.value;
            contactCitySelect.value = permanentCitySelect.value;
            contactDistrictSelect.value = permanentDistrictSelect.value;
            contactAddressDiv.classList.add('hidden');
        } else {
            contactAddressDiv.classList.remove('hidden');
        }
    }

    useSameAddressCheckbox.addEventListener('change', function () {
        updateContactAddress();
    });

    permanentCountrySelect.addEventListener('change', function () {
        if (useSameAddressCheckbox.checked) {
            contactCountrySelect.value = this.value;
        }
    });

    permanentCitySelect.addEventListener('change', function () {
        if (useSameAddressCheckbox.checked) {
            contactCitySelect.value = this.value;
        }
    });

    permanentDistrictSelect.addEventListener('change', function () {
        if (useSameAddressCheckbox.checked) {
            contactDistrictSelect.value = this.value;
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('bth-submitButton');

    submitButton.addEventListener('click', function (event) {
        event.preventDefault(); 

        simulateRegistration().then(success => {
            if (success) {
                // Hiển thị modal thành công
                const successModal = new bootstrap.Modal(document.getElementById('bth-successModal'));
                successModal.show();
            } else {
                // Hiển thị modal thất bại
                const errorModal = new bootstrap.Modal(document.getElementById('bth-errorModal'));
                errorModal.show();
            }
        });
    });

    // Hàm giả lập đăng ký
    function simulateRegistration() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const isSuccess = Math.random() > 0.5; 
                resolve(isSuccess);
            }, 1000); 
        });
    }
});