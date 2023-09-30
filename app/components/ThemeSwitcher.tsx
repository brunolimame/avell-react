"use client";
import { useTheme } from "next-themes";
import { use, useEffect, useState } from "react";

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);
    
    if (!mounted) return null;

    return (
        <div>
            <h1>Tema atual: {theme}</h1>
            <button onClick={() => setTheme('light')}>Light</button>
            <button onClick={() => setTheme('dark')}>Dark</button>
        </div>
    )
}

export default ThemeSwitcher;