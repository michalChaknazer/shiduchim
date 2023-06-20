const mongoose = require('mongoose');
const Matchmaker = require("../models/MatchmakerModel");


const registerMatchmaker = async (req, res, next) => {
    try {
        const { firstName, lastName, phone, livingPlace, age, email } = req.body;
        if (!(firstName && lastName && phone && livingPlace && age && email)) {
            return res.status(400).json({ message: "יש למלא את כל שדות החובה" });
        }
        const matchmakerExist = await Matchmaker.findOne({ email });

        if (matchmakerExist) {
            return res.status(400).json({ message: "שדכן זה כבר קיים במערכת" });
        }
        else {
            const newMatchmaker = new Matchmaker({
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                livingPlace: livingPlace,
                age: age,
                email: email
            })
            await newMatchmaker.save();
            res.status(201).json({ message: "נרשמת בהצלחה! פרטיך נבדקים במערכת, במידה והתקבלת תקבלי סיסמא למייל.", newMatchmaker: newMatchmaker })
        }

    }
    catch (err) {
        next(err)
    }

}

const enterWithNameAndPassword = async (req, res, next) => {
    try {
        //עשיתי פונקצית לוגין בקובץ אחר
    }
    catch (err) {
        next(err)
    }

}
const getAllUsersCards = async (req, res, next) => {
    try {

    }
    catch (err) {
        next(err)
    }

}
const exitFromProfile = async (req, res, next) => {
    try {

    }
    catch (err) {
        next(err)
    }

}
const deleteFromCart = async (req, res, next) => {
    try {

    }
    catch (err) {
        next(err)
    }

}
const AddToCart = async (req, res, next) => {
    try {

    }
    catch (err) {
        next(err)
    }

}
const printQuestionPage = async (req, res, next) => {
    try {

    }
    catch (err) {
        next(err)
    }

}
const sendMessageToManager = async (req, res, next) => {
    try {

    }
    catch (err) {
        next(err)
    }

}
const sendLinkOfWebsite = async (req, res, next) => {
    try {

    }
    catch (err) {
        next(err)
    }

}
const sendQuestionPageToManager = async (req, res, next) => {
    try {

    }
    catch (err) {
        next(err)
    }

}
module.exports = {
    registerMatchmaker,
    enterWithNameAndPassword,
    getAllUsersCards,
    exitFromProfile,
    deleteFromCart,
    AddToCart,
    printQuestionPage,
    sendMessageToManager,
    sendLinkOfWebsite,
    sendQuestionPageToManager,
}