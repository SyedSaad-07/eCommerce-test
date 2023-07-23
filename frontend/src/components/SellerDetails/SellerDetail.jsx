import React, { useState } from 'react'
import { useFormik } from 'formik'
import { BrandSchema } from '../../BrandSchema'
import axios from 'axios'

const SellerDetail = () => {
    const [flagBrand, setFlagBrand] = useState(false);
    const [flagStore, setFlagStore] = useState(false);
    const [flagProduct, setFlagProduct] = useState(false);

    const fromInitialValues = {
        b_name: '',
        website: '',
        storeName: '',
        address: '',
        p_name: '',
        cat: '',
        desp: '',
        price:''
      }
    
      const formik = useFormik({
        initialValues: fromInitialValues,
        validationSchema: BrandSchema,
        onSubmit: async (values, action) => {
         setFlagBrand(false);    
        },
      })

      const currOptions = [
        { name: 'Select' },
        { name: 'Clothing' },
        { name: 'Shoe Wear' },
        { name: 'HouseHold Items' },
        {name: 'Electronics'},
        {name: 'Sports'},
        {name: 'Baby Products'},
        {name: 'Industrial & Scientific'}
      ]

      const handleState = () => {
        setFlagBrand((prev) => !prev)
      }

  return (
    <div className="container text-center">

      <div class="container text-center" style={{ marginTop: '4rem' }}>
        <div className='row'>
        <div class="col">
          <button type="button" class="btn link-item" onClick={handleState}>
            Add Brand
          </button>
        </div>
        <div class="col">
          <button type="button" class="btn link-item">
            Add Store
          </button>
        </div>
        <div class="col">
          <button type="button" class="btn link-item">
            Add Product
          </button>
        </div>
        </div>
      </div>

      {
        flagBrand &&
        <>
      <div style={{ marginTop:"4rem" }}>
      <h1 className='mb-5'>Add Brand along with Store & Product</h1>
      <form onSubmit={formik.handleSubmit} className="container text-cente">
        <div className="row">
          <div className="mb-3 col">
            <label htmlFor="" className="form-label">
              Brand Name
            </label>
            <input
              className="form-control"
              type="text"
              name="b_name"
              onChange={formik.handleChange}
              value={formik.values.b_name}
            />
            <br />
            {formik.errors.b_name && formik.touched.b_name ? (
              <span style={{ color: 'red' }}>{formik.errors.b_name}</span>
            ) : null}
          </div>

          {/* <br /><br /> */}
          <div className="mb-3 col">
            <label htmlFor="" className="form-label">
              Brand Website
            </label>
            <input
              className="form-control"
              type="text"
              name="website"
              onChange={formik.handleChange}
              value={formik.values.website}
            />
            <br />
            {formik.errors.website && formik.touched.website ? (
              <span style={{ color: 'red' }}>{formik.errors.website}</span>
            ) : null}
          </div>
        </div>

        <div className="row">
        <div className="mb-3 col">
          <label htmlFor="" className="form-label">
            Store Name
          </label>
          <input
            type="text"
            className="form-control"
            name="storeName"
            onChange={formik.handleChange}
            value={formik.values.storeName}
          />
          <br />
          {formik.errors.storeName && formik.touched.storeName ? (
            <span style={{ color: 'red' }}>{formik.errors.storeName}</span>
          ) : null}
        </div>

        {/* <br /><br /> */}
        <div className="mb-3 col">
          <label htmlFor="" className="form-label">
            Store Address
          </label>
          <input
            type="text"
            className="form-control"
            name="address"
            onChange={formik.handleChange}
            value={formik.values.address}
          />
          <br />
          {formik.errors.address && formik.touched.address ? (
            <span style={{ color: 'red' }}>{formik.errors.address}</span>
          ) : null}
        </div>
        </div>

        {/* <br /><br /> */}

        <div className="row">
        <div className="mb-3 col">
          <label htmlFor="" className="form-label">
            Product name
          </label>
          <input
            type="text"
            className="form-control"
            name="p_name"
            onChange={formik.handleChange}
            value={formik.values.p_name}
          />
          <br />
          {formik.errors.p_name && formik.touched.p_name ? (
            <span style={{ color: 'red' }}>{formik.errors.p_name}</span>
          ) : null}
        </div>

        {/* <br /><br /> */}
        <div className="mb-3 col">
          <label htmlFor="" className="form-label">
            Select Category
          </label>
          <select
            type="text"
            className="form-control"
            name="cat"
            onChange={formik.handleChange}
            value={formik.values.cat}
          >
            {currOptions.map((option, index) => (
              <option key={index} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
          <br />
          {formik.errors.cat && formik.touched.cat ? (
            <span style={{ color: 'red' }}>{formik.errors.cat}</span>
          ) : null}
        </div>
        </div>

        {/* <br /><br /> */}

        <div className="row">
        <div className="mb-3 col">
          <label htmlFor="" className="form-label">
            Despcription
          </label>
          <input
            type="text"
            className="form-control"
            name="desp"
            onChange={formik.handleChange}
            value={formik.values.desp}
          />
          <br />
          {formik.errors.desp && formik.touched.desp ? (
            <span style={{ color: 'red' }}>{formik.errors.desp}</span>
          ) : null}
        </div>

        {/* <br /><br /> */}
        <div className="mb-3 col">
          <label htmlFor="" className="form-label">
            Price
          </label>
          <input
            type="text"
            className="form-control"
            name="price"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          <br />
          {formik.errors.price && formik.touched.price ? (
            <span style={{ color: 'red' }}>{formik.errors.price}</span>
          ) : null}
        </div>

        {/* <br /><br /> */}
        </div>

        {/* <br /><br /> */}
        <input type="submit" value="Submit" className="btn link-item" />
        {/* </div>     */}
      </form>
    
    </div>
    </>
}

      <table class="table table-striped" style={{ marginTop: '4rem' }}>
        <thead>
          <tr>
            <th scope="col">Brand</th>
            <th scope="col">Store</th>
            <th scope="col">Address</th>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Outfitters</th>
            <td>outfitters - Gulshan branch</td>
            <td>Near X- building</td>
            <td>Black round neck t-shirt</td>
            <td>8000</td>
          </tr>
          <tr>
            <th scope="row">Outfitters</th>
            <td>outfitters - Johar branch</td>
            <td>Near Y- building</td>
            <td>Trouser</td>
            <td>12000</td>
          </tr>
          <tr>
            <th scope="row">Nike</th>
            <td>Nike - Florida</td>
            <td>Near X- building</td>
            <td>Nike Airforce 1</td>
            <td>4000</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SellerDetail
