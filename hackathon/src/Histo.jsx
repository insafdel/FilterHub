// import React, { useState } from "react";
// import Papa from "papaparse"; // Import PapaParse for CSV parsing
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
// import { Filter, Upload as UploadIcon, FileText, Download, CheckCircle, XCircle, HelpCircle } from "lucide-react";

// const API_URL = "http://localhost:5173/results"; // Update with your actual backend URL

// const FilterHubHistory = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [processing, setProcessing] = useState(false);
//   const [results, setResults] = useState({
//     accepted: [],
//     rejected: [],
//     proposed: []
//   });

//   const handleFileChange = (event) => {
//     if (event.target.files.length > 0) {
//       setSelectedFile(event.target.files[0]);
//       console.log("📂 File selected:", event.target.files[0].name);
//     }
//   };

//   const handleProcessFile = async () => {
//     if (!selectedFile) return;

//     console.log("🚀 Starting file upload...");
//     setProcessing(true);

//     const formData = new FormData();
//     formData.append("file", selectedFile);

//     try {
//       console.log("📡 Sending file to backend:", API_URL);
//       const response = await fetch(API_URL, {
//         method: "POST",
//         body: formData
//       });

//       if (!response.ok) {
//         throw new Error("❌ Failed to process the file");
//       }

//       const data = await response.json();
//       console.log("✅ File processed successfully:", data);

//       // Fetch and parse the three CSV files
//       await fetchAndParseCSV(data.accepted_file, "accepted");
//       await fetchAndParseCSV(data.rejected_file, "rejected");
//       await fetchAndParseCSV(data.proposed_file, "proposed");

//     } catch (error) {
//       console.error("⚠️ Error processing file:", error);
//     }

//     setProcessing(false);
//   };

//   const fetchAndParseCSV = async (fileUrl, type) => {
//     try {
//       console.log(`📥 Fetching ${type} CSV:`, fileUrl);
//       const response = await fetch(fileUrl);
//       const csvText = await response.text();
      
//       console.log(`📊 Parsing ${type} CSV...`);
//       Papa.parse(csvText, {
//         header: true,
//         skipEmptyLines: true,
//         complete: (result) => {
//           console.log(`✅ ${type} CSV parsed successfully. Total rows:`, result.data.length);
//           setResults((prevResults) => ({
//             ...prevResults,
//             [type]: result.data
//           }));
//         }
//       });
//     } catch (error) {
//       console.error(`⚠️ Error fetching ${type} CSV:`, error);
//     }
//   };

//   const chartData = [
//     { name: "Accepted", count: results.accepted.length, color: "#22c55e" },
//     { name: "Rejected", count: results.rejected.length, color: "#ef4444" },
//     { name: "Proposed", count: results.proposed.length, color: "#eab308" }
//   ];

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       {/* Sidebar */}
//       <div className="fixed w-64 h-screen bg-white border-r border-gray-200">
//         <div className="p-6 border-b border-gray-200">
//           <div className="flex items-center gap-3">
//             <Filter className="w-6 h-6 text-orange-500" />
//             <div>
//               <div className="font-bold text-lg">Filter Hub</div>
//               <div className="text-xs text-gray-500">No Redundancy, Just Accuracy</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="ml-64 flex-1 p-8">
//         <h1 className="text-2xl font-bold mb-8">File Upload & Processing</h1>

//         {/* File Upload Section */}
//         <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500 mb-8">
//           <div className="flex items-center gap-3 mb-6">
//             <UploadIcon className="w-5 h-5 text-orange-500" />
//             <h2 className="text-lg font-semibold">Upload File for Processing</h2>
//           </div>

