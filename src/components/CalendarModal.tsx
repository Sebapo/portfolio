import React from 'react';
import { X } from 'lucide-react';

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalendarModal: React.FC<CalendarModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Schedule an Appointment</h2>
          <div className="relative w-full overflow-hidden pt-[75%]">
            <iframe 
              src="https://calendar.google.com/calendar/embed?src=francissebapo%40gmail.com&ctz=Africa%2FJohannesburg"
              className="absolute top-0 left-0 w-full h-full"
              style={{ border: 0 }}
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarModal;