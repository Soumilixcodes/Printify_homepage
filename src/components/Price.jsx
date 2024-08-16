import React from 'react';
import ThemeToggle from './ThemeToggle';
const Price = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#0F172A] text-white flex items-center justify-center">
      <div className="max-w-4xl w-full p-4 bg-gray-500 dark:bg-[#1E293B] rounded-lg">
    
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>
        <h2 className="text-2xl  mb-4 text-[#A5B4FC]  font-bold">API Pricing</h2>
        <p className="mb-6 text-lg text-white">
          Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:
        </p>
        <table className="w-full table-auto border-separate border-spacing-y-2 rounded-md">
          <thead>
            <tr className=" text-left bg-[#6366F1]  ">
              <th className="py-3 px-4 ">API</th>
              <th className="py-3 px-4">MODEL</th>
              <th className="py-3 px-4">PRICE PER 1K TOKENS</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-[#27293d]  hover:bg-[#3b3e57]">
              <td className="py-2 px-4  ">OpenAI</td>
              <td className="py-2 px-4">GPT-3.5</td>
              <td className="py-2 px-4">$0.002</td>
            </tr>
            <tr className="bg-[#27293d]  hover:bg-[#3b3e57]">
              <td className="py-2 px-4">OpenAI</td>
              <td className="py-2 px-4">GPT-4</td>
              <td className="py-2 px-4">$0.03</td>
            </tr>
            <tr className="bg-[#27293d]  hover:bg-[#3b3e57]">
              <td className="py-2 px-4">Together AI</td>
              <td className="py-2 px-4">Llama-2-70b</td>
              <td className="py-2 px-4">$0.0008</td>
            </tr>
            <tr className="bg-[#27293d]  hover:bg-[#3b3e57]">
              <td className="py-2 px-4">Together AI</td>
              <td className="py-2 px-4">Llama-2-13b</td>
              <td className="py-2 px-4">$0.0006</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-6">
          <h3 className="text-xl font-medium text-[#A5B4FC] font-semibold">Token Estimation</h3>
          <p className="mt-2">
            On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-medium text-[#A5B4FC] font-semibold">Billing</h3>
          <p className="mt-2">
          You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Price;