//           <div className="flex items-center gap-4">
//             <label 
//               htmlFor="file-upload" 
//               className={`flex items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
//                 selectedFile ? 'border-green-300 bg-green-50' : 'border-gray-300 hover:bg-gray-50'
//               }`}
//             >
//               {selectedFile ? (
//                 <div className="text-center">
//                   <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
//                   <p className="font-medium text-gray-900">{selectedFile.name}</p>
//                   <p className="text-sm text-gray-500">{Math.round(selectedFile.size / 1024)} KB</p>
//                 </div>
//               ) : (
//                 <div className="text-center">
//                   <UploadIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
//                   <p className="font-medium text-gray-900">Click to upload or drag and drop</p>
//                   <p className="text-sm text-gray-500">CSV, XLS, XLSX (max. 10MB)</p>
//                 </div>
//               )}
//               <input id="file-upload" type="file" className="hidden" accept=".csv,.xls,.xlsx" onChange={handleFileChange} />
//             </label>
//             <button 
//               onClick={handleProcessFile}
//               disabled={!selectedFile || processing}
//               className={`px-6 py-3 rounded-lg font-medium ${
//                 selectedFile 
//                   ? 'bg-orange-500 text-white hover:bg-orange-600' 
//                   : 'bg-gray-200 text-gray-500 cursor-not-allowed'
//               }`}
//             >
//               {processing ? "Processing..." : "Show Result"}
//             </button>
//           </div>
//         </div>

//         {/* Results Display */}
//         {results.accepted.length > 0 && (
//           <div className="mb-8">
//             <h2 className="text-lg font-semibold">Processing Results</h2>
//             <div className="grid grid-cols-3 gap-6 mt-4">
//               {chartData.map((item, index) => (
//                 <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
//                   <h3 className="text-md font-semibold">{item.name}</h3>
//                   <p className="text-3xl font-bold">{item.count}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FilterHubHistory;
// import React, { useState } from "react";
// import Papa from "papaparse"; // CSV parsing
// import {
//   BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
// } from "recharts";
// import {
//   Filter, Upload as UploadIcon, FileText, Download, CheckCircle, XCircle, HelpCircle
// } from "lucide-react";

// const API_URL = "http://127.0.0.1:8000/upload/"; // Backend URL

// const FilterHubHistory = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [processing, setProcessing] = useState(false);
//   const [results, setResults] = useState({
//     accepted: [],
//     rejected: [],
//     proposed: []
//   });

//   const handleFileChange = (event) => {
//     if (event.target.files.length > 0) {
//       setSelectedFile(event.target.files[0]);
//       console.log("📂 File selected:", event.target.files[0].name);
//     }
//   };

//   const handleProcessFile = async () => {
//     if (!selectedFile) return;

//     console.log("🚀 Starting file upload...");
//     setProcessing(true);

//     const formData = new FormData();
//     formData.append("file", selectedFile);

//     try {
//       console.log("📡 Sending file to backend:", API_URL);
//       const response = await fetch(API_URL, {
//         method: "POST",
//         body: formData
//       });

//       if (!response.ok) {
//         throw new Error("❌ Failed to process the file");
//       }

//       const data = await response.json();
//       console.log("✅ File processed successfully:", data);

//       // Fetch and parse the three CSV files
//       await fetchAndParseCSV(data.accepted_file, "accepted");
//       await fetchAndParseCSV(data.rejected_file, "rejected");
//       await fetchAndParseCSV(data.proposed_file, "proposed");

//     } catch (error) {
//       console.error("⚠️ Error processing file:", error);
//     }

//     setProcessing(false);
//   };

//   const fetchAndParseCSV = async (fileUrl, type) => {
//     try {
//       console.log(`📥 Fetching ${type} CSV:`, fileUrl);
//       const response = await fetch(fileUrl);
//       const csvText = await response.text();
      
//       console.log(`📊 Parsing ${type} CSV...`);
//       Papa.parse(csvText, {
//         header: true,
//         skipEmptyLines: true,
//         complete: (result) => {
//           console.log(`✅ ${type} CSV parsed successfully. Total rows:`, result.data.length);
//           setResults((prevResults) => ({
//             ...prevResults,
//             [type]: result.data
//           }));
//         }
//       });
//     } catch (error) {
//       console.error(`⚠️ Error fetching ${type} CSV:`, error);
//     }
//   };

