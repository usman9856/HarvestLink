import React, { useState } from "react";
import { Progress } from "../Comp/Progress";

//////////////////////////////BACKEND ONLY//////////////////////////////

const nextForm = () => {};
const prevForm = () => {};

//////////////////////////////FRONTEND ONLY//////////////////////////////

export default function AdminCreate() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextForm = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevForm = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="m-16 min-h-full">
      {currentStep === 1 && <PersonalInformation nextForm={nextForm} />}
      {currentStep === 2 && (
        <ContactInformation nextForm={nextForm} prevForm={prevForm} />
      )}
      {currentStep === 3 && <Role nextForm={nextForm} prevForm={prevForm} />}
      {currentStep === 4 && (
        <SetupWallet nextForm={nextForm} prevForm={prevForm} />
      )}
    </div>
  );
}

// Separate function for Manufacturing Information section


function PersonalInformation({ nextForm }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [cnic, setCnic] = useState("");
  const [legalPaper, setLegalPaper] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleDateOfBirthChange = (e) => {
    setDateOfBirth(e.target.value);
  };

  const handleCnicChange = (e) => {
    setCnic(e.target.value);
  };

  const handleLegalPaperChange = (e) => {
    setLegalPaper(e.target.value);
  };

  return (
    <div className="my-12 mx-10 bg-blue-800 rounded-3xl shadow-2xl p-4">
      <div className="flex items-end justify-between h-[60px]">
        <h2 className="text-3xl font-bold  px-6 py-3  rounded-md">
          Personal Information
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
            Personal Information:
          </h2>
          <label className="text-white">First Name</label>
          <input
            className="w-full h-10 px-4 rounded-xl border-2 border-white"
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
            placeholder="First Name"
          />

          <label className="text-white">Last Name</label>
          <input
            className="w-full h-10 px-4 rounded-xl border-2 border-white"
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            placeholder="Last Name"
          />

          <label className="text-white">Address</label>
          <input
            className="w-full h-10 px-4 rounded-xl border-2 border-white"
            type="text"
            name="address"
            value={address}
            onChange={handleAddressChange}
            placeholder="Address"
          />

          <label className="text-white">City</label>
          <input
            className="w-full h-10 px-4 rounded-xl border-2 border-white"
            type="text"
            name="city"
            value={city}
            onChange={handleCityChange}
            placeholder="City"
          />

          <label className="text-white">Country</label>
          <input
            className="w-full h-10 px-4 rounded-xl border-2 border-white"
            type="text"
            name="country"
            value={country}
            onChange={handleCountryChange}
            placeholder="Country"
          />

          <label className="text-white">Date of Birth</label>
          <input
            className="w-full h-10 px-4 rounded-xl border-2 border-white"
            type="date"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={handleDateOfBirthChange}
            placeholder="Date of Birth"
          />

          <label className="text-white">CNIC</label>
          <input
            className="w-full h-10 px-4 rounded-xl border-2 border-white"
            type="text"
            name="cnic"
            value={cnic}
            onChange={handleCnicChange}
            placeholder="CNIC"
          />

          <label className="text-white">Legal Paper</label>
          <input
            className="w-full h-10 px-4 rounded-xl border-2 border-white"
            type="text"
            name="legalPaper"
            value={legalPaper}
            onChange={handleLegalPaperChange}
            placeholder="Legal Paper"
          />
        </div>
      </form>
    </div>
  );
}

// Separate function for Contact Information section
function ContactInformation({ nextForm, prevForm }) {
    const [email, setEmail] = useState("");
    const [primaryContact, setPrimaryContact] = useState("");
    const [secondaryContact, setSecondaryContact] = useState("");
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePrimaryContactChange = (e) => {
      setPrimaryContact(e.target.value);
    };
  
    const handleSecondaryContactChange = (e) => {
      setSecondaryContact(e.target.value);
    };
  
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
            Contact Information
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
              Contact Information
            </h2>
            <label className="text-white">Email</label>
            <input
              className="w-full h-10 px-4 rounded-xl border-2 border-white"
              type="text"
              name="Email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
  
            <label className="text-white">Primary Contact</label>
            <input
              className="w-full h-10 px-4 rounded-xl border-2 border-white"
              type="text"
              name="PrimaryContact"
              placeholder="Primary Contact"
              value={primaryContact}
              onChange={handlePrimaryContactChange}
            />
  
            <label className="text-white">Secondary Contact</label>
            <input
              className="w-full h-10 px-4 rounded-xl border-2 border-white"
              type="text"
              name="SecondaryContact"
              placeholder="Secondary Contact"
              value={secondaryContact}
              onChange={handleSecondaryContactChange}
            />
          </div>
        </form>
      </div>
    );
  }
  
// Separate function for Role Information section
// Separate function for Role Information section
function Role({ nextForm, prevForm }) {
    const [selectedRole, setSelectedRole] = useState("");
    const [roleDescription, setRoleDescription] = useState("");
  
    const handleRoleChange = (e) => {
      setSelectedRole(e.target.value);
    };
  
    const handleRoleDescriptionChange = (e) => {
      setRoleDescription(e.target.value);
    };
  
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
            Role Information
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
              Role Information
            </h2>
            <label className="text-white">Role</label>
            <select
              className="w-full h-10 px-4 rounded-xl border-2 border-white"
              name="Role"
              value={selectedRole}
              onChange={handleRoleChange}
            >
              <option value="">Select Role</option>
              <option value="farmer">Farmer</option>
              <option value="manufacturer">Manufacturer</option>
              <option value="driver">Driver</option>
              <option value="admin">Admin</option>
            </select>
  
            <label className="text-white">Role Description</label>
            <textarea
              className="w-full h-20 px-4 py-2 rounded-xl border-2 border-white"
              name="RoleDescription"
              value={roleDescription}
              onChange={handleRoleDescriptionChange}
              placeholder="Enter Role Description"
            ></textarea>
          </div>
        </form>
      </div>
    );
  }
  

// Separate function for Setup Wallet section
// Separate function for Setup Wallet section
// function SetupWallet({  }) {

//     return (
//       <div className="m-16 min-h-full">
//         {currentStep === 1 && <PersonalInformation nextForm={handleNextForm} />}
//         {currentStep === 2 && (
//           <ContactInformation nextForm={handleNextForm} prevForm={handlePrevForm} />
//         )}
//         {currentStep === 3 && <Role nextForm={handleNextForm} prevForm={handlePrevForm} />}
//         {currentStep === 4 && (
//           <SetupWallet nextForm={handleNextForm} prevForm={handlePrevForm} />
//         )}
//       </div>
//     );
// }

// Separate function for Setup Wallet section
function SetupWallet({ prevForm }) {
    const [walletName, setWalletName] = useState("");
    const [walletId, setWalletId] = useState("");
  
    const handleWalletNameChange = (e) => {
      setWalletName(e.target.value);
    };
  
    const handleWalletIdChange = (e) => {
      setWalletId(e.target.value);
    };
  
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
            Setup Wallet
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
              Wallet Information
            </h2>
            <label className="text-white">Wallet Name</label>
            <input
              className="w-full h-10 px-4 rounded-xl border-2 border-white"
              type="text"
              name="WalletName"
              placeholder="Wallet Name"
              value={walletName}
              onChange={handleWalletNameChange}
            />
  
            <label className="text-white">Wallet ID</label>
            <input
              className="w-full h-10 px-4 rounded-xl border-2 border-white"
              type="text"
              name="WalletId"
              placeholder="Wallet ID"
              value={walletId}
              onChange={handleWalletIdChange}
            />
          </div>
        </form>
      </div>
    );
}