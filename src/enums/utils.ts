export function convertBadgeEnum2Normal(data: any) {
  const object: any = {}
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const element = data[key]
      object[key] = element.text
    }
  }
  return object
}

export function convertBadgeEnum2Options(data: any) {
  const object: any = []
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const element = data[key]
      object.push({
        label: element.text,
        value: Number(key),
      })
    }
  }
  return object
}
