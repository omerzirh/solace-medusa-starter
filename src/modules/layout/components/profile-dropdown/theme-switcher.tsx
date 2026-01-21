import { Button } from '@modules/common/components/button'
import { MoonIcon, SunIcon } from '@modules/common/icons'
import { useTheme } from 'next-themes'

export function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme()

  return (
    <Button
      variant="text"
      onClick={() => {
        setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
      }}
      className="w-full justify-start rounded-none p-0 hover:bg-hover"
    >
      <div className="flex items-center gap-4 p-4 text-lg">
        {resolvedTheme === 'light' ? (
          <>
            <MoonIcon /> Switch to dark mode
          </>
        ) : (
          <>
            <SunIcon /> Switch to light mode
          </>
        )}
      </div>
    </Button>
  )
}
