import { useStatePersistence } from '@/hooks'

export const userToken = useStatePersistence<any>('user-token', {
  defaultValue: '',
  serializer: (val) => val,
  deserializer: (val) => val,
})

export const userInfo = useStatePersistence<any>('user-info', {
  defaultValue: {},
})

export const userRoleInfo = useStatePersistence<any>('user-role-info', {
  defaultValue: {},
})

export const userPowerList = useStatePersistence<any>('user-power-list', {
  defaultValue: [],
})

export const userIsGuest = useStatePersistence<any>('user-is-guest', {
  defaultValue: false,
})

export default {
  userToken,
  userInfo,
  userRoleInfo,
  userPowerList,
  userIsGuest,
}