//   const chartData = [
//     { name: "Accepted", count: results.accepted.length, color: "#22c55e" },
//     { name: "Rejected", count: results.rejected.length, color: "#ef4444" },
//     { name: "Proposed", count: results.proposed.length, color: "#eab308" }
//   ];

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       {/* Sidebar */}
//       <div className="fixed w-64 h-screen bg-white border-r border-gray-200">
//         <div className="p-6 border-b border-gray-200">
//           <div className="flex items-center gap-3">
//             <Filter className="w-6 h-6 text-orange-500" />
//             <div>
//               <div className="font-bold text-lg">Filter Hub</div>
//               <div className="text-xs text-gray-500">No Redundancy, Just Accuracy</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="ml-64 flex-1 p-8">
//         <h1 className="text-2xl font-bold mb-8">File Upload & Processing</h1>

//         {/* File Upload Section */}
//         <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500 mb-8">
//           <div className="flex items-center gap-3 mb-6">
//             <UploadIcon className="w-5 h-5 text-orange-500" />
//             <h2 className="text-lg font-semibold">Upload File for Processing</h2>
//           </div>

//           <div className="flex items-center gap-4">
//             <label 
//               htmlFor="file-upload" 
//               className={`flex items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
//                 selectedFile ? 'border-green-300 bg-green-50' : 'border-gray-300 hover:bg-gray-50'
//               }`}
//             >
//               {selectedFile ? (
//                 <div className="text-center">
//                   <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
//                   <p className="font-medium text-gray-900">{selectedFile.name}</p>
//                   <p className="text-sm text-gray-500">{Math.round(selectedFile.size / 1024)} KB</p>
//                 </div>
//               ) : (
//                 <div className="text-center">
//                   <UploadIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
//                   <p className="font-medium text-gray-900">Click to upload or drag and drop</p>
//                   <p className="text-sm text-gray-500">CSV, XLS, XLSX (max. 10MB)</p>
//                 </div>
//               )}
//               <input id="file-upload" type="file" className="hidden" accept=".csv,.xls,.xlsx" onChange={handleFileChange} />
//             </label>
//             <button 
//               onClick={handleProcessFile}
//               disabled={!selectedFile || processing}
//               className={`px-6 py-3 rounded-lg font-medium ${
//                 selectedFile 
//                   ? 'bg-orange-500 text-white hover:bg-orange-600' 
//                   : 'bg-gray-200 text-gray-500 cursor-not-allowed'
//               }`}
//             >
//               {processing ? "Processing..." : "Show Result"}
//             </button>
//           </div>
//         </div>

//         {/* Results Display */}
//         {results.accepted.length > 0 && (
//           <div className="mb-8">
//             <h2 className="text-lg font-semibold">Processing Results</h2>
//             <div className="grid grid-cols-3 gap-6 mt-4">
//               {chartData.map((item, index) => (
//                 <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
//                   <h3 className="text-md font-semibold">{item.name}</h3>
//                   <p className="text-3xl font-bold">{item.count}</p>
//                   <button 
//                     className="mt-2 text-blue-500 hover:underline flex items-center gap-1"
//                     onClick={() => window.open(results[item.name.toLowerCase()].fileUrl, "_blank")}
//                   >
//                     <Download className="w-4 h-4" /> Download
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FilterHubHistory;




import React, { useState } from "react";
import Papa from "papaparse"; // CSV parsing
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from "recharts";
import {
  Filter, Upload as UploadIcon, FileText, Download, CheckCircle, XCircle, HelpCircle
} from "lucide-react";

const API_URL = "http://127.0.0.1:8000/upload/"; // Backend API Endpoint

