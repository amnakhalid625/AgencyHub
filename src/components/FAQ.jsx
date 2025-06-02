import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I enroll in a language course?",
      answer: "You can enroll through our website by selecting your desired course and completing the registration process. Alternatively, visit our campus during office hours for in-person registration."
    },
    {
      question: "What languages do you offer?",
      answer: "We currently offer English, German, Chinese (Mandarin), and French courses at various proficiency levels from beginner to advanced."
    },
    {
      question: "Are your instructors qualified?",
      answer: "Yes, all our instructors are certified language teachers with degrees from recognized universities and extensive teaching experience."
    },
    {
      question: "What is the duration of each course?",
      answer: "Course duration varies by level: Beginner courses typically last 3 months, intermediate 4 months, and advanced levels 5-6 months. Intensive courses are also available."
    },
    {
      question: "Do you provide certification after completion?",
      answer: "Yes, we provide recognized certificates upon successful completion of each level. Our English courses prepare students for IELTS, and German courses for Goethe-Zertifikat exams."
    },
    {
      question: "What are your class timings?",
      answer: "We offer morning (9AM-12PM), afternoon (2PM-5PM), and evening (6PM-9PM) batches. Weekend-only classes are also available."
    },
    {
      question: "Is online learning available?",
      answer: "Yes, we offer both in-person and online classes through our virtual learning platform with live instructor-led sessions."
    },
    {
      question: "What is your fee structure?",
      answer: "Fees vary by course and level. Please contact our admissions office at admissions@hallmark.edu.pk or call +92 42 111 555 666 for detailed fee information."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, we offer installment plans for courses longer than 3 months. A 25% deposit is required at registration with the balance payable in monthly installments."
    },
    {
      question: "What if I miss a class?",
      answer: "We provide recorded lectures and supplementary materials for missed classes. For in-person students, makeup classes may be arranged subject to instructor availability."
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our language programs
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-200"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {faq.question}
                </h3>
                <span className="text-primary">
                  {activeIndex === index ? <FiMinus size={20} /> : <FiPlus size={20} />}
                </span>
              </button>
              
              <div 
                className={`px-6 pb-6 pt-0 transition-all duration-300 ${activeIndex === index ? 'block' : 'hidden'}`}
              >
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Still have questions? Contact our support team
          </p>
          <button className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;