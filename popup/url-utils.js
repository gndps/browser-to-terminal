// url-utils.js

// Define a dictionary of root URLs and their associated function names
const rootUrlFunctions = {
    'google': modifyExampleComUrl,
    'yahoo': modifyAnotherSiteUrl,
    // Add more entries as needed for other websites
  };
  
  function modifyExampleComUrl(currentUrl) {
    // Implement URL modification logic for example.com
    // For demonstration, let's add a query parameter
    // return currentUrl + '?modifiedForExampleCom=true';
    return "https://www.apple.com"
  }
  
  function modifyAnotherSiteUrl(currentUrl) {
    // Implement URL modification logic for another-site.com
    // Modify the URL as needed
    return "https://samsung.com";
  }
  
  // Main function to modify the URL based on the root URL
  function modifyUrl(currentUrl) {
    const url = new URL(currentUrl);
    const rootUrl = url.hostname;
  
    // Check if the rootUrl contains any of the keys from rootUrlFunctions
    const matchingKey = Object.keys(rootUrlFunctions).find(key => rootUrl.includes(key));
  
    if (matchingKey) {
      // Call the associated function to modify the URL
      const modifiedUrl = rootUrlFunctions[matchingKey](currentUrl);
      return modifiedUrl;
    } else {
      // Default behavior: return the unmodified URL
      return currentUrl;
    }
  }  
  