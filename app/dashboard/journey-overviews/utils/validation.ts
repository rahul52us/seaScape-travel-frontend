import * as yup from 'yup';

const validation = yup.object({
  locationId: yup.string().required('Location is required').typeError('Location is required'),
  title: yup.string().required('Title is required').typeError('Title is required'),
  duration: yup.string().required('Duration is required'),
  price: yup.string().required('Price is required'),
  description: yup.string().required('Description is required'),
  galleryImages: yup.array().of(yup.mixed()),
  availableDates: yup.array().of(yup.string()),
  included: yup.array().of(yup.string()),
  notIncluded: yup.array().of(yup.string()),
  itinerary: yup.array().of(
    yup.object({
      day: yup.string().required('Day number/name is required'),
      title: yup.string().required('Title is required'),
      desc: yup.string().required('Description is required'),
    })
  ),
  whatToExpect: yup.array().of(
    yup.object({
      title: yup.string().required('Title is required'),
      desc: yup.string().required('Description is required'),
    })
  )
});

export default validation;
