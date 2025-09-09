// This function sends a custom event to Google Analytics.
// It's safe to call even if GA isn't fully loaded or is blocked.
export const sendGAEvent = (eventName: string, eventParams: { [key: string]: string | number }) => {
  // Check if the 'gtag' function exists on the window object.
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, eventParams)
  } else {
    console.warn("Google Analytics gtag function not found.")
  }
}

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void
  }
}
