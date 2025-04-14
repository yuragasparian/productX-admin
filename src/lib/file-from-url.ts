async function fileFromUrl(url: string | undefined, filename: string): Promise<File | null> {
    if (!url) return null
    const response = await fetch(url);
    const blob = await response.blob();
    const contentType = blob.type || 'image/jpeg';

    return new File([blob], filename, { type: contentType });
}
export default fileFromUrl
