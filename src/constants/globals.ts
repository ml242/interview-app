export const ImageSource = 'http://static.ui.com/fingerprint/ui/icons/';

export const API_URL = "https://static.ui.com/fingerprint/ui/public.json";

export const replaceParam = (key: string, params: URLSearchParams) => {
    const searchParams = Object.fromEntries(params.entries());

    if (key in searchParams) {
        delete searchParams[key];
        return searchParams;
    }
    return searchParams;
}