// Returns an new object with key/value pairs
export function omit(obj, omitKeys) {
  const result = {}

  Object.keys(obj).forEach( key => {
    if(omitKeys.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  })

  return result;
};

export const keyCodes = {
  tab:    9,
  enter:  13,
  esc:    27,
  space:  32,
  end:    35,
  home:   36,
  up:     38,
  down:   40,
  n:      78,
  p:      80
};
