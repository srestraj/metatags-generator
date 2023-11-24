export const imageToBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = (error) => {
      reject(error);
    };

    // Read the image file as a data URL (Base64)
    reader.readAsDataURL(file);
  });
}