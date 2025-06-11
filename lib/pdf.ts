// Import necessary modules
import fs from 'fs';
import pdf from 'pdf-parse';
// Path to the PDF file
 // Make sure you have a PDF file named 'example.pdf' in the same directory
/**
 * Reads and parses a PDF file to extract its content and metadata.
 */
async function readPdf() {
    const pdfPath = './docs/policy.pdf';
    try {
        // Check if the file exists
        if (!fs.existsSync(pdfPath)) {
            console.log(`Error: The file "${pdfPath}" was not found.`);
            return;
        }
        // Read the PDF file into a buffer
        const dataBuffer = fs.readFileSync(pdfPath);

        // Parse the PDF buffer
        const data = await pdf(dataBuffer);
        return data.text;

    } catch (error) {
        console.error('An error occurred while parsing the PDF:', error);
    }
}

export default readPdf;