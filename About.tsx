import { MessageSquare, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <MessageSquare className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-bold">HealthAI Chat</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering You with Health Awareness — One Chat at a Time.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#chatbot" className="hover:text-blue-400 transition-colors">Chatbot</a></li>
              <li><a href="#diseases" className="hover:text-blue-400 transition-colors">Diseases</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Health Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="https://www.who.int"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center"
                >
                  WHO <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.cdc.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center"
                >
                  CDC <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p className="mb-2">
            <strong>Disclaimer:</strong> HealthAI Chat is for educational purposes only and is not a medical diagnostic tool.
            Always consult qualified healthcare professionals for medical advice.
          </p>
          <p>&copy; {new Date().getFullYear()} HealthAI Chat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
