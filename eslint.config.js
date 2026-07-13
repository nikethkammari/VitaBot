import { AlertCircle, Shield, Activity, Thermometer, Droplets, Heart } from 'lucide-react';

interface Disease {
  id: string;
  name: string;
  icon: any;
  color: string;
  bgColor: string;
  causes: string;
  symptoms: string[];
  prevention: string[];
}

export default function Diseases() {
  const diseases: Disease[] = [
    {
      id: '1',
      name: 'Malaria',
      icon: Droplets,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      causes: 'Caused by Plasmodium parasites transmitted through the bite of infected Anopheles mosquitoes.',
      symptoms: ['High fever and chills', 'Severe headache', 'Fatigue and weakness', 'Nausea and vomiting', 'Muscle pain'],
      prevention: [
        'Sleep under insecticide-treated mosquito nets',
        'Use mosquito repellents',
        'Wear long-sleeved clothing',
        'Eliminate standing water around homes',
        'Take antimalarial medication when traveling to endemic areas',
      ],
    },
    {
      id: '2',
      name: 'Dengue Fever',
      icon: Thermometer,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      causes: 'Caused by dengue virus transmitted by Aedes mosquitoes, primarily Aedes aegypti.',
      symptoms: ['High fever (104°F)', 'Severe headache', 'Pain behind the eyes', 'Joint and muscle pain', 'Skin rash', 'Mild bleeding'],
      prevention: [
        'Remove stagnant water where mosquitoes breed',
        'Use mosquito repellents',
        'Install window and door screens',
        'Wear protective clothing',
        'Keep surroundings clean',
      ],
    },
    {
      id: '3',
      name: 'Diabetes',
      icon: Activity,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      causes: 'Chronic condition where the body cannot properly process blood sugar due to insufficient insulin or insulin resistance.',
      symptoms: ['Increased thirst and urination', 'Extreme fatigue', 'Blurred vision', 'Slow-healing wounds', 'Unexplained weight loss'],
      prevention: [
        'Maintain healthy body weight',
        'Exercise regularly (30 minutes daily)',
        'Eat balanced diet with limited sugar',
        'Avoid processed foods',
        'Regular health checkups',
      ],
    },
    {
      id: '4',
      name: 'COVID-19',
      icon: Shield,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      causes: 'Caused by SARS-CoV-2 virus, spreads through respiratory droplets when an infected person coughs, sneezes, or talks.',
      symptoms: ['Fever or chills', 'Cough', 'Difficulty breathing', 'Fatigue', 'Loss of taste or smell', 'Body aches'],
      prevention: [
        'Get vaccinated and boosted',
        'Wear masks in crowded indoor spaces',
        'Wash hands frequently with soap',
        'Maintain social distancing',
        'Improve indoor ventilation',
      ],
    },
    {
      id: '5',
      name: 'Influenza (Flu)',
      icon: AlertCircle,
      color: 'text-teal-600',
      bgColor: 'bg-teal-100',
      causes: 'Caused by influenza viruses that infect the respiratory system, spreads through droplets in the air.',
      symptoms: ['Sudden fever', 'Cough', 'Sore throat', 'Runny or stuffy nose', 'Muscle aches', 'Headaches', 'Fatigue'],
      prevention: [
        'Get annual flu vaccination',
        'Wash hands regularly',
        'Avoid close contact with sick people',
        'Cover coughs and sneezes',
        'Stay home when sick',
      ],
    },
    {
      id: '6',
      name: 'Hypertension',
      icon: Heart,
      color: 'text-pink-600',
      bgColor: 'bg-pink-100',
      causes: 'High blood pressure caused by narrowed arteries, increasing resistance to blood flow.',
      symptoms: ['Often no symptoms (silent killer)', 'Severe headache', 'Fatigue', 'Chest pain', 'Irregular heartbeat', 'Vision problems'],
      prevention: [
        'Reduce salt intake',
        'Exercise regularly',
        'Maintain healthy weight',
        'Limit alcohol consumption',
        'Manage stress',
        'Regular blood pressure monitoring',
      ],
    },
  ];

  return (
    <section id="diseases" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Diseases & Awareness</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn about common diseases, their causes, symptoms, and prevention methods to protect yourself and your loved ones
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {diseases.map((disease) => {
            const Icon = disease.icon;
            return (
              <div
                key={disease.id}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-shadow duration-200"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`${disease.bgColor} p-3 rounded-lg`}>
                    <Icon className={`h-8 w-8 ${disease.color}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{disease.name}</h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      Causes
                    </h4>
                    <p className="text-gray-700 text-sm">{disease.causes}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                      Symptoms
                    </h4>
                    <ul className="space-y-1">
                      {disease.symptoms.map((symptom, index) => (
                        <li key={index} className="text-gray-700 text-sm flex items-start">
                          <span className="text-orange-600 mr-2">•</span>
                          {symptom}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                      Prevention
                    </h4>
                    <ul className="space-y-1">
                      {disease.prevention.map((method, index) => (
                        <li key={index} className="text-gray-700 text-sm flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          {method}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
          <AlertCircle className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
          <h4 className="font-semibold text-gray-900 mb-2">Important Notice</h4>
          <p className="text-gray-700">
            If you experience any of these symptoms, please consult a healthcare professional immediately.
            Early detection and treatment are crucial for better health outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
