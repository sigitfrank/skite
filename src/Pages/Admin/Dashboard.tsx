import { useState } from 'react'
import Layout from '../../Components/Layout'
import ReactApexChart from 'react-apexcharts'
import useBreakpoint from '../../Hooks/useBreakpoints'
import Header from '../../Components/Admin/Header'

const items = [
    {
        id: 1,
        label: 'Item A',
        value: '$ 120.00'
    },
    {
        id: 2,
        label: 'Item B',
        value: '$ 80.00'
    },
    {
        id: 3,
        label: 'Item C',
        value: '$ 76.00'
    },
]

const initChart = {
    series: [{
        name: 'Value',
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3]
    }],
    options: {
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: ['11/05', '12/05', '13/05', '14/05', '15/05', '16/05', '17/05', '18/05']
        }
    },
}

const Dashboard = () => {
    const breakpoint = useBreakpoint()
    const isMobile = breakpoint === 'xs'

    const [chart] = useState(initChart)
    const [selectedItem, setSelectedItem] = useState<typeof items[number] | null>(null)

    return <Layout>
        {!isMobile && <Header title='Home' />}
        <div className='p-3 bg-white mt-3 shadow-lg rounded-lg m-5'>
            <div className='flex gap-10 mt-1 items-center justify-between'>
                <span className='font-bold'>Top selling product</span>
                <select className='p-2 px-4 rounded-lg bg-white border border-[#CCE0EE] text-[#58595F]'>
                    <option>This Week</option>
                    <option>Last Week</option>
                </select>
            </div>
            <div className='mt-5'>
                <div id="chart">
                    <ReactApexChart options={chart.options} series={chart.series} type="bar" height={350} />
                </div>
            </div>
        </div>
        <div className='p-3 bg-white mt-3 w-fit shadow-lg rounded-lg m-5'>
            <div className='flex gap-10 mt-1 items-center'>
                <span className='font-bold'>Top selling product</span>
                <select className='p-2 px-4 rounded-lg bg-white border border-[#CCE0EE] text-[#58595F]'>
                    <option>This Week</option>
                    <option>Last Week</option>
                </select>
            </div>
            <div className='mt-5'>
                <div className='p-3 flex justify-between border-b-2 border-[#F2F7FB]'>
                    <span>Name</span>
                    <span>Value</span>
                </div>
                {
                    items.map((item) => {
                        return <div className={`mt-2 p-3 flex justify-between ${selectedItem?.id === item.id ? 'bg-[#F2F7FB]' : ''}`} key={item.id} onClick={() => setSelectedItem(item)}>
                            <span>{item.label}</span>
                            <span>{item.value}</span>
                        </div>
                    })
                }
            </div>
        </div>

    </Layout>
}

export default Dashboard