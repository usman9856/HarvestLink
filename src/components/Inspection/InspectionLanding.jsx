import React, { useState, useNavigate } from "react";
import DataTable from "react-data-table-component";
import generate from '../../assets/icons/create.png'
import view from '../../assets/icons/eye.png';
import { Link } from "react-router-dom";
import add from '../../assets/icons/add.png'



export default function InspectionLanding() {

    const handleGenerate = () => { }
    const [selectedRows, setSelectedRows] = useState([]); // Initialize as an empty array
    // const navigate = useNavigate();
    const handleView = (row) => {
        if (selectedRows.length > 0) {
            // Redirect to InvoiceView with selectedRows data
            // console.log(selectedRows[0].batchId);

            // navigate('/InvoiceView', { state: { batchId: selectedRows[0].batchId, date: selectedRows[0].dateCreated, Id:selectedRows[0].id,invoiceNumber:selectedRows[0].invoiceNumber,invoiceTitle:selectedRows[0].invoiceTitle,status:selectedRows[0].status} });
        }
        else {
            alert('No Invoice selected.\nPlease select invoice to view');
        }
    };
    const [isHovered, setIsHovered] = useState(false);
    const handleRowClick = (selectedRows) => {
        setSelectedRows(selectedRows.selectedRows);
        console.log(selectedRows.selectedRows)
    };

    const data = [
        {
            Sr: 1,
            InspectionID: 'ABC123',
            DateOfInspection: '2023-01-01',
            InspectorName: 'John Doe',
            InspectorID: 'ID001',
            Status: 'Completed',
        },
        {
            Sr: 2,
            InspectionID: 'XYZ456',
            DateOfInspection: '2023-02-15',
            InspectorName: 'Jane Smith',
            InspectorID: 'ID002',
            Status: 'Pending',
        },
        {
            Sr: 3,
            InspectionID: 'DEF789',
            DateOfInspection: '2023-03-10',
            InspectorName: 'Bob Johnson',
            InspectorID: 'ID003',
            Status: 'InProgress',
        },
        {
            Sr: 4,
            InspectionID: 'GHI987',
            DateOfInspection: '2023-04-20',
            InspectorName: 'Alice Williams',
            InspectorID: 'ID004',
            Status: 'Completed',
        },
        {
            Sr: 5,
            InspectionID: 'JKL321',
            DateOfInspection: '2023-05-05',
            InspectorName: 'Chris Brown',
            InspectorID: 'ID005',
            Status: 'Pending',
        },
        {
            Sr: 6,
            InspectionID: 'MNO654',
            DateOfInspection: '2023-06-15',
            InspectorName: 'Eva Davis',
            InspectorID: 'ID006',
            Status: 'InProgress',
        },
        {
            Sr: 7,
            InspectionID: 'PQR987',
            DateOfInspection: '2023-07-01',
            InspectorName: 'Michael Lee',
            InspectorID: 'ID007',
            Status: 'Completed',
        },
        {
            Sr: 8,
            InspectionID: 'STU654',
            DateOfInspection: '2023-08-10',
            InspectorName: 'Sophie Miller',
            InspectorID: 'ID008',
            Status: 'Pending',
        },
        {
            Sr: 9,
            InspectionID: 'VWX321',
            DateOfInspection: '2023-09-20',
            InspectorName: 'David Wilson',
            InspectorID: 'ID009',
            Status: 'InProgress',
        },
        {
            Sr: 10,
            InspectionID: 'YZA987',
            DateOfInspection: '2023-10-05',
            InspectorName: 'Olivia Turner',
            InspectorID: 'ID010',
            Status: 'Completed',
        },
    ];

    const columns = [
        {
            name: 'Sr.',
            selector: 'Sr',
            sortable: true,
            width: '75px',
        },
        {
            name: 'Inspection ID',
            selector: 'InspectionID',
            sortable: true,
            width: '175px',
        },
        {
            name: 'Inspection Number',
            selector: 'InspectionNumber',
            sortable: true,
            width: '200px',
        },
        {
            name: 'Inspector Name',
            selector: 'InspectorName',
            sortable: true,
            width: '250px',
        },
        {
            name: 'Date of Inspection',
            selector: 'DateOfInspection',
            sortable: true,
            width: '250px',
        },
        {
            name: 'Status',
            selector: 'Status',
            sortable: true,
            width: '100px',
        },
        {
            name: 'Generate View',
            selector: 'actions',
            sortable: true,
            width: '250px',
            cell: (row) => (
                <div className="flex flex-row items-center justify-center">
                    <button onClick={() => handleGenerate(row)}>
                        <img src={generate} alt="generate" className="w-6 h-6 mx-[9.75px]" />
                    </button>
                    <button onClick={() => handleView(row)}>
                        <img src={view} alt="view" className="w-6 h-6 mx-[9.75px]" />
                    </button>
                </div>
            ),
        },
    ];


    return (
        <div className="mx-16 sm:mx-8 md:mx-16 mb-10 mt-6">
            <div className="flex flex-row items-center justify-between">
                <b><h1 className="my-6 sm:text-2xl md:text-4xl ">Inspection</h1></b>
                <Link to='/InspectionRequest'>
                    <button
                        className={`flex items-center justify-between  px-2.5 py-1 rounded-3xl bg-[#4663CC] text-white text-xl ${isHovered ? 'overflow-visible btn-expand-animate width' : 'overflow-hidden width btn-expand-animate'}`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <img className="w-4 h-4 m-2 sm:w-5 sm:h-5 md:w-7 md:h-7" src={add} alt="new invoice" />
                        {isHovered && <span className="p-1">Request Inspection</span>}
                    </button>
                </Link>
            </div>
            <hr className="my-4" />
            <div className="md:w-full sm:w-auto">
                <div className="my-4 sm:my-0 border-2 border-white z-[-20]">
                    <DataTable
                        title="Inspection"
                        columns={columns}
                        data={data}
                        className="rdt_Table"
                        selectableRows
                        fixedHeader
                        pagination
                        selectableRowsHighlight={true}
                        pointerOnHover={true}
                        highlightOnHover={true}
                        onSelectedRowsChange={handleRowClick}
                    />
                </div>
            </div>
        </div>
    )
}