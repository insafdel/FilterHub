import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  Filter, Home, Upload, History, BarChart2, Settings, 
  Moon, Sun, Play, Rocket, Check, Bot, FileText 
} from 'lucide-react';

// Particle component (unchanged)
const Particle = ({ delay }) => {
  const size = Math.random() * 15 + 5;
  return (
    <motion.div
      initial={{ 
        opacity: 0.1,
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`
      }}
      animate={{
        y: ['0%', '100%'],
        opacity: [0.1, 0.5, 0.1]
      }}
      transition={{
        duration: Math.random() * 10 + 10,
        delay,
        repeat: Infinity,
        ease: "linear"
      }}
      className="absolute rounded-full bg-white/10"
      style={{
        width: size,
        height: size
      }}
    />
  );
};

const About = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [uploadedFiles, setUploadedFiles] = useState([
    { id: 1, name: 'business_data_2024.csv', size: '3.2 MB', progress: 100, status: 'success' },
    { id: 2, name: 'registration_batch_feb.csv', size: '1.8 MB', progress: 100, status: 'success' },
  ]);

  // Create a ref for the "How It Works" section
  const howItWorksRef = useRef(null);

  // Function to scroll to the "How It Works" section
  const scrollToHowItWorks = () => {
    if (howItWorksRef.current) {
      howItWorksRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' // Ensures the section is centered in the viewport
      });
    }
  };

  return (
    <div className={`flex h-screen overflow-hidden ${darkMode ? 'dark' : ''}`}>
      {/* Main Content */}
      <div className="flex-1 ml-64 overflow-y-auto bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative bg-gradient-to-r bg-gray-50 to-indigo-900 text-gray text-center py-20 px-6 dark:bg-gray-900"
        >
          {/* Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
              <Particle key={i} delay={i * 0.2} />
            ))}
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-yellow-500 mb-4"
            >
              <Filter size={64} className="mx-auto" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="text-fray dark:text-white">Welcome to </span>
              <span className="text-yellow-500 ">Filter Hub</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg opacity-80 max-w-2xl mx-auto dark:text-white">
                Transform your business registration process with our AI-powered data filtering system.
                Eliminate redundancies, categorize activities, and classify documents automatically.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-full flex items-center gap-2"
                  onClick={scrollToHowItWorks} // Scroll to "How It Works" section
                >
                  <Rocket size={18} />
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Description Section */}
        <section ref={howItWorksRef} className="py-12 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              About Filter Hub
            </h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-400">
              <p>
                Filter Hub is an AI-powered platform designed to streamline the business registration process. 
                Our system automates the identification and removal of redundant entries, categorizes business 
                activities, and classifies required documents with precision.
              </p>
              <p>
                Whether you're managing a large dataset or processing individual registrations, Filter Hub 
                ensures accuracy and efficiency, saving you time and resources. Our advanced algorithms 
                analyze your data, provide actionable insights, and deliver clean, organized results ready 
                for immediate use.
              </p>
              <p>
                With features like AI-powered analysis, document identification, advanced analytics, and 
                smart filtering, Filter Hub is your ultimate tool for optimizing business registration workflows.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section (unchanged) */}
        <section className="py-12 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">How It Works</h2>
            <div className="relative flex flex-col md:flex-row items-center justify-between mt-10">
              {/* Step 1: Upload Files */}
              <div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/4 px-4 mb-8 md:mb-0">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 border-2 border-yellow-500 text-yellow-500 mb-4 shadow">
                  <Upload className="text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Upload Files
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Upload your CSV files containing business registration data
                </p>
              </div>

              {/* Step 2: AI Processing */}
              <div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/4 px-4 mb-8 md:mb-0">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 border-2 border-red-500 text-red-500 mb-4 shadow">
                  <Bot className="text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  AI Processing
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our AI algorithms analyze and identify redundancies
                </p>
              </div>

              {/* Step 3: Review Results */}
              <div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/4 px-4 mb-8 md:mb-0">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 border-2 border-orange-500 text-orange-500 mb-4 shadow">
                  <Check className="text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Review Results
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  View the processed data with redundancies removed
                </p>
              </div>

              {/* Step 4: Export Clean Data */}
              <div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/4 px-4">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 border-2 border-green-500 text-green-500 mb-4 shadow">
                  <History className="text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Export Clean Data
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Download the filtered results for immediate use
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section (unchanged) */}
        <footer className="bg-white dark:bg-gray-900 py-12 transition-all duration-300">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
              Key Features
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* 1. AI-Powered Analysis */}
              <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
                <Bot className="text-yellow-500" strokeWidth={2.5} />
                <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  AI-Powered Analysis
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our advanced AI algorithms check if activities exist 
                  and remove redundant entries automatically, 
                  saving hours of manual work.
                </p>
              </div>

              {/* 2. Document Identification */}
              <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
                <FileText className="text-yellow-500" strokeWidth={2.5} />
                <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Document Identification
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  The system intelligently identifies whether a business 
                  requires Registre de Commerce or Patente based on 
                  the provided data.
                </p>
              </div>

              {/* 3. Advanced Analytics */}
              <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
                <BarChart2 className="text-yellow-500" strokeWidth={2.5} />
                <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Advanced Analytics
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Get comprehensive analysis with visualizations showing 
                  acceptance rates, redundancy statistics, and 
                  processing metrics.
                </p>
              </div>

              {/* 4. Smart Filtering */}
              <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
                <Filter className="text-yellow-500" strokeWidth={2.5} />
                <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Smart Filtering
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Powerful filtering options to sort through processed 
                  data by status, document type, date, or custom criteria.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default About;
