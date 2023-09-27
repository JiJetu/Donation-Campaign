import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
// import { PieChart, Pie, Tooltip } from 'recharts';


const COLORS = ["#FF444A", "#00C49F"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);




    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};


const Statistics = () => {
    const donationItem = JSON.parse(localStorage.getItem("donation"));
    const cards = useLoaderData();

    const donationDone = parseFloat(((donationItem.length / cards.length) * 100).toFixed(2));
    const totalDonation = parseFloat((100 - donationDone).toFixed(2));


    const data = [
        { name: 'Your Donation', value: donationDone },
        { name: 'Total Donation', value: totalDonation },
    ];


    return (
        <div className="flex-col justify-center items-center">
            <ResponsiveContainer width="100%" height={500} >
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-5 pb-10 md:gap-14">
                <div className="flex gap-2 items-center">
                    <h4 className="text-sm lg:text-lg text-[#0B0B0B]">Your Donation</h4>
                    <div className="w-[70px] md:w-[100px] h-[12px] rounded-sm bg-[#00C49F]"></div>
                </div>
                <div>
                    <div className="flex gap-2 items-center">
                        <h4 className="text-sm lg:text-lg text-[#0B0B0B]">Total Donation</h4>
                        <div className="w-[70px] md:w-[100px] h-[12px] rounded-sm bg-[#FF444A]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;