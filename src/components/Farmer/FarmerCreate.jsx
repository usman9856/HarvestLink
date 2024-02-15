import React, { useState } from "react";
import { Progress } from "../Comp/Progress";

//////////////////////////////BACKEND ONLY//////////////////////////////

const nextForm = () => {};
const prevForm = () => {};

//////////////////////////////FRONTEND ONLY//////////////////////////////

export default function FarmerCreate() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextForm = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevForm = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="m-16 min-h-full">
      {currentStep === 1 && (
        <CropInformation nextForm={nextForm} />
      )}
      {currentStep === 2 && (
        <GeologicalInformation nextForm={nextForm} prevForm={prevForm} />
      )}
      {currentStep === 3 && (
        <FertilizerInformation nextForm={nextForm} prevForm={prevForm} />
      )}
      {currentStep === 4 && (
        <InspectionReport nextForm={nextForm} prevForm={prevForm} />
      )}
    </div>
  );
}

// Separate function for Crop Information section
function CropInformation({ nextForm }) {
  return (
    <div className="my-12 mx-10 bg-blue-800 rounded-3xl shadow-2xl p-4">
      <div className="flex items-end justify-between h-[60px]">
        <h2 className="text-3xl font-bold  px-6 py-3  rounded-md">
          Farmer Crop
        </h2>
        <button
          className="bg-blue-600 text-white text-xl px-4 py-2 rounded-lg"
          onClick={nextForm}
        >
          Next
        </button>
      </div>
      <hr className="my-4 h-1 bg-white" />
      <Progress level={1} />
      <form method="post" className="grid grid-cols-1 gap-4 mt-4">
        <div className="p-4 flex flex-col space-y-4">
          <h2 className="mx-4 mt-4 text-3xl font-bold text-black">
            Crop Information:
          </h2>
          <label className="text-white">Crop Name</label>
          <input
            className="w-full h-10 px-4 rounded-xl border-2 border-white"
            type="text"
            name="CropName"
            placeholder="Crop Name"
          />

          <label className="text-white">Crop Type</label>
          <input
            className="w-full h-10 px-4 rounded-xl border-2 border-white"
            type="text"
            name="CropType"
            placeholder="Crop Type"
          />

          <label className="text-white">Crop Quantity</label>
          <input
            className="w-full h-10 px-4 rounded-xl border-2 border-white"
            type="text"
            name="CropQuantity"
            placeholder="Crop Quantity"
          />

          <label className="text-white">Harvest Date</label>
          <input
            className="w-full h-10 px-4 rounded-xl border-2 border-white"
            type="text"
            name="HarvestDate"
            placeholder="Harvest Date"
          />

          <label className="text-white">Seed Price</label>
          <input
            className="w-full h-10 px-4 rounded-xl border-2 border-white"
            type="text"
            name="SeedPrice"
            placeholder="Seed Price"
          />
        </div>
      </form>
    </div>
  );
}
// Separate function for Geological Information section
function GeologicalInformation({ nextForm, prevForm }) {
  return (
    <div className="my-12 mx-10 bg-blue-800 rounded-3xl shadow-2xl p-4">
      <div className="flex items-end justify-between h-[60px]">
        <button
          className="bg-blue-600 text-white text-xl px-4 py-2 rounded-lg"
          onClick={prevForm}
        >
          Back
        </button>
        <h2 className="text-3xl font-bold  px-6 py-3  rounded-md">
          Farmer Crop
        </h2>
        <button
          className="bg-blue-600 text-white text-xl px-4 py-2 rounded-lg"
          onClick={nextForm}
        >
          Next
        </button>
      </div>
      <hr className="my-4 h-1 bg-white" />
      <Progress level={2} />
      <form action="" className="grid grid-cols-1 gap-4 mt-4">
        <div className="p-4 grid grid-cols-1 gap-4">
          <h2 className="mx-4 mt-4 text-3xl font-bold text-black">
            Geological Information
          </h2>
          <label className="text-white">Farm Name</label>
          <input
            className="w-full h-10 px-4 rounded-xl border-2 border-white"
            type="text"
            name="FarmName"
            placeholder="Farm Name"
          />
          <label className="text-white">Farm Size</label>
          <input
            className="w-full h-10 px-4 rounded-xl border-2 border-white"
            type="text"
            name="FarmSize"
            placeholder="Farm Size"
          />
          <label className="text-white">Climate Zone</label>
          <input
            className="w-full h-10 px-4 rounded-xl border-2 border-white"
            type="text"
            name="ClimateZone"
            placeholder="Climate Zone"
          />
          <label className="text-white">Address</label>
          <input
            className="w-full h-10 px-4 rounded-xl border-2 border-white"
            type="text"
            name="Address"
            placeholder="Address"
          />
        </div>
      </form>
    </div>
  );
}
// Separate function for Fertilizer Information section
function FertilizerInformation({ nextForm, prevForm }) {
  return (
    <div className="my-12 mx-10 bg-blue-800 rounded-3xl shadow-2xl p-4">
      <div className="flex items-end justify-between h-[60px]">
        <button
          className="bg-blue-600 text-white text-xl px-4 py-2 rounded-lg"
          onClick={prevForm}
        >
          Back
        </button>
        <h2 className="text-3xl font-bold  px-6 py-3  rounded-md">
          Farmer Crop
        </h2>
        <button
          className="bg-blue-600 text-white text-xl px-4 py-2 rounded-lg"
          onClick={nextForm}
        >
          Next
        </button>
      </div>
      <hr className="my-4 h-1 bg-white" />
      <Progress level={3} />
      <form method="post" className="grid grid-cols-1 gap-4 mt-4">
        <div className=" p-4 grid grid-cols-1 gap-4">
          <h2 className="mx-4 mt-4 text-3xl font-bold text-black">
            Fertilizer Information
          </h2>
          <label className="text-white">Fertilizer Name</label>
          <input
            className="w-full h-10 px-4 rounded-xl border-2 border-white"
            type="text"
            name="FertilizerName"
            placeholder="Fertilizer Name"
          />
          <label className="text-white">Quantity</label>
          <input
            className="w-full h-10 px-4 rounded-xl border-2 border-white"
            type="number"
            name="Quantity"
            placeholder="Quantity"
          />
          <label className="text-white">Fertilizer Price</label>
          <input
            className="w-full h-10 px-4 rounded-xl border-2 border-white"
            type="number"
            name="Price"
            placeholder="Fertilizer Price"
          />
          <label className="text-white">Pesticide Name</label>
          <input
            className="w-full h-10 px-4 rounded-xl border-2 border-white"
            type="text"
            name="PesticideName"
            placeholder="Pesticide Name"
          />
          <label className="text-white">Pesticide Price</label>
          <input
            className="w-full h-10 px-4 rounded-xl border-2 border-white"
            type="number"
            name="PesticidePrice"
            placeholder="Pesticide Price"
          />
        </div>
      </form>
    </div>
  );
}
// Separate function for Inspection Report section
function InspectionReport({ nextForm, prevForm }) {
  const submitForm = () => {};
  return (
    <div className="my-12 mx-10 bg-blue-800 rounded-3xl shadow-2xl p-4">
      <div className="flex items-end justify-between h-[60px]">
        <button
          className="bg-blue-600 text-white text-xl px-4 py-2 rounded-lg"
          onClick={prevForm}
        >
          Back
        </button>
        <h2 className="text-3xl font-bold  px-6 py-3  rounded-md">
          Farmer Crop
        </h2>
        <button
          className="bg-blue-600 text-white text-xl px-4 py-2 rounded-lg"
          onClick={submitForm}
        >
          Finish
        </button>
      </div>
      <hr className="my-4 h-1 bg-white" />
      <Progress level={4} />
      <form method="post" className="grid grid-cols-1 gap-4 mt-4">
        <div className="p-4 grid grid-cols-1 gap-4">
          <h2 className="mx-4 mt-4 text-3xl font-bold text-black">
            Inspection Report
          </h2>
          <label className="text-white">Inspection Id</label>
          <input
            className="w-full h-10 px-4 rounded-xl border-2 border-white"
            type="text"
            name="InspectionId"
            placeholder="Inspection Id"
          />

          <label className="text-white">Inspection Start Date</label>
          <input
            className="w-full h-10 px-4 rounded-xl border-2 border-white"
            type="date"
            name="InspectionStart"
            placeholder="Inspection Start Date"
          />

          <label className="text-white">Inspection End Date</label>
          <input
            className="w-full h-10 px-4 rounded-xl border-2 border-white"
            type="date"
            name="InspectionEnd"
            placeholder="Inspection End Date"
          />

          <label className="text-white">Inspector Name</label>
          <input
            className="w-full h-10 px-4 rounded-xl border-2 border-white"
            type="text"
            name="InspectorName"
            placeholder="Inspector Name"
          />

          <label className="text-white">Department</label>
          <input
            className="w-full h-10 px-4 rounded-xl border-2 border-white"
            type="text"
            name="Department"
            placeholder="Department"
          />
        </div>
      </form>
    </div>
  );
}
