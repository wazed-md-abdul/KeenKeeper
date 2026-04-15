"use client"
import { InterectionsContext } from "@/context/installcontext";
import { useContext } from "react";
import { Pie, PieChart, Tooltip, Cell, Label } from "recharts";

const StatsManager = () => {
    const { interections } = useContext(InterectionsContext);
    const call = interections.filter((interection) => interection.type === "Call");
    const video = interections.filter((interection) => interection.type === "Video");
    const text = interections.filter((interection) => interection.type === "Text");
    const data = [
        { name: 'Call', value: call.length, fill: '#00C49F' },
        { name: 'Video', value: video.length, fill: '#FFBB28' },
        { name: 'Text', value: text.length, fill: '#FF8042' },
    ];
    return (
        <>

            <div className="bg-[#F8FAFC]" >
                <section className="flex flex-col justify-center items-center w-8/12 mx-auto w-8/12">
                    <div className="  text-2xl font-bold text-[#000000] my-8 text-start w-full">
                        <h1>FriendShip Analytics</h1>
                    </div>
                    <div className="bg-white rounded-lg w-full mx-auto flex flex-col justify-center items-center my-10">
                        <h1 className="text-start w-full my-3.5 px-3 text-2xl font-bold text-gray-400">PieChart View</h1>
                        <PieChart style={{ width: '100%', }} responsive>
                            <Tooltip
                               
                                contentStyle={{
                                    backgroundColor: '#1F2937',
                                    border: 'none',
                                    borderRadius: '8px',
                                    color: '#fff',
            
                                }}
                            />
                            <Pie
                                data={data}
                                innerRadius="80%"
                                outerRadius="100%"
                                cornerRadius="50%"
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                                isAnimationActive={true}
                               
                            >
                               
                            </Pie>

                        </PieChart>

                        <div className="flex items-center gap-6 text-sm my-7">

                            {/* Call */}
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-sm bg-success"></span>
                                <span className="text-success">Call</span>
                            </div>

                            {/* Text */}
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-sm  bg-orange-400 "></span>
                                <span className="text-orange-400">Text</span>
                            </div>

                            {/* Video */}
                            <div className="flex  items-center gap-2 ">
                                <span className="w-3 h-3 rounded-sm bg-[#FFBB28]"></span>
                                <span className=" text-[#FFBB28]">Video</span>
                            </div>

                        </div>

                    </div>
                </section>


            </div>

        </>
    );
};

export default StatsManager;