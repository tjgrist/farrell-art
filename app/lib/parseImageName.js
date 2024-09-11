export default function parseImageName(input) {
    if (input.includes("DSC")) return "";

    // Extract the filename from the path
    const filename = input.split('/').pop();
    
    // Remove leading digits
    const withoutDigits = filename.replace(/^\d+/, '');
    
    // Add space before capital letters, trim, and escape any existing quotes
    const parsed = withoutDigits.replace(/([A-Z])/g, ' $1').trim().replace(/"/g, '\\"');

    // Return the result wrapped in quotes
    return `"${parsed}"`;
  }