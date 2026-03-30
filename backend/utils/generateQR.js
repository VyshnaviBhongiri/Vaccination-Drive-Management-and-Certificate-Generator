const QRCode = require("qrcode");

async function generateQR(certId) {
  const url = `http://10.250.12.50:5000/verify/${certId}`; // 🔥 IMPORTANT

  return await QRCode.toDataURL(url);
}

module.exports = generateQR;