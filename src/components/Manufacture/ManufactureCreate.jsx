import React, { useState } from "react";
import { Progress } from "../Comp/Progress";

//////////////////////////////BACKEND ONLY//////////////////////////////

const nextForm = () => {};
const prevForm = () => {};

//////////////////////////////FRONTEND ONLY//////////////////////////////

export default function ManufactureCreate() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextForm = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevForm = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="m-16 min-h-full">
      {currentStep === 1 && <ManufacturingInformation nextForm={nextForm} />}
      {currentStep === 2 && (
        <ProductInformation nextForm={nextForm} prevForm={prevForm} />
      )}
      {currentStep === 3 && <Quantity nextForm={nextForm} prevForm={prevForm} />}
      {currentStep === 4 && (
        <InspectionReport nextForm={nextForm} prevForm={prevForm} />
      )}
    </div>
  );
}

// Separate function for Manufacturing Information section
function ManufacturingInformation({ nextForm }) {
  return (
    <div className="my-12 mx-10 bg-blue-800 rounded-3xl shadow-2xl p-4">
      <div className="flex items-end justify-between h-[60px]">
        <h2 className="text-3xl font-bold  px-6 py-3  rounded-md">
          Manufacturing
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
            Manufacturing Information:
          </h2>
          <label className="text-white">Product Name</label>
          <input
            className="w-full h-10 px-4 rounded-xl border-2 border-white"
            type="text"
            name="ProductName"
            placeholder="Product Name"
          />

          <label className="text-white">Product Type</label>
          <input
            className="w-full h-10 px-4 rounded-xl border-2 border-white"
            type="text"
            name="ProductType"
            placeholder="Product Type"
          />

          <label className="text-white">Production Quantity</label>
          <input
            className="w-full h-10 px-4 rounded-xl border-2 border-white"
            type="text"
            name="ProductionQuantity"
            placeholder="Production Quantity"
          />

          <label className="text-white">Production Date</label>
          <input
            className="w-full h-10 px-4 rounded-xl border-2 border-white"
            type="text"
            name="ProductionDate"
            placeholder="Production Date"
          />

          <label className="text-white">Raw Material Cost</label>
          <input
            className="w-full h-10 px-4 rounded-xl border-2 border-white"
            type="text"
            name="RawMaterialCost"
            placeholder="Raw Material Cost"
          />
        </div>
      </form>
    </div>
  );
}

// Separate function for Product Information section
function ProductInformation({ nextForm, prevForm }) {
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
          Manufacturing
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
            Product Information
          </h2>
          <label className="text-white">Product Weight</label>
          <input
            className="w-full h-10 px-4 rounded-xl border-2 border-white"
            type="text"
            name="ProductWeight"
            placeholder="Product Weight"
          />
          <label className="text-white">Product Dimensions</label>
          <input
            className="w-full h-10 px-4 rounded-xl border-2 border-white"
            type="text"
            name="ProductDimensions"
            placeholder="Product Dimensions"
          />
          <label className="text-white">Product Material</label>
          <input
            className="w-full h-10 px-4 rounded-xl border-2 border-white"
            type="text"
            name="ProductMaterial"
            placeholder="Product Material"
          />
        </div>
      </form>
    </div>
  );
}

// Separate function for Quantity Information section
function Quantity({ nextForm, prevForm }) {
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
          Manufacturing
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
            Quantity Information
          </h2>
          <label className="text-white">Quantity</label>
          <input
            className="w-full h-10 px-4 rounded-xl border-2 border-white"
            type="number"
            name="Quantity"
            placeholder="Quantity"
          />
          <label className="text-white">Batch Number</label>
          <input
            className="w-full h-10 px-4 rounded-xl border-2 border-white"
            type="text"
            name="BatchNumber"
            placeholder="Batch Number"
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
          Manufacturing
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
