import React from 'react';
import { format } from 'date-fns';
import { Quote } from '../types';

interface QuoteCardProps {
  quote: Quote;
}

export const QuoteCard: React.FC<QuoteCardProps> = ({ quote }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img
          src={quote.mediaUrl}
          alt="Quote"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4">
          <p className="text-white text-xl font-medium text-center">
            {quote.text}
          </p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <p className="text-gray-700 font-medium">@{quote.username}</p>
          <p className="text-gray-500 text-sm">
            {format(new Date(quote.createdAt), 'MMM d, yyyy')}
          </p>
        </div>
      </div>
    </div>
  );
};