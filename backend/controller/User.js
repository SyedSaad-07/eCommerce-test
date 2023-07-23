const { User, Brand, Store, Product } = require('../models');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config()

const SignUp = async (req, res) => {

    const { email, pass, name } = req.body;

    try {
        const user = await User.findOne({ where: { email: email } });
        if (user) {
            return res.status(400).json({
                "message": "Email is already there, no need to register again."
            });

        } else {
            const salt = await bcrypt.genSalt(10);
            bcrypt.hash(pass, salt, async (error, data) => {
             
                const newUser = await User.create({ fullname: name, email: email, password: data, user_type: "customer" });
                await newUser.save();
            })

            const payload = {
                fullname: name,
                email: email,
                password: pass
            }

            const token = jwt.sign(payload, process.env.jwtSecret);
            res.cookie("uuid", token, { httpOnly: true });

            return res.status(201).json({
                "token": token,
                "authenticate": true
            });
        }

    } catch (error) {
        return res.status(500).jsonp({
            "error": "Internal Server error",
        });
    }
}


const Login = async (req, res) => {

    const { email, pass } = req.body;
    try {

        const user = await User.findOne({ where: { email: email } });
        if (!user) {3
            return res.status(400).json({
                "message": "Email is not regstered",
            });
        }
        bcrypt.compare(pass, user.password,
            async (error, result) => {
                if (error) {
                    res.send(error);
                }
                if (!result)
                    return res.status(400).json({
                        "message": "Wrong password",
                    });

                if (result) {
                    return res.status(201).json({
                        "authenticate": true,
                    });
                }
            }
        );


    } catch (error) {
        return res.status(500).json({
            "error": "Internal Server error",
        });
    }

}


const allData = async (req, res) => {
    const token = req.token;

    try {
        
    const data = jwt.verify(token, process.env.jwtSecret);

    const udata = await User.findOne({ where: { email: data.email } });
    await udata.save();

    const brand = await Brand.findOne({ where: { id: udata.Brand_id } });
    await brand.save();

    const storeData = await Store.findAll({
        where: {Brand_id: brand.id}
    })

    let productData = [];

    for (let i = 0; i < storeData.length; i++) {
        let pdata = await Product.findAll({
            where:{
                Store_id: storeData[i].id
            }
        })
        productData.push(pdata);
    }
    
    return res.status(200).json({
        udata,
        brand,
        storeData,
        productData
    })

    } catch (error) {
        return res.status(500).json({
            "error": "Internal Server error",
        });
    }

}


const mainData = async(req, res) => {
    
    try {
    const brand = await Brand.findAll();

    const storeData = await Store.findAll()

    let productData = [];

    for (let i = 0; i < storeData.length; i++) {
        let pdata = await Product.findAll({
            where:{
                Store_id: storeData[i].id
            }
        })
        productData.push(pdata);
    }
    
    return res.status(200).json({
        brand,
        storeData,
        productData
    })

    } catch (error) {
        return res.status(500).json({
            "error": "Internal Server error",
        });
    }

}

module.exports = {
    SignUp,
    Login,
    allData,
    mainData
};