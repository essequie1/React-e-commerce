export function getETA() {
  const ETA = new Date();
  ETA.setDate(ETA.getDate() + 7);
  const day = ETA.getDay();
  if (day === 0) {
    ETA.setDate(ETA.getDate() - 2);
  } else if (day === 6) {
    ETA.setDate(ETA.getDate() - 1);
  }
  return ETA;
}
