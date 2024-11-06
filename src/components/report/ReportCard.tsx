import React from 'react';

interface ReportCardProps {
  report: { id: number; title: string; description: string; buttonColor: string };
  exportFormat: 'PDF' | 'Excel';
}

const ReportCard: React.FC<ReportCardProps> = ({ report, exportFormat }) => {
  return (
    <div className="p-6 bg-card rounded-lg shadow-lg min-h-[200px] flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-medium text-gray-100 mb-4">{report.title}</h2>
        <p className="text-gray-400">{report.description}</p>
      </div>
      <button
        className={`mt-4 w-full ${report.buttonColor} text-white px-4 py-2 rounded hover:opacity-90`}
      >
        Export as {exportFormat}
      </button>
    </div>
  );
};

export default ReportCard;
