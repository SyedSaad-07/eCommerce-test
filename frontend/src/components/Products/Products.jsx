import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import products2 from '../../productData2'
import axios from 'axios'

import { AppWrap, MotionWrap } from '../../wrapper'
import './Products.css'

const Products = () => {
  const [items, setItem] = useState([])
  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })

  // const [brand, setBrand] = useState([])
  // const [store, setStore] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(`http://localhost:5000/api/mainData`)
        // console.log(response.data.productData)
        // const data = await response.json();
        setItem(response.data.productData)
        // setBrand(response.data.brand)
        // setStore(response.data.storeData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData() // Call the function to fetch data
    // Clean-up function (optional)
    return () => {
      // You can perform any clean-up here if needed
    };
  }, [])

  const handleWorkFilter = (item) => {
    setActiveFilter(item)
    setAnimateCard([{ y: 50, opacity: 0 }])

    setTimeout(() => {
      setAnimateCard([{ y: 10, opacity: 1 }])

      // const filteredProducts = products.filter((currElem) => {
      //   return currElem.category === item
      // })
      const filteredProducts = items.map((product, index) => (
        product.filter((currElem) => {
          return currElem.category === item
        })
      ))

      // setItem(filteredProducts);
      if (item === 'All') {
        setItem(items)
        // setFilterWork(works);
      } else {
        setItem(filteredProducts)
        // setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500)
  }

  return (
    <>
      <h2 className="head-text">
        The EXOTIC <span>Products</span> Section
      </h2>

      <div className="app__work-filter" id="Products">
        {[
          'Clothing',
          'Shoe wear',
          'HouseHold items',
          'Electronics',
          'Sports',
          'Baby Products',
          'Industrial & Scientific',
          'All',
        ].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? 'item-active' : ''
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {items.map((product, index) =>
          product.map((prod, index) => (
            <div className="app__work-item app__flex" key={index}>
              <div className="app__work-img app__flex">
                {/* <img src={prod.image} alt={prod.name} /> */}
                <img src={products2[index].image} alt={prod.name} />
              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text">{prod.name}</h4>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {prod.description}
                </p>

                <div className="app__work-tag app__flex">
                  <p className="p-text">Price: {prod.price}</p>
                </div>
              </div>
            </div>
          )),
        )}
      </motion.div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Products, 'app__works'),
  'work',
  'app__primarybg',
)
