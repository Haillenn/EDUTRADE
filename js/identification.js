const canvas = document.getElementById('bth-signatureCanvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});

canvas.addEventListener('mouseout', () => {
    isDrawing = false;
});

function setupImageClick(imageId, inputId) {
    const image = document.getElementById(imageId);
    const fileInput = document.getElementById(inputId);
    image.addEventListener('click', () => {
        fileInput.click();
    });
}

// Set up click events for images
setupImageClick('bth-uploadFront', 'bth-fileFront');
setupImageClick('bth-uploadBack', 'bth-fileBack');
setupImageClick('bth-uploadFace', 'bth-fileFace');
setupImageClick('bth-uploadBusinessLicense', 'bth-fileBusinessLicense');
setupImageClick('bth-uploadDigitalSignature', 'bth-fileDigitalSignature');

document.addEventListener('DOMContentLoaded', function() {
    var submitButton = document.getElementById('bth-submitButton');
    
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Redirect to another page
        window.location.href = 'check.html';  
    });
});