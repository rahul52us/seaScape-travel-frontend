export const generateInitialValues = (data: any = {}) => {
    return {
        ...data,
        cardHighlights: Array.isArray(data?.cardHighlights) ? data.cardHighlights.join(', ') : data?.cardHighlights || '',
      image: data?.image?.url
        ? { file: data.image }
        : { file: [] },
    };
};