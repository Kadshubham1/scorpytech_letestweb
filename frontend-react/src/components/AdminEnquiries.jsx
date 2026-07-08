import React, { useState, useEffect } from 'react';
import { Search, Download, Trash2, Eye, X } from 'lucide-react';
import { useToast } from '../context/ToastContext';

const AdminEnquiries = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const { addToast } = useToast();

  const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/admin/enquiries/`);
      const data = await res.json();
      if (res.ok) {
        setEnquiries(data);
      } else {
        addToast('Failed to fetch enquiries', 'error');
      }
    } catch (err) {
      addToast('Network error while fetching enquiries', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this enquiry?')) return;
    try {
      const res = await fetch(`${API_URL}/api/admin/enquiries/${id}`, { method: 'DELETE' });
      if (res.ok) {
        addToast('Enquiry deleted successfully', 'success');
        fetchEnquiries();
      } else {
        addToast('Failed to delete', 'error');
      }
    } catch (err) {
      addToast('Error deleting enquiry', 'error');
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await fetch(`${API_URL}/api/admin/enquiries/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
        addToast('Status updated', 'success');
        fetchEnquiries();
      } else {
        addToast('Failed to update status', 'error');
      }
    } catch (err) {
      addToast('Error updating status', 'error');
    }
  };

  const downloadCSV = () => {
    const headers = ['ID', 'Name', 'Company', 'Email', 'Phone', 'Service', 'Subject', 'Message', 'Status', 'Date'];
    const rows = filteredEnquiries.map(e => [
      e.id, e.full_name, e.company_name || 'N/A', e.email, e.phone, 
      e.service || 'N/A', e.subject || 'N/A', `"${e.message.replace(/"/g, '""')}"`, 
      e.status, new Date(e.submitted_at).toLocaleString()
    ]);
    
    const csvContent = "data:text/csv;charset=utf-8," 
      + headers.join(",") + "\n" 
      + rows.map(e => e.join(",")).join("\n");
      
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "enquiries.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredEnquiries = enquiries.filter(e => {
    const matchesSearch = e.full_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          e.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = statusFilter === 'All' || e.status === statusFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="w-full bg-slate-50 min-h-screen pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold text-gray-900 font-heading">Website Enquiries</h1>
          <button 
            onClick={downloadCSV}
            className="flex items-center gap-2 bg-[#005BAC] text-white px-4 py-2 rounded-md hover:bg-[#004280] transition-colors"
          >
            <Download className="w-4 h-4" /> Export CSV
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-4 justify-between bg-gray-50/50">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search name or email..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-[#005BAC] w-full sm:w-64 text-sm"
              />
            </div>
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border border-gray-200 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-[#005BAC]"
            >
              <option value="All">All Status</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Closed">Closed</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-gray-600">
                  <th className="p-4 font-semibold">Date</th>
                  <th className="p-4 font-semibold">Name</th>
                  <th className="p-4 font-semibold">Email & Phone</th>
                  <th className="p-4 font-semibold">Service</th>
                  <th className="p-4 font-semibold">Status</th>
                  <th className="p-4 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="6" className="p-8 text-center text-gray-500">Loading enquiries...</td>
                  </tr>
                ) : filteredEnquiries.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="p-8 text-center text-gray-500">No enquiries found.</td>
                  </tr>
                ) : (
                  filteredEnquiries.map(enquiry => (
                    <tr key={enquiry.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-gray-500 whitespace-nowrap">
                        {new Date(enquiry.submitted_at).toLocaleDateString()}
                      </td>
                      <td className="p-4">
                        <div className="font-medium text-gray-900">{enquiry.full_name}</div>
                        <div className="text-xs text-gray-500">{enquiry.company_name}</div>
                      </td>
                      <td className="p-4">
                        <div className="text-gray-900">{enquiry.email}</div>
                        <div className="text-xs text-gray-500">{enquiry.phone}</div>
                      </td>
                      <td className="p-4 text-gray-700">{enquiry.service || '-'}</td>
                      <td className="p-4">
                        <select 
                          value={enquiry.status}
                          onChange={(e) => handleStatusChange(enquiry.id, e.target.value)}
                          className={`text-xs font-semibold px-2.5 py-1 rounded-full border focus:outline-none cursor-pointer ${
                            enquiry.status === 'New' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                            enquiry.status === 'Contacted' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                            'bg-green-50 text-green-700 border-green-200'
                          }`}
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Closed">Closed</option>
                        </select>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <button 
                            onClick={() => setSelectedEnquiry(enquiry)}
                            className="text-gray-500 hover:text-[#005BAC] transition-colors"
                            title="View Details"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleDelete(enquiry.id)}
                            className="text-gray-500 hover:text-red-500 transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Details Modal */}
      {selectedEnquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm" onClick={() => setSelectedEnquiry(null)}></div>
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl relative z-10 overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h2 className="text-xl font-bold text-gray-900 font-heading">Enquiry Details</h2>
              <button onClick={() => setSelectedEnquiry(null)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Full Name</p>
                  <p className="font-medium text-gray-900">{selectedEnquiry.full_name}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Company</p>
                  <p className="font-medium text-gray-900">{selectedEnquiry.company_name || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email Address</p>
                  <a href={`mailto:${selectedEnquiry.email}`} className="font-medium text-[#005BAC]">{selectedEnquiry.email}</a>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Phone Number</p>
                  <p className="font-medium text-gray-900">{selectedEnquiry.phone}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Service Interested In</p>
                  <p className="font-medium text-gray-900">{selectedEnquiry.service || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Submitted On</p>
                  <p className="font-medium text-gray-900">{new Date(selectedEnquiry.submitted_at).toLocaleString()}</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Subject</p>
                <p className="font-semibold text-gray-900 mb-4">{selectedEnquiry.subject || 'No Subject'}</p>
                
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Message</p>
                <p className="text-gray-700 whitespace-pre-wrap">{selectedEnquiry.message}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminEnquiries;
