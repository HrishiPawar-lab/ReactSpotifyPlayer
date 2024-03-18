export function millisecondsToMinutesAndSeconds(ms) {
    // Convert milliseconds to seconds
    const totalSeconds = Math.floor(ms / 1000);

    // Calculate minutes and seconds
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    // Format minutes and seconds with leading zeros if necessary
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    // Return formatted time
    return `${formattedMinutes}:${formattedSeconds}`;
}
