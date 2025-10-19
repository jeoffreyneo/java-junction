<section
  id="pricing"
  className="p-6 bg-gray-100 mt-12 max-w-5xl mx-auto rounded"
>
  <h2 className="text-3xl font-bold mb-6 text-center">Pricing</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Basic Plan */}
    <div className="bg-white p-6 rounded shadow text-center">
      <h3 className="text-xl font-semibold mb-4">Basic</h3>
      <p className="text-4xl font-bold mb-4">₱40 / hr</p>
      <ul className="mb-6 text-left">
        <li>Standard internet access</li>
        <li>Free coffee & snacks</li>
      </ul>
      <button className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 transition">
        Select
      </button>
    </div>

    {/* Premium Plan */}
    <div className="bg-white p-6 rounded shadow text-center">
      <h3 className="text-xl font-semibold mb-4">Premium</h3>
      <p className="text-4xl font-bold mb-4">₱75 / hr</p>
      <ul className="mb-6 text-left">
        <li>Faster internet</li>
        <li>Unlimited coffee & snacks</li>
        <li>Access to private rooms</li>
      </ul>
      <button className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 transition">
        Select
      </button>
    </div>

    {/* VIP Plan */}
    <div className="bg-white p-6 rounded shadow text-center">
      <h3 className="text-xl font-semibold mb-4">VIP</h3>
      <p className="text-4xl font-bold mb-4">₱150 / hr</p>
      <ul className="mb-6 text-left">
        <li>All Premium features</li>
        <li>24/7 access</li>
        <li>Priority support</li>
      </ul>
      <button className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 transition">
        Select
      </button>
    </div>
  </div>
</section>
