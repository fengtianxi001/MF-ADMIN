function useAvatar(name: string, size: number = 32) {
  //将字符串转换为16进制色号
  const stringColor = (string: string) => {
    let hash = 1315423911;
    let index = string.length;
    while (index >= 0) {
      const ch = string.charCodeAt(index);
      hash ^= (hash << 5) + ch + (hash >> 2);
      index--;
    }
    return '#' + (hash & 0x7fffffff).toString(16).slice(0, 6);
  };
  const backgroundColor = stringColor(name);
  const firstLetter = name.charAt(0).toUpperCase();
  const style = {
    width: `${size}px`,
    height: `${size}px`,
    lineHeight: `${size}px`,
    fontSize: `${size / 2}px`,
    backgroundColor,
  };
  return { style, firstLetter };
}

export default useAvatar;
