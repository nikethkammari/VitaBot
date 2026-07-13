import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm HealthAI, your health awareness assistant. I can help you learn about diseases, symptoms, prevention methods, and general health tips. What would you like to know?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('malaria')) {
      return "Malaria is a life-threatening disease caused by parasites transmitted through mosquito bites. Symptoms include fever, chills, headache, and fatigue. Prevention: Use mosquito nets, wear protective clothing, and use insect repellent. Seek immediate medical attention if you experience symptoms in malaria-prone areas.";
    } else if (lowerMessage.includes('dengue')) {
      return "Dengue fever is a mosquito-borne viral infection causing high fever, severe headache, pain behind the eyes, joint and muscle pain, and rash. Prevention: Eliminate standing water, use mosquito repellent, and wear long sleeves. There's no specific treatment, but early detection and proper medical care can significantly lower fatality rates.";
    } else if (lowerMessage.includes('diabetes')) {
      return "Diabetes is a chronic condition affecting how your body processes blood sugar. Symptoms include increased thirst, frequent urination, fatigue, and blurred vision. Prevention: Maintain a healthy weight, exercise regularly, eat a balanced diet, and limit sugar intake. Regular health checkups are essential.";
    } else if (lowerMessage.includes('covid') || lowerMessage.includes('coronavirus')) {
      return "COVID-19 is caused by the SARS-CoV-2 virus. Symptoms include fever, cough, difficulty breathing, and loss of taste or smell. Prevention: Get vaccinated, wear masks in crowded places, maintain social distance, wash hands frequently, and practice good hygiene. Seek medical care if symptoms worsen.";
    } else if (lowerMessage.includes('flu') || lowerMessage.includes('influenza')) {
      return "Influenza (flu) is a contagious respiratory illness. Symptoms include fever, cough, sore throat, body aches, and fatigue. Prevention: Get annual flu vaccination, wash hands regularly, avoid close contact with sick people, and maintain good hygiene. Rest and fluids help recovery.";
    } else if (lowerMessage.includes('symptom') || lowerMessage.includes('prevention')) {
      return "I can provide information about symptoms and prevention methods for various diseases. Please specify which disease you'd like to know about (e.g., malaria, dengue, diabetes, COVID-19, flu, etc.).";
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! How can I help you today? Feel free to ask about any disease, symptoms, prevention methods, or general health tips.";
    } else if (lowerMessage.includes('thank')) {
      return "You're welcome! Remember, this information is for educational purposes. Always consult healthcare professionals for medical advice. Is there anything else you'd like to know?";
    } else {
      return "I understand you're asking about health-related information. I can help with questions about common diseases like malaria, dengue, diabetes, COVID-19, flu, and general health tips. Could you please rephrase your question or ask about a specific disease?";
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <section id="chatbot" className="py-20 bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Chat with HealthAI</h2>
          <p className="text-lg text-gray-600">
            Ask me anything about diseases, symptoms, prevention, and health tips
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-white rounded-full p-2">
                <Bot className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-white font-semibold">HealthAI Assistant</h3>
                <p className="text-blue-100 text-sm">Online</p>
              </div>
            </div>
          </div>

          <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`flex items-start space-x-2 max-w-md ${
                    message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      message.sender === 'user' ? 'bg-blue-600' : 'bg-green-600'
                    }`}
                  >
                    {message.sender === 'user' ? (
                      <User className="h-5 w-5 text-white" />
                    ) : (
                      <Bot className="h-5 w-5 text-white" />
                    )}
                  </div>
                  <div
                    className={`rounded-lg px-4 py-3 ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-800 shadow-md'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2 max-w-md">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-green-600">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                  <div className="rounded-lg px-4 py-3 bg-white shadow-md">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-gray-200 p-4 bg-white">
            <div className="flex space-x-4">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your health question here..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
              >
                <span className="font-medium">Send</span>
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              This chatbot provides educational information only. Consult healthcare professionals for medical advice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
