import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../useTheme';

function ToggleSwitch() {
  const { theme, toggleTheme } = useTheme(); // ✅ now using useTheme

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={toggleTheme}
        className="hidden md:flex  p-2 rounded-full bg-gray-300 dark:bg-gray-700 text-black dark:text-white"
      >
        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </div>
  );
}

export default ToggleSwitch;
