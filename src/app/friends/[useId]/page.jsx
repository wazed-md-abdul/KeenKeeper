
const appsPromise = async function () {
  const res = await fetch('http://localhost:3000/data.json');
  const data = await res.json();
  return data;
}
const interactions = [
  { type: "Text", icon: "💬", desc: "Asked for career advice", date: "Jan 28, 2026" },
  { type: "Meetup", icon: "🤝", desc: "Industry conference meetup", date: "Jan 28, 2026" },
  { type: "Video", icon: "🎥", desc: "Asked for career advice", date: "Jan 28, 2026" },
  { type: "Text", icon: "💬", desc: "Asked for career advice", date: "Jan 28, 2026" },
];

const FriendsData = async ({ params }) => {
  const { useId } = await params;
  const friends = await appsPromise();
  const user = friends.find(friend => friend.id === parseInt(useId));


  return (
    <>
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4">

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-4">

          {/* Profile Card */}
          <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-sm">
            <div className="w-20 h-20 rounded-full overflow-hidden mb-3 ring-2 ring-slate-200">
              <img
                src={user.picture}
                alt="Emma Wilson"
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="text-lg font-semibold text-slate-800">{user.name}</h2>
            <div className="flex gap-2 mt-2 mb-3 flex-col">
              <span className="bg-red-500 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">Overdue</span>
              
              {

                user.tags.map((tag, index) => (
                  <span key={index} className=" bg-gradient-to-r from-green-900 to-emerald-500 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">{tag}</span>
                ))
              }
  
            </div>
            <p className="text-sm text-slate-500 italic">Former colleague, great mentor</p>
            <p className="text-xs text-slate-400 mt-1">Preferred: email</p>
          </div>

          {/* Actions */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden divide-y divide-slate-100">
            <button className="w-full flex items-center gap-3 px-5 py-3.5 text-sm text-slate-600 hover:bg-slate-50 transition-colors">
              <span>🔔</span> Snooze 2 Weeks
            </button>
            <button className="w-full flex items-center gap-3 px-5 py-3.5 text-sm text-slate-600 hover:bg-slate-50 transition-colors">
              <span>📁</span> Archive
            </button>
            <button className="w-full flex items-center gap-3 px-5 py-3.5 text-sm text-red-500 hover:bg-red-50 transition-colors">
              <span>🗑️</span> Delete
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-4">

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="text-3xl font-bold text-slate-800">{user.days_since_contact}</p>
              <p className="text-xs text-slate-400 mt-1">Days Since Contact</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="text-3xl font-bold text-slate-800">{user.goal}</p>
              <p className="text-xs text-slate-400 mt-1">Goal (Days)</p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <p className="text-lg font-bold text-slate-800 leading-tight">{user.next_due_date}</p>
              <p className="text-xs text-slate-400 mt-1">Next Due</p>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-slate-700">Relationship Goal</h3>
              <button className="text-xs border border-slate-200 px-3 py-1 rounded-lg text-slate-500 hover:bg-slate-50 transition-colors">
                Edit
              </button>
            </div>
            <p className="text-sm text-slate-500">
              Connect every <span className="font-bold text-slate-800">{user.goal} days</span>
            </p>
          </div>

          {/* Quick Check-In */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-700 mb-3">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Call", icon: "📞" },
                { label: "Text", icon: "💬" },
                { label: "Video", icon: "🎥" },
              ].map(({ label, icon }) => (
                <button
                  key={label}
                  className="flex flex-col items-center gap-2 py-4 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all text-sm text-slate-600 font-medium"
                >
                  <span className="text-xl">{icon}</span>
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Recent Interactions */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-slate-700">Recent Interactions</h3>
              <button className="text-xs text-slate-400 hover:text-slate-600 flex items-center gap-1 transition-colors">
                ↺ Full History
              </button>
            </div>
            <div className="divide-y divide-slate-100">
              {interactions.map((item, i) => (
                <div key={i} className="flex items-center gap-3 py-3">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-base shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-700">{item.type}</p>
                    <p className="text-xs text-slate-400 truncate">{item.desc}</p>
                  </div>
                  <span className="text-xs text-slate-400 shrink-0">{item.date}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>







    </>
  );
};

export default FriendsData;