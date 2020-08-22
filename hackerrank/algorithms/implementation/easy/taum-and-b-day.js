// SCORE: 25/25
function taumBday(b, w, bc, wc, z) {
  if (bc > wc + z) {
    bc = wc + z
  }

  if (wc > bc + z) {
    wc = bc + z
  }

  return BigInt(b) * BigInt(bc) + BigInt(w) * BigInt(wc)
}
