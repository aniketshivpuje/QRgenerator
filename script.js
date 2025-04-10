function generateQR() {
    const input = document.getElementById("qr-input").value.trim();
    const img = document.getElementById("qr-img");
  
    if (!input) {
      alert("Please enter some text or a URL!");
      return;
    }
  
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(input)}&size=200x200`;
    img.src = qrUrl;
    img.style.display = "block";
  }
  