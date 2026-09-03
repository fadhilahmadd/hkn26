export function createSpring(tension = 170, friction = 26) {
  let v = 0;
  let val = 0;
  let target = 0;
  
  return {
    setTarget: (t: number) => { target = t; },
    setValue: (v_new: number) => { val = v_new; target = v_new; v = 0; },
    update: (dt: number) => {
      const step = Math.min(dt, 0.05);
      v += (-tension * (val - target) - friction * v) * step;
      val += v * step;
      return val;
    },
    get: () => val
  };
}
