import React, { useState } from "react";
import { Progress2 } from "../Comp/Progress";
export default function InvoiceNew() {
    const [currentStep, setCurrentStep] = useState(1);

    const nextForm = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    return (
        <div className="m-16 min-h-full">
            {currentStep === 1 && (
                <LandInformation nextForm={nextForm} />
            )}
            {currentStep === 2 && (
                <CropInformation nextForm={nextForm} />
            )}
            {currentStep === 3 && (
                <SenderInformation nextForm={nextForm} />
            )}
        </div>
    );
}


function LandInformation({ nextForm }) {
    // State variables for each input
    const [address, setAddress] = useState("");
    const [size, setSize] = useState("");
    const [landType, setLandType] = useState("");

    return (
        <div className="my-12 mx-10 bg-blue-800 rounded-3xl shadow-2xl p-4">
            <div className="flex items-end justify-between h-[60px]">
                <h2 className="text-3xl font-bold  px-6 py-3  rounded-md">
                    Inspection
                </h2>
                <button
                    className="bg-blue-600 text-white text-xl px-4 py-2 rounded-lg"
                    onClick={nextForm}
                >
                    Next
                </button>
            </div>
            <hr className="my-4 h-1 bg-white" />
            {/* Assuming Progress2 is a component you've imported */}
            <Progress2 level={1} />
            <form method="post" className="grid grid-cols-1 gap-4 mt-2">
                <div className="p-4 grid grid-cols-1 gap-4">
                    <h2 className="mx-4 mt-2 text-3xl font-bold text-black">
                        Land Information
                    </h2>
                    <label className="text-white">Address</label>
                    <input
                        className="w-full h-10 px-4 rounded-xl border-2 border-white"
                        type="text"
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Address"
                    />

                    <label className="text-white">Size</label>
                    <input
                        className="w-full h-10 px-4 rounded-xl border-2 border-white"
                        type="text" 
                        name="size"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        placeholder="Size"
                    />

                    <label className="text-white">Land Type</label>
                    <input
                        className="w-full h-10 px-4 rounded-xl border-2 border-white"
                        type="text"
                        name="landType"
                        value={landType}
                        onChange={(e) => setLandType(e.target.value)}
                        placeholder="Land Type"
                    />
                </div>
            </form>
        </div>
    );
}


