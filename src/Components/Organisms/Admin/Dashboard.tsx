import Layout from './Components/Layout'
import ReactApexChart from 'react-apexcharts'
import Header from './Components/Header'
import useDashboard from '../../../Hooks/Queries/useDashboard'
import { ASCIIletterA, totalAlphabet } from '../../../Constants'
import { Report } from '../../../Types/report'

const Dashboard = () => {
    const {
        isMobile,
        isFetched,
        chart,
        reportData
    } = useDashboard()

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
                    isFetched ? reportData?.map((item: Report, index: number) => {
                        const alphabet = String.fromCharCode(ASCIIletterA + (index % totalAlphabet));
                        return <div className={`mt-2 p-3 flex justify-between cursor-pointer hover:bg-[#F2F7FB]`} key={index}>
                            <span>Item {alphabet}</span>
                            <span>{item.total}</span>
                        </div>
                    })
                        : <p>Fetching reports...</p>
                }
            </div>
        </div>

    </Layout>
}

export default Dashboard