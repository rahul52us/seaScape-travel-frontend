import * as yup from 'yup'

 const validation = yup.object({
  image : yup.mixed(),
  country : yup.string(),
  name : yup.string().min(2,'name should be atleast of 2 character').max(80,'name should not be greater than 80 character').trim().required('name is required').typeError('name is required'),
  slug: yup.string().trim().required('slug is required (e.g. meghalaya)').typeError('slug is required'),
  title: yup.string(),
  months: yup.string(),
  nights: yup.string(),
  seatsLeft: yup.number(),
  cardHighlights: yup.string(),
  description : yup.string().max(1800,'description should not greater than 1800 characters').trim().typeError('description is required'),
 })

export default validation;
