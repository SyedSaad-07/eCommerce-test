const { User, Brand, Store, Product } = require('../models');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
const { where } = require('sequelize');
dotenv.config();

const createStore = async(req, res) => {

    const {b_name, storeName, address, p_name, cat, price, desp} = req.body;

    try {
        
        const brand = await Brand.findOne({ where: { name: b_name } });
        // await brand.save();
        if(!brand){
            return res.status(201).json({
                "message": "There is no such brand"
            })
        }

        const sdata = await Store.create({ name: storeName, address: address, status: "Active", Brand_id: brand.id });
        await sdata.save();

        const storeData = await Store.findOne({where: {name: storeName}})
        // await storeName.save();

        const pdata = await Product.create({name: p_name, description: desp, category: cat, price: price, Store_id: storeData.id});
        await pdata.save();

        return res.status(201).json({
            "message": "Successfully Created Store & products"
        })

    } catch (error) {
        return res.status(500).json({
            "error": error
        })
    }
}

const changeActive = async (req, res) => {

    const token = req.token;
    const {s_id} = req.body;

    try {
        await Store.update({ status: "inActive"}, {
            where:{
                id: s_id
            }
        })

        return res.status(200).json({
            "message": "Store InActive successfully"
        })

    } catch (error) {
        return res.status(500).json({
            "error": error
        })
    }


}

module.exports = {
    createStore,
    changeActive
}