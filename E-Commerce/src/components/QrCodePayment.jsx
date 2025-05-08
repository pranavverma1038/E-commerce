import React, { useEffect, useState } from 'react';
import { useLocation} from 'react-router-dom';


const QrCodePayment = () => {
  const location = useLocation();
  const { cart = [], total = 0 } = location.state || {};
  const [qrSrc, setQrSrc] = useState('');
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const upiId = "pranav2000verma@oksbi";
  const payeeName = "Pranav Verma";

  useEffect(() => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    setIsMobileDevice(isMobile);
    const upiString = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${total}&cu=INR`;

    if (!isMobile) {
      const qr = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiString)}`;
      setQrSrc(qr);
    } else {
      window.location.href = upiString;
    }
  }, [total]);
  

  return (
    <div className="max-w-3xl mx-auto p-6 mt-20">
      <h1 className="text-3xl font-bold mb-6 text-center">Payment Gateway</h1>

      <div className="mt-6 text-right text-2xl font-bold text-center">Total: ₹{total}</div>

      {!isMobileDevice && qrSrc && (
        <div className="mt-10 text-center">
          <p className="mb-4 text-lg font-medium">Scan to Pay</p>
          <img src={qrSrc} alt="QR Code" className="mx-auto border rounded-lg p-2 bg-white" />
          <p className="mt-2 text-sm text-gray-500">E-Cart</p>
        </div>
      )}
    </div>
  );
};

export default QrCodePayment;