const FilterHubHistory = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [results, setResults] = useState({
    accepted: [],
    rejected: [],
    proposed: []
  });

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log("📂 File selected:", event.target.files[0].name);
  };

  const handleProcessFile = async () => {
    if (!selectedFile) return;
    console.log("🚀 Starting file upload...");
    setProcessing(true);

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      console.log("📡 Sending file to backend:", API_URL);
      const response = await fetch(API_URL, { method: "POST", body: formData });

      if (!response.ok) throw new Error("❌ Failed to process the file");

      const data = await response.json();
      console.log("✅ File processed successfully:", data);

      // Fetch and parse the three CSV files
      await fetchAndParseCSV(data.accepted_file, "accepted");
      await fetchAndParseCSV(data.rejected_file, "rejected");
      await fetchAndParseCSV(data.proposed_file, "proposed");

    } catch (error) {
      console.error("⚠️ Error processing file:", error);
    }

    setProcessing(false);
  };

  const fetchAndParseCSV = async (fileUrl, type) => {
    try {
      console.log(`📥 Fetching ${type} CSV:`, fileUrl);
      const response = await fetch(fileUrl);
      const csvText = await response.text();
      
      console.log(`📊 Parsing ${type} CSV...`);
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          console.log(`✅ ${type} CSV parsed successfully. Total rows:`, result.data.length);
          setResults((prevResults) => ({
            ...prevResults,
            [type]: result.data
          }));
        }
      });
    } catch (error) {
      console.error(`⚠️ Error fetching ${type} CSV:`, error);
    }
  };

  const chartData = [
    { name: "Accepted", count: results.accepted.length, color: "#22c55e" },
    { name: "Rejected", count: results.rejected.length, color: "#ef4444" },
    { name: "Proposed", count: results.proposed.length, color: "#eab308" }
  ];

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
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 p-8">
        <h1 className="text-2xl font-bold mb-8">File Upload & Processing</h1>

        {/* File Upload Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <UploadIcon className="w-5 h-5 text-orange-500" />
            <h2 className="text-lg font-semibold">Upload File for Processing</h2>
          </div>

          <div className="flex items-center gap-4">
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
                  <p className="text-sm text-gray-500">{Math.round(selectedFile.size / 1024)} KB</p>
                </div>
              ) : (
                <div className="text-center">
                  <UploadIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="font-medium text-gray-900">Click to upload or drag and drop</p>
                  <p className="text-sm text-gray-500">Excel file (max. 10MB)</p>
                </div>
              )}
              <input id="file-upload" type="file" className="hidden" accept=".csv,.xls,.xlsx" onChange={handleFileChange} />
            </label>
            <button 
              onClick={handleProcessFile}
              disabled={!selectedFile || processing}
              className={`px-6 py-3 rounded-lg font-medium ${
                selectedFile 
                  ? 'bg-orange-500 text-white hover:bg-orange-600' 
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              {processing ? "Processing..." : "Show Result"}
            </button>
          </div>
        </div>

        {/* Results Display */}
        {results.accepted.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold">Processing Results</h2>
            <div className="grid grid-cols-3 gap-6 mt-4">
            {chartData.map((item, index) => (
  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
    <h3 className="text-md font-semibold">{item.name}</h3>
    <p className="text-3xl font-bold">{item.count}</p>
    
    {results[item.name.toLowerCase()] && (
      <a 
        href={`http://127.0.0.1:8000/results/${item.name.toLowerCase()}_jobs.csv`}
        download={`${item.name.toLowerCase()}_jobs.csv`}
        className="mt-2 text-blue-500 hover:underline flex items-center gap-1"
      >
        <Download className="w-4 h-4" /> Download
      </a>
    )}
  </div>
))}

            </div>
          </div>
        )}

        {/* Results Distribution Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <h2 className="text-lg font-semibold mb-4">Results Distribution</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count">
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FilterHubHistory;
