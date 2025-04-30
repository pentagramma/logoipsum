import { useState } from 'react';
import subscriptionlines from '../../public/images/subscriptionlines.png';

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1000);
  };

  // Corner dot styles
  const cornerDot = "w-2 h-2 absolute bg-[#711517] rounded-full";

  return (
    <div className="relative w-full font-inter">
      <div 
        className="bg-[#FFEFEB] p-6 rounded-xl border border-red-300 relative overflow-hidden"
        style={{
          backgroundImage: `url(${subscriptionlines.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom right',
        }}
      >
        {/* Red dots in corners */}
        <div className={`${cornerDot} top-2 left-2`}></div>
        <div className={`${cornerDot} top-2 right-2`}></div>
        <div className={`${cornerDot} bottom-2 left-2`}></div>
        <div className={`${cornerDot} bottom-2 right-2`}></div>
        
        <div className="space-y-5 relative z-10">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Receive Weekly Inspiration:
            </h3>
            <p className="text-lg font-semibold text-gray-800">
              7 Top SaaS Designs
            </p>
            <p className="text-lg font-semibold text-gray-800">
              Delivered to Your Inbox.
            </p>
          </div>
          
          <p className="text-gray-500 text-sm">
            Join 1,278+ other designers.
          </p>
          
          <div className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="px-4 py-3 border border-gray-200 rounded-lg text-sm w-full focus:outline-none"
            />
            
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-[#e54e44] text-white font-medium py-3 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
        </div>
        
        {isSuccess && (
          <div className="mt-4 p-2 bg-green-100 border border-green-200 text-green-700 rounded text-center">
            Thank you for subscribing!
          </div>
        )}
      </div>
    </div>
  );
}