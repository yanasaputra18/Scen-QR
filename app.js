let image = document.getElementById("image");
let content = document.getElementById("content");
let btnCreate = document.getElementById("btnCreate");

btnCreate.onclick = () => {
  // Periksa jika input content kosong
  if (content.value.trim() === "") {
    alert("Please enter some content to generate QR code.");
    return;
  }

  // Generate QR code menggunakan API
  let linkQR = "https://api.qrserver.com/v1/create-qr-code/";
  image.src = `${linkQR}?size=500x500&data=${encodeURIComponent(content.value)}`;
};
