import { Target, Users, Lightbulb, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About HealthAI Chat</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our mission is to make health education accessible to everyone through the power of artificial intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-4">
              HealthAI Chat was created to bridge the gap between complex medical information and public understanding.
              We believe that everyone deserves access to accurate, reliable health information that can help them
              make informed decisions about their wellbeing.
            </p>
            <p className="text-gray-700">
              Using advanced AI technology, we provide instant access to verified health information, disease awareness,
              prevention methods, and wellness tips in a conversational, easy-to-understand format.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">How AI Helps</h3>
            <p className="text-gray-700 mb-4">
              Our AI chatbot is trained on trusted medical resources and health guidelines from organizations like
              the WHO and CDC. It can understand your questions in natural language and provide relevant, accurate
              information instantly.
            </p>
            <p className="text-gray-700">
              The AI continuously learns and updates to provide the most current health information, making it a
              reliable companion for your health education journey.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-10 w-10 text-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Our Goal</h4>
            <p className="text-gray-600 text-sm">
              Raise disease awareness and promote preventive healthcare
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-10 w-10 text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">For Everyone</h4>
            <p className="text-gray-600 text-sm">
              Accessible health information for all ages and backgrounds
            </p>
          </div>

          <div className="text-center">
            <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="h-10 w-10 text-teal-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">AI-Powered</h4>
            <p className="text-gray-600 text-sm">
              Smart technology for instant, accurate health answers
            </p>
          </div>

          <div className="text-center">
            <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-10 w-10 text-orange-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Trusted</h4>
            <p className="text-gray-600 text-sm">
              Verified information from credible health sources
            </p>
          </div>
        </div>

        <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Important Reminder
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            While HealthAI Chat provides valuable health information, it is designed for educational purposes only.
            It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice
            of qualified healthcare providers with any questions you may have regarding a medical condition.
          </p>
        </div>
      </div>
    </section>
  );
}
