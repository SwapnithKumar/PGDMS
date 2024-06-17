// services/bookService.js
const GOOGLE_BOOKS_API_URL = 'https://www.googleapis.com/books/v1/volumes';

const searchBooks = async (query) => {
  try {
    const response = await fetch(`${GOOGLE_BOOKS_API_URL}?q=${encodeURIComponent(query)}&key=AIzaSyCRCnpjqgY_Rs_1mN-rnwSiBDS42OIgHcc`);
    const data = await response.json();

    if (data.items) {
      return data.items.map((item) => ({
        id: item.id,
        title: item.volumeInfo.title,
        author: item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Unknown Author',
        pdfUrl: item.accessInfo?.pdf?.downloadLink || item.volumeInfo.previewLink || '', // Use preview link if download link is not available
      }));
    } else {
      return [];
    }
  } catch (error) {
    console.error('Error searching books:', error);
    return [];
  }
};

export { searchBooks };

//AIzaSyCRCnpjqgY_Rs_1mN-rnwSiBDS42OIgHcc