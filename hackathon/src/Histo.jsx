import React, { useState } from 'react';
import { 
  Calendar, 
  Filter, 
  Home,
  Upload as UploadIcon, 
  History,
  BarChart,
  Settings,
  Search,
  FileText,
  Download,
  Ban,
  CheckCircle,
  XCircle,
  HelpCircle
} from 'lucide-react';

const FilterHubHistory = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [processingComplete, setProcessingComplete] = useState(false);
  
  const historyData = [
    {
      uploadDate: 'May 15, 2025',
      uploadTime: '10:22 AM',
      status: 'Completed',
      resultFile: {
        name: 'may_registrations_result.csv',
        size: '3.2 MB',
        records: 381
      }
    },
    {
      uploadDate: 'Apr 22, 2025',
      uploadTime: '03:45 PM',
      status: 'High Redundancy',
      resultFile: {
        name: 'april_registrations_result.csv',
        size: '2.1 MB',
        records: 193
      }
    },
    {
      uploadDate: 'Mar 18, 2025',
      uploadTime: '09:12 AM',
      status: 'Completed',
      resultFile: {
        name: 'march_registrations_result.csv',
        size: '4.1 MB',
        records: 372
      }
    },
    {
      uploadDate: 'Feb 20, 2025',
      uploadTime: '02:35 PM',
      status: 'Processing Failed',
      resultFile: null
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-blue-100 text-blue-500';
      case 'High Redundancy':
        return 'bg-yellow-100 text-yellow-500';
      case 'Processing Failed':
        return 'bg-red-100 text-red-500';
      default:
        return 'bg-gray-100 text-gray-500';
    }
  };
  
  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
      setProcessingComplete(false);
    }
  };
  
  const handleProcessFile = () => {
    if (selectedFile) {
      // Simulate processing delay
      setTimeout(() => {
        setProcessingComplete(true);
      }, 1000);
    }
  };
  
  const ResultFileCard = ({ title, icon, color, count, description, fileName, fileSize }) => (
    <div className={`bg-white p-6 rounded-xl shadow-sm border-l-4 ${color} flex flex-col h-full`}>
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      
      <div className="mb-4">
        <div className="text-3xl font-bold mb-1">{count}</div>
        <div className="text-gray-500">{description}</div>
      </div>
      
      <div className="mt-auto pt-4 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <FileText className="w-5 h-5 text-gray-400" />
          <div>
            <div className="font-medium">{fileName}</div>
            <div className="text-sm text-gray-500">{fileSize}</div>
          </div>
          <button className="ml-auto p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200">
            <Download className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed w-64 h-screen bg-white border-r border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <Filter className="w-6 h-6 text-orange-500" />
            <div>
              <div className="font-bold text-lg">Filter Hub</div>
              <div className="text-xs text-gray-500">No Redundancy, Just Accuracy</div>
            </div>
          </div>
        </div>

        
         
          

        <div className="absolute bottom-0 w-full p-4 text-center text-sm text-gray-500 border-t border-gray-200">
          Filter Hub v1.0.0
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">File Upload</h1>
          
        </div>

        {/* File Upload Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <UploadIcon className="w-5 h-5 text-orange-500" />
            <h2 className="text-lg font-semibold">Upload File for Processing</h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex-1">
              <label 
                htmlFor="file-upload" 
                className={`flex items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
                  selectedFile ? 'border-green-300 bg-green-50' : 'border-gray-300 hover:bg-gray-50'
                }`}
              >
                {selectedFile ? (
                  <div className="text-center">
                    <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <p className="font-medium text-gray-900">{selectedFile.name}</p>
                    <p className="text-sm text-gray-500">
                      {Math.round(selectedFile.size / 1024)} KB
                    </p>
                  </div>
                ) : (
                  <div className="text-center">
                    <UploadIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="font-medium text-gray-900">Click to upload or drag and drop</p>
                    <p className="text-sm text-gray-500">CSV, XLS, XLSX (max. 10MB)</p>
                  </div>
                )}
                <input 
                  id="file-upload" 
                  type="file" 
                  className="hidden" 
                  accept=".csv,.xls,.xlsx" 
                  onChange={handleFileChange}
                />
              </label>
            </div>
            <button 
              onClick={handleProcessFile}
              disabled={!selectedFile}
              className={`px-6 py-3 rounded-lg font-medium ${
                selectedFile 
                  ? 'bg-orange-500 text-white hover:bg-orange-600' 
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              show result
            </button>
          </div>
        </div>

        {/* Processing Results */}
        {processingComplete && (
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-5 h-5 text-orange-500" />
              <h2 className="text-lg font-semibold">Processing Results</h2>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {/* Accepted Records */}
              <ResultFileCard
                title="Accepted Records"
                icon={<CheckCircle className="w-5 h-5 text-green-500" />}
                color="border-green-500"
                count="186"
                description="Records that passed all validation checks"
                fileName="accepted_records.csv"
                fileSize="1.2 MB"
              />
              
              {/* Rejected Records */}
              <ResultFileCard
                title="Rejected Records"
                icon={<XCircle className="w-5 h-5 text-red-500" />}
                color="border-red-500"
                count="42"
                description="Records that failed validation checks"
                fileName="rejected_records.csv"
                fileSize="0.4 MB"
              />
              
              {/* Proposed Changes */}
              <ResultFileCard
                title="Proposed Changes"
                icon={<HelpCircle className="w-5 h-5 text-yellow-500" />}
                color="border-yellow-500"
                count="78"
                description="Records with suggested modifications"
                fileName="proposed_changes.csv"
                fileSize="0.8 MB"
              />
            </div>
          </div>
        )}

        
      </div>
    </div>
  );
};

export default FilterHubHistory;
