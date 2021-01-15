import React, { useState } from "react";
import QrReader from "react-qr-scanner";
export default function QRCode(props) {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(true);
  function handleScan(data) {
    setResult(data);
    if (data !== null) {
      console.log(data);
      setLoading(false);
    }
  }
  function handleError(err) {
    console.log(err);
  }
  const previewStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
  };
  const camStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const textStyle = {
    fontSize: "2vh",
    textAlign: "center",
  };

  return (
    <>
      <div style={camStyle}>
        {loading && (
          <QrReader
            delay={100}
            style={previewStyle}
            onError={handleError}
            onScan={handleScan}
          />
        )}
      </div>
      <div style={textStyle}>
        <strong>{result}</strong>
      </div>
    </>
  );
}
