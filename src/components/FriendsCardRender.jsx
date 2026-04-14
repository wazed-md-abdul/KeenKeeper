import data from '../../public/data.json'
const FriendsCardRender = async () => {


    await new Promise((resolve) => setTimeout(resolve, 2000));

    const sharedStyle = " text-white rounded-full px-3 py-1 text-sm font-medium";
    return (
        <div className='grid lg:grid-cols-4 grid-cols-1 gap-4 p-4'>
            {data.map((user) => (
                <div key={user.id} className="bg-white rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                    <div className="h-16 bg-gradient-to-r from-green-900 to-emerald-500"></div>
                    <div className="px-4 -mt-10 flex items-center justify-center">
                        <img className='rounded-full w-20 h-20 border-4 border-white object-cover' src={user.picture} alt={user.name} />
                    </div>
                    <div className="p-4 pt-2 text-center">
                        <h2 className="text-lg font-bold text-gray-800 mt-2">{user.name}</h2>
                        <p className='inline-block mt-2 bg-emerald-100 text-emerald-700 rounded-full px-3 py-1 text-sm font-medium'>
                            {user.days_since_contact}d ago
                        </p>
                        <div className="mt-3 pt-3 border-t border-gray-100">
                            <span
                                className={`${sharedStyle} ${user.status === "overdue"
                                        ? "bg-red-600"
                                        : user.status === "on-track"
                                            ? "bg-green-900"
                                            : "bg-yellow-500"
                                    }`}
                            >
                                {user.status}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FriendsCardRender;