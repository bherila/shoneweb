import React from 'react'

export default function FormButton({ children, ...props }: any) {
  return (
    <div className="flex items-center justify-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
        {...props}
      >
        {children}
      </button>
    </div>
  )
}
