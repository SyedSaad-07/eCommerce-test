import * as Yup from 'yup';

export const BrandSchema = Yup.object({
    b_name: Yup.string().required("Brand name is Required"),
    website:Yup.string(),
    storeName: Yup.string().required("Store name is Required"),
    address:Yup.string().required('CNIC Number Is Required'),
    p_name:Yup.string().required('Product name is required'),
    cat: Yup.string().required("Category is Required"),
    desp: Yup.string().required("Description is Required"),
    price:Yup.number().min(0,'Amount Should not be in negative').required(),
})