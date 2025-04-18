// Show image preview
document.getElementById('xrayInput').addEventListener('change', function (e) {
    const file = e.target.files[0];
    const preview = document.getElementById('preview');
  
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        preview.src = event.target.result;
        preview.style.display = 'block';
      };
      reader.readAsDataURL(file);
    }
  });
  
  // Dummy check for now (random yes/no)
  function checkDisease() {
    const result = document.getElementById('result');
    const hasDisease = Math.random() > 0.5;
  
    if (hasDisease) {
      result.textContent = "Disease Detected: YES ";
      result.style.color = "red";
    } else {
      result.textContent = "Disease Detected: NO ";
      result.style.color = "green";
    }
  }
  