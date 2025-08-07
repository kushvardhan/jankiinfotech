"use client";

import { AlertCircle, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";

interface ValidationRule {
  test: (value: string) => boolean;
  message: string;
}

interface ValidationResult {
  isValid: boolean;
  message: string;
  type: "success" | "error" | "warning";
}

export const useFormValidation = () => {
  const [validationResults, setValidationResults] = useState<
    Record<string, ValidationResult>
  >({});
  const [showMessages, setShowMessages] = useState<Record<string, boolean>>({});
  const [validationTimeouts, setValidationTimeouts] = useState<
    Record<string, NodeJS.Timeout>
  >({});

  const validateField = (
    fieldName: string,
    value: string,
    rules: ValidationRule[]
  ): ValidationResult => {
    for (const rule of rules) {
      if (!rule.test(value)) {
        return {
          isValid: false,
          message: rule.message,
          type: "error",
        };
      }
    }
    return {
      isValid: true,
      message: "Valid",
      type: "success",
    };
  };

  const handleFieldChange = (
    fieldName: string,
    value: string,
    rules: ValidationRule[]
  ) => {
    // Clear existing timeout for this field
    if (validationTimeouts[fieldName]) {
      clearTimeout(validationTimeouts[fieldName]);
    }

    // Hide any existing messages immediately when user starts typing
    setShowMessages((prev) => ({
      ...prev,
      [fieldName]: false,
    }));

    // Set a timeout to validate after user stops typing for 2 seconds
    const timeoutId = setTimeout(() => {
      const result = validateField(fieldName, value, rules);

      setValidationResults((prev) => ({
        ...prev,
        [fieldName]: result,
      }));

      // Only show error messages, not success messages (to reduce noise)
      if (!result.isValid) {
        setShowMessages((prev) => ({
          ...prev,
          [fieldName]: true,
        }));

        // Auto-hide error messages after 3 seconds
        setTimeout(() => {
          setShowMessages((prev) => ({
            ...prev,
            [fieldName]: false,
          }));
        }, 3000);
      }
    }, 2000); // Wait 2 seconds after user stops typing

    setValidationTimeouts((prev) => ({
      ...prev,
      [fieldName]: timeoutId,
    }));
  };

  const getFieldValidation = (fieldName: string) => {
    return {
      result: validationResults[fieldName],
      showMessage: showMessages[fieldName],
    };
  };

  const isFormValid = () => {
    return Object.values(validationResults).every((result) => result.isValid);
  };

  return {
    handleFieldChange,
    getFieldValidation,
    isFormValid,
    validationResults,
  };
};

// Validation Rules
export const ValidationRules = {
  email: [
    {
      test: (value: string) => value.length > 0,
      message: "Email is required",
    },
    {
      test: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      message: "Please enter a valid email address",
    },
    {
      test: (value: string) => value.length <= 100,
      message: "Email must be less than 100 characters",
    },
    {
      test: (value: string) => !value.includes(".."),
      message: "Email cannot contain consecutive dots",
    },
    {
      test: (value: string) =>
        !/[<>()[\]\\,;:\s@"]/.test(value.split("@")[0] || ""),
      message: "Email contains invalid characters",
    },
  ],

  name: [
    {
      test: (value: string) => value.length > 0,
      message: "Name is required",
    },
    {
      test: (value: string) => value.length >= 2,
      message: "Name must be at least 2 characters",
    },
    {
      test: (value: string) => value.length <= 50,
      message: "Name must be less than 50 characters",
    },
    {
      test: (value: string) => /^[a-zA-Z\s]+$/.test(value),
      message: "Name can only contain letters and spaces",
    },
    {
      test: (value: string) => !/^\s|\s$/.test(value),
      message: "Name cannot start or end with spaces",
    },
  ],

  phone: [
    {
      test: (value: string) => value.length > 0,
      message: "Phone number is required",
    },
    {
      test: (value: string) => /^[+]?[\d\s\-()]+$/.test(value),
      message: "Please enter a valid phone number",
    },
    {
      test: (value: string) => {
        const digits = value.replace(/\D/g, "");
        return digits.length >= 10 && digits.length <= 15;
      },
      message: "Phone number must be 10-15 digits",
    },
  ],

  message: [
    {
      test: (value: string) => value.length > 0,
      message: "Message is required",
    },
    {
      test: (value: string) => value.length >= 10,
      message: "Message must be at least 10 characters",
    },
    {
      test: (value: string) => value.length <= 1000,
      message: "Message must be less than 1000 characters",
    },
    {
      test: (value: string) => !/[<>]/.test(value),
      message: "Message cannot contain < or > characters",
    },
  ],

  password: [
    {
      test: (value: string) => value.length > 0,
      message: "Password is required",
    },
    {
      test: (value: string) => value.length >= 8,
      message: "Password must be at least 8 characters",
    },
    {
      test: (value: string) => /[A-Z]/.test(value),
      message: "Password must contain at least one uppercase letter",
    },
    {
      test: (value: string) => /[a-z]/.test(value),
      message: "Password must contain at least one lowercase letter",
    },
    {
      test: (value: string) => /\d/.test(value),
      message: "Password must contain at least one number",
    },
    {
      test: (value: string) => /[!@#$%^&*(),.?":{}|<>]/.test(value),
      message: "Password must contain at least one special character",
    },
  ],
};

// Validation Message Component
interface ValidationMessageProps {
  result?: ValidationResult;
  show: boolean;
}

export const ValidationMessage: React.FC<ValidationMessageProps> = ({
  result,
  show,
}) => {
  if (!show || !result) return null;

  const Icon =
    result.type === "success"
      ? CheckCircle
      : result.type === "error"
      ? XCircle
      : AlertCircle;
  const colorClass =
    result.type === "success"
      ? "text-green-600"
      : result.type === "error"
      ? "text-red-600"
      : "text-yellow-600";
  const bgClass =
    result.type === "success"
      ? "bg-green-50 border-green-200"
      : result.type === "error"
      ? "bg-red-50 border-red-200"
      : "bg-yellow-50 border-yellow-200";

  return (
    <div
      className={`flex items-center mt-2 p-2 rounded-lg border ${bgClass} animate-in slide-in-from-top-1 duration-300`}
    >
      <Icon className={`h-4 w-4 mr-2 ${colorClass}`} />
      <span className={`text-sm font-medium ${colorClass}`}>
        {result.message}
      </span>
    </div>
  );
};

// Enhanced Input Component with Real-time Validation
interface ValidatedInputProps {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  validationRules: ValidationRule[];
  placeholder?: string;
  required?: boolean;
  className?: string;
}

export const ValidatedInput: React.FC<ValidatedInputProps> = ({
  label,
  type,
  value,
  onChange,
  validationRules,
  placeholder,
  required = false,
  className = "",
}) => {
  const { handleFieldChange, getFieldValidation } = useFormValidation();
  const fieldName = label.toLowerCase().replace(/\s+/g, "_");
  const { result, showMessage } = getFieldValidation(fieldName);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newValue = e.target.value;
    onChange(newValue);
    handleFieldChange(fieldName, newValue, validationRules);
  };

  const inputClass = `w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
    result?.isValid === false
      ? "border-red-300 focus:ring-red-500 focus:border-red-500"
      : result?.isValid === true
      ? "border-green-300 focus:ring-green-500 focus:border-green-500"
      : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
  } ${className}`;

  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={inputClass}
          rows={4}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={inputClass}
        />
      )}
      <ValidationMessage result={result} show={showMessage} />
    </div>
  );
};
