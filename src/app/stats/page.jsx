"use client"
import { InterectionsContext } from "@/context/installcontext";
import { useContext } from "react";
import { Pie, PieChart } from "recharts";

const StatsManager = () => {
    const {interections} = useContext(InterectionsContext);
   const data = [
  { name: 'Group A', value: 400, fill: '#0088FE' },
  { name: 'Group B', value: 300, fill: '#00C49F' },
  { name: 'Group C', value: 300, fill: '#FFBB28' },
  { name: 'Group D', value: 200, fill: '#FF8042' },
];
    return (
        <>
            
            <div className="bg-[#F8FAFC]" >
                <section className="flex flex-col justify-center items-center w-8/12 mx-auto w-8/12">
                <div className="  text-2xl font-bold text-[#000000] my-8 text-start w-full">
                        <h1>FriendShip Analytics</h1>
                </div>
                    <div className="bg-white rounded-xl w-full mx-auto flex flex-col justify-center items-center my-10">
                     <h1 className="text-start w-full my-3.5 px-3 text-2xl font-bold text-gray-400">PieChart View</h1>   
                    <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                        <Pie
                            data={data}
                            innerRadius="80%"
                            outerRadius="100%"
                            // Corner radius is the rounded edge of each pie slice
                            cornerRadius="50%"
                            fill="#8884d8"
                            // padding angle is the gap between each pie slice
                            paddingAngle={5}
                            dataKey="value"
                            isAnimationActive= {true}
                        />
                       
                    </PieChart>



                </div>
                </section>


            </div>

        </>
    );
};

export default StatsManager;