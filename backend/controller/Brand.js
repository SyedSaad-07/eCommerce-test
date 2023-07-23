const { User, Brand, Store, Product } = require('../models');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
const { where } = require('sequelize');
dotenv.config();

const createBrand = async (req, res) => {

    const token = req.token;
    const { b_name, website, storeName, address, p_name, cat, price, desp } = req.body;

    try {

        const bdata = await Brand.create({ name: b_name, website: website, status: "Active" });;
        await bdata.save();

        const brand = await Brand.findOne({ where: { name: b_name } });

        const sdata = await Store.create({ name: storeName, address: address, status: "Active", Brand_id: brand.id });
        await sdata.save();


        const data = jwt.verify(token, process.env.jwtSecret)

        await User.update({ user_type: "seller", Brand_id: brand.id }, {
            where: {
                email: data.email
            }
        });

        const udata = await User.findOne({ where: { email: data.email } });
        await udata.save();

        const storeData = await Store.findOne({ where: { name: storeName } })

        const pdata = await Product.create({ name: p_name, description: desp, category: cat, price: price, Store_id: storeData.id });
        await pdata.save();

        return res.status(201).json({
            "message": "Successfully Created Brand & store"
        })

    } catch (error) {
        return res.status(500).jsonp({
            "error": "Internal Server error",
        });
    }

}

const isBrandExist = async (req, res) => {

    const token = req.token;

    try {
        const data = jwt.verify(token, process.env.jwtSecret);

        const udata = await User.findOne({ where: { email: data.email } });
        await udata.save()

        if (!udata.Brand_id) {
            return res.status(200).json({
                "message": "User has no brand"
            })
        } else {
            return res.status(200).json({
                "message": "User has brands"
            })
        }

    } catch (error) {
        return res.status(500).json({
            "error": error
        })
    }


}

const changeActive = async (req, res) => {

    const token = req.token;

    try {

        const data = jwt.verify(token, process.env.jwtSecret)
        const udata = await User.findOne({ where: { email: data.email } });
        await udata.save();

        await Brand.update({ status: "inActive" }, {
            where: {
                id: udata.Brand_id
            }
        }
        )
        
        const bdata = await Brand.findOne({ where: {
            id: udata.Brand_id
        }})
        bdata.save();

        await Store.update({ status: "inActive"}, {
            where:{
                Brand_id: bdata.id
            }
        })

        return res.status(200).json({
            "message": "Brands & Store InActive successfully"
        })

    } catch (error) {
        return res.status(500).json({
            "error": error
        })
    }


}
module.exports = {
    createBrand,
    isBrandExist,
    changeActive
}