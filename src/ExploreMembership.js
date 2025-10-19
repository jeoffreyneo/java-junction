import React, { useState, useEffect } from "react";

const CARD_NETWORKS = ["Visa", "Mastercard", "Maestro", "JCB", "UnionPay", "Amex"];
const LOCALKEY = "jj_membership_demo_paid_v1";

const ExploreMembership = () => {
  const [showModal, setShowModal] = useState(false);
  const [method, setMethod] = useState("card");
  const [processing, setProcessing] = useState(false);
  const [paid, setPaid] = useState(false);
  const [error, setError] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [expectedOtp, setExpectedOtp] = useState("");

  const [form, setForm] = useState({
    cardholder: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    network: CARD_NETWORKS[0],
    bankName: "",
    phone: "",
  });

  useEffect(() => {
    const v = localStorage.getItem(LOCALKEY);
    if (v === "1") setPaid(true);
  }, []);

  useEffect(() => {
    if (paid) localStorage.setItem(LOCALKEY, "1");
    else localStorage.removeItem(LOCALKEY);
  }, [paid]);

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    if (!processing) {
      setShowModal(false);
      resetForm();
    }
  };

  const resetForm = () => {
    setForm({
      cardholder: "",
      cardNumber: "",
      expiry: "",
      cvc: "",
      network: CARD_NETWORKS[0],
      bankName: "",
      phone: "",
    });
    setOtpSent(false);
    setOtpValue("");
    setExpectedOtp("");
    setError("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["cardNumber", "cvc", "phone"].includes(name)) {
      const cleaned = value.replace(/[^\d]/g, "");
      setForm((f) => ({ ...f, [name]: cleaned }));
    } else setForm((f) => ({ ...f, [name]: value }));
  };

  const validateCard = () => {
    if (!form.cardholder.trim()) return "Enter cardholder name.";
    if (!/^\d{12,19}$/.test(form.cardNumber))
      return "Card number must be 12–19 digits.";
    if (!/^\d{2}\/\d{2}$/.test(form.expiry))
      return "Expiry must be in MM/YY format.";
    if (!/^\d{3,4}$/.test(form.cvc)) return "CVC must be 3–4 digits.";
    if (!form.bankName.trim()) return "Enter bank name.";
    return "";
  };

  const validatePhone = () => {
    const p = form.phone.trim();
    if (!/^(09\d{9}|639\d{9}|\+639\d{9})$/.test(p))
      return "Enter a valid PH phone number (e.g. 09171234567).";
    return "";
  };

  const handleCardPay = () => {
    const err = validateCard();
    if (err) return setError(err);
    setError("");
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setPaid(true);
      setShowModal(false);
    }, 1200);
  };

  const sendOtp = () => {
    const err = validatePhone();
    if (err) return setError(err);
    setError("");
    setProcessing(true);
    setTimeout(() => {
      const otp = String(100000 + Math.floor(Math.random() * 900000));
      setExpectedOtp(otp);
      setOtpSent(true);
      setProcessing(false);
    }, 1000);
  };

  const confirmOtp = () => {
    if (otpValue !== expectedOtp) return setError("Incorrect OTP (demo).");
    setError("");
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setPaid(true);
      setShowModal(false);
    }, 1000);
  };

  return (
    <section
      id="membership"
      className="max-w-4xl mx-auto p-6 bg-transparent rounded shadow-md my-12 text-[#D7CCC8]"
    >
      <h2 className="text-3xl font-bold mb-4 text-[#EFEBE9]">Explore Membership</h2>
      <p className="mb-6 text-[#D7CCC8]">
        Join Java Junction Cyber Café as a member and enjoy exclusive benefits,
        discounts, and priority access to our services.
      </p>

      <ul className="mb-6 list-disc list-inside text-[#D7CCC8]/90">
        <li>Unlimited access to our gaming stations</li>
        <li>Discounted rates on hourly usage</li>
        <li>Free refreshments during peak hours</li>
        <li>Priority reservations for events and tournaments</li>
        <li>Exclusive members-only promotions</li>
      </ul>

      {/* Brown Sign Up Button */}
      <button
        onClick={openModal}
        className="bg-[#8D6E63] hover:bg-[#6D4C41] text-[#EFEBE9] py-2 px-6 rounded shadow-md transition"
      >
        Sign Up Now
      </button>

      {/* Success Message */}
      {paid && (
        <div className="mt-6 p-4 rounded bg-[#4E342E]/70 border border-[#6D4C41] text-[#EFEBE9]">
          <h4 className="font-semibold">Payment successful — Welcome!</h4>
          <p className="text-sm text-[#D7CCC8]">
            You are now a Java Junction member (demo).
          </p>
        </div>
      )}

      {/* Payment Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          />
          <div className="relative w-full max-w-md bg-[#4E342E] border border-[#6D4C41] rounded-lg p-6 z-10 text-[#EFEBE9] shadow-2xl">
            <h3 className="text-xl font-semibold mb-3 text-[#EFEBE9]">
              Payment Center
            </h3>
            <p className="text-sm text-[#D7CCC8] mb-4">
              This is a demo-only payment. No real transactions occur.
            </p>

            {/* Payment Method Buttons */}
            <div className="flex gap-3 mb-4">
              <button
                onClick={() => setMethod("card")}
                className={`px-3 py-1 rounded ${
                  method === "card"
                    ? "bg-[#8D6E63]"
                    : "bg-[#3E2723] hover:bg-[#5D4037]"
                }`}
              >
                ATM Card
              </button>
              <button
                onClick={() => setMethod("gcash")}
                className={`px-3 py-1 rounded ${
                  method === "gcash"
                    ? "bg-[#8D6E63]"
                    : "bg-[#3E2723] hover:bg-[#5D4037]"
                }`}
              >
                GCash
              </button>
            </div>

            {/* CARD PAYMENT FORM */}
            {method === "card" ? (
              <>
                <label className="block mb-2 text-sm">Bank / ATM Name</label>
                <input
                  name="bankName"
                  value={form.bankName}
                  onChange={handleChange}
                  placeholder="BDO, BPI, etc."
                  className="w-full mb-3 p-2 rounded bg-[#3E2723] border border-[#5D4037] text-[#EFEBE9]"
                />
                <label className="block mb-2 text-sm">Cardholder Name</label>
                <input
                  name="cardholder"
                  value={form.cardholder}
                  onChange={handleChange}
                  placeholder="Juan Dela Cruz"
                  className="w-full mb-3 p-2 rounded bg-[#3E2723] border border-[#5D4037] text-[#EFEBE9]"
                />
                <label className="block mb-2 text-sm">Card Number</label>
                <input
                  name="cardNumber"
                  value={form.cardNumber}
                  onChange={handleChange}
                  placeholder="4111111111111111"
                  className="w-full mb-3 p-2 rounded bg-[#3E2723] border border-[#5D4037] text-[#EFEBE9]"
                />

                <div className="flex gap-3 mb-3">
                  <input
                    name="expiry"
                    value={form.expiry}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    className="flex-1 p-2 rounded bg-[#3E2723] border border-[#5D4037] text-[#EFEBE9]"
                  />
                  <input
                    name="cvc"
                    value={form.cvc}
                    onChange={handleChange}
                    placeholder="CVC"
                    className="w-24 p-2 rounded bg-[#3E2723] border border-[#5D4037] text-[#EFEBE9]"
                  />
                </div>

                {error && <p className="text-red-300 text-sm mb-3">{error}</p>}

                <div className="flex justify-between">
                  <button
                    onClick={closeModal}
                    className="bg-[#6D4C41] px-4 py-2 rounded hover:bg-[#5D4037]"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleCardPay}
                    className="bg-[#8D6E63] px-4 py-2 rounded hover:bg-[#6D4C41]"
                  >
                    {processing ? "Processing..." : "Pay (Demo)"}
                  </button>
                </div>
              </>
            ) : (
              <>
                {!otpSent ? (
                  <>
                    <label className="block mb-2 text-sm">GCash Number</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="09171234567"
                      className="w-full mb-3 p-2 rounded bg-[#3E2723] border border-[#5D4037] text-[#EFEBE9]"
                    />
                    {error && <p className="text-red-300 text-sm mb-3">{error}</p>}
                    <div className="flex justify-between">
                      <button
                        onClick={closeModal}
                        className="bg-[#6D4C41] px-4 py-2 rounded hover:bg-[#5D4037]"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={sendOtp}
                        className="bg-[#8D6E63] px-4 py-2 rounded hover:bg-[#6D4C41]"
                      >
                        {processing ? "Sending..." : "Send OTP (Demo)"}
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-[#D7CCC8] text-sm mb-3">
                      OTP sent to {form.phone}. Demo OTP:{" "}
                      <strong className="text-[#EFEBE9]">{expectedOtp}</strong>
                    </p>
                    <input
                      value={otpValue}
                      onChange={(e) => setOtpValue(e.target.value)}
                      placeholder="Enter OTP"
                      className="w-full mb-3 p-2 rounded bg-[#3E2723] border border-[#5D4037] text-[#EFEBE9]"
                    />
                    {error && <p className="text-red-300 text-sm mb-3">{error}</p>}
                    <div className="flex justify-between">
                      <button
                        onClick={closeModal}
                        className="bg-[#6D4C41] px-4 py-2 rounded hover:bg-[#5D4037]"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={confirmOtp}
                        className="bg-[#8D6E63] px-4 py-2 rounded hover:bg-[#6D4C41]"
                      >
                        {processing ? "Processing..." : "Confirm (Demo)"}
                      </button>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ExploreMembership;
