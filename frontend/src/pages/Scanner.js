import React, { useEffect, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";

function Scan() {
  const scannerRef = useRef(null);
  const isRunning = useRef(false);

  useEffect(() => {
    const scanner = new Html5Qrcode("reader");
    scannerRef.current = scanner;

    setTimeout(() => {
      Html5Qrcode.getCameras()
        .then((devices) => {
          if (devices.length > 0) {
            const cameraId = devices[0].id;

            scanner.start(
              cameraId,
              { fps: 10, qrbox: 250 },
              (decodedText) => {
                console.log("QR:", decodedText);
                window.location.href = decodedText;
              },
              (err) => {}
            )
            .then(() => {
              isRunning.current = true;
            })
            .catch((err) => console.log(err));
          }
        })
        .catch((err) => console.log(err));
    }, 500); // ✅ delay fixes width=0 issue

    return () => {
      if (scannerRef.current && isRunning.current) {
        scannerRef.current.stop().catch(() => {});
        isRunning.current = false;
      }
    };
  }, []);

  return (
    <div>
      <h2>Scan QR Code</h2>
      <div id="reader" style={{ width: "300px" }}></div>
    </div>
  );
}

export default Scan;