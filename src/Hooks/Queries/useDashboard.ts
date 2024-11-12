import { useEffect, useState } from 'react'
import { getProductSoldReport } from '../../Api';
import { useQuery } from '@tanstack/react-query';
import useBreakpoint from '../useBreakpoints';
import { formatDate } from '../../Helpers/formatDate';
import { Report } from '../../Types/report';

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

const useDashboard = () => {
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

    return {
        chart,
        isMobile,
        isFetched: reportQuery.isFetched,
        reportData: reportQuery.data,
    }
}

export default useDashboard