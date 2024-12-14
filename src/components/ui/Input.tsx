interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, className, ...props }) => {
  return (
    <div className="relative">
      {label && (
        <label className="block text-sm text-gray-400 mb-2">{label}</label>
      )}
      <input
        className={`w-full bg-black/50 border border-white/10 rounded-lg px-6 py-4 text-white 
          placeholder:text-gray-400 focus:outline-none focus:border-highlight/50 
          focus:bg-black/90 transition-all ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;