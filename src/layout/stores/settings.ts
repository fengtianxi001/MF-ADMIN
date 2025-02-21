import { useStatePersistence } from '@/hooks'

export const AppTheme = useStatePersistence<'dark' | 'light'>('AppTheme', {
  defaultValue: 'dark',
})

export const AppWater = useStatePersistence<boolean>('AppWater', {
  defaultValue: false,
})

export const AppGray = useStatePersistence<boolean>('AppGray', {
  defaultValue: false,
})

export const AppWeak = useStatePersistence<boolean>('AppWeak', {
  defaultValue: false,
})

export const AppAnimate = useStatePersistence<
  'none' | 'slide' | 'flip' | 'zoom' | 'lightspeed'
>('AppAnimate', {
  defaultValue: 'none',
})
