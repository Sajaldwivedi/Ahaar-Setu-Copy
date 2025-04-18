import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Plus, History, Award, ChevronRight, Star, Bell } from 'lucide-react';

const DonorDashboard = () => {
  const mockDonations = [
    {
      id: 'don1',
      food: '10 kg Rice',
      date: 'April 5, 2023',
      status: 'Claimed by Hope NGO',
      rating: 5
    },
    {
      id: 'don2',
      food: '5 kg Vegetables',
      date: 'April 2, 2023',
      status: 'Distributed',
      rating: 4
    },
    {
      id: 'don3',
      food: '20 Bread Loaves',
      date: 'March 28, 2023',
      status: 'Picked up',
      rating: 5
    }
  ];
  
  const mockNotifications = [
    {
      id: 'not1',
      message: 'Hope NGO rated your bread donation 5 stars!',
      time: '2 hours ago',
      type: 'success'
    },
    {
      id: 'not2',
      message: 'Your rice donation was picked up by Shelter Home',
      time: '1 day ago',
      type: 'info'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar userRole="donor" />
      <main className="flex-grow bg-cream">
        <div className="container mx-auto py-8 px-4">
          <div className="bg-purple rounded-xl p-6 md:p-8 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white">Welcome, Cafe Green!</h1>
                <p className="text-purple-light mt-2">Your contributions are making a difference</p>
              </div>
              <div className="mt-4 md:mt-0">
                <Link 
                  to="/donate" 
                  className="btn-donor flex items-center"
                >
                  <Plus size={18} className="mr-2" /> Donate Food
                </Link>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-teal">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-purple mb-1">Impact Summary</h2>
                  <p className="text-slate text-sm mb-4">Your contributions so far</p>
                </div>
                <div className="bg-teal/10 p-2 rounded-full">
                  <Star size={24} className="text-teal" />
                </div>
              </div>
              <div className="mt-2">
                <div className="flex justify-between mb-1">
                  <span className="text-slate text-sm">Meals Provided</span>
                  <span className="text-slate font-medium">50/100</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-bar-fill" style={{ width: '50%' }}></div>
                </div>
                
                <div className="flex justify-between mb-1 mt-4">
                  <span className="text-slate text-sm">Food Donated</span>
                  <span className="text-slate font-medium">35 kg</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-bar-fill" style={{ width: '35%' }}></div>
                </div>
                
                <div className="flex justify-between mb-1 mt-4">
                  <span className="text-slate text-sm">CO2 Emissions Saved</span>
                  <span className="text-slate font-medium">25 kg</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-bar-fill" style={{ width: '25%' }}></div>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-slate font-medium">You've earned <span className="text-coral font-bold">150 points</span></p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-purple mb-1">Recent Donations</h2>
                  <p className="text-slate text-sm">Your last few contributions</p>
                </div>
                <div className="bg-purple-light/10 p-2 rounded-full">
                  <History size={24} className="text-purple" />
                </div>
              </div>
              
              <div className="space-y-4">
                {mockDonations.map(donation => (
                  <div key={donation.id} className="border-b border-purple-light/20 pb-3 last:border-0">
                    <div className="flex justify-between">
                      <span className="font-medium text-slate">{donation.food}</span>
                      <span className="text-sm text-slate">{donation.date}</span>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-sm text-slate/80">{donation.status}</span>
                      <div className="flex">
                        {[...Array(donation.rating)].map((_, i) => (
                          <Star key={i} size={14} className="text-yellow fill-yellow" />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-center">
                <Link to="/all-donations" className="text-teal hover:underline text-sm flex items-center justify-center">
                  View All Donations <ChevronRight size={16} />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-purple mb-1">Notifications</h2>
                  <p className="text-slate text-sm">Stay updated on your donations</p>
                </div>
                <div className="bg-coral/10 p-2 rounded-full">
                  <Bell size={24} className="text-coral" />
                </div>
              </div>
              
              <div className="space-y-4">
                {mockNotifications.map(notification => (
                  <div 
                    key={notification.id} 
                    className={`p-3 rounded-lg ${
                      notification.type === 'success' ? 'bg-mint/20' : 'bg-purple-light/20'
                    }`}
                  >
                    <p className="text-slate">{notification.message}</p>
                    <p className="text-slate/60 text-xs mt-1">{notification.time}</p>
                  </div>
                ))}
                
                {mockNotifications.length === 0 && (
                  <div className="text-center py-6">
                    <p className="text-slate">No new notifications</p>
                  </div>
                )}
              </div>
              
              <div className="mt-6">
                <div className="bg-yellow/20 p-4 rounded-lg">
                  <h3 className="font-medium text-purple mb-2">AI Waste Tip</h3>
                  <p className="text-slate text-sm">
                    Based on your donation pattern, consider reducing rice orders by 5kg to cut surplus.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <Link to="/rewards" className="btn-secondary py-2 px-4 inline-flex items-center">
                  <Award size={18} className="mr-2" /> Redeem Rewards
                </Link>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-purple mb-4">Bridge Builder Progress</h2>
            <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-purple" style={{ width: '50%' }}></div>
              <div className="absolute top-0 left-0 h-full bg-purple-light/50" style={{ width: '70%' }}></div>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-slate text-sm">5/10 donations</span>
              <span className="text-purple font-medium text-sm">Bridge Builder Badge</span>
            </div>
            <p className="mt-4 text-slate text-sm text-center">
              Make 5 more donations to earn the Bridge Builder badge and unlock special rewards!
            </p>
          </div>
          
          <div className="bg-purple-light/20 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold text-purple mb-4 text-center">Upcoming Events</h2>
            <div className="text-center">
              <p className="text-slate mb-4">
                No upcoming food drive events in your area.
              </p>
              <Link to="/community" className="text-teal hover:underline">
                Visit Community Hub to learn more
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DonorDashboard;
