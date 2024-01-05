const formatIdToTitle = (inputString: string): string => {
  const sanitizedString = inputString.replace(/[^a-zA-Z0-9]+/g, '-');
  const formatted = sanitizedString.replace(/^-+|-+$/g, '');

  return formatted.toLowerCase();
};

export default formatIdToTitle;