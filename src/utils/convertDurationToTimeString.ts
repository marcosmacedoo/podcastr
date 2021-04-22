export function convertDurationToTimeString(duration: number): string {
  const TRES_MIL_SEISCENTOS_SEGUNDOS = 3600;
  const UM_MINUTO_EM_SEGUNDOS = 60;

  const hours = Math.floor(duration / TRES_MIL_SEISCENTOS_SEGUNDOS);
  const minutes = Math.floor(
    (duration % TRES_MIL_SEISCENTOS_SEGUNDOS) / UM_MINUTO_EM_SEGUNDOS
  );
  const seconds = duration % UM_MINUTO_EM_SEGUNDOS;

  const timeString = [hours, minutes, seconds]
    .map((unit) => String(unit).padStart(2, "0"))
    .join(":");

  return timeString;
}
