import React, { useState } from 'react';
import { SafariEnquiry } from '../types';
import { updateEnquiryStatus, exportEnquiriesToCSV } from '../services/enquiryStorage';
import { X, Download, Search, CheckCircle, Clock, ShieldCheck, Mail, Phone, MapPin, DollarSign, Filter, RefreshCw } from 'lucide-react';

interface ConciergePortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  enquiries: SafariEnquiry[];
  onRefresh: () => void;
}

export const ConciergePortalModal: React.FC<ConciergePortalModalProps> = ({
  isOpen,
  onClose,
  enquiries,
  onRefresh
}) => {
  const [selectedEnquiry, setSelectedEnquiry] = useState<SafariEnquiry | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [editingNotes, setEditingNotes] = useState('');

  if (!isOpen) return null;

  const filtered = enquiries.filter((e) => {
    if (filterStatus !== 'All' && e.status !== filterStatus) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        e.referenceCode.toLowerCase().includes(q) ||
        e.fullName.toLowerCase().includes(q) ||
        e.email.toLowerCase().includes(q) ||
        e.destinations.join(' ').toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handleSelectEnquiry = (enq: SafariEnquiry) => {
    setSelectedEnquiry(enq);
    setEditingNotes(enq.internalNotes || '');
  };

  const handleStatusChange = (status: SafariEnquiry['status']) => {
    if (!selectedEnquiry) return;
    updateEnquiryStatus(selectedEnquiry.id, status, editingNotes);
    setSelectedEnquiry({
      ...selectedEnquiry,
      status,
      internalNotes: editingNotes
    });
    onRefresh();
  };

  const handleSaveNotes = () => {
    if (!selectedEnquiry) return;
    updateEnquiryStatus(selectedEnquiry.id, selectedEnquiry.status, editingNotes);
    setSelectedEnquiry({
      ...selectedEnquiry,
      internalNotes: editingNotes
    });
    onRefresh();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white text-[#151713] rounded-2xl w-full max-w-6xl overflow-hidden shadow-2xl border border-neutral-300 my-6 flex flex-col h-[88vh]">
        {/* Header */}
        <div className="bg-[#151713] text-white px-6 py-4 flex items-center justify-between border-b border-neutral-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#16422b] text-white flex items-center justify-center font-bold text-xs border border-white/20">
              54
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400">
                Fifty4 Staff Portal · Internal Operations
              </span>
              <h2 className="font-serif-luxury text-xl font-bold">
                Safari Leads & Custom Itinerary Management
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={exportEnquiriesToCSV}
              className="px-3.5 py-1.5 bg-[#16422b] hover:bg-[#103321] text-white text-xs font-semibold rounded flex items-center gap-1.5 cursor-pointer shadow-sm transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white rounded-full hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 bg-[#FAF7F2] border-b border-neutral-200 flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-neutral-600 uppercase tracking-wider">Status:</span>
            {(['All', 'New', 'Contacted', 'Proposal Sent', 'Confirmed', 'Archived'] as const).map((s) => (
              <button
                key={s}
                onClick={() => setFilterStatus(s)}
                className={`px-2.5 py-1 text-xs rounded font-medium transition-colors cursor-pointer ${
                  filterStatus === s
                    ? 'bg-[#151713] text-white'
                    : 'bg-white text-neutral-700 border border-neutral-200 hover:bg-neutral-100'
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by name, ref, email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-1.5 bg-white border border-neutral-300 rounded text-xs text-neutral-800 focus:outline-none focus:ring-1 focus:ring-[#16422b]"
              />
            </div>
            <button
              onClick={onRefresh}
              className="p-1.5 bg-white border border-neutral-300 rounded text-neutral-600 hover:text-neutral-900 cursor-pointer"
              title="Refresh leads"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 2-Column Split: Lead List + Lead Details */}
        <div className="flex-1 overflow-hidden grid grid-cols-1 md:grid-cols-12">
          {/* Left Column: Lead List */}
          <div className="md:col-span-5 border-r border-neutral-200 overflow-y-auto p-4 space-y-2">
            {filtered.length === 0 ? (
              <div className="text-center py-12 text-xs text-neutral-500">
                No inquiries match your filter.
              </div>
            ) : (
              filtered.map((enq) => {
                const isSelected = selectedEnquiry?.id === enq.id;
                return (
                  <button
                    key={enq.id}
                    onClick={() => handleSelectEnquiry(enq)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-neutral-50 border-[#16422b] shadow-sm'
                        : 'bg-white border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-xs font-bold text-neutral-800">
                        {enq.referenceCode}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                          enq.status === 'New'
                            ? 'bg-amber-100 text-amber-800'
                            : enq.status === 'Contacted'
                            ? 'bg-blue-100 text-blue-800'
                            : enq.status === 'Proposal Sent'
                            ? 'bg-purple-100 text-purple-800'
                            : enq.status === 'Confirmed'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-neutral-100 text-neutral-600'
                        }`}
                      >
                        {enq.status}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-[#151713] truncate">{enq.fullName}</h4>
                    <p className="text-xs text-neutral-500 truncate">{enq.email}</p>

                    <div className="mt-2 pt-2 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500">
                      <span>{enq.destinations.join(', ')}</span>
                      <span>{enq.adults} Adults · {enq.budgetPerPerson}</span>
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Right Column: Lead Detail & Workflow */}
          <div className="md:col-span-7 overflow-y-auto p-6 bg-white">
            {selectedEnquiry ? (
              <div className="space-y-6">
                {/* Header Profile */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-neutral-200 gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold bg-[#FAF7F2] px-2 py-1 rounded border border-neutral-200 text-neutral-700">
                      {selectedEnquiry.referenceCode}
                    </span>
                    <h3 className="font-serif-luxury text-2xl font-bold text-[#151713] mt-2">
                      {selectedEnquiry.fullName}
                    </h3>
                    <p className="text-xs text-neutral-500">
                      Submitted on {new Date(selectedEnquiry.createdAt).toLocaleString()}
                    </p>
                  </div>

                  {/* Status Dropdown */}
                  <div>
                    <span className="text-[10px] uppercase font-bold text-neutral-500 block mb-1">
                      Update Lead Status
                    </span>
                    <select
                      value={selectedEnquiry.status}
                      onChange={(e) => handleStatusChange(e.target.value as any)}
                      className="text-xs font-bold bg-[#FAF7F2] border border-neutral-300 rounded px-3 py-1.5 text-neutral-800 cursor-pointer"
                    >
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Proposal Sent">Proposal Sent</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Archived">Archived</option>
                    </select>
                  </div>
                </div>

                {/* Contact Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3 bg-[#FAF7F2] rounded-lg border border-neutral-200">
                    <span className="text-neutral-500 block mb-1">Email Address:</span>
                    <a href={`mailto:${selectedEnquiry.email}`} className="font-bold text-[#16422b] hover:underline">
                      {selectedEnquiry.email}
                    </a>
                  </div>
                  <div className="p-3 bg-[#FAF7F2] rounded-lg border border-neutral-200">
                    <span className="text-neutral-500 block mb-1">Phone / WhatsApp:</span>
                    <a
                      href={`https://wa.me/${selectedEnquiry.phone.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#16422b] hover:underline"
                    >
                      {selectedEnquiry.phone}
                    </a>
                  </div>
                </div>

                {/* Trip Specs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 border border-neutral-200 rounded-lg">
                    <span className="text-neutral-400 block">Destinations</span>
                    <span className="font-bold text-neutral-800">{selectedEnquiry.destinations.join(', ')}</span>
                  </div>
                  <div className="p-3 border border-neutral-200 rounded-lg">
                    <span className="text-neutral-400 block">Party Size</span>
                    <span className="font-bold text-neutral-800">
                      {selectedEnquiry.adults} Adults{selectedEnquiry.children > 0 ? `, ${selectedEnquiry.children} Kids` : ''}
                    </span>
                  </div>
                  <div className="p-3 border border-neutral-200 rounded-lg">
                    <span className="text-neutral-400 block">Departure Date</span>
                    <span className="font-bold text-neutral-800">{selectedEnquiry.departureDate}</span>
                  </div>
                  <div className="p-3 border border-neutral-200 rounded-lg">
                    <span className="text-neutral-400 block">Target Budget</span>
                    <span className="font-bold text-neutral-800">{selectedEnquiry.budgetPerPerson} {selectedEnquiry.currency}</span>
                  </div>
                </div>

                {/* Selected Tour / Style */}
                <div className="text-xs space-y-2">
                  <div>
                    <strong className="text-neutral-700">Requested Tour / Style: </strong>
                    <span className="text-neutral-900">{selectedEnquiry.tourTitle || 'Custom Safari'}</span>
                  </div>
                  <div>
                    <strong className="text-neutral-700">Lodge Style: </strong>
                    <span className="text-neutral-900">{selectedEnquiry.accommodationStyle}</span>
                  </div>
                  <div>
                    <strong className="text-neutral-700">Wildlife Wishlist: </strong>
                    <span className="text-neutral-900">{selectedEnquiry.wildlifeInterests.join(' · ')}</span>
                  </div>
                </div>

                {/* Additional Requests */}
                {selectedEnquiry.additionalRequests && (
                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 text-xs text-neutral-700">
                    <span className="font-bold text-neutral-900 block mb-1">Guest Notes & Requests:</span>
                    <p className="leading-relaxed whitespace-pre-wrap">{selectedEnquiry.additionalRequests}</p>
                  </div>
                )}

                {/* Internal Staff Notes */}
                <div className="pt-4 border-t border-neutral-200">
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                    Internal Concierge Notes & Follow-Up Log
                  </label>
                  <textarea
                    rows={3}
                    value={editingNotes}
                    onChange={(e) => setEditingNotes(e.target.value)}
                    placeholder="e.g. Quoted 8-day Gorillas & Savannah. Called client on WhatsApp. UWA permits reserved."
                    className="w-full bg-[#FAF7F2] border border-neutral-300 rounded p-2 text-xs text-neutral-800 mb-2"
                  />
                  <button
                    onClick={handleSaveNotes}
                    className="px-4 py-1.5 bg-[#151713] text-white text-xs font-semibold rounded hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    Save Internal Notes
                  </button>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-neutral-400 text-xs">
                Select an inquiry from the list on the left to view full guest details and update booking status.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
