export const AlertTimeOut = ()=> {
  // Hide alert
    const timer = setTimeout(() => {
        }, 10000);
      return () => clearTimeout(timer);
}