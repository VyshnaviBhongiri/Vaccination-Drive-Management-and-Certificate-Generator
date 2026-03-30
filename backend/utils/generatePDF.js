const PDFDocument = require("pdfkit");

function generatePDF(res, certId, qrImage) {
  const doc = new PDFDocument();

  res.setHeader("Content-Type", "application/pdf");

  doc.fontSize(20).text("Vaccination Certificate", { align: "center" });
  doc.moveDown();

  doc.fontSize(12).text(`Certificate ID: ${certId}`);
  doc.moveDown();

  doc.image(qrImage, {
    fit: [150, 150],
    align: "center"
  });

  doc.pipe(res);
  doc.end();
}

module.exports = generatePDF;