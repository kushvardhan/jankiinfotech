"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

interface Country {
  code: string;
  name: string;
  dialCode: string;
  flag: string;
  pattern: RegExp;
  placeholder: string;
}

const countries: Country[] = [
  {
    code: "IN",
    name: "India",
    dialCode: "+91",
    flag: "🇮🇳",
    pattern: /^[6-9]\d{9}$/,
    placeholder: "9876543210",
  },
  {
    code: "US",
    name: "United States",
    dialCode: "+1",
    flag: "🇺🇸",
    pattern: /^\d{10}$/,
    placeholder: "2345678901",
  },
  {
    code: "GB",
    name: "United Kingdom",
    dialCode: "+44",
    flag: "🇬🇧",
    pattern: /^[1-9]\d{8,9}$/,
    placeholder: "7911123456",
  },
  {
    code: "CA",
    name: "Canada",
    dialCode: "+1",
    flag: "🇨🇦",
    pattern: /^\d{10}$/,
    placeholder: "2345678901",
  },
  {
    code: "AU",
    name: "Australia",
    dialCode: "+61",
    flag: "🇦🇺",
    pattern: /^[2-9]\d{8}$/,
    placeholder: "412345678",
  },
  {
    code: "DE",
    name: "Germany",
    dialCode: "+49",
    flag: "🇩🇪",
    pattern: /^[1-9]\d{10,11}$/,
    placeholder: "15123456789",
  },
  {
    code: "FR",
    name: "France",
    dialCode: "+33",
    flag: "🇫🇷",
    pattern: /^[1-9]\d{8}$/,
    placeholder: "123456789",
  },
  {
    code: "JP",
    name: "Japan",
    dialCode: "+81",
    flag: "🇯🇵",
    pattern: /^[1-9]\d{9,10}$/,
    placeholder: "9012345678",
  },
  {
    code: "CN",
    name: "China",
    dialCode: "+86",
    flag: "🇨🇳",
    pattern: /^1[3-9]\d{9}$/,
    placeholder: "13812345678",
  },
  {
    code: "BR",
    name: "Brazil",
    dialCode: "+55",
    flag: "🇧🇷",
    pattern: /^[1-9]\d{10}$/,
    placeholder: "11987654321",
  },
  {
    code: "SG",
    name: "Singapore",
    dialCode: "+65",
    flag: "🇸🇬",
    pattern: /^[689]\d{7}$/,
    placeholder: "81234567",
  },
  {
    code: "AE",
    name: "UAE",
    dialCode: "+971",
    flag: "🇦🇪",
    pattern: /^[2-9]\d{7,8}$/,
    placeholder: "501234567",
  },
];

interface PhoneInputProps {
  value: string;
  onChange: (value: string, isValid: boolean) => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
  disabled?: boolean;
}

export default function PhoneInput({
  value,
  onChange,

  className = "",
  required = false,
  disabled = false,
}: PhoneInputProps) {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (value) {
      // Parse existing value to extract country and number
      const country = countries.find((c) => value.startsWith(c.dialCode));
      if (country) {
        setSelectedCountry(country);
        setPhoneNumber(value.replace(country.dialCode, ""));
      }
    }
  }, [value]);

  const validatePhoneNumber = (number: string, country: Country) => {
    if (!number) {
      setError("");
      setIsValid(false);
      return false;
    }

    const cleanNumber = number.replace(/\D/g, "");
    const valid = country.pattern.test(cleanNumber);

    if (!valid) {
      setError(`Invalid ${country.name} phone number format`);
      setIsValid(false);
      return false;
    }

    setError("");
    setIsValid(true);
    return true;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const number = e.target.value.replace(/\D/g, "");
    setPhoneNumber(number);

    const valid = validatePhoneNumber(number, selectedCountry);
    const fullNumber = number ? `${selectedCountry.dialCode}${number}` : "";

    onChange(fullNumber, valid);
  };

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);

    const valid = validatePhoneNumber(phoneNumber, country);
    const fullNumber = phoneNumber ? `${country.dialCode}${phoneNumber}` : "";

    onChange(fullNumber, valid);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="flex">
        {/* Country Selector */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            disabled={disabled}
            className="flex items-center px-3 py-3 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="text-lg mr-2">{selectedCountry.flag}</span>
            <span className="text-sm font-medium text-gray-700 mr-1">
              {selectedCountry.dialCode}
            </span>
            <ChevronDown
              className={`h-4 w-4 text-gray-500 transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
              {countries.map((country) => (
                <button
                  key={country.code}
                  type="button"
                  onClick={() => handleCountrySelect(country)}
                  className="w-full flex items-center px-4 py-3 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none text-left"
                >
                  <span className="text-lg mr-3">{country.flag}</span>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">
                      {country.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {country.dialCode}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Phone Number Input */}
        <input
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneChange}
          placeholder={selectedCountry.placeholder}
          required={required}
          disabled={disabled}
          className={`flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed ${
            error ? "border-red-500 focus:ring-red-500" : ""
          } ${isValid && phoneNumber ? "border-green-500" : ""}`}
        />
      </div>

      {/* Validation Message */}
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}

      {isValid && phoneNumber && (
        <p className="mt-1 text-sm text-green-600">✓ Valid phone number</p>
      )}

      {/* Format Helper */}
      <p className="mt-1 text-xs text-gray-500">
        Format: {selectedCountry.dialCode} {selectedCountry.placeholder}
      </p>
    </div>
  );
}
