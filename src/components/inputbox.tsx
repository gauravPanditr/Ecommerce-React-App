import React from 'react';

interface InputBoxProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
 // Adjust according to your typings
  error?: string;
}

const InputBox: React.FC<InputBoxProps> = ({ id, label, type, placeholder, register, error }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(id)}
        className={`mt-1 block w-full border rounded-md p-2 ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default InputBox;
