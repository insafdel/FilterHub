import React from 'react';
import { ChevronLeft, ChevronRight, Download, PieChart, Trash2, Search, Calendar, Filter, Moon, Home, Upload, History, BarChart, Settings, FileText, Ban, AlertCircle } from 'lucide-react';

const HistoryPage = () => {
  const fileHistory = [
    {
      name: "may_registrations.csv",
      size: "5.8 MB",
      records: 432,
      uploadDate: "May 15, 2025",
      uploadTime: "10:22 AM",
      status: "Completed",
      resultFile: {
        name: "may_registrations_result.csv",
        size: "3.2 MB",
        records: 381
      }
    },
    {
      name: "april_registrations.csv",
      size: "4.7 MB",
      records: 392,
      uploadDate: "Apr 22, 2025",
      uploadTime: "03:45 PM",
      status: "High Redundancy",
      resultFile: {
        name: "april_registrations_result.csv",
        size: "2.1 MB",
        records: 193
      }
    },
    {
      name: "march_registrations.csv",
      size: "5.2 MB",
      records: 418,
      uploadDate: "Mar 18, 2025",
      uploadTime: "09:12 AM",
      status: "Completed",
      resultFile: {
        name: "march_registrations_result.csv",
        size: "4.1 MB",
        records: 372
      }
    },
    {
      name: "february_registrations.csv",
      size: "3.9 MB",
      records: 302,
      uploadDate: "Feb 20, 2025",
      uploadTime: "02:35 PM",
      status: "Processing Failed",
      resultFile: null
    }
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-blue-100 text-blue-600';
      case 'High Redundancy':
        return 'bg-orange-100 text-orange-600';
      case 'Processing Failed':
        return 'bg-red-100 text-red-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col fixed h-full">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Filter className="text-orange-500 w-6 h-6" />
            <div>
              <div className="font-bold text-lg">Filter Hub</div>
              <div className="text-xs text-gray-500">No Redundancy, Just Accuracy</div>
            </div>
          </div>
          <button className="text-gray-600">
            <Moon className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 py-6">
          <div className="px-6 mb-4 text-xs font-semibold text-gray-500 uppercase">Main</div>
          <div className="space-y-2">
            <button className="w-full px-6 py-3 flex items-center gap-3 text-gray-600 hover:bg-gray-50">
              <Home className="w-5 h-5" />
              <span>Dashboard</span>
            </button>
            <button className="w-full px-6 py-3 flex items-center gap-3 text-gray-600 hover:bg-gray-50">
              <Upload className="w-5 h-5" />
              <span>Upload Files</span>
            </button>
            <button className="w-full px-6 py-3 flex items-center gap-3 text-orange-500 bg-orange-50 border-r-4 border-orange-500">
              <History className="w-5 h-5" />
              <span>History</span>
            </button>
          </div>

          <div className="px-6 mb-4 mt-6 text-xs font-semibold text-gray-500 uppercase">Management</div>
          <div className="space-y-2">
            <button className="w-full px-6 py-3 flex items-center gap-3 text-gray-600 hover:bg-gray-50">
              <BarChart className="w-5 h-5" />
              <span>Analytics</span>
            </button>
            <button className="w-full px-6 py-3 flex items-center gap-3 text-gray-600 hover:bg-gray-50">
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </button>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 text-center text-sm text-gray-500">
          Filter Hub v1.0.0
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">File History</h1>
          <div className="flex items-center gap-3">
            <span className="font-medium text-gray-700">Admin User</span>
            <div className="w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold">
              A
            </div>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Search className="w-5 h-5 text-orange-500" />
            <h2 className="text-lg font-semibold text-gray-800">Search & Filter</h2>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by file name..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm"
              />
            </div>
            
            <div className="relative">
              <select className="w-full pl-4 pr-10 py-2 border border-gray-200 rounded-lg text-sm appearance-none">
                <option>All Dates</option>
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>Last 90 Days</option>
                <option>Custom Range</option>
              </select>
              <Calendar className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
            
            <div className="relative">
              <select className="w-full pl-4 pr-10 py-2 border border-gray-200 rounded-lg text-sm appearance-none">
                <option>All Status</option>
                <option>High Redundancy Rate</option>
                <option>Suggested Activities</option>
                <option>Completed</option>
                <option>Failed</option>
              </select>
              <Filter className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* File History Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-orange-500" />
              <h2 className="text-lg font-semibold text-gray-800">Processed Files</h2>
            </div>
            <span className="px-3 py-1 bg-blue-900 text-white text-sm font-medium rounded-full">
              24 Files
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-6 text-sm font-semibold text-gray-600">File</th>
                  <th className="text-left p-6 text-sm font-semibold text-gray-600">Upload Date</th>
                  <th className="text-left p-6 text-sm font-semibold text-gray-600">Status</th>
                  <th className="text-left p-6 text-sm font-semibold text-gray-600">Result File</th>
                  <th className="text-left p-6 text-sm font-semibold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {fileHistory.map((file, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="p-6">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-orange-500" />
                        <div>
                          <div className="font-medium text-gray-900">{file.name}</div>
                          <div className="text-sm text-gray-500">{file.size} • {file.records} records</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-6">
                      <div>
                        <div className="font-medium text-gray-900">{file.uploadDate}</div>
                        <div className="text-sm text-gray-500">{file.uploadTime}</div>
                      </div>
                    </td>
                    <td className="p-6">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusClass(file.status)}`}>
                        {file.status}
                      </span>
                    </td>
                    <td className="p-6">
                      {file.resultFile ? (
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-orange-500" />
                          <div>
                            <div className="font-medium text-gray-900">{file.resultFile.name}</div>
                            <div className="text-sm text-gray-500">
                              {file.resultFile.size} • {file.resultFile.records} records
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3">
                          <Ban className="w-5 h-5 text-red-500" />
                          <div>
                            <div className="font-medium text-gray-900">No Result File</div>
                            <div className="text-sm text-gray-500">Processing error occurred</div>
                          </div>
                        </div>
                      )}
                    </td>
                    <td className="p-6">
                      <div className="flex gap-2">
                        <button 
                          className={`p-2 rounded-lg ${file.resultFile ? 'bg-blue-50 text-blue-600 hover:bg-blue-100' : 'bg-gray-50 text-gray-400 cursor-not-allowed'}`}
                          disabled={!file.resultFile}
                        >
                          <Download className="w-5 h-5" />
                        </button>
                        <button className="p-2 rounded-lg bg-orange-50 text-orange-600 hover:bg-orange-100">
                          {file.status === 'Processing Failed' ? (
                            <AlertCircle className="w-5 h-5" />
                          ) : (
                            <PieChart className="w-5 h-5" />
                          )}
                        </button>
                        <button className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 border-t border-gray-200 flex justify-between items-center">
            <span className="text-sm text-gray-500">Showing 1-4 of 24 files</span>
            <div className="flex gap-2">
              <button className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg bg-blue-900 text-white">1</button>
              <button className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">2</button>
              <button className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">3</button>
              <button className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
