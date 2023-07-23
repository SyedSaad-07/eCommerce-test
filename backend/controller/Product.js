const { User, Brand, Store, Product } = require('../models');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
const { where } = require('sequelize');
dotenv.config();

const createProduct = async(req, res) => {
    const {storeName, address, p_name, cat, price, desp} = req.body;

    try {
        const storeData = await Store.findOne({where: {name: storeName, address: address}})
        // await storeName.save();

        if (!storeData) {
            return res.status(201).json({
                "message": "There is no such store"
            })
        }

        const pdata = await Product.create({name: p_name, description: desp, category: cat, price: price, Store_id: storeData.id});
        await pdata.save();

        return res.status(201).json({
            "message": "Successfully Created Product"
        })

    } catch (error) {
        return res.status(500).json({
            "error": error
        })
    }
}

const updateProduct = async(req, res) => {
    // const {p_id, storeName, address, p_name, cat, price, desp} = req.body;
    const {p_id, price} = req.body;

    try {
        
        // const storeData = await Store.findOne({where: {name: storeName, address: address}});
        // await storeName.save();

        // if (!storeData) {
        //     return res.status(201).json({
        //         "message": "There is no such store"
        //     })
        // }

        await Product.update({price: price}, {
            where:{
                id: p_id
            }
        })

        const pdata = await Product.findOne({where: {id: p_id}});
        await pdata.save();

        return res.status(201).json({
            "message": "Successfully Product Updated"
        })


    } catch (error) {
        return res.status(500).json({
            "error": error
        })
    }
}

module.exports = {
    createProduct,
    updateProduct
}