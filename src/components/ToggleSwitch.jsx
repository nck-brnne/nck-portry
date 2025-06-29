import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../useTheme';

function ToggleSwitch({ className = 'hidden md:flex' }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`w-9 h-9 flex items-center justify-center rounded-full
        bg-black/10 dark:bg-white/30 text-black dark:text-white ${className}`}
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

export default ToggleSwitch;