function CropInformation({ nextForm }) {
    const [cropName, setCropName] = useState("");
    const [cropID, setCropID] = useState("");
    const [plantDate, setPlantDate] = useState("");
    const [harvestDate, setHarvestDate] = useState("");

    return (
        <div className="my-12 mx-10 bg-blue-800 rounded-3xl shadow-2xl p-4">
            <div className="flex items-end justify-between h-[60px]">
                <h2 className="text-3xl font-bold  px-6 py-3  rounded-md">
                    Create Invoice
                </h2>
                <button
                    className="bg-blue-600 text-white text-xl px-4 py-2 rounded-lg"
                    onClick={nextForm}
                >
                    Next
                </button>
            </div>
            <hr className="my-4 h-1 bg-white" />
            {/* Assuming Progress2 is a component you've imported */}
            <Progress2 level={2} />
            <form action="" className="grid grid-cols-1 gap-4 mt-2">
                <div className="p-4 grid grid-cols-1 gap-4">
                    <h2 className="mx-4 mt-2 text-3xl font-bold text-black">
                        Crop Information
                    </h2>
                    <label className="text-white">Crop Name</label>
                    <input
                        className="w-full h-10 px-4 rounded-xl border-2 border-white"
                        type="text"
                        name="cropName"
                        value={cropName}
                        placeholder="Crop Name"
                        onChange={(e) => setCropName(e.target.value)}
                    />
                    <label className="text-white">Crop Id</label>
                    <input
                        className="w-full h-10 px-4 rounded-xl border-2 border-white"
                        type="text"
                        name="cropID"
                        value={cropID}
                        placeholder="Crop ID"
                        onChange={(e) => setCropID(e.target.value)}
                    />
                    <label className="text-white">Plantation Date</label>
                    <input
                        className="w-full h-10 px-4 rounded-xl border-2 border-white"
                        type="date"
                        name="plantDate"
                        value={plantDate}
                        placeholder="Plant Date"
                        onChange={(e) => setPlantDate(e.target.value)}
                    />
                    <label className="text-white">Harvest Date</label>
                    <input
                        className="w-full h-10 px-4 rounded-xl border-2 border-white"
                        type="date"
                        name="harvestDate"
                        placeholder="Harvest Date"
                        value={harvestDate}
                        onChange={(e) => setHarvestDate(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
}

function SenderInformation({ onSubmit }) {
    const [accountName, setAccountName] = useState("");
    const [accountID, setAccountID] = useState("");
    const [totalPrice, setTotalPrice] = useState("");
    const [date, setDate] = useState("");

    const submitForm = () => {
        // You can perform any necessary actions with the form data here
        // For now, let's just log the data to the console
        console.log({
            accountName,
            accountID,
            totalPrice,
            date,
        });

        // Call the provided onSubmit function
        if (onSubmit) {
            onSubmit({
                accountName,
                accountID,
                totalPrice,
                date,
            });
        }
    };

    return (
        <div className="my-12 mx-10 bg-blue-800 rounded-3xl shadow-2xl p-4">
            <div className="flex items-end justify-between h-[60px]">
                <h2 className="text-3xl font-bold  px-6 py-3  rounded-md">
                    Create Invoice
                </h2>
                <button
                    className="bg-blue-600 text-white text-xl px-4 py-2 rounded-lg"
                    onClick={submitForm}
                >
                    Finish
                </button>
            </div>
            <hr className="my-4 h-1 bg-white" />
            {/* Assuming Progress2 is a component you've imported */}
            <Progress2 level={3} />
            <form method="post" className="grid grid-cols-1 gap-4 mt-2">
                <div className="p-4 grid grid-cols-1 gap-4">
                    <h2 className="mx-4 mt-2 text-3xl font-bold text-black">
                        Sender Information
                    </h2>
                    <label className="text-white">Name</label>
                    <input
                        className="w-full h-10 px-4 rounded-xl border-2 border-white"
                        type="text"
                        value={accountName}
                        name="AccountName"
                        placeholder="Account Name"
                        onChange={(e) => setAccountName(e.target.value)}
                    />
                    <label className="text-white">Account ID</label>
                    <input
                        className="w-full h-10 px-4 rounded-xl border-2 border-white"
                        type="number"
                        value={accountID}
                        name="AccountID"
                        placeholder="Account ID"
                        onChange={(e) => setAccountID(e.target.value)}
                    />

                    <label className="text-white">Total Price</label>
                    <input
                        className="w-full h-10 px-4 rounded-xl border-2 border-white"
                        type="text"
                        value={totalPrice}
                        name="TotalPrice"
                        placeholder="$$$$"
                        onChange={(e) => setTotalPrice(e.target.value)}
                    />
                    <label className="text-white">Date</label>
                    <input
                        className="w-full h-10 px-4 rounded-xl border-2 border-white"
                        type="date"
                        value={date}
                        name="Date"
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
}

// function InvoiceDetail({ nextForm }) {
//     const [descriptions, setDescriptions] = useState([]);
//     const [prices, setPrices] = useState([]);

//     const handleInputChange = (index, field, value) => {
//         if (field === 'description') {
//             const newDescriptions = [...descriptions];
//             newDescriptions[index] = value;
//             setDescriptions(newDescriptions);
//         } else if (field === 'price') {
//             const newPrices = [...prices];
//             newPrices[index] = value;
//             setPrices(newPrices);
//         }
//     };

//     return (
//         <div className="my-12 mx-10 bg-blue-800 rounded-3xl shadow-2xl p-4">
//             <div className="flex items-end justify-between h-[60px]">
//                 <h2 className="text-3xl font-bold px-6 py-3 rounded-md">Create Invoice</h2>
//                 <button
//                     className="bg-blue-600 text-white text-xl px-4 py-2 rounded-lg"
//                     onClick={nextForm}
//                 >
//                     Next
//                 </button>
//             </div> <hr className="my-4 h-1 bg-white" />
//             <Progress2 level={2} />
//             <form method="post" className="grid grid-cols-1 gap-4 mt-2">
//                 <div className="p-4 flex flex-col space-y-4">
//                     <h2 className="mx-4 mt-2 text-3xl font-bold text-black">
//                         Input Invoice Detail
//                     </h2>
//                     <div className="flex felx-row items-center justify-around">
//                         <b>
//                             <h3 className="text-xl text-zinc-300">Description</h3>
//                         </b>
//                         <b>
//                             <h3 className="text-xl text-zinc-300">Price</h3>
//                         </b>
//                     </div>
//                     <div className="bg-blue-800 w-[1100px] ml-20">
//                         {[0, 1, 2, 3].map((index) => (
//                             <div key={index} className="flex felx-row items-center justify-center space-y-0">
//                                 <input
//                                     className={`w-40 border-2 border-black ${index === 0 && 'rounded-tl-xl'} ${index === 3 && 'rounded-bl-xl'}`}
//                                     type="text"
//                                     value={descriptions[index] || ''}
//                                     onChange={(e) => handleInputChange(index, 'description', e.target.value)}
//                                 />
//                                 <input
//                                     className="w-[750px] border-2 border-black"
//                                     type="text"
//                                     value={prices[index] || ''}
//                                     onChange={(e) => handleInputChange(index, 'price', e.target.value)}
//                                 />
//                                 <input
//                                     className={`w-40 border-2 border-black ${index === 0 && 'rounded-tr-xl'} ${index === 3 && 'rounded-br-xl'}`}
//                                     type="number"
//                                     value={prices[index] || ''}
//                                     onChange={(e) => handleInputChange(index, 'price', e.target.value)}
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// }
