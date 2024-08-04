import React from 'react';

const CustomerFeedback = ({ className }) => {
  const feedbacks = [
    {
      name: 'Jenny Wilson',
      rating: 5,
      comment: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger and greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.',
    },
    {
      name: 'Dianne Russell',
      rating: 5,
      comment: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
    },
    {
      name: 'Devon Lane',
      rating: 4,
      comment: 'Normally wines are whites, but theirs are lean, mostly red and tender, and were chosen specifically to match the plates.',
    },
  ];

  return (
    <div className={`bg-gray-800 text-white rounded-lg shadow-md overflow-y-auto h-64`} style={{ width: '100%' }}>
      <h2 className="text-xl font-semibold mb-4 p-4">Customer's Feedback</h2>
      <div className="space-y-4 p-4">
        {feedbacks.map((feedback, index) => (
          <div key={index} className="bg-gray-900 p-4 rounded-md">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
                {feedback.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-lg font-medium">{feedback.name}</h3>
                <div className="flex space-x-1">
                  {[...Array(feedback.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.951a1 1 0 00.95.69h4.16c.969 0 1.372 1.24.588 1.81l-3.368 2.447a1 1 0 00-.364 1.118l1.287 3.951c.3.921-.755 1.688-1.538 1.118l-3.368-2.447a1 1 0 00-1.175 0l-3.368 2.447c-.783.57-1.838-.197-1.538-1.118l1.287-3.951a1 1 0 00-.364-1.118L2.264 9.378c-.784-.57-.38-1.81.588-1.81h4.16a1 1 0 00.95-.69L9.049 2.927z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-300 mt-2">{feedback.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerFeedback;
