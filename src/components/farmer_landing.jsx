import React, { useState } from "react";
import ReactApexChart from 'react-apexcharts';
import DataTable from 'react-data-table-component';

function Farmer_Landing() {
    const [barChartOptions, setBarChartOptions] = useState({
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
    });

    const [barChartSeries, setBarChartSeries] = useState([
        {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
        {
            name: "series-2",
            data: [35, 45, 40, 54, 39, 30, 72, 11]
        }
    ]);

    const [lineChartOptions, setLineChartOptions] = useState({
        chart: {
            id: "basic-line"
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
    });

    const [lineChartSeries, setLineChartSeries] = useState([
        {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
        {
            name: "series-2",
            data: [35, 45, 40, 54, 39, 30, 72, 11]
        }
    ]);

    const columns = [
        {
            name: 'Sr.',
            selector: 'id',
            sortable: true,
        },
        {
            name: 'Transaction ID',
            selector: 'transactionId',
            sortable: true,
        },
        {
            name: 'Date Created',
            selector: 'dateCreated',
            sortable: true,
        },
        {
            name: 'Criteria',
            selector: 'criteria',
            sortable: true,
        },
        {
            name: 'Status',
            selector: 'status',
            sortable: true,
        },
        // Add more columns as needed
    ];

    const data = [
        { id: 1, transactionId: 'TX123', dateCreated: '2023-01-01', criteria: 'Some Criteria', status: 'Completed' },
        { id: 2, transactionId: 'TX456', dateCreated: '2023-01-02', criteria: 'Another Criteria', status: 'Pending' },
        { id: 3, transactionId: 'TX789', dateCreated: '2023-01-03', criteria: 'Another Criteria', status: 'Failed' },
        // Add more data as needed
    ];



    return (
        <>
            <div className="border border-zinc-200">
                <div className="flex flex-row items-center justify-center">
                    <div className="h-96 border-r-2 pr-6">
                        <ReactApexChart
                            options={barChartOptions}
                            series={barChartSeries}
                            type="bar"
                            width="500"
                        />
                    </div>

                    <div className="h-96 border-l-2">
                        <ReactApexChart
                            options={lineChartOptions}
                            series={lineChartSeries}
                            type="line"
                            width="500"
                        />
                    </div>
                </div>
                <hr />
                <div className="flex flex-col items-center justify-center px-40 mt-10 mb-28">
                    <DataTable
                        title="Transaction Data Table"
                        columns={columns}
                        data={data}
                        // pagination
                        // paginationComponentOptions={{
                        //     rowsPerPageText: 'Rows per page:',
                        //     rangeSeparatorText: 'of',
                        //     selectAllRowsItem: true,
                        //     selectAllRowsItemText: 'All',
                        //   }}
                    />
                </div>
            </div>
        </>
    )
}

export default Farmer_Landing;
