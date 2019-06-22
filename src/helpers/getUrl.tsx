export default function getUrl (data: any) {
  const baseUrl = 'http://foxer360-media-library.s3.eu-central-1.amazonaws.com/';

  if (data && data.filename) {
    return baseUrl + data.category + data.hash + '_' + data.filename;
  }
  return null;
}