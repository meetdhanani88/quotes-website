import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, LogOut } from 'lucide-react';
import { getQuotes } from '../services/api';
import { QuoteCard } from '../components/QuoteCard';
import { Quote } from '../types';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

export const QuoteListPage: React.FC = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();
  const { logout } = useAuth();
  const LIMIT = 10;

  const loadQuotes = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    
    try {
      const response = await getQuotes(LIMIT, offset);
      console.log(response,"hjkewhrjk")
      if (response.data.length === 0) {
        setHasMore(false);
      } else {
        setQuotes((prev) => [...prev, ...response.data]);
        setOffset((prev) => prev + LIMIT);
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error('Failed to load quotes');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadQuotes();
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop
      === document.documentElement.offsetHeight
    ) {
      loadQuotes();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white shadow-sm fixed top-0 w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Quotes</h1>
          <button
            onClick={handleLogout}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <LogOut className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {quotes.map((quote) => (
            <QuoteCard key={quote.id} quote={quote} />
          ))}
        </div>
        {loading && (
          <div className="text-center py-4">
            <p className="text-gray-600">Loading more quotes...</p>
          </div>
        )}
        {!hasMore && quotes.length > 0 && (
          <div className="text-center py-4">
            <p className="text-gray-600">No more quotes to load</p>
          </div>
        )}
      </main>

      <button
        onClick={() => navigate('/create')}
        className="fixed bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
      >
        <Plus className="h-6 w-6" />
      </button>
    </div>
  );
};