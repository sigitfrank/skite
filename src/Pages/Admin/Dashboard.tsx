import { useEffect, useState } from 'react'
import Layout from '../../Components/Layout'
import ReactApexChart from 'react-apexcharts'
import useBreakpoint from '../../Hooks/useBreakpoints'
import Header from '../../Components/Admin/Header'
import { useQuery } from '@tanstack/react-query'
import { getProductSoldReport } from '../../Api'
import { formatDate } from '../../Helpers/formatDate'


const initChart = {
    series: [{
        name: 'Total Sold',
        data: []
    }],
    options: {
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: []
        }
    },
}

const totalAlphabet = 26
const ASCIIletterA = 65

type Report = {
    created_at: string
    income: string
    total: number
}

const Dashboard = () => {
    const breakpoint = useBreakpoint()
    const isMobile = breakpoint === 'xs'

    const [chart, setChart] = useState(initChart)

    const reportQuery = useQuery({
        queryKey: ['productSold'],
        queryFn: getProductSoldReport
    })

    useEffect(() => {
        if (!reportQuery.data) return
        const newData = reportQuery.data.map((d: Report) => d.total)
        const newCategories = reportQuery.data.map((d: Report) => formatDate(d.created_at))

        const newChart = {
            series: [{
                name: 'Total Sold',
                data: newData
            }],
            options: {
                chart: {
                    id: "basic-bar"
                },
                xaxis: {
                    categories: newCategories
                }
            },
        }
        setChart(newChart)
    }, [reportQuery.data])



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
                    reportQuery.data?.map((item: Report, index: number) => {
                        const alphabet = String.fromCharCode(ASCIIletterA + (index % totalAlphabet));
                        return <div className={`mt-2 p-3 flex justify-between cursor-pointer hover:bg-[#F2F7FB]`} key={index}>
                            <span>Item {alphabet}</span>
                            <span>{item.total}</span>
                        </div>
                    })
                }
            </div>
        </div>

    </Layout>
}

export default Dashboard