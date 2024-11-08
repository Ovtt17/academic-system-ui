import React, { useState } from 'react';
import { reportCardsData } from '../data/reports';
import ReportCard from '../components/report/ReportCard';

const Report: React.FC = () => {
  const [exportFormat, setExportFormat] = useState<'PDF' | 'Excel'>('PDF');

  return (
    <section className="p-8 space-y-8 text-gray-200">
      <h1 className="text-3xl font-semibold text-center">Reports</h1>

      {/* Export Format Selector */}
      <div className="flex justify-center items-center space-x-4">
        <label className="text-lg">Export as:</label>
        <button
          className={`px-4 py-2 rounded-lg ${exportFormat === 'PDF' ? 'bg-blue-600' : 'bg-gray-700'
            }`}
          onClick={() => setExportFormat('PDF')}
        >
          PDF
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${exportFormat === 'Excel' ? 'bg-green-600' : 'bg-gray-700'
            }`}
          onClick={() => setExportFormat('Excel')}
        >
          Excel
        </button>
      </div>

      {/* Report Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          reportCardsData.map((report) => (
            <ReportCard
              report={report}
              exportFormat={exportFormat}
            />
          ))
        }
      </div>
    </section>
  );
};

export default Report;
